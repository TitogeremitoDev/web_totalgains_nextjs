#!/usr/bin/env node
/**
 * Bing Webmaster API - SubmitUrlBatch
 *
 * Uso:
 *   node scripts/bing-submit.mjs [--all] [url1 url2 ...]
 *
 * Opciones:
 *   --all                 Envía todas las URLs del sitemap.xml
 *   <urls...>             Envía solo las URLs pasadas como argumentos
 *   (sin args)            Imprime ayuda
 *
 * Requiere BING_WEBMASTER_API_KEY en .env.local o env.
 *
 * Quota Bing: 10.000 URLs/día (gradual: empieza ~10-100/día hasta demostrar histórico).
 * Endpoint: https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch
 */

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

// Cargar .env.local si existe
function loadEnv() {
  const envPath = join(rootDir, ".env.local");
  if (!existsSync(envPath)) return;
  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const match = line.match(/^([A-Z_]+)=(.*)$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].trim();
    }
  }
}

loadEnv();

const API_KEY = process.env.BING_WEBMASTER_API_KEY;
const SITE_URL = "https://totalgains.es/";

if (!API_KEY) {
  console.error("Error: BING_WEBMASTER_API_KEY no está en .env.local ni en env.");
  process.exit(1);
}

// Parse args
const args = process.argv.slice(2);
let urlList = [];

if (args.includes("--all")) {
  // Leer todas las URLs del sitemap.xml en out/
  const sitemapPath = join(rootDir, "out", "sitemap.xml");
  if (!existsSync(sitemapPath)) {
    console.error("Error: out/sitemap.xml no existe. Ejecuta `npm run build` primero.");
    process.exit(1);
  }
  const xml = readFileSync(sitemapPath, "utf8");
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
} else if (args.length > 0) {
  urlList = args;
} else {
  console.log("Uso: node scripts/bing-submit.mjs [--all] [url1 url2 ...]");
  console.log("");
  console.log("Ejemplos:");
  console.log("  node scripts/bing-submit.mjs --all");
  console.log("  node scripts/bing-submit.mjs https://totalgains.es/blog/trainerize-precios-2026/");
  process.exit(0);
}

if (urlList.length === 0) {
  console.error("Error: no hay URLs para enviar.");
  process.exit(1);
}

if (urlList.length > 500) {
  console.error(`Error: máximo 500 URLs por llamada. Recibí ${urlList.length}.`);
  console.error("Divide en lotes de 500 manualmente.");
  process.exit(1);
}

console.log(`Enviando ${urlList.length} URLs a Bing Webmaster...`);

const endpoint = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=${API_KEY}`;
const body = {
  siteUrl: SITE_URL,
  urlList,
};

try {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const text = await res.text();

  if (!res.ok) {
    console.error(`HTTP ${res.status}:`, text);
    process.exit(1);
  }

  let data = null;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }

  console.log("OK · Bing aceptó el batch.");
  if (typeof data === "object" && data !== null) {
    console.log("Response:", JSON.stringify(data, null, 2));
  } else {
    console.log("Response:", data);
  }
  console.log(`Total URLs enviadas: ${urlList.length}`);
  console.log("Bing las procesará en 1-12h. Verifica en Bing Webmaster → URL Inspection.");
} catch (err) {
  console.error("Error de red:", err.message);
  process.exit(1);
}
