import AlternativaGimnasioContent from "@/components/AlternativaGimnasioContent";
import { ALTERNATIVA_TRAININGYM, TRAININGYM_FAQS } from "@/data/alternativaTrainingym";
import { ofertasGym, aggregateRatingNode, organizationNode } from "@/data/productSchema";

export const metadata = {
  title: { absolute: "Alternativa a Trainingym: TotalGains para gimnasios y estudios" },
  description:
    "Trainingym publica precios sin IVA, con pago anual y puesta en marcha aparte. TotalGains: de 149 a 249 €/mes con IVA y todo incluido. Datos de nov. 2026.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/trainingym/",
  },
  openGraph: {
    type: "website",
    title: "Alternativa a Trainingym: TotalGains para gimnasios y estudios",
    description:
      "Trainingym publica precios sin IVA, con pago anual y puesta en marcha aparte. TotalGains: de 149 a 249 €/mes con IVA y todo incluido.",
    url: "https://totalgains.es/alternativas/trainingym/",
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains" }],
  },
};

export default function AlternativaTrainingym() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // El mismo nodo de producto de gimnasio que /para-gimnasios/ (mismo @id),
      // como en /alternativas/timp/.
      {
        "@type": "SoftwareApplication",
        "@id": "https://totalgains.es/para-gimnasios/#software",
        name: "TotalGains para Gimnasios",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "GymManagementSoftware",
        operatingSystem: "Web, iOS, Android",
        description:
          "TotalGains para gimnasios, estudios y boxes, alternativa en español a Trainingym: clases con reserva y lista de espera, entrenadores ilimitados, tienda, cuotas que se facturan solas y rutinas y dietas con IA en una app con la marca del centro, con el IVA incluido.",
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
        mainEntity: TRAININGYM_FAQS.map((f) => ({
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
          { "@type": "ListItem", position: 3, name: "Alternativa a Trainingym", item: "https://totalgains.es/alternativas/trainingym/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AlternativaGimnasioContent d={ALTERNATIVA_TRAININGYM} />
    </>
  );
}
