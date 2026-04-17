/**
 * Convierte todas las imágenes PNG de /public/carrousel y /public/screenshots
 * a WebP con el tamaño correcto para su uso en pantalla.
 *
 * Carrousel: máx 1200px de ancho (2x retina del display de 600px)
 * Screenshots: máx 600px de ancho  (2x retina del display de 300px)
 *
 * Ejecutar: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const jobs = [
  { dir: join(publicDir, 'carrousel'),   maxWidth: 1200, quality: 82 },
  { dir: join(publicDir, 'screenshots'), maxWidth: 600,  quality: 80 },
];

let totalSaved = 0;

for (const { dir, maxWidth, quality } of jobs) {
  const files = await readdir(dir);
  const pngs = files.filter(f => extname(f).toLowerCase() === '.png');

  console.log(`\n📁 ${dir.split('/').slice(-2).join('/')} — ${pngs.length} imágenes`);

  for (const file of pngs) {
    const inputPath  = join(dir, file);
    const outputPath = join(dir, basename(file, '.png') + '.webp');

    const before = (await stat(inputPath)).size;

    await sharp(inputPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);

    const after = (await stat(outputPath)).size;
    const saved = before - after;
    totalSaved += saved;

    const pct = Math.round((saved / before) * 100);
    console.log(
      `  ✅ ${file.padEnd(35)} ${kb(before)} → ${kb(after)}  (-${pct}%)`
    );
  }
}

console.log(`\n🎉 Total ahorrado: ${kb(totalSaved)} de imágenes\n`);

function kb(bytes) {
  return (bytes / 1024).toFixed(0).padStart(4) + ' KiB';
}
