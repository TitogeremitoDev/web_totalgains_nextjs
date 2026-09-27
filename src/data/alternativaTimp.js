/* ──────────────────────────────────────────────
   Comparativa con Timp (timp.pro), software español de reservas y gestión
   para centros deportivos. Es la primera alternativa del producto de
   GIMNASIO: las demás de /alternativas/ comparan producto de entrenador con
   AlternativaCompetidoresContent, que pinta ✅/❌ en todas las filas. Aquí ese
   formato mentiría: en cobro dentro de la app gana Timp, y se dice.

   ⚠️ Publicidad comparativa (LGP): todo lo de Timp sale de su página de
   precios oficial, consultada el 27-sep-2026. Su web NO indica si los precios
   llevan IVA, así que se reproducen tal cual y se avisa al lector. Antes de
   tocar un número, volver a mirar la fuente y cambiar la fecha.
   Lo de TotalGains sale de productSchema.js (precios) y del inventario de
   public/llms.txt (funciones). Sin cobro dentro de la app: no prometerlo.
   ────────────────────────────────────────────── */

import { PLANES_GYM } from "@/data/productSchema";

export const FECHA_VERIFICACION_TIMP = "27 de septiembre de 2026";
export const FUENTE_TIMP = "https://timp.pro/precios/";

export const PLANES_TIMP = [
    { nombre: "Starter", precio: "50 €/mes", profesionales: "1 profesional" },
    { nombre: "Basic", precio: "85 €/mes", profesionales: "Hasta 3" },
    { nombre: "Pro", precio: "130 €/mes", profesionales: "Hasta 10" },
    { nombre: "Premium", precio: "170 €/mes", profesionales: "Hasta 15" },
    { nombre: "Enterprise", precio: "A medida", profesionales: "A medida" },
];

// Precio: fuente única en PLANES_GYM. Aquí solo se añade el tramo de socios.
const SOCIOS_GYM = {
    "gym-starter": "Hasta 100",
    "gym-pro": "De 100 a 200",
    "gym-elite": "Más de 200",
};

export const PLANES_TG_GYM = PLANES_GYM.map((p) => ({
    nombre: p.name.replace("TotalGains ", ""),
    precio: `${p.price} €/mes`,
    socios: SOCIOS_GYM[p.id],
}));

export const COMPARATIVA_TIMP = [
    {
        aspecto: "Entrenadores o profesionales",
        tg: "Ilimitados en los tres planes",
        timp: "1, 3, 10 o 15 según el plan; Enterprise, a medida",
    },
    {
        aspecto: "Reservas de clases",
        tg: "Desde la app del socio, con lista de espera automática y plazo de cancelación configurable",
        timp: "Desde su app y su web en todos los planes; gestión de colas desde Basic",
    },
    {
        aspecto: "Cobro de cuotas y bonos",
        tg: "Se registran y se facturan en TotalGains, y el socio paga en el centro o por tu vía habitual (domiciliación, TPV, Bizum, transferencia o efectivo). No hay pago dentro de la app",
        timp: "Pagos dentro de la app en todos los planes",
    },
    {
        aspecto: "Facturación",
        tg: "De proforma a factura fiscal, con su numeración",
        timp: "Facturación electrónica en todos los planes",
    },
    {
        aspecto: "Tienda",
        tg: "Catálogo con stock, tallas o sabores, y pedidos desde la app del socio, en los tres planes",
        timp: "Tienda online desde el plan Pro",
    },
    {
        aspecto: "Rutinas y dietas para los socios",
        tg: "Los entrenadores las generan con IA, con la biblioteca de ejercicios del centro y más de 240.000 alimentos en español",
        timp: "Módulo de entrenamiento desde Basic",
    },
    {
        aspecto: "Registro horario del equipo",
        tg: "Fichajes de los entrenadores del centro",
        timp: "Registro horario desde Basic",
    },
    {
        aspecto: "Streaming y grabaciones",
        tg: "No incluido",
        timp: "Streaming desde Pro y grabación de sesiones en Premium",
    },
];

/* «Cuándo encaja mejor cada uno»: patrón obligatorio de la norma de
   competencia (situación, por qué, cuándo no). Los tres de Timp van primero. */
