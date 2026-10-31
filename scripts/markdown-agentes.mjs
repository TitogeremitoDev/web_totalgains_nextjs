// Markdown para agentes de IA (31-oct-2026, revisión «agent-ready»).
// Se lanza tras `next build` (ver "build" en package.json): por cada URL del
// sitemap crea out/<página>/index.md con el contenido principal de la página
// en Markdown. El .htaccess se lo da a quien pide «Accept: text/markdown» y la
// portada lo anuncia en su cabecera Link. Gasta muchos menos tokens que el HTML.
// Sin dependencias: el HTML lo genera Next y viene bien formado. Si algo falla
// en una página se avisa y se sigue; el build nunca se para por esto.
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
const BASE = "https://totalgains.es";

// Lo que no aporta texto (o se repite en todas las páginas) se salta entero.
const SALTAR = new Set(["script", "style", "svg", "noscript", "template", "button", "form", "select", "textarea", "iframe", "video", "audio", "canvas", "nav", "footer", "picture", "img"]);
const VACIOS = new Set(["br", "hr", "img", "input", "meta", "link", "source", "wbr", "area", "col", "embed", "track", "param"]);
const BLOQUES = new Set(["p", "div", "section", "article", "header", "figure", "figcaption", "aside", "details", "summary", "dl", "dt", "dd", "table", "thead", "tbody", "main"]);

