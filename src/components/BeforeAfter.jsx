"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    X,
    Check,
    FileSpreadsheet,
    MessageSquare,
    AlertTriangle,
    Clock,
    LayoutDashboard,
    Zap,
    Bell,
    CreditCard,
    ArrowRight,
    Rocket,
} from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import './BeforeAfter.css';

const beforeItems = [
    { icon: <FileSpreadsheet size={16} />, text: 'Excel por cliente, sin historial unificado' },
    { icon: <MessageSquare size={16} />, text: 'WhatsApp para rutinas, pagos y dudas mezclados' },
    { icon: <AlertTriangle size={16} />, text: 'Perseguir pagos por WhatsApp cada mes' },
    { icon: <Clock size={16} />, text: '8–10h semanales en tareas administrativas' },
    { icon: <FileSpreadsheet size={16} />, text: 'Dietas generadas a mano en plantillas de Word' },
    { icon: <MessageSquare size={16} />, text: 'Seguimiento por foto en chat sin estructura' },
];

const afterItems = [
    { icon: <LayoutDashboard size={16} />, text: 'Dashboard unificado: clientes, métricas y rutinas' },
    { icon: <Zap size={16} />, text: 'App propia de marca blanca para tus atletas' },
    { icon: <CreditCard size={16} />, text: 'Registro de pagos centralizado por cliente' },
    { icon: <Clock size={16} />, text: 'Recuperas +10h semanales para entrenar y crecer' },
    { icon: <Zap size={16} />, text: 'Dietas estructuradas con plantillas profesionales' },
    { icon: <Bell size={16} />, text: 'Seguimiento automático con notificaciones push' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
    }),
};

const BeforeAfter = () => (
    <section className="before-after" id="before-after">
        <div className="ba-bg-glow" />

        <div className="container">
            {/* Header */}
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="section-badge">
                    <ArrowRight size={14} />
                    La diferencia es brutal
                </div>
                <h2 className="gradient-text">¿Cómo gestionas tus asesorías hoy?</h2>
                <p className="section-subtitle">
                    Cada entrenador que se pasa a TotalGains no vuelve al Excel.
                </p>
            </motion.div>

            {/* Comparison grid */}
            <div className="ba-grid">
                {/* ANTES */}
                <motion.div
                    className="ba-card ba-card--before"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="ba-card-header">
                        <span className="ba-badge ba-badge--before">
                            <X size={14} strokeWidth={3} /> Antes
                        </span>
                        <h3>Excel + WhatsApp</h3>
                        <p>El método tradicional que roba tu tiempo</p>
                    </div>
                    <ul className="ba-list">
                        {beforeItems.map((item, i) => (
                            <motion.li
                                key={i}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="ba-list-item ba-list-item--before"
                            >
                                <span className="ba-item-icon ba-item-icon--before">{item.icon}</span>
                                <span>{item.text}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* VS pill — desktop only */}
                <div className="ba-vs" aria-hidden="true">
                    <span>VS</span>
                </div>

                {/* DESPUÉS */}
                <motion.div
                    className="ba-card ba-card--after"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="ba-card-header">
                        <span className="ba-badge ba-badge--after">
                            <Check size={14} strokeWidth={3} /> Con TotalGains
                        </span>
                        <h3>Todo en una plataforma</h3>
                        <p>Automatizado, profesional y escalable</p>
                    </div>
                    <ul className="ba-list">
                        {afterItems.map((item, i) => (
                            <motion.li
                                key={i}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="ba-list-item ba-list-item--after"
                            >
                                <span className="ba-item-icon ba-item-icon--after">{item.icon}</span>
                                <span>{item.text}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* CTA */}
            <motion.div
                className="ba-cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <a
                    href="/onboarding"
                    className="btn btn-gold btn-lg"
                    onClick={() => trackEvent('cta_click', { cta_text: 'Empieza gratis — sin Excel', cta_location: 'before_after' })}
                >
                    <Rocket size={20} />
                    Empieza gratis — olvida el Excel
                </a>
                <p className="ba-cta-note">14 días gratis · Sin tarjeta · Cancela cuando quieras</p>
            </motion.div>
        </div>
    </section>
);

export default BeforeAfter;
