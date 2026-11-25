import Link from "next/link";
import CalculadoraRM from "@/components/CalculadoraRM";
import { organizationNode } from "@/data/productSchema";
import { FAQS_RM } from "@/data/calculadoraRM";
import "./calculadora-rm.css";

/* Herramienta gratis: calculadora de RM (repetición máxima). Idea «Calculadora de 1RM» de «🌐 Mejoras web» (25-nov-2026).
   Búsquedas en España (Keyword Planner, 25-nov): «calculadora rm» 1.000 a 10.000 al mes y «calculadora 1rm» 100 a 1.000.
   Lo de TotalGains que se cuenta aquí está comprobado en la app (entreno.jsx: 1RM Epley; RoutineEditor: peso orientativo «≈»;
   perfil/evolucion.jsx: gráfica e1RM). Gimnasios y boxes primero. */

const URL = "https://totalgains.es/calculadora-rm/";

export const metadata = {
    title: { absolute: "Calculadora de RM (1RM): tu repetición máxima y tus porcentajes | TotalGains" },
    description:
        "Calculadora de RM gratis: pon el peso y las repeticiones y te da tu 1RM estimado (Epley y Brzycki) y la tabla de pesos del 50 al 100 %, con repeticiones orientativas.",
    alternates: { canonical: URL },
    openGraph: {
        type: "website",
        title: "Calculadora de RM (1RM) gratis | TotalGains",
        description: "Tu repetición máxima estimada y tus pesos por porcentaje, en segundos y sin probar tu máximo.",
        url: URL,
        images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains" }],
    },
};

export default function PaginaCalculadoraRM() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebApplication",
                "@id": `${URL}#calculadora`,
                name: "Calculadora de RM (repetición máxima)",
                url: URL,
                applicationCategory: "SportsApplication",
                operatingSystem: "Web",
                inLanguage: "es",
                isAccessibleForFree: true,
                offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
                description:
                    "Estima la repetición máxima (1RM) a partir del peso y las repeticiones con las fórmulas de Epley y Brzycki, y calcula los pesos por porcentaje del 1RM con las repeticiones orientativas de la tabla de la NSCA.",
                publisher: { "@id": "https://totalgains.es/#organization" },
            },
            organizationNode(),
            {
                "@type": "FAQPage",
                mainEntity: FAQS_RM.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
                    { "@type": "ListItem", position: 2, name: "Calculadora de RM", item: URL },
                ],
            },
        ],
    };

    return (
        <main className="calc-rm-pagina">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="calc-rm-pagina__cabecera">
                <span className="calc-rm-pagina__etiqueta">Herramienta gratis</span>
                <h1>Calculadora de RM: tu repetición máxima y tus porcentajes</h1>
                <p>
                    Calcula tu 1RM sin arriesgarte a probar tu máximo: con el peso que mueves y las repeticiones que haces, sale tu
                    repetición máxima estimada y la tabla de pesos para cada porcentaje. Para tu box, tu gimnasio o tu propio entreno.
                </p>
            </div>

            <CalculadoraRM />

            <section className="calc-rm-pagina__bloque">
                <h2>Cómo se calcula el RM</h2>
                <p>
                    El 1RM es el peso máximo que puedes levantar una sola vez con buena técnica. Probarlo directamente cansa y tiene
                    más riesgo, por eso lo habitual es estimarlo a partir de una serie de varias repeticiones:
                </p>
                <ul>
                    <li><strong>Epley:</strong> 1RM = peso × (1 + repeticiones ÷ 30). Es la que usa la app de TotalGains.</li>
                    <li><strong>Brzycki:</strong> 1RM = peso × 36 ÷ (37 − repeticiones). Da cifras algo más bajas con muchas repeticiones.</li>
                </ul>
                <p>
                    Las dos son más fiables con series cortas, de 3 a 8 repeticiones. Con más de 10, el error crece. La explicación
                    completa, con ejemplos y la tabla de porcentajes, está en la guía{" "}
                    <Link href="/blog/como-calcular-1rm-porcentajes/" prefetch={false}>Cómo calcular tu 1RM y entrenar por porcentajes</Link>.
                </p>
            </section>

            <section className="calc-rm-pagina__bloque calc-rm-pagina__tg">
                <h2>En tu box o gimnasio, sin calculadora</h2>
                <p>
                    Con TotalGains, tus socios y atletas apuntan sus series en la app con la marca de tu centro y la app calcula su 1RM
                    estimado con la misma fórmula. Si un ejercicio cambia de repeticiones de un día a otro y su entrenador lo tiene
                    activado, les propone el peso orientativo, marcado con «≈», y en «Evolución» ven cómo sube su RM semana a semana.
                </p>
                <div className="calc-rm-pagina__botones">
                    <Link href="/para-gimnasios/" className="btn btn-primary" prefetch={false}>TotalGains para gimnasios</Link>
                    <Link href="/software-entrenador-personal/" className="btn btn-outline" prefetch={false}>Para entrenadores personales</Link>
                </div>
            </section>

            <section className="calc-rm-pagina__bloque">
                <h2>Preguntas frecuentes</h2>
                {FAQS_RM.map((f) => (
                    <details key={f.q} className="calc-rm-pagina__faq">
                        <summary>{f.q}</summary>
                        <p>{f.a}</p>
                    </details>
                ))}
            </section>
        </main>
    );
}
