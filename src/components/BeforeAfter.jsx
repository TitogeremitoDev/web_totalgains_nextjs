"use client";

import React from 'react';
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
    { icon: <Zap size={16} />, text: 'Tu marca en la app de tus atletas' },
    { icon: <CreditCard size={16} />, text: 'Registro de pagos centralizado por cliente' },
    { icon: <Clock size={16} />, text: 'Recuperas +10h semanales para entrenar y crecer' },
    { icon: <Zap size={16} />, text: 'Dietas estructuradas con plantillas profesionales' },
    { icon: <Bell size={16} />, text: 'Seguimiento automático con notificaciones push' },
];

const BeforeAfter = () => (
    <section className="before-after" id="before-after">
        <div className="ba-bg-glow" />

        <div className="container">
            {/* Header */}
            <div className="aparece section-header">
                <div className="section-badge">
                    <ArrowRight size={14} />
                    La diferencia es brutal
                </div>
                <h2 className="gradient-text">¿Cómo gestionas tus asesorías hoy?</h2>
                <p className="section-subtitle">
                    Cada entrenador que se pasa a TotalGains no vuelve al Excel.
                </p>
            </div>

            {/* Comparison grid */}
            <div className="ba-grid">
                {/* ANTES */}
                <div className="aparece ba-card ba-card--before">
                    <div className="ba-card-header">
                        <span className="ba-badge ba-badge--before">
                            <X size={14} strokeWidth={3} /> Antes
                        </span>
                        <h3>Excel + WhatsApp</h3>
                        <p>El método tradicional que roba tu tiempo</p>
                    </div>
                    <ul className="ba-list">
                        {beforeItems.map((item, i) => (
                            <li key={i} className="aparece ba-list-item ba-list-item--before">
                                <span className="ba-item-icon ba-item-icon--before">{item.icon}</span>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* VS pill — desktop only */}
                <div className="ba-vs" aria-hidden="true">
                    <span>VS</span>
                </div>

                {/* DESPUÉS */}
                <div className="aparece ba-card ba-card--after">
                    <div className="ba-card-header">
                        <span className="ba-badge ba-badge--after">
                            <Check size={14} strokeWidth={3} /> Con TotalGains
                        </span>
                        <h3>Todo en una plataforma</h3>
                        <p>Automatizado, profesional y escalable</p>
                    </div>
                    <ul className="ba-list">
                        {afterItems.map((item, i) => (
                            <li key={i} className="aparece ba-list-item ba-list-item--after">
                                <span className="ba-item-icon ba-item-icon--after">{item.icon}</span>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA */}
            <div className="aparece ba-cta">
                <a
                    href="/onboarding/"
                    className="btn btn-gold btn-lg"
                    onClick={() => trackEvent('cta_click', { cta_text: 'Empieza gratis — sin Excel', cta_location: 'before_after' })}
                >
                    <Rocket size={20} />
                    Empieza gratis — olvida el Excel
                </a>
                <p className="ba-cta-note">Gratis con 5 atletas · De por vida · Sin tarjeta</p>
            </div>
        </div>
    </section>
);

export default BeforeAfter;
