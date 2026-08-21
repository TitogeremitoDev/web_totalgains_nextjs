/**
 * Guard del registry de imágenes del blog.
 *
 * La norma dice que toda imagen EDITORIAL de /public/images/blog/ tiene que
 * estar catalogada en docs/seo/image-prompts-registry.md con sus 6 dimensiones
 * (ángulo, composición, encuadre, locación, contenido, luz). Sin eso el
 * registry no sirve para lo único que existe: evitar que se repitan conceptos
 * entre artículos.
 *
 * Hasta el 21-ago-2026 la norma solo vivía en memoria y se cumplía a ratos:
 * había 30 de 63 imágenes editoriales sin registrar. Este script la convierte
 * en algo que se comprueba solo.
 *
 * Clases de fichero:
 *   · editorial  (raíz de blog/)      → ERROR si no está en el registry
 *   · captura    (subdirs de producto) → aviso, no bloquea (no llevan 6 dimensiones)
 *   · logo       (blog/logos/)         → exento, son marcas de terceros
 *
 * Uso:
 *   node scripts/check-image-registry.mjs          # exit 1 si falta alguna editorial
 *   node scripts/check-image-registry.mjs --quiet  # solo el resumen
 */

import { readFile, readdir } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMAGES_ROOT = join(ROOT, 'public/images');
const BLOG_IMAGES = join(IMAGES_ROOT, 'blog');
const REGISTRY = join(ROOT, 'docs/seo/image-prompts-registry.md');

const EXTENSIONS = /\.(webp|png|jpg|jpeg|avif|svg)$/i;
const EXEMPT_DIRS = ['logos'];           // logos de marca, no son concepto editorial
const SCREENSHOT_DIRS = ['ia-totalgains']; // capturas reales de producto: avisan, no bloquean

const quiet = process.argv.includes('--quiet');

async function listImages(dir, prefix = '') {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const rel = prefix ? `${prefix}/${e.name}` : e.name;
    if (e.isDirectory()) {
      if (EXEMPT_DIRS.includes(e.name)) continue;
      out.push(...(await listImages(join(dir, e.name), rel)));
    } else if (EXTENSIONS.test(e.name)) {
      out.push(rel);
    }
  }
  return out;
}

async function main() {
  let registry;
  try {
    registry = await readFile(REGISTRY, 'utf8');
  } catch {
    console.error(`✖ No se encuentra el registry en ${REGISTRY}`);
    process.exit(1);
  }

  const images = await listImages(BLOG_IMAGES);
  const isScreenshot = (rel) => SCREENSHOT_DIRS.some((d) => rel.startsWith(`${d}/`));

  const missing = images.filter((rel) => !registry.includes(basename(rel)));
  const missingEditorial = missing.filter((rel) => !isScreenshot(rel));
  const missingShots = missing.filter(isScreenshot);

  // Al revés: filas del registry que apuntan a ficheros que ya no existen.
  // Las rutas del registry son relativas a public/images/, no a public/images/blog/.
  const allImages = await listImages(IMAGES_ROOT);
  const known = new Set(allImages.map((rel) => basename(rel)));
  const referenced = [...registry.matchAll(/`([^`]+\.(?:webp|png|jpg|jpeg|avif|svg))`/gi)].map((m) => m[1]);
  const orphans = [...new Set(referenced)].filter((ref) => !known.has(basename(ref)));

  if (!quiet && missingEditorial.length) {
    console.log('\n✖ Imágenes editoriales SIN registrar:\n');
    const byArticle = new Map();
    for (const rel of missingEditorial.sort()) {
      const key = basename(rel).replace(EXTENSIONS, '').replace(/-(hero|concept|workflow|dashboard|comparativa|ranking|cesta|app|engranajes|privacidad|variabilidad|profesional|archivos|fundador|herramientas)$/, '');
      if (!byArticle.has(key)) byArticle.set(key, []);
      byArticle.get(key).push(rel);
    }
    for (const [key, list] of [...byArticle].sort()) {
      console.log(`  ${key}  (${list.length})`);
      list.forEach((n) => console.log(`    · ${n}`));
    }
  }

  if (!quiet && missingShots.length) {
    console.log(`\n⚠ Capturas de producto sin listar en la sección "Imágenes de producto REAL" (${missingShots.length}):\n`);
    missingShots.sort().forEach((n) => console.log(`  · ${n}`));
  }

  if (!quiet && orphans.length) {
    console.log('\n⚠ Filas del registry que apuntan a ficheros inexistentes:\n');
    orphans.forEach((o) => console.log(`  · ${o}`));
  }

  const editorialTotal = images.filter((rel) => !isScreenshot(rel)).length;
  const registered = editorialTotal - missingEditorial.length;
  console.log(
    `\nRegistry: ${registered}/${editorialTotal} editoriales registradas · ` +
    `${missingShots.length} capturas sin listar · ${orphans.length} huérfanas`
  );

  if (missingEditorial.length) {
    console.log('\nAñade una fila por imagen en "📋 Registro por artículo" con las 6');
    console.log('dimensiones (ángulo · composición · encuadre · locación · contenido · luz)');
    console.log('antes de dar el artículo por publicable.\n');
    process.exit(1);
  }

  console.log('✔ Todas las imágenes editoriales del blog están catalogadas.\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
