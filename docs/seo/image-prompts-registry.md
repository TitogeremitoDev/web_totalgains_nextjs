# Registro de Prompts de Imágenes — TotalGains Blog

> ⚠️ **OBLIGATORIO LEER ESTE ARCHIVO ENTERO antes de generar cualquier imagen nueva para el blog.**
> Tras generar, **AÑADIR la fila correspondiente** a la tabla del artículo Y revisar si algún patrón pasa a estar saturado (mover a la sección "no usar más").

## Reglas

1. Cada artículo del blog **mínimo 3 imágenes** (norma del framework SEO TG)
2. **Dentro de un artículo**: cada imagen debe variar en **≥3 dimensiones** respecto a las otras 2 del mismo artículo
3. **Cross-artículo**: si una nueva imagen comparte **≥4 dimensiones** con CUALQUIER existente del último año, **reescribir desde cero**
4. **NUNCA hex codes** (#xxxxxx) en el prompt — Gemini los renderiza literalmente como texto en la pantalla generada. Describir colores en palabras siempre
5. **NUNCA mencionar "TotalGains" o "TG" en el prompt** si la imagen muestra una pantalla — la API tiende a renderizar la palabra como texto visible (sale "TotaiGains", "TotalGalns", etc.)
6. **Cuidado con manos humanas frontales** — salen deformes a menudo. Preferir POV trasero, perfil, silueta o flat lay sin humanos
7. **Cuidado con texto legible en UI** — Gemini inventa palabras. Mejor pedir "illegible micro-typography" o "soft glowing interface" sin pretender texto real

## Dimensiones a controlar (chequear las 6 antes de generar)

| Dimensión | Valores posibles |
|---|---|
| **Ángulo** | overhead / flat lay · eye-level · low angle · POV trasero · macro detalle · 3/4 isométrico · frontal centrado · low angle hacia arriba |
| **Composición** | centro · regla de tercios · simetría perfecta · split-screen vertical · diagonal · descentrada izq · descentrada der |
| **Encuadre** | wide cinemático · medium · close-up · macro extremo |
| **Locación** | escritorio interior · terraza exterior · gym interior · cocina · estudio fondo color · 3D abstracto · café/restaurante · vista urbana · parque |
| **Contenido principal** | laptop · móvil · tablet · ingredientes frescos · equipo gym · cuaderno+pluma · abstracto 3D · figura humana de espaldas · interior espacio · bebida/copa |
| **Luz** | golden hour cálido · sidelight matinal · cenital suave · contraluz · volumetric estudio · luz dura estudio · ambiente nocturno · sunrise frío |

---

## 🚫 PATRONES SATURADOS — NO USAR MÁS

Estos conceptos han salido tantas veces que añadir una más fatiga la consistencia visual del blog.

### Overhead flat lay con laptop centrada + objetos a los lados (7 usos)
Archivos: `gym-boutique-workflow`, `marca-blanca-perfil-coach`, `nutricion-planes-hero`, `nutricion-planes-workflow`, `harbiz-precios-hero`, `trainerize-precios-hero`, `marca-blanca-hero` (parcial)

**⛔ No usar en los próximos 6 artículos.** Si una sección lo requiere, sustituir por close-up macro, eye-level con escena, o vista lateral.

### Isométrico 3D con cubos / pedestales / formas geométricas (6 usos)
Archivos: `gym-boutique-comparativa`, `marca-blanca-modelos`, `nutricion-planes-software`, `harbiz-addons-stack`, `trainerize-addons-stack`, `primer-verano-comparativa`

**⛔ No usar en los próximos 4 artículos.** Si se necesita un concept abstracto, usar split-screen literal, balanza, time-lapse stylized, o exploded view 2D.

### Comparativa "antes/después" caos vs orden (2 usos)
Archivos: `primer-verano-comparativa` (3D), `marca-blanca-hero` (2 móviles)

**⛔ Limitar a 1 vez cada 3 artículos.**

---

## 🎯 POOL DISPONIBLE — Conceptos NO usados todavía

Antes de inventar uno nuevo, considerar esta lista:

| # | Concepto | Ángulo sugerido | Notas |
|---|---|---|---|
| 1 | POV trasero / over-the-shoulder de coach en gym mirando móvil | eye-level levemente bajo | Sin manos detalladas |
| 2 | Cinematic wide shot de gym vacío al amanecer | wide low angle | Luz dramática lateral |
| 3 | Close-up macro de mancuerna con reflejos especulares | macro extremo | Fondo navy + acentos violeta |
| 4 | Vista lateral de figura sentada al café trabajando, ventana grande | eye-level perfil | Cuidado manos, mejor POV trasero 3/4 |
| 5 | Bodegón vertical de ingredientes brillantes flotando sobre fondo oscuro | 3/4 isométrico bajo | Para nutrición |
| 6 | Maqueta de móvil flotando con sombra dura sobre fondo de color sólido | frontal centrado | Estilo Apple-ad |
| 7 | Detail macro de smartwatch en muñeca borrosa con datos en pantalla | macro close-up | Cuidado con texto en UI |
| 8 | Time-lapse stylized de páginas de calendar volando | medium con motion blur | Concept abstracto |
| 9 | Knolling perfecto de productos de gym alineados | overhead | Variante del flat lay pero MUY ordenado |
| 10 | Vista interior arquitectónica de gym boutique premium | wide eye-level | Locación nueva |
| 11 | Close-up macro de manos firmando contrato | macro | Riesgo manos — solo si SE pide específicamente |
| 12 | Detalle macro de teclado con dedo cerca de tecla iluminada | macro | Sin dedo completo, solo punta |
| 13 | Split-screen vertical literal antes/después fotográfico real | medium frontal | Distinto al 3D split |
| 14 | Wide shot de balcón al atardecer con figura humana de espaldas borrosa | wide eye-level | Mood verano/relax |
| 15 | Vista de mostrador de gym al amanecer con luces encendidas | medium frontal | Locación gym sin gente |

---

## 📋 Registro por artículo

### blog/primer-verano-entrenador-personal-2026
*Generado 2026-06-19 (regenerado tras feedback usuario)*

| Archivo | Ángulo | Composición | Encuadre | Locación | Contenido | Luz | Mood |
|---|---|---|---|---|---|---|---|
| `primer-verano-hero.webp` | eye-level | tercios derecha | wide | terraza exterior con vista urbana | móvil con app + limonada con hielo + gafas + libreta cuero | golden hour cálido | summer mood premium |
| `primer-verano-workflow.webp` | low angle macro | diagonal con bokeh | macro extremo | escritorio interior oak | cuaderno cuero cognac + pluma brass + laptop blur violeta + taza humeante | sidelight matinal | focused morning work |
| `primer-verano-comparativa.webp` | frontal centrado | simetría perfecta | medium | 3D estudio fondo navy | balanza brass + caos analógico izq + formas geom violeta-coral der | volumetric estudio | concept render |

### blog/software-gimnasios-pequenos-boutique-2026
*Generado 2026-06-12*

| Archivo | Ángulo | Composición | Encuadre | Locación | Contenido | Luz | Mood |
|---|---|---|---|---|---|---|---|
| `gym-boutique-hero.webp` | eye-level | tablet derecha | wide | gym moderno interior | tablet pared con dashboard violeta + dumbbells + esterilla | matinal industrial cálida | gym morning premium |
| `gym-boutique-comparativa.webp` | 3/4 isométrico | 3 cubos centro | medium | 3D estudio navy | cubos cristal con UI dentro (central TG violeta más grande) | volumetric arriba | concept render ⚠️SATURADO |
| `gym-boutique-workflow.webp` | overhead flat lay | laptop centro asimétrico | wide | escritorio walnut dark | laptop con dashboard + móvil + planning + agua + earbuds + plant | cenital suave | premium workspace ⚠️SATURADO |

### blog/crear-planes-nutricionales-clientes-entrenador-personal
*Generado 2026-06-12*

| Archivo | Ángulo | Composición | Encuadre | Locación | Contenido | Luz | Mood |
|---|---|---|---|---|---|---|---|
| `nutricion-planes-hero.webp` | overhead flat lay | centro | wide | escritorio honey wood | PDF nutrición + móvil violeta + ingredientes frescos + bowl + olive oil | ventana izquierda | editorial flatlay ⚠️SATURADO |
| `nutricion-planes-software.webp` | 3/4 isométrico | cubo central | medium | 3D estudio navy | cubo cristal con ingredientes flotando + macro icons violeta | volumetric | concept render ⚠️SATURADO |
| `nutricion-planes-workflow.webp` | overhead flat lay | centro asimétrico | wide | escritorio honey wood | laptop con KPIs + scale + meal prep containers + chat móvil | ventana superior | nutrition workspace ⚠️SATURADO |

### blog/app-marca-blanca-entrenadores-personales
*Generado 2026-06-12 — ⚠️ generadas con paleta verde antes de regla brand colors, candidatas a regenerar*

| Archivo | Ángulo | Composición | Encuadre | Locación | Contenido | Luz | Mood |
|---|---|---|---|---|---|---|---|
| `marca-blanca-hero.webp` | eye-level | 2 móviles lateral | medium | estudio dark | 2 móviles (genérico vs branded) | contraluz suave | product comparison |
| `marca-blanca-modelos.webp` | 3/4 isométrico | 2 elementos lado a lado | medium | 3D estudio | pedestal + cubos representando modelos | volumetric | concept render ⚠️SATURADO |
| `marca-blanca-perfil-coach.webp` | overhead flat lay | centro asimétrico | wide | escritorio luz natural | laptop + móvil + libreta + sticky + café + planta | ventana superior | flatlay ⚠️SATURADO |

### blog/harbiz-precios-2026
*Generado 2026-05-23*

| Archivo | Ángulo | Composición | Encuadre | Locación | Contenido | Luz | Mood |
|---|---|---|---|---|---|---|---|
| `harbiz-precios-hero.webp` | overhead flat lay | centro | wide | escritorio | laptop + objetos comparativos | golden hour | editorial pricing ⚠️SATURADO |
| `harbiz-addons-stack.webp` | 3/4 isométrico | stack vertical | medium | 3D estudio | cubos transparentes apilados con iconos add-ons | volumetric | concept render ⚠️SATURADO |

### blog/trainerize-precios-2026
*Generado 2026-05-13*

| Archivo | Ángulo | Composición | Encuadre | Locación | Contenido | Luz | Mood |
|---|---|---|---|---|---|---|---|
| `trainerize-precios-hero.webp` | overhead flat lay | centro | wide | escritorio | laptop + objetos | golden hour | editorial pricing ⚠️SATURADO |
| `trainerize-addons-stack.webp` | 3/4 isométrico | stack vertical | medium | 3D estudio | cubos add-ons apilados | volumetric | concept render ⚠️SATURADO |
| `trainerize-alternativas.webp` | mixed | comparison | medium | mixed | competencia comparativa | mixed | comparison |

---

### blog/cliente-no-sigue-la-dieta-motivos-coach-2026
*Generado 2026-08-21 con `gemini-3-pro-image` (los modelos `imagen-*:predict` dejaron de existir; el script se actualizó ese mismo dia)*

| Archivo | Ángulo | Composición | Encuadre | Locación | Contenido | Luz | Mood |
|---|---|---|---|---|---|---|---|
| `dieta-adherencia-hero.webp` | eye-level levemente bajo | tercios sin centro focal | medium-wide | cocina doméstica de noche | nevera abierta casi vacía + encimera con 2 huevos, arroz a medias, un tomate y el plan impreso curvándose | fría de nevera contra bombilla cálida | documental nocturno, honesto |
| `dieta-adherencia-alternativas.webp` | 3/4 bajo | simétrica de borde a borde | wide macro | estudio fondo navy | ingredientes flotando por parejas equivalentes (pescado blanco/salmón, huevos/pollo, arroz/quinoa, brócoli/espárragos, lima/limón) | lateral dura + glow coral central | bodegón comercial |
| `dieta-adherencia-mes-tarde.webp` | medium frontal levemente elevado | diagonal con motion blur | medium | fondo navy abstracto sin locación | hojas de calendario volando, una quieta boca abajo abajo a la derecha | contraluz frío violeta + derrame coral inferior izquierdo | conceptual cinematográfico |
| `dieta-adherencia-app-opciones.webp` | captura de app | recorte horizontal | UI móvil | pantalla Nutrición del cliente | 2 opciones de desayuno equivalentes con su botón de cambio | n/a (captura real) | producto real |
| `dieta-adherencia-app-ciclo.webp` | captura de app | recorte horizontal | UI móvil | pantalla Nutrición del cliente | cabecera + kcal/macros + aviso de fase del ciclo con su consejo | n/a (captura real) | producto real |
| `dieta-adherencia-ia-favoritos.webp` | captura de app | vertical completa | UI modal | configurador de dieta IA | perfil del cliente, última dieta cargada, control de parecido, usar favoritos / evitar rechazos | n/a (captura real) | producto real |
| `dieta-adherencia-ia-revisar.webp` | captura de app | vertical completa | UI modal | revisión de dieta IA | avisos del sistema antes de guardar y varias opciones por comida | n/a (captura real) | producto real |

**Origen de las 4 capturas reales:** `_capturas/cliente-no-sigue-la-dieta-motivos-coach-2026/` (buzón gitignored, los originales PNG se conservan ahí). `app-opciones` y `app-ciclo` son dos recortes de la MISMA captura de la pantalla de Nutrición del cliente. German confirmó el 21-ago-2026 que toda esta UI está publicada.

**Notas:** el pool #5 ("bodegón vertical de ingredientes flotando", marcado *para nutrición*) se usó aquí y **pasa a estar consumido**. La primera versión de `dieta-adherencia-alternativas` salió con todo amontonado en el tercio izquierdo y el 60 % del cuadro vacío; se regeneró pidiendo explícitamente "filling the entire frame edge to edge, balanced symmetrical composition". Lección: con estos modelos hay que pedir el reparto horizontal de forma literal.

---

### blog/captar-clientes-septiembre-entrenador-personal
*Generado 2026-08-22 con `gemini-3-pro-image`*

| Archivo | Ángulo | Composición | Encuadre | Locación | Contenido | Luz | Mood |
|---|---|---|---|---|---|---|---|
| `septiembre-ventana-hero.webp` | low angle a ras de suelo | perspectiva de un punto con fuga central | wide | gimnasio interior vacío al amanecer | racks de mancuernas y barras, cero humanos, sombras largas hacia cámara | amanecer duro entrando por ventanal | la sala minutos antes de llenarse |
| `septiembre-vuelta-decision.webp` | eye-level | tercios, sujeto descentrado a la derecha | wide | balcón mediterráneo exterior al atardecer | figura de espaldas desenfocada + móvil, llaves y vaso nítidos en primer plano | contraluz de golden hour | última tarde tranquila |
| `septiembre-preparacion.webp` | cenital 90° | knolling en rejilla milimétrica | medium | superficie de hormigón claro | libreta, pluma, cinta métrica, cronómetro, mancuerna coral, toalla, tarjeta, móvil boca abajo | cenital suave sin sombra | orden obsesivo, todo listo |
| `septiembre-conversacion-pendiente.webp` | frontal levemente elevado | centrado con aire | medium close | estudio, fondo coral liso | móvil flotando con la pantalla apagada | dura direccional, sombra larga en diagonal | gráfico, algo sin contestar |
| `septiembre-los-de-siempre.webp` | macro a ras de suelo | diagonal, sujeto en el tercio izquierdo | macro extremo | rack de gimnasio en penumbra | una mancuerna iluminada, el resto del rack a oscuras y desenfocado | haz único lateral, bokeh extremo | lo que dejas de mirar |

**Notas:** cinco imágenes porque desde el 22-ago-2026 el mínimo son **4 por artículo**, repartidas de forma que ningún tramo de dos H2 seguidos se quede sin nada visual (petición de German: *"tenemos una norma de como mínimo 4 imágenes y mejora el diseño"*). Consumidos los conceptos **#2** (gym vacío al amanecer) y **#14** (balcón al atardecer con figura de espaldas) del pool. ⚠️ El concepto de **hojas de calendario volando** quedó quemado en `dieta-adherencia-mes-tarde` (21-ago): NO reutilizarlo en piezas de temporada aunque encaje, que es justo donde apetece.

---

### blog/errores-ia-plan-cliente-verificar
*Generado 2026-08-28 con `gemini-3-pro-image`*

| Archivo | Ángulo | Composición | Encuadre | Locación | Contenido | Luz | Mood |
|---|---|---|---|---|---|---|---|
| `errores-ia-hero.webp` | macro a ras de superficie | diagonal cerrada | macro extremo | teclado en oscuridad | una tecla retroiluminada SIN letras, el resto en negro y bokeh | luz interior de la tecla, violeta | el medio segundo antes de enviar |
| `errores-ia-libre.webp` | 3/4 elevado | centrada, partida por una diagonal de luz | medium | estudio, fondo navy | plato de salmón con media ración iluminada y media invisible en sombra | direccional dura desde arriba izquierda | lo que está pero no se cuenta |
| `errores-ia-ejercicio.webp` | POV trasero levemente elevado | sujeto en el tercio izquierdo | medium wide | gimnasio en penumbra | silueta de espaldas ante una máquina de poleas bajo un foco | cenital fría + resplandor coral lejano | duda, no saber qué hacer |
| `errores-ia-firma.webp` | macro a ras de escritorio | sujeto en el tercio derecho | macro | escritorio de nogal | pluma de plumín dorado sobre folios con tipografía ilegible | lateral cálida rasante | decisión deliberada |

**Notas:** consumidos del pool los conceptos **#1** (POV trasero) y **#12** (macro de teclado, resuelto SIN dedo: solo la tecla). Truco que funcionó: pedir teclas **en blanco, sin letras ni símbolos**, evita que el modelo invente tipografía. La del salmón sale de un concepto nuevo (sujeto partido por una diagonal de luz para que media parte desaparezca) que merece la pena reutilizar cuando haya que enseñar algo presente pero no contabilizado.

---

## 📂 Imágenes legacy (no generadas en este flujo)

Solo registradas para evitar repetir conceptos. **Antes de generar una nueva, verificar visualmente si alguna legacy ya cubre el concepto.**

| Archivo | Artículo | Notas |
|---|---|---|
| `comparativa-software-2026-hero.webp` | mejores-software | legacy |
| `comparativa-software-2026-index.webp` | mejores-software | legacy |
| `comparativa-software-2026-dashboard.webp` | mejores-software | legacy |
| `comparativa-software-2026-migracion.webp` | mejores-software | legacy |
| `cuanto_cobra_hero.webp` | cuanto-cobra | legacy |
| `cuanto_cobra_value.webp` | cuanto-cobra | legacy |
| `errores-entrenadores-hero.webp` | errores-entrenadores | legacy |
| `errores-entrenadores-caos.webp` | errores-entrenadores | legacy |
| `errores-entrenadores-gestion.webp` | errores-entrenadores | legacy |
| `hero_trainer_clients.webp` | conseguir-clientes | legacy |
| `migracion-software-fase-decision.webp` | como-migrar | legacy |
| `migracion-software-comunicacion-clientes.webp` | como-migrar | legacy |
| `plan-entrenamiento-hero.webp` | crear-plan | legacy |
| `plan-entrenamiento-evaluacion.webp` | crear-plan | legacy |
| `plan-entrenamiento-progresion.webp` | crear-plan | legacy |
| `trainer_content_creation.webp` | conseguir-clientes | legacy |

---

## 🖼️ Imágenes de producto REAL (no inventar conceptos)

### Capturas de IA de dietas (`public/images/blog/ia-totalgains/`)
*Tomadas el 8-may-2026. ⚠️ El configurador de dietas ha cambiado desde entonces (ver commits `b09a489`, `9527a68`, `420323a`, `079c8a0` del repo de la app, todos posteriores al changelog de 1.3.14). **Verificar contra la versión publicada antes de reutilizarlas en un artículo nuevo.**

| Archivo | Qué muestra | Usado en |
|---|---|---|
| `06-metodos-crear-dieta.webp` | Modal con las 4 formas de crear un plan (Dieta Completa, Plan Flex, Importar archivo, Generar con IA) | `ia-entrenador-personal-rutinas-dietas` |
| `07-parametros-dieta-ia.webp` | Configurador de IA: objetivo, estructura por opciones o por días, kcal por tipo de día | `ia-entrenador-personal-rutinas-dietas` |
| `09-dieta-revision-web.webp` | Revisión previa a asignar, con OPCIÓN 1 y OPCIÓN 2 por comida (web) | `ia-entrenador-personal-rutinas-dietas` |
| `10-dieta-revision-movil.webp` | La misma revisión en vista móvil | `ia-entrenador-personal-rutinas-dietas` |


Las screenshots reales del producto en `public/images/gym/` NO se regeneran nunca. Son capturas reales del dashboard de TotalGains.

| Archivo | Contenido | Cuándo usar |
|---|---|---|
| `gym/dashboard.webp` | Panel supervisor del gimnasio en producción | Para mostrar el producto real (landing /para-gimnasios/, blog software-gym) |
| `gym/clientes.webp` | Vista listado de clientes del gym | Para mostrar gestión de socios |
| `gym/clases.webp` | Calendario de clases del gym con ocupación | Para mostrar agenda y reservas |
| `gym/pagos.webp` | Vista de pagos del gym con KPIs financieros | Para mostrar cobros y churn |

---

## 🔄 Workflow obligatorio al generar imágenes

### Antes de generar

1. Leer este archivo completo
2. Revisar sección "🚫 SATURADOS" y descartar esos patterns
3. Elegir N conceptos del "🎯 POOL DISPONIBLE" o inventar uno nuevo
4. Para cada concepto, **escribir las 6 dimensiones explícitas** antes de redactar el prompt
5. Verificar que las N elegidas son distintas entre sí en ≥3 dimensiones
6. Redactar prompts sin hex codes, sin "TotalGains" como palabra en pantalla, con descripción de paleta en palabras

### Después de generar

1. Verificar visualmente las imágenes (`Read` tool)
2. Si dos salen demasiado parecidas → regenerar la segunda con concepto distinto
3. Añadir una nueva fila a la sección **📋 Registro por artículo** con las 6 dimensiones de cada imagen
4. Si un concepto entra en saturación (4+ usos), moverlo a **🚫 SATURADOS**
5. Si se inventó un concepto nuevo no listado, considerar añadirlo a **🎯 POOL DISPONIBLE** para futuros artículos

---

## Última actualización

**2026-08-28** — Añadidos `blog/errores-ia-plan-cliente-verificar` (4 imágenes). Consumidos #1 y #12 del pool. Quedan sin usar: 4, 7, 10, 11, 13, 15.

**2026-08-22** — Añadido `blog/captar-clientes-septiembre-entrenador-personal` (2 imágenes). Consumidos los conceptos #2, #3, #6, #9 y #14 del pool. Quedan sin usar: 1, 4, 7, 10, 11, 12, 13, 15. ⚠️ Mínimo 4 imágenes por artículo desde hoy.

**2026-08-21** — Añadido `blog/cliente-no-sigue-la-dieta-motivos-coach-2026` (2 imágenes). Consumido el concepto #5 del pool. El script `scripts/generate_image.py` se migró de `imagen-*:predict` a `gemini-3-pro-image:generateContent`. Desde hoy `npm run check-images` comprueba que ninguna imagen editorial se quede sin registrar.

**2026-06-19** — Creación inicial del registry tras feedback del usuario sobre imágenes idénticas y hex codes renderizados como texto. Catalogadas 17 imágenes recientes generadas en sesión + 16 legacy + 4 screenshots reales.
