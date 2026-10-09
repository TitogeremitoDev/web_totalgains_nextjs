import { UserRound, Bot } from "lucide-react";

/**
 * SupportStatsPanel — Lo que piden los clientes cuando una empresa mete IA en
 * su atención, con las tres notas de prensa de Gartner verificadas en su web
 * el 9-oct-2026 (2024-07-09, 2026-08-04 y 2026-09-02).
 *
 * El 50 % de «la IA me lo facilita» va a propósito en el pie: el mensaje del
 * artículo no es «la IA es mala», es «la IA no puede ser un muro». Quitarlo
 * convertiría el gráfico en algo que los propios datos no dicen.
 */

const datos = [
  { cifra: "87 %", texto: "considera imprescindible poder hablar con una persona cuando la empresa usa IA en su atención", fuente: "Gartner, 2026 · 3.566 clientes de empresa y de consumo", color: "#22c55e", icono: UserRound },
  { cifra: "64 %", texto: "preferiría que las empresas no usaran IA en su atención al cliente", fuente: "Gartner, 2024 · 5.728 clientes", color: "#8fa4f5", icono: Bot },
  { cifra: "53 %", texto: "se plantearía irse a la competencia si supiera que su empresa va a usar IA en la atención", fuente: "Gartner, 2024 · 5.728 clientes", color: "#fa709a", icono: Bot },
  { cifra: "27 %", texto: "volvería a probar un chatbot después de una mala experiencia con uno", fuente: "Gartner, 2026 · 3.566 clientes de empresa y de consumo", color: "#f97316", icono: Bot },
];

export default function SupportStatsPanel() {
  return (
    <section
      aria-label="Datos de Gartner sobre inteligencia artificial en la atención al cliente: el 87 por ciento considera imprescindible poder hablar con una persona, el 64 por ciento preferiría que no se usara IA, el 53 por ciento se plantearía cambiar de empresa y solo el 27 por ciento volvería a probar un chatbot tras una mala experiencia"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Lo que piden los clientes cuando hay IA de por medio
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Tres encuestas de Gartner a miles de clientes, de empresa y de consumo.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {datos.map((d) => {
          const Icon = d.icono;
          return (
            <article
              key={d.cifra + d.fuente}
              style={{
                flex: "1 1 190px", minWidth: 0, padding: "18px 16px",
                background: `linear-gradient(180deg, ${d.color}14 0%, ${d.color}05 100%)`,
                border: `1px solid ${d.color}44`, borderRadius: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: d.color, lineHeight: 1 }}>{d.cifra}</span>
                <Icon size={18} style={{ color: d.color, flexShrink: 0 }} />
              </div>
              <p style={{ margin: "10px 0 10px", fontSize: "0.86rem", color: "var(--text-primary,#ddd)", lineHeight: 1.5 }}>{d.texto}</p>
              <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-secondary,#999)", lineHeight: 1.4 }}>{d.fuente}</p>
            </article>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 16, padding: "14px 16px",
          background: "rgba(102,126,234,0.08)", border: "1px solid rgba(102,126,234,0.3)", borderRadius: 12,
        }}
      >
        <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.6 }}>
          <strong style={{ color: "var(--text-primary,#fff)" }}>La primera preocupación de los clientes</strong> no es que la IA se equivoque: es que les cueste más llegar a una persona. Y aun así, la mitad dice que la IA les facilita las gestiones. El problema no es la IA. Es usarla de muro.
        </p>
      </div>

      <p style={{ marginTop: 16, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Fuentes: Gartner, notas de prensa del{" "}
        <a href="https://www.gartner.com/en/newsroom/press-releases/2024-07-09-gartner-survey-finds-64-percent-of-customers-would-prefer-that-companies-didnt-use-ai-for-customer-service" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>9 de julio de 2024</a>,{" "}
        <a href="https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>4 de agosto de 2026</a> y{" "}
        <a href="https://www.gartner.com/en/newsroom/press-releases/2026-09-02-gartner-finds-only-27-percent-of-customers-would-try-a-chatbot-again-after-a-negative-experience" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>2 de septiembre de 2026</a>. Son clientes de todo tipo de empresas, no solo de software para entrenadores.
      </p>
    </section>
  );
}
