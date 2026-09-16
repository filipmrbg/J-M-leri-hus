import { useState } from 'react';
import { Phone, MapPin, Mail, ShieldCheck, Send, Loader2, CheckCircle, AlertCircle, Clock, Award } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const faqItems = [
  {
    question: 'Kostar platsbesöket något?',
    answer: 'Nej, platsbesök och offert är alltid kostnadsfritt. Vi besöker ditt hem eller din fastighet, kollar underlag och förutsättningar och tar fram ett tydligt prisförslag helt utan förbindelser.',
  },
  {
    question: 'Hur snabbt kan ni påbörja måleriarbetet?',
    answer: 'Det styrs av projektets storlek samt säsong och planering. Mindre invändiga jobb kan vi ofta påbörja inom 1–2 veckor, medan större fasadarbeten planeras in under utomhussäsongen.',
  },
  {
    question: 'Fungerar ROT avdrag för era måleritjänster?',
    answer: 'Ja, för godkända måleri- och tapetseringsarbeten i din bostad drar vi av ROT avdraget på 30 % av arbetskostnaden direkt på fakturan.',
  },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  background: '#fafafa',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-family)',
  color: 'var(--color-text-dark)',
  outline: 'none',
  boxSizing: 'border-box',
  marginBottom: '16px',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  display: 'block',
};

function focusInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = 'var(--color-primary)';
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(194, 132, 71, 0.15)';
}
function blurInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = '#e5e7eb';
  e.currentTarget.style.boxShadow = 'none';
}

