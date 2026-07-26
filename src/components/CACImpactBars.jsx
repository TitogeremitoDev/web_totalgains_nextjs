import { TrendingUp, ArrowRight } from "lucide-react";

/**
 * CACImpactBars — Reemplaza la FAQ "¿Cuánto pesa el CAC?" con 3 escenarios
 * visuales que muestran cómo el porcentaje del CAC sobre el LTV cambia con
 * la permanencia media (2, 6 y 10 meses) manteniendo CAC y precio constantes.
 */

const CAC = 60;
const PRICE = 100;
const MAX_LTV = 1000;

const scenarios = [
  {
    label: "Cliente 2 meses",
    subtitle: "Permanencia baja",
    months: 2,
    ltv: 200,
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.35)",
  },
  {
    label: "Cliente 6 meses",
    subtitle: "Permanencia media",
    months: 6,
    ltv: 600,
    color: "#eab308",
    bg: "rgba(234,179,8,0.08)",
    border: "rgba(234,179,8,0.35)",
  },
  {
    label: "Cliente 10 meses",
    subtitle: "Permanencia alta",
    months: 10,
    ltv: 1000,
    color: "#22c55e",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.35)",
  },
];

function formatEuro(n) {
  return n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function ScenarioBar({ s }) {
  const ltvPct = (s.ltv / MAX_LTV) * 100;
  const cacPctOfMax = (CAC / MAX_LTV) * 100;
  const cacPctOfLtv = (CAC / s.ltv) * 100;

  return (
    <div
      style={{
        padding: "16px 18px",
        background: s.bg,
        border: `1px solid ${s.border}`,
        borderRadius: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 10,
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <h3
            style={{
              margin: "0 0 2px",
              fontSize: "1.05rem",
              fontWeight: 800,
              color: "var(--text-primary,#fff)",
            }}
          >
            {s.label}
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "0.78rem",
              color: "var(--text-secondary,#aaa)",
            }}
          >
            {s.subtitle} · <span style={{ whiteSpace: "nowrap" }}>LTV {formatEuro(s.ltv)} €</span>
          </p>
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 12px",
            fontSize: "0.85rem",
            fontWeight: 800,
            background: s.color + "22",
            border: `1px solid ${s.color}66`,
            color: s.color,
            borderRadius: 100,
            whiteSpace: "nowrap",
          }}
        >
          {cacPctOfLtv.toFixed(0)} % CAC / LTV
        </span>
      </div>

      <div
        style={{
          position: "relative",
          height: 22,
          background: "rgba(255,255,255,0.05)",
          borderRadius: 8,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${ltvPct}%`,
            background: `linear-gradient(90deg, ${s.color}, ${s.color}dd)`,
            borderRadius: 8,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${cacPctOfMax}%`,
            background: "linear-gradient(90deg, #ef4444, #ef4444dd)",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        />
      </div>

      <div
        style={{
          marginTop: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
          fontSize: "0.72rem",
          color: "var(--text-secondary,#888)",
          flexWrap: "wrap",
        }}
      >
        <span style={{ whiteSpace: "nowrap", color: "#ef4444", fontWeight: 700 }}>
          CAC <span style={{ whiteSpace: "nowrap" }}>{formatEuro(CAC)} €</span>
        </span>
        <span style={{ whiteSpace: "nowrap" }}>
          {s.months} meses × <span style={{ whiteSpace: "nowrap" }}>{PRICE} €/mes</span>
        </span>
      </div>
    </div>
  );
}

export default function CACImpactBars() {
  return (
    <section
      aria-label="Impacto del CAC sobre el LTV según permanencia media del cliente"
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "28px 24px",
        background:
          "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)",
        borderRadius: 20,
      }}
    >
      <h3
        style={{
          margin: "0 0 6px",
          fontSize: "1.2rem",
          fontWeight: 800,
          color: "var(--text-primary,#fff)",
          textAlign: "center",
        }}
      >
        ¿Cuánto pesa el CAC sobre el LTV?
      </h3>
      <p
        style={{
          margin: "0 0 22px",
          textAlign: "center",
          fontSize: "0.86rem",
          color: "var(--text-secondary,#aaa)",
          lineHeight: 1.5,
        }}
      >
        Mismo CAC (<span style={{ whiteSpace: "nowrap" }}>60 €/cliente</span>) y mismo precio (<span style={{ whiteSpace: "nowrap" }}>100 €/mes</span>). Solo cambia la permanencia. El tramo rojo del inicio es lo que <strong style={{ color: "#22c55e" }}>se come el CAC</strong>: cuanto más dura el cliente, más pequeño se ve.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {scenarios.map((s) => (
          <ScenarioBar key={s.months} s={s} />
        ))}
      </div>

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
          }}
        >
          <TrendingUp size={16} /> Retención &gt; captación
        </span>
        <ArrowRight size={20} color="var(--text-secondary,#888)" />
        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary,#bbb)", textAlign: "center" }}>
          Cada mes extra amortiza mejor el mismo CAC
        </span>
      </div>

      <p
        style={{
          margin: "18px 0 0",
          textAlign: "center",
          fontSize: "0.8rem",
          fontStyle: "italic",
          color: "var(--text-secondary,#aaa)",
          lineHeight: 1.55,
        }}
      >
        La retención (no la captación) es la palanca de fondo. Cada mes extra de cliente amortiza mejor el mismo CAC.
      </p>
    </section>
  );
}
