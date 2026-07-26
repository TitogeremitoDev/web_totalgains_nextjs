import DeleteAccount from "@/components/DeleteAccount";

export const metadata = {
    title: "Eliminar Cuenta",
    description: "Solicita la eliminación de tu cuenta TotalGains y de todos tus datos asociados (atletas, rutinas, dietas, historial) conforme al RGPD. Confirmación en 30 días.",
    alternates: {
        canonical: "https://totalgains.es/delete-account/",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function DeleteAccountPage() {
    return <DeleteAccount />;
}
