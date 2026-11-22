import ParaGimnasiosContent from "@/components/ParaGimnasiosContent";
import "./para-gimnasios.css";

import { ofertasGym, aggregateRatingNode } from "@/data/productSchema";
import { PARA_GIMNASIOS_FAQS } from "@/data/paraGimnasiosFaqs";
export const metadata = {
  title: "Software Gimnasios Pequeños 2026: Multi-Coach",
  description:
    "Software para gimnasios pequeños y boutique: clases con reserva, multi-coach, app marca blanca y cuotas con caja y facturación. Desde 149 €/mes con IVA.",
  keywords: [
    "software gimnasio pequeño",
    "app gestión gimnasio",
    "gestión clases colectivas",
    "alternativa harbiz gimnasios",
    "software multi coach",
    "plataforma centro entrenamiento",
    "software box CrossFit",
    "gestión estudio entrenamiento personal",
  ],
  alternates: { canonical: "https://totalgains.es/para-gimnasios/" },
  openGraph: {
    type: "website",
    title: "Software para Gimnasios Pequeños — Multi-Coach + Clases | TotalGains",
    description:
      "La plataforma para gimnasios de barrio, estudios de entrenamiento personal y centros con clases colectivas. Multi-coach, permisos granulares, app marca blanca.",
    url: "https://totalgains.es/para-gimnasios/",
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains para gimnasios" }],
  },
};

const faqs = PARA_GIMNASIOS_FAQS;

export default function ParaGimnasios() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://totalgains.es/para-gimnasios/#software",
        name: "TotalGains para Gimnasios",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "GymManagementSoftware",
        operatingSystem: "Web, iOS, Android",
        description:
          "Software de gestión integral para gimnasios pequeños y estudios de entrenamiento: clases grupales con waitlist, multi-coach con permisos granulares, app marca blanca, cuotas recurrentes con caja y facturación, y módulos de rutinas y nutrición con IA. Diseñado en español para el mercado hispano.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/para-gimnasios/",
        offers: ofertasGym(),
        aggregateRating: aggregateRatingNode(),
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Software para Gimnasios", item: "https://totalgains.es/para-gimnasios/" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ParaGimnasiosContent />
    </>
  );
}
