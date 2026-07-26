import { Dumbbell, Utensils, Archive, CircleDot } from "lucide-react";

/**
 * HistoricalTimelineClient — Mock de la ficha de un atleta con la línea temporal
 * de rutinas y dietas archivadas más las activas hoy. Ilustra el histórico consultable
 * que se guarda de forma automática cada vez que asignas o modificas un plan.
 */

const items = [
  {
    date: "15 mar 2026",
    type: "rutina",
    name: "Fuerza Q1",
    status: "archived",
    detail: "4 días · sentadilla + press banca base",
  },
  {
    date: "22 mar 2026",
    type: "dieta",
    name: "Volumen 2 500 kcal",
    status: "archived",
    detail: "5 comidas · 180 g proteína",
  },
  {
    date: "12 jun 2026",
    type: "rutina",
    name: "Hipertrofia Q2",
    status: "archived",
    detail: "5 días · split empuje/tirón/pierna",
  },
  {
    date: "01 jul 2026",
    type: "dieta",
    name: "Definición 2 100 kcal",
    status: "active",
    detail: "4 comidas · déficit 400 kcal",
  },
  {
    date: "10 jul 2026",
    type: "rutina",
    name: "Peak Verano",
    status: "active",
    detail: "5 días · full body 4ª semana descarga",
  },
];

const typeConfig = {
  rutina: { icon: Dumbbell, color: "#667eea", label: "Rutina" },
  dieta: { icon: Utensils, color: "#f97316", label: "Dieta" },
};

function TimelineItem({ item, isLast }) {
  const cfg = typeConfig[item.type];
  const Icon = cfg.icon;
  const isActive = item.status === "active";

  return (
    <li style={{ display: "flex", gap: 14, position: "relative", paddingBottom: isLast ? 0 : 16 }}>
      {!isLast && (
        <div
          style={{
            position: "absolute",
            left: 19,
            top: 40,
            bottom: 0,
            width: 2,
            background: "rgba(255,255,255,0.08)",
          }}
        />
      )}

      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: isActive ? `${cfg.color}33` : "rgba(255,255,255,0.05)",
          border: `1px solid ${isActive ? cfg.color : "rgba(255,255,255,0.15)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isActive ? cfg.color : "var(--text-secondary,#888)",
          flexShrink: 0,
          zIndex: 1,
        }}
      >
        <Icon size={18} />
      </div>

      <div
        style={{
          flex: 1,
          minWidth: 0,
          padding: "10px 14px",
          background: isActive ? `${cfg.color}0F` : "rgba(255,255,255,0.03)",
          border: `1px solid ${isActive ? `${cfg.color}44` : "rgba(255,255,255,0.08)"}`,
          borderRadius: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
          <span style={{ fontSize: "0.72rem", color: "var(--text-secondary,#888)", whiteSpace: "nowrap" }}>{item.date}</span>
          <span style={{ fontSize: "0.72rem", color: cfg.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.4 }}>
            {cfg.label}
          </span>
          {isActive ? (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: "2px 8px",
                background: "#22c55e22",
                border: "1px solid #22c55e66",
                color: "#22c55e",
                borderRadius: 100,
                fontSize: "0.68rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 0.4,
              }}
            >
              <CircleDot size={10} /> Activa
            </span>
          ) : (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: "2px 8px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "var(--text-secondary,#aaa)",
                borderRadius: 100,
                fontSize: "0.68rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 0.4,
              }}
            >
              <Archive size={10} /> Archivada
            </span>
          )}
        </div>
        <div style={{ fontSize: "0.94rem", fontWeight: 700, color: "var(--text-primary,#fff)", lineHeight: 1.35 }}>
          {item.name}
        </div>
        <div style={{ fontSize: "0.78rem", color: "var(--text-secondary,#aaa)", marginTop: 2, lineHeight: 1.4 }}>
          {item.detail}
        </div>
      </div>
    </li>
  );
}

export default function HistoricalTimelineClient() {
  return (
    <section
      aria-label="Ficha de una atleta con el histórico de rutinas y dietas: cada plan antiguo queda archivado y consultable"
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
        Ficha de un atleta: 5 meses de historial
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Cada vez que asignas un plan nuevo, el anterior queda archivado con su fecha.
        Puedes abrir la versión anterior <strong style={{ color: "var(--text-primary,#ddd)" }}>plato a plato</strong> y ejercicio a ejercicio.
      </p>

      <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((it, i) => (
          <TimelineItem key={i} item={it} isLast={i === items.length - 1} />
        ))}
      </ol>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Modificas una dieta hoy y mañana te arrepientes: el plan de ayer sigue ahí, tal cual estaba.
      </p>
    </section>
  );
}
