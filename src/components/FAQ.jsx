"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HOME_FAQS } from '@/data/homeFaqs';
import './FAQ.css';

// Las preguntas viven en src/data/homeFaqs.js — fuente única compartida con
// el FAQPage schema de page.js. Aquí solo se renderizan.

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
                    {HOME_FAQS.map((faq, index) => {
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
