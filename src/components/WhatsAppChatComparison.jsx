import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";

/**
 * WhatsAppChatComparison — dos hilos de WhatsApp lado a lado con la misma pregunta
 * del cliente y dos respuestas del coach: la que mata confianza vs la que la construye.
 * Ilustra el patrón central del artículo: la diferencia está en 15 palabras, no en 15 mensajes.
 */

const scenarios = [
  {
    key: "bad",
    label: "Coach reactivo",
    color: "#ef4444",
    icon: ThumbsDown,
    bubbles: [
      { from: "client", text: "Llevo 3 semanas estancada, no bajo peso 😔" },
      { from: "coach", text: "Es normal, a todo el mundo le pasa. Métele más ganas." },
      { from: "client", text: "Vale... ok" },
    ],
    result: "Se siente sola, culpable y planeando la baja del mes que viene.",
  },
  {
    key: "good",
    label: "Coach profesional",
    color: "#22c55e",
    icon: ThumbsUp,
    bubbles: [
      { from: "client", text: "Llevo 3 semanas estancada, no bajo peso 😔" },
      { from: "coach", text: "Vamos a mirar las tres causas típicas: sueño, estrés y macros. ¿Cuántas horas duermes esta semana y cómo has ido de trabajo?" },
      { from: "client", text: "Durmiendo 5-6h y con estrés brutal en oficina" },
      { from: "coach", text: "Ahí lo tenemos. Ajusto la carga esta semana y bajamos ligeramente las kcal el findes. Te llega el plan mañana antes de las 10." },
    ],
    result: "Se siente escuchada, con hipótesis clara y fecha concreta.",
  },
];

function Bubble({ b, color }) {
  const isClient = b.from === "client";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isClient ? "flex-start" : "flex-end",
        marginBottom: 8,
      }}
    >
      <div
        style={{
          maxWidth: "82%",
          padding: "8px 12px",
          background: isClient ? "rgba(255,255,255,0.06)" : `${color}22`,
          border: isClient ? "1px solid rgba(255,255,255,0.1)" : `1px solid ${color}55`,
          borderRadius: 14,
          borderTopLeftRadius: isClient ? 4 : 14,
          borderTopRightRadius: isClient ? 14 : 4,
          fontSize: "0.86rem",
          lineHeight: 1.45,
          color: "var(--text-primary,#fff)",
        }}
      >
        {b.text}
      </div>
    </div>
  );
}

function ChatCard({ s }) {
  const Icon = s.icon;
  return (
    <article
      style={{
        flex: "1 1 320px",
        minWidth: 280,
        padding: "18px 16px",
        background: `linear-gradient(180deg, ${s.color}12 0%, ${s.color}05 100%)`,
        border: `1px solid ${s.color}55`,
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 14,
          paddingBottom: 12,
          borderBottom: `1px solid ${s.color}33`,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: `${s.color}22`,
            border: `1px solid ${s.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: s.color,
            flexShrink: 0,
          }}
        >
          <Icon size={18} />
        </div>
        <div>
          <div
            style={{
              fontSize: "0.68rem",
              color: "var(--text-secondary,#888)",
              textTransform: "uppercase",
              letterSpacing: 0.5,
              fontWeight: 700,
            }}
          >
            <MessageCircle size={11} style={{ display: "inline", marginRight: 4, verticalAlign: -1 }} />
            WhatsApp
          </div>
          <div style={{ fontSize: "0.94rem", fontWeight: 800, color: s.color }}>{s.label}</div>
        </div>
      </header>

      <div style={{ flex: 1 }}>
        {s.bubbles.map((b, i) => (
          <Bubble key={i} b={b} color={s.color} />
        ))}
      </div>

      <div
        style={{
          marginTop: 14,
          padding: "10px 12px",
          background: `${s.color}18`,
          border: `1px solid ${s.color}55`,
          borderRadius: 10,
          fontSize: "0.8rem",
          color: "var(--text-primary,#ddd)",
          lineHeight: 1.5,
        }}
      >
        <strong style={{ color: s.color }}>Cómo se queda:</strong> {s.result}
      </div>
    </article>
  );
}

export default function WhatsAppChatComparison() {
  return (
    <section
      aria-label="Dos respuestas al mismo mensaje de una clienta estancada: la del coach reactivo mata confianza, la del coach profesional la construye"
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
        Mismo mensaje, dos respuestas
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        La diferencia entre retener y perder una clienta está en 15 palabras, no en 15 mensajes.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {scenarios.map((s) => (
          <ChatCard key={s.key} s={s} />
        ))}
      </div>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Lo que dices ahora se paga (o se cobra) dentro de 3 meses en tu tasa de renovación.
      </p>
    </section>
  );
}