export default function Contact() {
  usePageTitle(
    'Kontakta J Måleri Åhus | Åhus & Kristianstad',
    'Kontakta J Måleri Åhus. Vi utför allt inom invändigt och utvändigt måleri, tapetsering, spackling och fasadmålning i Åhus/Kristianstad med omnejd. Ring 076-889 97 16.'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ name, email, phone, message, service, source: 'quote' }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || 'Något gick fel.');
      }
      setStatus('success');
      setName(''); setEmail(''); setPhone(''); setService(''); setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Något gick fel.');
    }
  };

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(https://cdn.midjourney.com/6e079fd3-e098-4621-94e1-2dca52b0df2a/0_0.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        paddingTop: '150px',
        paddingBottom: '70px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.72) 100%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="blur-in">
            <h1 style={{
              color: 'var(--color-white)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}>
              Kontakta oss
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150}>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.08rem', maxWidth: '600px', marginInline: 'auto', lineHeight: 1.6 }}>
              Fyll i formuläret nedan och beskriv vad du vill ha hjälp med så återkommer vi med en specificerad kalkyl inom 24 timmar.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION B: CONTACT INFO + FORM ───────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '80px 0' }}>
        <div style={container}>
          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: '35% 65%',
            gap: '50px',
            alignItems: 'start',
          }}>

            {/* Left: Contact info */}
            <ScrollReveal animation="fade-right" duration={0.8}>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                margin: '0 0 20px 0',
                lineHeight: 1.2,
              }}>
                Så når du oss
              </h2>
              <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 40px 0' }}>
                Du kan nå oss via formuläret, telefon eller e-post. Oavsett om det gäller inomhusmålning, tapetsering eller fasadmålning hjälper vi dig gärna.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px', height: '48px', minWidth: '48px',
                    background: 'rgba(194, 132, 71, 0.1)', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Phone size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>Telefon</p>
                    <a href="tel:0768899716" style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}>
                      076-889 97 16
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px', height: '48px', minWidth: '48px',
                    background: 'rgba(194, 132, 71, 0.1)', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Mail size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>E-post</p>
                    <a href="mailto:Info@jmaleri.se" style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}>
                      Info@jmaleri.se
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px', height: '48px', minWidth: '48px',
                    background: 'rgba(194, 132, 71, 0.1)', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <MapPin size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>Plats & Område</p>
                    <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Bas i Åhus • Åhus/Kristianstad med omnejd
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px', height: '48px', minWidth: '48px',
                    background: 'rgba(194, 132, 71, 0.1)', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <ShieldCheck size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>Företagsinformation</p>
                    <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      J Måleri Åhus • Org.nr: 559546-9049 • Godkänd för F-skatt
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '40px' }}>
                {[
                  { icon: ShieldCheck, title: 'Garanti på utfört arbete', desc: 'Garanti på allt utfört måleriarbete enligt gällande branschstandard.' },
                  { icon: Clock, title: 'Snabba besked & tidsplan', desc: 'Specificerad offert inom 24 timmar och punktlig leverans.' },
                  { icon: Award, title: '30% ROT avdrag direkt', desc: 'Vi administrerar hela ROT avdraget direkt mot Skatteverket.' },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} style={{
                    background: 'var(--color-white)', borderRadius: '16px', padding: '22px 24px',
                    border: '1px solid #e5e7eb', display: 'flex', gap: '16px', alignItems: 'flex-start',
                  }}>
                    <div style={{
                      width: '44px', height: '44px', minWidth: '44px', borderRadius: '12px',
                      background: 'rgba(194, 132, 71, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={22} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-dark)' }}>{title}</h4>
                      <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: 1.55 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right: Form */}
            <ScrollReveal animation="fade-left" duration={0.8} delay={100}>
              <div style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: 'clamp(28px, 5vw, 44px)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                border: '1px solid #e2e8f0',
              }}>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
                  margin: '0 0 8px 0',
                }}>
                  Beskriv ditt måleriprojekt
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.92rem', margin: '0 0 28px 0', lineHeight: 1.6 }}>
                  Vi återkopplar vanligtvis samma eller nästkommande arbetsdag.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                        Ditt namn *
                      </label>
                      <input type="text" required placeholder="För- och efternamn" value={name}
                        onChange={(e) => setName(e.target.value)} style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                        Telefonnummer *
                      </label>
                      <input type="tel" required placeholder="070-000 00 00" value={phone}
                        onChange={(e) => setPhone(e.target.value)} style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      E-postadress *
                    </label>
                    <input type="email" required placeholder="din.epost@exempel.se" value={email}
                      onChange={(e) => setEmail(e.target.value)} style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      Typ av tjänst *
                    </label>
                    <select required value={service} onChange={(e) => setService(e.target.value)}
                      style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focusInput} onBlur={blurInput}>
                      <option value="">Välj tjänst...</option>
                      <option value="Invändigt Måleri & Spackling">Invändigt Måleri & Spackling</option>
                      <option value="Fasadmålning">Fasadmålning</option>
                      <option value="Tapetsering">Tapetsering</option>
                      <option value="Fönstermålning">Fönstermålning</option>
                      <option value="Trävård & Snickerier">Trävård & Snickerier</option>
                      <option value="Annat måleriarbete">Annat måleriarbete</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      Projektbeskrivning *
                    </label>
                    <textarea required rows={5} placeholder="Berätta om ytan, antal rum, om det gäller fasad, nuvarande skick och önskad tidsram..."
                      value={message} onChange={(e) => setMessage(e.target.value)} style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={focusInput} onBlur={blurInput} />
                  </div>

                  <button type="submit" disabled={status === 'sending'}
                    style={{
                      background: 'var(--color-primary)', color: '#ffffff', border: 'none',
                      padding: '16px 36px', borderRadius: 'var(--border-radius-pill)',
                      fontSize: '1rem', fontWeight: 700, cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      width: '100%', fontFamily: 'var(--font-family)',
                      boxShadow: '0 4px 16px rgba(194, 132, 71, 0.35)', transition: 'all 0.3s ease',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      opacity: status === 'sending' ? 0.7 : 1,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
                    {status === 'sending' ? (
                      <><Loader2 size={18} className="animate-spin" />Skickar...</>
                    ) : (
                      <><Send size={18} />Skicka offertförfrågan</>
                    )}
                  </button>

                  {status === 'success' && (
                    <div style={{
                      marginTop: '16px', padding: '14px 18px', borderRadius: '12px',
                      background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)',
                      display: 'flex', alignItems: 'center', gap: '10px',
                    }}>
                      <CheckCircle size={20} color="#16a34a" />
                      <span style={{ color: '#16a34a', fontSize: '0.9rem', fontWeight: 600 }}>
                        Tack för din förfrågan! Vi kontaktar dig inom 24 timmar.
                      </span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div style={{
                      marginTop: '16px', padding: '14px 18px', borderRadius: '12px',
                      background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)',
                      display: 'flex', alignItems: 'center', gap: '10px',
                    }}>
                      <AlertCircle size={20} color="#dc2626" />
                      <span style={{ color: '#dc2626', fontSize: '0.9rem', fontWeight: 600 }}>
                        {errorMsg || 'Något gick fel. Försök igen eller ring oss.'}
                      </span>
                    </div>
                  )}
                </form>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── SECTION C: FAQ ────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <FAQAccordion
            items={faqItems}
            title="Vanliga frågor om offerten"
            subtitle="Här hittar du svar på de vanligaste frågorna inför ditt måleriprojekt."
          />
        </div>
      </section>

      {/* ── SECTION D: CTA BANNER ──────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </main>
  );
}
