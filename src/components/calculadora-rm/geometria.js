/* Geometría de la calculadora de RM: discos, cómo se carga la barra, las poses de cada ejercicio y el dibujo del atleta.
   Lo usan el escenario animado (Escena.jsx) y la imagen para compartir (imagen.js): los dos pintan la misma lista de formas.
   Escenario: viewBox 35 -50 350 300, suelo en y = 232. Ángulo del tronco en grados desde la vertical (positivo = inclinado
   hacia delante). Rodilla y codo salen de la cinemática inversa, así las piezas no cambian de largo al moverse.
   El cuerpo se dibuja con perfiles anatómicos (cuádriceps, gemelo, pecho, glúteo, bíceps…) a lo largo de cada hueso:
   el lado «de delante» de cada pieza sale de hacia dónde se dobla la articulación (la rodilla sale hacia delante y el
   codo hacia atrás), así funciona igual de pie, tumbado en el banco o en el hip thrust. */

export const VISTA = { x: 35, y: -50, w: 350, h: 300, suelo: 232 };

export const L = { tibia: 54, muslo: 56, tronco: 64, brazo: 38, antebrazo: 36 };

// Discos de competición: 25, 20, 15 y 10 kg miden lo mismo de alto (45 cm) y cambian de grosor.
export const DISCOS = [
    { kg: 25, color: "#dc2626", alto: 1, grueso: 1.0 },
    { kg: 20, color: "#2563eb", alto: 1, grueso: 0.85 },
    { kg: 15, color: "#eab308", alto: 1, grueso: 0.7 },
    { kg: 10, color: "#16a34a", alto: 1, grueso: 0.55 },
    { kg: 5, color: "#f1f5f9", alto: 0.62, grueso: 0.42, claro: true },
    { kg: 2.5, color: "#ef4444", alto: 0.5, grueso: 0.32 },
    { kg: 1.25, color: "#94a3b8", alto: 0.42, grueso: 0.26, claro: true },
];

/* Discos por lado para acercarse a `total` con una barra de `barra` kg (de mayor a menor).
   Primero se redondea cada lado al múltiplo de 1,25 kg más cercano y luego se reparte de mayor a menor:
   así 39,6 kg por lado son 25 + 15 (2 discos) y no 25 + 10 + 2,5 + 1,25 + 1,25. */
export function cargar(total, barra) {
    let lado = Math.round((total - barra) / 2 / 1.25) * 1.25;
    if (!(lado > 0)) return { discos: [], real: barra };
    const discos = [];
    for (const d of DISCOS) {
        while (lado >= d.kg - 1e-9) {
            discos.push(d);
            lado -= d.kg;
        }
    }
    return { discos, real: barra + 2 * discos.reduce((s, d) => s + d.kg, 0) };
}

/* Peso que se puede poner de verdad: con barra y discos; por debajo de la barra, a 0,5 kg (mancuernas o barra ligera). */
export function pesoCargable(total, barra) {
    if (total < barra) return Math.round(total * 2) / 2;
    return cargar(total, barra).real;
}

export const radioDisco = (d) => (d ? 27 * d.alto : 9);

// Colores sueltos y degradados (luz arriba a la izquierda). «grad:nombre» en una forma = degradado de esta tabla.
export const COLOR = {
    pelo: "#2a1b12",
    oreja: "#c68a60",
    ojo: "#1f2937",
    calcetin: "#f1f5f9",
    calcetinAtras: "#b6c0cf",
    zapatilla: "#f8fafc",
    zapatillaAtras: "#c3cad6",
    suela: "#0f172a",
    franja: "#8b5cf6",
    cinturon: "#111827",
    hebilla: "#cbd5e1",
    banco: "#334155",
    bancoTapiz: "#1e293b",
    pata: "#475569",
    goma: "#1f2937",
    camino: "#22d3ee",
    contorno: "rgba(8,10,24,0.55)",
};

