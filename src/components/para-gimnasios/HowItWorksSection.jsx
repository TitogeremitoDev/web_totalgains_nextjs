/* ───────────────────────────────────────────────────────────
   4. CÓMO FUNCIONA — 3 pasos
   ─────────────────────────────────────────────────────────── */
export default function HowItWorksSection() {
  const steps = [
    {
      n: "01",
      title: "Hablamos",
      desc: "Me escribes un email contándome cómo es tu gimnasio (socios, coaches, qué buscas). Te respondo en menos de 24h con una propuesta clara.",
    },
    {
      n: "02",
      title: "Migramos en 3-5 días",
      desc: "Importamos tus socios desde Excel/Sheets/software antiguo, configuramos tu agenda de clases, montamos tus planes y cuotas y personalizamos la app con tu marca.",
    },
    {
      n: "03",
      title: "Lanzamos contigo",
      desc: "Formación a tu equipo de coaches, comunicación a tus socios y soporte en español durante las primeras semanas. Listo para crecer.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-darker) 100%)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
            Cómo funciona
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
            De Excel a plataforma profesional{" "}
            <span style={{ color: "var(--primary-light)" }}>en una semana</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((s, i) => (
            <div
              className="aparece pg-card-hover"
              key={s.n}
              style={{
                position: "relative",
                padding: 32,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(102,126,234,0.2)",
                borderRadius: 20,
              }}
          >
              <p
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  margin: "0 0 16px",
                  background: "var(--primary-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  opacity: 0.7,
                }}
              >
                {s.n}
              </p>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>
                {s.title}
              </h3>
              <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
