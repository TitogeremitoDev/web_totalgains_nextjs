import Image from "next/image";
import Link from "next/link";
import { Instagram, Clock, Star, ArrowLeft, Rocket } from "lucide-react";

export const metadata = {
  title: "Lorena Eses: Nutricionista que ahorra 10h/sem",
  description:
    "Lorena Eses, nutricionista online con 28K seguidores, automatizó revisiones y citas con TotalGains. Ahorra más de 10 horas semanales en gestión.",
  alternates: {
    canonical: "https://totalgains.es/casos-de-exito/lorena-eses/",
  },
  openGraph: {
    title: "Lorena Eses ahorra +10h/semana automatizando con TotalGains",
    description:
      "Caso real de una nutricionista online que pasó de múltiples Excel a gestionar todo desde una sola plataforma.",
    url: "https://totalgains.es/casos-de-exito/lorena-eses/",
    images: [{ url: "/testimonials/lorena.webp", width: 400, height: 400, alt: "Lorena Eses" }],
  },
};

const qa = [
  {
    q: "¿Cómo gestionabas antes tus asesorías?",
    a: "Lo gestionaba con diferentes Excel. Era un lío, ya que llevaba diferentes sistemas de pago, cobros y almacenamiento de datos que acababan siendo incompatibles entre sí. Dedicaba mucho tiempo a los seguimientos y desde que tengo la app, ese tiempo puedo invertirlo en mejorar la calidad de mis planes y asesorías.",
  },
  {
    q: "¿Qué es lo que más te ha cambiado?",
    a: "La tranquilidad de saber que está todo automatizado, y la ganancia de tiempo al poder delegar en la app la agenda, la programación de citas, las revisiones quincenales y el feedback del progreso. Ahora el paciente recibe en su móvil la notificación con los enlaces y la info necesaria de forma automática, permitiéndome distinguir el trabajo de mi vida personal.",
  },
  {
    q: "¿Cuánto tiempo ahorras a la semana?",
    a: "Más de 2 horas diarias, lo cual hace un total de 10 horas semanales en una semana tranquila, más aún las semanas previas a revisiones mensuales. Ahora el sistema lleva un control y un progreso que permite a las pacientes ver su evolución.",
  },
  {
    q: "¿Qué funcionalidades de TotalGains usas más en tu día a día?",
    a: "Los planes nutricionales generados con IA a partir de mi propia base de alimentos, las revisiones quincenales automáticas con los datos de progreso del paciente, y el módulo de cobros recurrentes con Stripe que evita persecución de pagos a final de mes. La mayoría de mis pacientes están en seguimiento mensual o trimestral y antes les enviaba PDFs y mensajes sueltos por WhatsApp; ahora todo está centralizado en su app con notificaciones push.",
  },
  {
    q: "¿Qué le dirías a una nutricionista o entrenadora que está dudando si dar el salto a una plataforma profesional?",
    a: "Que el coste mensual de la herramienta lo recuperas en horas la primera semana. Yo dudaba porque venía acostumbrada a 'gestionarlo todo a mano', pero el día que sumé las horas que dedicaba semanalmente a tareas que TotalGains automatiza, el ROI fue inmediato. El miedo a 'aprender un software nuevo' se va en 2-3 días; lo que sí cuesta es seguir perdiendo tiempo en Excel cuando ves a colegas escalando con sistema.",
  },
];

