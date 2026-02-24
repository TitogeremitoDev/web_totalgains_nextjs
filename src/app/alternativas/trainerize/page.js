"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import './Alternativas.css';

export default function AlternativaCompetidores() {
    const [competitor, setCompetitor] = useState('trainerize');

    // Datos maestros B2B generados para aniquilar la retención de la competencia
    const competitors = {
        trainerize: {
            name: "Trainerize",
            painPoint: "Si sientes que Trainerize es lento, está anticuado o no entiende el mercado hispanohablante.",
            features: [
                { feature: "Soporte e Idioma", tg: "VIP 24h en Español nativo", bg: "Lento y en Inglés" },
                { feature: "Velocidad UX/UI", tg: "Next.js (Instantánea)", bg: "Sobrecargada y pesada" },
                { feature: "Generación de Atletas", tg: "Integración de IA Rápida", bg: "Alta fricción manual" },
                { feature: "Dietas y Base", tg: "+240.000 Alimentos / IA", bg: "Limitada" },
                { feature: "App Marca Blanca", tg: "Colores y Logos generados (1 Clic)", bg: "Básico o requiere plan caro" },
                { feature: "Sistema Anti-Abandono", tg: "Predicción Automática B2B", bg: "No tiene" }
            ]
        },
        mypthub: {
            name: "MyPT Hub",
            painPoint: "Si MyPT Hub te parece un laberinto confuso tanto para ti como para tus atletas a la hora de entrenar.",
            features: [
                { feature: "Soporte e Idioma", tg: "VIP 24h en Español nativo", bg: "Lento o genérico" },
                { feature: "Velocidad UX/UI", tg: "Intuitiva y veloz (Apple Style)", bg: "Curva de aprendizaje gigante" },
                { feature: "Generación de Atletas", tg: "IA Integrada (Milisegundos)", bg: "Plantillas rígidas" },
                { feature: "Dietas y Base", tg: "Generador IA Autónomo", bg: "Depende de plugins o MyFitnessPal" },
                { feature: "App Marca Blanca", tg: "Branding Inteligente (Ecosistema)", bg: "Branding básico" },
                { feature: "Sistema Anti-Abandono", tg: "Bloqueos y Predicción Automatizada", bg: "Inexistente" }
            ]
        },
        harbiz: {
            name: "Harbiz",
            painPoint: "Si sientes que las tarifas de Harbiz por tramos de clientes te castigan cuando consigues escalar.",
            features: [
                { feature: "Soporte e Idioma", tg: "VIP en Español + Desarrolladores Directos", bg: "Soporte Normal" },
                { feature: "Precios y Escalabilidad", tg: "Planes Claros B2B sin sustos", bg: "Tarifas ocultas o penalización por volumen" },
                { feature: "Desarrollo a Medida", tg: "App Personalizada sin costes extra", bg: "App B2B propia cuesta miles al mes" },
                { feature: "Creador Multimodal", tg: "Rutinas con IA Dinámicas", bg: "Constructor Clásico" },
                { feature: "Analítica ROI", tg: "Gráficas de progresión de Ticket Medio", bg: "Dashboards Estándar" },
                { feature: "Sistema Anti-Abandono", tg: "Inteligencia para detectar inactividad", bg: "Avisos básicos" }
            ]
        },
        dudapp: {
            name: "Dudapp",
            painPoint: "Si necesitas cruzar la línea y pasar de un excel bonito a un Software verdaderamente B2B para monetizar.",
            features: [
                { feature: "Procesamiento Nutricional", tg: "Generador de macros asistido por IA", bg: "Manual y requiere integraciones" },
                { feature: "Estabilidad en Volumen", tg: "Servidores Globales (Infinito)", bg: "Caída de rendimiento con +50 clientes" },
                { feature: "Pagos Online Activos", tg: "Sistema Financiero Automático", bg: "Solo gestión superficial" },
                { feature: "Experiencia Atleta", tg: "Gamificación y Tracking 360", bg: "Interfaz de solo-lectura" },
                { feature: "App Marca Blanca", tg: "Tu propia App nativa para el cliente", bg: "La App de ellos, no la tuya" },
                { feature: "Onboarding de Clientes", tg: "Migración de 0 Fricción Garantizada", bg: "Te lo tienes que hacer tú" }
            ]
        }
    };

    const currentData = competitors[competitor];

    const faqs = [
        { question: `¿Perderé los datos de mis clientes al migrar desde ${currentData.name}?`, answer: "En absoluto. Nuestro equipo (y nuestras herramientas de importación) se encargan de subir a tus atletas actuales sin que ellos sientan fricción." },
        { question: "¿Cobráis comisiones extra por mis ventas?", answer: "Cero comisiones ocultas. Tú usas tu propia cuenta de Stripe o cobras por tu cuenta; nosotros solo somos tu tecnología SaaS B2B." },
        { question: `Mis clientes están acostumbrados a ${currentData.name}...`, answer: "El 95% de los atletas prefieren nuestra interfaz más moderna, rápida y gamificada. El periodo de adaptación suele ser de menos de 48 horas." }
    ];

    return (
        <main className="alternativas-page">
            <div className="container alternativas-container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="alternativas-header"
                >
                    <span className="badge warning-badge">⚠️ Atención Entrenadores Top</span>
                    <h1 className="alternativas-title gradient-text">
                        Encuentra La Fuga de tu Negocio
                    </h1>

                    {/* El súper selector B2B - El centro de la Magia */}
                    <div className="competitor-selector glass">
                        <span>Actualmente estoy utilizando: </span>
                        <div className="selector-wrapper">
                            <select
                                value={competitor}
                                onChange={(e) => setCompetitor(e.target.value)}
                                className="styled-select text-accent"
                            >
                                {Object.entries(competitors).map(([key, data]) => (
                                    <option key={key} value={key}>{data.name}</option>
                                ))}
                            </select>
                            <span className="selector-icon">⬇</span>
                        </div>
                    </div>

                    <p className="alternativas-subtitle mt-4">
                        {currentData.painPoint} TotalGains es tu ecosistema definitivo.
                    </p>
                </motion.div>

                {/* Tabla Comparativa Premium */}
                <motion.div
                    key={competitor} // Forza el re-render para la animación
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="comparison-table-container glass"
                >
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Funcionalidad Clave B2B</th>
                                <th className="tg-column">
                                    <span className="tg-logo-table">TotalGains</span>
                                </th>
                                <th className="tr-column">{currentData.name}</th>
                            </tr>
                        </thead>
                        <AnimatePresence mode="popLayout">
                            <tbody>
                                {currentData.features.map((item, index) => (
                                    <motion.tr
                                        key={`${competitor}-${index}`}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <td className="feature-name">{item.feature}</td>
                                        <td className="tg-feature">✅ {item.tg}</td>
                                        <td className="tr-feature">❌ {item.bg}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </AnimatePresence>
                    </table>
                </motion.div>

                {/* Bloque de Migración */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="migration-block glass"
                >
                    <span className="migration-icon">✈️</span>
                    <h3>Migración "Sin Dolor" Garantizada desde {currentData.name}</h3>
                    <p>Sabemos que la pereza de mover a 50 clientes es real y ellos apuestan por tu pereza para seguir cobrándote. Pásate hoy y nuestro equipo prepara tu entorno para trabajar mañana.</p>
                </motion.div>

                {/* Preguntas Frecuentes específicas editadas dinámicamente */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="alternativas-faq"
                >
                    <h2>Dudas Frecuentes sobre el Cambio</h2>
                    <div className="faq-grid">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="faq-card glass">
                                <h4>{faq.question}</h4>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-wrapper"
                >
                    <Link href="/onboarding" className="btn btn-primary btn-lg cta-migrar">
                        Quiero migrar mis atletas gratis (En 5 Min) 🚀
                    </Link>
                    <p className="microcopy-secure mt-2">Atención prioritaria para cuentas que huyen de {currentData.name}.</p>
                </motion.div>
            </div>
        </main>
    );
}
