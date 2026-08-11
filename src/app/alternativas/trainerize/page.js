import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";
import { getAlternativaFaqs } from "@/data/alternativasFaqs";
import { softwareApplicationNode } from "@/data/productSchema";

/* ──────────────────────────────────────────────
   /alternativas/trainerize — SERVER COMPONENT
   SEO Metadata para posicionar vs competencia
   ────────────────────────────────────────────── */
export const metadata = {
  title: "Trainerize en Español: la Alternativa Real (2026)",
  description:
    "Trainerize opera en inglés y factura en dólares con add-ons aparte. TotalGains es la alternativa en español desde 29,90 €/mes con IVA y migración gratis.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/trainerize/",
  },
  openGraph: {
    title: "TotalGains vs Trainerize — ¿Cuál es mejor para entrenadores?",
    description:
      "Tabla comparativa completa: soporte, velocidad, IA, precios y más. Migra gratis en 5 minutos.",
    url: "https://totalgains.es/alternativas/trainerize/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

export default function AlternativaCompetidores() {
  const faqs = getAlternativaFaqs("trainerize", "Trainerize");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // Valoración real de Trustpilot (la misma que muestra el badge de
      // la página): hace la página elegible para estrellas en la SERP.
      softwareApplicationNode({ description: "TotalGains, alternativa en español a Trainerize para entrenadores personales: IA de rutinas y dietas con biblioteca propia, app marca blanca incluida en todos los planes, migración asistida y precios sin penalización por volumen." }),
      {
        "@type": "FAQPage",
        // Generado desde la MISMA fuente que renderiza la página:
        // el schema no puede declarar preguntas que el usuario no ve.
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Alternativas", item: "https://totalgains.es/alternativas/" },
          { "@type": "ListItem", position: 3, name: "Alternativa a Trainerize", item: "https://totalgains.es/alternativas/trainerize/" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AlternativaCompetidoresContent />
    </>
  );
}
