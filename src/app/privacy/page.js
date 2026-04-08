import Privacy from "@/components/Privacy";

export const metadata = {
    title: "Política de Privacidad",
    description: "Consulta la política de privacidad de TotalGains. Conoce cómo protegemos tus datos personales, información de atletas y cumplimiento RGPD.",
    alternates: {
        canonical: "https://totalgains.es/privacy/",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPage() {
    return <Privacy />;
}
