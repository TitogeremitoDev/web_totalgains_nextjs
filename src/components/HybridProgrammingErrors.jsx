import { AlertTriangle } from "lucide-react";

/**
 * HybridProgrammingErrors — Los 4 errores del coach al programar entrenamiento
 * híbrido, ordenados por impacto negativo sobre el resultado del cliente.
 * Cada fila incluye: error → por qué mata resultados → qué hacer en su lugar.
 */

const SCALE_MAX = 10;

const errors = [
  {
    rank: 1,
    text: "Cardio duro justo antes de una sesión de fuerza",
    impact: 10,
    tag: "Interferencia aguda",
    color: "#dc2626",
    fix: "Separa 6-8 h entre alta intensidad de cardio y fuerza. Idealmente en días distintos si el volumen de cardio es alto.",
  },
  {
    rank: 2,
    text: "Volumen total sin ajustar al añadir el frente cardio",
    impact: 9.5,
    tag: "Sobrecarga acumulada",
    color: "#dc2626",
    fix: "Al meter 2-3 h de cardio semanal, quita 20-30 % del volumen de accesorios de fuerza. No de básicos.",
  },
  {
    rank: 3,
    text: "Todos los días son de alta intensidad en ambos frentes",
    impact: 9,
    tag: "Cero polarización",
    color: "#ef4444",
    fix: "80 % del cardio en Z2 (baja intensidad continua), 20 % en Z4-Z5. Y solo 1-2 sesiones de fuerza a RPE 9 por semana.",
  },
  {
    rank: 4,
    text: "Programar híbrido sin priorizar un objetivo dominante",
    impact: 8,
    tag: "Sin jerarquía",
    color: "#f97316",
    fix: "Decide con el cliente: ¿queremos ganar fuerza principalmente y mantener fondo, o al revés? Ambas cosas a la vez no funcionan pasadas las 8 semanas.",
  },
];

function ErrorRow({ e }) {
  const widthPct = Math.min((e.impact / SCALE_MAX) * 100, 100);

  return (
    <article
      style={{
        padding: "14px 16px",
        marginBottom: 12,
        background: `linear-gradient(180deg, ${e.color}0F 0%, ${e.color}05 100%)`,
        border: `1px solid ${e.color}44`,
        borderRadius: 12,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "34px minmax(0, 1fr) auto",
          alignItems: "center",
          gap: 12,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: `${e.color}22`,
            border: `1px solid ${e.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.78rem",
            fontWeight: 800,
            color: e.color,
            flexShrink: 0,
          }}
        >
          {e.rank}
        </div>

        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "var(--text-primary,#fff)",
              lineHeight: 1.35,
              marginBottom: 6,
            }}
          >
            {e.text}
          </div>
          <div
            style={{
              position: "relative",
              height: 6,
              background: "rgba(255,255,255,0.05)",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: `${widthPct}%`,
                background: `linear-gradient(90deg, ${e.color}, ${e.color}dd)`,
                borderRadius: 3,
              }}
            />
          </div>
        </div>

        <div
          style={{
            padding: "4px 10px",
            background: e.color,
            color: "#fff",
            borderRadius: 100,
            fontSize: "0.68rem",
            fontWeight: 800,
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            letterSpacing: 0.4,
          }}
        >
          {e.tag}
        </div>
      </div>

      <div
        style={{
          padding: "10px 12px",
          background: "rgba(0,0,0,0.28)",
          borderRadius: 10,
          borderLeft: `3px solid ${e.color}`,
        }}
      >
        <div style={{ fontSize: "0.68rem", color: "var(--text-secondary,#888)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 700, marginBottom: 4 }}>
          Qué hacer en su lugar
        </div>
        <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-primary,#ddd)", lineHeight: 1.5 }}>
          {e.fix}
        </p>
      </div>
    </article>
  );
}

export default function HybridProgrammingErrors() {
  return (
    <section
      aria-label="Los cuatro errores más frecuentes del coach al programar entrenamiento híbrido, ordenados por impacto negativo, con la corrección concreta para cada uno"
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)",
        borderRadius: 20,
      }}
    >
      <header style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 6 }}>
        <AlertTriangle size={20} style={{ color: "#ef4444" }} />
        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
          Los 4 errores que arruinan un plan híbrido
        </h3>
      </header>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Cada uno hunde el resultado del cliente en un frente distinto. Con los cuatro, no avanza en ninguno.
      </p>

      {errors.map((e) => (
        <ErrorRow key={e.rank} e={e} />
      ))}

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        La programación híbrida no es "meter cardio en un plan de fuerza". Es diseñar un plan pensando desde el principio en las dos cosas.
      </p>
    </section>
  );
}
