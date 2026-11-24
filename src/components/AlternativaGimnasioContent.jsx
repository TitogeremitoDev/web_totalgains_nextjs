import Link from "next/link";
import TrustpilotBadge from "@/components/TrustpilotBadge";
import StickyCTA from "@/components/StickyCTA";
import { TRUSTPILOT } from "@/data/productSchema";
import "@/app/alternativas/trainerize/Alternativas.css";
import "@/app/alternativas/timp/timp.css";

/* Página «Alternativa a <programa de gimnasio>», la misma para todas: recibe
   sus textos y sus tablas en `d` (ver @/data/alternativaTrainingym).
   Mismo orden que la de Timp (AlternativaTimpContent): TotalGains primero,
   funciones comparadas y el precio AL FINAL, comparando lo mismo.
   No enlaza a la web del competidor (German, 24-nov-2026). */
export default function AlternativaGimnasioContent({ d }) {
    // Mismo canal que /para-gimnasios/: un centro pide demo por email.
    const mailto = `mailto:soporte@totalgains.es?subject=${encodeURIComponent(
        `Demo TotalGains para gimnasios (vengo de ${d.nombre})`,
    )}`;

    return (
        <main className="alternativas-page">
            <div className="container alternativas-container">
                <header className="alternativas-header" id="alt-hero">
                    <span className="badge warning-badge">Para gimnasios, estudios y boxes</span>
                    <span className="alt-timp-verified">
                        Datos de {d.nombre} comprobados en su web oficial el {d.fecha}
                    </span>
                    <h1 className="alternativas-title gradient-text">
                        Alternativa a {d.nombre} para gimnasios, estudios y boxes
                    </h1>
                    <p className="alternativas-subtitle mt-4">{d.subtitulo}</p>
                    <div className="alt-cta-top">
                        <a href={mailto} className="btn btn-primary btn-lg">
                            Pedir una demo para mi centro
                        </a>
                        <Link href="/para-gimnasios/" className="btn btn-outline" prefetch={false}>
                            Ver precios para gimnasios
                        </Link>
                    </div>
                    <p className="alt-cta-top-note">{d.notaCta}</p>
                    <div style={{ marginTop: 20 }}>
                        <TrustpilotBadge score={TRUSTPILOT.score} totalReviews={TRUSTPILOT.reviews} variant="compact" />
                    </div>
                </header>

                <section className="alt-intro">
                    {d.intro.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                    <p>
                        Esta comparativa la hace el equipo de TotalGains con lo que {d.nombre} publica en {d.fuente},
                        consultadas el {d.fecha}. Si algún dato ha cambiado, escríbenos y lo corregimos.
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
                                    <th className="tr-column">{d.nombre} (según su web)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {d.comparativa.map((row) => (
                                    <tr key={row.aspecto}>
                                        <td className="feature-name">{row.aspecto}</td>
                                        <td className="tg-feature">✅ {row.tg}</td>
                                        <td className="tr-feature">{row.rival}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="alt-timp-section">
                    <h2>Por qué TotalGains</h2>
                    <div className="faq-grid">
                        {d.porQue.map((item) => (
                            <div key={item.titulo} className="faq-card glass alt-timp-why">
                                <h3>{item.titulo}</h3>
                                <p>{item.texto}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="alt-timp-section">
                    <h2>El precio, comparando lo mismo</h2>
                    <p className="alt-timp-lead">{d.precioLead}</p>
                    <div className="comparison-table-container glass alt-timp-table">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Tu centro</th>
                                    <th className="tr-column">{d.nombre}</th>
                                    <th className="tg-column"><span className="tg-logo-table">TotalGains</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {d.precioIgualado.map((row) => (
                                    <tr key={row.caso}>
                                        <td className="feature-name">{row.caso}</td>
                                        <td className="tr-feature">{row.rival}</td>
                                        <td className="tg-feature">✅ {row.tg}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="alt-timp-note">{d.precioNota}</p>
                </section>

                <div className="migration-block glass">
                    <span className="migration-icon">✈️</span>
                    <h3>Cambiar de {d.nombre} a TotalGains</h3>
                    <p>
                        Nuestro equipo pasa tus socios, horarios, planes y bonos, en español y sin coste. La
                        configuración base suele quedar lista en tres a cinco días.
                    </p>
                    <div className="alt-cta-mid">
                        <a href={mailto} className="btn btn-primary">
                            Pedir una demo para mi centro
                        </a>
                        <Link href="/funciones/gimnasios/" className="alt-cta-mid-link" prefetch={false}>
                            Ver todas las funciones para gimnasios →
                        </Link>
                    </div>
                </div>

                <div className="alternativas-faq">
                    <h2>Preguntas frecuentes: TotalGains vs {d.nombre}</h2>
                    <div className="faq-grid">
                        {d.faqs.map((faq) => (
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
                        Precios con IVA. Entrenadores ilimitados. Migración desde {d.nombre} incluida.
                    </p>
                </div>
            </div>

            <StickyCTA
                anchorId="alt-hero"
                href="/para-gimnasios/"
                text="TotalGains para gimnasios"
                ctaLocation={`alternativas_${d.slug}_sticky`}
            />
        </main>
    );
}
