/* ───────────────────────────────────────────────────────────
   8. ESCENARIOS REALES
   ─────────────────────────────────────────────────────────── */
export default function RealScenariosSection() {
  const scenarios = [
    {
      title: "Gimnasio de barrio, 80 socios, 3 entrenadores",
      desc: "El recepcionista gestiona altas y cobros (rol con permisos de facturación). Los 3 coaches programan rutinas/nutrición con IA y solo ven a sus clientes asignados. La dirección revisa retención y MRR desde el panel global.",
      price: "149 €/mes con IVA",
      plan: "Gym Starter",
    },
    {
      title: "Box CrossFit, 150 socios, 4 coaches",
      desc: "WOD diario programado por el headcoach, clases con aforo 12 personas y waitlist, bonos de 10 clases con caducidad, comunicación grupal por canal de gimnasio.",
      price: "199 €/mes con IVA",
      plan: "Gym Pro",
    },
    {
      title: "Centro consolidado, 280 socios, 6 coaches",
      desc: "3 salas con clases en paralelo, agenda compartida, marca blanca del centro y panel supervisor con KPIs por coach. Sesión mensual con el fundador para roadmap personalizado.",
      price: "249 €/mes con IVA",
      plan: "Gym Elite",
    },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-darker)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="aparece" style={{ textAlign: "center", marginBottom: 48 }}>
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
            Casos reales
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
            3 escenarios reales de uso
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {scenarios.map((s, i) => (
            <div
              className="aparece pg-card-hover"
              key={s.title}
              style={{
                padding: 28,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
              }}
          >
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 12, color: "var(--text-primary)" }}>
                {s.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 20, fontSize: "0.93rem", flex: 1 }}>
                {s.desc}
              </p>
              <div
                style={{
                  paddingTop: 16,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{s.plan}</span>
                <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--primary-light)" }}>{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
