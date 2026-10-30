import { MapPin, Search, Sparkles } from "lucide-react";

/**
 * FindabilityChannels — Los tres sitios donde un cliente que aún no te conoce
 * busca entrenador: el mapa de Google (tu ficha), los resultados de Google
 * (tu web) y las IAs (ChatGPT, Gemini, el modo IA de Google).
 * Datos comprobados el 30-oct-2026:
 *  - GfK DAM (Europa Press, 20-may-2026): el 58 % de la población internauta
 *    española ya usa IA generativa; ChatGPT, cerca de 19 millones de usuarios
 *    únicos.
 *  - BrightLocal, Local Consumer Review Survey 2026 (EE. UU., 1.002 personas,
 *    informe de IA del 10-mar-2026): el 45 % usó una IA para que le
 *    recomendara un negocio local (6 % el año anterior) y el 97 % de esos
 *    usuarios contrasta a veces la recomendación con reseñas reales.
 * Las búsquedas de ejemplo son nuestras.
 */

const canales = [
  {
    icono: MapPin,
    color: "#fa709a",
    sitio: "El mapa de Google",
    tuyo: "Tu ficha de Google",
    busca: "«entrenador personal cerca de mí»",
    mira: "Tu categoría, tu zona, tus reseñas, tus fotos y tu horario.",
  },
  {
    icono: Search,
    color: "#667eea",
    sitio: "Los resultados de Google",
    tuyo: "Tu web",
    busca: "«entrenador personal para mujeres de más de 40 en Granada»",
    mira: "Lo que tienes escrito: a quién entrenas, dónde, cómo y cuánto cuesta.",
  },
  {
    icono: Sparkles,
    color: "#22c55e",
    sitio: "Las IAs",
    tuyo: "Todo lo anterior",
    busca: "«¿Qué entrenador me recomiendas en Granada para perder grasa después de los 40?»",
    mira: "Lo que encuentra escrito sobre ti en tu web, tu ficha, tus reseñas y otras webs.",
  },
];

const datos = [
  { cifra: "58 %", texto: "de los internautas españoles ya usa IA generativa", fuente: "GfK DAM, 2026" },
  { cifra: "45 %", texto: "pidió a una IA que le recomendara un negocio local (el año anterior, el 6 %)", fuente: "BrightLocal, EE. UU., 2026" },
  { cifra: "97 %", texto: "de esos usuarios contrasta a veces lo que le dice la IA con reseñas reales", fuente: "BrightLocal, EE. UU., 2026" },
];

export default function FindabilityChannels() {
  return (
    <section
      aria-label="Los tres sitios donde te busca un cliente que aún no te conoce: el mapa de Google, donde cuenta tu ficha; los resultados de Google, donde cuenta tu web; y las IAs como ChatGPT, que leen todo lo anterior"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Tres sitios, un mismo cliente
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Quien todavía no sabe que existes no te busca por tu nombre. Busca lo que necesita, y lo hace en uno de estos tres sitios.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {canales.map(({ icono: Icono, color, sitio, tuyo, busca, mira }) => (
          <article key={sitio} style={{ flex: "1 1 250px", minWidth: 0, padding: "18px 18px", background: "rgba(255,255,255,0.03)", border: `1px solid ${color}55`, borderRadius: 16 }}>
            <p style={{ margin: "0 0 4px", display: "flex", gap: 8, alignItems: "center", fontSize: "1rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>
              <Icono size={18} style={{ color, flexShrink: 0 }} aria-hidden="true" />{sitio}
            </p>
            <p style={{ margin: "0 0 12px", fontSize: "0.8rem", fontWeight: 700, color }}>Lo que cuenta: {tuyo}</p>
            <p style={{ margin: "0 0 10px", padding: "10px 12px", borderRadius: 12, background: "rgba(255,255,255,0.06)", fontSize: "0.85rem", color: "var(--text-primary,#eee)", lineHeight: 1.45 }}>{busca}</p>
            <p style={{ margin: 0, fontSize: "0.83rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>{mira}</p>
          </article>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
        {datos.map(({ cifra, texto, fuente }) => (
          <p key={texto} style={{ flex: "1 1 240px", minWidth: 0, margin: 0, padding: "12px 14px", borderRadius: 14, background: "rgba(102,126,234,0.08)", fontSize: "0.82rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.45 }}>
            <strong style={{ display: "block", fontSize: "1.35rem", color: "var(--text-primary,#fff)", whiteSpace: "nowrap" }}>{cifra}</strong>
            {texto} <span style={{ color: "var(--text-muted,#888)" }}>({fuente})</span>
          </p>
        ))}
      </div>

      <p style={{ margin: "20px 0 0", textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        Los tres leen lo mismo: lo que hay escrito sobre ti. Por eso no son tres trabajos distintos, es uno hecho bien. Y la IA no sustituye a las reseñas: casi todos los que le preguntan van después a comprobarlo (
        <a href="https://www.brightlocal.com/research/lcrs-ai-trust/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>BrightLocal, 2026</a>
        ).
      </p>
    </section>
  );
}
