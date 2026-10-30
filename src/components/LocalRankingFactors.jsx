import { Target, Navigation, Star, CircleCheck, CircleMinus, CircleDot } from "lucide-react";

/**
 * LocalRankingFactors — Los tres factores con los que Google ordena las fichas
 * en el mapa, tal como los define su ayuda oficial («Cómo mejorar tu
 * posicionamiento local en Google», support.google.com/business/answer/7091,
 * consultada el 30-oct-2026): relevancia, distancia y prominencia. «No se
 * puede solicitar ni pagar por obtener un mejor posicionamiento local» y
 * «cuantas más reseñas y valoraciones positivas, mejor será el posicionamiento
 * local». Qué puede mover el entrenador en cada uno es traducción nuestra.
 */

const factores = [
  {
    icono: Target,
    nombre: "Relevancia",
    que: "Lo que se parece tu ficha a lo que ha buscado esa persona.",
    control: "Lo controlas tú",
    controlIcono: CircleCheck,
    color: "#22c55e",
    haces: ["Categoría principal: «Entrenador personal»", "Descripción con a quién entrenas y dónde", "Tus servicios, uno a uno"],
  },
  {
    icono: Navigation,
    nombre: "Distancia",
    que: "Lo lejos que estás de quien busca.",
    control: "No lo controlas",
    controlIcono: CircleMinus,
    color: "#ef4444",
    haces: ["Dirección exacta si te visitan", "Zona de servicio bien marcada si vas tú", "Nada más: no se puede «acercar» una ficha"],
  },
  {
    icono: Star,
    nombre: "Prominencia",
    que: "Lo conocido que eres: reseñas, valoraciones y webs que hablan de ti.",
    control: "En parte",
    controlIcono: CircleDot,
    color: "#eab308",
    haces: ["Reseñas de tus clientes, todas", "Responder a cada una", "Que te nombren otras webs: tu gimnasio, un fisio, la prensa local"],
  },
];

export default function LocalRankingFactors() {
  return (
    <section
      aria-label="Los tres factores con los que Google ordena las fichas en el mapa: relevancia, que controlas tú; distancia, que no controlas; y prominencia, que controlas en parte sobre todo con reseñas"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Cómo ordena Google el mapa
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Los tres factores que Google explica en su propia ayuda, y lo que puedes hacer en cada uno.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {factores.map(({ icono: Icono, nombre, que, control, controlIcono: Control, color, haces }) => (
          <article key={nombre} style={{ flex: "1 1 250px", minWidth: 0, padding: "18px 18px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(102,126,234,0.25)", borderRadius: 16 }}>
            <p style={{ margin: "0 0 6px", display: "flex", gap: 8, alignItems: "center", fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>
              <Icono size={18} style={{ color: "#667eea", flexShrink: 0 }} aria-hidden="true" />{nombre}
            </p>
            <p style={{ margin: "0 0 10px", fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>{que}</p>
            <p style={{ margin: "0 0 12px", display: "inline-flex", gap: 6, alignItems: "center", padding: "4px 10px", borderRadius: 999, fontSize: "0.78rem", fontWeight: 700, color, background: `${color}1f` }}>
              <Control size={14} aria-hidden="true" />{control}
            </p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: "0.83rem", color: "var(--text-primary,#eee)", lineHeight: 1.55 }}>
              {haces.map((h) => <li key={h} style={{ marginBottom: 4 }}>{h}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <p style={{ margin: "20px 0 0", textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        Google lo dice tal cual: no se puede pagar para subir en el mapa, y cuantas más reseñas y valoraciones positivas, mejor posicionamiento (
        <a href="https://support.google.com/business/answer/7091?hl=es" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>ayuda de Google</a>
        ). La distancia no se toca; la relevancia es una tarde de trabajo; la prominencia es lo que separa dos fichas igual de cerca.
      </p>
    </section>
  );
}
