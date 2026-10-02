import { Wand2, Layers, LineChart, Gauge } from "lucide-react";

/**
 * VolumeWorkflowTG — Dónde ve el entrenador cada número del artículo de volumen
 * dentro de TotalGains. Cada paso está comprobado en el código de la app
 * (2-oct-2026):
 *  - Generador IA: chip "X-Y series/semana · A-B por sesión" en AIGenerateModal.
 *  - Resumen de rutina: series por día y "Series por músculo" en
 *    routines-library (cuenta por exercise.musculo = recuento directo).
 *  - Progreso: minigráfica de 4 semanas y orden "Peor tendencia" sobre
 *    totalVolume (kilos × repeticiones), semana actual frente a la anterior.
 *  - RIR por serie: chip al atleta y señal "RIR sobrado" en la ficha del coach.
 * Si alguna de estas pantallas cambia, este componente se queda viejo.
 */

const pasos = [
  {
    icon: Wand2,
    color: "#8fa4f5",
    paso: "Planificar",
    donde: "Generador de rutinas con IA",
    texto: "Eliges nivel, enfoque, ejercicios por día y series por ejercicio, y antes de generar ves cuántas series suma la semana y cada sesión. También se lo puedes escribir en una frase.",
  },
  {
    icon: Layers,
    color: "#a78bfa",
    paso: "Revisar",
    donde: "Resumen de cada rutina",
    texto: "Series por día y series por músculo, contadas por el músculo principal de cada ejercicio. Súmale la mitad de las indirectas y tienes la cifra de la escalera.",
  },
  {
    icon: LineChart,
    color: "#fa709a",
    paso: "Seguir",
    donde: "Pantalla de Progreso",
    texto: "Cada atleta con la minigráfica de su volumen de trabajo de las últimas 4 semanas. Ordena por «Peor tendencia» y arriba salen los que más han bajado respecto a la semana anterior.",
  },
  {
    icon: Gauge,
    color: "#4facfe",
    paso: "Ajustar",
    donde: "RIR por serie",
    texto: "Marcas cuántas repeticiones debe dejar en recámara cada serie. Si le sobran, la app le sugiere a él subir peso y a ti te lo señala en su progreso.",
  },
];

export default function VolumeWorkflowTG() {
  return (
    <section
      aria-label="Dónde ve el entrenador cada número del volumen de entrenamiento en TotalGains: generador de rutinas con IA, resumen de series por músculo, pantalla de progreso y RIR por serie"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Dónde ves cada número en TotalGains
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Del plan al ajuste, con 25 atletas y sin una hoja de cálculo al lado.
      </p>

      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {pasos.map((p, i) => {
          const Icon = p.icon;
          return (
            <li
              key={p.paso}
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
                <div style={{ minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: "0.68rem", fontWeight: 700, color: p.color, textTransform: "uppercase", letterSpacing: 0.6 }}>
                    {i + 1}. {p.paso}
                  </p>
                  <p style={{ margin: "1px 0 0", fontSize: "0.92rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{p.donde}</p>
                </div>
              </div>
              <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{p.texto}</p>
            </li>
          );
        })}
      </ol>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Todo esto viene en todos los planes, también en el gratuito de 5 atletas. Ninguna función se desbloquea pagando más: entre planes solo cambia cuántos atletas llevas y el nivel de soporte.
      </p>
    </section>
  );
}
