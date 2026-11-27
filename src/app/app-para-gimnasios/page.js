import AppParaGimnasiosContent from "@/components/AppParaGimnasiosContent";
import "../para-gimnasios/para-gimnasios.css";
import "./app-para-gimnasios.css";

import { ofertasGym, aggregateRatingNode } from "@/data/productSchema";
import { APP_PARA_GIMNASIOS_FAQS } from "@/data/appParaGimnasiosFaqs";

/* /app-para-gimnasios/ (27-nov-2026): la app del SOCIO con la marca del centro.
   Hermana de /para-gimnasios/ (que cuenta el programa entero): esta responde a
   quien busca «app para gimnasios» y quiere ver qué tendrán sus socios en el
   móvil. Capturas reales y enteras, con gimnasios inventados.
   ⛔ Es UNA app (TotalGains) que se viste con la marca del centro al entrar:
   nunca decir que es una app aparte del gimnasio en las tiendas. */
const URL = "https://totalgains.es/app-para-gimnasios/";

export const metadata = {
  title: "App para gimnasios con tu marca: reservas, pagos y rutinas",
  description:
    "La app para tus socios con el logo y los colores de tu gimnasio: reservan clase, pagan la cuota, siguen su rutina y su dieta y reciben tus avisos. Desde 149 €/mes con IVA.",
  keywords: [
    "app para gimnasios",
    "app para gimnasio",
    "app gimnasio socios",
    "app marca blanca gimnasio",
    "app reservas gimnasio",
    "app personalizada para gimnasio",
    "aplicación para gimnasios",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: "App para gimnasios con la marca de tu centro | TotalGains",
    description:
      "Tus socios reservan, pagan, entrenan y reciben tus avisos desde el móvil, y al entrar ven el logo y los colores de tu gimnasio. Tú lo llevas desde el ordenador.",
    url: URL,
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "App para gimnasios de TotalGains" }],
  },
};

export default function AppParaGimnasios() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${URL}#software`,
        name: "TotalGains: app para gimnasios",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "GymManagementSoftware",
        operatingSystem: "Web, iOS, Android",
        description:
          "App para los socios de un gimnasio con el logo, el nombre y los colores del centro: reserva de clases con lista de espera, pago de cuotas y bonos, rutinas y WOD del día, dietas y avisos. El gimnasio lo gestiona desde la web.",
        image: "https://totalgains.es/og-image.jpg",
        url: URL,
        offers: ofertasGym(),
        aggregateRating: aggregateRatingNode(),
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Software para gimnasios", item: "https://totalgains.es/para-gimnasios/" },
          { "@type": "ListItem", position: 3, name: "App para gimnasios", item: URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: APP_PARA_GIMNASIOS_FAQS.map((f) => ({
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
      <AppParaGimnasiosContent />
    </>
  );
}
