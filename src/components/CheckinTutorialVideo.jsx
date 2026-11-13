/**
 * CheckinTutorialVideo — El tutorial «Tu seguimiento, a tu manera» (88 s, 1280x720,
 * con música) que ya está publicado en totalgains.es/video desde el 10-nov-2026 y
 * en la app (Configuración › Tutoriales › Seguimiento). Con controles y
 * preload="none": no se descarga ni un byte del mp4 hasta que el lector pulsa
 * play; mientras tanto se ve el póster.
 */

export default function CheckinTutorialVideo() {
  return (
    <figure
      aria-label="Vídeo tutorial de 88 segundos: tu revisión en lugar del check-in semanal, quitar una semana, lo que ve tu cliente y el alta de tus clientes en TotalGains"
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
        poster="/video/coach-seguimiento-paso-a-paso.jpg"
        width={1280}
        height={720}
        style={{ display: "block", width: "100%", height: "auto", borderRadius: 12, background: "#000" }}
      >
        <source src="/video/coach-seguimiento-paso-a-paso.mp4" type="video/mp4" />
      </video>
      <figcaption style={{ marginTop: 14, textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Tutorial de 88 segundos: tu revisión en lugar del check-in semanal, quitar una semana, lo que ve tu cliente y el alta a tu medida. Datos de ejemplo.
      </figcaption>
    </figure>
  );
}
