"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Rocket, Star } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import "./LandingPageTemplate.css";

/**
 * Reutilizable para las 5 landing pages de keywords transaccionales.
 * Props:
 *   badge        string  — etiqueta pequeña encima del H1
 *   h1           string  — H1 principal (keyword principal)
 *   subtitle     string  — párrafo de apoyo
 *   features     Array<{ icon: ReactNode, title: string, desc: string }>
 *   useCases     Array<string>  — lista de casos de uso específicos
 *   ctaText      string  — texto del botón principal
 *   ctaLocation  string  — para analytics
 *   ctaHref      string  — destino del CTA principal (default "/onboarding/")
 *   ctaNote      string  — texto pequeño junto al CTA (default "14 días gratis · Sin tarjeta")
 *   bottomCtaHeadline   string — H2 del bloque CTA inferior
 *   bottomCtaSubtitle   string — párrafo del bloque CTA inferior
 *   bottomCtaText       string — texto del botón del bloque CTA inferior
 *   faqs         Array<{ q: string, a: string }>
 */
const LandingPageTemplate = ({
    badge, h1, subtitle, features, useCases, ctaText, ctaLocation, faqs,
    ctaHref = "/onboarding/",
    /* ⚠️ Estos defaults salen en TODAS las landings. Antes anclaban en "14 días
       gratis" y eso hacía que el mensaje dominante del site fuera la prueba y no
       el plan gratuito permanente. Si una landing concreta necesita anclar en la
       prueba Pro, que pase ctaNote/bottomCtaText por props — no cambiar el default. */
    ctaNote = "Plan gratuito 5 atletas · Sin tarjeta",
    bottomCtaHeadline = "Empieza hoy. Sin tarjeta.",
    bottomCtaSubtitle = "Únete a los entrenadores que ya escalaron su negocio con TotalGains.",
    bottomCtaText = "Empieza gratis",
}) => (
    <main className="lp-page">
        {/* ── Hero ── */}
        <section className="lp-hero">
            <div className="lp-hero-bg" />
            <div className="container lp-hero-inner">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="lp-hero-content"
                >
                    {badge && <span className="lp-badge">{badge}</span>}
                    <h1 className="lp-h1 gradient-text">{h1}</h1>
                    <p className="lp-subtitle">{subtitle}</p>

                    <div className="lp-cta-row">
                        <Link
                            href={ctaHref}
                            className="btn btn-gold btn-lg"
                            onClick={() => trackEvent('cta_click', { cta_text: ctaText, cta_location: ctaLocation })}
                        >
                            <Rocket size={20} /> {ctaText}
                        </Link>
                        <span className="lp-cta-note">{ctaNote}</span>
                    </div>

                    <div className="lp-stars">
                        <Star size={14} fill="#fbbf24" color="#fbbf24" />
                        <Star size={14} fill="#fbbf24" color="#fbbf24" />
                        <Star size={14} fill="#fbbf24" color="#fbbf24" />
                        <Star size={14} fill="#fbbf24" color="#fbbf24" />
                        <Star size={14} fill="url(#half-fill)" color="#fbbf24" />
                        <svg width="0" height="0" style={{ position: 'absolute' }}>
                            <defs>
                                <linearGradient id="half-fill">
                                    <stop offset="60%" stopColor="#fbbf24" />
                                    <stop offset="60%" stopColor="transparent" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span>4,6/5 en Trustpilot · reseñas verificadas</span>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* ── Features ── */}
        {features?.length > 0 && (
            <section className="lp-features">
                <div className="container">
                    <div className="lp-features-grid">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                className="lp-feature-card glass"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <div className="lp-feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {/* ── Use cases ── */}
        {useCases?.length > 0 && (
            <section className="lp-usecases">
                <div className="container lp-usecases-inner">
                    <h2>¿Para quién es TotalGains?</h2>
                    <ul className="lp-usecases-list">
                        {useCases.map((uc, i) => (
                            <li key={i}><Check size={16} className="lp-check" />{uc}</li>
                        ))}
                    </ul>
                </div>
            </section>
        )}

        {/* ── FAQs ── */}
        {faqs?.length > 0 && (
            <>
                {/* FAQPage se emite AQUÍ, no en cada page.js: las 8 landings que pasan
                    `faqs` lo heredan de golpe y no puede desincronizarse del texto
                    visible, porque sale del mismo array. Ojo: desde 2023 Google sólo
                    pinta el rich result de FAQ a sitios oficiales/sanitarios; esto es
                    para Bing y para que los LLM extraigan las respuestas (llms.txt). */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: faqs.map(({ q, a }) => ({
                                "@type": "Question",
                                name: q,
                                acceptedAnswer: { "@type": "Answer", text: a },
                            })),
                        }),
                    }}
                />
                <section className="lp-faqs">
                    <div className="container lp-faqs-inner">
                        <h2>Preguntas frecuentes</h2>
                        <div className="lp-faqs-list">
                            {faqs.map((faq, i) => (
                                <div key={i} className="lp-faq-item glass">
                                    <h3>{faq.q}</h3>
                                    <p>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        )}

        {/* ── Bottom CTA ── */}
        <section className="lp-bottom-cta">
            <div className="container lp-bottom-cta-inner">
                <h2>{bottomCtaHeadline}</h2>
                <p>{bottomCtaSubtitle}</p>
                <Link
                    href={ctaHref}
                    className="btn btn-gold btn-lg"
                    onClick={() => trackEvent('cta_click', { cta_text: bottomCtaText, cta_location: `${ctaLocation}_bottom` })}
                >
                    <Rocket size={20} /> {bottomCtaText}
                </Link>
            </div>
        </section>
    </main>
);

export default LandingPageTemplate;