export const DEGRADADOS = {
    piel: ["#f6cfab", "#c4875c"],
    pielAtras: ["#c99168", "#93603c"],
    camiseta: ["#8b5cf6", "#5133cc"],
    camisetaAtras: ["#5133cc", "#38228f"],
    pantalon: ["#5a6d96", "#2b3859"],
    pantalonAtras: ["#2b3859", "#1a2340"],
    metal: ["#f8fafc", "#8a97ab"],
    madera: ["#c08a52", "#7d5129"],
};

export const EJERCICIOS = {
    sentadilla: {
        nombre: "Sentadilla",
        tobillo: { x: 200, y: 228 },
        abajo: { cadera: { x: 150, y: 172 }, tronco: 50 },
        arriba: { cadera: { x: 197, y: 119 }, tronco: 8 },
        // la barra va sobre los trapecios, detrás del cuello
        barra: (h) => mas(mas(h.hombro, h.u, -2), h.f, -14),
        mano: (_h, b) => ({ ...b }),
        codo: -1,
        cinturon: true,
        foto: 0.25,
        nota: "En la sentadilla las fórmulas funcionan bien con series de 3 a 8 repeticiones.",
    },
    banca: {
        nombre: "Press de banca",
        banco: "banca",
        frente: -1,
        tobillo: { x: 118, y: 228 },
        abajo: { cadera: { x: 176, y: 158 }, tronco: 90, mano: { x: 220, y: 136 } },
        arriba: { cadera: { x: 176, y: 158 }, tronco: 90, mano: { x: 240, y: 86 } },
        barra: (h) => ({ ...h.mano }),
        codo: -1,
        rodilla: -1,
        foto: 0.55,
        nota: "Es de los ejercicios donde más se han comprobado estas fórmulas: con 3 a 8 repeticiones, la estimación es fiable.",
    },
    muerto: {
        nombre: "Peso muerto",
        tobillo: { x: 196, y: 228 },
        abajo: { cadera: { x: 156, y: 162 }, tronco: 58 },
        arriba: { cadera: { x: 206, y: 119 }, tronco: -3 },
        barra: (h) => ({ x: h.hombro.x, y: h.hombro.y + L.brazo + L.antebrazo - 1 }),
        mano: (_h, b) => ({ ...b }),
        codo: 1,
        cinturon: true,
        foto: 1,
        nota: "En el peso muerto las fórmulas suelen quedarse cortas (LeSuer y colaboradores, 1997): toma el resultado como un mínimo.",
    },
    militar: {
        nombre: "Press militar",
        tobillo: { x: 200, y: 228 },
        abajo: { cadera: { x: 198, y: 119 }, tronco: 0, mano: { x: 213, y: 55 } },
        arriba: { cadera: { x: 198, y: 119 }, tronco: 0, mano: { x: 201, y: -16 } },
        barra: (h) => ({ ...h.mano }),
        codo: 1,
        foto: 1,
        nota: "Con series cortas la estimación es buena; con más de 8 repeticiones el hombro se cansa antes y el 1RM sale alto.",
    },
    hipthrust: {
        nombre: "Hip thrust",
        banco: "hip",
        frente: -1,
        tobillo: { x: 144, y: 228 },
        hombroFijo: { x: 258, y: 160 },
        abajo: { cadera: { x: 208, y: 200 } },
        arriba: { cadera: { x: 194, y: 160 } },
        barra: (h) => mas(h.cadera, h.f, 15),
        mano: (_h, b) => ({ x: b.x + 4, y: b.y + 2 }),
        codo: -1,
        rodilla: -1,
        foto: 1,
        nota: "Estas fórmulas se han probado poco en el hip thrust: úsalo como guía para elegir pesos, no como marca exacta.",
    },
};

