import Link from "next/link";
import FeatureMedia from "@/components/FeatureMedia";
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
                <section className="fn-hero">
                    <div className="fn-hero-bg" aria-hidden="true" />
                    <div className="container fn-hero-inner">
                        <nav aria-label="Ruta de navegación" className="fn-crumbs">
                            <Link href="/">Inicio</Link>
                            <span aria-hidden="true">›</span>
                            <span>Funciones</span>
                        </nav>

                        <span className="fn-badge">Catálogo completo</span>
                        <h1 className="fn-h1 gradient-text">Todo lo que hace TotalGains</h1>
                        <p className="fn-intro">
                            El catálogo completo, separado por perfil porque el trabajo de un entrenador y el de un
                            gimnasio no se parecen en nada. {totalEntrenadores} funciones para entrenadores y
                            nutricionistas, {totalGimnasios} para centros.
                        </p>

                        <div className="fn-todo glass">
                            <p className="fn-todo-t">Todas las funciones entran en todos los planes</p>
                            <p className="fn-todo-d">
                                No hay add-ons, ni módulos que se contratan aparte, ni funciones bloqueadas por plan.
                                Dentro del producto de entrenador, el plan gratuito de 5 atletas trae lo mismo que el
                                mayor. Dentro del producto de gimnasio, los tres planes traen lo mismo y todos llevan
                                coaches ilimitados. Lo único que cambia es cuántos atletas o cuántos socios activos
                                puedes llevar, y todos los precios se publican con el IVA ya incluido.
                            </p>
                        </div>

                    </div>
                </section>

                <div className="container">
                    <div className="fn-hub-grid">
                        <Link href="/funciones/entrenadores/" className="fn-hub-card glass" prefetch={false}>
                            <h2 className="gradient-text">Entrenadores y nutricionistas</h2>
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

                        <Link href="/funciones/gimnasios/" className="fn-hub-card glass" prefetch={false}>
                            <h2 className="gradient-text">Gimnasios, estudios y boxes</h2>
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

                    {/* Debajo de las dos tarjetas, no encima. Esta página tiene un
                        solo trabajo — mandarte a uno de los dos catálogos — y con el
                        vídeo delante las dos puertas quedaban a 1.158px del inicio:
                        en un portátil no se veía ninguna de las dos al llegar. */}
                    <FeatureMedia
                        media={[{
                            tipo: "video",
                            src: "/video/coach-asignar-rutina.mp4",
                            poster: "/video/coach-asignar-rutina.webp",
                            w: 1280,
                            h: 720,
                            pw: 1200,
                            ph: 676,
                            alt: "Asignación de una rutina a un atleta en el panel de TotalGains",
                            pie: "Asignar una rutina a un atleta, de principio a fin.",
                        }]}
                    />
                </div>

                <section className="fn-cierre">
                    <div className="fn-hero-bg" aria-hidden="true" />
                    <div className="container fn-cierre-inner">
                        <h2 className="fn-h2 gradient-text">¿Prefieres ver los precios primero?</h2>
                        <p className="fn-intro">
                            Plan gratuito permanente hasta 5 atletas para entrenadores, y gimnasios desde 149 € al
                            mes con IVA y coaches ilimitados.
                        </p>
                        <div className="fn-ctas">
                            <Link href="/precios/" className="btn btn-primary btn-lg" prefetch={false}>
                                Ver precios
                            </Link>
                            <Link href="/onboarding/" className="btn btn-outline" prefetch={false}>
                                Empezar gratis
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
