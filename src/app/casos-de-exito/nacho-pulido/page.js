import Image from "next/image";
import Link from "next/link";
import { Instagram, Clock, Star, ArrowLeft, Rocket } from "lucide-react";

export const metadata = {
  title: "Nacho Pulido — Cómo Ahorra 10h Semanales con TotalGains",
  description:
    "Caso de éxito real: Nacho Pulido (@puli.trainer), entrenador de fuerza y resistencia, pasó de gestionar clientes con Excel y WhatsApp a ahorrar 8-10 horas semanales con TotalGains.",
  alternates: {
    canonical: "https://totalgains.es/casos-de-exito/nacho-pulido/",
  },
  openGraph: {
    title: "Nacho Pulido ahorra 10h/semana con TotalGains",
    description:
      "Caso de éxito real de un entrenador personal que dejó Excel y WhatsApp para centralizar todo en TotalGains.",
    url: "https://totalgains.es/casos-de-exito/nacho-pulido/",
    images: [{ url: "/testimonials/nacho.webp", width: 400, height: 400, alt: "Nacho Pulido" }],
  },
};

const qa = [
  {
    q: "¿Cómo gestionabas antes tus asesorías?",
    a: "Antes usaba Excel, WhatsApp y mails por todos lados. Lo más pesado era perseguir pagos, recordar seguimientos y tener toda la info desordenada.",
  },
  {
    q: "¿Qué es lo que más te ha cambiado?",
    a: "Tener todo centralizado: clientes, entrenamientos, pagos y comunicación en un solo sitio. Ahora todo fluye muchísimo mejor y me siento más profesional.",
  },
  {
    q: "¿Cuánto tiempo ahorras a la semana?",
    a: "Calculo que ahorro entre 8 y 10 horas a la semana fácil. Menos líos y más tiempo para entrenar y disfrutar.",
  },
];

export default function CasoNachoPulido() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "@id": "https://totalgains.es/casos-de-exito/nacho-pulido/#review",
        author: {
          "@type": "Person",
          name: "Nacho Pulido",
          sameAs: "https://www.instagram.com/puli.trainer/",
        },
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: "TotalGains",
          url: "https://totalgains.es",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Tener todo centralizado — clientes, entrenamientos, pagos y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana.",
        datePublished: "2025-01-01",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Casos de éxito", item: "https://totalgains.es/casos-de-exito/" },
          { "@type": "ListItem", position: 3, name: "Nacho Pulido", item: "https://totalgains.es/casos-de-exito/nacho-pulido/" },
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
          Caso de Éxito: Cómo Nacho Pulido ahorra 10 horas a la semana centralizando sus asesorías
        </h1>

        {/* Header Profile */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <Image src="/testimonials/nacho.webp" alt="Nacho Pulido" width={80} height={80} style={{ borderRadius: "50%", border: "2px solid rgba(102,126,234,0.4)" }} />
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>Nacho Pulido</h2>
            <p style={{ color: "var(--text-secondary)", margin: "4px 0 8px", fontSize: "0.95rem" }}>Entrenador de Fuerza &amp; Resistencia</p>
            <a href="https://www.instagram.com/puli.trainer/" target="_blank" rel="noopener noreferrer"
               style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.82rem", color: "var(--primary-light)", textDecoration: "none" }}>
              <Instagram size={13} /> @puli.trainer · 1.4K seguidores
            </a>
          </div>
        </div>

        {/* Key result */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 24px", background: "rgba(102,126,234,0.08)", border: "1px solid rgba(102,126,234,0.2)", borderRadius: 16, marginBottom: 40 }}>
          <Clock size={28} color="#667eea" />
          <div>
            <p style={{ fontSize: "2rem", fontWeight: 800, margin: 0, background: "var(--primary-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>8–10h</p>
            <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "0.9rem" }}>ahorradas cada semana</p>
          </div>
        </div>

        {/* Stars */}
        <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
          {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />)}
        </div>

        {/* Quote */}
        <blockquote style={{ borderLeft: "3px solid var(--primary)", paddingLeft: 20, margin: "0 0 48px", fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-secondary)", fontStyle: "italic" }}>
          "Tener todo centralizado — clientes, entrenamientos, pagos y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahora todo fluye muchísimo mejor y me siento más profesional."
        </blockquote>

        {/* Q&A */}
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 24 }}>Entrevista completa</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 56 }}>
          {qa.map((item, i) => (
            <div key={i}>
              <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>— {item.q}</p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "40px 24px", background: "rgba(255,255,255,0.03)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 20 }}>¿Quieres resultados como los de Nacho?</p>
          <Link href="/onboarding" className="btn btn-gold btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <Rocket size={20} /> Empieza gratis 14 días
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: 12 }}>Sin tarjeta · Sin compromiso</p>
        </div>
      </div>
    </main>
  );
}
