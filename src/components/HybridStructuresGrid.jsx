import { Layers, Zap, Repeat } from "lucide-react";

/**
 * HybridStructuresGrid — Las 3 estructuras posibles de entrenamiento híbrido
 * que un coach puede programar a un cliente. Refleja exactamente las 3 opciones
 * disponibles en la IA de rutinas de TotalGains (Resistencia aislada, Cardio intradía,
 * Alternado por oposición). Reutilizable en otros artículos de programación híbrida.
 */

const structures = [
  {
    key: "aislada",
    label: "Resistencia aislada",
    icon: Layers,
    color: "#22c55e",
    when: "Cliente que quiere ganar fuerza sin perder fondo. Volumen de cardio bajo (1 día/semana).",
    example: "Lun · Mar · Jue: fuerza · Sáb: 45 min Z2 + 4×3 min Z4",
    difficulty: "Fácil",
    difficultyColor: "#22c55e",
  },
  {
    key: "intradia",
    label: "Cardio intradía",
    icon: Zap,
    color: "#eab308",
    when: "Cliente con poco tiempo semanal. Cada sesión combina fuerza + cardio ligero al final.",
    example: "Lun-Vie: 40 min fuerza + 15-20 min Z2 en la misma sesión",
    difficulty: "Media",
    difficultyColor: "#eab308",
  },
  {
    key: "alternado",
    label: "Alternado (oposición)",
    icon: Repeat,
    color: "#f97316",
    when: "Cliente Hyrox o triatlón sprint. Volumen alto en ambos frentes, separación por día.",
    example: "Lun/Mié/Vie: fuerza · Mar/Jue/Sáb: cardio · Dom: descanso",
    difficulty: "Alta",
    difficultyColor: "#f97316",
  },
];

function StructureCard({ s }) {
  const Icon = s.icon;
  return (
    <article
      style={{
        padding: "20px 18px",
        background: `linear-gradient(180deg, ${s.color}12 0%, ${s.color}05 100%)`,
        border: `1px solid ${s.color}55`,
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: `${s.color}22`,
            border: `1px solid ${s.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: s.color,
            flexShrink: 0,
          }}
        >
          <Icon size={20} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 800, color: s.color, lineHeight: 1.2 }}>
            {s.label}
          </h4>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginTop: 4,
              padding: "2px 8px",
              background: `${s.difficultyColor}22`,
              border: `1px solid ${s.difficultyColor}55`,
              color: s.difficultyColor,
              borderRadius: 100,
              fontSize: "0.68rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 0.4,
            }}
          >
            Dificultad {s.difficulty}
          </div>
        </div>
      </header>

      <div>
        <div style={{ fontSize: "0.72rem", color: "var(--text-secondary,#888)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 700, marginBottom: 4 }}>
          Cuándo usarla
        </div>
        <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--text-primary,#fff)", lineHeight: 1.5 }}>
          {s.when}
        </p>
      </div>

      <div
        style={{
          padding: "10px 12px",
          background: "rgba(0,0,0,0.28)",
          borderRadius: 10,
          borderLeft: `3px solid ${s.color}`,
        }}
      >
        <div style={{ fontSize: "0.68rem", color: "var(--text-secondary,#888)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 700, marginBottom: 4 }}>
          Ejemplo semanal
        </div>
        <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-primary,#ddd)", lineHeight: 1.5, fontFamily: "ui-monospace, SFMono-Regular, monospace" }}>
          {s.example}
        </p>
      </div>
    </article>
  );
}

export default function HybridStructuresGrid() {
  return (
    <section
      aria-label="Las tres estructuras posibles de entrenamiento híbrido que un coach puede programar a un cliente: resistencia aislada, cardio intradía y alternado por oposición"
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
        Las 3 estructuras de entrenamiento híbrido
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        No hay una "mejor". Hay la que encaja con la cartera de días, el objetivo y la vida del cliente.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
        }}
      >
        {structures.map((s) => (
          <StructureCard key={s.key} s={s} />
        ))}
      </div>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Elegir mal la estructura no arruina el plan al día siguiente. Lo arruina en la semana 6, cuando el cliente se queda atascado en ambos frentes.
      </p>
    </section>
  );
}
