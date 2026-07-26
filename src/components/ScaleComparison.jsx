import { Users, Crown, TrendingUp } from "lucide-react";

/**
 * ScaleComparison — Dos coaches con IDÉNTICA facturación (3.000 €/mes) pero
 * distinto perfil operativo. Demuestra que el ingreso mensual es una vanity
 * metric: la métrica real es el €/hora efectivo.
 */

const cards = [
  {
    key: "volumen",
    badge: "Volumen",
    label: "Coach volumen",
    subtitle: "Cartera grande, ticket bajo",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.35)",
    icon: Users,
    metrics: [
      { label: "Clientes activos", value: "30", unit: "clientes" },
      { label: "Precio por cliente", value: "100", unit: "€/mes" },
      { label: "Horas por cliente al mes", value: "5–6", unit: "h/mes" },
      { label: "Horas totales al mes", value: "150–180", unit: "h/mes" },
      { label: "Facturación", value: "3.000", unit: "€/mes" },
    ],
    outputLabel: "Tarifa real por hora",
    outputValue: "~17–20",
    outputUnit: "€/h",
  },
  {
    key: "premium",
    badge: "Premium",
    label: "Coach premium",
    subtitle: "Cartera reducida, ticket alto",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.35)",
    icon: Crown,
    metrics: [
      { label: "Clientes activos", value: "15", unit: "clientes" },
      { label: "Precio por cliente", value: "200", unit: "€/mes" },
      { label: "Horas por cliente al mes", value: "4–5", unit: "h/mes" },
      { label: "Horas totales al mes", value: "60–75", unit: "h/mes" },
      { label: "Facturación", value: "3.000", unit: "€/mes" },
    ],
    outputLabel: "Tarifa real por hora",
    outputValue: "~40–50",
    outputUnit: "€/h",
  },
];

function Metric({ label, value, unit }) {
  return (
    <div style={{ padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</p>
      <p style={{ margin: "2px 0 0", fontSize: "1rem", fontWeight: 600, color: "var(--text-primary,#fff)", whiteSpace: "nowrap" }}>
        {value}{" "}<span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--text-secondary,#aaa)" }}>{unit}</span>
      </p>
    </div>
  );
}

function ProfileCard({ c }) {
  const Icon = c.icon;
  return (
    <article
      style={{
        padding: "20px 20px 18px",
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: `${c.color}22`, border: `1px solid ${c.color}55`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, flexShrink: 0 }}>
          <Icon size={20} />
        </div>
        <div style={{ flex: "1 1 160px", minWidth: 0 }}>
          <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{c.label}</h3>
          <p style={{ margin: "2px 0 0", fontSize: "0.78rem", color: "var(--text-secondary,#aaa)" }}>{c.subtitle}</p>
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", padding: "3px 10px", fontSize: "0.68rem", fontWeight: 700, background: c.color, color: "#fff", borderRadius: 100, textTransform: "uppercase", letterSpacing: 0.5, whiteSpace: "nowrap" }}>
          {c.badge}
        </span>
      </header>

      <div style={{ flex: 1 }}>
        {c.metrics.map((m) => (
          <Metric key={m.label} label={m.label} value={m.value} unit={m.unit} />
        ))}
      </div>

      <div style={{ marginTop: 14, padding: "14px", background: `${c.color}22`, border: `1px solid ${c.color}66`, borderRadius: 12, textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>{c.outputLabel}</p>
        <p style={{ margin: "4px 0 0", fontSize: "2.1rem", fontWeight: 900, color: c.color, whiteSpace: "nowrap" }}>
          {c.outputValue}{" "}{c.outputUnit}
        </p>
      </div>
    </article>
  );
}

export default function ScaleComparison() {
  return (
    <section
      aria-label="Comparativa entre coach volumen y coach premium con misma facturación pero distinto euro por hora efectivo"
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
        Misma facturación, distinto €/hora efectivo
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Dos coaches ingresan <strong style={{ color: "var(--text-primary,#ddd)" }}>3.000 €/mes</strong> exactos. Uno cobra como un dependiente; el otro como un profesional cualificado. La diferencia no está en la facturación, está en <strong style={{ color: "#22c55e" }}>cuántas horas cuesta esa facturación</strong>.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, alignItems: "stretch" }}>
        {cards.map((c) => <ProfileCard key={c.key} c={c} />)}
      </div>

      <div style={{ marginTop: 20, display: "flex", justifyContent: "center", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <span style={{ padding: "8px 14px", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.4)", borderRadius: 100, fontSize: "0.85rem", fontWeight: 700, color: "#22c55e", display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
          <TrendingUp size={16} /> Hasta 2,5×–3× €/h con la misma facturación
        </span>
      </div>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        El ingreso mensual es una <strong style={{ color: "var(--text-primary,#ddd)" }}>vanity metric</strong>. El <strong style={{ color: "var(--text-primary,#ddd)" }}>€/hora efectivo</strong> es la métrica real: se mide, se protege y se optimiza.
      </p>
    </section>
  );
}