export const ENCAJA_TIMP = [
    {
        titulo: "Timp, si quieres cobrar dentro de la app",
        situacion: "Quieres que el socio pague con tarjeta desde el móvil al reservar o al renovar.",
        porque: "Timp incluye pagos dentro de la app en todos sus planes. TotalGains no cobra por ti: registra y factura lo que cobras por tu vía.",
        cuandoNo: "Si ya cobras por domiciliación o TPV y lo que te falta es tener clases, tienda y entrenamiento en un mismo sitio.",
    },
    {
        titulo: "Timp, si sois muy pocos",
        situacion: "Eres un estudio de uno a tres profesionales y lo que necesitas, sobre todo, es agenda y reservas.",
        porque: "Su Starter (50 €/mes) y su Basic (85 €/mes) cuestan menos que nuestro Gym Starter (149 €/mes con IVA).",
        cuandoNo: "Si vais a crecer en entrenadores o quieres dar rutinas y dietas a tus socios desde la misma app.",
    },
    {
        titulo: "Timp, si das clases en streaming",
        situacion: "Parte de tus clases se emiten en directo o grabas sesiones para tus socios.",
        porque: "Timp tiene streaming desde el plan Pro y grabación de sesiones en Premium.",
        cuandoNo: "TotalGains no lo incluye, así que aquí la decisión es sencilla si el streaming es clave para ti.",
    },
];

export const ENCAJA_TG = [
    {
        titulo: "TotalGains, si tienes varios entrenadores",
        situacion: "Tienes, o vas a tener, varios monitores, fisios o gente de prácticas.",
        porque: "Los entrenadores son ilimitados en los tres planes. En Timp cada tramo de profesionales es un plan distinto y, con más de 15, su plan es Enterprise, con precio a medida.",
        cuandoNo: "Si tu centro es de una o dos personas y no va a crecer.",
    },
    {
        titulo: "TotalGains, si programas entreno y nutrición",
        situacion: "Tus socios reciben rutina o dieta además de las clases.",
        porque: "Tus entrenadores generan rutinas y dietas con IA con la biblioteca del centro, y el socio las tiene en la misma app donde reserva, con la marca de tu centro.",
        cuandoNo: "Si tu centro solo da clases colectivas y nadie programa rutinas, no le vas a sacar partido.",
    },
    {
        titulo: "TotalGains, si vendes producto o servicios sueltos",
        situacion: "Vendes ropa o suplementos, o das clases de niños, fisioterapia o talleres sueltos.",
        porque: "Tienda con stock y pedidos desde la app, y servicios de pago por sesión sin bono, en los tres planes.",
        cuandoNo: "Si necesitas cobrar esos pedidos con tarjeta dentro de la app: en TotalGains se pagan en el centro.",
    },
];

/* Fuente única de la página y del FAQPage del schema: el schema no puede
   declarar preguntas que el visitante no ve. */
export const TIMP_FAQS = [
    {
        question: "¿Cuánto cuesta Timp?",
        answer: "Según su web oficial, consultada el 27 de septiembre de 2026: Starter, 50 €/mes (1 profesional); Basic, 85 €/mes (hasta 3); Pro, 130 €/mes (hasta 10); Premium, 170 €/mes (hasta 15), y Enterprise, a medida. Son precios por centro, un 5 % más baratos con pago semestral y un 10 % con pago anual. Su web no indica si incluyen IVA.",
    },
    {
        question: "¿TotalGains cobra las cuotas dentro de la app, como Timp?",
        answer: "No. TotalGains registra y factura cuotas, bonos y ventas, y el cobro lo haces por tu vía habitual: domiciliación, TPV, Bizum, transferencia o efectivo. Si necesitas que el socio pague con tarjeta dentro de la app, Timp lo incluye en todos sus planes.",
    },
    {
        question: "¿Cuántos entrenadores puedo tener en cada uno?",
        answer: "En TotalGains, ilimitados en los tres planes de gimnasio: el precio cambia según los socios activos (hasta 100, de 100 a 200 o más de 200). En Timp depende del plan: 1, 3, 10 o 15 profesionales, y Enterprise a medida.",
    },
    {
        question: "¿Puedo pasar mis socios de Timp a TotalGains?",
        answer: "Sí. La migración de socios, horarios, planes y bonos está incluida y la hace nuestro equipo en español. La configuración base suele quedar lista en tres a cinco días.",
    },
    {
        question: "¿Qué añade TotalGains para los socios?",
        answer: "Rutinas y dietas con IA a partir de la biblioteca de ejercicios del centro, una base de más de 240.000 alimentos en español, tienda con pedidos desde la app y servicios de pago por sesión, todo en una app con la marca del centro y en los tres planes.",
    },
];
