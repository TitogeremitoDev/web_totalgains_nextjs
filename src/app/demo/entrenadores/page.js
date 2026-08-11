import FunnelLanding from "@/components/funnel/FunnelLanding";
import data from "@/data/funnels/entrenadores";

/* ⚠️ noindex a propósito — ver la nota de /demo/nutricionistas/. Esta no puede
   competir con /software-entrenador-personal/, que es la que rankea. */
export const metadata = {
    title: "Demo para entrenadores personales",
    description:
        "Periodizaciones con IA en segundos, seguimiento que se rellena solo y app con tu marca en el móvil de cada cliente. Demo en 2 minutos.",
    robots: { index: false, follow: false, nocache: true },
    alternates: { canonical: "https://totalgains.es/demo/entrenadores/" },
    openGraph: {
        title: "TotalGains para entrenadores — deja de montar rutinas en Excel",
        description:
            "Rutinas con IA, vídeo-feedback con anotaciones, centro de alertas y app marca blanca incluida. Míralo en 2 minutos.",
        url: "https://totalgains.es/demo/entrenadores/",
        images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains para entrenadores personales" }],
    },
};

export default function DemoEntrenadores() {
    return <FunnelLanding data={data} />;
}
