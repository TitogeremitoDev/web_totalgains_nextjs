// Copias más pequeñas de las fotos grandes, para servirlas con srcset.
//
//   node scripts/variantes-imagenes.mjs
//
// Por qué existe (revisión de la web 21-nov-2026, mejora CD79): la web se
// exporta estática con `images: { unoptimized: true }`, así que Next NO hace
// copias por tamaño y el móvil se bajaba la captura de 1837 px para verla a
// 360. Este guion deja al lado de cada foto sus versiones `-w<ancho>.webp`, y
// el componente <ImagenAdaptable> las ofrece con srcset/sizes.
//
// ⚠️ Nombres nuevos a propósito: Cloudflare guarda /images/* un año. Nunca se
// pisa el original ni una copia ya publicada con contenido distinto.
// Idempotente: si la copia existe y es más nueva que el original, la salta.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

export const VARIANTES = {
  // /para-gimnasios/: cabecera y galería (se ven a ~380 px en el móvil y a
  // ~560 en la cabecera de escritorio).
  "images/gym/dashboard.webp": [800, 1280],
  "images/gym/clientes.webp": [800, 1280],
  "images/gym/clases.webp": [800, 1280],
  "images/gym/pagos.webp": [800, 1280],
  // Casos reales (tarjeta de 340 px en escritorio, ancho completo en móvil).
  "images/gimnasios/method-results.webp": [480, 720],
};

// Las fotos de portada de los artículos: en /blog/ se ven en tarjetas de
// ~360x200, pero se bajaban a 1344 px.
export const VARIANTES_BLOG = [480, 800];

const PUBLIC = path.join(process.cwd(), "public");

export const nombreVariante = (rel, ancho) => rel.replace(/\.webp$/, `-w${ancho}.webp`);

async function hacer(rel, anchos) {
  const origen = path.join(PUBLIC, rel);
  if (!fs.existsSync(origen)) { console.warn("  ⚠️ no existe", rel); return 0; }
  const { width } = await sharp(origen).metadata();
  let n = 0;
  for (const ancho of anchos) {
    if (ancho >= width) continue; // nunca se amplía
    const destino = path.join(PUBLIC, nombreVariante(rel, ancho));
    if (fs.existsSync(destino) && fs.statSync(destino).mtimeMs >= fs.statSync(origen).mtimeMs) continue;
    const buf = await sharp(origen).resize({ width: ancho }).webp({ quality: 80, effort: 6 }).toBuffer();
    // Solo vale la pena si ahorra: hay originales tan comprimidos que la copia
    // pequeña pesaba EL DOBLE (marca-blanca-hero: 9 KB el original, 18 la copia).
    if (buf.length >= fs.statSync(origen).size * 0.85) continue;
    fs.writeFileSync(destino, buf);
    console.log(`  ${nombreVariante(rel, ancho)}  ${Math.round(buf.length / 1024)} KB (original ${Math.round(fs.statSync(origen).size / 1024)} KB)`);
    n++;
  }
  return n;
}

/* Lista de lo que hay de verdad en disco, para que <ImagenAdaptable> solo
   ofrezca copias que existen (y que pesan menos que el original). */
async function apuntar(rel, anchos, manifiesto) {
  const origen = path.join(PUBLIC, rel);
  if (!fs.existsSync(origen)) return;
  const { width, height } = await sharp(origen).metadata();
  const pesoOriginal = fs.statSync(origen).size;
  const copias = anchos
    .filter((a) => a < width)
    .filter((a) => {
      const f = path.join(PUBLIC, nombreVariante(rel, a));
      return fs.existsSync(f) && fs.statSync(f).size < pesoOriginal * 0.85;
    });
  if (copias.length) manifiesto["/" + rel] = { w: width, h: height, copias };
}

async function principal() {
  let n = 0;
  for (const [rel, anchos] of Object.entries(VARIANTES)) n += await hacer(rel, anchos);
  // Portadas de los artículos publicados
  const { getAllPosts } = await import("../src/lib/blog.js");
  const portadas = [...new Set(getAllPosts().map((p) => p.image).filter((i) => i && i.endsWith(".webp")))];
  for (const img of portadas) n += await hacer(img.replace(/^\//, ""), VARIANTES_BLOG);
  console.log(`${n} copias nuevas`);

  const manifiesto = {};
  for (const [rel, anchos] of Object.entries(VARIANTES)) await apuntar(rel, anchos, manifiesto);
  for (const img of portadas) await apuntar(img.replace(/^\//, ""), VARIANTES_BLOG, manifiesto);
  const destino = path.join(process.cwd(), "src/data/variantesImagenes.json");
  fs.writeFileSync(destino, JSON.stringify(manifiesto, null, 1) + "\n");
  console.log(`${Object.keys(manifiesto).length} fotos con copias → src/data/variantesImagenes.json`);
}

if (import.meta.url === `file://${process.argv[1]}`) principal();
