import { CheckCircle2, AlertCircle, XCircle, HelpCircle } from "lucide-react";

/**
 * EvidenceLevelGrid — Afirmaciones típicas del sector fitness sobre ciclo menstrual
 * clasificadas por nivel de evidencia científica. Rojo = baja/inexistente, amarillo = mixta,
 * verde = sostenida por revisiones sistemáticas. Reutilizable para otros artículos de evidencia.
 */

const LEVEL_CONFIG = {
  high:   { label: "Evidencia sólida",  color: "#22c55e", icon: CheckCircle2 },
  mixed:  { label: "Evidencia mixta",   color: "#eab308", icon: HelpCircle   },
  low:    { label: "Evidencia baja",    color: "#f97316", icon: AlertCircle  },
  none:   { label: "Sin respaldo real", color: "#ef4444", icon: XCircle      },
};

const claims = [
  {
    text: "Las mujeres deben entrenar cargas altas solo en fase folicular",
    level: "low",
    note: "McNulty 2020 (meta-análisis 78 estudios): efecto trivial y calidad baja. No hay base para prescribir.",
  },
  {
    text: "En fase lútea hay que bajar volumen para no lesionarse",
    level: "none",
    note: "Sin evidencia consistente. Elliott-Sale 2021 identifica sesgos metodológicos serios en los estudios que lo defendían.",
  },
  {
    text: "Ciclar carbohidratos por fase del ciclo mejora resultados",
    level: "none",
    note: "No hay revisiones sistemáticas que lo respalden. La adherencia mata cualquier ganancia teórica.",
  },
  {
    text: "La retención de líquidos premenstrual altera la báscula",
    level: "high",
    note: "Muy documentado. Puede sumar 1-2 kg en agua sin ningún cambio en composición corporal.",
  },
  {
    text: "El síndrome premenstrual afecta al esfuerzo percibido",
    level: "high",
    note: "Documentado en varias revisiones. Cansancio, dolor y ánimo bajan la percepción de energía.",
  },
  {
    text: "Los síntomas y la duración del ciclo varían mucho entre mujeres",
    level: "high",
    note: "Consenso científico. Rango normal de duración de ciclo: 21 a 35 días.",
  },
];

function Claim({ c }) {
  const cfg = LEVEL_CONFIG[c.level];
  const Icon = cfg.icon;
  return (
    <article
      style={{
        padding: "14px 16px",
        background: `linear-gradient(180deg, ${cfg.color}0F 0%, ${cfg.color}05 100%)`,
        border: `1px solid ${cfg.color}44`,
        borderRadius: 14,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <header style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: `${cfg.color}22`,
            border: `1px solid ${cfg.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: cfg.color,
            flexShrink: 0,
          }}
        >
          <Icon size={17} />
        </div>
        <p
          style={{
            margin: 0,
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "var(--text-primary,#fff)",
            lineHeight: 1.4,
          }}
        >
          &ldquo;{c.text}&rdquo;
        </p>
      </header>

      <div
        style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          padding: "3px 10px",
          background: cfg.color,
          color: "#fff",
          borderRadius: 100,
          fontSize: "0.68rem",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: 0.5,
          whiteSpace: "nowrap",
        }}
      >
        {cfg.label}
      </div>

      <p
        style={{
          margin: 0,
          fontSize: "0.78rem",
          color: "var(--text-secondary,#aaa)",
          lineHeight: 1.5,
        }}
      >
        {c.note}
      </p>
    </article>
  );
}

export default function EvidenceLevelGrid() {
  return (
    <section
      aria-label="Nivel de evidencia científica de las afirmaciones más comunes del sector fitness sobre el ciclo menstrual"
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
        Lo que dice la ciencia (y lo que dice el marketing)
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Seis afirmaciones que circulan en redes y en cursos de coaching femenino, clasificadas por el nivel de evidencia real.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 12,
        }}
      >
        {claims.map((c, i) => (
          <Claim key={i} c={c} />
        ))}
      </div>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        La moda del &quot;entreno por fases&quot; se sostiene sobre las 3 afirmaciones de arriba (bajas o sin respaldo), no sobre las 3 de abajo.
      </p>
    </section>
  );
}
