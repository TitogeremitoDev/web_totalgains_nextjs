import DeleteAccount from "@/components/DeleteAccount";

export const metadata = {
    title: "Eliminar Cuenta | TotalGains",
    description: "Solicita la eliminación de tu cuenta de TotalGains y todos tus datos asociados.",
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
