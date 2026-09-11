import { Apple, Stethoscope, Zap } from "lucide-react";

/**
 * SupplementPurposeSplit — Por que "grupo A" no significa "bueno".
 *
 * Proteina, vitamina D y creatina estan los tres en el grupo A del marco del AIS
 * y son tres cosas distintas: comida, medicina y rendimiento. El grafico existe
 * para romper la lectura binaria (sirve / no sirve) y sustituirla por la util
 * (sirve PARA QUE y PARA QUIEN).
 */

const columnas = [
  {
    icon: Apple,
    color: "#22c55e",
    titulo: "Alimento deportivo",
    pregunta: "¿Te ahorra una comida?",
    ejemplo: "Proteína en polvo",
    explica: "No añade nada que no tenga la comida de verdad. Añade que te la tomes el día que no hay tiempo de cocinar.",
    cuando: "Cuando el problema es logístico, no fisiológico.",
  },
  {
    icon: Stethoscope,
    color: "#4facfe",
    titulo: "Suplemento médico",
    pregunta: "¿Te falta eso?",
    ejemplo: "Vitamina D3, zinc, hierro",
    explica: "Corrige una carencia. Si no tienes la carencia, no corrige nada: te deja donde estabas y con el bote más pequeño.",
    cuando: "Cuando hay una analítica que lo dice. Nunca por defecto.",
  },
  {
    icon: Zap,
    color: "#fa709a",
    titulo: "Suplemento de rendimiento",
    pregunta: "¿Rindes más con eso?",
    ejemplo: "Creatina, cafeína",
    explica: "Es lo único que de verdad busca la gente cuando pregunta por suplementos. Y es la lista más corta de las tres.",
    cuando: "Cuando el resto ya está en su sitio: comer, dormir y entrenar.",
  },
];

export default function SupplementPurposeSplit() {
  return (
    <section
      aria-label="Las tres funciones distintas que agrupa la categoría de evidencia sólida: alimento deportivo, suplemento médico para corregir carencias y suplemento de rendimiento"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        &ldquo;Evidencia sólida&rdquo; no quiere decir lo mismo tres veces
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Proteína, vitamina D y creatina comparten el mismo grupo. No comparten para qué sirven ni a quién.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {columnas.map((c) => {
          const Icon = c.icon;
          return (
            <article
              key={c.titulo}
              style={{
                flex: "1 1 250px", minWidth: 0, padding: "20px 20px",
                background: `linear-gradient(180deg, ${c.color}0F 0%, ${c.color}05 100%)`,
                border: `1px solid ${c.color}44`, borderRadius: 16,
                display: "flex", flexDirection: "column",
              }}
            >
              <header style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `${c.color}22`, border: `1px solid ${c.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: c.color, flexShrink: 0,
                  }}
                >
                  <Icon size={19} />
                </div>
                <h4 style={{ margin: 0, fontSize: "0.98rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{c.titulo}</h4>
              </header>

              <p style={{ margin: "0 0 12px", fontSize: "0.94rem", fontWeight: 800, color: c.color, lineHeight: 1.4 }}>{c.pregunta}</p>

              <div style={{ padding: "8px 11px", background: "rgba(0,0,0,0.3)", borderRadius: 8, marginBottom: 12 }}>
                <p style={{ margin: 0, fontSize: "0.68rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>De los ocho</p>
                <p style={{ margin: "3px 0 0", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary,#ddd)", lineHeight: 1.4 }}>{c.ejemplo}</p>
              </div>

              <p style={{ margin: "0 0 12px", fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55, flex: 1 }}>{c.explica}</p>

              <p style={{ margin: 0, fontSize: "0.8rem", color: c.color, lineHeight: 1.5, fontWeight: 600 }}>{c.cuando}</p>
            </article>
          );
        })}
      </div>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Cuando un cliente pregunta &ldquo;¿esto sirve?&rdquo;, casi siempre está preguntando por la tercera columna. Y casi siempre le han vendido algo de las otras dos.
      </p>
    </section>
  );
}
