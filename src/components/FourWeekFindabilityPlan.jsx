import { MapPin, FileText, Star, Search, Repeat } from "lucide-react";

/**
 * FourWeekFindabilityPlan — Plan de cuatro semanas para que te encuentren en
 * el mapa, en Google y en las IAs, más lo que se repite cada mes. Las normas
 * que cita salen de la ayuda de Google (Perfil de Empresa: elegibilidad,
 * nombre sin palabras añadidas, reseñas sin incentivos ni pedidas solo a los
 * contentos), comprobadas el 30-oct-2026. El reparto por semanas es nuestro.
 */

const semanas = [
  {
    icono: MapPin,
    titulo: "Semana 1 · Tu ficha",
    puntos: [
      "Si entrenas en persona: Perfil de Empresa con la categoría «Entrenador personal», tu zona, tu horario y fotos reales.",
      "En el nombre, solo tu nombre o el de tu marca: nada de «entrenador barato Granada».",
      "Si solo entrenas online, no te toca ficha: usa esta semana para que tu nombre y tu frase sean iguales en Instagram, Google y tu web.",
    ],
  },
  {
    icono: FileText,
    titulo: "Semana 2 · Tu web",
    puntos: [
      "Una página por servicio, con tu ciudad escrita en el texto.",
      "Precio o «desde», modalidad (en persona u online) y cómo empezar.",
      "Cinco preguntas frecuentes con respuestas cortas: son las que la IA puede citar.",
    ],
  },
  {
    icono: Star,
    titulo: "Semana 3 · Tus reseñas",
    puntos: [
      "Pídela a todos tus clientes, no solo a los más contentos, con el enlace directo.",
      "Sin nada a cambio: ni descuentos ni sesiones gratis.",
      "Contesta a cada una, también a la regular.",
    ],
  },
  {
    icono: Search,
    titulo: "Semana 4 · La prueba",
    puntos: [
      "Busca en Google lo que buscaría tu cliente y mira si sales en el mapa.",
      "Pregúntaselo a ChatGPT y a Gemini con las mismas palabras.",
      "Apunta qué dicen de ti y corrige en tu web lo que digan mal.",
    ],
  },
];

export default function FourWeekFindabilityPlan() {
  return (
    <section
      aria-label="Plan de cuatro semanas: semana 1, la ficha de Google; semana 2, la web; semana 3, las reseñas; semana 4, comprobar si sales en Google y en las IAs; y después, cada mes, dos reseñas nuevas, una pregunta nueva en la web y repasar la ficha"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Cuatro semanas para que te encuentren
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Una tarea por semana, de una a dos horas cada una. En ese orden, porque cada paso usa el anterior.
      </p>

      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 14, flexWrap: "wrap" }}>
        {semanas.map(({ icono: Icono, titulo, puntos }) => (
          <li key={titulo} style={{ flex: "1 1 380px", minWidth: 0, padding: "16px 18px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(102,126,234,0.25)", borderRadius: 16 }}>
            <p style={{ margin: "0 0 10px", display: "flex", gap: 8, alignItems: "center", fontSize: "1rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>
              <Icono size={18} style={{ color: "#667eea", flexShrink: 0 }} aria-hidden="true" />{titulo}
            </p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: "0.84rem", color: "var(--text-secondary,#ccc)", lineHeight: 1.55 }}>
              {puntos.map((p) => <li key={p} style={{ marginBottom: 5 }}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>

      <p style={{ margin: "16px 0 0", padding: "12px 16px", display: "flex", gap: 10, alignItems: "center", borderRadius: 14, background: "rgba(250,112,154,0.08)", border: "1px solid rgba(250,112,154,0.3)", fontSize: "0.86rem", color: "var(--text-primary,#eee)", lineHeight: 1.5 }}>
        <Repeat size={18} style={{ color: "#fa709a", flexShrink: 0 }} aria-hidden="true" />
        <span><strong>Después, cada mes:</strong> dos reseñas nuevas, una pregunta nueva en tu web y un repaso de la ficha (horario, fotos, servicios).</span>
      </p>

      <p style={{ margin: "20px 0 0", textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        Nada de esto da resultados en una semana. Lo que sí hace es que, cuando alguien te busque, encuentre algo concreto que contar de ti, y eso es lo único que el mapa, Google y la IA saben usar.
      </p>
    </section>
  );
}
