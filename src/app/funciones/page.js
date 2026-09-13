import Link from "next/link";
import { organizationNode, softwareApplicationNode } from "@/data/productSchema";
import entrenadores from "@/data/funciones/entrenadores";
import gimnasios from "@/data/funciones/gimnasios";
import "@/components/funciones.css";

/* ──────────────────────────────────────────────
   /funciones — HUB

   Los dos catálogos cuelgan de aquí y aquí vive, en su forma canónica, el
   argumento de que no hay add-ons. Las cifras se cuentan de los propios
   catálogos: si mañana se añaden funciones, el número sube solo y nadie tiene
   que acordarse de actualizar un texto.

   Sin `featureList` en el schema a propósito: esta página enseña las áreas, no
   las funciones una a una. Las marcan las dos páginas hijas, que sí las pintan.
   ────────────────────────────────────────────── */

const totalEntrenadores = entrenadores.categorias.reduce((n, c) => n + c.items.length, 0);
const totalGimnasios = gimnasios.categorias.reduce((n, c) => n + c.items.length, 0);

export const metadata = {
    title: { absolute: "Funciones de TotalGains: todo lo que incluye el plan" },
    description:
        "Catálogo completo de funciones de TotalGains para entrenadores, nutricionistas y gimnasios. Rutinas y dietas con IA, clases con reserva, tienda con stock y pedidos, caja y facturación. Todo incluido en cualquier plan, sin add-ons.",
    alternates: { canonical: "https://totalgains.es/funciones/" },
    openGraph: {
        title: "Funciones de TotalGains: todo lo que incluye el plan",
        description:
            "El catálogo completo, por perfil: entrenadores y nutricionistas, y gimnasios. Sin add-ons ni módulos que se contratan aparte.",
        url: "https://totalgains.es/funciones/",
        images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "Funciones de TotalGains" }],
    },
    robots: { index: true, follow: true },
};

export default function FuncionesHub() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            organizationNode(),
            softwareApplicationNode({
                description:
                    "Software español para entrenadores personales, nutricionistas y gimnasios. Todas las funciones vienen incluidas en todos los planes de su producto, sin add-ons ni coste por módulo.",
            }),
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
                    { "@type": "ListItem", position: 2, name: "Funciones", item: "https://totalgains.es/funciones/" },
                ],
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <main className="fn">
                <div className="fn-wrap">
                    <nav aria-label="Ruta de navegación" className="fn-crumbs">
                        <Link href="/">Inicio</Link>
                        <span aria-hidden="true">›</span>
                        <span>Funciones</span>
                    </nav>

                    <header className="fn-hero">
                        <h1 className="fn-h1">Todo lo que hace TotalGains</h1>
                        <p className="fn-intro">
                            El catálogo completo, separado por perfil porque el trabajo de un entrenador y el de un
                            gimnasio no se parecen en nada. {totalEntrenadores} funciones para entrenadores y
                            nutricionistas, {totalGimnasios} para centros.
                        </p>

                        <div className="fn-todo">
                            <p className="fn-todo-t">Todas las funciones entran en todos los planes</p>
                            <p className="fn-todo-d">
                                No hay add-ons, ni módulos que se contratan aparte, ni funciones bloqueadas por plan.
                                Dentro del producto de entrenador, el plan gratuito de 5 atletas trae lo mismo que el
                                mayor. Dentro del producto de gimnasio, los tres planes traen lo mismo y todos llevan
                                coaches ilimitados. Lo único que cambia es cuántos atletas o cuántos socios activos
                                puedes llevar, y todos los precios se publican con el IVA ya incluido.
                            </p>
                        </div>
                    </header>

                    <div className="fn-hub-grid">
                        <Link href="/funciones/entrenadores/" className="fn-hub-card" prefetch={false}>
                            <h2>Entrenadores y nutricionistas</h2>
                            <p>
                                Rutinas y dietas con IA sobre tu propia biblioteca, resistencia, seguimiento,
                                vídeo-feedback, Mi Ciclo y app con tu marca. {totalEntrenadores} funciones repartidas en{" "}
                                {entrenadores.categorias.length} áreas.
                            </p>
                            <div className="fn-hub-tags">
                                {entrenadores.categorias.map((c) => (
                                    <span key={c.id} className="fn-hub-tag">{c.nombre}</span>
                                ))}
                            </div>
                            <span className="fn-hub-go">Ver el catálogo completo →</span>
                        </Link>

                        <Link href="/funciones/gimnasios/" className="fn-hub-card" prefetch={false}>
                            <h2>Gimnasios, estudios y boxes</h2>
                            <p>
                                Clases con aforo y lista de espera, tienda con stock y pedidos desde la app del socio,
                                caja y facturación, multi-coach con permisos y retención. {totalGimnasios} funciones en{" "}
                                {gimnasios.categorias.length} áreas.
                            </p>
                            <div className="fn-hub-tags">
                                {gimnasios.categorias.map((c) => (
                                    <span key={c.id} className="fn-hub-tag">{c.nombre}</span>
                                ))}
                            </div>
                            <span className="fn-hub-go">Ver el catálogo completo →</span>
                        </Link>
                    </div>

                    <section className="fn-cierre">
                        <h2 className="fn-h2">¿Prefieres ver los precios primero?</h2>
                        <p className="fn-intro">
                            Plan gratuito permanente hasta 5 atletas para entrenadores, y gimnasios desde 149 euros al
                            mes con IVA y coaches ilimitados.
                        </p>
                        <div className="fn-ctas">
                            <Link href="/precios/" className="fn-btn fn-btn-primary" prefetch={false}>
                                Ver precios
                            </Link>
                            <Link href="/onboarding/" className="fn-btn fn-btn-ghost" prefetch={false}>
                                Empezar gratis
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
