/* Imagen para compartir el RM (1080 × 1920, formato de historia de Instagram y estado de WhatsApp).
   Se dibuja en un canvas con la misma pose y los mismos discos que el escenario animado. No sale nada del navegador. */

import { DEGRADADOS, EJERCICIOS, VISTA, formas, plataforma } from "./geometria";

const W = 1080;
const H = 1920;

let logoPromesa = null;
function cargarLogo() {
    if (!logoPromesa) {
        logoPromesa = new Promise((ok) => {
            const img = new Image();
            img.onload = () => ok(img);
            img.onerror = () => ok(null);
            img.src = "/logo.png";
        });
    }
    return logoPromesa;
}

function caja(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}

/* Caja que ocupa el dibujo (sin el suelo), para encajarlo en la imagen. */
function cajaDe(lista) {
    let x1 = Infinity;
    let y1 = Infinity;
    let x2 = -Infinity;
    let y2 = -Infinity;
    const meter = (x, y) => {
        x1 = Math.min(x1, x);
        y1 = Math.min(y1, y);
        x2 = Math.max(x2, x);
        y2 = Math.max(y2, y);
    };
    for (const f of lista) {
        if (f.k === "text") continue;
        if (f.k === "poly") f.pts.forEach((q) => meter(q.x, q.y));
        else if (f.k === "path") f.d.forEach(([, ...ps]) => ps.forEach((q) => meter(q.x, q.y)));
        else if (f.k === "circle") {
            meter(f.c.x - f.r, f.c.y - f.r);
            meter(f.c.x + f.r, f.c.y + f.r);
        } else {
            meter(f.x, f.y);
            meter(f.x + f.w, f.y + f.h);
        }
    }
    return { x1, y1, x2, y2 };
}