const lerp = (a, b, t) => a + (b - a) * t;
const lerpP = (a, b, t) => ({ x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) });
const rad = (g) => (g * Math.PI) / 180;
function mas(a, v, k = 1) {
    return { x: a.x + v.x * k, y: a.y + v.y * k };
}
const unidad = (v) => {
    const l = Math.hypot(v.x, v.y) || 1;
    return { x: v.x / l, y: v.y / l };
};
const menos = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });
// Gira 90° (en pantalla, con la y hacia abajo): s = 1 en el sentido de los ángulos crecientes.
const giro = (v, s) => (s > 0 ? { x: -v.y, y: v.x } : { x: v.y, y: -v.x });

// Cinemática inversa de dos piezas (largos a y b): devuelve la articulación del medio; `signo` dice hacia dónde se dobla.
function ik(raiz, objetivo, a, b, signo) {
    const dx = objetivo.x - raiz.x;
    const dy = objetivo.y - raiz.y;
    const d = Math.min(Math.max(Math.hypot(dx, dy), Math.abs(a - b) + 0.01), a + b - 0.01);
    const base = Math.atan2(dy, dx);
    const alfa = Math.acos(Math.min(1, Math.max(-1, (a * a + d * d - b * b) / (2 * a * d))));
    const ang = base + signo * alfa;
    return { x: raiz.x + a * Math.cos(ang), y: raiz.y + a * Math.sin(ang) };
}

/* Pose del ejercicio en la fase t (0 = abajo, 1 = arriba). u = hacia la cabeza, f = hacia donde mira el pecho. */
export function pose(ej, t) {
    const e = EJERCICIOS[ej];
    const cadera = lerpP(e.abajo.cadera, e.arriba.cadera, t);
    let hombro;
    if (e.hombroFijo) hombro = { ...e.hombroFijo };
    else {
        const tr = rad(lerp(e.abajo.tronco, e.arriba.tronco, t));
        hombro = { x: cadera.x + L.tronco * Math.sin(tr), y: cadera.y - L.tronco * Math.cos(tr) };
    }
    const u = unidad(menos(hombro, cadera));
    const f0 = giro(u, 1);
    const f = (e.frente ?? 1) > 0 ? f0 : { x: -f0.x, y: -f0.y };
    const cabeza = mas(hombro, u, 19);
    const rodilla = ik(e.tobillo, cadera, L.tibia, L.muslo, e.rodilla ?? 1);
    let mano;
    let barra;
    if (e.abajo.mano) {
        mano = lerpP(e.abajo.mano, e.arriba.mano, t);
        barra = e.barra({ mano });
    } else {
        barra = e.barra({ hombro, cadera, u, f });
        mano = e.mano({ hombro, cadera, u, f }, barra);
    }
    const codo = ik(hombro, mano, L.brazo, L.antebrazo, e.codo);
    // delante de la pierna = hacia donde sale la rodilla; delante del brazo = al revés de hacia donde sale el codo
    const antPierna = unidad(giro(menos(cadera, e.tobillo), e.rodilla ?? 1));
    const g = unidad(giro(menos(mano, hombro), e.codo));
    const antBrazo = { x: -g.x, y: -g.y };
    return { tobillo: e.tobillo, rodilla, cadera, hombro, cabeza, codo, mano, barra, u, f, antPierna, antBrazo };
}

/* Recorrido de la barra (puntos de abajo a arriba), para dibujarlo como en las apps de velocidad. */
export function trayectoria(ej, n = 24) {
    const pts = [];
    for (let i = 0; i < n; i += 1) pts.push(pose(ej, i / (n - 1)).barra);
    return pts;
}

/* Segundos que tarda en subir: cuanto más cerca del 1RM, más despacio (relación carga-velocidad). */
export const segundosSubida = (pct) => lerp(0.9, 2.4, Math.min(1, Math.max(0, (pct - 50) / 50)));

/* ── Lo que se dibuja: una lista de formas en orden de pintado.
   { k: "path", d: [["M", p], ["C", c1, c2, p], ["L", p], ["Z"]], fill, stroke, sw, opacity }
   { k: "circle", c, r, … } · { k: "poly", pts, … } · { k: "rect", x, y, w, h, rx, … } · { k: "text", p, s, size, fill } ── */

