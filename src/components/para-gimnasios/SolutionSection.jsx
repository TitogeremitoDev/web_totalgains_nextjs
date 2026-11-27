import Link from "next/link";
import { ArrowRight, Users, Calendar, Lock, Palette, CreditCard, Layers } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   3. SOLUCIÓN — 6 features con iconos
   ─────────────────────────────────────────────────────────── */
export default function SolutionSection() {
  const features = [
    {
      icon: <Calendar size={22} />,
      title: "Clases con reserva y waitlist",
      desc: "Aforo configurable, monitor asignado, lista de espera automática. Notificaciones push cuando se libera una plaza.",
    },
    {
      icon: <Users size={22} />,
      title: "Multi-coach con clientes asignados",
      desc: "Cada entrenador gestiona su cartera. La dirección ve el panel global; cada coach solo lo suyo. Sin solapamientos.",
    },
    {
      icon: <Lock size={22} />,
      title: "Permisos granulares por rol",
      desc: "4 booleanos por coach: ver todos los clientes, gestionar facturación, gestionar clases, gestionar clientes. Privacidad real.",
    },
    {
      icon: <Palette size={22} />,
      title: "App marca blanca del gimnasio",
      desc: "Tus socios descargan la app de TotalGains y, al entrar, la ven con el nombre, el logo y los colores de tu centro. Reservas, rutinas, dietas y mensajes en un solo entorno.",
      /* La app del socio tiene su página propia (27-nov-2026): aquí va el resumen y el enlace. */
      enlace: { href: "/app-para-gimnasios/", texto: "Ver la app de tus socios" },
    },
    {
      icon: <CreditCard size={22} />,
      title: "Cuotas, bonos y domiciliaciones",
      desc: "Cuotas mensuales, bonos de 10 clases y tarifas anuales. Tus socios pueden renovar desde la app con la cuenta de Stripe del gimnasio y entra solo en Pagos; las domiciliadas se registran solas cada mes y lo de recepción lo apuntas. TotalGains no cobra comisión: solo la tarifa de Stripe.",
    },
    {
      icon: <Layers size={22} />,
      title: "Rutinas + nutrición con IA",
      desc: "Cada coach genera rutinas y planes nutricionales con IA usando la base de +240.000 alimentos en español. Sin add-ons.",
    },
  ];

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="aparece" style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              background: "var(--primary-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            La solución
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            Todo lo que tu gimnasio necesita,{" "}
            <span
              style={{
                background: "var(--primary-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              en una sola plataforma
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 620, margin: "0 auto" }}>
            Diseñada específicamente para gimnasios pequeños y estudios de entrenamiento personal. Sin add-ons ocultos.
          </p>
          {/* ⚠️ NO QUITAR LA PALABRA "TIENDA" DE AQUÍ, y no dejar esta página sin
              enlace de cuerpo al catálogo. Medido el 14-sep-2026: esta landing
              mide 10.560px de alto y la palabra "tienda" aparecía UNA vez en
              todo su HTML, dentro del desplegable del navbar, que no se ve
              hasta pasar el ratón por encima. Es literalmente el motivo por el
              que ChatGPT afirmaba que TotalGains no tiene tienda: el texto que
              lee todo el mundo no la nombraba, y el catálogo que sí la detalla
              no se enlazaba desde ninguna página, solo desde el menú. */}
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 720, margin: "18px auto 0" }}>
            Clases con aforo real y lista de espera, <strong style={{ color: "var(--text-primary)" }}>tienda con stock, márgenes y control de caja</strong>, coaches ilimitados y app con la marca del centro.{" "}
            <Link href="/funciones/gimnasios/" prefetch={false} style={{ color: "var(--primary-light)", fontWeight: 700, whiteSpace: "nowrap" }}>
              Las 69 funciones, una a una →
            </Link>
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f, i) => (
            <div
              className="aparece pg-card-hover"
              key={i}
              style={{
                padding: 28,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
              }}
          >
              <div
                className="pg-icon-badge"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "var(--primary-gradient)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  boxShadow: "0 8px 24px rgba(102,126,234,0.3)",
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>
                {f.title}
              </h3>
              <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.93rem" }}>
                {f.desc}
              </p>
              {f.enlace && (
                <Link
                  href={f.enlace.href}
                  prefetch={false}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14, fontSize: "0.92rem", fontWeight: 700, color: "var(--primary-light)", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  {f.enlace.texto} <ArrowRight size={15} aria-hidden="true" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
