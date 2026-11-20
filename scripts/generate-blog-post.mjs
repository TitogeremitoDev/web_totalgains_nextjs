/**
 * Generador de BORRADORES para el blog de TotalGains, con Claude Opus 5.5.
 *
 * Escribe el texto de un artículo siguiendo la norma del blog y lo guarda en
 * `borradores/blog/<slug>.md` con `published: false`. La web NO lee esa
 * carpeta. Ojo: todo .md que haya en `src/content/blog/` se compila como página
 * aunque diga `published: false` (getAllSlugs no mira ese campo), así que un
 * borrador nunca va ahí. Para publicarlo hay que maquetarlo (4 imágenes,
 * componentes, comprobar los datos marcados [VERIFICAR], llms.txt…), moverlo a
 * `src/content/blog/` y pasar el checklist de la norma del blog.
 *
 * Clave de la API: ANTHROPIC_API_KEY, o `--creditos` para usar la clave de los
 * créditos gratis del plan Max que guarda el panel «Control Claude». El script
 * nunca enseña la clave.
 *
 * Uso (desde TotalGains_NextJS):
 *   npm run generate-blog                          # lista las keywords y cómo seguir
 *   npm run generate-blog -- --slug <slug>         # una keyword de src/data/blogKeywords.json
 *   npm run generate-blog -- --keyword "black friday entrenador" --slug mi-slug \
 *       --categoria negocio [--notas borradores/blog/notas/mi-slug.md] [--largo]
 *   npm run generate-blog -- ... --ver-prompt      # enseña el prompt y lo que costaría, sin gastar
 *   npm run generate-blog:creditos -- --slug <slug>   # lo mismo con la clave de créditos
 *   (--sobrescribir para rehacer un borrador que ya existe)
 */

import Anthropic from '@anthropic-ai/sdk';
import matter from 'gray-matter';
import { readFile, writeFile, mkdir, readdir, appendFile } from 'fs/promises';
import { existsSync, readFileSync } from 'fs';
import { join, dirname, relative, resolve } from 'path';
import { homedir } from 'os';
import { fileURLToPath } from 'url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const FICHERO_KEYWORDS = join(RAIZ, 'src/data/blogKeywords.json');
const DIR_BLOG = join(RAIZ, 'src/content/blog');
const DIR_BORRADORES = join(RAIZ, 'borradores/blog');
const REGISTRO_COSTES = join(DIR_BORRADORES, 'registro-costes.jsonl');
const SITEMAP = join(RAIZ, 'src/app/sitemap.js');
const FICHERO_CLAVE_CREDITOS = join(homedir(), '.config/control-claude/claves/api-creditos.secreto');

const MODELO = 'claude-opus-5-5';
// Dólares por millón de tokens de Claude Opus 5.5 (precios de noviembre de 2026).
// La escritura en caché (5 minutos) cuesta 1,25 veces la entrada.
const PRECIO = { entrada: 4, salida: 20, escrituraCache: 5, lecturaCache: 0.2 };
const CATEGORIAS = ['negocio', 'metodologia', 'herramientas', 'nutricion'];

// ── Argumentos ───────────────────────────────────────────────────────────────

function leerArgumentos() {
  const a = process.argv.slice(2);
  const r = {};
  for (let i = 0; i < a.length; i++) {
    const siguiente = () => {
      const valor = a[i + 1];
      if (valor === undefined || valor.startsWith('--')) throw new Error(`Falta el valor de ${a[i]}`);
      i++;
      return valor;
    };
    switch (a[i]) {
      case '--slug': r.slug = siguiente(); break;
      case '--keyword': r.keyword = siguiente(); break;
      case '--categoria': r.categoria = siguiente(); break;
      case '--notas': r.notas = siguiente(); break;
      case '--list': r.list = true; break;
      case '--largo': r.largo = true; break;
      case '--ver-prompt': r.verPrompt = true; break;
      case '--creditos': r.creditos = true; break;
      case '--sobrescribir': r.sobrescribir = true; break;
      default: throw new Error(`No conozco la opción ${a[i]}`);
    }
  }
  return r;
}

