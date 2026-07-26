import { Sprout, TrendingUp, Crown } from "lucide-react";

/**
 * CoachTiersVisualizer — Muestra los 3 tramos de €/hora del coach en España
 * como barras horizontales visuales sobre una escala común, con marcadores
 * de referencia (SMI, dependiente, ingeniero) para que el coach se ubique
 * visualmente sin leer un tocho de texto.
 */

const SCALE_MAX = 120;
const references = [
  { value: 8.87, label: "SMI", color: "#94a3b8" },
  { value: 10.5, label: "Dependiente", color: "#94a3b8" },
  { value: 15.3, label: "Ing. junior", color: "#94a3b8" },
];

const tiers = [
  {
    label: "Coach que arranca",
    range: [8, 15],
    color: "#ef4444",
    icon: Sprout,
    clients: "0-15",
    profile: "Operativa manual completa (Excel + WhatsApp + Bizum). Rutinas diseñadas desde cero cada mes. Sin sistema de retención.",
    verdict: "Cobra menos que un dependiente en supermercado grande. Sistematizar antes de escalar.",
  },
  {
    label: "Coach consolidado",
    range: [18, 30],
    color: "#eab308",
    icon: TrendingUp,
    clients: "15-40",
    profile: "Operativa mixta con alguna automatización. Plantillas + ajustes. Retención reactiva. Marca profesional emergente.",
    verdict: "Sostenible pero sin margen. Punto de inflexión antes de superar los 40 clientes o quemarse.",
  },
  {
    label: "Coach premium / élite",
    range: [35, 120],
    color: "#22c55e",
    icon: Crown,
    clients: "40-100+",
    profile: "IA generativa de rutinas y dietas. Retención asistida con alertas tempranas. App marca blanca. Tarifas 150-300 €/mes/cliente.",
    verdict: "Compite con profesiones cualificadas por cuenta propia. Financia formación, vacaciones reales y calidad de vida.",
  },
];

function Tier({ t }) {
  const Icon = t.icon;
  const leftPct = (t.range[0] / SCALE_MAX) * 100;
  const widthPct = ((t.range[1] - t.range[0]) / SCALE_MAX) * 100;
  return (
    <article
      style={{
        padding: "18px 20px",
        background: `linear-gradient(180deg, ${t.color}0F 0%, ${t.color}05 100%)`,
        border: `1px solid ${t.color}44`,
        borderRadius: 16,
        marginBottom: 14,
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: `${t.color}22`, border: `1px solid ${t.color}55`, display: "flex", alignItems: "center", justifyContent: "center", color: t.color, flexShrink: 0 }}>
          <Icon size={20} />
        </div>
        <div style={{ flex: "1 1 200px" }}>
          <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{t.label}</h3>
          <p style={{ margin: "2px 0 0", fontSize: "0.78rem", color: "var(--text-secondary,#aaa)" }}>{t.clients} clientes activos</p>
        </div>
        <div style={{ padding: "6px 12px", background: t.color, color: "#fff", borderRadius: 100, fontSize: "0.9rem", fontWeight: 800, whiteSpace: "nowrap" }}>
          {t.range[0]}–{t.range[1]} €/h
        </div>
      </header>

      {/* Rango sobre escala 0-120 €/h */}
      <div style={{ position: "relative", height: 12, background: "rgba(255,255,255,0.05)", borderRadius: 6, marginBottom: 6, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${leftPct}%`,
            width: `${widthPct}%`,
            background: `linear-gradient(90deg, ${t.color}, ${t.color}dd)`,
            borderRadius: 6,
          }}
        />
      </div>

      <p style={{ margin: "10px 0 6px", fontSize: "0.82rem", color: "var(--text-primary,#ddd)", lineHeight: 1.55 }}>{t.profile}</p>
      <p style={{ margin: 0, fontSize: "0.8rem", color: t.color, fontWeight: 600, lineHeight: 1.55 }}>
        <strong>Diagnóstico:</strong> {t.verdict}
      </p>
    </article>
  );
}

export default function CoachTiersVisualizer() {
  return (
    <section
      aria-label="Tramos visuales de €/hora efectivo del coach online en España 2026"
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
        Los 3 tramos reales del coach en España (2026)
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Ubícate sobre la misma escala 0-120 €/h y compárate contra referencias públicas de otros trabajos.
      </p>

      {/* Escala de referencias arriba */}
      <div style={{ position: "relative", height: 40, marginBottom: 24 }}>
        <div style={{ position: "absolute", top: 22, left: 0, right: 0, height: 2, background: "rgba(255,255,255,0.08)" }} />
        {references.map((ref) => {
          const leftPct = (ref.value / SCALE_MAX) * 100;
          return (
            <div key={ref.label} style={{ position: "absolute", top: 0, left: `${leftPct}%`, transform: "translateX(-50%)", textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "0.68rem", color: ref.color, whiteSpace: "nowrap", fontWeight: 600 }}>{ref.label}</p>
              <p style={{ margin: "2px 0 0", fontSize: "0.62rem", color: "var(--text-secondary,#888)", whiteSpace: "nowrap" }}>{ref.value.toString().replace(".", ",")} €/h</p>
            </div>
          );
        })}
        {/* Marcador 0 y 120 en extremos */}
        <div style={{ position: "absolute", top: 28, left: 0, fontSize: "0.62rem", color: "var(--text-secondary,#666)" }}>0</div>
        <div style={{ position: "absolute", top: 28, right: 0, fontSize: "0.62rem", color: "var(--text-secondary,#666)" }}>120 €/h</div>
      </div>

      {tiers.map((t) => <Tier key={t.label} t={t} />)}

      <p style={{ marginTop: 16, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Salto entre tramos = <strong style={{ color: "var(--text-primary,#ddd)" }}>bajar horas por cliente sin bajar calidad</strong>, no subir tarifa. Herramientas como <a href="/software-entrenador-personal/" style={{ color: "var(--primary-light,#8fa4f5)" }}>TotalGains Pro</a> están construidas para acelerar el salto del Tramo 2 al Tramo 3.
      </p>
    </section>
  );
}
