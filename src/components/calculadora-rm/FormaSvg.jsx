/* Pinta en SVG las formas de geometria.js (las usan el escenario animado y el dibujo fijo de /herramientas/).
   Sin estado ni efectos: vale en páginas del servidor y en componentes del cliente. */
import { DEGRADADOS } from "./geometria";

export const n1 = (x) => Math.round(x * 10) / 10;

const pintura = (c) => (typeof c === "string" && c.startsWith("grad:") ? `url(#tg-rm-${c.slice(5)})` : c);
const trazo = (d) => d.map(([cmd, ...ps]) => cmd + ps.map((q) => `${n1(q.x)} ${n1(q.y)}`).join(" ")).join(" ");

export function Forma({ f }) {
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


/* Degradados que usan las formas («grad:piel» → url(#tg-rm-piel)). Uno por página: los id se repetirían. */
export function DefsDegradados() {
    return Object.entries(DEGRADADOS).map(([id, [c1, c2]]) => (
        <linearGradient key={id} id={`tg-rm-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
        </linearGradient>
    ));
}
