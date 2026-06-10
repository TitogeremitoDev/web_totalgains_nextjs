"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Gift, Check, CreditCard, Lock, Users, Info } from 'lucide-react';
import { trackEvent } from "@/components/Analytics";
import './Pricing.css';

const coachPlans = [
    {
        id: 'starter',
        name: 'STARTER',
        subtitle: 'Para empezar con ventaja.',
        monthly: { price: '29,90', period: 'mes' },
        annual: { price: '299', priceOriginal: '358,80', monthlyEquivalent: '24,92', totalAnnual: '299', savings: '60' },
        features: [
            { text: 'Hasta 25 Atletas', included: true },
            { text: 'IA Ilimitada (Dietas y Rutinas)', included: true },
            { text: 'App para tus Atletas', included: true },
            { text: 'Soporte por Email (48h)', included: true },
        ],
        ctaText: 'EMPEZAR PRUEBA 14 DÍAS',
        gradient: 'starter',
        recommended: false,
    },
    {
        id: 'pro',
        name: 'PRO',
        subtitle: 'El estándar para vivir del entrenamiento.',
        monthly: { price: '89,90', period: 'mes' },
        annual: { price: '899', priceOriginal: '1.078,80', monthlyEquivalent: '74,92', totalAnnual: '899', savings: '180' },
        badge: 'RECOMENDADO',
        features: [
            { text: 'Hasta 100 Atletas', included: true },
            { text: 'Todo lo del Plan Starter', included: true },
            { text: 'Facturación y Finanzas', included: true },
            { text: 'Soporte Prioritario (24h)', included: true },
        ],
        ctaText: 'EMPEZAR PRUEBA 14 DÍAS',
        gradient: 'accent',
        recommended: true,
    },
    {
        id: 'unlimited',
        name: 'UNLIMITED',
        subtitle: 'Escala sin techo. Centros y Top Coaches.',
        monthly: { price: '149,90', period: 'mes' },
        annual: { price: '1499', priceOriginal: '1.798,80', monthlyEquivalent: '124,92', totalAnnual: '1.499', savings: '300' },
        features: [
            { text: 'Atletas ILIMITADOS', included: true },
            { text: 'Migración de Datos INCLUIDA', included: true, tooltip: 'Lo hacemos por ti' },
            { text: 'Prioridad en Desarrollo', included: true },
            { text: 'Soporte VIP Directo', included: true },
        ],
        ctaText: 'EMPEZAR PRUEBA 14 DÍAS',
        gradient: 'unlimited',
        recommended: false,
    },
];

