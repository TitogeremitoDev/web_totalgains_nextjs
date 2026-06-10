"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone, Star, Sparkles } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import "./AppDownload.css";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.german92.titofitapp";
const APP_STORE_URL = "https://apps.apple.com/app/id6756856683";

export default function AppDownload() {
    return (
        <section className="app-download-section" id="descargar">
            <div className="app-download-bg" aria-hidden="true" />
            <div className="container app-download-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="app-download-header"
                >
                    <span className="app-download-eyebrow">
                        <Smartphone size={14} /> Descarga la app
                    </span>
                    <h2 className="app-download-title">
                        TotalGains está disponible en <span className="accent-gradient">Android y iOS</span>
                    </h2>
                    <p className="app-download-subtitle">
                        Gestiona tus atletas, diseña rutinas con IA y controla tu negocio fitness desde cualquier dispositivo. Descarga la app gratis en tu tienda favorita.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="app-download-buttons"
                >
                    <a
                        href={PLAY_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="store-badge store-badge-play"
                        onClick={() => trackEvent("app_download_click", { store: "google_play", location: "app_download_section" })}
                        aria-label="Descargar TotalGains en Google Play"
                    >
                        <svg viewBox="0 0 24 24" className="store-icon" aria-hidden="true">
                            <path fill="currentColor" d="M3.609 1.814L13.792 12 3.61 22.186c-.483-.24-.82-.743-.82-1.32V3.134c0-.577.337-1.08.82-1.32zm10.89 10.186l2.728-2.728 2.92 1.686c.91.525.91 1.859 0 2.384l-2.92 1.686-2.728-2.728-2.728 2.728-4.77 2.757L13.79 12 6.001 4.215l4.77 2.757L14.5 12z"/>
                        </svg>
                        <div className="store-badge-text">
                            <span className="store-badge-tiny">DISPONIBLE EN</span>
                            <span className="store-badge-name">Google Play</span>
                        </div>
                    </a>

                    <a
                        href={APP_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="store-badge store-badge-apple"
                        onClick={() => trackEvent("app_download_click", { store: "app_store", location: "app_download_section" })}
                        aria-label="Descargar TotalGains en App Store"
                    >
                        <svg viewBox="0 0 24 24" className="store-icon" aria-hidden="true">
                            <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        <div className="store-badge-text">
                            <span className="store-badge-tiny">DISPONIBLE EN</span>
                            <span className="store-badge-name">App Store</span>
                        </div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="app-rating-block glass"
                >
                    <div className="rating-icon-wrap">
                        <Sparkles size={24} />
                    </div>
                    <div className="rating-content">
                        <h3>¿Ya usas TotalGains?</h3>
                        <p>
                            Tu valoración nos ayuda muchísimo a crecer. Si la app te está siendo útil, déjanos 5 estrellas ⭐ — solo te lleva 30 segundos y marca la diferencia.
                        </p>
                        <div className="rating-stars" aria-hidden="true">
                            <Star size={18} fill="currentColor" />
                            <Star size={18} fill="currentColor" />
                            <Star size={18} fill="currentColor" />
                            <Star size={18} fill="currentColor" />
                            <Star size={18} fill="currentColor" />
                        </div>
                    </div>
                    <div className="rating-actions">
                        <a
                            href={`${PLAY_STORE_URL}&showAllReviews=true`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-rate btn-rate-play"
                            onClick={() => trackEvent("rate_app_click", { store: "google_play" })}
                        >
                            Valorar en Google Play
                        </a>
                        <a
                            href={`${APP_STORE_URL}?action=write-review`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-rate btn-rate-apple"
                            onClick={() => trackEvent("rate_app_click", { store: "app_store" })}
                        >
                            Valorar en App Store
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
