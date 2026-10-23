import { CircleX, CircleCheck, Video } from "lucide-react";

/**
 * CorrectionReplyComparison — La misma respuesta a un vídeo de sentadilla,
 * escrita de dos formas: la que satura (seis correcciones sobre el cuerpo,
 * solo texto) y la que se aplica (lo que está bien, una corrección sobre el
 * efecto, vídeo del entrenador y la siguiente serie pedida).
 * Base comprobada el 23-oct-2026:
 *  - Chua et al. (2021), Psychol Bull 147(6):618-645 (PMID 34843301):
 *    metaanálisis (73 estudios para rendimiento, 40 para aprendizaje); el foco
 *    externo (el efecto del movimiento) supera al interno (las partes del
 *    cuerpo), con más diferencia en lo aprendido que en lo del momento.
 *  - Finlay et al. (2025), Hum Mov Sci 102:103385 (PMID 40602018): en press de
 *    banca, las instrucciones de foco externo dieron más velocidad de barra.
 * Los dos mensajes son ejemplos nuestros, no frases de esos estudios.
 */

const satura = {
  texto: "Rodillas hacia fuera, pecho arriba, no levantes los talones, aprieta el abdomen, baja más y controla la bajada.",
  marcas: ["Seis correcciones a la vez", "Todas sobre su cuerpo", "Solo texto"],
};

const aplica = {
  texto: "La profundidad, perfecta. Para la próxima, una sola cosa: empuja el suelo con todo el pie, como si quisieras separarlo. Te mando cómo lo hago yo.",
  cierre: "Grábate la próxima serie y lo vemos.",
  marcas: ["Primero lo que está bien", "Una corrección", "Habla del efecto, no de la articulación", "Con tu vídeo", "Pide la siguiente"],
};

const burbuja = { margin: "0 0 12px", padding: "12px 14px", borderRadius: "16px 16px 16px 4px", background: "rgba(255,255,255,0.06)", fontSize: "0.9rem", color: "var(--text-primary,#eee)", lineHeight: 1.5 };

export default function CorrectionReplyComparison() {
  return (
    <section
      aria-label="Dos formas de contestar al mismo vídeo de sentadilla: una con seis correcciones sobre el cuerpo y solo texto, que satura, y otra que empieza por lo que está bien, da una sola corrección sobre el efecto del movimiento, adjunta un vídeo del entrenador y pide la siguiente serie"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        El mismo vídeo, dos respuestas
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Tu atleta te manda su sentadilla. Las dos respuestas tienen razón; solo una se puede aplicar en la siguiente serie.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <article style={{ flex: "1 1 330px", minWidth: 0, padding: "18px 18px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.35)", borderRadius: 16 }}>
          <h4 style={{ margin: "0 0 14px", fontSize: "1rem", fontWeight: 800, color: "#ef4444" }}>La que satura</h4>
          <p style={burbuja}>{satura.texto}</p>
          {satura.marcas.map((m) => (
            <p key={m} style={{ margin: "0 0 6px", display: "flex", gap: 8, alignItems: "center", fontSize: "0.83rem", color: "var(--text-secondary,#bbb)" }}>
              <CircleX size={14} style={{ color: "#ef4444", flexShrink: 0 }} />{m}
            </p>
          ))}
        </article>

        <article style={{ flex: "1 1 330px", minWidth: 0, padding: "18px 18px", background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: 16 }}>
          <h4 style={{ margin: "0 0 14px", fontSize: "1rem", fontWeight: 800, color: "#22c55e" }}>La que se aplica</h4>
          <p style={burbuja}>{aplica.texto}</p>
          <p style={{ ...burbuja, display: "flex", alignItems: "center", gap: 8, background: "rgba(102,126,234,0.14)", color: "var(--text-primary,#fff)", fontWeight: 700 }}>
            <Video size={16} style={{ color: "#667eea", flexShrink: 0 }} />Tu vídeo, 15 segundos
          </p>
          <p style={burbuja}>{aplica.cierre}</p>
          {aplica.marcas.map((m) => (
            <p key={m} style={{ margin: "0 0 6px", display: "flex", gap: 8, alignItems: "center", fontSize: "0.83rem", color: "var(--text-secondary,#bbb)" }}>
              <CircleCheck size={14} style={{ color: "#22c55e", flexShrink: 0 }} />{m}
            </p>
          ))}
        </article>
      </div>

      <p style={{ margin: "20px 0 0", textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        Hablar del efecto («empuja el suelo») en vez del cuerpo («estira las rodillas») da mejor resultado en el momento y, sobre todo, en lo que se aprende: lo resume un metaanálisis de más de 70 estudios (
        <a href="https://pubmed.ncbi.nlm.nih.gov/34843301/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>Chua et al., 2021</a>
        ). En el press de banca, con indicaciones así la barra subió más rápido (
        <a href="https://pubmed.ncbi.nlm.nih.gov/40602018/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>Finlay et al., 2025</a>
        ). Los dos mensajes son ejemplos nuestros.
      </p>
    </section>
  );
}
