import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function About() {
  usePageTitle(
    'Om J Måleri Åhus | Måleri och tapetsering i Åhus',
    'Läs om J Måleri Åhus. Vi utför allt inom invändigt och utvändigt måleri, tapetsering, spackling och fasadrenovering i Åhus/Kristianstad med omnejd.'
  );
  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO HEADER ────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3G5LlmMYORSdAk8SxzXrK2S0Is5%2Fhf_20260828_123821_ab6a265b-5fd9-4a34-b213-ad7f9c40fe66.png&w=1920&q=85")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        paddingTop: '150px',
        paddingBottom: '70px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.72) 100%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}>
                Om J Måleri Åhus
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.08rem', margin: '0 auto', maxWidth: '640px', lineHeight: 1.6 }}>
                Utför allt inom invändigt och utvändigt måleri, tapetsering och renovering med yrkesstolthet i Åhus/Kristianstad med omnejd.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: ABOUT STORY & HISTORY ─────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '100px 0' }}>
        <div style={{ ...container, maxWidth: '960px' }}>
          <div className="about-content-grid" style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '48px',
            alignItems: 'start',
          }}>

            {/* Left: Company Image */}
            <ScrollReveal animation="scale-in" easing="spring">
              <div style={{
                position: 'sticky',
                top: '120px',
                display: 'flex',
                justifyContent: 'center',
              }}>
                <img
                  src={images.about.hero.url || '/about-us.jpg'}
                  alt="J Måleri Åhus"
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    maxWidth: '260px',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    padding: '0',
                    display: 'block',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                    border: '1px solid #e2e8f0',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Text content */}
            <div>
              <ScrollReveal animation="blur-in">
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 3.4vw, 2.7rem)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.03em',
                  margin: '0 0 20px 0',
                }}>
                  Professionellt måleri med passion, precision och yrkesstolthet
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                    fontWeight: 500,
                  }}>
                    J Måleri Åhus erbjuder ett komplett utbud av tjänster inom invändigt och utvändigt måleri, tapetsering, spackling och fasadrenovering. Med bas i Åhus verkar vi i Kristianstad, Yngsjö, Degeberga, Bromölla och närområdet för både privatpersoner och företag.
                  </p>
                  
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-dark)', margin: '28px 0 12px 0' }}>
                    Hemligheten bakom ett perfekt resultat – noggrant underarbete
                  </h3>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 16px 0',
                  }}>
                    Ett vackert och hållbart måleriarbete handlar till största delen om vad som görs innan färgen stryks på. Vi lägger stor omsorg vid spackling, slipning, grundmålning och noggrann maskering så att slutresultatet blir jämnt och knivskarpt.
                  </p>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 24px 0',
                  }}>
                    När du anlitar J Måleri Åhus får du en trygg kontaktperson genom hela projektet. Vi sätter stor ära i att hålla utlovade tider, täcka och lämna snyggt och städat efter oss samt leverera resultat som håller i många år framöver.
                  </p>

                  {/* Founder Quote Card */}
                  <div style={{
                    background: 'rgba(194, 132, 71, 0.08)',
                    borderLeft: '4px solid var(--color-primary)',
                    padding: '24px 28px',
                    borderRadius: '0 16px 16px 0',
                    margin: '32px 0 36px 0',
                  }}>
                    <p style={{
                      color: 'var(--color-text-dark)',
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      lineHeight: 1.7,
                      margin: '0 0 10px 0',
                    }}>
                      "Vi utför alla måleriuppdrag med största yrkesstolthet. Med personlig service, noggrant underarbete och högkvalitativa färgval ser vi till att dina ytor håller och ser fantastiska ut i många år framöver."
                    </p>
                    <span style={{
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'block',
                    }}>
                      Joakim, J Måleri Åhus
                    </span>
                  </div>

                  <Button variant="primary" size="lg" href="/kontakt">
                    Kontakta oss för rådgivning
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION E: CTA ────────────────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 768px) {
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-content-grid img {
            max-width: 220px !important;
            margin: 0 auto;
          }
        }
      `}</style>
    </main>
  );
}