/* Curva suave que pasa por los puntos (Catmull-Rom convertida a curvas de Bézier). */
export function curva(pts, cerrada = true) {
    const n = pts.length;
    const P = (i) => (cerrada ? pts[((i % n) + n) % n] : pts[Math.max(0, Math.min(n - 1, i))]);
    const d = [["M", pts[0]]];
    const tramos = cerrada ? n : n - 1;
    for (let i = 0; i < tramos; i += 1) {
        const p0 = P(i - 1);
        const p1 = P(i);
        const p2 = P(i + 1);
        const p3 = P(i + 2);
        d.push([
            "C",
            { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 },
            { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 },
            p2,
        ]);
    }
    if (cerrada) d.push(["Z"]);
    return d;
}

/* Sistema de una pieza: s a lo largo del hueso (en unidades del largo de referencia) y o hacia delante (+) o atrás (−). */
function marco(a, b, largo, ant) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const l = Math.hypot(dx, dy) || 1;
    const ux = dx / l;
    const uy = dy / l;
    let nx = -uy;
    let ny = ux;
    if (nx * ant.x + ny * ant.y < 0) {
        nx = -nx;
        ny = -ny;
    }
    const k = l / largo;
    return (s, o) => ({ x: a.x + ux * s * k + nx * o, y: a.y + uy * s * k + ny * o });
}

// contorno = perfil de delante (de arriba abajo del hueso) y perfil de detrás (de vuelta); en los de detrás, o es la distancia.
const contorno = (P, delante, detras) => [...delante.map(([s, o]) => P(s, o)), ...detras.map(([s, o]) => P(s, -o))];

function enPerfil(perfil, s) {
    for (let i = 0; i < perfil.length - 1; i += 1) {
        const [s1, o1] = perfil[i];
        const [s2, o2] = perfil[i + 1];
        if ((s >= s1 && s <= s2) || (s <= s1 && s >= s2)) return o1 + ((o2 - o1) * (s - s1)) / (s2 - s1 || 1);
    }
    return perfil[perfil.length - 1][1];
}

// Perfiles (s, distancia al hueso). Tronco: s = 0 en la cadera y 64 en el hombro.
const TRONCO_DELANTE = [[-7, 7], [2, 10.5], [12, 11.5], [24, 12], [36, 13.6], [47, 16], [56, 15.2], [63, 10.5], [68, 6]];
const TRONCO_DETRAS = [[68, 6.5], [62, 13], [53, 15], [41, 13.4], [29, 11.4], [18, 12.2], [8, 14], [-1, 13.4], [-8, 8.4]];
const MUSLO_DELANTE = [[-4, 10], [8, 12], [22, 11.5], [36, 9.5], [48, 7.2], [56, 6.4], [60, 5.5]];
const MUSLO_DETRAS = [[60, 5.5], [52, 6.6], [40, 8.5], [24, 10.5], [10, 11.5], [-4, 11]];
const TIBIA_DELANTE = [[-2, 6], [8, 5.6], [24, 4.8], [40, 3.9], [52, 3.4], [56, 3.4]];
const TIBIA_DETRAS = [[56, 3.6], [46, 4.2], [32, 6.2], [18, 8.4], [8, 7.6], [-2, 6.2]];
const BRAZO_DELANTE = [[-3, 7.5], [6, 7.2], [18, 6.4], [30, 5.2], [38, 4.4], [41, 4]];
const BRAZO_DETRAS = [[41, 4.2], [34, 5.2], [22, 6.6], [10, 7.6], [-3, 8]];
const ANTEBRAZO_DELANTE = [[-2, 4.6], [8, 5.4], [20, 4.4], [32, 3.3], [37, 3.1]];
const ANTEBRAZO_DETRAS = [[37, 3.2], [26, 3.8], [12, 4.8], [-2, 4.6]];

