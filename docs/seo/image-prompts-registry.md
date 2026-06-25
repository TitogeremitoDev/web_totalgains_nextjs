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

**2026-06-19** — Creación inicial del registry tras feedback del usuario sobre imágenes idénticas y hex codes renderizados como texto. Catalogadas 17 imágenes recientes generadas en sesión + 16 legacy + 4 screenshots reales.
