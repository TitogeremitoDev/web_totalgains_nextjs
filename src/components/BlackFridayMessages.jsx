import { MessageSquareText } from "lucide-react";

/**
 * BlackFridayMessages — Los tres mensajes del embudo de Black Friday, listos
 * para copiar: abrir la lista de espera, avisar del acceso anticipado y el
 * último aviso. Lo que va entre corchetes lo cambia el entrenador. El último
 * solo vale si de verdad cierra: lo dice el pie y el artículo (art. 23.4 de
 * la Ley de Competencia Desleal).
 */

const mensajes = [
  {
    cuando: "Fase 1 · Abrir la lista de espera",
    canal: "Historias, publicación o difusión",
    color: "#22c55e",
    texto: "Estoy preparando algo para quien quiera empezar enero en serio: plazas para entrenar conmigo desde el primer lunes del año, con algo que no voy a volver a ofrecer. Si quieres enterarte antes que nadie, respóndeme «ENERO» y te apunto a la lista.",
  },
  {
    cuando: "Fase 3 · Acceso anticipado (solo la lista)",
    canal: "Mensaje directo, uno a uno",
    color: "#a78bfa",
    texto: "Como estás en la lista, te escribo antes que a nadie: desde hoy y hasta el jueves puedes reservar tu plaza para enero. Son [10] plazas y llevan [la valoración inicial y el plan de Navidad]. El viernes lo abro para todo el mundo. ¿Te guardo una?",
  },
  {
    cuando: "Fase 4 · Último aviso (lunes 30)",
    canal: "Historias y mensaje a quien preguntó",
    color: "#fa709a",
    texto: "Hoy a las 23:59 cierro la preventa de enero. Quedan [3] plazas. Si te lo estabas pensando, este es el momento: no vuelvo a abrir plazas hasta [marzo].",
  },
];

export default function BlackFridayMessages() {
  return (
    <section
      aria-label="Tres mensajes listos para copiar para el embudo de Black Friday de un entrenador: abrir la lista de espera, el acceso anticipado para la lista y el último aviso del cierre"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Los tres mensajes del embudo, listos para copiar
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Cambia lo que va entre corchetes y escríbelo con tus palabras.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {mensajes.map((m) => (
          <article key={m.cuando} style={{ padding: "16px 18px", background: "rgba(0,0,0,0.2)", border: `1px solid ${m.color}44`, borderRadius: 14 }}>
            <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <MessageSquareText size={17} style={{ color: m.color, flexShrink: 0 }} />
                <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 800, color: m.color }}>{m.cuando}</h4>
              </div>
              <span style={{ fontSize: "0.72rem", color: "var(--text-secondary,#999)" }}>{m.canal}</span>
            </header>
            <p style={{ margin: 0, padding: "12px 14px", background: `${m.color}0D`, borderLeft: `3px solid ${m.color}`, borderRadius: 8, fontSize: "0.9rem", color: "var(--text-primary,#e5e5e5)", lineHeight: 1.6 }}>
              {m.texto}
            </p>
          </article>
        ))}
      </div>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Manda el último aviso solo si de verdad cierras ese día y quedan esas plazas. Si no, no lo mandes.
      </p>
    </section>
  );
}
