import FunnelLanding from "@/components/funnel/FunnelLanding";
import data from "@/data/funnels/nutricionistas";

/* ⚠️ noindex a propósito. Esta página es para tráfico dirigido (QR, bio de
   Instagram, mensaje privado). Si entrara en Google competiría con
   /software-nutricionista-online/, que es la que sí trabaja el buscador, y las
   dos saldrían perdiendo. No se lista en el sitemap ni se enlaza desde la web. */
export const metadata = {
    title: "Demo para nutricionistas",
    description:
        "Genera dietas con IA que aprende de cada paciente, cambia alimentos por equivalentes en un toque y recupera tus tardes. Demo en 2 minutos.",
    robots: { index: false, follow: false, nocache: true },
    alternates: { canonical: "https://totalgains.es/demo/nutricionistas/" },
    openGraph: {
        title: "TotalGains para nutricionistas — tus dietas en minutos",
        description:
            "IA de nutrición que aprende de cada paciente, +240.000 alimentos en español y app con tu marca. Míralo en 2 minutos.",
        url: "https://totalgains.es/demo/nutricionistas/",
        images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains para nutricionistas" }],
    },
};

export default function DemoNutricionistas() {
    return <FunnelLanding data={data} />;
}