const ENTIDADES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", hellip: "…", mdash: "—", ndash: "–", laquo: "«", raquo: "»", euro: "€", copy: "©" };
const decodificar = (t) => t.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === "#") return String.fromCodePoint(e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENTIDADES[e.toLowerCase()] ?? m;
});
const atributo = (attrs, nombre) => {
    const m = attrs.match(new RegExp(`\\s${nombre}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"));
    return m ? decodificar(m[2] ?? m[3] ?? m[4] ?? "") : null;
};
const absoluta = (href) => {
    try { return new URL(href, BASE).href; } catch { return href; }
};

function aMarkdown(html) {
    const TOKEN = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][\w-]*)((?:\s+[^\s=>/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*(\/?)>|([^<]+)|</g;
    const pila = [[]]; // trozos; un enlace abre su propio trozo para envolverlo al cerrar
    const enlaces = [];
    const listas = [];
    let saltando = null, profSalto = 0, fila = 0;
    const escribir = (t) => pila[pila.length - 1].push(t);
    let m;
    while ((m = TOKEN.exec(html))) {
        const [, cierre, nombreRaw, attrs = "", autocierre, texto] = m;
        if (texto !== undefined) { if (!saltando) escribir(decodificar(texto).replace(/\s+/g, " ")); continue; }
        if (!nombreRaw) continue;
        const nombre = nombreRaw.toLowerCase();
        if (saltando) {
            if (nombre === saltando && !VACIOS.has(nombre)) {
                if (cierre) { if (--profSalto === 0) saltando = null; } else if (!autocierre) profSalto++;
            }
            continue;
        }
        if (!cierre) {
            const oculto = /\saria-hidden\s*=\s*"true"/i.test(attrs) || /\shidden(\s|=|$)/i.test(attrs);
            if ((SALTAR.has(nombre) || oculto) && !VACIOS.has(nombre) && !autocierre) { saltando = nombre; profSalto = 1; continue; }
            if (SALTAR.has(nombre)) continue;
        }
        if (/^h[1-6]$/.test(nombre)) { escribir(cierre ? "\n\n" : `\n\n${"#".repeat(Number(nombre[1]))} `); continue; }
        switch (nombre) {
            case "br": escribir("\n"); break;
            case "hr": escribir("\n\n---\n\n"); break;
            case "ul": case "ol":
                if (cierre) listas.pop(); else listas.push({ ordenada: nombre === "ol", n: 0 });
                escribir(cierre && !listas.length ? "\n\n" : "\n"); break;
            // Next pega los <span> sin espacio («Mensual</span><span>Anual»): se separan al cerrar.
            case "span": case "small": case "label": case "sup": case "time": case "mark":
                if (cierre) escribir(" ");
                break;
            case "li":
                if (!cierre) {
                    const l = listas[listas.length - 1];
                    const sangria = "  ".repeat(Math.max(0, listas.length - 1));
                    escribir(`\n${sangria}${l?.ordenada ? `${++l.n}.` : "-"} `);
                }
                break;
            case "strong": case "b": escribir("**"); break;
            case "em": case "i": escribir("*"); break;
            case "code": escribir("`"); break;
            case "blockquote": escribir(cierre ? "\n\n" : "\n\n> "); break;
            case "tr": if (!cierre) { escribir("\n|"); } else { fila++; if (fila === 1) escribir("__SEPARADOR__"); } break;
            case "td": case "th": escribir(cierre ? " |" : " "); break;
            case "a":
                if (!cierre) { enlaces.push(atributo(attrs, "href")); pila.push([]); }
                else if (pila.length > 1) {
                    const dentro = pila.pop().join("").replace(/\s+/g, " ").trim();
                    const href = enlaces.pop();
                    if (!dentro) break;
                    escribir(href && !/^(#|javascript:|mailto:$)/i.test(href) ? `[${dentro}](${absoluta(href)})` : dentro);
                }
                break;
            default:
                if (nombre === "table") { fila = 0; }
                if (BLOQUES.has(nombre)) escribir("\n\n");
        }
    }
    while (pila.length > 1) { const t = pila.pop().join(""); pila[pila.length - 1].push(t); }
    let md = pila[0].join("");
    // La fila de cabecera de una tabla lleva su separador debajo.
    md = md.replace(/(\n\|[^\n]*)__SEPARADOR__/g, (_, filaTexto) => `${filaTexto}\n|${" --- |".repeat((filaTexto.match(/\|/g) || []).length - 1)}`).replace(/__SEPARADOR__/g, "");
    return md
        .split("\n").map((l) => l.replace(/[ \t]+$/g, "").replace(/^ +(?![-\d])/, "").replace(/(\S) {2,}/g, "$1 ")).join("\n")
        .replace(/\*\*\s*\*\*/g, "")
        .replace(/^\s*[-*]\s*$/gm, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

function paginaAMarkdown(html, url) {
    const titulo = decodificar((html.match(/<title>([^<]*)<\/title>/i) || [])[1] || "").trim();
    const desc = decodificar((html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [])[1] || "").trim();
    const i = html.search(/<main[\s>]/i);
    const f = html.lastIndexOf("</main>");
    const cuerpo = i >= 0 && f > i ? html.slice(i, f + 7) : (html.match(/<body[^>]*>([\s\S]*)<\/body>/i) || [])[1] || "";
    const yaml = (t) => `"${t.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
    return `---\ntitle: ${yaml(titulo)}\ndescription: ${yaml(desc)}\nurl: ${url}\n---\n\n${aMarkdown(cuerpo)}\n`;
}

const sitemap = path.join(OUT, "sitemap.xml");
if (!fs.existsSync(sitemap)) {
    console.warn("[markdown-agentes] no hay out/sitemap.xml: no se genera Markdown");
    process.exit(0);
}
const urls = [...fs.readFileSync(sitemap, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1].trim());
let hechas = 0, fallos = 0, kbHtml = 0, kbMd = 0;
for (const url of urls) {
    try {
        let ruta = new URL(url).pathname;
        if (!ruta.endsWith("/")) ruta += "/";
        const origen = path.join(OUT, ruta, "index.html");
        if (!fs.existsSync(origen)) continue;
        const html = fs.readFileSync(origen, "utf8");
        const md = paginaAMarkdown(html, url);
        fs.writeFileSync(path.join(OUT, ruta, "index.md"), md);
        hechas++; kbHtml += html.length; kbMd += Buffer.byteLength(md);
    } catch (e) {
        fallos++;
        console.warn(`[markdown-agentes] ${url}: ${e.message}`);
    }
}
console.log(`[markdown-agentes] ${hechas} páginas en Markdown (${Math.round(kbMd / 1024)} KB frente a ${Math.round(kbHtml / 1024)} KB de HTML)${fallos ? ` · ${fallos} con aviso` : ""}`);
