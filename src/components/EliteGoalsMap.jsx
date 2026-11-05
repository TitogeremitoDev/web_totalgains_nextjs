import { CalendarRange, TrendingDown, LineChart, Utensils, HeartPulse, Flame, ClipboardCheck, Sunrise } from "lucide-react";

/**
 * EliteGoalsMap — Cada objetivo de una preparación de competición, al lado de la
 * función del Modo Elite de TotalGains que ayuda a cumplirlo. Comprobado el
 * 5-nov-2026 en el changelog de la app (Modo Elite renovado en la 1.3.41, rutina
 * temporal con vuelta en la 1.3.27), en las capturas reales y en el modelo
 * Competition del backend. El Modo Elite lo tiene cualquier entrenador con
 * cualquier plan. Si alguna de estas pantallas cambia, este componente se queda viejo.
 */

const objetivos = [
  { icon: CalendarRange, color: "#4facfe", objetivo: "Llegar a tiempo", donde: "Planificar la temporada", texto: "Fases con cuenta atrás, y la rutina y la dieta de cada fase entran solas en su fecha." },
  { icon: TrendingDown, color: "#22c55e", objetivo: "Bajar al ritmo adecuado", donde: "Corte de peso", texto: "Calcula cuánto hace falta bajar por semana y lo marca como cómodo, exigente o agresivo." },
  { icon: LineChart, color: "#eab308", objetivo: "Decidir con medias, no con un mal día", donde: "Peso hacia la tarima", texto: "Gráfica con la media de 7 días y lo que queda hasta el stage." },
  { icon: Utensils, color: "#8fa4f5", objetivo: "Comida y entreno de cada fase", donde: "Programa a fecha", texto: "Dieta y rutina preparadas con antelación y editables hasta la víspera." },
  { icon: HeartPulse, color: "#fa709a", objetivo: "Ver pronto cómo está", donde: "Vitales y Analíticas", texto: "Pulso, tensión y glucosa con sus gráficas, y aviso cuando el atleta sube una analítica." },
  { icon: Flame, color: "#fa709a", objetivo: "Una peak week sin sorpresas", donde: "Citas y avisos", texto: "Cita de ensayo, dieta del ensayo a fecha y aviso a los dos cuando empieza la semana." },
  { icon: ClipboardCheck, color: "#a78bfa", objetivo: "Que no se olvide nada", donde: "Checklist y Logística del stage", texto: "Tareas con contador y todo lo del día por escrito: pesaje, comida, bañador y bronceador." },
  { icon: Sunrise, color: "#8fa4f5", objetivo: "Aterrizar después", donde: "Dieta a fecha e historial", texto: "La dieta de después ya programada, y la competición cerrada con su puesto y tus notas." },
];

export default function EliteGoalsMap() {
  return (
    <section
      aria-label="Ocho objetivos de una preparación de competición y la función del Modo Elite de TotalGains que ayuda a cumplir cada uno"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Cada objetivo, dentro de la app
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Lo que pide una buena preparación, al lado de lo que hace el Modo Elite.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {objetivos.map((o) => {
          const Icon = o.icon;
          return (
            <li
              key={o.objetivo}
              style={{
                flex: "1 1 320px", minWidth: 0, display: "flex", gap: 12, padding: "14px 14px 16px",
                background: `linear-gradient(180deg, ${o.color}12 0%, ${o.color}05 100%)`,
                border: `1px solid ${o.color}44`, borderRadius: 14,
              }}
            >
              <div
                style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: `${o.color}22`, border: `1px solid ${o.color}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: o.color, flexShrink: 0,
                }}
              >
                <Icon size={17} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: "0.94rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{o.objetivo}</p>
                <p style={{ margin: "2px 0 6px", fontSize: "0.76rem", fontWeight: 700, color: o.color, lineHeight: 1.4 }}>{o.donde}</p>
                <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{o.texto}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Incluido en todos los planes, también en el gratuito de 5 atletas. La app te da los datos a tiempo; las decisiones siguen siendo tuyas.
      </p>
    </section>
  );
}
