import { LineChart, HeartPulse, Camera, CheckCircle2 } from "lucide-react";

/**
 * CheckinReviewTimer — Un orden para revisar un check-in semanal en unos 10
 * minutos. Es un método de trabajo (no sale de un estudio) y el pie lo dice.
 * Los minutos suman 10: 2 + 2 + 3 + 3.
 */

const pasos = [
  { icon: LineChart, color: "#4facfe", min: 2, rango: "Minutos 0 a 2", titulo: "La tendencia", texto: "Peso medio y ritmo frente a las semanas anteriores, entrenos hechos y dieta. ¿Va hacia su objetivo?" },
  { icon: HeartPulse, color: "#fa709a", min: 2, rango: "Minutos 2 a 4", titulo: "Las sensaciones", texto: "Energía, sueño, estrés, hambre y molestias. Busca lo que ha cambiado desde la semana pasada, no el número suelto." },
  { icon: Camera, color: "#a78bfa", min: 3, rango: "Minutos 4 a 7", titulo: "Lo que te cuenta", texto: "Lo que ha escrito, sus fotos o sus vídeos. Aquí sale lo que los números no dicen." },
  { icon: CheckCircle2, color: "#22c55e", min: 3, rango: "Minutos 7 a 10", titulo: "Una decisión y la respuesta", texto: "Mantener, ajustar una sola cosa o proponer una llamada. Y contestar." },
];

export default function CheckinReviewTimer() {
  return (
    <section
      aria-label="Orden para revisar un check-in semanal en 10 minutos: tendencia, sensaciones, lo que cuenta el cliente y una decisión con la respuesta"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        El check-in en 10 minutos, siempre en el mismo orden
      </h3>
      <p style={{ margin: "0 0 20px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        De lo general a lo concreto, y acabando en una sola decisión.
      </p>

      <div aria-hidden="true" style={{ display: "flex", gap: 3, height: 12, marginBottom: 20 }}>
        {pasos.map((p, i) => (
          <div
            key={p.titulo}
            style={{
              flex: p.min, background: p.color,
              borderRadius: i === 0 ? "999px 0 0 999px" : i === pasos.length - 1 ? "0 999px 999px 0" : 0,
            }}
          />
        ))}
      </div>

      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {pasos.map((p) => {
          const Icon = p.icon;
          return (
            <li
              key={p.titulo}
              style={{
                flex: "1 1 190px", minWidth: 0, padding: "16px 16px 18px",
                background: `linear-gradient(180deg, ${p.color}12 0%, ${p.color}05 100%)`,
                border: `1px solid ${p.color}44`, borderRadius: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div
                  style={{
                    width: 32, height: 32, borderRadius: 9,
                    background: `${p.color}22`, border: `1px solid ${p.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: p.color, flexShrink: 0,
                  }}
                >
                  <Icon size={17} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: "0.68rem", fontWeight: 700, color: p.color, textTransform: "uppercase", letterSpacing: 0.6 }}>{p.rango}</p>
                  <p style={{ margin: "1px 0 0", fontSize: "0.92rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{p.titulo}</p>
                </div>
              </div>
              <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{p.texto}</p>
            </li>
          );
        })}
      </ol>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Es un orden de trabajo, no un estudio: con un cliente nuevo o con algún problema tardarás más, y con los que van bien, menos.
      </p>
    </section>
  );
}
