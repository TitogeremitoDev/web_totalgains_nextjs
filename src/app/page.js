import HomeContent from "@/components/HomeContent";

/* ──────────────────────────────────────────────
   HOME PAGE — SERVER COMPONENT (para SEO metadata)
   ────────────────────────────────────────────── */
export const metadata = {
  title: "TotalGains | Software para Entrenadores Personales — Rutinas con IA",
  description:
    "Escala tu negocio de entrenamiento personal. Gestiona atletas, automatiza cobros, diseña rutinas con IA y ofrece tu propia app de fitness marca blanca. 14 días gratis.",
  alternates: {
    canonical: "https://totalgains.es/",
  },
  openGraph: {
    title: "TotalGains | El Software Definitivo para Entrenadores Personales",
    description:
      "Delega el 80% del trabajo manual. Rutinas con IA, dietas automáticas, cobros recurrentes y app marca blanca para tu negocio fitness.",
    url: "https://totalgains.es/",
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://totalgains.es/#organization",
        "name": "TotalGains",
        "url": "https://totalgains.es/",
        "logo": "https://totalgains.es/apple-icon.png",
        "sameAs": [
          "https://www.instagram.com/totalgainsapp/"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "TotalGains",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "description": "Software integral para entrenadores personales. Gestiona atletas, diseña rutinas con IA, dietas automáticas y automatiza cobros con app de fitness marca blanca.",
        "offers": {
          "@type": "Offer",
          "price": "29.99",
          "priceCurrency": "EUR"
        },
        "publisher": {
          "@id": "https://totalgains.es/#organization"
        }
      }
    ]
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
