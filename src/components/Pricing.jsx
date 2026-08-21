"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Gift, Check, CreditCard, Lock, Users, Info, Building2, Dumbbell } from 'lucide-react';
import { trackEvent } from "@/components/Analytics";
import { PLANES_GYM } from '@/data/productSchema';
import './Pricing.css';

/* ──────────────────────────────────────────────
   DOS AUDIENCIAS, DOS TARIFAS

   El visitante elige antes de ver números si es entrenador o gimnasio. Sin
   ese paso la tabla se lee mal: el coach Unlimited son 149,90 € por atletas
   ilimitados de UN entrenador y el Gym Starter son 149 € por hasta 100 SOCIOS
   con coaches ilimitados. Mismo número, producto distinto — por eso cada
   precio lleva su unidad pegada debajo (`unit`).

   El gimnasio no se da de alta solo: su CTA pide demo, nunca "empieza gratis".
   ────────────────────────────────────────────── */

const coachPlans = [
    {
        id: 'free',
        name: 'GRATUITO',
        subtitle: 'De por vida. Sin tarjeta.',
        unit: 'para siempre',
        monthly: { price: '0', period: 'siempre' },
        // Sin `annual`: no aplica tachado ni ahorro (es 0 € para siempre).
        badge: 'MÁS GENEROSO DEL MERCADO',
        features: [
            { text: 'Hasta 5 Atletas', included: true, tooltip: 'Trainerize Basic ofrece 1, TrainerStudio Free ofrece 3, Harbiz no tiene plan gratuito permanente' },
            { text: 'IA Rutinas y Dietas', included: true },
            { text: 'App Marca Blanca INCLUIDA', included: true },
            { text: '+240.000 alimentos', included: true },
            { text: 'Sin tarjeta de crédito', included: true },
        ],
        ctaText: 'EMPEZAR GRATIS',
        ctaHref: '/onboarding/?plan=free',
        microcopy: 'Sin tarjeta. Sin caducidad. De por vida.',
        gradient: 'free',
        recommended: false,
        isFree: true,
    },
    {
        id: 'starter',
        name: 'STARTER',
        subtitle: 'Para empezar con ventaja.',
        unit: 'por atletas activos',
        monthly: { price: '29,90', period: 'mes' },
        annual: { price: '299', priceOriginal: '358,80', monthlyEquivalent: '24,92', totalAnnual: '299', savings: '60' },
        features: [
            { text: 'Hasta 25 Atletas', included: true },
            { text: 'IA Ilimitada (Dietas y Rutinas)', included: true },
            { text: 'App Marca Blanca INCLUIDA', included: true, tooltip: 'Tu logo y tus colores, en todos los planes' },
            { text: 'Todas las funciones incluidas', included: true },
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
        unit: 'por atletas activos',
        monthly: { price: '89,90', period: 'mes' },
        annual: { price: '899', priceOriginal: '1.078,80', monthlyEquivalent: '74,92', totalAnnual: '899', savings: '180' },
        badge: 'RECOMENDADO',
        features: [
            { text: 'Hasta 100 Atletas', included: true },
            { text: 'Todas las funciones incluidas', included: true },
            { text: 'App Marca Blanca INCLUIDA', included: true },
            { text: 'Soporte Prioritario (24h)', included: true },
        ],
        ctaText: 'EMPEZAR PRUEBA 14 DÍAS',
        gradient: 'accent',
        recommended: true,
    },
    {
        id: 'unlimited',
        name: 'UNLIMITED',
        // Antes decía "Centros y Top Coaches": un dueño de gimnasio leía eso en
        // la única tabla visible y se creía que su plan era este. Los centros
        // tienen su propia tarifa (gymPlans), esto es para el coach individual.
        subtitle: 'Escala sin techo. Para top coaches.',
        unit: 'por atletas activos',
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

/* Los precios salen de PLANES_GYM (misma fuente que el schema de la landing);
   aquí solo se les pone la ropa. Si cambia una tarifa se cambia allí y baja a
   todas partes — no hay un segundo sitio donde se olvide. */
const [gymStarter, gymPro, gymElite] = PLANES_GYM;

/* Formateo español SIN Intl a propósito: estas cards se prerenderizan en el
   build (Node) y se hidratan en el navegador. Con toLocaleString, cualquier
   diferencia de ICU entre los dos entornos escupe un error de hidratación. */
const milesES = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const eurES = (n) => n.toFixed(2).replace('.', ',');

/* La tarifa anual del gimnasio es la MISMA regla que la del coach: pagas 10
   mensualidades y te llevas 12 → 2 meses gratis. Derivarla en vez de escribir
   los nueve números a mano significa que al tocar el precio mensual el anual,
   el equivalente y el ahorro se recalculan solos y no se quedan mintiendo.
   149 → 1.490 (ahorras 298) · 199 → 1.990 (398) · 249 → 2.490 (498) */
const MESES_PAGADOS = 10;
const annualFromMonthly = (monthly) => {
    const total = monthly * MESES_PAGADOS;
    return {
        price: String(total),
        totalAnnual: milesES(total),
        monthlyEquivalent: eurES(total / 12),
        savings: milesES(monthly * 12 - total),
    };
};

const gymPlans = [
    {
        id: 'gym-starter',
        name: 'GYM STARTER',
        subtitle: 'Gimnasios y estudios de menos de 100 socios.',
        unit: 'por socios activos · coaches ilimitados',
        monthly: { price: gymStarter.price, period: 'mes' },
        annual: annualFromMonthly(Number(gymStarter.price)),
        features: [
            { text: 'Hasta 100 socios activos', included: true },
            { text: 'Coaches ILIMITADOS', included: true, tooltip: 'Sin coste por entrenador adicional en ningún plan' },
            { text: 'Multi-coach con permisos granulares', included: true },
            { text: 'Clases con reserva y lista de espera', included: true },
            { text: 'App marca blanca del centro', included: true },
            { text: 'Migración asistida en español', included: true },
        ],
        ctaText: 'SOLICITAR DEMO',
        ctaHref: '/para-gimnasios/',
        microcopy: 'Te montamos el centro nosotros. Respuesta en menos de 24 h.',
        gradient: 'starter',
        recommended: false,
    },
    {
        id: 'gym-pro',
        name: 'GYM PRO',
        subtitle: 'El centro que ya no cabe en una hoja de cálculo.',
        unit: 'por socios activos · coaches ilimitados',
        monthly: { price: gymPro.price, period: 'mes' },
        annual: annualFromMonthly(Number(gymPro.price)),
        badge: 'RECOMENDADO',
        features: [
            { text: 'De 100 a 200 socios activos', included: true },
            { text: 'Todo lo del plan Gym Starter', included: true },
            { text: 'Onboarding asistido prioritario (48-72 h)', included: true },
            { text: 'Panel supervisor con KPIs en tiempo real', included: true },
            { text: 'Soporte por email en menos de 12 h', included: true },
        ],
        ctaText: 'SOLICITAR DEMO',
        ctaHref: '/para-gimnasios/',
        microcopy: 'Te montamos el centro nosotros. Respuesta en menos de 24 h.',
        gradient: 'accent',
        recommended: true,
    },
    {
        id: 'gym-elite',
        name: 'GYM ELITE',
        subtitle: 'Centros consolidados con varias salas y equipo.',
        unit: 'por socios activos · coaches ilimitados',
        monthly: { price: gymElite.price, period: 'mes' },
        annual: annualFromMonthly(Number(gymElite.price)),
        features: [
            { text: 'Socios ilimitados (más de 200)', included: true },
            { text: 'Todo lo del plan Gym Pro', included: true },
            { text: 'Soporte VIP en español', included: true },
            { text: 'Sesión mensual con el fundador', included: true },
            { text: 'Roadmap con prioridad', included: true },
        ],
        ctaText: 'SOLICITAR DEMO',
        ctaHref: '/para-gimnasios/',
        microcopy: 'Te montamos el centro nosotros. Respuesta en menos de 24 h.',
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

    // Un plan sin `annual` enseña solo el mensual, sin tachado ni ahorro.
    const hasAnnual = Boolean(plan.annual);
    const showAnnual = isAnnual && hasAnnual;
    const displayPrice = showAnnual ? plan.annual.monthlyEquivalent : plan.monthly.price;
    // Free vive fuera de la mensualidad: "para siempre" en lugar de "/mes".
    const period = plan.isFree ? '/siempre' : '/mes';

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
                <div className={`original-price ${showAnnual ? 'show' : ''}`}>
                    <span className="strikethrough">{plan.monthly.price}€/mes</span>
                </div>
                <div className="current-price-row">
                    <span className="amount" key={`${plan.id}-${showAnnual}`}>{displayPrice}</span>
                    <span className="currency">€</span>
                    <span className="period">{period}</span>
                </div>
                <span className="vat-label">(IVA Incluido)</span>
                {/* La unidad va pegada al precio a propósito: es lo único que
                    distingue 149,90 € de coach de 149 € de gimnasio. */}
                {plan.unit && <span className="price-unit">{plan.unit}</span>}
                {hasAnnual && (
                    <p className={`annual-billing-note ${showAnnual ? 'show' : ''}`}>
                        Facturado anualmente: <strong>{plan.annual.totalAnnual}€</strong> · ¡Ahorras {plan.annual.savings}€!
                    </p>
                )}
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

            <Link href={plan.ctaHref || '/onboarding/'} className="btn btn-primary" prefetch={false}
                onClick={() => trackEvent('cta_click', { cta_text: plan.ctaText, cta_location: 'pricing', plan: plan.id })}>
                {plan.ctaText}
            </Link>
            <span className="microcopy">{plan.microcopy || 'Sin cobro hoy. Cancela en 1 clic.'}</span>

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
    // Socios va aparte de atletas: los rangos no coinciden y arrastrar el valor
    // de un slider al otro dejaba al gimnasio en un plan que no le tocaba.
    const [memberCount, setMemberCount] = useState(60);
    const [audience, setAudience] = useState('coach');
    const isGym = audience === 'gym';

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

    const plans = isGym ? gymPlans : coachPlans;

    const activeMobilePlan = isGym
        ? (memberCount > 200 ? gymPlans[2] : memberCount > 100 ? gymPlans[1] : gymPlans[0])
        : (clientCount > 100 ? coachPlans[3]           // > 100 → Unlimited
            : clientCount > 25 ? coachPlans[2]         // 26-100 → Pro
                : clientCount > 5 ? coachPlans[1]      // 6-25 → Starter
                    : coachPlans[0]);                  // 1-5 → Free

    const switchAudience = (next) => {
        if (next === audience) return;
        setAudience(next);
        // Sin este evento no hay forma de saber cuánta gente que llega a precios
        // es en realidad un gimnasio — hoy esa demanda es invisible.
        trackEvent('pricing_audience_switch', { audience: next });
    };

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
                    <h2 className="gradient-text">
                        {isGym ? 'Precios del software para gimnasios' : 'Precios del software para entrenadores'}
                    </h2>
                    <p>
                        {isGym
                            ? <>Coaches ilimitados en todos los planes. La tarifa solo sube por socios activos. Sin permanencia: <span className="iva-highlight">IVA ya incluido en el precio.</span></>
                            : <>La plataforma SaaS fitness más rentable del mercado. Sin permanencia. Sin sustos: <span className="iva-highlight">IVA ya incluido en el precio.</span></>}
                    </p>
                </motion.div>

                {/* Quién eres ANTES de ver números: es lo que evita que un centro
                    lea la tarifa de coach (o al revés) y se vaya con el precio
                    equivocado en la cabeza. */}
                <motion.div
                    className="audience-toggle-container"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="audience-toggle" role="tablist" aria-label="Tipo de negocio">
                        <button
                            role="tab"
                            aria-selected={!isGym}
                            className={`audience-btn ${!isGym ? 'active' : ''}`}
                            onClick={() => switchAudience('coach')}
                        >
                            <Dumbbell size={18} /> Soy entrenador
                        </button>
                        <button
                            role="tab"
                            aria-selected={isGym}
                            className={`audience-btn ${isGym ? 'active' : ''}`}
                            onClick={() => switchAudience('gym')}
                        >
                            <Building2 size={18} /> Tengo un gimnasio
                        </button>
                    </div>
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

                {isMobile && !isGym && (
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

                {isMobile && isGym && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mobile-client-slider glass"
                    >
                        <div className="slider-header">
                            <span className="slider-label"><Users size={18} /> Socios activos</span>
                            <span className="slider-value">{memberCount >= 250 ? '+200' : memberCount}</span>
                        </div>
                        <input
                            type="range" min="10" max="250" step="10" value={memberCount}
                            onChange={e => setMemberCount(Number(e.target.value))}
                            className="client-range"
                        />
                        <div className="slider-marks">
                            <span>10</span><span>100</span><span>200</span><span>+200</span>
                        </div>
                    </motion.div>
                )}

                {!isMobile ? (
                    <div className={`pricing-grid ${isGym ? 'coach-three-cards' : 'coach-four-cards'}`}>
                        {plans.map((plan, index) => (
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
                    {isGym ? (
                        <>
                            {/* Un gimnasio no se da de alta solo: hay que montarle
                                el centro. Por eso aquí NO se ofrece prueba gratis. */}
                            <p className="free-plan-question">¿Quieres verlo funcionando con tus datos?</p>
                            <Link href="/para-gimnasios/" className="free-plan-link" prefetch={false}
                                onClick={() => trackEvent('cta_click', { cta_text: 'Ver TotalGains para gimnasios', cta_location: 'pricing_gym_footer' })}>
                                Ver TotalGains para gimnasios y pedir demo
                            </Link>
                            <p className="free-plan-subtext">Migración desde Harbiz o Virtuagym incluida. Sin permanencia.</p>
                        </>
                    ) : (
                        <>
                            <p className="free-plan-question">¿Quieres probar la App antes de decidir?</p>
                            <Link href="/onboarding/" className="free-plan-link" prefetch={false}>
                                Empieza con el PLAN GRATUITO DE POR VIDA (Máx 5 Atletas)
                            </Link>
                            <p className="free-plan-subtext">Sin tarjeta. Sin compromiso. Actualiza cuando lo necesites.</p>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