const tramo = (perfil, desde, hasta, extra) => {
    const dentro = perfil.filter(([s]) => s > Math.min(desde, hasta) && s < Math.max(desde, hasta)).sort((x, y) => x[0] - y[0]);
    const orden = desde < hasta ? dentro : dentro.reverse();
    return [[desde, enPerfil(perfil, desde) + extra], ...orden.map(([s, o]) => [s, o + extra]), [hasta, enPerfil(perfil, hasta) + extra]];
};

const cuerpo = (pts, fill) => ({ k: "path", d: curva(pts), fill, stroke: COLOR.contorno, sw: 0.8 });

function pierna(p, atras) {
    const desplaza = (q) => (atras ? { x: q.x - 4, y: q.y - 2 } : q);
    const tob = desplaza(p.tobillo);
    const rod = desplaza(p.rodilla);
    const cad = desplaza(p.cadera);
    const piel = atras ? "grad:pielAtras" : "grad:piel";
    const Pm = marco(cad, rod, L.muslo, p.antPierna);
    const Pt = marco(rod, tob, L.tibia, p.antPierna);
    const f = [];
    f.push(cuerpo(contorno(Pt, TIBIA_DELANTE, TIBIA_DETRAS), piel));
    // gemelo: la línea que lo marca
    f.push({ k: "path", d: curva([Pt(10, -4), Pt(22, -5.6), Pt(36, -3.4)], false), fill: "none", stroke: "rgba(120,70,40,0.35)", sw: 0.9 });
    // calcetín
    f.push(cuerpo(contorno(Pt, [[44, 4.3], [56, 4.1]], [[56, 4.3], [44, 4.9]]), atras ? COLOR.calcetinAtras : COLOR.calcetin));
    f.push({ k: "circle", c: rod, r: 6.2, fill: piel });
    f.push(cuerpo(contorno(Pm, MUSLO_DELANTE, MUSLO_DETRAS), piel));
    // cuádriceps: la separación del vasto
    f.push({ k: "path", d: curva([Pm(16, 6), Pm(30, 4.6), Pm(46, 2.4)], false), fill: "none", stroke: "rgba(120,70,40,0.3)", sw: 0.9 });
    // pernera del pantalón corto
    f.push(cuerpo(contorno(Pm, tramo(MUSLO_DELANTE, -5, 18, 1.1), tramo(MUSLO_DETRAS, 18, -5, 1.1)), atras ? "grad:pantalonAtras" : "grad:pantalon"));
    // zapatilla, plana en el suelo y con la punta hacia donde sale la rodilla
    const dir = p.antPierna.x >= 0 ? 1 : -1;
    const en = (dx, dy) => ({ x: tob.x + dir * dx, y: tob.y + dy });
    f.push({ k: "path", d: curva([en(-7.5, 2.6), en(18, 2.6), en(19.6, 0), en(14, -2.4), en(6, -4.2), en(0, -6), en(-6.6, -4.6), en(-8.2, -1)]), fill: atras ? COLOR.zapatillaAtras : COLOR.zapatilla, stroke: COLOR.contorno, sw: 0.8 });
    f.push({ k: "poly", pts: [en(-8, 1.6), en(19.8, 1.6), en(19.2, 4), en(-7.6, 4)], fill: COLOR.suela });
    if (!atras) f.push({ k: "path", d: [["M", en(1, -2.4)], ["L", en(11, 0.4)]], fill: "none", stroke: COLOR.franja, sw: 1.6 });
    return f;
}

