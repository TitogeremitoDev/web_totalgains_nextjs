import { Scale, HeartPulse, Ruler, MessageCircle } from "lucide-react";

/**
 * CheckinQuestionSet — Las 10 preguntas de un check-in semanal que se rellena,
 * agrupadas en cuatro bloques. Apoyo (13-nov-2026):
 *  - Saw, Main y Gastin 2016 (Br J Sports Med 50:281-291): las medidas subjetivas
 *    (ánimo, estrés, cansancio) reflejan la carga con más sensibilidad y
 *    consistencia que las objetivas.
 *  - Zheng y colaboradores 2015 (Obesity 23:256-265): pesarse con regularidad se
 *    asocia a más pérdida de peso y no a peor ánimo.
 *  - Edwards y colaboradores 2009 (Cochrane MR000008): un cuestionario electrónico
 *    más corto aumenta la respuesta (OR 1,73).
 * Lo de medidas y fotos cada 2-4 semanas es práctica habitual, no un estudio: el
 * texto del artículo lo dice así.
 */

const bloques = [
  {
    icon: Scale,
    color: "#4facfe",
    titulo: "Los números",
    cada: "Cada semana",
    preguntas: [
      "¿Cuál ha sido tu peso medio esta semana?",
      "¿Cuántos entrenos has hecho de los que tocaban?",
      "Del 1 al 10, ¿cuánto has seguido la dieta?",
    ],
  },
  {
    icon: HeartPulse,
    color: "#fa709a",
    titulo: "Cómo se siente",
    cada: "Cada semana, del 1 al 10",
    preguntas: [
      "¿Qué tal tu energía?",
      "¿Cómo has dormido (horas y calidad)?",
      "¿Cuánto estrés has tenido?",
      "¿Cuánta hambre has pasado?",
    ],
  },
  {
    icon: Ruler,
    color: "#a78bfa",
    titulo: "El cuerpo",
    cada: "Molestias cada semana; medidas y fotos cada 2 a 4",
    preguntas: [
      "¿Alguna molestia o dolor? ¿Dónde y cuánto, del 1 al 10?",
      "Medidas y fotos, siempre en las mismas condiciones.",
    ],
  },
  {
    icon: MessageCircle,
    color: "#eab308",
    titulo: "Lo que no sale en los números",
    cada: "Cada semana",
    preguntas: ["¿Qué ha ido mejor, qué te ha costado más y en qué te ayudo?"],
  },
];

// Número de la primera pregunta de cada bloque (1, 4, 8, 10), calculado una vez.
const inicios = bloques.reduce((acc, b, i) => [...acc, i === 0 ? 1 : acc[i - 1] + bloques[i - 1].preguntas.length], []);

export default function CheckinQuestionSet() {
  return (
    <section
      aria-label="Las 10 preguntas de un check-in semanal: peso medio, entrenos, dieta, energía, sueño, estrés, hambre, molestias, medidas y fotos, y una pregunta abierta"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Las 10 preguntas de un check-in que se rellena
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Cada una tiene que servirte para decidir algo. Si no la usas, quítala.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {bloques.map((b, bi) => {
          const Icon = b.icon;
          return (
            <li
              key={b.titulo}
              style={{
                flex: "1 1 360px", minWidth: 0, padding: "16px 16px 18px",
                background: `linear-gradient(180deg, ${b.color}12 0%, ${b.color}05 100%)`,
                border: `1px solid ${b.color}44`, borderRadius: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div
                  style={{
                    width: 32, height: 32, borderRadius: 9,
                    background: `${b.color}22`, border: `1px solid ${b.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: b.color, flexShrink: 0,
                  }}
                >
                  <Icon size={17} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: "0.98rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{b.titulo}</p>
                  <p style={{ margin: "1px 0 0", fontSize: "0.74rem", fontWeight: 700, color: b.color, lineHeight: 1.4 }}>{b.cada}</p>
                </div>
              </div>
              <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {b.preguntas.map((p, pi) => {
                  const n = inicios[bi] + pi;
                  return (
                    <li key={p} style={{ display: "flex", gap: 8, alignItems: "baseline", margin: "0 0 6px", fontSize: "0.86rem", color: "var(--text-primary,#fff)", lineHeight: 1.5 }}>
                      <span style={{ flexShrink: 0, minWidth: 18, fontWeight: 800, color: b.color }}>{n}.</span>
                      <span>{p}</span>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Las de cómo se siente detectan antes el cansancio que muchas medidas objetivas (Saw y colaboradores, 2016). Medidas y fotos cada 2 a 4 semanas es una base práctica, no una regla de los estudios.
      </p>
    </section>
  );
}
