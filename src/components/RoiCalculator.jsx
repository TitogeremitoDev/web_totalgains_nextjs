"use client";

import React, { useState, useMemo } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
    BarChart, Bar, Cell, ComposedChart, Line
} from 'recharts';
import { Rocket, TrendingUp, Clock, Lightbulb } from 'lucide-react';
import './RoiCalculator.css';

const getMetrics = (clients, price) => {
    const c = clients === 0 ? 1 : clients;
    const rev = c * price;

    let cost = 29.90;
    let planName = 'Starter';
    if (c > 25 && c <= 100) { cost = 89.90; planName = 'Pro'; }
    else if (c > 100) { cost = 199.90; planName = 'Unlimited'; }

    const noTg = c * 2.5;

    let savPct = 0;
    if (c <= 20) {
        savPct = 10 + ((c - 5) / 15) * 20;
    } else if (c <= 100) {
        savPct = 30 + ((c - 20) / 80) * 60;
    } else {
        savPct = 90 + ((c - 100) / 100) * 5;
    }

    const savPctReal = Math.min(Math.max(savPct, 0), 100) / 100;
    const sav = noTg * savPctReal;
    const withTg = noTg - sav;

    const hoursPerClientWithTg = withTg / c;
    const extraC = hoursPerClientWithTg > 0 ? Math.floor(sav / hoursPerClientWithTg) : Math.floor(sav / 0.5);

    const potRev = rev + (extraC * price);

    return {
        c, rev, cost, planName, noTg, withTg, sav, extraC, potRev,
        savPct: (savPctReal * 100).toFixed(0)
    };
};

