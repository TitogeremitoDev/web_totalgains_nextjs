"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import './ComparisonTable.css';

const rows = [
    { feature: 'Soporte en español nativo',    tg: true,  tr: false, ha: false },
    { feature: '+240.000 alimentos en BD',      tg: true,  tr: false, ha: false },
    { feature: 'App marca blanca para clientes',tg: true,  tr: false, ha: true  },
    { feature: 'Sin penalización por volumen',  tg: true,  tr: false, ha: false },
    { feature: 'Precio desde',                  tg: '29,90€', tr: '35€', ha: '49€' },
    { feature: 'Prueba gratuita sin tarjeta',   tg: true,  tr: false, ha: false },
    { feature: 'Seguimiento de progreso',        tg: true,  tr: true,  ha: true  },
    { feature: 'Gestión de rutinas',            tg: true,  tr: true,  ha: true  },
];

const Cell = ({ value }) => {
    if (value === true)  return <span className="ct-check"><Check size={16} strokeWidth={3} /></span>;
    if (value === false) return <span className="ct-cross"><X size={16} strokeWidth={3} /></span>;
    return <span className="ct-price">{value}</span>;
};

const ComparisonTable = () => (
    <section className="comparison-section" id="comparativa">
        <div className="ct-bg-glow" />
        <div className="container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="section-badge">
                    <ArrowRight size={14} />
                    Comparativa directa
                </div>
                <h2 className="gradient-text">¿Por qué TotalGains y no otro?</h2>
                <p className="section-subtitle">
                    Compara en 30 segundos. Sin letra pequeña.
                </p>
            </motion.div>

            <motion.div
                className="ct-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div className="ct-scroll">
                    <table className="ct-table">
                        <thead>
                            <tr>
                                <th className="ct-th-feature">Característica</th>
                                <th className="ct-th ct-th--tg">
                                    <span className="ct-brand-tg">TotalGains</span>
                                    <span className="ct-brand-badge">Recomendado</span>
                                </th>
                                <th className="ct-th ct-th--comp">Trainerize</th>
                                <th className="ct-th ct-th--comp">Harbiz</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'ct-row-even' : ''}>
                                    <td className="ct-td-feature">{row.feature}</td>
                                    <td className="ct-td ct-td--tg"><Cell value={row.tg} /></td>
                                    <td className="ct-td"><Cell value={row.tr} /></td>
                                    <td className="ct-td"><Cell value={row.ha} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="ct-cta">
                    <a
                        href="/onboarding"
                        className="btn btn-gold btn-lg"
                        onClick={() => trackEvent('cta_click', { cta_text: 'Empezar con TotalGains', cta_location: 'comparison_table' })}
                    >
                        Empezar gratis con TotalGains
                    </a>
                    <a href="/alternativas/trainerize/" className="ct-link">
                        Ver comparativa completa →
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
);

export default ComparisonTable;
