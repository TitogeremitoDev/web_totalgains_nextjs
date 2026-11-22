import DemoVideo from "@/components/DemoVideo";

/* Cobros desde la app (1-nov-2026): el vídeo del lanzamiento «Cobros» para gimnasios (capturas reales con
   datos inventados y Stripe de prueba). Ver feedback_no_marketing_cobros: los Servicios se pagan en el centro. */
export default function CobrosVideoSection() {
  return (
    <section id="cobros" style={{ padding: "0 24px 90px" }}>
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
            Cobros desde la app
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Tus socios renuevan{" "}
            <span style={{ color: "var(--accent)" }}>desde el móvil</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 680, margin: "14px auto 0", lineHeight: 1.6 }}>
            Conectas la cuenta de Stripe del gimnasio y tus socios pagan su cuota o su bono desde la app. Entra solo en Pagos con su ticket, como si lo cobraras en recepción, que sigue igual. TotalGains no cobra comisión: solo la tarifa de Stripe.
          </p>
        </div>
        <DemoVideo
          src="/video/gym-cobros.mp4"
          poster="/video/gym-cobros.jpg"
          titulo="Cobros desde la app para gimnasios en TotalGains"
          ubicacion="para_gimnasios_cobros"
        />
      </div>
    </section>
  );
}

// 🏋️ «Entrenos» (15-nov-2026): rutinas con cartel y QR, WOD del día con la marca del centro y QR en las
// máquinas. Arriba, la presentación (30 s); debajo, el paso a paso (1 min 15 s). Capturas reales de la app.
