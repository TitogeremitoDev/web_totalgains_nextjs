import { Trophy, LineChart, RotateCcw, Shuffle, Gauge, Scale } from "lucide-react";

/**
 * RmWorkflowTG — Lo que hace TotalGains con el 1RM estimado de cada socio o
 * cliente. Comprobado el 27-nov-2026 en el código de la app (1.4.7) y en capturas
 * reales:
 *  - entreno.jsx: bloque «Tu progreso» al terminar (1RM est. frente a la semana
 *    pasada) y aviso de récord; fórmula de Epley.
 *  - calculateKPIs.js: indicadores «PRs» (récords por 1RM estimado) y «Carga Alta»
 *    (% de series con el 85 % o más del peso máximo usado en ese ejercicio).
 *  - assign-modal.jsx: «Mantener los pesos que ya movía» (de fábrica) o peso
 *    orientativo «≈» por 1RM estimado.
 *  - RoutineEditor.jsx: «Progreso por ejercicio» ajusta la carga con el 1RM
 *    estimado cuando el ejercicio lleva repeticiones distintas en cada día.
 * OJO: en Evolución NO hay una gráfica del 1RM en sí; no escribir eso.
 */

const pasos = [
  { icon: Trophy, color: "#eab308", titulo: "Al terminar cada entreno", donde: "Tu progreso", texto: "El socio ve su 1RM estimado frente a la semana pasada y, si bate un récord, la app se lo dice con el dato." },
  { icon: LineChart, color: "#22c55e", titulo: "Semana a semana", donde: "Evolución, indicadores PRs y Carga Alta", texto: "Sus récords por 1RM estimado y qué parte de sus series fueron pesadas, al 85 % o más de su mejor peso en ese ejercicio." },
  { icon: RotateCcw, color: "#4facfe", titulo: "Al estrenar rutina", donde: "Asignar rutina", texto: "Arranca con los kilos de su última vez o, si el entrenador lo prefiere, con un peso orientativo por 1RM marcado con «≈»." },
  { icon: Shuffle, color: "#a78bfa", titulo: "El mismo ejercicio en varios días", donde: "Progreso por ejercicio", texto: "Si lleva repeticiones distintas en cada día, la carga de referencia se ajusta sola con el 1RM estimado." },
  { icon: Gauge, color: "#fa709a", titulo: "Ajustar al día", donde: "RIR por serie", texto: "El entrenador marca cuántas repeticiones dejar en recámara en cada serie, y el socio lo ve al entrenar." },
  { icon: Scale, color: "#8fa4f5", titulo: "Kilos o libras", donde: "Unidad de peso", texto: "Quien entrena con discos en libras lo apunta en libras, y su entrenador lo ve igual." },
];

export default function RmWorkflowTG() {
  return (
    <section
      aria-label="Lo que hace TotalGains con el 1RM estimado: resumen al terminar el entreno, récords y carga alta en Evolución, peso orientativo al estrenar rutina, progreso por ejercicio, RIR por serie y kilos o libras"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        El 1RM de cada socio, calculado solo
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Sale de las series que apunta al entrenar, con la misma fórmula de la calculadora.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {pasos.map((p) => {
          const Icon = p.icon;
          return (
            <li
              key={p.titulo}
              style={{
                flex: "1 1 320px", minWidth: 0, display: "flex", gap: 12, padding: "14px 14px 16px",
                background: `linear-gradient(180deg, ${p.color}12 0%, ${p.color}05 100%)`,
                border: `1px solid ${p.color}44`, borderRadius: 14,
              }}
            >
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
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: "0.94rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{p.titulo}</p>
                <p style={{ margin: "2px 0 6px", fontSize: "0.76rem", fontWeight: 700, color: p.color, lineHeight: 1.4 }}>{p.donde}</p>
                <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{p.texto}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Igual para los socios de un gimnasio o un box que para los clientes de un entrenador personal, en la app con el logo y los colores de tu centro.
      </p>
    </section>
  );
}
