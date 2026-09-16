import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  service?: string;
  source?: "contact" | "quote";
}

const MONTHS_SV = [
  "januari", "februari", "mars", "april", "maj", "juni",
  "juli", "augusti", "september", "oktober", "november", "december",
];

function formatSwedishDateTime(date: Date): string {
  const day = date.getDate();
  const month = MONTHS_SV[date.getMonth()];
  const year = date.getFullYear();
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${day} ${month} ${year} kl. ${hh}:${mm}`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(
  name: string,
  email: string,
  phone: string,
  message: string,
  service: string | undefined,
  source: string,
  dateStr: string,
  submissionId: string,
): string {
  const serviceRow = service
    ? `<tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Tjänst:</span>
          <span style="color: #1f2937;">${escapeHtml(service)}</span>
        </td>
      </tr>`
    : "";

  const sourceLabel = source === "quote" ? "Offertförfrågan" : "Kontaktförfrågan";

  return `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sourceLabel}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); overflow: hidden;">
          <tr>
            <td style="padding: 40px;">
              <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #000000;">${sourceLabel}</h1>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #6b7280;">${escapeHtml(dateStr)}</p>

              <table role="presentation" style="width: 100%; background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Namn:</span>
                    <span style="color: #1f2937;">${escapeHtml(name)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">E-post:</span>
                    <a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Telefon:</span>
                    <a href="tel:${escapeHtml(phone)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(phone)}</a>
                  </td>
                </tr>
                ${serviceRow}
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Meddelande:</span>
                    <p style="margin: 0; color: #1f2937; white-space: pre-wrap; line-height: 1.5;">${escapeHtml(message)}</p>
                  </td>
                </tr>
              </table>

              <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
                <p style="margin: 0; font-size: 14px; color: #1e40af;">
                  <strong>Submission ID:</strong> ${escapeHtml(submissionId)}
                </p>
              </div>

              <p style="margin: 0; font-size: 12px; color: #6b7280; line-height: 1.5;">
                Detta meddelande skickades automatiskt från kontaktformuläret på din webbplats.
                Svara direkt på detta e-postmeddelande för att kontakta kunden.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const RECIPIENT_EMAIL = "Info@jmaleri.se";

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY är inte konfigurerad." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body: ContactPayload = await req.json();
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const message = (body.message || "").trim();
    const service = body.service ? (body.service).trim() : undefined;
    const source = body.source || "contact";

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "Alla fält är obligatoriska." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Ogiltig e-postadress." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (name.length > 200 || phone.length > 50 || message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Ett eller flera fält är för långa." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const submissionId = crypto.randomUUID();
    const now = new Date();
    const dateStr = formatSwedishDateTime(now);
    const subject = `"${source === "quote" ? "Offertförfrågan" : "Kontaktförfrågan"}" från ${name}`;

    const html = buildEmailHtml(
      name, email, phone, message, service, source, dateStr, submissionId,
    );

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Kontaktformulär <info@contact.bgbygger.se>",
        to: [RECIPIENT_EMAIL],
        subject,
        html,
        reply_to: email,
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      console.error("Resend API error:", resendResponse.status, errText);
      return new Response(
        JSON.stringify({ error: "Kunde inte skicka e-post. Försök igen senare." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const resendData = await resendResponse.json();

    return new Response(
      JSON.stringify({ success: true, submissionId, messageId: resendData.id }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Ett oväntat fel uppstod." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
