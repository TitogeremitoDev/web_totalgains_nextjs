import { Camera, Smartphone, ScanEye, Dumbbell, Sun, Repeat } from "lucide-react";

/**
 * CameraAngleGuide — Desde dónde pedirle al atleta que grabe cada ejercicio
 * para poder corregirle la técnica con el móvil. Base comprobada el 23-oct-2026:
 *  - Vicente-Loren et al. (2026), Sensors 26(12):3749 (PMID 42356722): en la
 *    sentadilla con carga grabada en 2D, lo que se mide de perfil (plano
 *    sagital) es lo más preciso; la rodilla vista de frente varía bastante más.
 *  - Lopes et al. (2018), JOSPT 48(10):812-822 (PMID 29895235): el vídeo 2D
 *    de frente es fiable para repetir la misma medida, pero coincide poco con
 *    el 3D; no vale cuando hace falta medir con precisión.
 * Los ángulos por ejercicio son práctica de entrenador, no salen de un estudio.
 */

const reglas = [
  { Icon: Smartphone, t: "Apoyado, no en la mano", d: "En un banco, una mancuerna o un trípode." },
  { Icon: ScanEye, t: "Todo dentro del cuadro", d: "De los pies a la cabeza, con la barra y los discos." },
  { Icon: Repeat, t: "La serie entera", d: "Con su peso de verdad, no una repetición de prueba." },
  { Icon: Sun, t: "La luz delante", d: "Una ventana detrás lo convierte en una silueta." },
];

const ejercicios = [
  { n: "Sentadilla", desde: "De perfil", extra: "y otro de frente para las rodillas", altura: "A la altura de la cadera", mira: "Profundidad, inclinación del tronco y si se levantan los talones." },
  { n: "Peso muerto", desde: "De perfil", altura: "Entre la rodilla y la cadera", mira: "La espalda, la barra pegada a las piernas y si suben a la vez cadera y hombros." },
  { n: "Press de banca", desde: "De perfil", extra: "y otro desde los pies para ver si va igual por los dos lados", altura: "A la altura del banco", mira: "Dónde toca la barra, el recorrido y si se despega del banco." },
  { n: "Hip thrust", desde: "De perfil", altura: "A la altura de la cadera", mira: "Que llegue arriba del todo sin arquear la zona lumbar." },
  { n: "Zancada y búlgara", desde: "De frente", extra: "y otro de perfil para el tronco", altura: "A la altura de la rodilla", mira: "Si la rodilla sigue la línea del pie y cómo mantiene el equilibrio." },
  { n: "Dominada y remo", desde: "De perfil", extra: "o desde detrás en la dominada", altura: "A la altura del pecho", mira: "El recorrido completo y si tira con impulso en vez de con la espalda." },
];

export default function CameraAngleGuide() {
  return (
    <section
      aria-label="Guía para pedir un vídeo de técnica con el móvil: cuatro reglas generales (móvil apoyado, todo el cuerpo y la barra dentro del cuadro, la serie entera con su peso y la luz delante) y desde dónde grabar la sentadilla, el peso muerto, el press de banca, el hip thrust, la zancada y la dominada, a qué altura y qué mirar en cada uno"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Desde dónde pedirle que grabe cada ejercicio
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Mándale esto antes del primer vídeo y te ahorras la mitad de las repeticiones.
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
        {reglas.map(({ Icon, t, d }) => (
          <div key={t} style={{ flex: "1 1 190px", minWidth: 0, display: "flex", gap: 9, alignItems: "flex-start", padding: "12px 14px", background: "rgba(102,126,234,0.08)", border: "1px solid rgba(102,126,234,0.25)", borderRadius: 14 }}>
            <Icon size={16} style={{ color: "#667eea", flexShrink: 0, marginTop: 2 }} />
            <div style={{ minWidth: 0 }}>
              <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary,#ddd)" }}>{t}</p>
              <p style={{ margin: "2px 0 0", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.45 }}>{d}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {ejercicios.map((e) => {
          const frente = e.desde === "De frente";
          const color = frente ? "#fa709a" : "#667eea";
          return (
            <article key={e.n} style={{ flex: "1 1 260px", minWidth: 0, padding: "16px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <Dumbbell size={16} style={{ color: "var(--text-secondary,#aaa)", flexShrink: 0 }} />
                <h4 style={{ margin: 0, fontSize: "0.98rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{e.n}</h4>
              </div>
              <p style={{ margin: "0 0 6px", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 999, background: `${color}22`, color, fontSize: "0.8rem", fontWeight: 800 }}>
                  <Camera size={14} />{e.desde}
                </span>
                {e.extra ? <span style={{ fontSize: "0.78rem", color: "var(--text-secondary,#aaa)" }}>{e.extra}</span> : null}
              </p>
              <p style={{ margin: "0 0 6px", fontSize: "0.82rem", color: "var(--text-primary,#ddd)", fontWeight: 600 }}>{e.altura}</p>
              <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>{e.mira}</p>
            </article>
          );
        })}
      </div>

      <p style={{ margin: "20px 0 0", textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        Con un móvil, la vista de perfil es la que más se puede creer: profundidad, tronco y barra salen bien. La de frente sirve para ver si las rodillas se van claramente hacia dentro, no para medir grados (
        <a href="https://pubmed.ncbi.nlm.nih.gov/42356722/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>Vicente-Loren et al., 2026</a>
        ;{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29895235/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>Lopes et al., 2018</a>
        ). Los ángulos de cada ejercicio son práctica de entrenador, no salen de un estudio.
      </p>
    </section>
  );
}
