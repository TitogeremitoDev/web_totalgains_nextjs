import ResetPassword from "@/components/ResetPassword";

export const metadata = {
    title: "Restablecer Contraseña",
    description: "Restablece tu contraseña de TotalGains de forma segura. Introduce tu correo y recibirás un enlace de recuperación en menos de un minuto.",
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
