import { MessageCircleQuestion, CircleCheck, CircleAlert } from "lucide-react";

/**
 * SupportQuestionsChecklist — Seis preguntas para hacerle a cualquier
 * proveedor de software antes de contratar, con la respuesta que conviene
 * oír y la señal de alarma. Vale para cualquier proveedor, también para
 * TotalGains: el artículo invita a probarlo escribiendo a soporte.
 */

const preguntas = [
  { q: "¿Quién me contesta cuando escribo: una persona o un bot?", si: "Una persona, y que puedas pedirla desde el primer mensaje.", no: "Que solo haya chat automático o un formulario." },
  { q: "¿En qué idioma y en qué plazo, por escrito?", si: "Tu idioma y un plazo concreto en horas.", no: "«Lo antes posible»." },
  { q: "¿Me ayudáis a migrar? ¿Cuánto se tarda?", si: "Ayuda real con tus clientes, rutinas y dietas, y un plazo en días.", no: "Un enlace a un tutorial y suerte." },
  { q: "Si borro algo por error, ¿qué recupero yo y qué recuperáis vosotros?", si: "Archivado reversible, historial de planes y alguien que mire las copias de seguridad.", no: "«Lo borrado no se puede recuperar», sin más." },
  { q: "Si necesito algo que no existe, ¿quién lo escucha?", si: "Alguien que lo lee y te dice sí, no o cuándo.", no: "Un buzón de sugerencias que nunca contesta." },
  { q: "¿El soporte cambia según el plan?", si: "Que te lo digan claro antes de pagar.", no: "Descubrirlo el día que lo necesitas." },
];

export default function SupportQuestionsChecklist() {
  return (
    <section
      aria-label="Seis preguntas sobre el soporte que conviene hacer a cualquier proveedor de software antes de contratar, con la respuesta que conviene oír y la señal de alarma de cada una"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Seis preguntas antes de contratar cualquier software
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Hazlas por escrito y guarda las respuestas. Valen para cualquier proveedor, también para nosotros.
      </p>

      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {preguntas.map((p, i) => (
          <li
            key={p.q}
            style={{ padding: "16px 16px", background: "rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14 }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
              <MessageCircleQuestion size={18} style={{ color: "#8fa4f5", flexShrink: 0, marginTop: 2 }} />
              <p style={{ margin: 0, fontSize: "0.98rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.4 }}>
                {i + 1}. {p.q}
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 240px", minWidth: 0, display: "flex", gap: 8, alignItems: "flex-start", padding: "9px 11px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 10 }}>
                <CircleCheck size={15} style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }} />
                <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>
                  <strong style={{ color: "#22c55e" }}>Lo que quieres oír:</strong> {p.si}
                </p>
              </div>
              <div style={{ flex: "1 1 240px", minWidth: 0, display: "flex", gap: 8, alignItems: "flex-start", padding: "9px 11px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 10 }}>
                <CircleAlert size={15} style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }} />
                <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>
                  <strong style={{ color: "#ef4444" }}>Señal de alarma:</strong> {p.no}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Si a alguna te contestan con un enlace a las preguntas frecuentes, ya tienes la respuesta.
      </p>
    </section>
  );
}
