import { Calendar, AlertTriangle } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   2. PROBLEMA — qué pasa SIN un software dedicado
   ─────────────────────────────────────────────────────────── */
export default function ProblemSection() {
  const problems = [
    {
      icon: <AlertTriangle size={22} />,
      title: "Excel + WhatsApp + Stripe manual",
      text: "Cada socio en una hoja diferente, conversaciones perdidas y cobros que persigues a final de mes.",
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Agenda dispersa entre 4 herramientas",
      text: "Google Calendar para clases, Notion para personales, papel para reservas presenciales. Imposible saber el aforo real.",
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Sin permisos: todos ven todo",
      text: "Tus coaches pueden ver facturación del gimnasio o clientes de otros coaches. Sin separación real de privacidad.",
    },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-darker)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="aparece" style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            El problema
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Por qué los gimnasios pequeños{" "}
            <span style={{ color: "var(--accent)" }}>se atascan a los 50 socios</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {problems.map((p, i) => (
            <div
              className="aparece pg-card-hover"
              key={i}
              style={{
                padding: 28,
                background: "rgba(250,112,154,0.05)",
                border: "1px solid rgba(250,112,154,0.18)",
                borderRadius: 20,
              }}
          >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(250,112,154,0.15)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {p.icon}
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>
                {p.title}
              </h3>
              <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
