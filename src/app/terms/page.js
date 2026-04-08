import Terms from "@/components/Terms";

export const metadata = {
    title: "Términos y Condiciones",
    description: "Lee los términos y condiciones de uso de TotalGains. Información sobre suscripciones, uso del software, responsabilidades y cancelaciones.",
    alternates: {
        canonical: "https://totalgains.es/terms/",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsPage() {
    return <Terms />;
}
