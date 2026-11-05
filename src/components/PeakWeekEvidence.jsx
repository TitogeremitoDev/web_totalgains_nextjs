import { Wheat, Droplets, Sparkles } from "lucide-react";

/**
 * PeakWeekEvidence — Lo que hacen los culturistas naturales en la peak week frente
 * a lo que recomiendan las revisiones. Cifras leídas en el texto completo
 * (5-nov-2026):
 *  - Chappell y Simper 2018 (Sports 6(4):126), tabla 2, 81 competidores: hidratos
 *    recorte 64,2 % y carga 82,7 %; agua carga 65,4 % y recorte 32,1 %; sal recorte
 *    13,6 % y carga 18,5 %; solo 5 (6,2 %) siguieron su dieta normal.
 *  - Roberts y colaboradores 2020: 94 % cambia su comida esa semana; recomiendan no
 *    recortar agua, sal ni hidratos; carga de hidratos viable si está lo bastante
 *    magro; bajar el agua reduce el agua del músculo y dificulta el bombeo.
 *  - Escalante y colaboradores 2021: estudio de 7 atletas (Mitchell y otros), los 3
 *    que tocaron la sal tuvieron resultados irregulares y no lo repetirían.
 */

const filas = [
  {
    icon: Wheat,
    nombre: "Hidratos",
    barras: [
      { etiqueta: "Los cargan", valor: 82.7, texto: "82,7 %", color: "#8fa4f5" },
      { etiqueta: "Los recortan", valor: 64.2, texto: "64,2 %", color: "#fa709a" },
    ],
    dice: "No recortarlos. Cargarlos puede tener sentido si el atleta ya está lo bastante magro, y solo después de haberlo probado.",
  },
  {
    icon: Droplets,
    nombre: "Agua",
    barras: [
      { etiqueta: "La cargan", valor: 65.4, texto: "65,4 %", color: "#8fa4f5" },
      { etiqueta: "La recortan", valor: 32.1, texto: "32,1 %", color: "#fa709a" },
    ],
    dice: "No recortarla. Beber menos puede quitar agua del músculo y bajar el volumen de sangre, y eso complica el bombeo antes de subir.",
  },
  {
    icon: Sparkles,
    nombre: "Sal",
    barras: [
      { etiqueta: "La cargan", valor: 18.5, texto: "18,5 %", color: "#8fa4f5" },
      { etiqueta: "La recortan", valor: 13.6, texto: "13,6 %", color: "#fa709a" },
    ],
    dice: "No recortarla. En un estudio con 7 atletas, los que jugaron con la sal tuvieron resultados irregulares y dijeron que no lo repetirían.",
  },
];

export default function PeakWeekEvidence() {
  return (
    <section
      aria-label="Peak week en culturismo natural: lo que hacen los competidores con hidratos, agua y sal frente a lo que recomiendan las revisiones, que es no recortar ninguno de los tres"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Lo que se hace y lo que se recomienda
      </h3>
      <p style={{ margin: "0 0 20px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Encuesta a 81 culturistas naturales británicos sobre su última semana.
      </p>

      <div style={{ textAlign: "center", marginBottom: 22 }}>
        <p style={{ margin: 0, fontSize: "2.6rem", fontWeight: 800, color: "#fa709a", lineHeight: 1.1 }}>94 %</p>
        <p style={{ margin: "4px 0 0", fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary,#fff)", lineHeight: 1.4 }}>
          cambia su comida esa semana. Solo 5 de 81 siguieron su dieta normal.
        </p>
      </div>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {filas.map((f) => {
          const Icon = f.icon;
          return (
            <li
              key={f.nombre}
              style={{
                display: "flex", flexWrap: "wrap", gap: "14px 22px", padding: "16px 16px 18px",
                background: "rgba(102,126,234,0.05)", border: "1px solid rgba(102,126,234,0.18)", borderRadius: 14,
              }}
            >
              <div style={{ flex: "1 1 260px", minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, color: "#8fa4f5" }}>
                  <Icon size={17} />
                  <p style={{ margin: 0, fontSize: "0.98rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{f.nombre}</p>
                </div>
                {f.barras.map((b) => (
                  <div key={b.etiqueta} style={{ marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: "0.78rem", color: "var(--text-secondary,#bbb)", marginBottom: 3 }}>
                      <span>{b.etiqueta}</span>
                      <strong style={{ color: "var(--text-primary,#fff)" }}>{b.texto}</strong>
                    </div>
                    <div aria-hidden="true" style={{ height: 8, borderRadius: 999, background: "rgba(143,164,245,0.12)", overflow: "hidden" }}>
                      <div style={{ width: `${b.valor}%`, height: "100%", borderRadius: 999, background: b.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ flex: "1 1 300px", minWidth: 0, alignSelf: "center" }}>
                <p style={{ margin: "0 0 4px", fontSize: "0.7rem", fontWeight: 800, color: "#22c55e", textTransform: "uppercase", letterSpacing: 0.6 }}>Qué recomiendan las revisiones</p>
                <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-primary,#fff)", lineHeight: 1.55 }}>{f.dice}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Los porcentajes no suman 100 porque muchos combinan estrategias en la misma semana. Datos: Chappell y Simper (2018). Recomendaciones: Roberts y colaboradores (2020) y Escalante y colaboradores (2021).
      </p>
    </section>
  );
}
