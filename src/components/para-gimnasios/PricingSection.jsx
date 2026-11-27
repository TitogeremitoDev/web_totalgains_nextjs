import { MAILTO } from "./datos";
import { Check, Phone } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   7. PRECIOS
   ─────────────────────────────────────────────────────────── */
export default function PricingSection() {
  const plans = [
    {
      name: "Gym Starter",
      price: "149 €",
      period: "/ mes con IVA",
      tagline: "Gimnasios pequeños con menos de 100 socios activos",
      features: [
        "Hasta 100 socios activos",
        "Coaches ilimitados",
        "Multi-coach con permisos granulares",
        "Clases con reserva + waitlist",
        "App marca blanca del gimnasio",
        "IA rutinas + nutrición incluida",
        "Base +240.000 alimentos en español",
        "Migración asistida en español",
        "Soporte por email <24h",
      ],
      featured: false,
    },
    {
      name: "Gym Pro",
      price: "199 €",
      period: "/ mes con IVA",
      tagline: "Gimnasios en crecimiento de 100 a 200 socios",
      features: [
        "De 100 a 200 socios activos",
        "Coaches ilimitados",
        "Todo lo del plan Gym Starter +",
        "Onboarding asistido prioritario (48-72h)",
        "Soporte por email <12h",
        "Panel supervisor avanzado con KPIs",
        "Prioridad en nuevas funcionalidades",
      ],
      featured: true,
    },
    {
      name: "Gym Elite",
      price: "249 €",
      period: "/ mes con IVA",
      tagline: "Gimnasios consolidados con más de 200 socios",
      features: [
        "Socios ilimitados (más de 200)",
        "Coaches ilimitados",
        "Todo lo del plan Gym Pro +",
        "Soporte VIP en español",
        "Sesión mensual con el fundador",
        "Roadmap personalizado con prioridad",
      ],
      featured: false,
    },
  ];

  return (
    <section id="precios" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div className="aparece" style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "var(--primary-light)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Precios
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
            Un precio claro, sin add-ons ocultos
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
            Una sola cifra mensual con TODO incluido. Sin permanencia.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {plans.map((p, i) => (
            <div
              className="aparece"
              key={p.name}
              style={{
                position: "relative",
                padding: 32,
                background: p.featured ? "rgba(102,126,234,0.08)" : "rgba(255,255,255,0.03)",
                border: p.featured
                  ? "2px solid rgba(102,126,234,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 24,
                boxShadow: p.featured ? "0 20px 60px rgba(102,126,234,0.15)" : "none",
              }}
          >
              {p.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--primary-gradient)",
                    color: "white",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    padding: "6px 14px",
                    borderRadius: 100,
                    letterSpacing: "0.5px",
                  }}
                >
                  RECOMENDADO
                </span>
              )}
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 6 }}>{p.name}</h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  marginBottom: 20,
                  minHeight: "2.4em",
                }}
              >
                {p.tagline}
              </p>
              <div style={{ marginBottom: 28 }}>
                <span
                  style={{
                    fontSize: "2.6rem",
                    fontWeight: 800,
                    background: "var(--primary-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {p.price}
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginLeft: 6 }}>
                  {p.period}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <Check size={16} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: 3 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#te-llamamos"
                className={p.featured ? "btn btn-gold" : "btn btn-secondary"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Phone size={16} /> Te llamamos
              </a>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: "0.85rem",
            marginTop: 32,
          }}
        >
          ¿Tu caso es especial (más de 500 socios, varias sedes, etc.)?{" "}
          <a href={MAILTO} style={{ color: "var(--primary-light)" }}>
            Escríbeme
          </a>{" "}
          y diseñamos un plan a medida.
        </p>
      </div>
    </section>
  );
}
