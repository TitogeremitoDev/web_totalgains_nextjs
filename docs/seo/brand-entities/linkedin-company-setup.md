# LinkedIn Company Page Setup — TotalGains

**Objetivo**: crear LinkedIn Company Page oficial para TotalGains.

**Por qué importa**:
- LinkedIn Company Pages aparecen en Google SERPs para queries "[empresa] linkedin"
- Refuerza Knowledge Panel de Google junto con Wikidata
- Útil para B2B outreach futuro (cuando contactes con coaches profesionales o aggregators)
- Da legitimidad institucional al author Person schema del fundador

**Tiempo estimado**: 30-45 min.

> Necesitas una cuenta personal de LinkedIn validada para crear Company Page. Si no tienes perfil personal aún, créalo antes con Germán Martínez Calvente.

---

## Paso 1 · Acceder al creador (1 min)

URL: https://www.linkedin.com/company/setup/new/

Login con tu cuenta personal de LinkedIn.

---

## Paso 2 · Tipo de página (1 min)

LinkedIn ofrece 4 opciones:

- ✅ **Small business** (menos de 200 empleados) — esta es la tuya
- Medium to large business
- Showcase page
- Educational institution

Selecciona **Small business**.

---

## Paso 3 · Datos básicos (10 min)

| Campo | Valor a pegar |
|---|---|
| **Name** | `TotalGains` |
| **LinkedIn public URL** | Probar `totalgains` primero. Si está ocupado: `totalgains-es`, `totalgains-fitness`, `totalgains-app` |
| **Website** | `https://totalgains.es` |
| **Industry** | `Software Development` (primario) |
| **Company size** | `1-10 employees` |
| **Company type** | `Self-employed` o `Privately held` |
| **Logo** | Sube `/home/german/Escritorio/APKFITNESS/TotalGains_NextJS/assets-capterra/logo-capterra-512.png` |
| **Tagline** | `Software para entrenadores personales en español: IA, marca blanca y todo incluido desde 29,90 €/mes` |

---

## Paso 4 · About section (10 min)

Pega esto en el campo **About** (LinkedIn limita a ~2.000 caracteres):

```
TotalGains es la plataforma SaaS B2B todo-en-uno para entrenadores
personales, nutricionistas online y gimnasios pequeños en España y
Latinoamérica.

Fundada en 2025 por Germán Martínez Calvente —entrenador personal y
desarrollador full-stack— TotalGains nació para resolver el problema
de los add-ons acumulables que disparan el coste real de las
plataformas internacionales como Trainerize, Harbiz o MyPT Hub.

A diferencia de la competencia, incluye en su plan base lo que otros
cobran como add-ons separados: IA para generar rutinas y dietas con
tu propia base de datos, app móvil con marca blanca, cobros
recurrentes Stripe sin comisiones, gestión de clases grupales con
waitlist y multi-coach con permisos granulares para gimnasios.

Planes desde 29,90 €/mes (Starter, 25 clientes) hasta 149,90 €/mes
(Unlimited, clientes ilimitados). Plan gratuito de por vida para 3
clientes sin tarjeta. Migración asistida en español desde Trainerize
y Harbiz incluida en todos los planes.

Sede: La Zubia, Granada (España).

— Soporte: soporte@totalgains.es
— Web: https://totalgains.es
— App iOS / Android
```

---

## Paso 5 · Specialties (5 min)

Añade estas specialties (separadas por comas o una por línea según el formulario):

- Personal trainer software
- Fitness SaaS
- White label fitness app
- AI workout generator
- Nutrition planning software
- Gym management
- Multi-coach platform
- Spanish fitness software
- Personal trainer Spain
- Recurring billing Stripe

---

## Paso 6 · Cover image (3 min)

Sube como cover: `/home/german/Escritorio/APKFITNESS/TotalGains_NextJS/assets-capterra/screenshot-board.png` o `screenshot-rutinas.png`

Dimensiones recomendadas por LinkedIn: 1192 × 220 px. Si tu imagen es 1280×720, LinkedIn la cortará — preview antes de guardar.

---

## Paso 7 · Llamada a verificación (5 min)

LinkedIn pide demostrar que eres responsable autorizado de la empresa:
1. Marca la casilla "I verified that I am the official representative..."
2. Acepta los Page Terms
3. Crea la página

LinkedIn la activa de inmediato. NO requiere aprobación de terceros (a diferencia de Capterra).

---

## Paso 8 · Configuración post-creación (10 min)

1. **Custom URL**: Pages Admin → Settings → Manage public URL → idealmente `linkedin.com/company/totalgains` (más limpio que la URL larga inicial)
2. **Featured groups**: invita a 3-5 LinkedIn de contactos profesionales del sector fitness a "seguir" la página (para activar el algoritmo de descubrimiento)
3. **Primer post**: anuncio breve "TotalGains ya está en LinkedIn. Si eres entrenador o gimnasio y quieres seguir nuestra evolución, te invitamos a seguir la página." Posteo de bienvenida ayuda a salir del estado "0 followers" frío

---

## Paso 9 · Pegar la URL al sitio (1 min)

Una vez creada, la URL será tipo:
```
https://www.linkedin.com/company/totalgains/
```

**Pásamela en el chat** para que la añada a:
- `src/app/page.js` → Organization.sameAs
- `src/app/sobre-nosotros/page.js` → Organization.sameAs

También en el sameAs del Person (#founder) si tienes perfil personal verificado:
```
https://www.linkedin.com/in/[tu-handle-personal]/
```

---

## Tras la creación: estrategia mínima

LinkedIn Pages se beneficia de actividad mínima para no parecer "abandonada":

- **1 post/mes mínimo** durante 6 meses (puede ser repost de blog posts, casos éxito, milestones)
- **Conecta tu perfil personal** como administrador
- **Invita a tus contactos profesionales** a seguir la página (LinkedIn permite 250 invitaciones/mes gratis)

Si no vas a postear regularmente, mejor que la página "exista" estática que ausente. Google indexa el listado de "Software Development companies in Spain" y aparecer ahí ya cuenta para brand authority.

---

## Resultado esperado

Tras creación de Wikidata + LinkedIn Company Page + Trustpilot ya activo, el brand query "totalgains" debería empezar a moverse de NR a top 20 en 4-8 semanas. La combinación de las 3 entidades dispara Knowledge Panel candidacy en Google.
