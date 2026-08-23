"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Mail, Phone, XCircle } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Status: 'idle', 'sending', 'error' — no hay estado 'success': al enviar
    // con éxito se navega a /gracias/, que es donde se mide la conversión.
    const [status, setStatus] = useState('idle');
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Sin consentimiento no se envía nada (el `required` del checkbox ya lo
        // bloquea en el navegador; esto cubre el submit programático).
        if (!privacyAccepted) return;

        setStatus('sending');

        // Verify email format with a robust regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('error');
            return;
        }

        // =============================================
        // CONFIGURACIÓN EMAILJS - PON TUS CLAVES AQUÍ
        // =============================================
        // 1. Ve a https://www.emailjs.com/ y crea cuenta gratis
        // 2. Añade un servicio de email (Gmail, etc.)
        // 3. Crea una plantilla con variables: from_name, from_email, subject, message
        // 4. Reemplaza los valores de abajo con los tuyos:

        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'soporte@totalgains.es'
            },
            USER_ID
        )
            .then(() => {
                // Si el usuario rechazó las cookies, trackEvent es no-op silencioso
                // (el consentimiento manda). La conversión de verdad la mide
                // /gracias/: page_view con URL propia + lead_confirmed con origen.
                trackEvent('lead_submit', {
                    form_name: 'contacto_home',
                    form_subject: formData.subject,
                });
                // gtag envía por sendBeacon: el evento sobrevive a la navegación.
                router.push('/gracias/?de=contacto');
            })
            .catch((err) => {
                trackEvent('lead_submit_error', { form_name: 'contacto_home' });
                setStatus('error');
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="section-header text-left">
                            <h2 className="gradient-text">Contacta con TotalGains</h2>
                            {/* Compromiso concreto, no "estamos aquí para ayudarte": la misma
                                promesa de <24h que ya publicamos en /demo/*, /para-gimnasios/,
                                la FAQ y sobre-nosotros. Era el único formulario sin ella. */}
                            <p>¿Tienes alguna duda sobre nuestro software de gestión deportiva? Te responde una persona real, en español, en menos de 24 horas.</p>
                        </div>

                        <div className="info-cards">
                            <div className="info-card">
                                <div className="info-icon">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>soporte@totalgains.es</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3>Redes Sociales</h3>
                                    <div className="social-links">
                                        <a href="https://www.instagram.com/totalgainsfitness/" target="_blank" rel="noopener noreferrer" className="social-link instagram">Instagram</a>
                                        <a href="https://www.tiktok.com/@totalgainsfitness" target="_blank" rel="noopener noreferrer" className="social-link tiktok">TikTok</a>
                                        <a href="https://www.youtube.com/@totalgainsfitness" target="_blank" rel="noopener noreferrer" className="social-link youtube">YouTube</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper glass">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Asunto</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Selecciona un motivo</option>
                                    <option value="Soporte Técnico">Soporte Técnico</option>
                                    <option value="Facturación">Facturación</option>
                                    <option value="Entrenadores">Para Entrenadores</option>
                                    <option value="Colaboración">Colaboraciones</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="¿En qué podemos ayudarte?"
                                    rows="5"
                                ></textarea>
                            </div>

                            {/* Consentimiento RGPD (art. 6.1.a y 13): obligatorio antes de enviar */}
                            <div className="form-consent">
                                <input
                                    type="checkbox"
                                    id="privacy-consent"
                                    name="privacyConsent"
                                    checked={privacyAccepted}
                                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                    required
                                />
                                <label htmlFor="privacy-consent">
                                    He leído y acepto la{' '}
                                    <Link href="/privacy/" target="_blank" rel="noopener noreferrer">
                                        Política de Privacidad
                                    </Link>
                                    . Responsable: Germán Martínez Calvente (NIF 77137460Z). Finalidad:
                                    responder a tu consulta. Legitimación: tu consentimiento. El envío
                                    se procesa a través de EmailJS como encargado de tratamiento; no se
                                    ceden datos a terceros para sus propios fines. Puedes ejercer tus
                                    derechos de acceso, rectificación y supresión en soporte@totalgains.es.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary btn-block ${status === 'sending' ? 'loading' : ''}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                            </button>

                            {status === 'error' && (
                                <div className="form-message error animate-fadeIn">
                                    <XCircle size={18} className="inline mr-2 text-red-500" /> Hubo un error al enviar el mensaje. Por favor intenta de nuevo o escribe directamente a soporte@totalgains.es
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
