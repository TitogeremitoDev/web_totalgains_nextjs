import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";
import MiniAtleta from "@/components/calculadora-rm/MiniAtleta";
import GuiasGratis from "@/components/GuiasGratis";
import { organizationNode } from "@/data/productSchema";
import "./herramientas.css";

/* Herramientas gratis (27-nov-2026). German: «¿creamos una nueva sección de herramientas? lo malo es que el nav se
   llene» → va dentro de «Recursos» (Navbar) y no como apartado nuevo. Solo lo que YA existe y funciona:
   - /calculadora-rm/ (publicada el 27-nov),
   - la calculadora del precio real por hora (PriceCalculatorCoach, dentro del artículo precio-real-tarifa-coach-online-2026),
   - las guías en PDF (GuiasGratis).
   ⛔ Nada de «próximamente»: cuando haya otra herramienta, se añade a HERRAMIENTAS. Gimnasios y boxes primero. */

const URL = "https://totalgains.es/herramientas/";

const HERRAMIENTAS = [
    {
        href: "/calculadora-rm/",
        titulo: "Calculadora de RM por ejercicio",
        para: "Para atletas, boxes y gimnasios",
        texto:
            "Tu 1RM en sentadilla, press de banca, peso muerto, press militar e hip thrust, tus pesos del 50 al 100 % y los discos que van a cada lado de la barra. Con un atleta animado y lista para compartir con tu compañero de box.",
        boton: "Calcular mi RM",
        arte: "rm",
    },
    {
        href: "/blog/precio-real-tarifa-coach-online-2026/",
        titulo: "Calculadora del precio real por hora",
        para: "Para entrenadores personales",
        texto:
            "Pon tus clientes, lo que cobras al mes, tus horas de trabajo y tus vacaciones: te dice cuánto ganas de verdad por hora, con el IVA descontado.",
        boton: "Calcular mi precio por hora",
        arte: "precio",
    },
];

export const metadata = {
    title: { absolute: "Herramientas gratis para gimnasios, entrenadores y atletas | TotalGains" },
    description:
        "Herramientas gratis y sin registro: calculadora de RM por ejercicio con discos por lado, calculadora del precio real por hora del entrenador y guías en PDF.",
    alternates: { canonical: URL },
    openGraph: {
        type: "website",
        title: "Herramientas gratis | TotalGains",
        description: "Calculadora de RM por ejercicio, calculadora del precio real por hora y guías en PDF, gratis y sin registro.",
        url: URL,
        images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains" }],
    },
};

export default function PaginaHerramientas() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": `${URL}#pagina`,
                name: "Herramientas gratis de TotalGains",
                url: URL,
                inLanguage: "es",
                description: metadata.description,
                publisher: { "@id": "https://totalgains.es/#organization" },
                mainEntity: {
                    "@type": "ItemList",
                    itemListElement: HERRAMIENTAS.map((h, i) => ({
                        "@type": "ListItem",
                        position: i + 1,
                        name: h.titulo,
                        url: `https://totalgains.es${h.href}`,
                    })),
                },
            },
            organizationNode(),
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
                    { "@type": "ListItem", position: 2, name: "Herramientas gratis", item: URL },
                ],
            },
        ],
    };

    return (
        <main className="herr-pagina">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="herr-cabecera">
                <span className="herr-etiqueta">Gratis y sin registro</span>
                <h1>Herramientas gratis para tu box, tu gimnasio y tu entrenamiento</h1>
                <p>
                    Calculadoras de TotalGains abiertas para todos: para atletas, para boxes y gimnasios y para entrenadores
                    personales que quieren poner números a su negocio.
                </p>
            </div>

            <div className="herr-rejilla">
                {HERRAMIENTAS.map((h) => (
                    <Link key={h.href} href={h.href} className="herr-tarjeta" prefetch={false}>
                        <div className={`herr-arte herr-arte--${h.arte}`}>
                            {h.arte === "rm" ? (
                                <MiniAtleta className="herr-atleta" />
                            ) : (
                                <div className="herr-precio" aria-hidden="true">
                                    <Calculator size={44} strokeWidth={1.6} />
                                    <span className="herr-precio-cifra">14 €/h</span>
                                    <span className="herr-precio-nota">¿cuánto ganas de verdad?</span>
                                </div>
                            )}
                        </div>
                        <div className="herr-cuerpo">
                            <span className="herr-para">{h.para}</span>
                            <h2>{h.titulo}</h2>
                            <p>{h.texto}</p>
                            <span className="herr-boton">
                                {h.boton} <ArrowRight size={16} aria-hidden="true" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            <GuiasGratis donde="herramientas" />

            <section className="herr-bloque">
                <h2>Todo esto, dentro de la app de tu centro</h2>
                <p>
                    Con TotalGains, tu box o gimnasio y tus atletas tienen la app con la marca de tu centro: apuntan sus series y la app
                    calcula su RM estimado de cada ejercicio con la misma fórmula, y en «Evolución» ven cómo sube semana a semana.
                </p>
                <div className="herr-botones">
                    <Link href="/para-gimnasios/" className="btn btn-primary" prefetch={false}>
                        TotalGains para gimnasios
                    </Link>
                    <Link href="/software-entrenador-personal/" className="btn btn-outline" prefetch={false}>
                        Para entrenadores personales
                    </Link>
                </div>
            </section>
        </main>
    );
}
