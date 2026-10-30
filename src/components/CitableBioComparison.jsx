import { CircleX, CircleCheck } from "lucide-react";

/**
 * CitableBioComparison — La misma presentación de una entrenadora escrita de
 * dos formas: la que una IA no puede usar (frases de motivación, sin un solo
 * dato) y la que sí puede citar (quién, dónde, para quién, cómo, cuánto y una
 * credencial). Base comprobada el 30-oct-2026:
 *  - Aggarwal et al. (2024), «GEO: Generative Engine Optimization», KDD 2024
 *    (arXiv 2311.09735): añadir citas, datos y fuentes subió hasta un ~40 % la
 *    visibilidad de un texto en respuestas de motores generativos; meter
 *    palabras clave a granel dio poca o ninguna mejora (en Perplexity, peor);
 *    y las webs que salían más abajo ganaron mucho más que la primera.
 *  - Google, «AI features and your website» (actualizada el 10-dic-2025): no
 *    hay requisitos ni optimizaciones especiales para salir en AI Overviews o
 *    el modo IA; lo importante, en texto.
 * Laura Ruiz es un ejemplo inventado.
 */

const vaga = {
  texto: "Entrenador apasionado por el fitness. Transformo vidas. ¡Escríbeme y empieza tu cambio! 💪🔥",
  marcas: ["No dice dónde trabajas", "No dice a quién entrenas", "Ni un dato que se pueda repetir"],
};

const citable = {
  texto: "Laura Ruiz, entrenadora personal en Granada desde 2019, graduada en Ciencias de la Actividad Física y del Deporte. Fuerza y pérdida de grasa para mujeres de más de 40. En persona en el Zaidín y online en toda España. Plan online desde 79 €/mes.",
  marcas: ["Quién y desde cuándo", "Credencial", "Para quién", "Dónde y cómo", "Cuánto cuesta"],
};

const burbuja = { margin: "0 0 12px", padding: "12px 14px", borderRadius: 14, background: "rgba(255,255,255,0.06)", fontSize: "0.9rem", color: "var(--text-primary,#eee)", lineHeight: 1.55 };

export default function CitableBioComparison() {
  return (
    <section
      aria-label="La misma presentación escrita de dos formas: una con frases de motivación y sin datos, que una inteligencia artificial no puede citar, y otra con nombre, ciudad, años de experiencia, titulación, público, modalidad y precio, que sí puede citar"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Tu presentación, vista por una IA
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Para recomendarte, una IA necesita frases que pueda repetir sin inventarse nada. La de la izquierda no tiene ninguna.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <article style={{ flex: "1 1 330px", minWidth: 0, padding: "18px 18px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.35)", borderRadius: 16 }}>
          <h4 style={{ margin: "0 0 14px", fontSize: "1rem", fontWeight: 800, color: "#ef4444" }}>La que no puede citar</h4>
          <p style={burbuja}>{vaga.texto}</p>
          {vaga.marcas.map((m) => (
            <p key={m} style={{ margin: "0 0 6px", display: "flex", gap: 8, alignItems: "center", fontSize: "0.83rem", color: "var(--text-secondary,#bbb)" }}>
              <CircleX size={14} style={{ color: "#ef4444", flexShrink: 0 }} aria-hidden="true" />{m}
            </p>
          ))}
        </article>

        <article style={{ flex: "1 1 330px", minWidth: 0, padding: "18px 18px", background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: 16 }}>
          <h4 style={{ margin: "0 0 14px", fontSize: "1rem", fontWeight: 800, color: "#22c55e" }}>La que sí puede citar</h4>
          <p style={burbuja}>{citable.texto}</p>
          {citable.marcas.map((m) => (
            <p key={m} style={{ margin: "0 0 6px", display: "flex", gap: 8, alignItems: "center", fontSize: "0.83rem", color: "var(--text-secondary,#bbb)" }}>
              <CircleCheck size={14} style={{ color: "#22c55e", flexShrink: 0 }} aria-hidden="true" />{m}
            </p>
          ))}
        </article>
      </div>

      <p style={{ margin: "20px 0 0", textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        En el estudio que dio nombre al GEO, añadir datos, citas y fuentes a un texto lo hizo hasta un 40 % más visible en las respuestas de las IAs, y repetir palabras clave apenas sirvió (
        <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>Aggarwal et al., 2024</a>
        ). Laura Ruiz es un ejemplo inventado.
      </p>
    </section>
  );
}
