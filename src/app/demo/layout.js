/* ──────────────────────────────────────────────
   LAYOUT DE LOS EMBUDOS

   Una landing de conversión no lleva el menú de la web: cada enlace a blog,
   alternativas o casos de éxito es una puerta por la que se va alguien que
   iba a convertir. Aquí solo hay una acción posible.

   El Navbar se apaga solo (es client component y mira la ruta). El Footer es
   server component y no puede: se apaga con esta regla CSS, que viaja únicamente
   en el HTML de /demo/* y no toca ni una página de la web pública.

   El banner de cookies SÍ se queda: es obligación legal, no decoración.
   ────────────────────────────────────────────── */

export const metadata = {
    robots: { index: false, follow: false },
};

export default function DemoLayout({ children }) {
    return (
        <>
            <style>{`.navbar, .footer { display: none !important; }`}</style>
            {children}
        </>
    );
}
