import Link from "next/link";
import TrustpilotBadge from "@/components/TrustpilotBadge";
import StickyCTA from "@/components/StickyCTA";
import { TRUSTPILOT } from "@/data/productSchema";
import {
    FECHA_VERIFICACION_TIMP,
    FUENTE_TIMP,
    PLANES_TIMP,
    PLANES_TG_GYM,
    COMPARATIVA_TIMP,
    ENCAJA_TIMP,
    ENCAJA_TG,
    TIMP_FAQS,
} from "@/data/alternativaTimp";
import "@/app/alternativas/trainerize/Alternativas.css";
import "@/app/alternativas/timp/timp.css";

// Mismo canal que /para-gimnasios/: un centro pide demo por email, no se da
// de alta solo (el onboarding de /onboarding/ es el del entrenador).
const MAILTO =
    "mailto:soporte@totalgains.es?subject=Demo%20TotalGains%20para%20gimnasios%20(vengo%20de%20Timp)";

function Encaja({ item }) {
    return (
        <div className="faq-card glass alt-timp-fit">
            <h3>{item.titulo}</h3>
            <p><strong>Tu situación:</strong> {item.situacion}</p>
            <p><strong>Por qué:</strong> {item.porque}</p>
            <p><strong>Cuándo no:</strong> {item.cuandoNo}</p>
        </div>
    );
}

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
                        Timp cobra por profesional e incluye pagos dentro de la app. TotalGains cobra por socios
                        activos, con entrenadores ilimitados, y añade rutinas y dietas con IA para tus socios, todo
                        con la marca de tu centro.
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
                        Precios con IVA · Entrenadores ilimitados · Migración desde Timp incluida
                    </p>
                    <div style={{ marginTop: 20 }}>
                        <TrustpilotBadge score={TRUSTPILOT.score} totalReviews={TRUSTPILOT.reviews} variant="compact" />
                    </div>
                </header>

                <section className="alt-intro">
                    <p>
                        Timp es un software español de reservas y gestión para centros deportivos y de bienestar. En
                        todos sus planes incluye calendario, reservas desde app y web, pagos dentro de la app y
                        facturación electrónica, y a partir de ahí suma módulos según el plan: historial médico y
                        entrenamiento desde Basic; CRM, estadísticas, tienda online y streaming desde Pro, y grabación
                        de sesiones en Premium. Si lo que más pesa en tu centro es la agenda y cobrar dentro de la app,
                        es una opción sólida.
                    </p>
                    <p>
                        TotalGains parte de otro sitio. Además de clases, bonos y cuotas, tus socios tienen su rutina y
                        su dieta en la misma app, con la marca de tu centro, y el precio depende de los socios activos,
                        no de cuántos entrenadores usan la herramienta.
                    </p>
                    <p>
                        Esta comparativa la escribe el equipo de TotalGains. Los datos de Timp son los que publica en{" "}
                        <a href={FUENTE_TIMP} target="_blank" rel="noopener noreferrer nofollow">su página de precios</a>,
                        consultada el {FECHA_VERIFICACION_TIMP}. Su web no indica si esos precios incluyen IVA, así que
                        los reproducimos tal cual; los de TotalGains llevan el IVA incluido.
                    </p>
                </section>

                <section className="alt-timp-section">
                    <h2>Precios: por profesional o por socios activos</h2>
                    <p className="alt-timp-lead">
                        Los dos cobran por centro, pero miden cosas distintas: Timp, cuántos profesionales usan la
                        herramienta; TotalGains, cuántos socios activos tienes.
                    </p>
                    <div className="alt-timp-two">
                        <div>
                            <div className="comparison-table-container glass alt-timp-table">
                                <table className="comparison-table">
                                    <thead>
                                        <tr>
                                            <th className="tr-column">Plan de Timp</th>
                                            <th>Precio publicado</th>
                                            <th>Profesionales</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {PLANES_TIMP.map((p) => (
                                            <tr key={p.nombre}>
                                                <td className="feature-name">{p.nombre}</td>
                                                <td>{p.precio}</td>
                                                <td>{p.profesionales}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="alt-timp-note">
                                Precios por centro, un 5 % más baratos con pago semestral y un 10 % con pago anual.
                                Según su web, pueden variar si se contratan módulos extra. No indica si incluyen IVA.
                            </p>
                        </div>
                        <div>
                            <div className="comparison-table-container glass alt-timp-table">
                                <table className="comparison-table">
                                    <thead>
                                        <tr>
                                            <th className="tg-column"><span className="tg-logo-table">TotalGains</span></th>
                                            <th>Precio con IVA</th>
                                            <th>Socios activos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {PLANES_TG_GYM.map((p) => (
                                            <tr key={p.nombre}>
                                                <td className="feature-name">{p.nombre}</td>
                                                <td>{p.precio}</td>
                                                <td>{p.socios}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="alt-timp-note">
                                Entrenadores ilimitados y todas las funciones en los tres planes: cambian los socios
                                activos y el soporte. Con pago anual pagas 10 mensualidades.
                            </p>
                        </div>
                    </div>
                    <div className="alt-timp-decision glass">
                        <strong>Decisión de diseño en TotalGains:</strong> los planes de gimnasio se pagan por socios
                        activos y los entrenadores son ilimitados en los tres. Así, dar acceso a un monitor nuevo, a un
                        fisio o a alguien de prácticas no cambia la factura del centro. El contrapunto honesto: si tu
                        centro tiene de uno a tres profesionales y pocos socios, el Starter de Timp (50 €/mes) o su
                        Basic (85 €/mes) cuestan menos que nuestro Gym Starter (149 €/mes con IVA).
                    </div>
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
                                        <td>{row.tg}</td>
                                        <td>{row.timp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="alt-timp-note">
                        Las funciones de Timp salen de su página de precios oficial, consultada el{" "}
                        {FECHA_VERIFICACION_TIMP}.
                    </p>
                </section>

                <section className="alt-timp-section">
                    <h2>Cuándo te encaja mejor cada uno</h2>
                    <div className="faq-grid">
                        {ENCAJA_TIMP.map((item) => <Encaja key={item.titulo} item={item} />)}
                        {ENCAJA_TG.map((item) => <Encaja key={item.titulo} item={item} />)}
                    </div>
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
