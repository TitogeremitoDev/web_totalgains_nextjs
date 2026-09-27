import Link from "next/link";
import TrustpilotBadge from "@/components/TrustpilotBadge";
import StickyCTA from "@/components/StickyCTA";
import { TRUSTPILOT } from "@/data/productSchema";
import {
    FECHA_VERIFICACION_TIMP,
    FUENTE_TIMP,
    DESDE_TG_GYM,
    COMPARATIVA_TIMP,
    POR_QUE_TG,
    PRECIO_IGUALADO,
    TIMP_FAQS,
} from "@/data/alternativaTimp";
import "@/app/alternativas/trainerize/Alternativas.css";
import "@/app/alternativas/timp/timp.css";

// Mismo canal que /para-gimnasios/: un centro pide demo por email, no se da
// de alta solo (el onboarding de /onboarding/ es el del entrenador).
const MAILTO =
    "mailto:soporte@totalgains.es?subject=Demo%20TotalGains%20para%20gimnasios%20(vengo%20de%20Timp)";

/* TotalGains primero: ver la cabecera de @/data/alternativaTimp. */
export default function AlternativaTimpContent() {
    return (
        <main className="alternativas-page">
            <div className="container alternativas-container">
                <header className="alternativas-header" id="alt-hero">
                    <span className="badge warning-badge">Para gimnasios, estudios y boxes</span>
                    <span className="alt-timp-verified">
                        Datos de Timp verificados en su web oficial el {FECHA_VERIFICACION_TIMP}
                    </span>
                    <h1 className="alternativas-title gradient-text">
                        Alternativa a Timp para gimnasios, estudios y boxes
                    </h1>
                    <p className="alternativas-subtitle mt-4">
                        Todas las funciones en todos los planes, entrenadores ilimitados y rutinas y dietas con IA
                        para tus socios, en una app con la marca de tu centro. Desde {DESDE_TG_GYM} €/mes con IVA
                        incluido.
                    </p>
                    <div className="alt-cta-top">
                        <a href={MAILTO} className="btn btn-primary btn-lg">
                            Pedir una demo para mi centro
                        </a>
                        <Link href="/para-gimnasios/" className="btn btn-outline" prefetch={false}>
                            Ver precios para gimnasios
                        </Link>
                    </div>
                    <p className="alt-cta-top-note">
                        Todo incluido · Entrenadores ilimitados · Migración desde Timp incluida
                    </p>
                    <div style={{ marginTop: 20 }}>
                        <TrustpilotBadge score={TRUSTPILOT.score} totalReviews={TRUSTPILOT.reviews} variant="compact" />
                    </div>
                </header>

                <section className="alt-intro">
                    <p>
                        Si vienes de Timp o lo estás valorando, la diferencia de fondo está en qué pagas. En Timp el
                        precio depende de cuántos profesionales usan la herramienta (1, 3, 10 o 15) y las funciones se
                        van sumando al subir de plan: el registro horario desde Basic, y la tienda online, el CRM y
                        las estadísticas desde Pro.
                    </p>
                    <p>
                        En TotalGains pagas según tus socios activos, los entrenadores son ilimitados y todo está
                        incluido desde el primer plan: clases con reserva y lista de espera, tienda, servicios de pago
                        por sesión, cuotas que se registran y facturan solas, fichajes y, además, rutinas y dietas con
                        IA para tus socios, en una app con la marca de tu centro.
                    </p>
                    <p>
                        Esta comparativa la hace el equipo de TotalGains con lo que Timp publica en{" "}
                        <a href={FUENTE_TIMP} target="_blank" rel="noopener noreferrer nofollow">su página de precios</a>,
                        consultada el {FECHA_VERIFICACION_TIMP}.
                    </p>
                </section>

                <section className="alt-timp-section">
                    <h2>Qué incluye cada uno</h2>
                    <div className="comparison-table-container glass">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Aspecto</th>
                                    <th className="tg-column"><span className="tg-logo-table">TotalGains</span></th>
                                    <th className="tr-column">Timp (según su web)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARATIVA_TIMP.map((row) => (
                                    <tr key={row.aspecto}>
                                        <td className="feature-name">{row.aspecto}</td>
                                        <td className="tg-feature">✅ {row.tg}</td>
                                        <td className="tr-feature">{row.timp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="alt-timp-section">
                    <h2>Por qué TotalGains</h2>
                    <div className="faq-grid">
                        {POR_QUE_TG.map((item) => (
                            <div key={item.titulo} className="faq-card glass alt-timp-why">
                                <h3>{item.titulo}</h3>
                                <p>{item.texto}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="alt-timp-section">
                    <h2>El precio, comparando lo mismo</h2>
                    <p className="alt-timp-lead">
                        Lo que en Timp depende del plan, en TotalGains viene incluido. Esto es lo que cuesta tener lo
                        mismo en cada uno.
                    </p>
                    <div className="comparison-table-container glass alt-timp-table">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Si quieres</th>
                                    <th className="tr-column">Timp</th>
                                    <th className="tg-column"><span className="tg-logo-table">TotalGains</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {PRECIO_IGUALADO.map((row) => (
                                    <tr key={row.caso}>
                                        <td className="feature-name">{row.caso}</td>
                                        <td className="tr-feature">{row.timp}</td>
                                        <td className="tg-feature">✅ {row.tg}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="alt-timp-note">
                        Precios de Timp publicados en su web el {FECHA_VERIFICACION_TIMP}, por centro. Ni su página de
                        precios ni sus términos indican si llevan IVA: si no lo llevan, con el 21 % el Pro serían
                        157,30 €/mes y el Premium, 205,70 €/mes. TotalGains para gimnasios cuesta 149, 199 o 249 €/mes
                        con IVA incluido según tus socios activos (hasta 100, de 100 a 200 o más de 200).
                    </p>
                </section>

                <div className="migration-block glass">
                    <span className="migration-icon">✈️</span>
                    <h3>Cambiar de Timp a TotalGains</h3>
                    <p>
                        Nuestro equipo pasa tus socios, horarios, planes y bonos, en español y sin coste. La
                        configuración base suele quedar lista en tres a cinco días.
                    </p>
                    <div className="alt-cta-mid">
                        <a href={MAILTO} className="btn btn-primary">
                            Pedir una demo para mi centro
                        </a>
                        <Link href="/funciones/gimnasios/" className="alt-cta-mid-link" prefetch={false}>
                            Ver todas las funciones para gimnasios →
                        </Link>
                    </div>
                </div>

                <div className="alternativas-faq">
                    <h2>Preguntas frecuentes: TotalGains vs Timp</h2>
                    <div className="faq-grid">
                        {TIMP_FAQS.map((faq) => (
                            <div key={faq.question} className="faq-card glass">
                                <h4>{faq.question}</h4>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cta-wrapper">
                    <Link href="/para-gimnasios/" className="btn btn-primary btn-lg cta-migrar" prefetch={false}>
                        Ver TotalGains para gimnasios
                    </Link>
                    <p className="microcopy-secure mt-2">
                        Precios con IVA. Entrenadores ilimitados. Migración desde Timp incluida.
                    </p>
                </div>
            </div>

            <StickyCTA
                anchorId="alt-hero"
                href="/para-gimnasios/"
                text="TotalGains para gimnasios"
                ctaLocation="alternativas_timp_sticky"
            />
        </main>
    );
}
