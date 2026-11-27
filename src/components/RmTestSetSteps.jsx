import { Flame, Target, Gauge, NotebookPen } from "lucide-react";

/**
 * RmTestSetSteps — Cómo hacer la serie con la que se estima el 1RM, en cuatro
 * pasos. Apoyo (27-nov-2026): Reynolds, Gordon y Robergs 2006 (J Strength Cond Res
 * 20(3):584-592): con 70 personas, la serie de 5 repeticiones máximas fue la que
 * mejor predijo el 1RM (R² 0,993 en press de banca y 0,974 en prensa) y no conviene
 * usar más de 10 repeticiones en fórmulas lineales. El calentamiento y la técnica
 * son práctica habitual, no un dato del estudio.
 */

const pasos = [
  { icon: Flame, color: "#fa709a", titulo: "Calienta", texto: "Dos o tres series subiendo de peso, sin cansarte. La serie buena tiene que pillarte fresco." },
  { icon: Target, color: "#4facfe", titulo: "Elige un peso para 3 a 8 repeticiones", texto: "Cinco es lo ideal. Con más de 10, la estimación pierde precisión." },
  { icon: Gauge, color: "#eab308", titulo: "Llega cerca de tu límite", texto: "Para cuando no puedas hacer otra repetición con buena técnica. Si te sobraban cuatro, el 1RM saldrá bajo." },
  { icon: NotebookPen, color: "#22c55e", titulo: "Apunta peso y repeticiones", texto: "Solo cuentan las repeticiones completas. Con esos dos números ya puedes calcular." },
];

export default function RmTestSetSteps() {
  return (
    <section
      aria-label="Cómo hacer la serie para estimar el 1RM en cuatro pasos: calentar, elegir un peso para 3 a 8 repeticiones, llegar cerca del límite con buena técnica y apuntar peso y repeticiones"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        La serie que necesitas, en 4 pasos
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Una serie normal, bien hecha. No hace falta jugarse el máximo.
      </p>

      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {pasos.map((p, i) => {
          const Icon = p.icon;
          return (
            <li
              key={p.titulo}
              style={{
                flex: "1 1 190px", minWidth: 0, padding: "16px 16px 18px",
                background: `linear-gradient(180deg, ${p.color}12 0%, ${p.color}05 100%)`,
                border: `1px solid ${p.color}44`, borderRadius: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div
                  style={{
                    width: 32, height: 32, borderRadius: 9,
                    background: `${p.color}22`, border: `1px solid ${p.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: p.color, flexShrink: 0,
                  }}
                >
                  <Icon size={17} />
                </div>
                <p style={{ margin: 0, fontSize: "0.94rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>
                  {i + 1}. {p.titulo}
                </p>
              </div>
              <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{p.texto}</p>
            </li>
          );
        })}
      </ol>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        En un estudio con 70 personas, la serie de 5 repeticiones fue la que mejor predijo el 1RM, y los autores desaconsejan pasar de 10 (Reynolds y colaboradores, 2006).
      </p>
    </section>
  );
}
