import React from 'react';
import { Download } from 'lucide-react';
import './LeadMagnet.css';

export default function LeadMagnet() {
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

                <form className="lead-magnet-form">
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        required
                        className="lead-magnet-input"
                    />
                    <button type="button" onClick={() => alert("¡Guía enviada! Revisa tu bandeja de entrada.")} className="btn btn-primary lead-magnet-btn">
                        <Download size={18} /> Enviar Guía
                    </button>
                </form>
                <p className="lead-magnet-microcopy">0% Spam. Te enviaremos estrategias de negocio 1 vez por mes.</p>
            </div>
        </section>
    );
}