export default function CasoLorenaEses() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "@id": "https://totalgains.es/casos-de-exito/lorena-eses/#review",
        author: {
          "@type": "Person",
          name: "Lorena Eses",
          sameAs: "https://www.instagram.com/lorenaeses/",
        },
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: "TotalGains",
          applicationCategory: "HealthApplication",
          operatingSystem: "iOS, Android, Web",
          url: "https://totalgains.es/",
        },
        name: "Caso de éxito: Lorena Eses, +10 horas semanales ahorradas",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "La tranquilidad de saber que está todo automatizado y la ganancia de tiempo al poder delegar en la app la agenda, las citas y las revisiones quincenales. Más de 10 horas semanales ahorradas.",
        datePublished: "2025-01-01",
        publisher: { "@type": "Organization", name: "TotalGains", url: "https://totalgains.es/" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Casos de éxito", item: "https://totalgains.es/casos-de-exito/" },
          { "@type": "ListItem", position: 3, name: "Lorena Eses", item: "https://totalgains.es/casos-de-exito/lorena-eses/" },
        ],
      },
    ],
  };

  return (
    <main className="caso-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="container" style={{ maxWidth: 760, padding: "120px 24px 80px" }}>
        {/* Back */}
        <Link href="/#testimonials" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: 40, textDecoration: "none" }}>
          <ArrowLeft size={14} /> Volver a la home
        </Link>

        {/* Header Title */}
        <h1 style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1.25, marginBottom: 32, paddingRight: 15, color: "var(--text-primary)" }}>
          Caso de Éxito: Cómo Lorena Eses ahorró +10h semanales automatizando sus clientes
        </h1>

        {/* Header Profile */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <Image src="/testimonials/lorena.webp" alt="Lorena Eses" width={80} height={80} style={{ borderRadius: "50%", border: "2px solid rgba(250,112,154,0.4)" }} />
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>Lorena Eses</h2>
            <p style={{ color: "var(--text-secondary)", margin: "4px 0 8px", fontSize: "0.95rem" }}>Nutricionista Online</p>
            <a href="https://www.instagram.com/lorenaeses/" target="_blank" rel="noopener noreferrer"
               style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.82rem", color: "var(--primary-light)", textDecoration: "none" }}>
              <Instagram size={13} /> @lorenaeses · 28.2K seguidores
            </a>
          </div>
        </div>

        {/* Key result */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 24px", background: "rgba(250,112,154,0.08)", border: "1px solid rgba(250,112,154,0.2)", borderRadius: 16, marginBottom: 40 }}>
          <Clock size={28} color="#fa709a" />
          <div>
            <p style={{ fontSize: "2rem", fontWeight: 800, margin: 0, background: "linear-gradient(135deg,#fa709a,#fee140)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>+10h</p>
            <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "0.9rem" }}>ahorradas cada semana</p>
          </div>
        </div>

        {/* Stars */}
        <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
          {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />)}
        </div>

        {/* Quote */}
        <blockquote style={{ borderLeft: "3px solid #fa709a", paddingLeft: 20, margin: "0 0 48px", fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-secondary)", fontStyle: "italic" }}>
          "La tranquilidad de saber que está todo automatizado, y la ganancia de tiempo al poder delegar en la app cosas como la agenda, la programación de citas y las revisiones quincenales."
        </blockquote>

        {/* Q&A */}
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 24 }}>Entrevista completa</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 40 }}>
          {qa.map((item, i) => (
            <div key={i}>
              <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>— {item.q}</p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

        {/* Screenshots — visualización del entorno de trabajo de Lorena */}
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 16 }}>Cómo se ve el día a día con TotalGains</h2>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>
          Lorena gestiona sus revisiones quincenales y el seguimiento nutricional desde el panel de coach. La app envía recordatorios automáticos a los pacientes y centraliza todo el historial en una sola vista.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, marginBottom: 56, justifyItems: "center" }}>
          <figure style={{ margin: 0, maxWidth: 280, width: "100%" }}>
            <Image src="/screenshots/coach_clientes.webp" alt="Vista de gestión de clientes en TotalGains: panel del coach con lista de pacientes" width={354} height={791} style={{ width: "100%", height: "auto", borderRadius: 24, border: "1px solid rgba(255,255,255,0.08)", display: "block" }} loading="lazy" />
            <figcaption style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: 12, textAlign: "center" }}>Panel de gestión de clientes — listado, etiquetas y estado de cada paciente.</figcaption>
          </figure>
          <figure style={{ margin: 0, maxWidth: 280, width: "100%" }}>
            <Image src="/screenshots/coach_seguimiento.webp" alt="Vista de seguimiento de un paciente en TotalGains con métricas de evolución" width={354} height={791} style={{ width: "100%", height: "auto", borderRadius: 24, border: "1px solid rgba(255,255,255,0.08)", display: "block" }} loading="lazy" />
            <figcaption style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: 12, textAlign: "center" }}>Seguimiento individualizado con histórico de revisiones y métricas de progreso.</figcaption>
          </figure>
        </div>

        {/* Callout exclusivo Lorena — Consejo profesional */}
        <aside style={{ padding: "24px 28px", background: "linear-gradient(135deg, rgba(250,112,154,0.08), rgba(254,225,64,0.06))", borderLeft: "4px solid #fa709a", borderRadius: 12, marginBottom: 48 }}>
          <p style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: 1.2, fontWeight: 700, color: "#fa709a", margin: "0 0 12px" }}>Consejo de Lorena para nutricionistas online</p>
          <p style={{ margin: 0, color: "var(--text-primary)", lineHeight: 1.7, fontSize: "1.02rem" }}>
            <em>"Calcula primero cuántas horas semanales pierdes en seguimientos manuales, revisiones quincenales y persecución de pagos. Multiplícalo por tu tarifa-hora. Esa cifra es lo que te está costando NO tener un sistema. Cuando hice los números, el coste de la herramienta era una décima parte de lo que recuperaba al mes."</em>
          </p>
        </aside>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "40px 24px", background: "rgba(255,255,255,0.03)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 20 }}>¿Quieres resultados como los de Lorena?</p>
          <Link href="/onboarding" className="btn btn-gold btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <Rocket size={20} /> Empieza gratis 14 días
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: 12 }}>Sin tarjeta · Sin compromiso</p>
        </div>
      </div>
    </main>
  );
}
