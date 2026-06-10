"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import TrustpilotBadge from '@/components/TrustpilotBadge';
import '@/app/alternativas/trainerize/Alternativas.css';

export default function AlternativaCompetidoresContent({ defaultCompetitor = 'trainerize' }) {
    const [competitor, setCompetitor] = useState(defaultCompetitor);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Comparativas basadas en datos verificados en las webs oficiales de cada competidor
    // Última verificación: 24 de abril de 2026
    const competitors = {
        trainerize: {
            name: "Trainerize",
            h1: "Mejor Alternativa a Trainerize para Entrenadores Personales",
            painPoint: "Si prefieres un software diseñado para el mercado hispanohablante, en tu idioma y con soporte en tu zona horaria.",
            features: [
                { feature: "Idioma y soporte", tg: "Español nativo, soporte en menos de 24h", bg: "Inglés, soporte con franjas horarias EE.UU./Canadá" },
                { feature: "IA integrada en plan base", tg: "Rutinas y dietas con IA incluidas en todos los planes", bg: "Advanced Nutrition como add-on ($45/mes)" },
                { feature: "Base de alimentos propia", tg: "Base personalizable con +240.000 alimentos", bg: "Integración con MyFitnessPal" },
                { feature: "App marca blanca", tg: "Incluida en plan Pro (89,90€)", bg: "Requiere tiers altos + $169 pago único + $99/año" },
                { feature: "Modelo de precios", tg: "Plan plano por tramos — predecible", bg: "Facturación en USD con add-ons acumulables" },
                { feature: "Migración asistida", tg: "Incluida en todos los planes, en español", bg: "No ofrecida" }
            ]
        },
        mypthub: {
            name: "MyPT Hub",
            h1: "Mejor Alternativa a MyPT Hub para Entrenadores Personales",
            painPoint: "Si prefieres una plataforma en español con IA y marca blanca incluidas, sin add-ons acumulables.",
            features: [
                { feature: "Idioma y soporte", tg: "Español nativo, soporte en menos de 24h", bg: "Inglés, soporte en franjas UK/AU" },
                { feature: "IA integrada en plan base", tg: "Rutinas y dietas con IA incluidas", bg: "Check-Ins AI como add-on (17€/mes)" },
                { feature: "App marca blanca", tg: "Incluida en plan Pro (89,90€)", bg: "Add-on de 145€/mes adicionales" },
                { feature: "Precio con marca blanca + IA", tg: "89,90€/mes todo incluido", bg: "~221€/mes (Premium 59€ + White Label 145€ + AI 17€)" },
                { feature: "Módulo resistencia/cardio", tg: "Integrado con fuerza — carrera, bici, natación", bg: "Enfoque principal en fuerza" },
                { feature: "Migración asistida", tg: "Incluida en todos los planes, en español", bg: "No ofrecida en español" }
            ]
        },
        harbiz: {
            name: "Harbiz",
            h1: "Mejor Alternativa a Harbiz para Entrenadores Personales",
            painPoint: "Si quieres IA y marca blanca incluidas en el plan base, sin add-ons acumulables, y con capacidad para más de 50 clientes.",
            features: [
                { feature: "IA integrada en plan base", tg: "Rutinas y dietas con IA incluidas", bg: "Nutri AI como add-on (14,99€/mes)" },
                { feature: "App marca blanca", tg: "Incluida en plan Pro (89,90€)", bg: "Add-on Personaliza tu app (30,24€/mes con IVA)" },
                { feature: "Precio con marca blanca + IA", tg: "89,90€/mes todo incluido", bg: "~192€/mes (Pro 50: 143,99€ + Personaliza: 30,24€ + Nutri AI: 18,14€, con IVA)" },
                { feature: "Límite de clientes plan medio", tg: "Hasta 100 clientes en plan Pro", bg: "Hasta 50 clientes en plan Pro" },
                { feature: "Base de alimentos propia", tg: "Base personalizable con +240.000 alimentos", bg: "Base estándar" },
                { feature: "Migración asistida", tg: "Incluida por soporte humano en español", bg: "Onboarding disponible" }
            ]
        },
        dudapp: {
            name: "Dudapp",
            h1: "Mejor Alternativa a Dudapp para Entrenadores Personales",
            painPoint: "Si necesitas un software más completo con IA integrada, app marca blanca y pagos recurrentes automatizados.",
            features: [
                { feature: "IA integrada", tg: "Rutinas y dietas generadas con IA", bg: "IA no promocionada en su oferta pública" },
                { feature: "Base de alimentos", tg: "Base personalizable con +240.000 alimentos", bg: "Base estándar" },
                { feature: "Pagos recurrentes Stripe", tg: "Integración nativa, sin comisiones extra", bg: "Gestión de pagos básica" },
                { feature: "App marca blanca", tg: "App con tu logo y colores (plan Pro)", bg: "App con branding del proveedor" },
                { feature: "Módulo resistencia/cardio", tg: "Integrado con fuerza — carrera, bici, natación", bg: "Enfoque principal en fuerza" },
                { feature: "Migración asistida", tg: "Incluida por soporte humano en español", bg: "Onboarding disponible" }
            ]
        },
        truecoach: {
            name: "TrueCoach",
            h1: "Mejor Alternativa a TrueCoach para Entrenadores Personales",
            painPoint: "Si prefieres una plataforma en español con IA integrada, diseñada para el mercado hispanohablante.",
            features: [
                { feature: "Idioma y soporte", tg: "Español nativo, soporte en menos de 24h", bg: "Solo inglés" },
                { feature: "IA integrada", tg: "Rutinas y dietas generadas con IA", bg: "IA no incluida según su web oficial" },
                { feature: "Nutrición", tg: "Base propia de +240.000 alimentos + generador IA", bg: "Integración con MyFitnessPal (en inglés)" },
                { feature: "App marca blanca", tg: "Incluida en plan Pro (89,90€)", bg: "Custom branding disponible en Standard/Pro" },
                { feature: "Precio de entrada", tg: "Desde 29,90€/mes (25 clientes)", bg: "Desde $26,34/mes (5 clientes)" },
                { feature: "Migración asistida", tg: "Incluida por soporte humano en español", bg: "No ofrecida en español" }
            ]
        },
        ptminder: {
            name: "PTminder",
            h1: "Mejor Alternativa a PTminder para Entrenadores Personales",
            painPoint: "Si prefieres un software en español con IA integrada y app marca blanca incluida en el plan principal.",
            features: [
                { feature: "Idioma y soporte", tg: "Español nativo + equipo de desarrollo directo", bg: "Inglés, soporte por chat" },
                { feature: "IA integrada", tg: "Rutinas y dietas generadas con IA", bg: "IA no promocionada en su oferta pública" },
                { feature: "App marca blanca", tg: "Incluida en plan Pro (89,90€)", bg: "Add-on de $40/mes adicionales" },
                { feature: "Base de alimentos", tg: "Base propia de +240.000 alimentos + generador IA", bg: "Planificador de nutrición sin base integrada específica" },
                { feature: "Modelo de precios", tg: "Plan plano por tramos en EUR", bg: "Planes por tramos en USD con add-ons" },
                { feature: "Migración asistida", tg: "Incluida por soporte humano en español", bg: "No ofrecida en español" }
            ]
        },
        dudyfit: {
            name: "Dudyfit",
            h1: "Mejor Alternativa a Dudyfit para Entrenadores Personales",
            painPoint: "Si buscas IA avanzada integrada, cobros automáticos con Stripe y app marca blanca con tu propia identidad.",
            features: [
                { feature: "IA integrada", tg: "Rutinas y dietas generadas con IA avanzada", bg: "IA no promocionada en su oferta pública" },
                { feature: "App marca blanca", tg: "App con tu logo y colores en iOS y Android (plan Pro)", bg: "Opciones de personalización variables" },
                { feature: "Cobros automáticos", tg: "Suscripciones Stripe + bloqueo automático por impago", bg: "Gestión de cobros básica" },
                { feature: "Base de alimentos", tg: "Base propia con +240.000 alimentos validados en español", bg: "Base estándar" },
                { feature: "Soporte en español", tg: "Equipo en España, respuesta en menos de 24h", bg: "Soporte disponible" },
                { feature: "Migración asistida", tg: "Incluida por soporte humano en todos los planes", bg: "Onboarding básico" }
            ]
        },
        virtuagym: {
            name: "Virtuagym",
            h1: "Mejor Alternativa a Virtuagym para Entrenadores Personales",
            painPoint: "Si Virtuagym está orientado a gimnasios grandes y prefieres una herramienta diseñada para entrenadores personales autónomos.",
            features: [
                { feature: "Enfoque del producto", tg: "Diseñado para entrenadores personales autónomos", bg: "Orientado principalmente a gimnasios y clubes deportivos" },
                { feature: "IA integrada", tg: "Rutinas y dietas generadas con IA incluidas", bg: "Funcionalidades enfocadas a gestión de gimnasio" },
                { feature: "Precio de entrada", tg: "Desde 29,90€/mes (25 clientes)", bg: "Planes enterprise con precios por consulta" },
                { feature: "App cliente", tg: "App marca blanca con tu logo y colores", bg: "App con branding de Virtuagym según plan" },
                { feature: "Soporte en español", tg: "Equipo en España, respuesta rápida", bg: "Soporte internacional" },
                { feature: "Curva de aprendizaje", tg: "Diseñado para entrenador autónomo — sin funciones de gimnasio innecesarias", bg: "Funciones de gestión de socios y aforo pueden no ser útiles para PT online" }
            ]
        }
    };

    const currentData = competitors[competitor];

    const faqs = [
        { question: `¿Perderé los datos de mis clientes al migrar desde ${currentData.name}?`, answer: "No. Nuestro equipo se encarga de importar a tus atletas actuales mediante herramientas propias de migración, guiando el proceso en español. La migración asistida está incluida en todos los planes." },
        { question: "¿Cobráis comisiones extra por mis ventas?", answer: "No aplicamos comisiones sobre tus ventas. Usas tu propia cuenta de Stripe para los cobros de tus clientes; TotalGains es únicamente la tecnología SaaS que tú contratas." },
        { question: `Mis clientes están acostumbrados a ${currentData.name}, ¿les costará el cambio?`, answer: "Nuestra experiencia con entrenadores que han migrado es que el periodo de adaptación suele resolverse en los primeros días. Tus clientes reciben una invitación clara con la nueva app y un onboarding guiado. Si tienes dudas sobre un caso concreto, escríbenos y te contamos cómo suele ser el proceso." }
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
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary,#aaa)', display: 'block', marginBottom: 4 }}>Actualizado: Abril 2026</span>
                    <h1 className="alternativas-title gradient-text">
                        {currentData.h1}
                    </h1>

                    {/* El súper selector B2B — montado client-side para no exponer nombres de competidores al HTML SSR */}
                    {mounted && (
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
                    )}

                    <p className="alternativas-subtitle mt-4">
                        {currentData.painPoint} TotalGains es la alternativa en español con IA y marca blanca incluidas desde el plan base.
                    </p>
                    <div style={{ marginTop: 20 }}>
                        <TrustpilotBadge score={4.0} totalReviews={3} variant="compact" />
                    </div>
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
                    <h3>Migración asistida desde {currentData.name} incluida</h3>
                    <p>Sabemos que mover a 30, 50 o más clientes puede dar pereza. Por eso nuestro equipo te acompaña en el proceso: importamos tus datos, recreamos tus rutinas y coordinamos el onboarding de tus clientes. La migración está incluida en todos los planes, en español.</p>
                </motion.div>

                {/* Preguntas Frecuentes específicas editadas dinámicamente */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="alternativas-faq"
                >
                    <h2>Preguntas Frecuentes: TotalGains vs {currentData.name}</h2>
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
                    <Link href="/onboarding" className="btn btn-primary btn-lg cta-migrar" prefetch={false}>
                        Probar TotalGains gratis 14 días 🚀
                    </Link>
                    <p className="microcopy-secure mt-2">Sin tarjeta. Sin permanencia. Migración asistida incluida si vienes de {currentData.name}.</p>
                </motion.div>
            </div>
        </main>
    );
}
