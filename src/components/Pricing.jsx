"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Gift, Info, CreditCard, Lock, Users } from 'lucide-react';
import './Pricing.css';

// ============================================================
// COACH PLANS - Nueva estrategia de precios (IVA Incluido)
// ============================================================
const coachPlans = [
    {
        id: 'starter',
        name: 'STARTER',
        subtitle: 'Para empezar con ventaja.',
        monthly: {
            price: '29,90',
            period: 'mes'
        },
        annual: {
            price: '299',
            priceOriginal: '358,80',
            monthlyEquivalent: '24,92',
            totalAnnual: '299',
            savings: '60'
        },
        features: [
            { text: 'Hasta 25 Atletas', included: true },
            { text: 'IA Ilimitada (Dietas y Rutinas)', included: true },
            { text: 'App para tus Atletas', included: true },
            { text: 'Soporte por Email (48h)', included: true }
        ],
        ctaText: 'EMPEZAR PRUEBA 14 DÍAS',
        gradient: 'starter',
        recommended: false
    },
    {
        id: 'pro',
        name: 'PRO',
        subtitle: 'El estándar para vivir del entrenamiento.',
        monthly: {
            price: '89,90',
            period: 'mes'
        },
        annual: {
            price: '899',
            priceOriginal: '1.078,80',
            monthlyEquivalent: '74,92',
            totalAnnual: '899',
            savings: '180'
        },
        badge: <><Trophy size={14} className="inline mr-1" /> RECOMENDADO</>,
        features: [
            { text: 'Hasta 100 Atletas', included: true },
            { text: 'Todo lo del Plan Starter', included: true },
            { text: 'Facturación y Finanzas', included: true },
            { text: 'Soporte Prioritario (24h)', included: true }
        ],
        ctaText: 'EMPEZAR PRUEBA 14 DÍAS',
        gradient: 'accent',
        recommended: true
    },
    {
        id: 'unlimited',
        name: 'UNLIMITED',
        subtitle: 'Escala sin techo. Centros y Top Coaches.',
        monthly: {
            price: '199,90',
            period: 'mes'
        },
        annual: {
            price: '1999',
            priceOriginal: '2.398,80',
            monthlyEquivalent: '166,58',
            totalAnnual: '1.999',
            savings: '400'
        },
        features: [
            { text: 'Atletas ILIMITADOS', included: true },
            { text: 'Migración de Datos INCLUIDA', included: true, tooltip: 'Lo hacemos por ti' },
            { text: 'Prioridad en Desarrollo', included: true },
            { text: 'Soporte VIP Directo', included: true }
        ],
        ctaText: 'EMPEZAR PRUEBA 14 DÍAS',
        gradient: 'unlimited',
        recommended: false
    }
];

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false); // Billing toggle
    const [isMobile, setIsMobile] = useState(false);
    const [clientCount, setClientCount] = useState(15);

    React.useEffect(() => {
        let timeoutId = null;
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);

        const debouncedCheck = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(checkMobile, 150); // 150ms debounce
        };

        checkMobile();
        window.addEventListener("resize", debouncedCheck);
        return () => {
            window.removeEventListener("resize", debouncedCheck);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="section-header">
                    <h2 className="gradient-text">Precios del software para entrenadores</h2>
                    <p>La plataforma SaaS fitness más rentable del mercado. Sin permanencia. Sin sustos: <span className="iva-highlight">IVA ya incluido en el precio.</span></p>
                </div>

                <div className="billing-toggle-container">
                    <div className="billing-toggle">
                        <span className={!isAnnual ? 'active' : ''}>Mensual</span>
                        <button
                            className={`switch ${isAnnual ? 'active' : ''}`}
                            onClick={() => setIsAnnual(!isAnnual)}
                            aria-label="Toggle billing period"
                        >
                            <span className="switch-thumb"></span>
                        </button>
                        <span className={`annual-label ${isAnnual ? 'active' : ''}`}>
                            Anual <span className="free-months"><Gift size={14} className="inline mr-1" /> Ahorra 2 Meses</span>
                        </span>
                    </div>
                </div>

                {isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mobile-client-slider glass"
                    >
                        <div className="slider-header">
                            <span className="slider-label"><Users size={18} className="inline mr-2" /> Número de Atletas</span>
                            <span className="slider-value">{clientCount >= 101 ? '+100' : clientCount}</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="101"
                            value={clientCount}
                            onChange={(e) => setClientCount(Number(e.target.value))}
                            className="client-range"
                        />
                        <div className="slider-marks">
                            <span>1</span>
                            <span>25</span>
                            <span>100</span>
                            <span>101+</span>
                        </div>
                    </motion.div>
                )}

                {!isMobile ? (
                    <div className="pricing-grid coach-three-cards">
                        {coachPlans.map((plan, index) => {
                            const displayPrice = isAnnual
                                ? plan.annual.monthlyEquivalent
                                : plan.monthly.price;
                            const showAnnualNote = isAnnual && plan.annual.savings;

                            return (
                                <motion.div
                                    key={plan.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                                    className={`pricing-card glass gradient-card-${plan.gradient} ${plan.recommended ? 'recommended' : ''}`}
                                >
                                    {plan.badge && (
                                        <div className="recommended-badge">
                                            <span>{plan.badge}</span>
                                        </div>
                                    )}

                                    <div className="pricing-header">
                                        <h3>{plan.name}</h3>
                                        <p className="pricing-description">{plan.subtitle}</p>
                                    </div>

                                    <div className="pricing-price">
                                        {isAnnual && plan.annual.priceOriginal && (
                                            <div className="original-price">
                                                <span className="strikethrough">{plan.annual.priceOriginal}€</span>
                                            </div>
                                        )}
                                        <div className="current-price-row">
                                            {isAnnual ? (
                                                <>
                                                    <span className="amount">{plan.annual.totalAnnual}</span>
                                                    <span className="currency">€</span>
                                                    <span className="period">/año</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="amount">{displayPrice}</span>
                                                    <span className="currency">€</span>
                                                    <span className="period">/mes</span>
                                                </>
                                            )}
                                        </div>
                                        <span className="vat-label">(IVA Incluido)</span>
                                        {showAnnualNote && (
                                            <p className="annual-billing-note">
                                                <strong>¡Ahorras {plan.annual.savings}€!</strong>
                                            </p>
                                        )}
                                    </div>

                                    <ul className="pricing-features">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className={!feature.included ? 'not-included' : ''}>
                                                <span className={feature.included ? 'check' : 'cross'}>
                                                    {feature.included ? '✓' : '✗'}
                                                </span>
                                                <span className="feature-text">
                                                    {feature.text}
                                                    {feature.tooltip && (
                                                        <span className="tooltip-container">
                                                            <span className="tooltip-icon"><Info size={14} /></span>
                                                            <span className="tooltip-text">{feature.tooltip}</span>
                                                        </span>
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/onboarding"
                                        className="btn btn-primary btn-lg"
                                        prefetch={false}
                                    >
                                        {plan.ctaText}
                                    </Link>
                                    <span className="microcopy">Sin cobro hoy. Cancela en 1 clic.</span>

                                    <div className="trust-badges-pricing">
                                        <div className="trust-badge-mini"><CreditCard size={14} className="mr-1" /> Sin Permanencia</div>
                                        <div className="trust-badge-mini"><Lock size={14} className="mr-1" /> Cifrado Stripe 256-bit</div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="mobile-pricing-container">
                        <AnimatePresence mode="wait">
                            {(() => {
                                let activePlan = coachPlans[0];
                                if (clientCount > 25 && clientCount <= 100) activePlan = coachPlans[1];
                                if (clientCount > 100) activePlan = coachPlans[2];

                                const displayPrice = isAnnual
                                    ? activePlan.annual.monthlyEquivalent
                                    : activePlan.monthly.price;
                                const showAnnualNote = isAnnual && activePlan.annual.savings;

                                return (
                                    <motion.div
                                        key={activePlan.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                        className={`pricing-card glass w-full mx-auto gradient-card-${activePlan.gradient} ${activePlan.recommended ? 'recommended' : ''}`}
                                    >
                                        {activePlan.badge && (
                                            <div className="recommended-badge">
                                                <span>{activePlan.badge}</span>
                                            </div>
                                        )}

                                        <div className="pricing-header">
                                            <h3>{activePlan.name}</h3>
                                            <p className="pricing-description">{activePlan.subtitle}</p>
                                        </div>

                                        <div className="pricing-price">
                                            {isAnnual && activePlan.annual.priceOriginal && (
                                                <div className="original-price">
                                                    <span className="strikethrough">{activePlan.annual.priceOriginal}€</span>
                                                </div>
                                            )}
                                            <div className="current-price-row">
                                                {isAnnual ? (
                                                    <>
                                                        <span className="amount">{activePlan.annual.totalAnnual}</span>
                                                        <span className="currency">€</span>
                                                        <span className="period">/año</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="amount">{displayPrice}</span>
                                                        <span className="currency">€</span>
                                                        <span className="period">/mes</span>
                                                    </>
                                                )}
                                            </div>
                                            <span className="vat-label">(IVA Incluido)</span>
                                            {showAnnualNote && (
                                                <p className="annual-billing-note">
                                                    <strong>¡Ahorras {activePlan.annual.savings}€!</strong>
                                                </p>
                                            )}
                                        </div>

                                        <ul className="pricing-features">
                                            {activePlan.features.map((feature, idx) => (
                                                <li key={idx} className={!feature.included ? 'not-included' : ''}>
                                                    <span className={feature.included ? 'check' : 'cross'}>
                                                        {feature.included ? '✓' : '✗'}
                                                    </span>
                                                    <span className="feature-text">
                                                        {feature.text}
                                                        {feature.tooltip && (
                                                            <span className="tooltip-container">
                                                                <span className="tooltip-icon"><Info size={14} /></span>
                                                                <span className="tooltip-text">{feature.tooltip}</span>
                                                            </span>
                                                        )}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href="/onboarding"
                                            className="btn btn-primary btn-lg"
                                            prefetch={false}
                                        >
                                            {activePlan.ctaText}
                                        </Link>
                                        <span className="microcopy">Sin cobro hoy. Cancela en 1 clic.</span>

                                        <div className="trust-badges-pricing">
                                            <div className="trust-badge-mini"><CreditCard size={14} className="mr-1" /> Sin Permanencia</div>
                                            <div className="trust-badge-mini"><Lock size={14} className="mr-1" /> Cifrado Stripe 256-bit</div>
                                        </div>
                                    </motion.div>
                                );
                            })()}
                        </AnimatePresence>
                    </div>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="free-plan-section"
                >
                    <p className="free-plan-question">¿Quieres probar la App antes de decidir?</p>
                    <Link
                        href="/onboarding"
                        className="free-plan-link"
                        prefetch={false}
                    >
                        Empieza con el PLAN GRATUITO DE POR VIDA (Máx 3 Atletas)
                    </Link>
                    <p className="free-plan-subtext">Sin tarjeta. Sin compromiso. Actualiza cuando lo necesites.</p>
                </motion.div>
            </div>
        </section >
    );
};

export default Pricing;
