/**
 * RmRepsTable — La tabla clásica de porcentaje del 1RM y repeticiones, y lo que
 * cambia el meta-análisis de 2024. Cifras leídas en el texto completo (27-nov-2026):
 *  - Tabla clásica: Sheppard y Triplett, en Haff y Triplett (eds.), Essentials of
 *    Strength Training and Conditioning, 4.ª ed., NSCA, 2016 (reproducida como
 *    Table 1 en Nuzzo 2024): 100→1, 95→2, 93→3, 90→4, 87→5, 85→6, 83→7, 80→8,
 *    77→9, 75→10, 70→11, 67→12, 65→15.
 *  - Nuzzo, Pinto, Nosaka y Steele 2024 (Sports Med 54(2):303-321): 952 pruebas,
 *    7.289 personas, 269 estudios. Modelo general: ≈5 reps al 90 % y ≈15 al 70 %.
 *    Press de banca: ≈4, ≈9 y ≈14 al 90, 80 y 70 %. Prensa: ≈9, ≈13 y ≈19.
 *    Desviación entre personas: 2,51 reps al 80 % y 4,36 al 60 %.
 */

const clasica = [
  [100, 1], [95, 2], [93, 3], [90, 4], [87, 5], [85, 6], [83, 7], [80, 8], [77, 9], [75, 10], [70, 11], [67, 12], [65, 15],
];

const nuevas = [
  { color: "#8fa4f5", nombre: "Tabla clásica", valores: ["4", "8", "11"] },
  { color: "#22c55e", nombre: "Press de banca (2024)", valores: ["≈4", "≈9", "≈14"] },
  { color: "#fa709a", nombre: "Prensa de piernas (2024)", valores: ["≈9", "≈13", "≈19"] },
];

export default function RmRepsTable() {
  return (
    <section
      aria-label="Tabla de porcentajes del 1RM y repeticiones: la tabla clásica de la NSCA del 100 al 65 % y las repeticiones que da un meta-análisis de 2024 para press de banca y prensa al 90, 80 y 70 %"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Cuántas repeticiones salen a cada porcentaje
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        La tabla clásica de la NSCA: repeticiones máximas con cada porcentaje del 1RM.
      </p>

      <ul style={{ listStyle: "none", margin: "0 0 26px", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        {clasica.map(([pct, reps]) => (
          <li key={pct} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ flex: "0 0 52px", fontSize: "0.86rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{pct} %</span>
            <div aria-hidden="true" style={{ flex: 1, minWidth: 0, height: 10, borderRadius: 999, background: "rgba(143,164,245,0.12)", overflow: "hidden" }}>
              <div style={{ width: `${(reps / 15) * 100}%`, height: "100%", borderRadius: 999, background: "#8fa4f5" }} />
            </div>
            <span style={{ flex: "0 0 64px", fontSize: "0.82rem", color: "var(--text-secondary,#bbb)", textAlign: "right" }}>
              <strong style={{ color: "var(--text-primary,#fff)" }}>{reps}</strong> {reps === 1 ? "rep" : "reps"}
            </span>
          </li>
        ))}
      </ul>

      <h4 style={{ margin: "0 0 6px", fontSize: "1rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Lo que cambia el estudio de 2024
      </h4>
      <p style={{ margin: "0 0 16px", textAlign: "center", fontSize: "0.84rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Repeticiones al 90 %, al 80 % y al 70 % del 1RM, con datos de 7.289 personas.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {nuevas.map((n) => (
          <li
            key={n.nombre}
            style={{
              flex: "1 1 230px", minWidth: 0, padding: "14px 16px 16px",
              background: `linear-gradient(180deg, ${n.color}12 0%, ${n.color}05 100%)`,
              border: `1px solid ${n.color}44`, borderRadius: 14,
            }}
          >
            <p style={{ margin: "0 0 10px", fontSize: "0.78rem", fontWeight: 800, color: n.color, textTransform: "uppercase", letterSpacing: 0.5 }}>{n.nombre}</p>
            <div style={{ display: "flex", gap: 8 }}>
              {["90 %", "80 %", "70 %"].map((p, i) => (
                <div key={p} style={{ flex: 1, minWidth: 0, textAlign: "center" }}>
                  <p style={{ margin: 0, fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.2 }}>{n.valores[i]}</p>
                  <p style={{ margin: "2px 0 0", fontSize: "0.72rem", color: "var(--text-secondary,#aaa)" }}>al {p}</p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Son medias. Al 80 %, la diferencia normal entre dos personas es de unas 2,5 repeticiones arriba o abajo. Fuentes: NSCA (2016) y Nuzzo y colaboradores (2024).
      </p>
    </section>
  );
}
