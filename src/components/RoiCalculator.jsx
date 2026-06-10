"use client";

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Rocket, TrendingUp, Clock, Users, Euro, Lightbulb, CheckCircle2 } from 'lucide-react';
import './RoiCalculator.css';

// ─── Calculation Engine ──────────────────────────────────────────────────────
function getMetrics(clients, price) {
    const c = clients === 0 ? 1 : clients;
    const rev = c * price;
    let cost = 29.90, planName = 'Starter';
    if (c > 25 && c <= 100) { cost = 89.90; planName = 'Pro'; }
    else if (c > 100) { cost = 149.90; planName = 'Unlimited'; }
    const noTg = c * 2.5;
    let savPct = 0;
    if (c <= 20) savPct = 10 + ((c - 5) / 15) * 20;
    else if (c <= 100) savPct = 30 + ((c - 20) / 80) * 60;
    else savPct = 90 + ((c - 100) / 100) * 5;
    const savPctReal = Math.min(Math.max(savPct, 0), 100) / 100;
    const sav = noTg * savPctReal;
    const withTg = noTg - sav;
    const hPerClient = withTg / c;
    const extraC = hPerClient > 0 ? Math.floor(sav / hPerClient) : Math.floor(sav / 0.5);
    const potRev = rev + (extraC * price);
    return { c, rev, cost, planName, noTg, withTg, sav, extraC, potRev, savPct: Math.round(savPctReal * 100) };
}

