import DemoVideo from "@/components/DemoVideo";

export default function EntrenosVideoSection() {
  return (
    <section id="entrenos" style={{ padding: "0 24px 90px" }}>
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
            Nuevo · Rutinas con QR, WOD y máquinas
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Tus socios empiezan solos,{" "}
            <span style={{ color: "var(--accent)" }}>con la marca de tu gimnasio</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 700, margin: "14px auto 0", lineHeight: 1.6 }}>
            Cuelgas el cartel de una rutina y tus socios la escanean: se abre la app y ya la tienen en su entreno. Cada día publicas el WOD y les sale como un cartel de tu centro, con tu logo y tu color; ellos apuntan su marca y tú lo pones en la tele de la sala. Y con un QR en cada máquina ven en su móvil cómo se usa.
          </p>
        </div>
        <DemoVideo
          src="/video/gym-entrenos-presentacion.mp4"
          poster="/video/gym-entrenos-presentacion.jpg"
          titulo="Entrenos para gimnasios en TotalGains: rutinas con QR, WOD del día y QR en las máquinas"
          ubicacion="para_gimnasios_entrenos"
        />
        <div className="aparece" style={{ textAlign: "center", margin: "44px 0 22px" }}>
          <h3 style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)", fontWeight: 800, lineHeight: 1.25 }}>
            Cómo se monta, paso a paso
          </h3>
          <p style={{ color: "var(--text-secondary)", maxWidth: 640, margin: "10px auto 0", lineHeight: 1.6 }}>
            Lo enciendes en Configuración, marcas qué rutinas pueden coger tus socios, imprimes los carteles y publicas el WOD. Si no lo enciendes, todo sigue como hasta ahora.
          </p>
        </div>
        <DemoVideo
          src="/video/gym-entrenos.mp4"
          poster="/video/gym-entrenos.jpg"
          titulo="Tutorial de Entrenos para gimnasios en TotalGains, paso a paso"
          ubicacion="para_gimnasios_entrenos_tutorial"
        />
      </div>
    </section>
  );
}
