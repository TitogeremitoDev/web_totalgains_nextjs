import { Zap, Shield, Tag, Flame, ArrowRight } from "lucide-react";

/**
 * LeversRiskLadder — Escalera visual de las 4 palancas para subir el €/hora
 * efectivo, ordenadas de menor a mayor riesgo. Cada card se desplaza a la
 * derecha como un escalón para transmitir el orden operativo obligatorio.
 */

const levers = [
  {
    n: 1,
    title: "Bajar horas de admin operativa",
    color: "#22c55e",
    icon: Zap,
    riskLabel: "Riesgo muy bajo",
    roi: "+15-25 % €/hora efectivo en el primer mes",
    requirement: "Ninguno",
    warning: null,
  },
  {
    n: 2,
    title: "Subir retención con seguimiento proactivo",
    color: "#84cc16",
    icon: Shield,
    riskLabel: "Riesgo bajo",
    roi: "+30-60 % LTV con la misma cartera activa",
    requirement: "Sistema de alertas tempranas",
    warning: null,
  },
  {
    n: 3,
    title: "Subir precio SOLO a nuevos clientes",
    color: "#eab308",
    icon: Tag,
    riskLabel: "Riesgo medio-bajo",
    roi: "Subida progresiva del ticket medio en 3-6 meses",
    requirement: "Propuesta de valor renovada",
    warning: null,
  },
  {
    n: 4,
    title: "Subir precio a cartera actual con reformulación de servicio",
    color: "#f97316",
    icon: Flame,
    riskLabel: "Riesgo medio-alto",
    roi: "Variable según churn",
    requirement: "Palancas 1 + 2 activas + 6 meses de operativa profesional",
    warning: "Pérdida de cartera 5-30 % según preparación previa",
  },
];

function LeverCard({ l, index }) {
  const Icon = l.icon;
  // Escalón: cada card se desplaza a la derecha para dar sensación de peldaño
  const stepIndent = index * 24;
  return (
    <article
      style={{
        marginLeft: stepIndent,
        marginBottom: 14,
        padding: "18px 20px",
        background: `linear-gradient(180deg, ${l.color}0F 0%, ${l.color}05 100%)`,
        border: `1px solid ${l.color}44`,
        borderRadius: 16,
        position: "relative",
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12, flexWrap: "wrap" }}>
        {/* Número grande de peldaño */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: `${l.color}22`,
            border: `1px solid ${l.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: l.color,
            fontSize: "1.4rem",
            fontWeight: 900,
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {l.n}
        </div>

        {/* Icono acompañante */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: `${l.color}22`,
            border: `1px solid ${l.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: l.color,
            flexShrink: 0,
          }}
        >
          <Icon size={20} />
        </div>

        <div style={{ flex: "1 1 220px", minWidth: 0 }}>
          <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>
            {l.title}
          </h3>
        </div>

        {/* Badge de riesgo */}
        <span
          style={{
            padding: "6px 12px",
            background: l.color,
            color: "#fff",
            borderRadius: 100,
            fontSize: "0.72rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            whiteSpace: "nowrap",
          }}
        >
          {l.riskLabel}
        </span>
      </header>

      {/* Cuerpo: ROI + requisito */}
      <div
        style={{
          padding: "10px 12px",
          background: "rgba(0,0,0,0.28)",
          borderRadius: 10,
        }}
      >
        <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>
          ROI típico
        </p>
        <p style={{ margin: "2px 0 0", fontSize: "0.9rem", fontWeight: 700, color: "#22c55e", lineHeight: 1.45 }}>
          {l.roi}
        </p>

        <div style={{ marginTop: 10, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>
            Requisito previo
          </p>
          <p style={{ margin: "2px 0 0", fontSize: "0.82rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>
            {l.requirement}
          </p>
        </div>

        {l.warning && (
          <div
            style={{
              marginTop: 10,
              padding: "8px 10px",
              background: "rgba(239,68,68,0.10)",
              border: "1px solid rgba(239,68,68,0.35)",
              borderRadius: 8,
            }}
          >
            <p style={{ margin: 0, fontSize: "0.78rem", color: "#ef4444", fontWeight: 600, lineHeight: 1.5 }}>
              <strong>Aviso:</strong> {l.warning}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

export default function LeversRiskLadder() {
  return (
    <section
      aria-label="Escalera de las 4 palancas para subir el euro por hora efectivo, ordenadas de menor a mayor riesgo"
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
        4 palancas para subir el €/hora efectivo sin quemar la cartera
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Ordenadas de <strong style={{ color: "#22c55e" }}>menor riesgo</strong> arriba a <strong style={{ color: "#f97316" }}>mayor riesgo</strong> abajo. Cada peldaño amplifica el efecto del anterior.
      </p>

      {/* Escalera de 4 cards */}
      <div>
        {levers.map((l, i) => (
          <LeverCard key={l.n} l={l} index={i} />
        ))}
      </div>

      {/* Nota final: orden operativo */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            padding: "8px 14px",
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.4)",
            borderRadius: 100,
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "#22c55e",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            whiteSpace: "nowrap",
          }}
        >
          <ArrowRight size={16} /> Empieza por la palanca 1
        </span>
        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary,#bbb)" }}>
          Cada palanca amplifica el efecto de la anterior
        </span>
      </div>

      <p style={{ marginTop: 14, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        <strong style={{ color: "var(--text-primary,#ddd)" }}>Orden operativo:</strong> NUNCA saltar la palanca 1. Herramientas como <a href="/software-entrenador-personal/" style={{ color: "var(--primary-light,#8fa4f5)" }}>TotalGains Pro</a> están diseñadas para desbloquear las palancas 1 y 2 en semanas, no en trimestres.
      </p>
    </section>
  );
}
