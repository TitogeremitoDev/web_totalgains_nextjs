/* Geometría de la calculadora de RM: discos, cómo se carga la barra y las poses de cada ejercicio.
   Lo usan el escenario animado (Escena.jsx) y la imagen para compartir (imagen.js), así los dos dibujan lo mismo.
   Escenario: viewBox 35 -50 350 300, suelo en y = 232. El atleta mira a la derecha. Ángulo del tronco en grados desde
   la vertical (positivo = inclinado hacia delante). Rodilla y codo salen de la cinemática inversa: así las piezas no
   cambian de largo al moverse. */

export const VISTA = { x: 35, y: -50, w: 350, h: 300, suelo: 232 };

export const L = { tibia: 54, muslo: 56, tronco: 64, brazo: 38, antebrazo: 36 };

// Discos de competición: 25, 20, 15 y 10 kg miden lo mismo de alto (45 cm) y cambian de grosor.
export const DISCOS = [
    { kg: 25, color: "#dc2626", alto: 1, grueso: 1.0 },
    { kg: 20, color: "#2563eb", alto: 1, grueso: 0.85 },
    { kg: 15, color: "#eab308", alto: 1, grueso: 0.7 },
    { kg: 10, color: "#16a34a", alto: 1, grueso: 0.55 },
    { kg: 5, color: "#f1f5f9", alto: 0.62, grueso: 0.42 },
    { kg: 2.5, color: "#ef4444", alto: 0.5, grueso: 0.32 },
    { kg: 1.25, color: "#94a3b8", alto: 0.42, grueso: 0.26 },
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

// Colores del atleta y del banco (escenario e imagen para compartir).
export const COLOR = {
    piernaAtras: "#3730a3",
    piernaDelante: "#6366f1",
    brazoAtras: "#5b21b6",
    brazoDelante: "#a78bfa",
    piel: "#e2e8f0",
    zapatilla: "#f8fafc",
    banco: "#334155",
    pata: "#1e293b",
    suelo: "#1e293b",
    camino: "#22d3ee",
};

export const radioDisco = (d) => (d ? 28 * d.alto : 9);

export const EJERCICIOS = {
    sentadilla: {
        nombre: "Sentadilla",
        tobillo: { x: 200, y: 228 },
        abajo: { cadera: { x: 150, y: 172 }, tronco: 50 },
        arriba: { cadera: { x: 197, y: 119 }, tronco: 8 },
        barra: (h) => ({ x: h.hombro.x - 7, y: h.hombro.y - 4 }),
        mano: (_h, b) => ({ x: b.x - 3, y: b.y + 1 }),
        codo: -1,
        foto: 0.25,
        nota: "En la sentadilla las fórmulas funcionan bien con series de 3 a 8 repeticiones.",
    },
    banca: {
        nombre: "Press de banca",
        banco: "banca",
        tobillo: { x: 118, y: 228 },
        abajo: { cadera: { x: 176, y: 158 }, tronco: 90, mano: { x: 214, y: 128 } },
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
        foto: 1,
        nota: "En el peso muerto las fórmulas suelen quedarse cortas (LeSuer y colaboradores, 1997): toma el resultado como un mínimo.",
    },
    militar: {
        nombre: "Press militar",
        tobillo: { x: 200, y: 228 },
        abajo: { cadera: { x: 198, y: 119 }, tronco: 0, mano: { x: 212, y: 57 } },
        arriba: { cadera: { x: 198, y: 119 }, tronco: 0, mano: { x: 201, y: -16 } },
        barra: (h) => ({ ...h.mano }),
        codo: 1,
        foto: 1,
        nota: "Con series cortas la estimación es buena; con más de 8 repeticiones el hombro se cansa antes y el 1RM sale alto.",
    },
    hipthrust: {
        nombre: "Hip thrust",
        banco: "hip",
        tobillo: { x: 144, y: 228 },
        hombroFijo: { x: 258, y: 160 },
        abajo: { cadera: { x: 208, y: 200 } },
        arriba: { cadera: { x: 194, y: 160 } },
        barra: (h) => ({ x: h.cadera.x + 2, y: h.cadera.y - 14 }),
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

/* Pose del ejercicio en la fase t (0 = abajo, 1 = arriba). */
export function pose(ej, t) {
    const e = EJERCICIOS[ej];
    const cadera = lerpP(e.abajo.cadera, e.arriba.cadera, t);
    let hombro;
    if (e.hombroFijo) hombro = { ...e.hombroFijo };
    else {
        const tr = rad(lerp(e.abajo.tronco, e.arriba.tronco, t));
        hombro = { x: cadera.x + L.tronco * Math.sin(tr), y: cadera.y - L.tronco * Math.cos(tr) };
    }
    const lt = Math.hypot(hombro.x - cadera.x, hombro.y - cadera.y) || 1;
    const cabeza = { x: hombro.x + ((hombro.x - cadera.x) / lt) * 17, y: hombro.y + ((hombro.y - cadera.y) / lt) * 17 };
    const rodilla = ik(e.tobillo, cadera, L.tibia, L.muslo, e.rodilla ?? 1);
    let mano;
    let barra;
    if (e.abajo.mano) {
        mano = lerpP(e.abajo.mano, e.arriba.mano, t);
        barra = e.barra({ mano });
    } else {
        barra = e.barra({ hombro, cadera });
        mano = e.mano({ hombro, cadera }, barra);
    }
    const codo = ik(hombro, mano, L.brazo, L.antebrazo, e.codo);
    return { tobillo: e.tobillo, rodilla, cadera, hombro, cabeza, codo, mano, barra };
}

/* Recorrido de la barra (puntos de abajo a arriba), para dibujarlo como en las apps de velocidad. */
export function trayectoria(ej, n = 24) {
    const pts = [];
    for (let i = 0; i < n; i += 1) pts.push(pose(ej, i / (n - 1)).barra);
    return pts;
}

/* Segundos que tarda en subir: cuanto más cerca del 1RM, más despacio (relación carga-velocidad). */
export const segundosSubida = (pct) => lerp(0.9, 2.4, Math.min(1, Math.max(0, (pct - 50) / 50)));

/* ── Lo que se dibuja: una lista de formas sencillas (polígonos, círculos y rectángulos) en orden de pintado.
   La pinta el escenario en SVG y la imagen para compartir en un canvas: así los dos salen idénticos. ── */

function capsula(a, b, ra, rb, fill) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const l = Math.hypot(dx, dy) || 1;
    const nx = -dy / l;
    const ny = dx / l;
    const pts = [
        { x: a.x + nx * ra, y: a.y + ny * ra },
        { x: b.x + nx * rb, y: b.y + ny * rb },
        { x: b.x - nx * rb, y: b.y - ny * rb },
        { x: a.x - nx * ra, y: a.y - ny * ra },
    ];
    return [
        { k: "poly", pts, fill },
        { k: "circle", c: a, r: ra, fill },
        { k: "circle", c: b, r: rb, fill },
    ];
}

/* Discos vistos de lado: del de dentro al de fuera, semitransparentes para que se vea el cuerpo detrás. */
function discosDeLado(c, discos) {
    if (!discos.length) return [{ k: "circle", c, r: radioDisco(null), fill: "#64748b", stroke: "#0f172a", sw: 2 }];
    const f = [];
    discos.forEach((d) => {
        const r = radioDisco(d);
        f.push({ k: "circle", c, r, fill: d.color, opacity: 0.22 });
        f.push({ k: "circle", c, r: r - 2.6, fill: "none", stroke: d.color, sw: 5.2 });
    });
    const r0 = radioDisco(discos[0]);
    f.push({ k: "circle", c, r: r0 + 0.8, fill: "none", stroke: "#0f172a", sw: 1.4, opacity: 0.8 });
    f.push({ k: "circle", c, r: Math.max(5, r0 * 0.24), fill: "#0f172a", opacity: 0.7 });
    f.push({ k: "circle", c, r: 3.6, fill: "#cbd5e1" });
    return f;
}

export function formas(ej, t, discos) {
    const e = EJERCICIOS[ej];
    const p = pose(ej, t);
    const f = [];
    if (e.banco === "banca") {
        f.push({ k: "rect", x: 140, y: 168, w: 150, h: 10, rx: 5, fill: COLOR.banco });
        f.push({ k: "rect", x: 155, y: 178, w: 7, h: 54, rx: 1, fill: COLOR.pata });
        f.push({ k: "rect", x: 268, y: 178, w: 7, h: 54, rx: 1, fill: COLOR.pata });
    }
    if (e.banco === "hip") {
        f.push({ k: "rect", x: 250, y: 168, w: 110, h: 12, rx: 6, fill: COLOR.banco });
        f.push({ k: "rect", x: 262, y: 180, w: 8, h: 52, rx: 1, fill: COLOR.pata });
        f.push({ k: "rect", x: 342, y: 180, w: 8, h: 52, rx: 1, fill: COLOR.pata });
    }
    const atras = (q) => ({ x: q.x - 4, y: q.y - 2 });
    // pierna y brazo de atrás
    f.push(...capsula(atras(p.tobillo), atras(p.rodilla), 5.5, 7.5, COLOR.piernaAtras));
    f.push(...capsula(atras(p.rodilla), atras(p.cadera), 7.5, 10.5, COLOR.piernaAtras));
    f.push(...capsula(atras(p.hombro), atras(p.codo), 6.5, 5.5, COLOR.brazoAtras));
    f.push(...capsula(atras(p.codo), atras(p.mano), 5.5, 4.2, COLOR.brazoAtras));
    // tronco, cuello y cabeza
    const lt = Math.hypot(p.hombro.x - p.cadera.x, p.hombro.y - p.cadera.y) || 1;
    const u = { x: (p.hombro.x - p.cadera.x) / lt, y: (p.hombro.y - p.cadera.y) / lt };
    f.push(...capsula(p.hombro, { x: p.hombro.x + u.x * 10, y: p.hombro.y + u.y * 10 }, 5.5, 5, COLOR.piel));
    f.push(...capsula(p.cadera, p.hombro, 13, 15.5, "grad:tronco"));
    f.push({ k: "circle", c: p.cabeza, r: 11.5, fill: COLOR.piel });
    // pierna de delante y zapatilla
    f.push(...capsula(p.tobillo, p.rodilla, 5.5, 7.5, COLOR.piernaDelante));
    f.push(...capsula(p.rodilla, p.cadera, 7.5, 11, COLOR.piernaDelante));
    f.push({ k: "rect", x: p.tobillo.x - 7, y: p.tobillo.y - 4, w: 26, h: 9, rx: 4.5, fill: COLOR.zapatilla });
    // barra (disco de lado) y brazo de delante encima
    f.push(...discosDeLado(p.barra, discos));
    f.push(...capsula(p.hombro, p.codo, 7, 6, COLOR.brazoDelante));
    f.push(...capsula(p.codo, p.mano, 6, 4.5, COLOR.brazoDelante));
    f.push({ k: "circle", c: p.mano, r: 5, fill: COLOR.piel });
    return f;
}
