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
 *   faqs         Array<{ q: string, a: string }>
 */
const LandingPageTemplate = ({ badge, h1, subtitle, features, useCases, ctaText, ctaLocation, faqs }) => (
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
                            href="/onboarding"
                            className="btn btn-gold btn-lg"
                            onClick={() => trackEvent('cta_click', { cta_text: ctaText, cta_location: ctaLocation })}
                        >
                            <Rocket size={20} /> {ctaText}
                        </Link>
                        <span className="lp-cta-note">14 días gratis · Sin tarjeta</span>
                    </div>

                    <div className="lp-stars">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />)}
                        <span>Valorado 5★ por entrenadores reales</span>
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
        )}

        {/* ── Bottom CTA ── */}
        <section className="lp-bottom-cta">
            <div className="container lp-bottom-cta-inner">
                <h2>Empieza hoy. Sin tarjeta.</h2>
                <p>Únete a los entrenadores que ya escalaron su negocio con TotalGains.</p>
                <Link
                    href="/onboarding"
                    className="btn btn-gold btn-lg"
                    onClick={() => trackEvent('cta_click', { cta_text: 'Empieza gratis', cta_location: `${ctaLocation}_bottom` })}
                >
                    <Rocket size={20} /> Empieza gratis 14 días
                </Link>
            </div>
        </section>
    </main>
);

export default LandingPageTemplate;
