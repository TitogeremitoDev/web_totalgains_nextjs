/**
 * Generador automático de posts para el blog de TotalGains.
 *
 * Requisito: ANTHROPIC_API_KEY en variables de entorno.
 *
 * Uso:
 *   # Genera el siguiente keyword pendiente automáticamente:
 *   node scripts/generate-blog-post.mjs
 *
 *   # Genera un keyword específico por slug:
 *   node scripts/generate-blog-post.mjs --slug como-crear-plan-entrenamiento-personalizado
 *
 *   # Lista los keywords pendientes:
 *   node scripts/generate-blog-post.mjs --list
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const KEYWORDS_FILE = join(ROOT, 'src/data/blogKeywords.json');
const BLOG_DIR = join(ROOT, 'src/content/blog');

// ── Helpers ──────────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--slug' && args[i + 1]) result.slug = args[++i];
    if (args[i] === '--list') result.list = true;
  }
  return result;
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function estimateReadTime(text) {
  const words = text.split(/\s+/).length;
  return Math.max(5, Math.round(words / 200));
}

// ── Prompt ───────────────────────────────────────────────────────────────────

function buildPrompt(keyword, slug, category) {
  return `Eres un experto en marketing de contenidos B2B para el sector fitness español.
Escribe un artículo de blog completo en español para la web de TotalGains (https://totalgains.es),
que es un software SaaS para entrenadores personales online.

KEYWORD OBJETIVO: "${keyword}"
SLUG DEL ARTÍCULO: ${slug}
CATEGORÍA: ${category}

REQUISITOS DEL ARTÍCULO:
- Longitud: entre 1.500 y 2.500 palabras (sin contar el frontmatter)
- Tono: profesional pero cercano, directo, sin florituras
- Estructura: H2 y H3 bien distribuidos, párrafos cortos
- Menciona TotalGains de forma NATURAL en 2-3 ocasiones (no en cada párrafo)
- Incluye un CTA al final: "Empieza gratis 14 días" enlazando a /onboarding/
- Escribe en formato Markdown
- NO uses asteriscos para bullets de primer nivel dentro de un párrafo. Usa listas Markdown estándar.
- Usa negritas (**texto**) para resaltar puntos clave, no de forma excesiva

FRONTMATTER REQUERIDO (exactamente este formato):
---
title: "Título SEO optimizado (max 65 caracteres)"
description: "Meta description de 140-160 caracteres que incluya el keyword"
date: "${new Date().toISOString().split('T')[0]}"
category: "${category}"
readTime: [número de minutos estimado]
published: true
keywords: ["${keyword}", "keyword secundario 1", "keyword secundario 2"]
---

Empieza directamente con el frontmatter. No añadas ningún texto antes ni después del artículo.
No uses triple backtick al inicio ni al final.
El artículo debe ser útil, detallado y accionable. Que el lector aprenda algo concreto.`;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs();

  // Read keywords file
  const keywords = JSON.parse(await readFile(KEYWORDS_FILE, 'utf8'));

  // --list mode
  if (args.list) {
    console.log('\n📋 Keywords del blog:\n');
    keywords.forEach(k => {
      const icon = k.status === 'done' ? '✅' : '⏳';
      console.log(`  ${icon} [${k.category.padEnd(12)}] ${k.keyword}`);
    });
    console.log('\n');
    return;
  }

  // Find target keyword
  let target;
  if (args.slug) {
    target = keywords.find(k => k.slug === args.slug);
    if (!target) {
      console.error(`❌ Keyword con slug "${args.slug}" no encontrado en blogKeywords.json`);
      process.exit(1);
    }
  } else {
    target = keywords.find(k => k.status === 'pending');
    if (!target) {
      console.log('🎉 ¡Todos los keywords están generados! Añade nuevos en src/data/blogKeywords.json');
      return;
    }
  }

  // Check if file already exists
  const outputPath = join(BLOG_DIR, `${target.slug}.md`);
  if (existsSync(outputPath) && !args.slug) {
    console.log(`⚠️  El post "${target.slug}" ya existe. Usa --slug ${target.slug} para sobreescribir.`);
    process.exit(0);
  }

  // Check API key
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('❌ Falta la variable de entorno ANTHROPIC_API_KEY.');
    console.error('   Configúrala así: export ANTHROPIC_API_KEY=sk-ant-...');
    process.exit(1);
  }

  console.log(`\n🤖 Generando post para: "${target.keyword}"\n`);

  // Call Claude API
  const client = new Anthropic({ apiKey });
  const prompt = buildPrompt(target.keyword, target.slug, target.category);

  let generatedContent = '';

  process.stdout.write('   Llamando a Claude API');

  const stream = await client.messages.stream({
    model: 'claude-opus-4-5',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  });

  for await (const chunk of stream) {
    if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
      generatedContent += chunk.delta.text;
      process.stdout.write('.');
    }
  }

  console.log(' ✓\n');

  // Ensure content starts with frontmatter
  const cleaned = generatedContent.trim();
  if (!cleaned.startsWith('---')) {
    console.error('❌ La respuesta no tiene frontmatter válido. Intenta de nuevo.');
    process.exit(1);
  }

  // Estimate read time and patch if needed
  const readTime = estimateReadTime(cleaned);
  const patched = cleaned.replace(/readTime: \[número de minutos estimado\]/, `readTime: ${readTime}`);

  // Save file
  await mkdir(BLOG_DIR, { recursive: true });
  await writeFile(outputPath, patched, 'utf8');

  // Mark as done in keywords.json
  const idx = keywords.findIndex(k => k.slug === target.slug);
  keywords[idx].status = 'done';
  await writeFile(KEYWORDS_FILE, JSON.stringify(keywords, null, 2), 'utf8');

  const wordCount = cleaned.split(/\s+/).length;
  console.log(`✅ Post guardado: src/content/blog/${target.slug}.md`);
  console.log(`   Palabras: ~${wordCount} | Lectura: ~${readTime} min\n`);
  console.log('💡 Para construir el blog: npm run build\n');
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
