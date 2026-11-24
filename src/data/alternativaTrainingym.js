/* ──────────────────────────────────────────────
   Comparativa con Trainingym (trainingym.com), software español de gestión
   para gimnasios, estudios y boxes. Segunda alternativa del producto de
   GIMNASIO, después de la de Timp. Plan: PLAN_gimnasios-chatgpt-gemini.md (S2).

   ⛔ TOTALGAINS PRIMERO (German, 27-sep-2026): qué incluye TotalGains →
   funciones comparadas → precio al final, comparando el plan de Trainingym
   que hace falta para tener lo mismo. Nada de filas ni secciones que vendan
   al competidor. Sin enlaces a su web (German, 24-nov-2026).

   ⚠️ Veracidad (publicidad comparativa): todo lo de Trainingym sale de sus
   tres páginas de tarifas (gimnasios, estudios y boxes), leídas y vueltas a
   comprobar el 24-nov-2026. Sus precios van sin IVA y con pago anual; las
   cuentas con IVA (×1,21) son nuestras y la página lo dice. Antes de tocar un
   número, volver a mirar la fuente y cambiar la fecha.
   ⚠️ «App con tu marca»: la de TotalGains es la app de TotalGains con el logo
   y los colores del centro, no una app aparte en las tiendas. Decirlo así.
   Lo de TotalGains sale de productSchema.js (precios) y de public/llms.txt.
   ────────────────────────────────────────────── */

import { PLANES_GYM } from "@/data/productSchema";

const DESDE_TG_GYM = PLANES_GYM.find((p) => p.id === "gym-starter").price;

export const TRAININGYM_FAQS = [
    {
        question: "¿Qué diferencia hay entre TotalGains y Trainingym?",
        answer: "TotalGains incluye todas sus funciones en todos los planes, con el IVA incluido y sin puesta en marcha de pago: el precio solo depende de tus socios activos. Trainingym tiene un plan Básico y un plan Pro para cada tipo de centro (box, estudio y gimnasio), con precios sin IVA, pago anual y una puesta en marcha de pago único. La app con la marca del centro, el análisis de nutrición y dietas y la atención humana figuran en su plan Pro.",
    },
    {
        question: "¿Cuánto cuesta TotalGains para un gimnasio?",
        answer: "149, 199 o 249 €/mes con IVA incluido, según tengas hasta 100 socios activos, de 100 a 200 o más de 200. Todas las funciones y los entrenadores ilimitados están en los tres planes. Con pago anual pagas 10 mensualidades.",
    },
    {
        question: "¿La app lleva la marca de mi centro?",
        answer: "Sí, en todos los planes. Tus socios se descargan la app de TotalGains y, al entrar, la ven con el logo, el nombre y los colores de tu centro; no es una app aparte en las tiendas. En Trainingym, el plan Básico lleva la app con la marca de Trainingym y la app con tu marca llega con el plan Pro.",
    },
    {
        question: "¿Puedo pasar mis socios de Trainingym a TotalGains?",
        answer: "Sí. La migración de socios, horarios, planes y bonos está incluida y la hace nuestro equipo en español. La configuración base suele quedar lista en tres a cinco días.",
    },
    {
        question: "¿Cómo cobro las cuotas con TotalGains?",
        answer: "Tus socios pagan cuotas, bonos y pedidos desde la app con la cuenta de Stripe del centro, y lo que cobres en recepción (domiciliación, TPV, Bizum, transferencia o efectivo) se registra igual. Todo se factura en TotalGains, que no se lleva comisión por cobro.",
    },
];

