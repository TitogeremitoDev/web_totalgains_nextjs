import { MessageCircle, FileText, Bell, TrendingDown, AlertTriangle } from "lucide-react";

/**
 * InvisibleTimeChart — Visualiza los 4 "tiempos invisibles" del coach con cartera
 * de ~25 clientes como barras horizontales proporcionales sobre escala 0-30 h/mes.
 * La 4ª fila (bajas silenciosas) no tiene barra: es un coste oculto de LTV.
 */

const SCALE_MAX = 30;

const rows = [
  {
    label: "Persecución de datos (WhatsApp)",
    subtitle: "Recordar pesajes, fotos, adherencia, dudas sueltas",
    color: "#fa709a",
    icon: MessageCircle,
    range: [20, 32],
    displayRange: "5-8 h/semana",
    monthly: "~26 h/mes",
  },
  {
    label: "Diseño manual rutinas y dietas",
    subtitle: "Excel, plantillas, ajustes cliente a cliente",
    color: "#f97316",
    icon: FileText,
    range: [10, 20],
    displayRange: "10-20 h/mes",
    monthly: "10-20 h/mes",
  },
  {
    label: "Persecución de renovaciones y cobros",
    subtitle: "Recordar mensualidad, Bizum, facturas manuales",
    color: "#eab308",
    icon: Bell,
    range: [3, 5],
    displayRange: "3-5 h/mes",
    monthly: "3-5 h/mes",
  },
  {
    label: "Bajas silenciosas",
    subtitle: "Cliente que se apaga sin quejarse y no renueva",
    color: "#ef4444",
    icon: TrendingDown,
    hidden: true,
    displayRange: "ROI negativo",
    monthly: "sin horas directas — pierdes LTV",
  },
];

function InvisibleRow({ r }) {
  const Icon = r.icon;
  const leftPct = r.hidden ? 0 : Math.min((r.range[0] / SCALE_MAX) * 100, 100);
  const widthPct = r.hidden
    ? 0
    : Math.min(((r.range[1] - r.range[0]) / SCALE_MAX) * 100, 100 - leftPct);

  return (
    <article
      style={{
        padding: "16px 18px",
        background: `linear-gradient(180deg, ${r.color}0F 0%, ${r.color}05 100%)`,
        border: `1px solid ${r.color}44`,
        borderRadius: 16,
        marginBottom: 12,
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: `${r.color}22`,
            border: `1px solid ${r.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: r.color,
            flexShrink: 0,
          }}
        >
          <Icon size={20} />
        </div>
        <div style={{ flex: "1 1 220px", minWidth: 0 }}>
          <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{r.label}</h3>
          <p style={{ margin: "2px 0 0", fontSize: "0.78rem", color: "var(--text-secondary,#aaa)" }}>{r.subtitle}</p>
        </div>
        <div
          style={{
            padding: "6px 12px",
            background: r.color,
            color: "#fff",
            borderRadius: 100,
            fontSize: "0.85rem",
            fontWeight: 800,
            whiteSpace: "nowrap",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {r.hidden ? <AlertTriangle size={14} /> : null}
          <span style={{ whiteSpace: "nowrap" }}>{r.displayRange}</span>
        </div>
      </header>

      {r.hidden ? (
        <div
          style={{
            padding: "10px 12px",
            background: "rgba(0,0,0,0.28)",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              padding: "4px 10px",
              background: `${r.color}22`,
              border: `1px solid ${r.color}66`,
              color: r.color,
              borderRadius: 100,
              fontSize: "0.72rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              whiteSpace: "nowrap",
            }}
          >
            Coste oculto
          </span>
          <span style={{ fontSize: "0.82rem", color: "var(--text-primary,#ddd)", lineHeight: 1.5 }}>
            No consume horas directas, pero <strong style={{ color: r.color }}>destruye el LTV</strong> del cliente que se va sin avisar.
          </span>
        </div>
      ) : (
        <>
          <div
            style={{
              position: "relative",
              height: 12,
              background: "rgba(255,255,255,0.05)",
              borderRadius: 6,
              marginBottom: 6,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${leftPct}%`,
                width: `${widthPct}%`,
                background: `linear-gradient(90deg, ${r.color}, ${r.color}dd)`,
                borderRadius: 6,
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.68rem", color: "var(--text-secondary,#888)" }}>
            <span style={{ whiteSpace: "nowrap" }}>0 h/mes</span>
            <span style={{ whiteSpace: "nowrap", color: r.color, fontWeight: 700 }}>{r.monthly}</span>
            <span style={{ whiteSpace: "nowrap" }}>30 h/mes</span>
          </div>
        </>
      )}
    </article>
  );
}

export default function InvisibleTimeChart() {
  return (
    <section
      aria-label="Los 4 tiempos invisibles del coach online con cartera de 25 clientes"
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
        Los 4 tiempos invisibles con 25 clientes
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Bloques de trabajo que <strong style={{ color: "#fa709a" }}>no aparecen en tu tarifa</strong> pero se comen tu semana.
        Escala común 0-30 h/mes para comparar magnitudes de un vistazo.
      </p>

      {rows.map((r) => (
        <InvisibleRow key={r.label} r={r} />
      ))}

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Total invisible con 25 clientes:{" "}
        <strong style={{ color: "var(--text-primary,#ddd)", whiteSpace: "nowrap" }}>40-70 h/mes</strong>{" "}
        — más de una jornada laboral completa a la semana.
      </p>
    </section>
  );
}
