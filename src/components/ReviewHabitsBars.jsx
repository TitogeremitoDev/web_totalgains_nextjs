/**
 * ReviewHabitsBars — Cómo se usan las reseñas al elegir un negocio local.
 * Fuente: BrightLocal, Local Consumer Review Survey 2026 (publicado el
 * 11-feb-2026; panel representativo de 1.002 adultos de EE. UU. vía
 * SurveyMonkey), comprobado el 30-oct-2026 en
 * brightlocal.com/research/local-consumer-review-survey/. Son datos de
 * Estados Unidos: se presentan como orientación, no como cifra de España.
 */

const filas = [
  { pct: 97, texto: "lee reseñas antes de elegir un negocio local" },
  { pct: 89, texto: "espera que el negocio conteste a las reseñas" },
  { pct: 74, texto: "solo se fija en las reseñas de los últimos tres meses" },
  { pct: 68, texto: "solo elige negocios con 4 estrellas o más" },
  { pct: 31, texto: "solo elige negocios con 4,5 estrellas o más" },
];

export default function ReviewHabitsBars() {
  return (
    <section
      aria-label="Cómo usan las reseñas los consumidores según BrightLocal 2026 en Estados Unidos: el 97 por ciento las lee, el 89 por ciento espera respuesta del negocio, el 74 por ciento solo mira las de los últimos tres meses, el 68 por ciento exige 4 estrellas o más y el 31 por ciento, 4,5 o más"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Lo que mira quien lee tus reseñas
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Encuesta a 1.002 consumidores de Estados Unidos (BrightLocal, 2026). En España no hay un estudio igual de reciente: tómalo como orientación.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {filas.map(({ pct, texto }) => (
          <div key={texto}>
            <p style={{ margin: "0 0 5px", display: "flex", gap: 10, alignItems: "baseline", fontSize: "0.88rem", color: "var(--text-primary,#eee)", lineHeight: 1.4 }}>
              <strong style={{ minWidth: 48, fontSize: "1.05rem", whiteSpace: "nowrap", color: "#fff" }}>{pct} %</strong>{texto}
            </p>
            <div style={{ height: 10, borderRadius: 999, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
              <div style={{ width: `${pct}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #667eea 0%, #fa709a 100%)" }} />
            </div>
          </div>
        ))}
      </div>

      <p style={{ margin: "20px 0 0", textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        Tres ideas salen de aquí: que tengas reseñas, que sean recientes y que se vea que contestas. Veinte reseñas de hace dos años pesan menos que cinco de este trimestre (
        <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>BrightLocal, 2026</a>
        ).
      </p>
    </section>
  );
}
