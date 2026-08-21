import Link from "next/link";
import Image from "next/image";
import TrustpilotBadge from "@/components/TrustpilotBadge";
import { SAME_AS } from "@/data/productSchema";

export const metadata = {
  title: { absolute: "Sobre TotalGains: quién hay detrás del software" },
  description: "Construido por un entrenador, para entrenadores. La historia de Germán Martínez Calvente y por qué nació TotalGains. Software fitness en español.",
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
        sameAs: SAME_AS,
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
          "https://www.tiktok.com/@totalgainsfitness",
          "https://www.youtube.com/@totalgainsfitness",
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
      {/* OJO con el espaciado: globals.css:184 mete `padding: var(--spacing-3xl) 0`
          (6rem) a TODO <section>. Antes eso se sumaba al marginBottom inline y
          abría socavones de ~200px entre bloques. Las secciones de esta página
          anulan ese padding a mano; si añades una nueva, hazlo también.
          El padding-top del <main> libra el navbar, que es fixed. */}
      <main style={{ padding: "128px 0 96px" }}>
        <div className="container" style={{ maxWidth: 880 }}>

          {/* El BreadcrumbList del schema ya declaraba esta jerarquía; hasta ahora
              Google la veía y el visitante no. */}
          <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: 24 }}>
            <ol style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="/" style={{ color: "inherit" }}>Inicio</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" style={{ color: "var(--text-secondary)" }}>Sobre nosotros</li>
            </ol>
          </nav>

          <header style={{ marginBottom: 64 }}>
            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 2.9rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
              Construido por un entrenador, para entrenadores
            </h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 32", maxWidth: 700 }}>
              TotalGains nació de la frustración real de gestionar clientes con Excel, WhatsApp y hojas de cálculo que se rompían. No de una consultora. No de un fondo de inversión. De alguien que vivió el problema.
            </p>

            {/* La foto ya estaba declarada en el schema Person de esta misma página,
                así que Google la veía y el visitante no. Es la única cara del equipo
                en toda la web: si se mueve, que sea a otro sitio visible, no a ninguno. */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <Image
                  src="/testimonials/german-martinez-calvente.webp"
                  alt="Germán Martínez Calvente, fundador y desarrollador de TotalGains"
                  width={60}
                  height={60}
                  priority
                  style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <strong style={{ fontSize: "1rem", fontWeight: 700 }}>Germán Martínez Calvente</strong>
                  <span style={{ fontSize: "0.86rem", color: "var(--text-muted)" }}>
                    Fundador y desarrollador · La Zubia, Granada
                  </span>
                </div>
              </div>
              <TrustpilotBadge score={4.6} totalReviews={17} variant="compact" />
            </div>
          </header>

          {/* Founder section */}
          <section style={{ padding: 0, marginBottom: 64 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 20 }}>La historia</h2>
            <p style={{ lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 18, fontSize: "1.02rem" }}>
              Germán Martínez — desarrollador de software con experiencia en el mundo del fitness — llevaba años viendo cómo entrenadores personales con metodologías brillantes perdían clientes, ingresos y tiempo por falta de herramientas profesionales. Las opciones existentes eran en inglés, caras, complicadas o diseñadas para gimnasios, no para el entrenador autónomo hispanohablante.
            </p>
            <p style={{ lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 18, fontSize: "1.02rem" }}>
              La pregunta era simple: ¿por qué no existe un software todo-en-uno, en español, que entienda cómo trabaja realmente un entrenador personal en España?
            </p>
            <p style={{ lineHeight: 1.8, color: "var(--text-secondary)", margin: 0, fontSize: "1.02rem" }}>
              TotalGains se lanzó en 2025 con una obsesión: que un entrenador con 5 clientes pudiera usar la misma tecnología que uno con 100, sin curvas de aprendizaje absurdas, sin pagar por funciones de gimnasio que nunca va a usar, y sin depender de WhatsApp para cobrar.
            </p>
          </section>

          {/* Values — auto-fit en vez de media query: 2 columnas en escritorio y
              1 en móvil sin CSS extra. Antes eran 4 tarjetas apiladas a lo largo. */}
          <section style={{ padding: 0, marginBottom: 64 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 24 }}>Lo que nos diferencia</h2>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              {[
              { title: "Construido desde dentro del sector", desc: "No somos una empresa de software genérico que se metió en fitness. Entendemos la diferencia entre adherencia y retención, entre un mesociclo y una periodización, entre un macro y un micronutriente." },
              { title: "IA que no alucina", desc: "Nuestra IA genera rutinas y dietas usando exclusivamente tu base de datos. Sin inventar ejercicios. Sin sustituir alimentos por otros que no usas. Tu metodología, automatizada." },
              { title: "Soporte de personas reales", desc: "Cuando escribes a soporte@totalgains.es, te responde alguien del equipo en menos de 24 horas. En español. Sin tickets que tardan una semana." },
              { title: "Precio justo", desc: "Desde 29,90€/mes con IVA incluido. Sin penalización por crecer. Sin comisiones sobre tus ventas. Sin módulos de pago adicionales." },
              ].map(({ title, desc }) => (
                <div key={title} className="glass" style={{ padding: 22 }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>{title}</h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, margin: 0, fontSize: "0.93rem" }}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Client quote */}
          <section style={{ padding: 0, marginBottom: 64 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 20 }}>Lo que dicen nuestros entrenadores</h2>
            <blockquote style={{ borderLeft: "3px solid var(--primary)", paddingLeft: 24, margin: 0 }}>
              <p style={{ fontSize: "1.08rem", lineHeight: 1.7, fontStyle: "italic", color: "var(--text-secondary)", marginBottom: 12 }}>
                &quot;Tener todo centralizado — clientes, entrenamientos, pagos y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana y he pasado de 15 a 40 clientes activos.&quot;
              </p>
              <footer style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                — <strong>Nacho Pulido</strong>, entrenador de fuerza y resistencia · <a href="https://www.instagram.com/puli.trainer/" target="_blank" rel="noopener noreferrer">@puli.trainer</a>
              </footer>
            </blockquote>
          </section>

          {/* CTA */}
          <section className="glass" style={{ textAlign: "center", padding: "44px 24px", marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 10 }}>¿Quieres probarlo?</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: 24, fontSize: "0.98rem" }}>
              Plan Gratuito 5 atletas · o prueba Pro 14 días sin tarjeta.
            </p>
            <Link href="/onboarding/" className="btn btn-primary btn-lg">
              Empieza gratis ahora
            </Link>
            <p style={{ marginTop: 18, marginBottom: 0, fontSize: "0.85rem", color: "var(--text-muted)" }}>
              ¿Tienes preguntas? Escríbenos a <strong>soporte@totalgains.es</strong>
            </p>
          </section>

          {/* Legal link */}
          <p style={{ margin: 0, textAlign: "center", fontSize: "0.82rem", color: "var(--text-muted)" }}>
            ¿Buscas la información legal? →{" "}
            <Link href="/aviso-legal/" style={{ color: "var(--text-secondary)" }}>Aviso Legal (LSSICE)</Link>
          </p>
        </div>
      </main>
    </>
  );
}
