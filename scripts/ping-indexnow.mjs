#!/usr/bin/env node
/**
 * ping-indexnow.mjs — avisa a Bing (y a Yandex, Seznam, Naver) de que hay URLs
 * nuevas o actualizadas, usando el protocolo IndexNow.
 *
 * Google NO usa IndexNow: para Google hay que pedir indexación a mano en Search
 * Console. Esto cubre el lado Microsoft, que además es de donde salen las
 * respuestas de Copilot.
 *
 * USO
 *   npm run ping-indexnow                 → todas las URLs del sitemap exportado
 *   npm run ping-indexnow -- <url> <url>  → solo esas URLs
 *   npm run ping-indexnow -- --dry        → enseña lo que enviaría y no envía
 *
 * ⚠️ Ejecútalo DESPUÉS de subir la web. Si avisas antes, Bing recorre la
 *    versión vieja y habrás gastado el aviso para nada.
 *
 * La clave se detecta sola: es el fichero public/<clave>.txt cuyo contenido
 * coincide con su nombre (así es como IndexNow verifica la propiedad).
 */

import fs from 'node:fs';
import path from 'node:path';

const HOST = 'totalgains.es';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITEMAP = path.join(process.cwd(), 'out', 'sitemap.xml');

function log(msg) { process.stdout.write(`${msg}\n`); }
function fail(msg) { process.stderr.write(`\n❌ ${msg}\n`); process.exit(1); }

/** Busca en public/ el fichero <clave>.txt cuyo contenido es la propia clave. */
function detectarClave() {
    let ficheros;
    try {
        ficheros = fs.readdirSync(PUBLIC_DIR).filter((f) => f.endsWith('.txt'));
    } catch {
        fail(`No encuentro el directorio ${PUBLIC_DIR}`);
    }
    for (const f of ficheros) {
        const clave = f.replace(/\.txt$/, '');
        const contenido = fs.readFileSync(path.join(PUBLIC_DIR, f), 'utf8').trim();
        if (contenido === clave) return clave;
    }
    fail(
        'No hay clave de IndexNow en public/.\n' +
        '   Genera una en https://www.bing.com/indexnow/getstarted y guarda un\n' +
        '   fichero public/<clave>.txt cuyo contenido sea exactamente la clave.'
    );
}

/** URLs del sitemap ya exportado (out/sitemap.xml). */
function urlsDelSitemap() {
    if (!fs.existsSync(SITEMAP)) {
        fail(`No existe ${SITEMAP}. Ejecuta "npm run build" antes.`);
    }
    const xml = fs.readFileSync(SITEMAP, 'utf8');
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
    if (urls.length === 0) fail('El sitemap no contiene ninguna URL.');
    return urls;
}

const args = process.argv.slice(2);
const dry = args.includes('--dry');
const explicitas = args.filter((a) => !a.startsWith('--'));

const clave = detectarClave();
const urlList = explicitas.length > 0 ? explicitas : urlsDelSitemap();

const ajenas = urlList.filter((u) => !u.startsWith(`https://${HOST}/`));
if (ajenas.length > 0) {
    fail(`Estas URLs no son de https://${HOST}/ y IndexNow las rechazaría:\n   ${ajenas.join('\n   ')}`);
}

const payload = {
    host: HOST,
    key: clave,
    keyLocation: `https://${HOST}/${clave}.txt`,
    urlList,
};

log(`\nIndexNow → ${ENDPOINT}`);
log(`  host:  ${HOST}`);
log(`  clave: ${clave} (verificada en public/${clave}.txt)`);
log(`  URLs:  ${urlList.length}${explicitas.length > 0 ? ' (indicadas a mano)' : ' (del sitemap)'}`);
urlList.slice(0, 5).forEach((u) => log(`         · ${u}`));
if (urlList.length > 5) log(`         · … y ${urlList.length - 5} más`);

if (dry) {
    log('\n🔍 --dry: no se ha enviado nada.\n');
    process.exit(0);
}

const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
}).catch((e) => fail(`Fallo de red: ${e.message}`));

const cuerpo = await res.text().catch(() => '');

// Códigos del protocolo IndexNow
const explicacion = {
    200: '✅ Aceptado. Bing ya sabe que estas URLs han cambiado.',
    202: '✅ Aceptado, pendiente de validar la clave. Comprueba que https://' + HOST + '/' + clave + '.txt es accesible.',
    400: '❌ Petición mal formada.',
    403: '❌ Clave rechazada: el fichero de verificación no es accesible o no coincide.',
    422: '❌ Alguna URL no pertenece al host declarado.',
    429: '⚠️ Demasiadas peticiones. Espera y reintenta; no hace falta repetir hoy.',
};

log(`\n${explicacion[res.status] || `Respuesta inesperada: HTTP ${res.status}`}`);
if (cuerpo.trim()) log(`   Respuesta: ${cuerpo.trim().slice(0, 300)}`);
log('');

// 200 y 202 son los dos casos de éxito del protocolo
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
