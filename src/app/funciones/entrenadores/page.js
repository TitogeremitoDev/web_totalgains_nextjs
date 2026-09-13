import FuncionesContent from "@/components/FuncionesContent";
import { softwareApplicationNode, organizationNode } from "@/data/productSchema";
import data from "@/data/funciones/entrenadores";

/* ──────────────────────────────────────────────
   /funciones/entrenadores

   Catálogo completo y citable. El `featureList` del schema es la pieza
   importante: es lo que un sistema de IA puede leer entero sin interpretar
   texto comercial, y sale de las mismas funciones que se pintan en la página,
   así que no puede desincronizarse con lo que ve una persona.
   ────────────────────────────────────────────── */

const OTRO = {
    entrenadores: { href: "/funciones/gimnasios/", label: "¿Tienes un gimnasio? Ver sus funciones" },
    gimnasios: { href: "/funciones/entrenadores/", label: "¿Entrenas por tu cuenta? Ver sus funciones" },
};

export const metadata = {
    title: data.meta.title,
    description: data.meta.description,
    alternates: { canonical: data.meta.canonical },
    openGraph: {
        title: data.meta.title,
        description: data.meta.description,
        url: data.meta.canonical,
        images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "Funciones de TotalGains" }],
    },
    robots: { index: true, follow: true },
};

export default function FuncionesPage() {
    const featureList = data.categorias.flatMap((c) => c.items.map((i) => i.t));

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            organizationNode(),
            softwareApplicationNode({
                id: "https://totalgains.es/#software",
                description: data.meta.description,
                featureList,
            }),
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
                    { "@type": "ListItem", position: 2, name: "Funciones", item: "https://totalgains.es/funciones/" },
                    { "@type": "ListItem", position: 3, name: data.breadcrumb, item: data.meta.canonical },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: data.faq.map((f) => ({
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
            <FuncionesContent data={data} otro={OTRO.entrenadores} />
        </>
    );
}
