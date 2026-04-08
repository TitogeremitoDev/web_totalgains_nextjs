"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const faqs = [
    {
        question: '¿Qué es TotalGains y cómo funciona como software para entrenadores personales?',
        answer: 'TotalGains es una plataforma de gestión deportiva todo-en-uno. Centraliza la gestión de atletas, creación de rutinas con IA, planes nutricionales, seguimiento de progreso y cobros automáticos. Funciona en Android, iOS y Web, y cada entrenador obtiene su propia app de fitness personalizada para sus clientes.'
    },
    {
        question: '¿Cuánto cuesta el software de entrenamiento TotalGains?',
        answer: 'Ofrecemos planes desde 29,90€/mes (IVA incluido) con todas las herramientas profesionales. Puedes empezar con un Plan Gratuito de por vida para hasta 3 atletas, sin necesidad de tarjeta de crédito. Todos los planes incluyen IA ilimitada para dietas y rutinas.'
    },
    {
        question: '¿Por qué TotalGains es la mejor alternativa SaaS de fitness del mercado?',
        answer: 'A diferencia de Trainerize, Harbiz o MyPT Hub, TotalGains ofrece soporte nativo en español, una base de más de 240.000 alimentos, creador de rutinas con inteligencia artificial, sistema anti-abandono de clientes y tu propia app de marca blanca — todo sin comisiones ocultas ni penalización por volumen de atletas.'
    },
    {
        question: '¿Puedo crear rutinas de entrenamiento y dietas con la IA de TotalGains?',
        answer: 'Sí. Nuestro creador de rutinas para entrenadores genera periodizaciones completas en segundos. El generador de dietas utiliza una base de +240.000 alimentos validados y ajusta macros y calorías automáticamente según el perfil del atleta.'
    },
    {
        question: '¿Puedo cancelar mi suscripción en cualquier momento?',
        answer: '¡Por supuesto! No hay compromiso de permanencia en nuestra plataforma fitness. Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu perfil, sin penalizaciones.'
    },
    {
        question: '¿Mis datos y los de mis clientes están seguros en TotalGains?',
        answer: 'Absolutamente. Utilizamos encriptación de nivel bancario, servidores globales con alta disponibilidad y cumplimos con el RGPD europeo. Los datos personales de entrenadores y atletas están completamente protegidos.'
    },
    {
        question: '¿En qué dispositivos puedo usar el software de gestión deportiva?',
        answer: 'TotalGains está disponible en Android (Google Play), iOS (App Store) y como aplicación web accesible desde cualquier navegador. Tus atletas también acceden desde su propia app móvil personalizada con tu marca.'
    },
    {
        question: '¿Cómo contacto con el soporte técnico de TotalGains?',
        answer: 'Puedes contactarnos a través del formulario en esta página, por email a soporte@totalgains.es o desde la app. Los planes Pro y Unlimited tienen soporte prioritario con respuesta en menos de 24 horas.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Generate FAQPage JSON-LD schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="faq" id="faq">
            {/* FAQPage JSON-LD — Invisible for users, gold for Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="gradient-text">Preguntas frecuentes sobre TotalGains</h2>
                    <p>Todo lo que necesitas saber sobre nuestro software para entrenadores</p>
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