// ── Utilidades ───────────────────────────────────────────────────────────────

/** Fecha de hoy en España (YYYY-MM-DD), no en UTC. */
function hoyEnMadrid() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
}

const contarPalabras = (texto) => texto.split(/\s+/).filter(Boolean).length;
const dolares = (n) => `${n.toFixed(4)} $`;

function costeDe(usage) {
  const entrada = usage.input_tokens ?? 0;
  const escritura = usage.cache_creation_input_tokens ?? 0;
  const lectura = usage.cache_read_input_tokens ?? 0;
  const salida = usage.output_tokens ?? 0;
  return (entrada * PRECIO.entrada + escritura * PRECIO.escrituraCache
    + lectura * PRECIO.lecturaCache + salida * PRECIO.salida) / 1e6;
}

/** Artículos publicados: lo que el modelo puede enlazar y no debe repetir. */
async function articulosPublicados() {
  const ficheros = (await readdir(DIR_BLOG)).filter((f) => f.endsWith('.md')).sort();
  const lista = [];
  for (const f of ficheros) {
    const { data } = matter(await readFile(join(DIR_BLOG, f), 'utf8'));
    if (data.published === false || data.canonical) continue;
    lista.push({ slug: f.replace(/\.md$/, ''), titulo: data.title, descripcion: data.description });
  }
  return lista;
}