function PricingCard({ plan, isAnnual, delay = 0 }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        const handler = e => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - r.left}px`);
            card.style.setProperty('--my', `${e.clientY - r.top}px`);
        };
        card.addEventListener('pointermove', handler);
        return () => card.removeEventListener('pointermove', handler);
    }, []);

    const displayPrice = isAnnual ? plan.annual.monthlyEquivalent : plan.monthly.price;
    const period = '/mes';

    return (
        <motion.article
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay }}
            className={`pricing-card gradient-card-${plan.gradient} ${plan.recommended ? 'recommended' : ''}`}
        >
            {plan.gradient === 'accent' && (
                <>
                    <div className="halo" aria-hidden="true" />
                    <div className="grain" aria-hidden="true" />
                    <div className="sparks" aria-hidden="true">
                        <span /><span /><span /><span /><span /><span />
                    </div>
                </>
            )}
            <div className="spotlight" aria-hidden="true" />

            {plan.badge && (
                <div className="recommended-badge">
                    <Trophy size={14} /> {plan.badge}
                </div>
            )}

            <div className="pricing-header">
                <h3>{plan.name}</h3>
                <p className="pricing-description">{plan.subtitle}</p>
            </div>

            <div className="pricing-price">
                <div className={`original-price ${isAnnual ? 'show' : ''}`}>
                    <span className="strikethrough">{plan.monthly.price}€/mes</span>
                </div>
                <div className="current-price-row">
                    <span className="amount" key={`${plan.id}-${isAnnual}`}>{displayPrice}</span>
                    <span className="currency">€</span>
                    <span className="period">{period}</span>
                </div>
                <span className="vat-label">(IVA Incluido)</span>
                <p className={`annual-billing-note ${isAnnual ? 'show' : ''}`}>
                    Facturado anualmente: <strong>{plan.annual.totalAnnual}€</strong> · ¡Ahorras {plan.annual.savings}€!
                </p>
            </div>

            <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                    <li key={idx}>
                        <span className="check"><Check size={14} /></span>
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

            <Link href="/onboarding" className="btn btn-primary" prefetch={false}
                onClick={() => trackEvent('cta_click', { cta_text: plan.ctaText, cta_location: 'pricing', plan: plan.id })}>
                {plan.ctaText}
            </Link>
            <span className="microcopy">Sin cobro hoy. Cancela en 1 clic.</span>

            <div className="trust-badges-pricing">
                <div className="trust-badge-mini"><CreditCard size={14} /> Sin Permanencia</div>
                <div className="trust-badge-mini"><Lock size={14} /> Cifrado Stripe 256-bit</div>
            </div>
        </motion.article>
    );
}

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [clientCount, setClientCount] = useState(15);

    useEffect(() => {
        let timeoutId = null;
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        const debouncedCheck = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(checkMobile, 150);
        };
        checkMobile();
        window.addEventListener('resize', debouncedCheck);
        return () => {
            window.removeEventListener('resize', debouncedCheck);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const activeMobilePlan =
        clientCount > 100 ? coachPlans[2] :
        clientCount > 25  ? coachPlans[1] :
        coachPlans[0];

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                >
                    <h2 className="gradient-text">Precios del software para entrenadores</h2>
                    <p>La plataforma SaaS fitness más rentable del mercado. Sin permanencia. Sin sustos: <span className="iva-highlight">IVA ya incluido en el precio.</span></p>
                </motion.div>

                <motion.div
                    className="billing-toggle-container"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                >
                    <div className="billing-toggle" role="group" aria-label="Periodicidad">
                        <span className={!isAnnual ? 'active' : ''} onClick={() => setIsAnnual(false)}>
                            Mensual
                        </span>
                        <button
                            className={`switch ${isAnnual ? 'active' : ''}`}
                            onClick={() => setIsAnnual(v => !v)}
                            aria-label="Toggle billing period"
                        >
                            <span className="switch-thumb" />
                        </button>
                        <span
                            className={`annual-label ${isAnnual ? 'active' : ''}`}
                            onClick={() => setIsAnnual(true)}
                        >
                            Anual <span className="free-months"><Gift size={14} /> Ahorra 2 Meses</span>
                        </span>
                    </div>
                </motion.div>

                {isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mobile-client-slider glass"
                    >
                        <div className="slider-header">
                            <span className="slider-label"><Users size={18} /> Número de Atletas</span>
                            <span className="slider-value">{clientCount >= 101 ? '+100' : clientCount}</span>
                        </div>
                        <input
                            type="range" min="1" max="101" value={clientCount}
                            onChange={e => setClientCount(Number(e.target.value))}
                            className="client-range"
                        />
                        <div className="slider-marks">
                            <span>1</span><span>25</span><span>100</span><span>101+</span>
                        </div>
                    </motion.div>
                )}

                {!isMobile ? (
                    <div className="pricing-grid coach-three-cards">
                        {coachPlans.map((plan, index) => (
                            <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} delay={index * 0.1} />
                        ))}
                    </div>
                ) : (
                    <div className="mobile-pricing-container">
                        <AnimatePresence mode="wait">
                            <PricingCard key={activeMobilePlan.id} plan={activeMobilePlan} isAnnual={isAnnual} delay={0} />
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
                    <Link href="/onboarding" className="free-plan-link" prefetch={false}>
                        Empieza con el PLAN GRATUITO DE POR VIDA (Máx 3 Atletas)
                    </Link>
                    <p className="free-plan-subtext">Sin tarjeta. Sin compromiso. Actualiza cuando lo necesites.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
