import { Timer, PhoneOff } from "lucide-react";

/**
 * LeadResponseDecay — Lo que cuesta tardar en contestar, con los datos del
 * estudio de Harvard Business Review (Oldroyd, McElheran y Elkington, 2011)
 * sobre 2.241 empresas.
 *
 * El grafico NO traduce los multiplicadores a coaching: dice explicitamente que
 * son B2B web de 2011. Lo que se traslada es la forma de la curva, y esa es la
 * unica lectura honesta que se puede sacar.
 */

const tramos = [
  { rango: "En 5 minutos", barra: 100, color: "#22c55e", nota: "100× más probable contactar y 21× más probable cualificar que esperando 30 minutos" },
  { rango: "En 1 hora",    barra: 55,  color: "#eab308", nota: "Casi 7× más probable cualificar que dejándolo para más tarde" },
  { rango: "Pasadas 24 h", barra: 12,  color: "#f97316", nota: "La probabilidad de cualificar cae más de 60 veces respecto a la primera hora" },
  { rango: "Nunca",        barra: 4,   color: "#ef4444", nota: "El 23 % de las empresas auditadas jamás llegó a responder" },
];

export default function LeadResponseDecay() {
  return (
    <section
      aria-label="Cómo cae la probabilidad de convertir un contacto según el tiempo que se tarda en responder, según el estudio de Harvard Business Review de 2011 sobre 2.241 empresas"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        El mejor mensaje del mundo, mandado tarde, no sirve
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Lo que pasa con un contacto según lo que tardas en contestarle.
      </p>

      <div>
        {tramos.map((t) => (
          <div key={t.rango} style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7, flexWrap: "wrap" }}>
              <Timer size={15} style={{ color: t.color, flexShrink: 0 }} />
              <span style={{ fontSize: "0.94rem", fontWeight: 800, color: t.color, whiteSpace: "nowrap", minWidth: 118 }}>{t.rango}</span>
              <span style={{ flex: "1 1 220px", fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>{t.nota}</span>
            </div>
            <div style={{ height: 10, background: "rgba(0,0,0,0.35)", borderRadius: 100, overflow: "hidden" }}>
              <div style={{ width: `${t.barra}%`, height: "100%", background: t.color, borderRadius: 100 }} />
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 18, padding: "14px 16px",
          background: "rgba(239,68,68,0.10)", border: "1px solid rgba(239,68,68,0.35)", borderRadius: 12,
          display: "flex", gap: 11, alignItems: "flex-start",
        }}
      >
        <PhoneOff size={17} style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }} />
        <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.6 }}>
          <strong style={{ color: "#ef4444" }}>El dato que más duele:</strong> entre las que sí contestaron, la media fue de <strong style={{ color: "var(--text-primary,#ddd)" }}>42 horas</strong>. No perdían por escribir mal. Perdían por escribir tarde.
        </p>
      </div>

      <p style={{ marginTop: 16, fontSize: "0.76rem", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Datos de Oldroyd, McElheran y Elkington, <em>The Short Life of Online Sales Leads</em>, Harvard Business Review, marzo de 2011, sobre 2.241 empresas.{" "}
        <strong style={{ color: "var(--text-secondary,#bbb)" }}>Léelo con cabeza:</strong> es un estudio de 2011 sobre formularios web B2B en Estados Unidos, no sobre entrenadores en Instagram. Los multiplicadores exactos no se trasladan a tu caso. La forma de la curva, sí.
      </p>
    </section>
  );
}
