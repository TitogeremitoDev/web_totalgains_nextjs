"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle, XCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Status: 'idle', 'sending', 'success', 'error'
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Verify email format
        if (!formData.email.includes('@')) {
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

        const SERVICE_ID = 'service_99ejjjc';
        const TEMPLATE_ID = 'template_hf246pd';
        const USER_ID = 'osz7_oiLJCzwqVzJu';

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'ger3dman@gmail.com'
            },
            USER_ID
        )
            .then((response) => {
                console.log('Email enviado correctamente!', response.status);
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch((err) => {
                console.error('Error al enviar:', err);
                setStatus('error');
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="section-header text-left">
                            <h2 className="gradient-text">Hablemos</h2>
                            <p>¿Tienes alguna duda o sugerencia? Estamos aquí para ayudarte en tu transformación.</p>
                        </div>

                        <div className="info-cards">
                            <div className="info-item">
                                <Mail size={24} className="info-icon" />
                                <div>
                                    <h3>Email</h3>
                                    <p>ger3dman@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Phone size={24} className="info-icon" />
                                <div>
                                    <h3>Redes Sociales</h3>
                                    <div className="social-links">
                                        <a href="https://www.instagram.com/totalgainsfitness/" target="_blank" rel="noopener noreferrer" className="social-link instagram">Instagram</a>
                                        <a href="https://www.tiktok.com/@totalgainsapp" target="_blank" rel="noopener noreferrer" className="social-link tiktok">TikTok</a>
                                        <a href="https://www.youtube.com/channel/UCOJehcX1G6jABjONKmXCmbQ" target="_blank" rel="noopener noreferrer" className="social-link youtube">YouTube</a>
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

                            <button
                                type="submit"
                                className={`btn btn-primary btn-block ${status === 'sending' ? 'loading' : ''}`}
                                disabled={status === 'sending' || status === 'success'}
                            >
                                {status === 'sending' ? 'Enviando...' :
                                    status === 'success' ? '¡Mensaje Enviado!' :
                                        'Enviar Mensaje'}
                            </button>

                            {status === 'success' && (
                                <div className="form-message success animate-fadeIn">
                                    <CheckCircle size={18} className="inline mr-2 text-green-500" /> Tu mensaje ha sido enviado correctamente. Te responderemos pronto a {formData.email}.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-message error animate-fadeIn">
                                    <XCircle size={18} className="inline mr-2 text-red-500" /> Hubo un error al enviar el mensaje. Por favor intenta de nuevo o escribe directamente a ger3dman@gmail.com
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