function brazo(p, atras) {
    const desplaza = (q) => (atras ? { x: q.x - 4, y: q.y - 2 } : q);
    const hom = desplaza(p.hombro);
    const cod = desplaza(p.codo);
    const man = desplaza(p.mano);
    const piel = atras ? "grad:pielAtras" : "grad:piel";
    const Pb = marco(hom, cod, L.brazo, p.antBrazo);
    const Pa = marco(cod, man, L.antebrazo, p.antBrazo);
    const f = [];
    f.push(cuerpo(contorno(Pa, ANTEBRAZO_DELANTE, ANTEBRAZO_DETRAS), piel));
    f.push({ k: "circle", c: cod, r: 4.5, fill: piel });
    f.push(cuerpo(contorno(Pb, BRAZO_DELANTE, BRAZO_DETRAS), piel));
    // manga de la camiseta y el hombro
    f.push({ k: "circle", c: hom, r: 8.8, fill: atras ? "grad:camisetaAtras" : "grad:camiseta" });
    f.push(cuerpo(contorno(Pb, tramo(BRAZO_DELANTE, -4, 15, 1.2), tramo(BRAZO_DETRAS, 15, -4, 1.2)), atras ? "grad:camisetaAtras" : "grad:camiseta"));
    // puño cerrado sobre la barra
    f.push({ k: "circle", c: man, r: 4.6, fill: piel, stroke: COLOR.contorno, sw: 0.8 });
    return f;
}

function tronco(p, conCinturon) {
    const P = marco(p.cadera, p.hombro, L.tronco, p.f);
    const f = [];
    // cuello (debajo de la camiseta)
    f.push(cuerpo([P(58, 5.4), P(70, 5), P(78, 4.6), P(78, -5), P(70, -5.6), P(58, -6)], "grad:piel"));
    // pantalón corto y camiseta por encima
    f.push(cuerpo(contorno(P, tramo(TRONCO_DELANTE, -7, 14, 0), tramo(TRONCO_DETRAS, 14, -8, 0)), "grad:pantalon"));
    f.push(cuerpo(contorno(P, tramo(TRONCO_DELANTE, 8, 68, 0), tramo(TRONCO_DETRAS, 68, 8, 0)), "grad:camiseta"));
    // pliegue del pecho
    f.push({ k: "path", d: curva([P(42, 13), P(47, 9), P(52, 6)], false), fill: "none", stroke: "rgba(20,10,60,0.35)", sw: 0.9 });
    if (conCinturon) {
        f.push({ k: "poly", pts: [P(4, enPerfil(TRONCO_DELANTE, 4) + 1.4), P(15, enPerfil(TRONCO_DELANTE, 15) + 1.4), P(15, -(enPerfil(TRONCO_DETRAS, 15) + 1.4)), P(4, -(enPerfil(TRONCO_DETRAS, 4) + 1.4))], fill: COLOR.cinturon, stroke: COLOR.contorno, sw: 0.8 });
        f.push({ k: "circle", c: P(9.5, enPerfil(TRONCO_DELANTE, 9.5) - 0.4), r: 1.9, fill: COLOR.hebilla, stroke: COLOR.contorno, sw: 0.6 });
    }
    return f;
}

function cabeza(p) {
    const en = (fa, ua) => ({ x: p.cabeza.x + p.f.x * fa + p.u.x * ua, y: p.cabeza.y + p.f.y * fa + p.u.y * ua });
    return [
        { k: "circle", c: en(-1.5, 1.1), r: 11.5, fill: COLOR.pelo },
        { k: "circle", c: en(0.8, -0.7), r: 10.4, fill: "grad:piel", stroke: COLOR.contorno, sw: 0.8 },
        // flequillo
        { k: "path", d: curva([en(-2, 10.6), en(4.5, 9.6), en(7.4, 6.6), en(2, 7.4)]), fill: COLOR.pelo },
        { k: "circle", c: en(-1.8, -0.6), r: 2.5, fill: COLOR.oreja },
        { k: "circle", c: en(6.7, 2.4), r: 1.15, fill: COLOR.ojo },
        { k: "path", d: [["M", en(4.6, 4.9)], ["L", en(8.6, 4.4)]], fill: "none", stroke: COLOR.pelo, sw: 1.1 },
        { k: "poly", pts: [en(10, 2.2), en(13, -0.6), en(10.2, -2)], fill: "#e8b48b" },
        { k: "path", d: [["M", en(7.4, -4.6)], ["L", en(9.6, -4.2)]], fill: "none", stroke: "rgba(120,60,40,0.6)", sw: 0.9 },
    ];
}

