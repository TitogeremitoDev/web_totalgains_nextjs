import FunnelLanding from "@/components/funnel/FunnelLanding";
import data from "@/data/funnels/gimnasios";

/* ⚠️ noindex a propósito — ver la nota de /demo/nutricionistas/. La que trabaja
   el buscador para este vertical es /para-gimnasios/. */
export const metadata = {
    title: "Demo para gimnasios y estudios",
    description:
        "Reservas con aforo real y lista de espera, multi-coach con permisos, app con la marca del centro y panel de retención. Pide tu demo.",
    robots: { index: false, follow: false, nocache: true },
    alternates: { canonical: "https://totalgains.es/demo/gimnasios/" },
    openGraph: {
        title: "TotalGains para gimnasios — tu centro fuera del grupo de WhatsApp",
        description:
            "Clases con waitlist automática, coaches ilimitados, marca blanca del centro y migración incluida. Demo sin compromiso.",
        url: "https://totalgains.es/demo/gimnasios/",
        images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains para gimnasios" }],
    },
};

export default function DemoGimnasios() {
    return <FunnelLanding data={data} />;
}
