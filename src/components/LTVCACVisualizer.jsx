import { TrendingUp, ArrowRight } from "lucide-react";

/**
 * LTVCACVisualizer — Comparativa visual de dos coaches con los mismos costes
 * pero distintas variables operativas (horas por cliente y permanencia media),
 * mostrando el salto en €/hora efectivo sin subir precio.
 */

const scenarios = [
  {
    label: "Coach medio",
    subtitle: "Operativa manual, sin sistemas",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.35)",
    price: 100,
    months: 6,
    hoursPerMonth: 5,
    cac: 60,
    ltv: 600,
    totalHours: 30,
    cacPerHour: 2,
    hourly: 18,
  },
  {
    label: "Coach optimizado",
    subtitle: "Sistematización + retención mejorada",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.35)",
    price: 100,
    months: 10,
    hoursPerMonth: 3,
    cac: 60,
    ltv: 1000,
    totalHours: 30,
    cacPerHour: 2,
    hourly: 31.3,
  },
];

function Metric({ label, value, unit, highlight }) {
  return (
    <div style={{ padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</p>
      <p style={{ margin: "2px 0 0", fontSize: highlight ? "1.4rem" : "1rem", fontWeight: highlight ? 800 : 600, color: "var(--text-primary,#fff)", whiteSpace: "nowrap" }}>
        {value}{" "}<span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--text-secondary,#aaa)" }}>{unit}</span>
      </p>
    </div>
  );
}

function ScenarioCard({ s, isSecond }) {
  return (
    <div style={{ padding: "20px 20px 16px", background: s.bg, border: `1px solid ${s.border}`, borderRadius: 16, position: "relative" }}>
      <span style={{ display: "inline-block", padding: "3px 10px", fontSize: "0.68rem", fontWeight: 700, background: s.color, color: "#fff", borderRadius: 100, marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
        {isSecond ? "Después" : "Antes"}
      </span>
      <h3 style={{ margin: "4px 0 2px", fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{s.label}</h3>
      <p style={{ margin: "0 0 14px", fontSize: "0.78rem", color: "var(--text-secondary,#aaa)" }}>{s.subtitle}</p>

      <Metric label="Precio mensual" value={s.price} unit="€/mes" />
      <Metric label="Permanencia media" value={s.months} unit="meses" />
      <Metric label="Horas por cliente al mes" value={s.hoursPerMonth} unit="h/mes" />
      <Metric label="CAC (captación)" value={s.cac} unit="€/cliente" />

      <div style={{ marginTop: 12, padding: "10px 12px", background: "rgba(0,0,0,0.28)", borderRadius: 10, fontSize: "0.78rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
        <p style={{ margin: 0 }}>
          <strong style={{ color: "var(--text-primary,#ddd)" }}>LTV:</strong>{" "}
          <span style={{ whiteSpace: "nowrap" }}>{s.ltv} €</span>
          {"  "}·{"  "}
          <strong style={{ color: "var(--text-primary,#ddd)" }}>Horas totales:</strong>{" "}
          <span style={{ whiteSpace: "nowrap" }}>{s.totalHours} h</span>
        </p>
        <p style={{ margin: "6px 0 0" }}>
          <strong style={{ color: "var(--text-primary,#ddd)" }}>Cálculo:</strong>{" "}
          <span style={{ whiteSpace: "nowrap" }}>{s.ltv}/{s.totalHours} − {s.cac}/{s.totalHours}</span>
          {" = "}
          <span style={{ whiteSpace: "nowrap" }}>{(s.ltv / s.totalHours).toFixed(2).replace(".", ",")} − {s.cacPerHour}</span>
        </p>
      </div>

      <div style={{ marginTop: 14, padding: "14px", background: s.color + "22", border: `1px solid ${s.color}66`, borderRadius: 12, textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>Tarifa real por hora</p>
        <p style={{ margin: "4px 0 0", fontSize: "2.1rem", fontWeight: 900, color: s.color, whiteSpace: "nowrap" }}>
          {s.hourly.toFixed(2).replace(".", ",")}{" "}€/h
        </p>
      </div>
    </div>
  );
}

export default function LTVCACVisualizer() {
  const uplift = (((scenarios[1].hourly - scenarios[0].hourly) / scenarios[0].hourly) * 100).toFixed(0);
  return (
    <section
      aria-label="Comparativa visual del €/hora efectivo antes y después de sistematizar operativa"
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
        Mismo precio, mismo CAC, distinta operativa
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Dos coaches con precio idéntico (100 €/mes), CAC idéntico (60 €/cliente). El segundo baja horas por cliente y sube retención. Resultado: <strong style={{ color: "#22c55e" }}>+{uplift} % en €/hora efectivo sin subir tarifa</strong>.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, alignItems: "stretch" }}>
        <ScenarioCard s={scenarios[0]} isSecond={false} />
        <ScenarioCard s={scenarios[1]} isSecond={true} />
      </div>

      <div style={{ marginTop: 20, display: "flex", justifyContent: "center", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <span style={{ padding: "8px 14px", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.4)", borderRadius: 100, fontSize: "0.85rem", fontWeight: 700, color: "#22c55e", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <TrendingUp size={16} /> +{uplift} % €/hora efectivo
        </span>
        <ArrowRight size={20} color="var(--text-secondary,#888)" />
        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary,#bbb)" }}>Sin subir el precio ni un euro</span>
      </div>
    </section>
  );
}
