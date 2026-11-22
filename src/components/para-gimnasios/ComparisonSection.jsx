import Link from "next/link";

/* ───────────────────────────────────────────────────────────
   6. COMPARATIVA con competidores
   ─────────────────────────────────────────────────────────── */
export default function ComparisonSection() {
  const rows = [
    { feature: "Idioma e interfaz", tg: "Español nativo", harbiz: "Español", virtuagym: "Multiidioma", trainerize: "Inglés" },
    { feature: "Multi-coach permisos granulares", tg: "✅ 4 booleanos", harbiz: "⚠️ Roles fijos", virtuagym: "⚠️ Roles fijos", trainerize: "⚠️ Roles fijos" },
    { feature: "Marca blanca del gimnasio", tg: "✅ Incluida", harbiz: "Add-on 30,24 €/mes", virtuagym: "✅ Incluida", trainerize: "✅ en Studio" },
    { feature: "Reservas + waitlist", tg: "✅ Incluido", harbiz: "✅", virtuagym: "✅", trainerize: "✅" },
    { feature: "IA rutinas + nutrición", tg: "✅ Sin add-on", harbiz: "Add-on Nutri AI 18,14 €/mes", virtuagym: "Limitada", trainerize: "Add-on $45/mes" },
    { feature: "Base +240.000 alimentos ES", tg: "✅ Incluida", harbiz: "❌", virtuagym: "Base genérica", trainerize: "MyFitnessPal USA" },
    { feature: "Cuotas y bonos recurrentes", tg: "✅ 0% comisión", harbiz: "✅", virtuagym: "Pasarela propia", trainerize: "Add-on $10/mes" },
    { feature: "Soporte en español", tg: "✅ < 24h", harbiz: "✅", virtuagym: "Multiidioma", trainerize: "❌ Inglés" },
    { feature: "Coste hasta 100 socios funcional", tg: "149 €/mes con IVA", harbiz: "~313 €/mes", virtuagym: "Bajo demanda", trainerize: "~352 €/mes" },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-darker)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="aparece" style={{ textAlign: "center", marginBottom: 40 }}>
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
            Comparativa
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
            TotalGains Gym vs el resto
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
            Datos verificados manualmente en webs oficiales a mayo de 2026.
          </p>
        </div>

        <div
          className="aparece"
          style={{
            overflowX: "auto",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            background: "rgba(255,255,255,0.02)",
          }}
      >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem", minWidth: 720 }}>
            <thead>
              <tr style={{ background: "rgba(102,126,234,0.08)" }}>
                <th style={{ padding: 14, textAlign: "left", color: "var(--text-secondary)", fontWeight: 600 }}>
                  Función
                </th>
                <th style={{ padding: 14, textAlign: "left" }}>
                  <span
                    style={{
                      background: "var(--primary-gradient)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 800,
                    }}
                  >
                    TotalGains
                  </span>
                </th>
                <th style={{ padding: 14, textAlign: "left", color: "var(--text-secondary)", fontWeight: 600 }}>
                  Harbiz
                </th>
                <th style={{ padding: 14, textAlign: "left", color: "var(--text-secondary)", fontWeight: 600 }}>
                  Virtuagym
                </th>
                <th style={{ padding: 14, textAlign: "left", color: "var(--text-secondary)", fontWeight: 600 }}>
                  Trainerize
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: 14, fontWeight: 600 }}>{r.feature}</td>
                  <td style={{ padding: 14, color: "var(--primary-light)" }}>{r.tg}</td>
                  <td style={{ padding: 14, color: "var(--text-secondary)" }}>{r.harbiz}</td>
                  <td style={{ padding: 14, color: "var(--text-secondary)" }}>{r.virtuagym}</td>
                  <td style={{ padding: 14, color: "var(--text-secondary)" }}>{r.trainerize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 14, textAlign: "center" }}>
          Comparativa editorial. Cada plataforma encaja con perfiles distintos. Ver{" "}
          <Link href="/blog/software-gimnasios-pequenos-boutique-2026/" prefetch={false} style={{ color: "var(--primary-light)" }}>
            análisis completo
          </Link>{" "}
          con trade-offs honestos.
        </p>
      </div>
    </section>
  );
}
