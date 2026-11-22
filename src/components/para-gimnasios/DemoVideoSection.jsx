import DemoVideo from "@/components/DemoVideo";

/* ───────────────────────────────────────────────────────────
   1b. DEMO — el vídeo de producto (1:56, con sonido) justo tras el hero.
   El mismo que /funciones/gimnasios/ (data.demo en funciones/gimnasios.js).
   ─────────────────────────────────────────────────────────── */
export default function DemoVideoSection() {
  return (
    <section id="demo" style={{ padding: "40px 24px 90px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="aparece" style={{ textAlign: "center", marginBottom: 32 }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            La demo
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Míralo por dentro{" "}
            <span style={{ color: "var(--accent)" }}>en 2 minutos</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 640, margin: "14px auto 0", lineHeight: 1.6 }}>
            Un gimnasio de ejemplo de punta a punta: el panel, las clases, los socios, los cobros, los servicios, quién está dejando de venir y la app con tu marca.
          </p>
        </div>
        <DemoVideo
          src="/video/gym-demo.mp4"
          poster="/video/gym-demo.jpg"
          titulo="Demo de TotalGains para gimnasios"
          ubicacion="para_gimnasios"
        />
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   1c. TAREAS DEL EQUIPO — el vídeo de la función (36 s, con música), tras la demo.
   Capturas reales con datos de ejemplo («Estudio Norte»); proyecto hyperframes
   totalgains-web-tareas. El tutorial largo (gym-tareas-equipo.mp4) es el de la app.
   ─────────────────────────────────────────────────────────── */
