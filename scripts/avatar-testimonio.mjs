#!/usr/bin/env node
/**
 * avatar-testimonio.mjs — prepara la foto de un testimonio.
 *
 * Recorta al cuadrado por el centro, redimensiona y guarda en WebP dentro de
 * public/testimonials/, que es de donde tira Testimonials.jsx.
 *
 *   node scripts/avatar-testimonio.mjs ~/Descargas/foto.jpg rjtrainer
 *   → public/testimonials/rjtrainer.webp
 *
 * El avatar se pinta a 52px, así que 208px cubre pantallas retina de sobra.
 * Las fotos de Nacho y Lorena pesan 4-5 KB con este mismo criterio.
 */

import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';

const LADO = 208;
const CALIDAD = 82;
const DESTINO_DIR = path.join(process.cwd(), 'public', 'testimonials');

const [origen, slug] = process.argv.slice(2);

if (!origen || !slug) {
    console.error('\nUso: node scripts/avatar-testimonio.mjs <ruta-de-la-foto> <slug>');
    console.error('Ej.: node scripts/avatar-testimonio.mjs ~/Descargas/rjtrainer.jpg rjtrainer\n');
    process.exit(1);
}

if (!fs.existsSync(origen)) {
    console.error(`\n❌ No encuentro la imagen: ${origen}\n`);
    process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(slug)) {
    console.error('\n❌ El slug solo puede llevar minúsculas, números y guiones.\n');
    process.exit(1);
}

const destino = path.join(DESTINO_DIR, `${slug}.webp`);
fs.mkdirSync(DESTINO_DIR, { recursive: true });

const meta = await sharp(origen).metadata();

await sharp(origen)
    // cover recorta por el centro: en una foto de perfil cuadrada no toca nada,
    // y en una rectangular se queda con el centro en vez de deformarla.
    .resize(LADO, LADO, { fit: 'cover', position: 'centre' })
    .webp({ quality: CALIDAD })
    .toFile(destino);

const kb = (fs.statSync(destino).size / 1024).toFixed(1);
console.log(`\n✓ ${path.relative(process.cwd(), destino)}`);
console.log(`  ${meta.width}×${meta.height} ${meta.format} → ${LADO}×${LADO} webp · ${kb} KB`);
console.log(`\n  Ahora en Testimonials.jsx, en la entrada de ese testimonio:`);
console.log(`    avatar: "/testimonials/${slug}.webp",\n`);
