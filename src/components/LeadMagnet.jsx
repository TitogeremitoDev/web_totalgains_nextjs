"use client";

import React, { useState } from 'react';
import { Download, CheckCircle } from 'lucide-react';
import './LeadMagnet.css';

export default function LeadMagnet() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000); // Volver al estado normal tras 5 segundos
        }
    };

    return (
        <section className="lead-magnet-section animate-on-scroll">
            <div className="container lead-magnet-container glass">
                <span className="lead-magnet-badge">Recurso Gratuito B2B</span>
                <h2 className="lead-magnet-title">
                    ¿Quieres saber por qué los entrenadores que facturan +10.000€ no usan Excel ni WhatsApp?
                </h2>
                <p className="lead-magnet-subtitle">
                    Descarga nuestra <strong className="highlight">Guía de Retención B2B 2026</strong>. Aprenderás los 3 sistemas automatizados que aumentarán tu facturación sin trabajar más horas.
                </p>

                {isSubmitted ? (
                    <div className="lead-magnet-form" style={{ justifyContent: 'center', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        <p className="flex items-center gap-2" style={{ color: '#10b981', margin: 0, fontWeight: 600 }}>
                            <CheckCircle size={20} /> ¡Guía enviada! Revisa tu bandeja de entrada.
                        </p>
                    </div>
                ) : (
                    <form className="lead-magnet-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="lead-magnet-input"
                        />
                        <button type="submit" className="btn btn-primary lead-magnet-btn">
                            <Download size={18} /> Enviar Guía
                        </button>
                    </form>
                )}
                <p className="lead-magnet-microcopy">0% Spam. Te enviaremos estrategias de negocio 1 vez por mes.</p>
            </div>
        </section>
    );
}