/* Pinta una forma de geometria.js en el canvas; X e Y pasan del escenario a píxeles y k es la escala. */
function pintar(ctx, f, X, Y, k, fuente) {
    ctx.save();
    ctx.globalAlpha = f.opacity ?? 1;
    const pts = f.k === "path" ? f.d.flatMap(([, ...ps]) => ps) : f.k === "poly" ? f.pts : null;
    let fill = f.fill;
    if (typeof fill === "string" && fill.startsWith("grad:")) {
        const [c1, c2] = DEGRADADOS[fill.slice(5)];
        let x1;
        let y1;
        let x2;
        let y2;
        if (pts) {
            x1 = Math.min(...pts.map(X));
            x2 = Math.max(...pts.map(X));
            y1 = Math.min(...pts.map(Y));
            y2 = Math.max(...pts.map(Y));
        } else if (f.k === "circle") {
            x1 = X(f.c) - f.r * k;
            x2 = X(f.c) + f.r * k;
            y1 = Y(f.c) - f.r * k;
            y2 = Y(f.c) + f.r * k;
        } else {
            x1 = X(f);
            y1 = Y(f);
            x2 = x1 + f.w * k;
            y2 = y1 + f.h * k;
        }
        const g = ctx.createLinearGradient(x1, y1, x2, y2);
        g.addColorStop(0, c1);
        g.addColorStop(1, c2);
        fill = g;
    }
    if (f.k === "text") {
        ctx.fillStyle = f.fill;
        ctx.font = `800 ${f.size * k}px ${fuente}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(f.s, X(f.p), Y(f.p));
        ctx.restore();
        return;
    }
    ctx.beginPath();
    if (f.k === "path") {
        for (const [cmd, ...ps] of f.d) {
            if (cmd === "M") ctx.moveTo(X(ps[0]), Y(ps[0]));
            else if (cmd === "L") ctx.lineTo(X(ps[0]), Y(ps[0]));
            else if (cmd === "C") ctx.bezierCurveTo(X(ps[0]), Y(ps[0]), X(ps[1]), Y(ps[1]), X(ps[2]), Y(ps[2]));
            else if (cmd === "Z") ctx.closePath();
        }
    } else if (f.k === "poly") {
        f.pts.forEach((q, i) => (i ? ctx.lineTo(X(q), Y(q)) : ctx.moveTo(X(q), Y(q))));
        ctx.closePath();
    } else if (f.k === "circle") ctx.arc(X(f.c), Y(f.c), f.r * k, 0, Math.PI * 2);
    else caja(ctx, X(f), Y(f), f.w * k, f.h * k, Math.min((f.rx || 0) * k, (f.h * k) / 2));
    if (fill && fill !== "none") {
        ctx.fillStyle = fill;
        ctx.fill();
    }
    if (f.stroke) {
        ctx.strokeStyle = f.stroke;
        ctx.lineWidth = (f.sw || 1) * k;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    }
    ctx.restore();
}

/* Dibuja el atleta encajado en el rectángulo (izq, arriba, ancho, suelo): apoyado en la tarima y centrado. */
function dibujarAtleta(ctx, ej, t, discos, hueco, fuente) {
    const lista = formas(ej, t, discos);
    const c = cajaDe(lista);
    const k = Math.min(3.6, hueco.ancho / (c.x2 - c.x1), (hueco.suelo - hueco.arriba) / (VISTA.suelo - c.y1));
    const x0 = hueco.izq + hueco.ancho / 2 - ((c.x1 + c.x2) / 2) * k;
    const y0 = hueco.suelo - VISTA.suelo * k;
    const X = (q) => x0 + q.x * k;
    const Y = (q) => y0 + q.y * k;
    for (const f of plataforma()) pintar(ctx, f, X, Y, k, fuente);
    for (const f of lista) pintar(ctx, f, X, Y, k, fuente);
}

/* datos: { ej, rm, peso, reps, discos, filas: [{ pct, kg, reps }], fuente } → Promise<Blob> (PNG). */
export async function crearImagen(datos) {
    const { ej, rm, peso, reps, discos, filas, fuente } = datos;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    const letra = fuente || "system-ui, sans-serif";
    const f = (peso_, px) => `${peso_} ${px}px ${letra}`;

    // fondo
    const fondo = ctx.createLinearGradient(0, 0, 0, H);
    fondo.addColorStop(0, "#0b1020");
    fondo.addColorStop(1, "#1e1b4b");
    ctx.fillStyle = fondo;
    ctx.fillRect(0, 0, W, H);
    const luz = ctx.createRadialGradient(W / 2, 760, 40, W / 2, 760, 700);
    luz.addColorStop(0, "rgba(129,140,248,0.35)");
    luz.addColorStop(1, "rgba(129,140,248,0)");
    ctx.fillStyle = luz;
    ctx.fillRect(0, 0, W, H);

    // marca
    const logo = await cargarLogo();
    ctx.textBaseline = "alphabetic";
    if (logo) ctx.drawImage(logo, 80, 92, 76, 76 * (logo.naturalHeight / logo.naturalWidth || 1));
    ctx.fillStyle = "#ffffff";
    ctx.font = f(700, 44);
    ctx.fillText("TotalGains", logo ? 176 : 80, 145);

    // titular
    ctx.textAlign = "center";
    ctx.fillStyle = "#a5b4fc";
    ctx.font = f(700, 38);
    ctx.fillText("MI 1RM ESTIMADO EN", W / 2, 300);
    ctx.fillStyle = "#ffffff";
    ctx.font = f(800, 104);
    ctx.fillText(EJERCICIOS[ej].nombre.toUpperCase(), W / 2, 410, W - 120);

    // escenario: entre el titular y la cifra
    dibujarAtleta(ctx, ej, EJERCICIOS[ej].foto, discos, { izq: 90, arriba: 470, ancho: W - 180, suelo: 1170 }, letra);

    // cifra
    ctx.fillStyle = "#22c55e";
    ctx.font = f(800, 180);
    ctx.fillText(`${rm} kg`, W / 2, 1380, W - 100);
    ctx.fillStyle = "#cbd5e1";
    ctx.font = f(500, 42);
    ctx.fillText(`con ${peso} kg × ${reps} repeticiones`, W / 2, 1478);

    // porcentajes
    const n = filas.length;
    const ancho = 210;
    const sep = 24;
    const xi = (W - (n * ancho + (n - 1) * sep)) / 2;
    filas.forEach((fila, i) => {
        const x = xi + i * (ancho + sep);
        ctx.fillStyle = "rgba(255,255,255,0.07)";
        caja(ctx, x, 1530, ancho, 186, 26);
        ctx.fill();
        ctx.strokeStyle = "rgba(165,180,252,0.35)";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "#a5b4fc";
        ctx.font = f(700, 38);
        ctx.fillText(`${fila.pct} %`, x + ancho / 2, 1586);
        ctx.fillStyle = "#ffffff";
        ctx.font = f(800, 50);
        ctx.fillText(`${fila.kg} kg`, x + ancho / 2, 1650, ancho - 20);
        ctx.fillStyle = "#94a3b8";
        ctx.font = f(500, 32);
        ctx.fillText(`${fila.reps} reps`, x + ancho / 2, 1694);
    });

    // pie
    ctx.fillStyle = "#e2e8f0";
    ctx.font = f(500, 40);
    ctx.fillText("¿Cuánto levantas tú? Calcula el tuyo gratis en", W / 2, 1800, W - 100);
    ctx.fillStyle = "#c4b5fd";
    ctx.font = f(800, 54);
    ctx.fillText("totalgains.es/calculadora-rm", W / 2, 1864, W - 100);

    return new Promise((ok, mal) => canvas.toBlob((b) => (b ? ok(b) : mal(new Error("sin imagen"))), "image/png"));
}
