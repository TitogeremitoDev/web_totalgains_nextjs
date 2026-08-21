"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FAQ.css';

/* ─────────────────────────────────────────────
   DATA — sincronizado con el FAQPage schema de page.js
   ───────────────────────────────────────────── */
const faqs = [
    // ⚠️ Gemela del FAQPage schema en src/app/page.js: si tocas una, toca la otra.
    {
        question: '¿El plan gratuito de TotalGains es una prueba o es permanente?',
        answer: 'Es permanente. TotalGains tiene un plan gratuito de 0 €/mes para hasta 5 atletas activos, sin límite de tiempo y sin tarjeta de crédito. No es un periodo de prueba de 14 días: la prueba de 14 días es del plan Pro y es opcional. Los planes de pago empiezan en 29,90 €/mes con IVA incluido.'
    },
    {
        question: '¿Qué es TotalGains y cómo funciona como software para entrenadores personales?',
        answer: 'TotalGains es una plataforma de gestión deportiva todo-en-uno. Centraliza la gestión de atletas, creación de rutinas con IA, planes nutricionales, seguimiento de progreso y recordatorios de renovación al cliente. Funciona en Android, iOS y Web, y cada entrenador obtiene su propia app de fitness personalizada para sus clientes.'
    },
    // ⚠️ Gemela de la respuesta del FAQPage schema en src/app/page.js:
    // si tocas una, toca la otra.
    {
        question: '¿Cuánto cuesta el software de entrenamiento TotalGains?',
        answer: 'Puedes empezar con el Plan Gratuito de TotalGains: hasta 5 atletas de por vida, sin tarjeta y sin caducidad. Es el plan gratuito más generoso del mercado hispano (TrainerStudio ofrece 3, Trainerize Basic solo 1, Harbiz no tiene plan free permanente y cobra 22,99 €/mes con IVA por el mismo tramo de 5 clientes). A partir de ahí, los planes de pago van desde 29,90€/mes (IVA incluido) y todos incluyen exactamente las mismas funciones: IA ilimitada para dietas y rutinas, app marca blanca y base de +240.000 alimentos. Lo único que cambia entre planes es el número de atletas activos (25, 100 o ilimitados) y el nivel de soporte.'
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

    const toggle = (index) => {
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
                    <h2 className="gradient-text">Preguntas frecuentes sobre TotalGains</h2>
                    <p>Todo lo que necesitas saber sobre nuestro software para entrenadores</p>
                </motion.div>

                <div className="faq-container">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className={`faq-item glass ${isOpen ? 'active' : ''}`}
                            >
                                {/*
                                  Usamos <button> para accesibilidad: aria-expanded y
                                  aria-controls comunican el estado al lector de pantalla.
                                */}
                                <button
                                    className="faq-question"
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <h3 className="faq-question-text">{faq.question}</h3>
                                    <span className="faq-icon" aria-hidden="true">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                {/*
                                  La respuesta SIEMPRE está en el DOM — Google la indexa.
                                  CSS controla la visibilidad: max-height 0 → auto con transition.
                                  aria-hidden oculta el contenido colapsado a lectores de pantalla.
                                */}
                                <div
                                    id={`faq-answer-${index}`}
                                    className={`faq-answer ${isOpen ? 'faq-answer--open' : ''}`}
                                    aria-hidden={!isOpen}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
