import { TrendingDown, ArrowRight } from "lucide-react";

/**
 * WaterfallHourlyRate — Cascada visual que desmonta el mito del "cobro 50 €/h":
 * parte de 50,00 €/h percibidos y descuenta IVA, horas invisibles e IRPF+autónomo
 * hasta el neto real (~11,57 €/h), por debajo de un dependiente de supermercado.
 */

const START_VALUE = 50;
const BAR_MAX = 220; // px
const BAR_MIN = 40;  // px — para que la última barra siga siendo legible

const steps = [
  {
    id: "percibido",
    value: 50.0,
    delta: 0,
    label: "Tarifa percibida",
    reason: "Lo que el cliente paga por hora en apariencia",
    color: "#fa709a",
    lossColor: null,
  },
  {
    id: "iva",
    value: 41.32,
    delta: -10.34,
    label: "Después de IVA (21 %)",
    reason: "Hacienda se lleva el IVA que el coach factura",
    color: "#f87171",
    lossColor: "#f87171",
  },
  {
    id: "invisibles",
    value: 16.53,
    delta: -24.79,
    label: "Horas invisibles",
    reason: "Real 5 h vs percibidas 2 h (rutinas, chat, admin)",
    color: "#ef4444",
    lossColor: "#ef4444",
  },
  {
    id: "irpf",
    value: 11.57,
    delta: -4.96,
    label: "IRPF + cuota autónomo",
    reason: "30 % neto medio tras impuestos y cotización",
    color: "#b91c1c",
    lossColor: "#b91c1c",
  },
];

const REFERENCE_DEPENDIENTE = 10.5;

const fmt = (n) =>
  n.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function heightFor(value) {
  const raw = (value / START_VALUE) * BAR_MAX;
  return Math.max(BAR_MIN, Math.round(raw));
}

function StepBar({ step, isFirst }) {
  const barHeight = heightFor(step.value);
  return (
    <div
      style={{
        flex: "1 1 140px",
        minWidth: 140,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Badge de pérdida lateral (solo a partir de la 2ª barra) */}
      {step.delta < 0 && (
        <div
          style={{
            alignSelf: "center",
            marginBottom: 8,
            padding: "4px 10px",
            background: `${step.lossColor}22`,
            border: `1px solid ${step.lossColor}66`,
            borderRadius: 100,
            color: step.lossColor,
            fontSize: "0.72rem",
            fontWeight: 800,
            whiteSpace: "nowrap",
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <TrendingDown size={12} />
          <span style={{ whiteSpace: "nowrap" }}>
            {fmt(step.delta)} €/h
          </span>
        </div>
      )}
      {isFirst && (
        <div
          style={{
            marginBottom: 8,
            padding: "4px 10px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 100,
            color: "var(--text-secondary,#bbb)",
            fontSize: "0.72rem",
            fontWeight: 700,
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          Punto de partida
        </div>
      )}

      {/* Valor arriba de la barra */}
      <p
        style={{
          margin: "0 0 6px",
          fontSize: "1.1rem",
          fontWeight: 900,
          color: step.color,
          whiteSpace: "nowrap",
        }}
      >
        {fmt(step.value)} €/h
      </p>

      {/* Zona de barra con altura fija para alinear todas al suelo */}
      <div
        style={{
          width: "100%",
          height: BAR_MAX,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "70%",
            maxWidth: 90,
            height: barHeight,
            background: `linear-gradient(180deg, ${step.color} 0%, ${step.color}dd 100%)`,
            border: `1px solid ${step.color}66`,
            borderRadius: "10px 10px 4px 4px",
            boxShadow: `0 4px 12px ${step.color}33`,
          }}
        />
      </div>

      {/* Etiqueta inferior */}
      <p
        style={{
          margin: "10px 0 2px",
          fontSize: "0.8rem",
          fontWeight: 700,
          color: "var(--text-primary,#fff)",
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {step.label}
      </p>
      <p
        style={{
          margin: 0,
          fontSize: "0.72rem",
          color: "var(--text-secondary,#aaa)",
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        {step.reason}
      </p>
    </div>
  );
}

export default function WaterfallHourlyRate() {
  return (
    <section
      aria-label="Cascada visual del descenso de 50 €/h percibidos a 11,57 €/h netos reales del coach online"
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
        De 50 €/h percibidos a{" "}
        <span style={{ color: "#ef4444", whiteSpace: "nowrap" }}>
          11,57 €/h reales
        </span>
      </h3>
      <p
        style={{
          margin: "0 0 24px",
          textAlign: "center",
          fontSize: "0.86rem",
          color: "var(--text-secondary,#aaa)",
          lineHeight: 1.5,
        }}
      >
        Tres capas invisibles vacían la tarifa que el coach cree cobrar:{" "}
        <strong style={{ color: "#ef4444" }}>IVA, horas ocultas y fiscalidad</strong>.
      </p>

      {/* Cascada de 4 barras */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "8px 4px 4px",
          background: "rgba(0,0,0,0.20)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 14,
          position: "relative",
        }}
      >
        {steps.map((s, idx) => (
          <StepBar key={s.id} step={s} isFirst={idx === 0} />
        ))}
      </div>

      {/* Línea conectora conceptual + referencia dependiente */}
      <div
        style={{
          marginTop: 18,
          padding: "12px 14px",
          background: "rgba(0,0,0,0.28)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 12px",
            background: "#b91c1c22",
            border: "1px solid #b91c1c66",
            borderRadius: 100,
            color: "#ef4444",
            fontSize: "0.85rem",
            fontWeight: 800,
            whiteSpace: "nowrap",
          }}
        >
          <TrendingDown size={16} />
          {fmt(11.57)} €/h neto real
        </span>
        <ArrowRight size={18} color="var(--text-secondary,#888)" />
        <span
          style={{
            fontSize: "0.85rem",
            color: "var(--text-secondary,#bbb)",
            whiteSpace: "nowrap",
          }}
        >
          Menos que un dependiente (~{fmt(REFERENCE_DEPENDIENTE)} €/h)
        </span>
      </div>

      <p
        style={{
          marginTop: 16,
          textAlign: "center",
          fontSize: "0.8rem",
          color: "var(--text-secondary,#aaa)",
          lineHeight: 1.55,
          fontStyle: "italic",
        }}
      >
        Cobrar 100 €/mes no significa 50 €/h: cada capa —IVA, horas invisibles y
        fiscalidad— corta la tarifa hasta dejarla por debajo del SMI horario de un
        empleo por cuenta ajena.
      </p>
    </section>
  );
}