/** Páginas fijas de la web, sacadas del sitemap para que no se queden viejas. */
function paginasDeLaWeb() {
  const fuente = readFileSync(SITEMAP, 'utf8');
  const rutas = [...fuente.matchAll(/\$\{baseUrl\}(\/[a-z0-9/_-]*)`/g)].map((m) => m[1]);
  const fuera = new Set(['/', '/privacy/', '/terms/', '/blog/']);
  return [...new Set([...rutas.filter((r) => !fuera.has(r)), '/onboarding/'])];
}

function claveApi(args) {
  if (args.creditos) {
    if (!existsSync(FICHERO_CLAVE_CREDITOS)) {
      throw new Error('No encuentro la clave de créditos del panel «Control Claude» (~/.config/control-claude/claves/).');
    }
    return readFileSync(FICHERO_CLAVE_CREDITOS, 'utf8').trim();
  }
  return process.env.ANTHROPIC_API_KEY;
}

// ── Prompt ───────────────────────────────────────────────────────────────────
// El prompt de sistema no cambia entre artículos (solo cuando se publica uno
// nuevo), así que se guarda en caché: si se sacan varios seguidos, a partir del
// segundo esa parte cuesta 20 veces menos.

function promptDeSistema(articulos, paginas) {
  const listaArticulos = articulos
    .map((a) => `- /blog/${a.slug}/ · ${a.titulo}${a.descripcion ? ` · ${a.descripcion}` : ''}`)
    .join('\n');

  return `Escribes artículos para el blog de TotalGains (https://totalgains.es) firmados por Germán Martínez Calvente, su fundador. Los leen entrenadores personales y nutricionistas que trabajan online en España.

QUÉ ES TOTALGAINS (datos oficiales, no inventes otros)
- Plataforma en español para entrenadores personales, nutricionistas y gimnasios: rutinas, dietas con IA, seguimiento y check-ins, app con la marca del entrenador (marca blanca), base de más de 240.000 alimentos en español, soporte de personas reales.
- Lo más importante de la marca: TODAS las funciones (la IA, la marca blanca, todo) están en TODOS los planes, también en el gratuito. Sin extras de pago. Lo único que cambia entre planes es cuántos atletas activos caben y el soporte.
- Plan gratuito: 5 atletas de por vida, sin tarjeta y sin caducidad.
- Planes de entrenador, IVA incluido: Starter 29,90 €/mes (hasta 25 clientes), Pro 89,90 €/mes (hasta 100), Unlimited 149,90 €/mes (ilimitados).
- Prohibido vender o mencionar como ventaja cobrar a los clientes desde la app, Stripe, SEPA o la facturación automática. Sí puedes hablar de los avisos de renovación.

ESTILO (obligatorio)
- Español de España, tuteando al lector. Profesional y cercano, directo, frases y párrafos cortos.
- No uses nunca la raya larga ni la media (los caracteres «—» y «–»). Usa coma, punto, dos puntos o paréntesis.
- Di «atletas» o «clientes». Nunca «alumnos» ni «alumnas».
- Tono anti-gurú: nada de promesas mágicas, «garantizado» ni cifras inventadas. Si das un dato, un porcentaje o citas un estudio y no estás completamente seguro de que es exacto y real, márcalo justo detrás con [VERIFICAR] para que se compruebe antes de publicar. Lo que sea opinión o experiencia, dilo como tal.
- Competencia: no enlaces nunca a otras webs de software, no des precios de otros (cambian y hay que verificarlos) y no los critiques.
- Menciona TotalGains de forma natural 2 o 3 veces, donde de verdad resuelva lo que se está explicando. No en cada sección.
- Ninguna sección H2 pasa de 400 palabras. Usa listas cuando ayuden a leer.
- No cierres con una «conclusión» genérica: el último H2 antes de las preguntas frecuentes es un cierre con gancho.

ESTRUCTURA EXACTA DEL FICHERO (Markdown, empieza directamente por el frontmatter, sin texto antes ni después y sin \`\`\`)
---
title: "Título con gancho (una pregunta directa, un número, un contraste o un método), máximo 70 caracteres"
seoTitle: "Título para Google con la keyword al principio, máximo 60 caracteres"
description: "Meta descripción con la keyword y un motivo para entrar, máximo 155 caracteres"
date: "<la fecha que te den>"
lastModified: "<la misma fecha>"
category: "<la categoría que te den>"
author: "Germán Martínez Calvente"
readTime: 8
published: false
keywords:
  - "<la keyword principal>"
  - "<de 5 a 7 búsquedas relacionadas de cola larga>"
image: "/images/blog/<slug>-hero.webp"
faqs:
  - q: "<pregunta tal como la buscaría alguien en Google>"
    a: "<respuesta completa en 2 a 4 frases>"
  (entre 5 y 7 preguntas)
---

Después del frontmatter, en este orden:
1. Respuesta rápida para los resúmenes de Google y de las IAs, en este bloque literal:
<div class="tg-callout tg-callout-panic" role="note">
<strong>Respuesta rápida.</strong> (la respuesta entera en 3 a 5 frases)
</div>
2. Una entradilla de 2 párrafos cortos que conecte con el problema del entrenador y diga qué va a encontrar.
3. Una línea con --- y después "## Índice del artículo" con una lista numerada de enlaces a las secciones: 1. [Título](#ancla)
4. Las secciones, cada una así: ## <span id="ancla-corta"></span>Título de la sección (anclas en minúsculas, sin tildes, con guiones). Puedes usar ### dentro.
5. De 2 a 4 consejos destacados en este bloque: <div class="tg-callout" role="note">texto</div>
6. Dónde irán las imágenes: al menos 3 marcas <!-- IMAGEN: qué debe mostrar la imagen, en una frase --> repartidas por el texto, de forma que nunca haya dos H2 seguidos sin una imagen o un bloque destacado entre medias. La imagen principal ya va en el frontmatter.
7. El cierre con gancho.
8. "## <span id="faq"></span>Preguntas frecuentes": las mismas preguntas del frontmatter como ###, con respuestas más cortas (1 o 2 frases).
9. "## Fuentes" solo si has citado estudios o datos de fuera: autores, año, título y revista, y [VERIFICAR] en lo que no tengas seguro. Si no has citado nada, no pongas esta sección.
10. Este bloque literal:
## Sobre el autor

**Germán Martínez Calvente** es fundador y desarrollador de [TotalGains](/software-entrenador-personal/), la plataforma en español para entrenadores personales y nutricionistas online.

- 📍 La Zubia, Granada, España
- 🔗 [Sobre nosotros](/sobre-nosotros/)
- 📸 [Instagram @totalgainsfitness](https://www.instagram.com/totalgainsfitness/)
11. Una frase de llamada a la acción ligada al tema que enlace a /onboarding/ con el texto «empezar gratis con 5 atletas» y diga «de por vida y sin tarjeta, con todas las funciones incluidas».
12. "## Artículos relacionados que te pueden interesar": 3 o 4 artículos de la lista de abajo, así: - 🧭 **[Título corto](/blog/slug/)**: subtítulo de una línea

ENLACES
- Al menos 10 enlaces internos repartidos por el texto, con un texto natural (nunca «aquí» ni «este artículo»). Usa SOLO estas direcciones, tal cual, con la barra final.
- Al menos 1 enlace externo a una fuente de autoridad (INE, Wikipedia, BOE, PubMed, la Agencia Tributaria…), nunca a otro software.
- No repitas el tema de un artículo que ya existe: si se toca, enlázalo.

Páginas de la web:
${paginas.map((p) => `- ${p}`).join('\n')}

Artículos publicados en el blog:
${listaArticulos}`;
}

function promptDeUsuario({ keyword, slug, categoria, largo, fecha, notas }) {
  const longitud = largo
    ? 'Artículo largo (guía o comparativa): entre 1.800 y 2.500 palabras sin contar el frontmatter.'
    : 'Artículo estándar: entre 1.200 y 1.500 palabras sin contar el frontmatter.';
  return `Escribe el artículo.

KEYWORD PRINCIPAL: "${keyword}"
SLUG: ${slug}
CATEGORÍA: ${categoria}
FECHA: ${fecha}
LONGITUD: ${longitud}
${notas ? `\nINDICACIONES PARA ESTE ARTÍCULO (síguelas por encima de cualquier otra cosa):\n${notas.trim()}\n` : ''}
Que el lector termine sabiendo hacer algo concreto que antes no sabía.`;
}

// ── Revisión del borrador ────────────────────────────────────────────────────

function revisarBorrador(texto, { slugsBlog, paginas, largo }) {
  const avisos = [];
  const ok = [];
  let datos = {};
  let cuerpo = texto;
  try {
    const fm = matter(texto);
    datos = fm.data;
    cuerpo = fm.content;
  } catch (e) {
    avisos.push(`El frontmatter no se puede leer (${e.message.split('\n')[0]})`);
  }

  const palabras = contarPalabras(cuerpo);
  const [min, max] = largo ? [1800, 2500] : [1200, 1500];
  // El cuerpo incluye el autor, las preguntas y los relacionados: se da un margen.
  (palabras < min || palabras > max + 600 ? avisos : ok).push(`Palabras del cuerpo: ${palabras} (objetivo ${min}-${max}, con autor y preguntas incluidos)`);

  const rayas = (texto.match(/[—–]/g) || []).length;
  (rayas ? avisos : ok).push(`Rayas largas o medias: ${rayas}`);

  const alumnos = (texto.match(/alumn/gi) || []).length;
  (alumnos ? avisos : ok).push(`«alumno/a»: ${alumnos}`);

  const desc = String(datos.description || '');
  (desc.length > 155 || !desc ? avisos : ok).push(`Meta descripción: ${desc.length} caracteres (máx. 155)`);

  const seo = String(datos.seoTitle || '');
  (seo.length > 60 || !seo ? avisos : ok).push(`seoTitle: ${seo.length} caracteres (máx. 60)`);

  const faqs = Array.isArray(datos.faqs) ? datos.faqs.length : 0;
  (faqs < 5 ? avisos : ok).push(`Preguntas frecuentes: ${faqs} (mín. 5)`);

  const imagenes = (texto.match(/<!-- IMAGEN:/g) || []).length;
  (imagenes < 3 ? avisos : ok).push(`Huecos para imágenes: ${imagenes} + la principal (mín. 3 + 1)`);

  const enlaces = [...cuerpo.matchAll(/\]\((\/[^)\s#]*)(#[^)\s]*)?\)/g)].map((m) => m[1]);
  const rotos = [...new Set(enlaces.filter((r) => {
    const blog = r.match(/^\/blog\/([^/]+)\/?$/);
    if (blog) return !slugsBlog.has(blog[1]);
    return !paginas.includes(r);
  }))];
  const internos = enlaces.length;
  (internos < 10 ? avisos : ok).push(`Enlaces internos: ${internos} (mín. 10)`);
  (rotos.length ? avisos : ok).push(`Enlaces internos que no existen: ${rotos.length ? rotos.join(', ') : 0}`);

  const prohibidos = texto.match(/stripe|sepa|facturaci[oó]n autom[aá]tica|cobr\w* desde la app/gi) || [];
  (prohibidos.length ? avisos : ok).push(`Menciones a cobros o facturación: ${prohibidos.length ? [...new Set(prohibidos)].join(', ') : 0}`);

  const verificar = (texto.match(/\[VERIFICAR\]/g) || []).length;
  if (verificar) avisos.push(`Datos marcados [VERIFICAR]: ${verificar} (comprobarlos antes de publicar)`);

  if (datos.published !== false) avisos.push('El borrador no tiene published: false');

  return { avisos, ok, palabras };
}

// ── Principal ────────────────────────────────────────────────────────────────

async function principal() {
  const args = leerArgumentos();
  const keywords = JSON.parse(await readFile(FICHERO_KEYWORDS, 'utf8'));

  if (args.list || (!args.slug && !args.keyword)) {
    console.log('\n📋 Keywords de src/data/blogKeywords.json:\n');
    for (const k of keywords) {
      const icono = k.status === 'done' ? '✅' : k.status === 'borrador' ? '📝' : '⏳';
      const publicado = existsSync(join(DIR_BLOG, `${k.slug}.md`)) ? '  (ya hay artículo con ese slug)' : '';
      console.log(`  ${icono} [${k.category.padEnd(12)}] ${k.slug}${publicado}`);
    }
    console.log('\nVarias se pisan con artículos que ya existen: elige con cuidado.');
    console.log('Para sacar un borrador:');
    console.log('  npm run generate-blog -- --slug <slug>');
    console.log('  npm run generate-blog -- --keyword "..." --slug <slug> --categoria <negocio|metodologia|herramientas|nutricion> [--notas fichero.md] [--largo]');
    console.log('Añade --ver-prompt para ver lo que costaría sin gastar, o usa npm run generate-blog:creditos para tirar de los créditos gratis.\n');
    return;
  }

  // Qué artículo: de la lista de keywords o libre.
  let objetivo;
  const deLaLista = keywords.find((k) => k.slug === args.slug);
  if (args.keyword) {
    if (!args.slug) throw new Error('Con --keyword hace falta también --slug.');
    objetivo = { keyword: args.keyword, slug: args.slug, category: args.categoria || deLaLista?.category };
  } else if (deLaLista) {
    objetivo = { ...deLaLista, category: args.categoria || deLaLista.category };
  } else {
    throw new Error(`El slug «${args.slug}» no está en blogKeywords.json. Para un tema libre, añade --keyword "..." y --categoria.`);
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(objetivo.slug)) throw new Error('El slug solo puede llevar minúsculas, números y guiones.');
  if (!CATEGORIAS.includes(objetivo.category)) throw new Error(`Categoría no válida: usa ${CATEGORIAS.join(', ')}.`);
  if (existsSync(join(DIR_BLOG, `${objetivo.slug}.md`))) throw new Error(`Ya hay un artículo publicado con el slug «${objetivo.slug}». Elige otro.`);

  const salida = join(DIR_BORRADORES, `${objetivo.slug}.md`);
  if (existsSync(salida) && !args.sobrescribir && !args.verPrompt) {
    throw new Error(`Ya existe el borrador ${relative(RAIZ, salida)}. Usa --sobrescribir para rehacerlo.`);
  }

  const notas = args.notas ? await readFile(resolve(process.cwd(), args.notas), 'utf8') : '';
  const articulos = await articulosPublicados();
  const paginas = paginasDeLaWeb();
  const fecha = hoyEnMadrid();
  const sistema = promptDeSistema(articulos, paginas);
  const usuario = promptDeUsuario({
    keyword: objetivo.keyword, slug: objetivo.slug, categoria: objetivo.category,
    largo: args.largo, fecha, notas,
  });
  const peticion = {
    model: MODELO,
    max_tokens: 64000,
    // Opus 5.5 piensa siempre; el esfuerzo decide cuánto. Por defecto es
    // «medium»: para escribir un artículo bueno se le pide «high».
    thinking: { type: 'adaptive' },
    output_config: { effort: 'high' },
    system: [{ type: 'text', text: sistema, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: usuario }],
  };

  const apiKey = claveApi(args);

  if (args.verPrompt) {
    console.log(`\n── PROMPT DE SISTEMA ──\n${sistema}\n\n── PETICIÓN ──\n${usuario}\n`);
    if (apiKey) {
      // Contar tokens es gratis.
      const client = new Anthropic({ apiKey });
      const { input_tokens: n } = await client.messages.countTokens({
        model: MODELO, system: peticion.system, messages: peticion.messages,
      });
      const entrada = (n * PRECIO.entrada) / 1e6;
      console.log(`Entrada: ${n} tokens = ${dolares(entrada)}.`);
      // Medido el 20-nov-2026: un artículo estándar con esfuerzo «high» sacó 20.405 tokens (0,45 $).
      console.log(`Con unos 12.000-25.000 tokens de salida (texto + lo que piensa), el artículo costaría entre ${dolares(entrada + 0.24)} y ${dolares(entrada + 0.50)}.\n`);
    } else {
      console.log('(Sin clave no puedo contar los tokens; añade --creditos o ANTHROPIC_API_KEY.)\n');
    }
    return;
  }

  if (!apiKey) {
    throw new Error('Falta la clave: usa npm run generate-blog:creditos (créditos gratis del plan Max) o define ANTHROPIC_API_KEY.');
  }

  console.log(`\n🤖 Borrador con ${MODELO}: «${objetivo.keyword}»`);
  const inicio = Date.now();
  const client = new Anthropic({ apiKey });

  // Streaming: un artículo con su razonamiento tarda minutos y una petición
  // normal podría cortarse. Si Opus 5.5 se negara a escribir algo, «fallbacks»
  // hace que otro modelo lo intente dentro de la misma llamada.
  const stream = client.messages.stream(
    { ...peticion, fallbacks: 'default' },
    { headers: { 'anthropic-beta': 'server-side-fallback-2026-07-01' } },
  );

  // El SDK instalado (0.39) solo copia output_tokens del último evento: el uso
  // completo y el motivo de una negativa se leen del evento en bruto.
  let ultimoDelta = null;
  let escribiendo = false;
  stream.on('streamEvent', (ev) => { if (ev.type === 'message_delta') ultimoDelta = ev; });
  stream.on('text', () => {
    if (!escribiendo) { escribiendo = true; process.stdout.write('\n   Escribiendo'); }
    process.stdout.write('.');
  });
  process.stdout.write('   Pensando');
  const reloj = setInterval(() => { if (!escribiendo) process.stdout.write(` ${Math.round((Date.now() - inicio) / 1000)}s`); }, 15000);

  let mensaje;
  try {
    mensaje = await stream.finalMessage();
  } finally {
    clearInterval(reloj);
  }
  const segundos = Math.round((Date.now() - inicio) / 1000);
  console.log(` ✓ (${segundos} s)\n`);

  const usage = { ...mensaje.usage };
  for (const [k, v] of Object.entries(ultimoDelta?.usage ?? {})) if (typeof v === 'number') usage[k] = v;
  const coste = costeDe(usage);
  const modeloQueRespondio = mensaje.model;
  const stopReason = ultimoDelta?.delta?.stop_reason ?? mensaje.stop_reason;

  await mkdir(DIR_BORRADORES, { recursive: true });
  await appendFile(REGISTRO_COSTES, `${JSON.stringify({
    fecha: new Date().toISOString(), slug: objetivo.slug, modelo: modeloQueRespondio,
    esfuerzo: peticion.output_config.effort, stop_reason: stopReason, segundos,
    entrada: usage.input_tokens ?? 0, escritura_cache: usage.cache_creation_input_tokens ?? 0,
    lectura_cache: usage.cache_read_input_tokens ?? 0, salida: usage.output_tokens ?? 0,
    coste_usd: Number(coste.toFixed(4)),
  })}\n`, 'utf8');

  const lineaCoste = `💶 Coste real: ${dolares(coste)} (entrada ${usage.input_tokens ?? 0}`
    + ` + caché escrita ${usage.cache_creation_input_tokens ?? 0} + caché leída ${usage.cache_read_input_tokens ?? 0}`
    + ` · salida ${usage.output_tokens ?? 0} tokens, con lo que piensa)`;

  if (stopReason === 'refusal') {
    const detalle = ultimoDelta?.delta?.stop_details;
    console.log(lineaCoste);
    throw new Error(`El modelo no ha querido escribirlo${detalle?.category ? ` (motivo: ${detalle.category})` : ''}. Cambia el enfoque o las notas.`);
  }
  if (stopReason === 'max_tokens') {
    console.log(lineaCoste);
    throw new Error('Se ha cortado por longitud antes de terminar. Vuelve a lanzarlo.');
  }

  let texto = mensaje.content.filter((b) => b.type === 'text').map((b) => b.text).join('').trim();
  texto = texto.replace(/^```(?:markdown|md)?\s*\n/, '').replace(/\n```\s*$/, '').trim();
  if (!texto.startsWith('---')) {
    console.log(lineaCoste);
    throw new Error('La respuesta no empieza por el frontmatter. Vuelve a lanzarlo.');
  }

  // Lo que no se deja al modelo: borrador siempre sin publicar, fecha de hoy en
  // España y tiempo de lectura calculado.
  let cuerpo = texto;
  try { cuerpo = matter(texto).content; } catch { /* la revisión de abajo lo avisa */ }
  const minutos = Math.max(5, Math.round(contarPalabras(cuerpo) / 200));
  texto = texto
    .replace(/^published:\s*.*$/m, 'published: false')
    .replace(/^readTime:\s*.*$/m, `readTime: ${minutos}`)
    .replace(/^date:\s*.*$/m, `date: "${fecha}"`)
    .replace(/^lastModified:\s*.*$/m, `lastModified: "${fecha}"`);

  await writeFile(salida, `${texto}\n`, 'utf8');

  if (deLaLista && !args.keyword) {
    const i = keywords.findIndex((k) => k.slug === objetivo.slug);
    keywords[i].status = 'borrador';
    await writeFile(FICHERO_KEYWORDS, `${JSON.stringify(keywords, null, 2)}\n`, 'utf8');
  }

  const revision = revisarBorrador(texto, {
    slugsBlog: new Set(articulos.map((a) => a.slug)), paginas, largo: args.largo,
  });
  console.log(`📝 Borrador guardado: ${relative(RAIZ, salida)} (published: false, la web no lo lee)`);
  if (modeloQueRespondio !== MODELO) console.log(`⚠️  Lo ha escrito ${modeloQueRespondio} (respaldo): el coste es aproximado.`);
  console.log(lineaCoste);
  console.log('\nRevisión automática:');
  for (const l of revision.ok) console.log(`   ✅ ${l}`);
  for (const l of revision.avisos) console.log(`   ⚠️  ${l}`);
  console.log('\nAntes de publicar: imágenes, componentes, datos [VERIFICAR], llms.txt y el checklist de la norma del blog.\n');
}

principal().catch((err) => {
  if (err instanceof Anthropic.AuthenticationError) {
    console.error('❌ La clave de la API no vale (o no es de esta organización).');
  } else if (err instanceof Anthropic.RateLimitError) {
    console.error('❌ Demasiadas peticiones o sin saldo de momento. Prueba en un rato.');
  } else if (err instanceof Anthropic.APIError) {
    console.error(`❌ La API ha respondido ${err.status}: ${err.message}`);
  } else {
    console.error(`❌ ${err.message}`);
  }
  process.exit(1);
});
