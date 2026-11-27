/**
 * RmFormulaCompare — Las dos fórmulas más usadas para estimar el 1RM, con lo que
 * da cada una para una serie de 100 kg. Aritmética comprobada (27-nov-2026):
 *  - Epley: peso × (1 + reps ÷ 30) → 3: 110,0 · 5: 116,7 · 8: 126,7 · 10: 133,3
 *  - Brzycki: peso × 36 ÷ (37 − reps) → 3: 105,9 · 5: 112,5 · 8: 124,1 · 10: 133,3
 * La app y la calculadora de TotalGains usan la de Epley (calculate1RM en la app).
 */

const filas = [
  { reps: 3, epley: 110.0, brzycki: 105.9 },
  { reps: 5, epley: 116.7, brzycki: 112.5 },
  { reps: 8, epley: 126.7, brzycki: 124.1 },
  { reps: 10, epley: 133.3, brzycki: 133.3 },
];
const TOPE = 140;
const kg = (n) => n.toFixed(1).replace(".", ",") + " kg";

export default function RmFormulaCompare() {
  return (
    <section
      aria-label="Fórmulas de Epley y Brzycki para estimar el 1RM y lo que da cada una con una serie de 100 kilos a 3, 5, 8 y 10 repeticiones"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Epley y Brzycki, con una serie de 100 kg
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        El 1RM que estima cada fórmula según las repeticiones que hagas.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
        {[
          { nombre: "Epley", formula: "peso × (1 + reps ÷ 30)", color: "#22c55e", nota: "La que usa la app de TotalGains" },
          { nombre: "Brzycki", formula: "peso × 36 ÷ (37 − reps)", color: "#8fa4f5", nota: "Algo más prudente con pocas repeticiones" },
        ].map((f) => (
          <div
            key={f.nombre}
            style={{
              flex: "1 1 260px", minWidth: 0, padding: "14px 16px 16px",
              background: `linear-gradient(180deg, ${f.color}12 0%, ${f.color}05 100%)`,
              border: `1px solid ${f.color}44`, borderRadius: 14,
            }}
          >
            <p style={{ margin: 0, fontSize: "0.72rem", fontWeight: 800, color: f.color, textTransform: "uppercase", letterSpacing: 0.6 }}>{f.nombre}</p>
            <p style={{ margin: "4px 0 6px", fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>1RM = {f.formula}</p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>{f.nota}</p>
          </div>
        ))}
      </div>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {filas.map((f) => (
          <li key={f.reps} style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <p style={{ margin: 0, flex: "0 0 74px", fontSize: "0.86rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>
              {f.reps} reps
            </p>
            <div style={{ flex: 1, minWidth: 0 }}>
              {[{ v: f.epley, c: "#22c55e", n: "Epley" }, { v: f.brzycki, c: "#8fa4f5", n: "Brzycki" }].map((b) => (
                <div key={b.n} style={{ display: "flex", alignItems: "center", gap: 8, margin: "3px 0" }}>
                  <div aria-hidden="true" style={{ flex: 1, minWidth: 0, height: 10, borderRadius: 999, background: "rgba(143,164,245,0.12)", overflow: "hidden" }}>
                    <div style={{ width: `${(b.v / TOPE) * 100}%`, height: "100%", borderRadius: 999, background: b.c }} />
                  </div>
                  <span style={{ flex: "0 0 128px", fontSize: "0.8rem", color: "var(--text-secondary,#bbb)" }}>
                    {b.n}: <strong style={{ color: "var(--text-primary,#fff)" }}>{kg(b.v)}</strong>
                  </span>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        A 10 repeticiones coinciden. Por debajo, Brzycki da unos kilos menos. Elige una y no la cambies: lo que importa es compararte contigo mismo.
      </p>
    </section>
  );
}
