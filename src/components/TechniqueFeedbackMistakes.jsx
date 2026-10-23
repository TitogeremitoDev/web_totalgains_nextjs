import { ArrowRight } from "lucide-react";

/**
 * TechniqueFeedbackMistakes — Los cinco errores más comunes al corregir la
 * técnica por vídeo y qué hacer en su lugar.
 * Base comprobada el 23-oct-2026:
 *  - Sakadjian, Panchuk y Pearce (2014), JSCR 28(6):1613-1625 (PMID
 *    24149751): con el mismo entrenamiento y las mismas indicaciones, ver el
 *    vídeo de alguien que lo hace bien antes de cada serie aceleró la mejora
 *    de técnica en la cargada de potencia (15 jugadores sin experiencia).
 *  - Souissi et al. (2021), IJERPH 18(6):3069 (PMID 33809740): corrección a
 *    distancia por vídeo durante el confinamiento; con explicación además del
 *    vídeo, la mejora en la arrancada de jóvenes halterófilos se mantuvo una
 *    semana después; con el vídeo solo, no.
 */

const errores = [
  { e: "Corregirlo todo a la vez", h: "Una corrección por vídeo: la que más arregla del resto. Las demás, para el siguiente." },
  { e: "Opinar sobre un vídeo que no deja ver", h: "Si el ángulo no enseña lo que importa, pide otro antes de corregir. Corregir lo que no se ve es adivinar." },
  { e: "Contestar solo con texto", h: "Mándale tu vídeo haciendo el gesto, de 10 a 20 segundos, y explícale en una frase qué tiene que notar." },
  { e: "Dejarlo perdido en el chat", h: "Un sitio por atleta con sus vídeos ordenados por semana, y lo que ya contestaste marcado como respondido." },
  { e: "No volver a mirar", h: "Pide la siguiente serie y ponla al lado de la anterior. Si no ha cambiado, prueba otra indicación." },
];

export default function TechniqueFeedbackMistakes() {
  return (
    <section
      aria-label="Los cinco errores al corregir la técnica de un atleta por vídeo y qué hacer en su lugar: corregirlo todo a la vez, opinar sobre un vídeo que no deja ver, contestar solo con texto, dejarlo perdido en el chat y no volver a mirar"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Cinco errores al corregir por vídeo
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Y lo que funciona mejor en cada caso.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {errores.map((x, i) => (
          <div key={x.e} style={{ display: "flex", gap: 12, alignItems: "stretch", flexWrap: "wrap", padding: "12px 14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14 }}>
            <div style={{ flex: "1 1 230px", minWidth: 0, display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ width: 28, height: 28, borderRadius: 999, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(250,112,154,0.15)", color: "#fa709a", fontSize: "0.85rem", fontWeight: 800 }}>{i + 1}</span>
              <p style={{ margin: 0, fontSize: "0.92rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{x.e}</p>
            </div>
            <div style={{ flex: "2 1 320px", minWidth: 0, display: "flex", gap: 8, alignItems: "center" }}>
              <ArrowRight size={16} style={{ color: "#22c55e", flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>{x.h}</p>
            </div>
          </div>
        ))}
      </div>

      <p style={{ margin: "20px 0 0", textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        Tu vídeo sirve de modelo: ver a alguien hacerlo bien antes de cada serie aceleró la mejora de técnica en un estudio con jugadores sin experiencia (
        <a href="https://pubmed.ncbi.nlm.nih.gov/24149751/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>Sakadjian et al., 2014</a>
        ). Y a distancia, el vídeo con explicación funcionó mejor que el vídeo solo (
        <a href="https://pubmed.ncbi.nlm.nih.gov/33809740/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>Souissi et al., 2021</a>
        ).
      </p>
    </section>
  );
}
