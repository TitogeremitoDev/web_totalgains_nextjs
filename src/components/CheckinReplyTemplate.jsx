import { ThumbsUp, Wrench, CalendarCheck } from "lucide-react";

/**
 * CheckinReplyTemplate — Ejemplo de respuesta a un check-in: lo que ha ido bien,
 * un solo ajuste y el plan de la semana con fecha. Siempre en positivo (norma de
 * German para todo mensaje a clientes). La clienta del ejemplo es inventada.
 * Apoyo: el modelo de «supportive accountability» (Mohr y colaboradores, J Med
 * Internet Res 2011) pide expectativas claras, centradas en el proceso y
 * acordadas con la persona.
 */

const partes = [
  { icon: ThumbsUp, color: "#22c55e", titulo: "1. Lo que ha ido bien", texto: "«Marta, cuatro de cuatro entrenos y tu media de peso baja 0,4 kg: vas justo al ritmo que queríamos.»" },
  { icon: Wrench, color: "#eab308", titulo: "2. Un solo ajuste", texto: "«Me cuentas que el miércoles y el jueves llegaste con mucha hambre a la cena. Vamos a pasar parte de los hidratos de la comida a la merienda.»" },
  { icon: CalendarCheck, color: "#8fa4f5", titulo: "3. El plan, con fecha", texto: "«Esta semana, la merienda nueva de lunes a viernes. El miércoles me dices qué tal el hambre, y el domingo toca foto.»" },
];

export default function CheckinReplyTemplate() {
  return (
    <section
      aria-label="Ejemplo de respuesta a un check-in semanal en tres partes: lo que ha ido bien, un solo ajuste y el plan de la semana con fecha"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Una respuesta que se entiende y se cumple
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Tres partes, en este orden. La clienta del ejemplo es inventada.
      </p>

      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {partes.map((p) => {
          const Icon = p.icon;
          return (
            <li
              key={p.titulo}
              style={{
                display: "flex", gap: 12, padding: "14px 16px 16px",
                background: `linear-gradient(180deg, ${p.color}12 0%, ${p.color}05 100%)`,
                border: `1px solid ${p.color}44`, borderRadius: 14,
              }}
            >
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
                <p style={{ margin: "0 0 4px", fontSize: "0.9rem", fontWeight: 800, color: p.color }}>{p.titulo}</p>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-primary,#fff)", lineHeight: 1.55 }}>{p.texto}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Una decisión, en positivo y con fecha. Si hay algo que corregir, que sea una sola cosa: la que más arregla del resto.
      </p>
    </section>
  );
}
