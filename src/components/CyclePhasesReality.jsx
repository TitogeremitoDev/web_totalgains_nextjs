/**
 * CyclePhasesReality — Compara la plantilla teórica de 28 días de los libros con 4 ciclos
 * reales observados en 4 mujeres distintas. Cada fila es una escala 0-35 días con las
 * fases marcadas proporcionalmente. Ilustra por qué programar por plantilla no funciona.
 */

const SCALE_MAX = 35;

// Ciclo teórico (28 días) y 4 ejemplos reales observables (rango normal 21-35 días).
const cycles = [
  {
    label: "Plantilla de los libros",
    duration: 28,
    sub: "Lo que enseñan los cursos de coaching femenino",
    isTemplate: true,
    phases: [
      { name: "Menstrual",    days: 5,  color: "#ef4444" },
      { name: "Folicular",    days: 8,  color: "#f97316" },
      { name: "Ovulación",    days: 3,  color: "#eab308" },
      { name: "Lútea",        days: 12, color: "#8b5cf6" },
    ],
  },
  {
    label: "Clienta A",
    duration: 26,
    sub: "SPM de 6 días",
    phases: [
      { name: "Menstrual", days: 4, color: "#ef4444" },
      { name: "Folicular", days: 9, color: "#f97316" },
      { name: "Ovulación", days: 2, color: "#eab308" },
      { name: "Lútea",     days: 11, color: "#8b5cf6" },
    ],
  },
  {
    label: "Clienta B",
    duration: 31,
    sub: "Sin SPM notable",
    phases: [
      { name: "Menstrual", days: 6,  color: "#ef4444" },
      { name: "Folicular", days: 10, color: "#f97316" },
      { name: "Ovulación", days: 2,  color: "#eab308" },
      { name: "Lútea",     days: 13, color: "#8b5cf6" },
    ],
  },
  {
    label: "Clienta C",
    duration: 22,
    sub: "Ciclo corto habitual",
    phases: [
      { name: "Menstrual", days: 3, color: "#ef4444" },
      { name: "Folicular", days: 6, color: "#f97316" },
      { name: "Ovulación", days: 2, color: "#eab308" },
      { name: "Lútea",     days: 11, color: "#8b5cf6" },
    ],
  },
  {
    label: "Clienta D",
    duration: 34,
    sub: "Ciclo largo, SPM 8 días",
    phases: [
      { name: "Menstrual", days: 5,  color: "#ef4444" },
      { name: "Folicular", days: 13, color: "#f97316" },
      { name: "Ovulación", days: 3,  color: "#eab308" },
      { name: "Lútea",     days: 13, color: "#8b5cf6" },
    ],
  },
];

function CycleBar({ c }) {
  return (
    <div style={{ marginBottom: c.isTemplate ? 20 : 10 }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 6,
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "0.86rem",
              fontWeight: c.isTemplate ? 800 : 700,
              color: c.isTemplate ? "#eab308" : "var(--text-primary,#fff)",
            }}
          >
            {c.label}
          </span>
          <span style={{ marginLeft: 8, fontSize: "0.74rem", color: "var(--text-secondary,#888)" }}>
            {c.sub}
          </span>
        </div>
        <span style={{ fontSize: "0.78rem", color: "var(--text-secondary,#aaa)", whiteSpace: "nowrap" }}>
          <strong style={{ color: "var(--text-primary,#ddd)" }}>{c.duration}</strong> días
        </span>
      </div>

      <div
        style={{
          display: "flex",
          width: `${(c.duration / SCALE_MAX) * 100}%`,
          height: 14,
          borderRadius: 4,
          overflow: "hidden",
          border: c.isTemplate ? "1px dashed rgba(234,179,8,0.5)" : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {c.phases.map((p, i) => (
          <div
            key={i}
            title={`${p.name} · ${p.days}d`}
            style={{
              flex: p.days,
              background: `linear-gradient(180deg, ${p.color}dd, ${p.color})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function CyclePhasesReality() {
  const legendPhases = cycles[0].phases;
  return (
    <section
      aria-label="Comparación entre la plantilla teórica del ciclo menstrual de 28 días de los libros y 4 ciclos reales observados en 4 mujeres distintas"
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)",
        borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        La plantilla vs la realidad
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Rango normal de ciclo: <strong style={{ color: "var(--text-primary,#ddd)" }}>21-35 días</strong>. Cada fase varía en duración y síntomas.
      </p>

      {/* Legenda */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 12,
          marginBottom: 22,
        }}
      >
        {legendPhases.map((p, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.72rem",
              color: "var(--text-secondary,#aaa)",
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: 3, background: p.color, display: "inline-block" }} />
            {p.name}
          </span>
        ))}
      </div>

      {cycles.map((c) => (
        <CycleBar key={c.label} c={c} />
      ))}

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Programar por plantilla es programar para una mujer que no existe. Observar el ciclo real de cada clienta sí funciona.
      </p>
    </section>
  );
}
