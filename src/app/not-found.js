import Link from "next/link";

/* 404 propio. Antes salía el de Next por defecto ("This page could not be
   found."), en inglés y sin salidas. Además de la traducción, la lista enlaza
   sitemap.xml y llms.txt: un agente que aterriza en una URL rota necesita saber
   dónde está el índice, no solo que se ha equivocado. */
export const metadata = {
    title: "Página no encontrada",
    description: "La página que buscas no existe. Aquí tienes el índice del sitio para seguir.",
    robots: { index: false, follow: true },
};

const destinos = [
    { href: "/", label: "Inicio", desc: "Qué es TotalGains y para quién" },
    { href: "/software-entrenador-personal/", label: "Software para entrenadores", desc: "Funcionalidades y precios" },
    { href: "/para-gimnasios/", label: "Para gimnasios", desc: "Clases, reservas y multi-coach" },
    { href: "/alternativas/", label: "Comparativas", desc: "Harbiz, Trainerize, MyPT Hub y más" },
    { href: "/blog/", label: "Blog", desc: "Guías para coaches y nutricionistas" },
    { href: "/sobre-nosotros/", label: "Sobre nosotros", desc: "Quién está detrás" },
];

export default function NotFound() {
    return (
        <main className="container" style={{ maxWidth: 760, padding: "140px 0 120px" }}>
            <p style={{ color: "var(--primary-light)", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", fontSize: ".78rem", marginBottom: 12 }}>
                Error 404
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", lineHeight: 1.15, margin: "0 0 16px", color: "var(--text-primary)" }}>
                Esta página no existe
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.6, margin: "0 0 40px" }}>
                El enlace que has seguido está roto o la página cambió de dirección. Desde aquí puedes seguir por donde ibas.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "grid", gap: 14 }}>
                {destinos.map((d) => (
                    <li key={d.href}>
                        <Link href={d.href} style={{ color: "var(--text-primary)", fontWeight: 600, textDecoration: "none" }}>
                            {d.label}
                        </Link>
                        <span style={{ color: "var(--text-muted)" }}> — {d.desc}</span>
                    </li>
                ))}
            </ul>

            <p style={{ color: "var(--text-muted)", fontSize: ".9rem", lineHeight: 1.6, borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 20 }}>
                Índice completo del sitio: <a href="/sitemap.xml" style={{ color: "var(--primary-light)" }}>sitemap.xml</a>
                {" · "}Resumen para sistemas de IA: <a href="/llms.txt" style={{ color: "var(--primary-light)" }}>llms.txt</a>
                {" y "}<a href="/llms-full.txt" style={{ color: "var(--primary-light)" }}>llms-full.txt</a>
                {" · "}Soporte: <a href="mailto:soporte@totalgains.es" style={{ color: "var(--primary-light)" }}>soporte@totalgains.es</a>
            </p>
        </main>
    );
}
