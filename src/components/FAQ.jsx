"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const faqs = [
    {
        question: '¿Es gratis usar TotalGains?',
        answer: 'TotalGains es una plataforma premium diseñada para entrenadores. Ofrecemos planes desde 29,90€/mes con todas las herramientas profesionales incluidas.'
    },
    {
        question: '¿Cómo funciona el modo entrenador?',
        answer: 'El modo entrenador te permite gestionar clientes de forma eficiente. Ofrecemos planes según el volumen de tu negocio: hasta 25 atletas (Starter), 100 atletas (Pro), o atletas ilimitados (Unlimited).'
    },
    {
        question: '¿Puedo cancelar mi suscripción en cualquier momento?',
        answer: '¡Por supuesto! No hay compromiso de permanencia. Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu perfil.'
    },
    {
        question: '¿Mis datos están seguros?',
        answer: 'Absolutamente. Utilizamos encriptación de nivel bancario y cumplimos con el RGPD. Tus datos personales y de entrenamiento están completamente protegidos.'
    },
    {
        question: '¿En qué plataformas está disponible TotalGains?',
        answer: 'Disponible en Andrid, iOS y Web'
    },
    {
        question: '¿Cómo contacto con soporte?',
        answer: 'Puedes contactarnos a través del formulario de contacto en esta página, por email a ger3dman@gmail.com, o directamente desde la app en el apartado de ayuda.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="gradient-text">Preguntas Frecuentes</h2>
                    <p>Encuentra respuestas a las dudas más comunes</p>
                </motion.div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`faq-item glass ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h4>{faq.question}</h4>
                                <span className="faq-icon">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="faq-answer-animated"
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
