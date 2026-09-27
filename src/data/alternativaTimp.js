/* ──────────────────────────────────────────────
   Comparativa con Timp (timp.pro), software español de reservas y gestión
   para centros deportivos. Primera alternativa del producto de GIMNASIO: las
   demás de /alternativas/ comparan producto de entrenador.

   ⛔ TOTALGAINS PRIMERO (German, 27-sep-2026). La primera versión abría con
   las tablas de precios, donde Timp empieza en 50 €, y dedicaba tres tarjetas
   a «cuándo te encaja mejor Timp»: «les estoy dando más publicidad a Timp que
   a mí». Orden fijo: qué incluye TotalGains → funciones comparadas → precio al
   final, comparando el plan de Timp que hace falta para tener lo mismo. Nada
   de filas ni secciones que vendan al competidor.

   ⚠️ La veracidad no cambia (LGP): todo lo de Timp sale de su página de
   precios oficial, consultada el 27-sep-2026. Ni esa página ni sus términos
   (versión 09-07-2026) dicen si los precios llevan IVA, así que se reproducen
   tal cual y la cuenta con IVA va en condicional. Antes de tocar un número,
   volver a mirar la fuente y cambiar la fecha.
   Lo de TotalGains sale de productSchema.js (precios) y del inventario de
   public/llms.txt (funciones). Sin cobro dentro de la app: no prometerlo.
   ────────────────────────────────────────────── */

import { PLANES_GYM } from "@/data/productSchema";

export const FECHA_VERIFICACION_TIMP = "27 de septiembre de 2026";
export const FUENTE_TIMP = "https://timp.pro/precios/";

// Precio de entrada del producto de gimnasio: fuente única en PLANES_GYM.
export const DESDE_TG_GYM = PLANES_GYM.find((p) => p.id === "gym-starter").price;

export const COMPARATIVA_TIMP = [
    {
        aspecto: "Entrenadores",
        tg: "Ilimitados en todos los planes",
        timp: "Según el plan: 1, 3, 10 o 15 profesionales; más, con Enterprise a medida",
    },
    {
        aspecto: "Funciones",
        tg: "Todas en todos los planes",
        timp: "Se suman al subir de plan, y el precio puede variar con módulos extra",
    },
    {
        aspecto: "Tienda",
        tg: "Incluida: catálogo con stock y pedidos desde la app del socio",
        timp: "Desde el plan Pro (130 €/mes)",
    },
    {
        aspecto: "Seguimiento de socios y estadísticas",
        tg: "Incluido: riesgo de baja con la asistencia real, panel del gestor y comunicados segmentados",
        timp: "CRM y estadísticas desde el plan Pro (130 €/mes)",
    },
    {
        aspecto: "Registro horario del equipo",
        tg: "Incluido",
        timp: "Desde el plan Basic (85 €/mes)",
    },
    {
        aspecto: "Rutinas y dietas para los socios",
        tg: "Con IA, a partir de la biblioteca de ejercicios del centro",
        timp: "Módulo de entrenamiento desde Basic; su página de precios no menciona IA",
    },
    {
        aspecto: "Base de alimentos",
        tg: "Más de 240.000 alimentos en español",
        timp: "No aparece en su página de precios",
    },
    {
        aspecto: "App con la marca de tu centro",
        tg: "Incluida: logo, nombre y colores del centro",
        timp: "No aparece en su página de precios",
    },
];

export const POR_QUE_TG = [
    {
        titulo: "Entrenadores ilimitados",
        texto: "Da acceso a cada monitor, fisio o entrenador de prácticas sin que cambie la factura: el precio depende de tus socios activos, no del tamaño de tu equipo.",
    },
    {
        titulo: "Todo incluido desde el primer plan",
        texto: "Clases con reserva y lista de espera, tienda, servicios de pago por sesión, cuotas que se registran y facturan solas, fichajes y estadísticas. No hay módulos que contratar aparte.",
    },
    {
        titulo: "Entreno y nutrición para tus socios",
        texto: "Tus entrenadores generan rutinas y dietas con IA con la biblioteca del centro y más de 240.000 alimentos en español, y el socio las tiene en la misma app donde reserva.",
    },
    {
        titulo: "Tu marca, no la nuestra",
        texto: "La app que descargan tus socios lleva el logo, el nombre y los colores de tu centro, en todos los planes.",
    },
];

/* El precio, AL FINAL y comparando lo mismo: el plan de Timp que hace falta
   para tener tienda, CRM y estadísticas, frente a TotalGains, que lo incluye
   todo. TotalGains cambia de plan por socios activos, no por entrenadores. */
export const PRECIO_IGUALADO = [
    {
        caso: "Tienda, CRM y estadísticas, con hasta 10 entrenadores",
        timp: "Plan Pro: 130 €/mes",
        tg: `Gym Starter: ${DESDE_TG_GYM} €/mes con IVA incluido`,
    },
    {
        caso: "Lo mismo, con 11 a 15 entrenadores",
        timp: "Plan Premium: 170 €/mes",
        tg: "El mismo plan: los entrenadores no cuentan",
    },
    {
        caso: "Lo mismo, con más de 15 entrenadores",
        timp: "Enterprise: precio a medida",
        tg: "El mismo plan: los entrenadores no cuentan",
    },
];

/* Fuente única de la página y del FAQPage del schema: el schema no puede
   declarar preguntas que el visitante no ve. */
export const TIMP_FAQS = [
    {
        question: "¿Qué diferencia hay entre TotalGains y Timp?",
        answer: "TotalGains incluye todas sus funciones en todos los planes y no limita los entrenadores: el precio depende de tus socios activos. Timp cobra por centro según cuántos profesionales usan la herramienta (1, 3, 10 o 15) y va sumando funciones al subir de plan: la tienda online, el CRM y las estadísticas están desde su plan Pro. Además, TotalGains incluye rutinas y dietas con IA para tus socios y una app con la marca de tu centro.",
    },
    {
        question: "¿Cuánto cuesta TotalGains para un gimnasio?",
        answer: "149, 199 o 249 €/mes con IVA incluido, según tengas hasta 100 socios activos, de 100 a 200 o más de 200. Todas las funciones y los entrenadores ilimitados están en los tres planes. Con pago anual pagas 10 mensualidades.",
    },
    {
        question: "¿Cuántos entrenadores puedo tener?",
        answer: "Ilimitados, en los tres planes. En Timp depende del plan: 1, 3, 10 o 15 profesionales, y a partir de ahí el plan Enterprise, con precio a medida.",
    },
    {
        question: "¿Puedo pasar mis socios de Timp a TotalGains?",
        answer: "Sí. La migración de socios, horarios, planes y bonos está incluida y la hace nuestro equipo en español. La configuración base suele quedar lista en tres a cinco días.",
    },
    {
        question: "¿Cómo cobro las cuotas con TotalGains?",
        answer: "Las cuotas, los bonos y las ventas se registran y se facturan en TotalGains, y cobras con lo que ya usas: domiciliación, TPV, Bizum, transferencia o efectivo. TotalGains no se lleva comisión por cobro.",
    },
];
