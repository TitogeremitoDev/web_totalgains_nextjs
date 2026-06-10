"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Utensils, Sparkles, Smartphone, Trophy, Clock, Gift } from 'lucide-react';
import './Stats.css';

const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

function runCountUp(el, target, format, prefix, suffix, suffixPlain) {
    const formatK = n => {
        if (n >= 1000) {
            const v = n / 1000;
            return (v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)) + 'K';
        }
        return Math.round(n).toString();
    };
    const render = current => {
        const display = format === 'k' ? formatK(current) : Math.round(current).toString();
        el.textContent = prefix + display + suffix + suffixPlain;
    };
    render(0);
    const start = Date.now();
    const id = setInterval(() => {
        const p = Math.min(1, (Date.now() - start) / 1800);
        render(target * easeOutExpo(p));
        if (p >= 1) { clearInterval(id); render(target); }
    }, 16);
}

// Platform logos (inline SVG)
const PlatformLogos = () => (
    <span className="platform-logos" aria-hidden="true">
        <span className="pl pl-web" title="Web">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>
            </svg>
        </span>
        <span className="pl pl-ios" title="iOS">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
        </span>
        <span className="pl pl-and" title="Android">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.998-.4469-.998-.9981s.4469-.998.998-.998c.5511 0 .998.4469.998.998 0 .5512-.4469.9981-.998.9981m-11.046 0c-.5511 0-.998-.4469-.998-.9981s.4469-.998.998-.998c.5511 0 .998.4469.998.998 0 .5512-.4469.9981-.998.9981m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4466a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.152.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
            </svg>
        </span>
    </span>
);

const Stats = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const cards = container.querySelectorAll('.stat-item');
        const animated = new WeakSet();

        function animateCard(card) {
            if (animated.has(card)) return;
            animated.add(card);
            card.classList.add('in');

            const counterEl = card.querySelector('[data-counter]');
            if (counterEl && card.dataset.value) {
                runCountUp(
                    counterEl,
                    parseFloat(card.dataset.value),
                    card.dataset.format || 'plain',
                    card.dataset.prefix || '',
                    card.dataset.suffix || '',
                    card.dataset.suffixPlain || ''
                );
            }
            const progFill = card.querySelector('.progress-fill');
            if (progFill) {
                setTimeout(() => { progFill.style.width = (progFill.dataset.progress || '100') + '%'; }, 100);
            }
        }

        const io = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (en.isIntersecting) { animateCard(en.target); io.unobserve(en.target); }
            });
        }, { threshold: 0.15 });

        cards.forEach(el => io.observe(el));
        const fallback = setTimeout(() => cards.forEach(animateCard), 1200);
        return () => { io.disconnect(); clearTimeout(fallback); };
    }, []);

    return (
        <section className="stats" id="stats">
            <div className="stats-bg-glow" aria-hidden="true" />

            <div className="stats-container">
                <div className="stats-header">
                    <div className="stats-eyebrow">En Cifras</div>
                    <h2>La plataforma <span className="grad">más completa</span> para entrenadores</h2>
                </div>

                <div className="stats-grid" ref={containerRef}>

                    {/* HERO — Food DB */}
                    <div
                        className="stat-item stat-hero tone-violet"
                        data-value="240000" data-format="k" data-prefix="+"
                    >
                        <div className="shimmer" aria-hidden="true" />
                        <div className="hero-top">
                            <div className="live-dot">Base de datos viva</div>
                            <div className="stat-icon"><Utensils size={36} /></div>
                        </div>
                        <div className="hero-body">
                            <div className="hero-text">
                                <div className="stat-number"><span data-counter>+0</span></div>
                                <div className="stat-label">Alimentos en la base de datos</div>
                                <div className="stat-sub">Nutrición española completa. Añade nuevos alimentos con IA desde una foto o un PDF.</div>
                                <div className="progress"><div className="progress-fill" data-progress="100" /></div>
                            </div>
                            <div className="food-stack" aria-hidden="true">
                                <img className="food-card food-card--1" src="/screenshots/food-curry.webp" alt="Plato de curry con macros calculados en TotalGains" loading="lazy" decoding="async" />
                                <img className="food-card food-card--2" src="/screenshots/food-yogur.webp" alt="Yogur con fruta y desglose nutricional en TotalGains" loading="lazy" decoding="async" />
                                <img className="food-card food-card--3" src="/screenshots/food-tortilla.webp" alt="Tortilla de patata con macros en la base de datos de TotalGains" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </div>

                    {/* IA — 100% */}
                    <div
                        className="stat-item stat-secondary tone-emerald"
                        data-value="100" data-suffix="%"
                    >
                        <div className="stat-icon"><Sparkles size={28} /></div>
                        <div className="stat-number"><span data-counter>0%</span></div>
                        <div className="stat-label">IA en Rutinas y Dietas</div>
                        <div className="stat-sub">Genera planes personalizados en segundos. Corrige en 1 clic.</div>
                        <div className="progress"><div className="progress-fill" data-progress="100" /></div>
                    </div>

                    {/* Plataformas — 3 */}
                    <div
                        className="stat-item stat-secondary tone-blue"
                        data-value="3"
                    >
                        <div className="stat-icon"><Smartphone size={28} /></div>
                        <div className="stat-number platforms-row">
                            <span data-counter>0</span>
                            <PlatformLogos />
                        </div>
                        <div className="stat-label">Plataformas Web · iOS · Android</div>
                        <div className="stat-sub">Tus atletas, desde cualquier dispositivo. Sincronización en tiempo real.</div>
                        <div className="progress"><div className="progress-fill" data-progress="100" /></div>
                    </div>

                    {/* Modo Competencia */}
                    <div className="stat-item stat-small tone-orange">
                        <div className="stat-icon"><Trophy size={28} /></div>
                        <div className="stat-number stat-text">Modo<br />Competencia</div>
                        <div className="stat-label">Culturismo y deportes de competición</div>
                        <div className="stat-sub">Seguimiento avanzado para atletas que compiten. Único en el mercado.</div>
                        <div className="progress"><div className="progress-fill" data-progress="100" /></div>
                    </div>

                    {/* +10h ahorro */}
                    <div
                        className="stat-item stat-small tone-pink"
                        data-value="10" data-prefix="+" data-suffix="h"
                    >
                        <div className="stat-icon"><Clock size={28} /></div>
                        <div className="stat-number"><span data-counter>+0h</span></div>
                        <div className="stat-label">Ahorro semanal promedio</div>
                        <div className="stat-sub">Menos admin. Más entrenamiento.</div>
                        <div className="progress"><div className="progress-fill" data-progress="100" /></div>
                    </div>

                    {/* 14 días prueba */}
                    <div
                        className="stat-item stat-small tone-amber"
                        data-value="14" data-suffix-plain=" días"
                    >
                        <div className="stat-icon"><Gift size={28} /></div>
                        <div className="stat-number"><span data-counter>0 días</span></div>
                        <div className="stat-label">Prueba gratis sin tarjeta</div>
                        <div className="stat-sub">Sin permanencia. Cancela en 1 clic.</div>
                        <div className="progress"><div className="progress-fill" data-progress="100" /></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;