function formatN(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// ─── SVG: Scalability Chart ──────────────────────────────────────────────────
function renderBigChart(svg, clients, price, initRef) {
    if (!svg) return;
    const W = 640, H = 260, P = { t: 16, r: 12, b: 28, l: 50 };
    const plotW = W - P.l - P.r, plotH = H - P.t - P.b;

    const data = [];
    for (let x = 5; x <= 200; x += 15) {
        const mx = getMetrics(x, price);
        data.push({ c: x, actual: mx.rev, pot: mx.potRev, cost: mx.cost });
    }
    const maxPot = Math.max(...data.map(d => d.pot), 1);
    const niceMax = Math.ceil(maxPot / 20000) * 20000 || 20000;
    const xScale = i => P.l + (i / (data.length - 1)) * plotW;
    const yScale = v => P.t + plotH - (v / niceMax) * plotH;

    const buildArea = key => {
        const top = data.map((d, i) => `${xScale(i)},${yScale(d[key])}`).join(' L');
        return `M${xScale(0)},${yScale(0)} L${xScale(0)},${yScale(data[0][key])} L${top} L${xScale(data.length - 1)},${yScale(0)} Z`;
    };
    const buildLine = key => data.map((d, i) => `${i === 0 ? 'M' : 'L'}${xScale(i)},${yScale(d[key])}`).join(' ');
    const costLine = data.map((d, i) => `${i === 0 ? 'M' : 'L'}${xScale(i)},${yScale(d.cost)}`).join(' ');

    const idx = Math.round((clients - 5) / 15);
    const mIdx = Math.max(0, Math.min(data.length - 1, idx));
    const markerX = xScale(mIdx), markerY = yScale(data[mIdx].pot);

    if (!initRef.current) {
        let gridLines = '', xLabels = '';
        for (let i = 0; i <= 4; i++) {
            const y = P.t + (plotH * i / 4);
            gridLines += `<line x1="${P.l}" x2="${W - P.r}" y1="${y}" y2="${y}" stroke="rgba(255,255,255,.05)" stroke-dasharray="3 3"/>`;
        }
        for (let i = 0; i < data.length; i += 3) {
            xLabels += `<text x="${xScale(i)}" y="${H - P.b + 16}" text-anchor="middle">${data[i].c}</text>`;
        }
        svg.innerHTML = `
            <defs>
                <linearGradient id="roiGPot" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#34d399" stop-opacity=".35"/>
                    <stop offset="100%" stop-color="#34d399" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="roiGAct" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity=".12"/>
                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
                </linearGradient>
            </defs>
            ${gridLines}
            <g class="roi-y-labels"></g>
            <path class="area-pot" d="${buildArea('pot')}" fill="url(#roiGPot)"/>
            <path class="area-act" d="${buildArea('actual')}" fill="url(#roiGAct)"/>
            <path class="line-pot" d="${buildLine('pot')}" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linejoin="round"/>
            <path class="line-act" d="${buildLine('actual')}" fill="none" stroke="rgba(255,255,255,.65)" stroke-width="2" stroke-linejoin="round"/>
            <path class="line-cost" d="${costLine}" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="5 4" stroke-linejoin="round"/>
            ${xLabels}
            <line class="roi-marker-line" x1="${markerX}" x2="${markerX}" y1="${P.t}" y2="${H - P.b}" stroke="rgba(52,211,153,.3)" stroke-dasharray="3 3"/>
            <circle class="roi-marker" cx="${markerX}" cy="${markerY}" r="5" fill="#34d399" stroke="#0F172A" stroke-width="2"/>
        `;
        initRef.current = true;
    } else {
        svg.querySelector('.area-pot')?.setAttribute('d', buildArea('pot'));
        svg.querySelector('.area-act')?.setAttribute('d', buildArea('actual'));
        svg.querySelector('.line-pot')?.setAttribute('d', buildLine('pot'));
        svg.querySelector('.line-act')?.setAttribute('d', buildLine('actual'));
        svg.querySelector('.line-cost')?.setAttribute('d', costLine);
        const ml = svg.querySelector('.roi-marker-line');
        if (ml) { ml.setAttribute('x1', markerX); ml.setAttribute('x2', markerX); }
        const mk = svg.querySelector('.roi-marker');
        if (mk) { mk.setAttribute('cx', markerX); mk.setAttribute('cy', markerY); }
    }

    const yLbl = svg.querySelector('.roi-y-labels');
    if (yLbl) {
        let html = '';
        for (let i = 0; i <= 4; i++) {
            const y = P.t + (plotH * i / 4);
            const v = niceMax * (1 - i / 4);
            html += `<text x="${P.l - 6}" y="${y + 3}" text-anchor="end">${Math.round(v / 1000)}K€</text>`;
        }
        yLbl.innerHTML = html;
    }
}

// ─── SVG: Bars Chart ─────────────────────────────────────────────────────────
function renderBarsChart(svg, m, initRef) {
    if (!svg) return;
    const W = 400, H = 200, P = { t: 20, r: 20, b: 36, l: 34 };
    const plotW = W - P.l - P.r, plotH = H - P.t - P.b;
    const maxVal = Math.max(m.noTg, m.withTg, 1);
    const niceMax = Math.ceil(maxVal / 25) * 25 || 25;
    const yScale = v => P.t + plotH - (v / niceMax) * plotH;
    const barW = 60;
    const x1 = P.l + plotW * 0.28 - barW / 2;
    const x2 = P.l + plotW * 0.72 - barW / 2;
    const y1 = yScale(m.noTg), y2 = yScale(m.withTg);
    const h1 = (P.t + plotH) - y1, h2 = (P.t + plotH) - y2;

    if (!initRef.current) {
        svg.innerHTML = `
            <defs>
                <linearGradient id="roiGRed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#991b1b"/>
                </linearGradient>
                <linearGradient id="roiGGreen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#047857"/>
                </linearGradient>
            </defs>
            <g class="roi-grid-g"></g>
            <g class="roi-y-labels-g"></g>
            <rect class="roi-bar-red" x="${x1}" y="${y1}" width="${barW}" height="${h1}" rx="8" fill="url(#roiGRed)"/>
            <text class="roi-lbl-red" x="${x1 + barW / 2}" y="${y1 - 6}" text-anchor="middle" fill="#fca5a5" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">${m.noTg.toFixed(0)}h</text>
            <rect class="roi-bar-green" x="${x2}" y="${y2}" width="${barW}" height="${h2}" rx="8" fill="url(#roiGGreen)"/>
            <text class="roi-lbl-green" x="${x2 + barW / 2}" y="${y2 - 6}" text-anchor="middle" fill="#34d399" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">${m.withTg.toFixed(0)}h</text>
            <text x="${x1 + barW / 2}" y="${H - P.b + 18}" text-anchor="middle" fill="rgba(255,255,255,.7)" font-size="11" font-family="DM Sans,sans-serif">Manuales</text>
            <text x="${x2 + barW / 2}" y="${H - P.b + 18}" text-anchor="middle" fill="rgba(255,255,255,.7)" font-size="11" font-family="DM Sans,sans-serif">TotalGains</text>
        `;
        initRef.current = true;
    } else {
        const br = svg.querySelector('.roi-bar-red'), bg = svg.querySelector('.roi-bar-green');
        const lr = svg.querySelector('.roi-lbl-red'), lg = svg.querySelector('.roi-lbl-green');
        if (br) { br.setAttribute('y', y1); br.setAttribute('height', h1); }
        if (bg) { bg.setAttribute('y', y2); bg.setAttribute('height', h2); }
        if (lr) { lr.setAttribute('y', y1 - 6); lr.textContent = m.noTg.toFixed(0) + 'h'; }
        if (lg) { lg.setAttribute('y', y2 - 6); lg.textContent = m.withTg.toFixed(0) + 'h'; }
    }

    let grid = '', ylbl = '';
    for (let i = 0; i <= 4; i++) {
        const y = P.t + (plotH * i / 4);
        grid += `<line x1="${P.l}" x2="${W - P.r}" y1="${y}" y2="${y}" stroke="rgba(255,255,255,.05)" stroke-dasharray="3 3"/>`;
        ylbl += `<text x="${P.l - 6}" y="${y + 3}" text-anchor="end" font-size="10" font-family="DM Sans,sans-serif" fill="rgba(255,255,255,.4)">${Math.round(niceMax * (1 - i / 4))}</text>`;
    }
    const gg = svg.querySelector('.roi-grid-g');
    const yg = svg.querySelector('.roi-y-labels-g');
    if (gg) gg.innerHTML = grid;
    if (yg) yg.innerHTML = ylbl;
}

// ─── Component ───────────────────────────────────────────────────────────────
const RoiCalculator = () => {
    const [clients, setClients] = useState(40);
    const [price, setPrice] = useState(60);

    const m = useMemo(() => getMetrics(clients, price), [clients, price]);

    const sectionRef = useRef(null);
    const bigChartRef = useRef(null);
    const barsChartRef = useRef(null);
    const bigChartInitRef = useRef(false);
    const barsInitRef = useRef(false);
    const clientsRangeRef = useRef(null);
    const priceRangeRef = useRef(null);
    const clientsPillRef = useRef(null);
    const pricePillRef = useRef(null);
    const counterEls = useRef({});
    const counterStatesRef = useRef({});

    // Count-up
    const animateCounter = useCallback((key, target, duration = 900, formatter = v => formatN(Math.round(v))) => {
        const el = counterEls.current[key];
        if (!el) return;
        const states = counterStatesRef.current;
        const from = states[key]?.current ?? 0;
        const start = Date.now();
        const snap = target;
        states[key] = { current: from, target: snap, start };
        const easeOut = t => 1 - Math.pow(1 - t, 3);
        function tick() {
            const st = states[key];
            if (!st || st.target !== snap) return;
            const p = Math.min(1, (Date.now() - st.start) / duration);
            el.textContent = formatter(from + (snap - from) * easeOut(p));
            if (p < 1) requestAnimationFrame(tick);
            else { states[key].current = snap; el.textContent = formatter(snap); }
        }
        requestAnimationFrame(tick);
    }, []);

    // Slider fill
    function paintRange(el, min, max, val) {
        if (!el) return;
        const pct = ((val - min) / (max - min)) * 100;
        el.style.background = `linear-gradient(to right,#10b981 0%,#34d399 ${pct}%,rgba(255,255,255,.08) ${pct}%)`;
    }

    function pulse(el) {
        if (!el) return;
        el.classList.remove('pulse');
        void el.offsetWidth;
        el.classList.add('pulse');
        setTimeout(() => el.classList.remove('pulse'), 200);
    }

    // Charts + counters on metrics change
    useEffect(() => {
        renderBigChart(bigChartRef.current, clients, price, bigChartInitRef);
        renderBarsChart(barsChartRef.current, m, barsInitRef);
        animateCounter('margin', m.potRev - m.rev);
        animateCounter('sav2', m.sav, 900, v => v.toFixed(1));
    }, [m, clients, price, animateCounter]);

    // Initial slider paint
    useEffect(() => {
        paintRange(clientsRangeRef.current, 5, 200, 40);
        paintRange(priceRangeRef.current, 30, 300, 60);
    }, []);

    // IntersectionObserver fade-up
    useEffect(() => {
        const container = sectionRef.current;
        if (!container) return;
        const els = container.querySelectorAll('.fade-up');
        const io = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
            });
        }, { threshold: 0.15 });
        els.forEach(el => io.observe(el));
        const fallback = setTimeout(() => els.forEach(el => el.classList.add('in')), 1000);
        return () => { io.disconnect(); clearTimeout(fallback); };
    }, []);

    function handleMouseMove(e) {
        const card = e.currentTarget;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    }

    function handleClients(val) {
        setClients(val);
        paintRange(clientsRangeRef.current, 5, 200, val);
        pulse(clientsPillRef.current);
    }

    function handlePrice(val) {
        setPrice(val);
        paintRange(priceRangeRef.current, 30, 300, val);
        pulse(pricePillRef.current);
    }

    const roiPct = ((m.cost / m.rev) * 100).toFixed(1);

    return (
        <section className="roi" id="roi" ref={sectionRef}>
            {/* Header */}
            <div className="roi-header">
                <div className="roi-badge"><Rocket size={14} /> Simulador de Escala B2B</div>
                <h2>Proyecta el <span className="grad">potencial</span> de tu negocio</h2>
                <p>Mueve los sliders y descubre cómo tu facturación, tiempo y margen cambian con TotalGains.</p>
            </div>

            {/* Hero metric */}
            <div className="hero-metric fade-up" onMouseMove={handleMouseMove}>
                <div className="hero-label">Margen de Mejora Disponible</div>
                <div className="hero-number">
                    +<span ref={el => { counterEls.current.margin = el; }}>0</span>
                    <span className="unit">€ / mes</span>
                </div>
                <div className="hero-sub">
                    Con <b style={{ color: '#fff' }}>{clients}</b> atletas a <b style={{ color: '#fff' }}>{price}€</b>/mes,
                    esto es lo que podrías añadir a tu facturación automatizando con TotalGains.
                </div>
            </div>

            {/* Charts row */}
            <div className="charts-row">
                <div className="chart-card fade-up d1" onMouseMove={handleMouseMove}>
                    <div className="chart-top">
                        <div className="chart-title">
                            <span className="ti"><TrendingUp size={18} /></span>
                            Proyección de escalabilidad
                        </div>
                    </div>
                    <div className="chart-legend">
                        <span><span className="dot" style={{ background: 'rgba(255,255,255,.6)' }} />Facturación actual</span>
                        <span><span className="dot" style={{ background: '#34d399' }} />Facturación posible</span>
                        <span><span className="cline" style={{ background: '#ef4444' }} />Coste software</span>
                    </div>
                    <svg
                        className="svg-chart"
                        ref={bigChartRef}
                        viewBox="0 0 640 260"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    />
                </div>

                <div className="chart-card fade-up d2" onMouseMove={handleMouseMove}>
                    <div className="chart-top">
                        <div className="chart-title">
                            <span className="ti blue"><Clock size={18} /></span>
                            El control de tu tiempo
                        </div>
                        <div className="chart-pill">Ahorras {m.savPct}%</div>
                    </div>
                    <div className="chart-legend">
                        <span style={{ color: 'var(--text-secondary)' }}>
                            Horas mensuales para gestionar a tus <b style={{ color: '#fff' }}>{clients}</b> atletas
                        </span>
                    </div>
                    <svg
                        className="bars-chart"
                        ref={barsChartRef}
                        viewBox="0 0 400 200"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                    />
                    <div className="chart-note">
                        Recuperas <b><span ref={el => { counterEls.current.sav2 = el; }}>0</span> horas libres</b> cada mes.
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="controls fade-up d3" onMouseMove={handleMouseMove}>
                <div className="ctrl-left">
                    <div className="ctrl-heading">Ajusta tu escenario</div>

                    <div className="slider-block">
                        <div className="slider-head">
                            <span className="slider-lbl">
                                <span className="ico"><Users size={16} /></span>
                                <span>Volumen de clientes<span className="hint">Atletas activos al mes</span></span>
                            </span>
                            <span className="slider-val" ref={clientsPillRef}>
                                <span>{clients}</span><span className="u"> atletas</span>
                            </span>
                        </div>
                        <div className="range-wrap">
                            <div className="range-ticks">
                                {Array.from({ length: 9 }, (_, i) => <span key={i} />)}
                            </div>
                            <input
                                type="range" className="range" min="5" max="200" step="1"
                                value={clients} ref={clientsRangeRef}
                                onChange={e => handleClients(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="range-labels">
                            <span>5</span><span>50</span><span>100</span><span>150</span><span>200</span>
                        </div>
                    </div>

                    <div className="slider-block">
                        <div className="slider-head">
                            <span className="slider-lbl">
                                <span className="ico"><Euro size={16} /></span>
                                <span>Tarifa media<span className="hint">Precio mensual por atleta</span></span>
                            </span>
                            <span className="slider-val" ref={pricePillRef}>
                                <span>{price}</span><span className="u"> €/mes</span>
                            </span>
                        </div>
                        <div className="range-wrap">
                            <div className="range-ticks">
                                {Array.from({ length: 9 }, (_, i) => <span key={i} />)}
                            </div>
                            <input
                                type="range" className="range" min="30" max="300" step="5"
                                value={price} ref={priceRangeRef}
                                onChange={e => handlePrice(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="range-labels">
                            <span>30€</span><span>100€</span><span>165€</span><span>230€</span><span>300€</span>
                        </div>
                    </div>
                </div>

                <div className="ctrl-right">
                    <div className="ctrl-heading blue-head">Resumen financiero</div>
                    <div className="summary">
                        <div className="sum-row">
                            <span className="n"><span className="dot" />Facturación base actual</span>
                            <span className="v">{formatN(m.rev)}<span className="cur"> €</span></span>
                        </div>
                        <div className="sum-row">
                            <span className="n red"><span className="dot" />Gasto software <small style={{ opacity: .7 }}>({m.planName})</small></span>
                            <span className="v">{m.cost.toFixed(2).replace('.', ',')}<span className="cur"> €</span></span>
                        </div>
                        <div className="sum-row hl">
                            <span className="n">Gasto sobre facturación</span>
                            <span className="roi-pill"><CheckCircle2 size={12} />ROI Sano · {roiPct}%</span>
                        </div>
                    </div>
                    <div className="tax-note">
                        <Lightbulb size={16} />
                        <span>La licencia del software es <b>100% deducible fiscalmente</b> como gasto de empresa.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoiCalculator;
