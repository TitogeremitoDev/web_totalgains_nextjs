import Link from "next/link";
import TrustpilotBadge from "@/components/TrustpilotBadge";

export const metadata = {
  title: "Sobre Nosotros — TotalGains",
  description: "TotalGains nació de la frustración de un entrenador personal con Excel y WhatsApp. Conoce la historia de Germán Martínez, fundador, y por qué construimos el software que nos hubiera gustado tener.",
  alternates: { canonical: "https://totalgains.es/sobre-nosotros/" },
  openGraph: {
    title: "Sobre TotalGains — La historia detrás del software",
    description: "Construido por un entrenador, para entrenadores. La historia de cómo nació TotalGains.",
    url: "https://totalgains.es/sobre-nosotros/",
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains" }],
  },
  robots: { index: true, follow: true },
};

export default function SobreNosotros() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://totalgains.es/#organization",
        name: "TotalGains",
        legalName: "Germán Martínez Calvente",
        vatID: "77137460Z",
        url: "https://totalgains.es",
        logo: { "@type": "ImageObject", url: "https://totalgains.es/logo-optimized.webp" },
        foundingDate: "2025",
        email: "soporte@totalgains.es",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C/Sur Nº9 1ª",
          postalCode: "18140",
          addressLocality: "La Zubia",
          addressRegion: "Granada",
          addressCountry: "ES",
        },
        sameAs: [
          "https://www.instagram.com/totalgainsfitness/",
          "https://www.tiktok.com/@totalgainsapp",
          "https://www.youtube.com/channel/UCOJehcX1G6jABjONKmXCmbQ",
          "https://es.trustpilot.com/review/totalgains.es",
          "https://www.wikidata.org/wiki/Q139823576",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://totalgains.es/#founder",
        name: "Germán Martínez Calvente",
        url: "https://totalgains.es/sobre-nosotros/",
        jobTitle: "Fundador y desarrollador",
        image: {
          "@type": "ImageObject",
          url: "https://totalgains.es/testimonials/german-martinez-calvente.webp",
          width: 800,
          height: 800,
          caption: "Germán Martínez Calvente, fundador de TotalGains",
        },
        worksFor: { "@id": "https://totalgains.es/#organization" },
        knowsAbout: [
          "Software para entrenadores personales",
          "Gestión de clientes fitness",
          "Inteligencia artificial aplicada al entrenamiento",
          "SaaS B2B",
          "Periodización del entrenamiento",
        ],
        sameAs: [
          "https://www.instagram.com/totalgainsfitness/",
          "https://www.tiktok.com/@totalgainsapp",
          "https://www.youtube.com/channel/UCOJehcX1G6jABjONKmXCmbQ",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Sobre nosotros", item: "https://totalgains.es/sobre-nosotros/" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>

        <h1 style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1.25, marginBottom: 16 }}>
          Construido por un entrenador,<br />para entrenadores
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-secondary, #aaa)", lineHeight: 1.7, marginBottom: 24 }}>
          TotalGains nació de la frustración real de gestionar clientes con Excel, WhatsApp y hojas de cálculo que se rompían. No de una consultora. No de un fondo de inversión. De alguien que vivió el problema.
        </p>
        <div style={{ marginBottom: 56 }}>
          <TrustpilotBadge score={4.0} totalReviews={3} variant="default" />
        </div>

        {/* Founder section */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 24 }}>La historia</h2>
          <p style={{ lineHeight: 1.8, color: "var(--text-secondary, #ccc)", marginBottom: 20 }}>
            Germán Martínez — desarrollador de software con experiencia en el mundo del fitness — llevaba años viendo cómo entrenadores personales con metodologías brillantes perdían clientes, ingresos y tiempo por falta de herramientas profesionales. Las opciones existentes eran en inglés, caras, complicadas o diseñadas para gimnasios, no para el entrenador autónomo hispanohablante.
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--text-secondary, #ccc)", marginBottom: 20 }}>
            La pregunta era simple: ¿por qué no existe un software todo-en-uno, en español, que entienda cómo trabaja realmente un entrenador personal en España?
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--text-secondary, #ccc)" }}>
            TotalGains se lanzó en 2025 con una obsesión: que un entrenador con 5 clientes pudiera usar la misma tecnología que uno con 100, sin curvas de aprendizaje absurdas, sin pagar por funciones de gimnasio que nunca va a usar, y sin depender de WhatsApp para cobrar.
          </p>
        </section>

        {/* Values */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 24 }}>Lo que nos diferencia</h2>
          <div style={{ display: "grid", gap: 20 }}>
            {[
              { title: "Construido desde dentro del sector", desc: "No somos una empresa de software genérico que se metió en fitness. Entendemos la diferencia entre adherencia y retención, entre un mesociclo y una periodización, entre un macro y un micronutriente." },
              { title: "IA que no alucina", desc: "Nuestra IA genera rutinas y dietas usando exclusivamente tu base de datos. Sin inventar ejercicios. Sin sustituir alimentos por otros que no usas. Tu metodología, automatizada." },
              { title: "Soporte de personas reales", desc: "Cuando escribes a soporte@totalgains.es, te responde alguien del equipo en menos de 24 horas. En español. Sin tickets que tardan una semana." },
              { title: "Precio justo", desc: "Desde 29,90€/mes con IVA incluido. Sin penalización por crecer. Sin comisiones sobre tus ventas. Sin módulos de pago adicionales." },
            ].map(({ title, desc }) => (
              <div key={title} style={{ padding: "24px", background: "rgba(255,255,255,0.03)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: "var(--text-secondary, #aaa)", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Client quote */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 24 }}>Lo que dicen nuestros entrenadores</h2>
          <blockquote style={{ borderLeft: "3px solid var(--primary, #667eea)", paddingLeft: 24, margin: 0 }}>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, fontStyle: "italic", color: "var(--text-secondary, #ccc)", marginBottom: 12 }}>
              "Tener todo centralizado — clientes, entrenamientos, pagos y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana y he pasado de 15 a 40 clientes activos."
            </p>
            <footer style={{ fontSize: "0.9rem", color: "var(--text-muted, #888)" }}>
              — <strong>Nacho Pulido</strong>, entrenador de fuerza y resistencia · <a href="https://www.instagram.com/puli.trainer/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light, #a78bfa)" }}>@puli.trainer</a>
            </footer>
          </blockquote>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", padding: "40px 24px", background: "rgba(255,255,255,0.03)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 8 }}>¿Quieres probarlo?</h2>
          <p style={{ color: "var(--text-secondary, #aaa)", marginBottom: 24, fontSize: "0.95rem" }}>
            14 días gratis. Sin tarjeta. Sin compromiso.
          </p>
          <Link href="/onboarding" className="btn btn-primary btn-lg">
            Empieza gratis ahora
          </Link>
          <p style={{ marginTop: 16, fontSize: "0.82rem", color: "var(--text-muted, #666)" }}>
            ¿Tienes preguntas? Escríbenos a <strong>soporte@totalgains.es</strong>
          </p>
        </section>

        {/* Legal link */}
        <p style={{ marginTop: 48, textAlign: "center", fontSize: "0.82rem", color: "var(--text-muted, #666)" }}>
          ¿Buscas la información legal? →{" "}
          <Link href="/aviso-legal/" style={{ color: "var(--text-secondary, #aaa)" }}>Aviso Legal (LSSICE)</Link>
        </p>
      </main>
    </>
  );
}
