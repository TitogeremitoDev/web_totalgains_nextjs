import AlternativaTimpContent from "@/components/AlternativaTimpContent";
import { TIMP_FAQS } from "@/data/alternativaTimp";
import { ofertasGym, aggregateRatingNode, organizationNode } from "@/data/productSchema";

export const metadata = {
  title: { absolute: "Alternativa a Timp: TotalGains para gimnasios y estudios" },
  description:
    "Timp cobra por profesional y TotalGains por socios activos, con entrenadores ilimitados de 149 a 249 €/mes con IVA. Comparativa verificada en sept. 2026.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/timp/",
  },
  openGraph: {
    type: "website",
    title: "Alternativa a Timp: TotalGains para gimnasios y estudios",
    description:
      "Timp cobra por profesional y TotalGains por socios activos, con entrenadores ilimitados de 149 a 249 €/mes con IVA.",
    url: "https://totalgains.es/alternativas/timp/",
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains" }],
  },
};

export default function AlternativaTimp() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // El mismo nodo de producto de gimnasio que /para-gimnasios/ (mismo @id),
      // no el de entrenador: sus ofertas son 0-149,90 € y aquí se compara el
      // producto de centro. La valoración es la del badge visible.
      {
        "@type": "SoftwareApplication",
        "@id": "https://totalgains.es/para-gimnasios/#software",
        name: "TotalGains para Gimnasios",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "GymManagementSoftware",
        operatingSystem: "Web, iOS, Android",
        description:
          "TotalGains para gimnasios, estudios y boxes, alternativa en español a Timp: clases con reserva y lista de espera, entrenadores ilimitados, tienda, servicios de pago por sesión y rutinas y dietas con IA en una app con la marca del centro.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/para-gimnasios/",
        offers: ofertasGym(),
        aggregateRating: aggregateRatingNode(),
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      organizationNode(),
      {
        "@type": "FAQPage",
        mainEntity: TIMP_FAQS.map((f) => ({
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
          { "@type": "ListItem", position: 3, name: "Alternativa a Timp", item: "https://totalgains.es/alternativas/timp/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AlternativaTimpContent />
    </>
  );
}
