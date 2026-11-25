"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COLOR, DEGRADADOS, VISTA, formas, plataforma, trayectoria, segundosSubida } from "./geometria";

/* Escenario animado de la calculadora de RM: el atleta de perfil haciendo el ejercicio con los discos del peso elegido,
   el recorrido de la barra punteado y, debajo (BarraDeFrente), la barra de frente con los discos de cada lado.
   Se para cuando no se ve (IntersectionObserver) y con «reducir movimiento». */

/* Fase del movimiento (0 abajo, 1 arriba): baja en 1,1 s, pausa, sube según el % y pausa arriba.
   window.__tgRmFase (número) congela la fase: lo usa la prueba con capturas. */
function useFase(pct, parado) {
    const [t, setT] = useState(1);
    useEffect(() => {
        if (parado) return undefined;
        let id;
        let inicio = null;
        const bajar = 1.1;
        const pausa = 0.45;
        const subir = segundosSubida(pct);
        const ciclo = bajar + pausa + subir + pausa;
        const suave = (x) => 0.5 - 0.5 * Math.cos(Math.PI * x);
        const paso = (ahora) => {
            const fija = typeof window !== "undefined" ? window.__tgRmFase : undefined;
            if (typeof fija === "number") setT(fija);
            else {
                if (inicio === null) inicio = ahora;
                const s = ((ahora - inicio) / 1000) % ciclo;
                if (s < bajar) setT(1 - suave(s / bajar));
                else if (s < bajar + pausa) setT(0);
                else if (s < bajar + pausa + subir) setT(suave((s - bajar - pausa) / subir));
                else setT(1);
            }
            id = requestAnimationFrame(paso);
        };
        id = requestAnimationFrame(paso);
        return () => cancelAnimationFrame(id);
    }, [pct, parado]);
    return parado ? 1 : t;
}

const n1 = (x) => Math.round(x * 10) / 10;

const pintura = (c) => (typeof c === "string" && c.startsWith("grad:") ? `url(#tg-rm-${c.slice(5)})` : c);
const trazo = (d) => d.map(([cmd, ...ps]) => cmd + ps.map((q) => `${n1(q.x)} ${n1(q.y)}`).join(" ")).join(" ");

function Forma({ f }) {
    const comun = { fill: pintura(f.fill), stroke: f.stroke, strokeWidth: f.sw, opacity: f.opacity };
    if (f.k === "path") return <path d={trazo(f.d)} strokeLinecap="round" strokeLinejoin="round" {...comun} />;
    if (f.k === "poly") return <polygon points={f.pts.map((q) => `${n1(q.x)},${n1(q.y)}`).join(" ")} {...comun} />;
    if (f.k === "circle") return <circle cx={n1(f.c.x)} cy={n1(f.c.y)} r={n1(f.r)} {...comun} />;
    if (f.k === "text") {
        return (
            <text x={n1(f.p.x)} y={n1(f.p.y)} fontSize={n1(f.size)} fontWeight="800" fill={f.fill} textAnchor="middle" dominantBaseline="central">
                {f.s}
            </text>
        );
    }
    return <rect x={n1(f.x)} y={n1(f.y)} width={n1(f.w)} height={n1(f.h)} rx={f.rx} {...comun} />;
}

export function Atleta({ ej, t, discos }) {
    const lista = formas(ej, t, discos);
    return (
        <g>
            {lista.map((f, i) => (
                <Forma key={i} f={f} />
            ))}
        </g>
    );
}

export function Escena({ ej, pct, discos, quieto, etiqueta, children }) {
    const caja = useRef(null);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const el = caja.current;
        if (!el || typeof IntersectionObserver === "undefined") return undefined;
        const io = new IntersectionObserver(([en]) => setVisible(en.isIntersecting), { rootMargin: "120px" });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    const t = useFase(pct, quieto || !visible);
    const camino = useMemo(() => trayectoria(ej).map((q) => `${n1(q.x)},${n1(q.y)}`).join(" "), [ej]);
    const { x, y, w, h, suelo } = VISTA;

    return (
        <div className="calc-rm__escena" ref={caja}>
            <svg viewBox={`${x} ${y} ${w} ${h}`} className="calc-rm__svg" role="img" aria-label={etiqueta}>
                <defs>
                    {Object.entries(DEGRADADOS).map(([id, [c1, c2]]) => (
                        <linearGradient key={id} id={`tg-rm-${id}`} x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor={c1} />
                            <stop offset="100%" stopColor={c2} />
                        </linearGradient>
                    ))}
                </defs>
                <ellipse cx="210" cy={suelo + 1} rx="150" ry="6" fill="rgba(0,0,0,0.4)" />
                {plataforma().map((f, i) => (
                    <Forma key={i} f={f} />
                ))}
                <AnimatePresence initial={false}>
                    <motion.g key={ej} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                        <polyline points={camino} fill="none" stroke={COLOR.camino} strokeWidth="1.6" strokeDasharray="2 5" strokeLinecap="round" opacity="0.6" />
                        <Atleta ej={ej} t={t} discos={discos} />
                    </motion.g>
                </AnimatePresence>
            </svg>
            {children}
        </div>
    );
}

/* La barra de frente (2,2 m) con los discos de cada lado, del de dentro al de fuera. */
export function BarraDeFrente({ discos, barra }) {
    const centroX = 210;
    const inicio = 118; // del centro a donde empiezan los discos
    const hueco = 86; // largo del manguito
    const altoMax = 74;
    const anchos = discos.map((d) => 9 + 9 * d.grueso);
    const total = anchos.reduce((s, an) => s + an + 1.5, 0);
    const k = total > hueco ? hueco / total : 1;
    let acum = 0;
    const lado = discos.map((d, i) => {
        const an = anchos[i] * k;
        const pos = acum;
        acum += an + 1.5 * k;
        return { ...d, an, pos };
    });
    return (
        <svg viewBox="0 0 420 110" className="calc-rm__barra" role="img" aria-label={`Barra de ${barra} kg con ${discos.length} discos por lado`}>
            <rect x="14" y="51" width="392" height="8" rx="4" fill="#cbd5e1" />
            <rect x={centroX - 70} y="49" width="140" height="12" rx="3" fill="#94a3b8" />
            <rect x={centroX - inicio + 4} y="43" width="8" height="24" rx="2" fill="#64748b" />
            <rect x={centroX + inicio - 12} y="43" width="8" height="24" rx="2" fill="#64748b" />
            {[-1, 1].map((s) => (
                <g key={s}>
                    <AnimatePresence initial={false}>
                        {lado.map((d, i) => {
                            const alto = altoMax * d.alto;
                            const px = s > 0 ? centroX + inicio + d.pos : centroX - inicio - d.pos - d.an;
                            return (
                                <motion.g
                                    key={`${i}-${d.kg}`}
                                    initial={{ opacity: 0, x: s * 36 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: s * 36 }}
                                    transition={{ type: "spring", stiffness: 380, damping: 28, delay: i * 0.04 }}
                                >
                                    <rect x={px} y={55 - alto / 2} width={d.an} height={alto} rx="3" fill={d.color} stroke="#0f172a" strokeWidth="1.5" />
                                </motion.g>
                            );
                        })}
                    </AnimatePresence>
                </g>
            ))}
        </svg>
    );
}