const formatN = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="recharts-custom-tooltip">
                <p className="val"><strong>{label} Atletas</strong></p>
                {payload.map((entry, index) => (
                    <p key={index} style={{ color: entry.color, margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>
                        {entry.name}: {formatN(entry.value)}€
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const TimeTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="recharts-custom-tooltip">
                <p className="val"><strong>{label}</strong></p>
                <p style={{ color: payload[0].payload.fill, margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>
                    Tiempo: {payload[0].value.toFixed(1)} h
                </p>
            </div>
        );
    }
    return null;
};

const RoiCalculator = () => {
    const [clients, setClients] = useState(40);
    const [price, setPrice] = useState(60);

    const m = useMemo(() => getMetrics(clients, price), [clients, price]);

    const graphData = useMemo(() => {
        let data = [];
        for (let x = 5; x <= 200; x += 15) {
            let cx = x;
            let mx = getMetrics(cx, price);
            data.push({
                clientes: cx,
                Coste: mx.cost,
                Actual: mx.rev,
                Potencial: mx.potRev
            });
        }
        return data;
    }, [price]);

    const timeData = useMemo(() => [
        { name: 'Manuales', horas: m.noTg, fill: 'url(#colorManuales)' },
        { name: 'TotalGains', horas: m.withTg, fill: 'url(#colorTotalGainsBar)' }
    ], [m]);

    const expensePercent = ((m.cost / m.rev) * 100).toFixed(1);

    return (
        <section className="roi-section container" id="roi">
            <div className="roi-header">
                <span className="roi-badge-top"><Rocket size={18} strokeWidth={2.5} /> Simulador de Escala B2B</span>
                <h2 className="gradient-text">Proyecta el Potencial de tu Negocio</h2>
                <p>Mueve los controles inferiores y descubre cómo responde tu negocio financieramente usando TotalGains.</p>
            </div>

            <div className="roi-dashboard-grid">

                {/* FILA SUPERIOR: GRAFICOS */}
                <div className="roi-charts-row">

                    {/* Panel Izquierdo: Lineas */}
                    <div className="impact-card glass graph-card">
                        <h4 className="impact-title">
                            <div className="title-icon-capsule">
                                <TrendingUp size={20} color="#34d399" strokeWidth={2.5} />
                            </div>
                            Proyección de Escalabilidad
                        </h4>

                        <div className="custom-chart-legend mb-3 mt-1">
                            <span className="legend-item"><span className="legend-dot white"></span> Facturación Actual</span>
                            <span className="legend-item"><span className="legend-dot green"></span> Facturación Posible</span>
                            <span className="legend-item"><span className="legend-line red"></span> Coste Tool B2B</span>
                        </div>

                        <div className="recharts-wrapper-div">
                            <ResponsiveContainer width="100%" height={250}>
                                <ComposedChart data={graphData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis dataKey="clientes" stroke="rgba(255,255,255,0.3)" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }} minTickGap={20} />
                                    <YAxis domain={[0, 'auto']} stroke="rgba(255,255,255,0.3)" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }} tickFormatter={(val) => `${val / 1000}k€`} width={55} />
                                    <RechartsTooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1, strokeDasharray: '4 4' }} />
                                    {/* Coste as dashed line */}
                                    <Line type="monotone" dataKey="Coste" stroke="#ef4444" strokeWidth={3} strokeDasharray="6 6" dot={false} isAnimationActive={false} />

                                    {/* Actual as white area */}
                                    <Area type="monotone" dataKey="Actual" fill="url(#colorActual)" stroke="rgba(255,255,255,0.8)" strokeWidth={3} />

                                    {/* Potencial as bright green area */}
                                    <Area type="monotone" dataKey="Potencial" fill="url(#colorPotencial)" stroke="#10b981" strokeWidth={3} />

                                    <defs>
                                        <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorPotencial" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="revenue-summary-bottom mt-2">
                            <div className="revenue-extra-box">
                                <span className="extra-lbl">Margen de Mejora Disponible (Con {clients} Atletas)</span>
                                <span className="extra-val">+{formatN(m.potRev - m.rev)} € / mes</span>
                            </div>
                        </div>
                    </div>

                    {/* Panel Derecho: Tiempo (Columnas) */}
                    <div className="impact-card glass graph-card time-card">
                        <div className="card-header pb-2">
                            <h4 className="impact-title">
                                <div className="title-icon-capsule">
                                    <Clock size={20} color="#60a5fa" strokeWidth={2.5} />
                                </div>
                                El Control de Tu Tiempo
                            </h4>
                            <span className="impact-badge-green">Ahorras {m.savPct}% de tiempo</span>
                        </div>
                        <p className="impact-desc">Comparativa de horas mensuales para gestionar a tus <strong>{clients} atletas</strong> bajo la tecnología de TotalGains.</p>

                        <div className="recharts-wrapper-div">
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={timeData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: "bold" }} />
                                    <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }} width={40} />
                                    <RechartsTooltip content={<TimeTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                                    <Bar dataKey="horas" radius={[8, 8, 0, 0]} maxBarSize={70}>
                                        {timeData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                    </Bar>
                                    <defs>
                                        <linearGradient id="colorManuales" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#ef4444" />
                                            <stop offset="100%" stopColor="#991b1b" />
                                        </linearGradient>
                                        <linearGradient id="colorTotalGainsBar" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#10b981" />
                                            <stop offset="100%" stopColor="#047857" />
                                        </linearGradient>
                                    </defs>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="impact-result mt-3 text-center">
                            Recuperas <strong className="green-text">{m.sav.toFixed(1)} horas libres</strong> cada mes.
                        </div>
                    </div>

                </div>

                {/* FILA INFERIOR: CONTROLES HORIZONTALES */}
                <div className="roi-controls-row glass mt-3">
                    <div className="roi-input-column">
                        <div className="slider-header">
                            <span className="slider-label">Volumen de Clientes</span>
                            <span className="slider-value-badge">{clients} Atletas</span>
                        </div>
                        <input
                            type="range" min="5" max="200" step="1"
                            value={clients} onChange={(e) => setClients(parseInt(e.target.value))}
                            className="roi-range"
                            style={{ background: `linear-gradient(to right, #10b981 ${((clients - 5) / 195) * 100}%, rgba(255,255,255,0.05) ${((clients - 5) / 195) * 100}%)` }}
                        />
                    </div>

                    <div className="roi-input-column mt-mobile">
                        <div className="slider-header">
                            <span className="slider-label">Tarifa Media / Mes</span>
                            <span className="slider-value-badge">{price} €</span>
                        </div>
                        <input
                            type="range" min="30" max="300" step="5"
                            value={price} onChange={(e) => setPrice(parseInt(e.target.value))}
                            className="roi-range"
                            style={{ background: `linear-gradient(to right, #10b981 ${((price - 30) / 270) * 100}%, rgba(255,255,255,0.05) ${((price - 30) / 270) * 100}%)` }}
                        />
                    </div>

                    <div className="roi-stats-column mt-mobile">
                        <div className="stat-line">
                            <span className="stat-name">Facturación Base Actual:</span>
                            <span className="stat-amount highlighted">{formatN(m.rev)} €</span>
                        </div>
                        <div className="stat-line mb-1">
                            <span className="stat-name">Gasto Software ({m.planName}):</span>
                            <span className="stat-amount muted">{m.cost.toString().replace('.', ',')} €</span>
                        </div>
                        <div className="stat-line pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <span className="stat-name">Métrica de Gastos B2B:</span>
                            <span className="premium-badge-green">ROI Sano: {expensePercent}%</span>
                        </div>
                        <p className="roi-tax-note flex items-center gap-2"><Lightbulb size={16} className="text-yellow-400 min-w-4" /> El margen y licencia del software es 100% deducible fiscalmente.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RoiCalculator;