export const ALTERNATIVA_TRAININGYM = {
    nombre: "Trainingym",
    slug: "trainingym",
    fecha: "24 de noviembre de 2026",
    fuente: "sus páginas de tarifas para gimnasios, estudios y boxes (trainingym.com)",
    subtitulo: `Todas las funciones en todos los planes, la app con la marca de tu centro desde el primero y rutinas y dietas con IA para tus socios. Desde ${DESDE_TG_GYM} €/mes con IVA incluido, sin puesta en marcha de pago.`,
    notaCta: "Todo incluido · IVA incluido · Migración desde Trainingym incluida",
    intro: [
        "Si vienes de Trainingym o lo estás valorando, la diferencia de fondo está en qué entra en el precio. Trainingym tiene un plan Básico y un plan Pro para cada tipo de centro, con precios sin IVA, cuota mensual con pago anual y una puesta en marcha de pago único. En el plan Básico, la app del socio lleva la marca de Trainingym; la app con la marca del centro, el análisis de nutrición y dietas y la atención humana figuran en el plan Pro.",
        "En TotalGains pagas según tus socios activos, con el IVA incluido, y todo está en todos los planes: clases con reserva y lista de espera, cuotas que se registran y se facturan solas, tienda con venta en mostrador, rutinas y dietas con IA y la app que tus socios ven con el logo y los colores de tu centro.",
    ],
    comparativa: [
        {
            aspecto: "Precio",
            tg: "149, 199 o 249 €/mes con IVA incluido, según tus socios activos",
            rival: "Sin IVA y con pago anual. Box: 99 o 169 €. Estudio: 119 o 189 €. Gimnasio: 199 o 319 €",
        },
        {
            aspecto: "Puesta en marcha",
            tg: "Incluida y sin coste: nuestro equipo pasa tus socios, horarios, planes y bonos",
            rival: "Pago único de 99, 265 o 580 € sin IVA, según el plan",
        },
        {
            aspecto: "App con la marca de tu centro",
            tg: "Incluida en todos los planes: tus socios ven la app de TotalGains con tu logo, tu nombre y tus colores",
            rival: "El plan Básico lleva la app con la marca de Trainingym; la app con tu marca llega con el plan Pro",
        },
        {
            aspecto: "Dietas para tus socios",
            tg: "Incluidas: dietas con IA y más de 240.000 alimentos en español",
            rival: "El análisis de nutrición y dietas figura en el plan Pro",
        },
        {
            aspecto: "Rutinas",
            tg: "Incluidas: con IA, a partir de la biblioteca de ejercicios del centro",
            rival: "En su tarifa de gimnasio, desde el plan Básico; en la de estudio no figuran en la lista de planes",
        },
        {
            aspecto: "Facturación",
            tg: "Incluida: cuotas y bonos se registran y se facturan solos",
            rival: "Facturación automática mediante integración con tecnología externa",
        },
        {
            aspecto: "Soporte",
            tg: "Por personas y en español, en todos los planes",
            rival: "Plan Básico: agente virtual y centro de ayuda. La atención humana figura en el plan Pro",
        },
        {
            aspecto: "Forma de pago",
            tg: "Mes a mes y sin permanencia; si pagas el año, 10 mensualidades",
            rival: "Cuota mensual con pago anual",
        },
    ],
    porQue: [
        {
            titulo: "El precio que ves es el que pagas",
            texto: "Con el IVA incluido, sin puesta en marcha de pago y sin pago anual obligatorio. El precio solo cambia con tus socios activos.",
        },
        {
            titulo: "Tu marca desde el primer plan",
            texto: "Tus socios ven la app con el logo, el nombre y los colores de tu centro en todos los planes, también en el de 149 €.",
        },
        {
            titulo: "Entreno y nutrición para tus socios",
            texto: "Tus entrenadores generan rutinas y dietas con IA con la biblioteca del centro y más de 240.000 alimentos en español, y el socio las tiene en la misma app donde reserva.",
        },
        {
            titulo: "Hablas con personas",
            texto: "El soporte es en español y lo dan personas, en todos los planes. Y la migración desde tu programa actual la hace nuestro equipo, sin coste.",
        },
    ],
    precioLead: "Lo que en Trainingym llega con el plan Pro, en TotalGains viene incluido. Esto es lo que cuesta tener la app con tu marca y las dietas en cada uno.",
    precioIgualado: [
        {
            caso: "Estudio de hasta 100 socios",
            rival: "Studio Pro: 189 €/mes sin IVA (228,69 € con IVA)",
            tg: `Gym Starter: ${DESDE_TG_GYM} €/mes con IVA incluido`,
        },
        {
            caso: "Box de hasta 100 atletas",
            rival: "Box Pro: 169 €/mes sin IVA (204,49 € con IVA)",
            tg: `Gym Starter: ${DESDE_TG_GYM} €/mes con IVA incluido`,
        },
        {
            caso: "Estudio de 100 a 200 socios",
            rival: "Studio Pro: 239 €/mes sin IVA (289,19 € con IVA)",
            tg: "Gym Pro: 199 €/mes con IVA incluido",
        },
        {
            caso: "Gimnasio de más de 200 socios",
            rival: "Business Pro: 319 €/mes sin IVA (385,99 € con IVA), hasta 500 socios",
            tg: "Gym Elite: 249 €/mes con IVA incluido",
        },
    ],
    precioNota:
        "Precios de Trainingym publicados en su web el 24 de noviembre de 2026, sin IVA y con pago anual; la cuenta con el 21 % de IVA es nuestra. Aparte va su puesta en marcha de pago único: con el plan Pro, la Premium de 580 € sin IVA (701,80 € con IVA); el hardware (tornos, lectores y básculas) se factura aparte. Sus planes Básico cuestan 99 € (box), 119 € (estudio) y 199 € (gimnasio) sin IVA, con la app con la marca de Trainingym y sin el análisis de nutrición y dietas. TotalGains para gimnasios cuesta 149, 199 o 249 €/mes con IVA incluido según tus socios activos (hasta 100, de 100 a 200 o más de 200), sin puesta en marcha de pago.",
    faqs: TRAININGYM_FAQS,
};
