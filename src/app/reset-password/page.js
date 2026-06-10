import ResetPassword from "@/components/ResetPassword";

export const metadata = {
    title: "Restablecer Contraseña | TotalGains",
    description: "Restablece tu contraseña de TotalGains de forma segura.",
    alternates: {
        canonical: "https://totalgains.es/reset-password/",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function ResetPasswordPage() {
    return <ResetPassword />;
}