/* Discos vistos de lado (la cara del disco mira a la cámara, con su peso escrito) y el extremo de la barra. */
function discosDeLado(c, discos) {
    if (!discos.length) {
        return [
            { k: "circle", c, r: 8, fill: "grad:metal", stroke: "#0f172a", sw: 1.4 },
            { k: "circle", c, r: 2.4, fill: "#475569" },
        ];
    }
    const f = [];
    discos.forEach((d) => {
        const r = radioDisco(d);
        f.push({ k: "circle", c, r, fill: d.color, stroke: "#0b1020", sw: 1.6 });
        f.push({ k: "circle", c, r: r * 0.8, fill: "none", stroke: "rgba(0,0,0,0.22)", sw: 1.2 });
        f.push({ k: "circle", c, r: r - 1.6, fill: "none", stroke: "rgba(255,255,255,0.18)", sw: 1 });
    });
    const fuera = discos[discos.length - 1];
    const rf = radioDisco(fuera);
    if (rf >= 20) {
        f.push({ k: "text", p: { x: c.x, y: c.y - rf * 0.58 }, s: String(fuera.kg).replace(".", ","), size: rf * 0.27, fill: fuera.claro ? "#0f172a" : "#ffffff" });
    }
    f.push({ k: "circle", c, r: 7.5, fill: "#1f2937", stroke: "#94a3b8", sw: 1.6 });
    f.push({ k: "circle", c, r: 4.4, fill: "grad:metal" });
    f.push({ k: "circle", c, r: 1.6, fill: "#475569" });
    return f;
}

/* Tarima de levantamiento: goma a los lados y madera en el centro. */
export function plataforma() {
    const y = VISTA.suelo;
    return [
        { k: "rect", x: 50, y, w: 320, h: 9, rx: 2, fill: COLOR.goma },
        { k: "rect", x: 125, y, w: 170, h: 9, rx: 1, fill: "grad:madera" },
        { k: "rect", x: 50, y, w: 320, h: 1.6, rx: 0, fill: "rgba(255,255,255,0.12)" },
    ];
}

export function formas(ej, t, discos) {
    const e = EJERCICIOS[ej];
    const p = pose(ej, t);
    const f = [];
    if (e.banco === "banca") {
        f.push({ k: "rect", x: 155, y: 176, w: 7, h: 56, rx: 1, fill: COLOR.pata });
        f.push({ k: "rect", x: 268, y: 176, w: 7, h: 56, rx: 1, fill: COLOR.pata });
        f.push({ k: "rect", x: 140, y: 166, w: 150, h: 11, rx: 4, fill: COLOR.bancoTapiz });
        f.push({ k: "rect", x: 140, y: 166, w: 150, h: 3, rx: 1.5, fill: COLOR.banco });
    }
    if (e.banco === "hip") {
        f.push({ k: "rect", x: 262, y: 178, w: 8, h: 54, rx: 1, fill: COLOR.pata });
        f.push({ k: "rect", x: 342, y: 178, w: 8, h: 54, rx: 1, fill: COLOR.pata });
        f.push({ k: "rect", x: 250, y: 167, w: 110, h: 13, rx: 5, fill: COLOR.bancoTapiz });
        f.push({ k: "rect", x: 250, y: 167, w: 110, h: 3, rx: 1.5, fill: COLOR.banco });
    }
    f.push(...pierna(p, true));
    f.push(...brazo(p, true));
    f.push(...tronco(p, e.cinturon));
    f.push(...cabeza(p));
    f.push(...pierna(p, false));
    f.push(...brazo(p, false));
    f.push(...discosDeLado(p.barra, discos));
    return f;
}
