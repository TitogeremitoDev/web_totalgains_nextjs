/**
 * CobrosTutorialVideo — El tutorial «Cobros» para entrenadores (89 s, 1280x720,
 * con música), publicado en totalgains.es/video y en la app (Tutoriales). Con
 * controles y preload="none": el mp4 no se descarga hasta que el lector pulsa play.
 */

export default function CobrosTutorialVideo() {
  return (
    <figure
      aria-label="Vídeo tutorial de 89 segundos: cómo cobrar a tus clientes dentro de la app de TotalGains, desde tu panel y desde su móvil"
      style={{
        maxWidth: 900, margin: "40px auto", padding: 20,
        background: "radial-gradient(ellipse at 25% 15%, rgba(102,126,234,0.28), transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(118,75,162,0.22), transparent 55%), linear-gradient(160deg, #0e0e12 0%, #131322 55%, #0e0e12 100%)",
        border: "1px solid rgba(255,255,255,0.06)", borderRadius: 24,
      }}
    >
      <video
        controls
        playsInline
        preload="none"
        poster="/video/coach-cobros-paso-a-paso.jpg"
        width={1280}
        height={720}
        style={{ display: "block", width: "100%", height: "auto", borderRadius: 12, background: "#000" }}
      >
        <source src="/video/coach-cobros-paso-a-paso.mp4" type="video/mp4" />
      </video>
      <figcaption style={{ marginTop: 14, textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Tutorial de 89 segundos: cobrar a tus clientes dentro de la app, visto desde tu panel y desde su móvil. Datos de ejemplo.
      </figcaption>
    </figure>
  );
}
