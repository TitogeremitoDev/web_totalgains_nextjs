import HomeContent from "@/components/HomeContent";
import { SAME_AS, aggregateRatingNode, ofertasCoach } from "@/data/productSchema";
import { HOME_FAQS } from "@/data/homeFaqs";
import { TELEFONO } from "@/data/contacto";

/* ──────────────────────────────────────────────
   HOME PAGE — SERVER COMPONENT
   ────────────────────────────────────────────── */
export const metadata = {
  // Title más corto y enfocado — usa el template "%s | TotalGains" de layout.js
  title: "TotalGains — Software para Entrenadores Personales con IA",
  description:
    "Software fitness en español: atletas, rutinas con IA, dietas y seguimiento en una sola plataforma. Plan Gratuito de por vida hasta 5 atletas, sin tarjeta.",
  alternates: {
    canonical: "https://totalgains.es/",
  },
  openGraph: {
    title: "TotalGains — Software para Entrenadores Personales con IA",
    description:
      "Gestiona atletas, rutinas con IA, dietas y seguimiento desde una sola plataforma. Software fitness en español para entrenadores. Plan Gratuito de por vida para 5 atletas, sin tarjeta.",
    url: "https://totalgains.es/",
    type: "website",
    locale: "es_ES",
    siteName: "TotalGains",
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@totalgainsfitness",
    title: "TotalGains — Software para Entrenadores Personales con IA",
    description: "Gestiona atletas, rutinas con IA, dietas y seguimiento desde una sola plataforma. Software fitness en español para entrenadores.",
    images: ["https://totalgains.es/og-image.jpg"],
  },
};

// Las preguntas viven en src/data/homeFaqs.js (fuente única con FAQ.jsx: el
// schema no puede desincronizarse del texto visible). El orden importa: la
// desambiguación prueba-vs-permanente va PRIMERA — las IAs citaban "prueba
// de 14 días" como si no existiera el plan free.

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      /* ── SoftwareApplication ── */
      {
        "@type": "SoftwareApplication",
        "@id": "https://totalgains.es/#software",
        name: "TotalGains",
        image: "https://totalgains.es/og-image.jpg",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "HealthApplication",
        operatingSystem: "Web, iOS, Android",
        description:
          "Software integral para entrenadores personales. Gestiona atletas, diseña rutinas, automatiza dietas y escala tu negocio fitness desde una sola plataforma.",
        url: "https://totalgains.es",
        inLanguage: "es",
        /* SOLO los 3 planes de coach. Los planes Gym se ven en #pricing tras
           pulsar "Tengo un gimnasio", y ese contenido no está en el HTML
           inicial: marcarlo aquí sería declarar precios que la página no
           enseña al cargar. Las ofertas Gym viven en el schema de
           /para-gimnasios/, donde sí son visibles en el HTML estático. */
        offers: ofertasCoach(),
        aggregateRating: aggregateRatingNode(),
        /* Sin `review` (2-nov-2026): Search Console dio error crítico «Varias
           reseñas sin el objeto aggregateRating» al quitar la nota media de
           Trustpilot (31-oct). Son opiniones de Trustpilot o de clientes: se
           siguen viendo en la página, pero marcarlas como reseñas propias es
           lo que Google no admite. */
        publisher: {
          "@id": "https://totalgains.es/#organization",
        },
      },
      /* ── Organization ── */
      {
        "@type": "Organization",
        "@id": "https://totalgains.es/#organization",
        name: "TotalGains",
        legalName: "Germán Martínez Calvente",
        vatID: "77137460Z",
        url: "https://totalgains.es",
        telephone: TELEFONO,
        logo: { "@type": "ImageObject", url: "https://totalgains.es/logo-optimized.webp", width: 140, height: 140 },
        address: {
          "@type": "PostalAddress",
          streetAddress: "C/Sur Nº9 1ª",
          postalCode: "18140",
          addressLocality: "La Zubia",
          addressRegion: "Granada",
          addressCountry: "ES",
        },
        sameAs: SAME_AS,
        contactPoint: {
          "@type": "ContactPoint",
          email: "soporte@totalgains.es",
          telephone: TELEFONO,
          contactType: "customer service",
          availableLanguage: "Spanish",
        },
      },
      /* ── FAQPage ── */
      {
        "@type": "FAQPage",
        "@id": "https://totalgains.es/#faq",
        mainEntity: HOME_FAQS.map((faq, i) => ({
          "@type": "Question",
          "@id": `https://totalgains.es/#faq-${i + 1}`,
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      /* ── WebSite (Sitelinks Search Box) ── */
      {
        "@type": "WebSite",
        "@id": "https://totalgains.es/#website",
        name: "TotalGains",
        url: "https://totalgains.es",
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
        // Sin SearchAction (31-oct-2026): apuntaba a /blog/?q=, que no busca nada.
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeContent />
    </>
  );
}
