/* ──────────────────────────────────────────────────────────────
   FAQs de las páginas /alternativas/<competidor>/

   FUENTE ÚNICA. La consumen a la vez:
     · el schema FAQPage de cada src/app/alternativas/<x>/page.js
     · el render visible de AlternativaCompetidoresContent.jsx

   Antes vivían duplicadas: el schema declaraba unas preguntas que
   NO estaban en la página (Google exige que el contenido marcado
   como FAQPage sea visible para el usuario) y la página mostraba
   otras tres genéricas. Con este módulo no pueden volver a
   desincronizarse.

   ⚠️ REGLA AL ESCRIBIR SOBRE UN COMPETIDOR (publicidad comparativa,
   arts. 9 y 10 LCD): solo características objetivas, verificables y
   pertinentes, con su fecha de verificación. Nada de adjetivos de
   valor sobre el rival ("anticuado", "básico", "lento"), nada de
   porcentajes sin estudio detrás, y nunca un absoluto ("no tiene X")
   donde lo comprobable es más matizado ("no lo promociona en su
   oferta pública"). Si la tabla comparativa de la página dice una
   cosa, aquí no puede decirse otra.
   ────────────────────────────────────────────────────────────── */

/** Fecha en que se verificaron los datos de los competidores en sus webs oficiales. */
export const FECHA_VERIFICACION = "abril de 2026";

const ESPECIFICAS = {
    trainerize: [
        {
            question: "¿Por qué TotalGains es mejor alternativa a Trainerize para un entrenador en España?",
            answer: "Por cuatro diferencias comprobables: soporte nativo en español (Trainerize opera en inglés y con franjas horarias de EE.UU./Canadá), IA de rutinas y dietas incluida en el plan base frente al add-on Advanced Nutrition de Trainerize, app marca blanca incluida en todos los planes de TotalGains frente al pago único de 169 USD más la Apple Developer Account propia de 99 USD/año que exige Trainerize, y facturación en euros con IVA incluido en lugar de dólares con add-ons acumulables. Datos verificados en trainerize.com en abril de 2026.",
        },
        {
            question: "¿Cuánto me ahorro al pasar de Trainerize a TotalGains?",
            answer: "Depende del tramo. Un coach con 100 clientes activos que en Trainerize necesita el plan Pro 100 más los add-ons para tener funcionalidad equivalente ronda los 352 €/mes; el plan Pro de TotalGains cubre esos mismos 100 clientes por 89,90 €/mes con IVA. Haz tú el cálculo con tu número real de clientes antes de decidir: los precios de ambas plataformas están públicos.",
        },
        {
            question: "¿Necesito una cuenta de Apple Developer propia como en Trainerize?",
            answer: "No. La app marca blanca de TotalGains funciona en modelo contenedor: se publica bajo nuestra cuenta y tus clientes ven tu logo, tus colores y tu nombre al entrar. La Custom Branded App de Trainerize es independiente, con bundle ID propio, y por eso te exige gestionar tu propia Apple Developer Account (99 USD/año). El modelo independiente te da ficha propia en App Store; el contenedor te ahorra el coste anual y la gestión. Elige según si tu marketing depende del ASO en la tienda.",
        },
    ],

    mypthub: [
        {
            question: "¿Es difícil migrar desde MyPT Hub a TotalGains?",
            answer: "El equipo se encarga de la importación en español: subimos tus atletas, recreamos rutinas y planes y coordinamos el aviso a tus clientes. Para carteras de 30 a 60 clientes el proceso completo suele resolverse en menos de una semana.",
        },
        {
            question: "¿Cuánto cuesta tener marca blanca e IA en cada plataforma?",
            answer: "En MyPT Hub, marca blanca e IA se contratan aparte: plan Premium (~59 €) + White Label (~145 €/mes) + Check-Ins AI (~17 €/mes) suman alrededor de 221 €/mes. En TotalGains las dos van incluidas en cualquier plan, desde 29,90 €/mes con IVA. Precios de MyPT Hub según mypthub.net, verificados en abril de 2026: confírmalos en su web antes de contratar.",
        },
        {
            question: "¿Necesito integraciones externas para la parte de nutrición?",
            answer: "No. TotalGains trae +240.000 alimentos validados en español y generador de dietas con IA incluidos en todos los planes, sin MyFitnessPal, sin plugins y sin coste adicional.",
        },
        {
            question: "¿Qué tiene TotalGains que MyPT Hub no promocione en su oferta pública?",
            answer: "Tres cosas, según lo publicado en su web en abril de 2026: IA generativa de rutinas y dietas dentro del plan base, sistema de retención con recordatorios de renovación y win-back al cliente, y una base nutricional en español con marcas de supermercado. Si alguna de estas te es indiferente, la diferencia entre ambas se estrecha mucho.",
        },
    ],

    dudapp: [
        {
            question: "¿TotalGains genera rutinas y dietas con IA?",
            answer: "Sí, usando exclusivamente tu propia biblioteca de ejercicios y alimentos, sin inventar contenido ni sustituir alimentos por su cuenta. Dudapp no promociona generación con IA en su oferta pública (verificado en abril de 2026).",
        },
        {
            question: "¿TotalGains avisa a mis clientes cuando toca renovar?",
            answer: "Sí. El sistema avisa al cliente dentro de su app cuando se acerca la renovación, con una segunda vuelta de win-back si no responde. El cobro efectivo lo sigues haciendo por tu canal habitual (transferencia, Bizum, TPV o tu propia cuenta de Stripe): TotalGains no toca tu dinero ni cobra comisión.",
        },
        {
            question: "¿Qué diferencias hay entre TotalGains y Dudapp para escalar?",
            answer: "Las que puedes comprobar comparando ambas ofertas públicas: TotalGains incluye IA de rutinas y dietas, app marca blanca con tu identidad, recordatorios automáticos de renovación y base de +240.000 alimentos en español. Dudapp no promociona esas funciones en su web (abril de 2026). Si tu operativa no las necesita, la comparación deja de ser relevante para tu caso.",
        },
        {
            question: "¿Mis clientes verán mi marca en la app?",
            answer: "Sí: la app que descargan en iOS y Android lleva tu nombre, tu logo y tus colores, y va incluida en todos los planes desde 29,90 €/mes con IVA.",
        },
    ],

    truecoach: [
        {
            question: "¿TotalGains tiene soporte en español a diferencia de TrueCoach?",
            answer: "Sí, soporte nativo en español con respuesta en menos de 24 horas. TrueCoach opera en inglés según su web oficial (abril de 2026), sin versión en español de la plataforma ni del soporte.",
        },
        {
            question: "¿Qué base de alimentos usa cada una?",
            answer: "TotalGains trae una base propia de +240.000 alimentos validados en español, con productos de supermercado y marcas locales de España y Latinoamérica, más un generador de dietas con IA. TrueCoach se apoya en la integración con MyFitnessPal, en inglés y sin adaptar al mercado hispanohablante.",
        },
        {
            question: "¿Cómo se compara la app marca blanca de TotalGains con la de TrueCoach?",
            answer: "TrueCoach ofrece personalización de marca en sus planes Standard y Pro (verificado en abril de 2026), así que no es una función exclusiva de TotalGains. La diferencia está en el tramo: en TotalGains la app con tu logo, tus colores y tu nombre va incluida en todos los planes desde 29,90 €/mes con IVA, sin add-on ni pago único de publicación.",
        },
        {
            question: "¿Por qué TotalGains encaja mejor para un entrenador en España?",
            answer: "Porque está construido para este mercado: interfaz y soporte en español, precios en euros con el IVA ya incluido, base de alimentos local y facturación española. TrueCoach es una plataforma anglosajona sólida, pero no está localizada para el entrenador hispanohablante.",
        },
    ],

    ptminder: [
        {
            question: "¿TotalGains incluye IA de rutinas y dietas?",
            answer: "Sí, en todos los planes, y trabaja con tu propia base de ejercicios y alimentos en lugar de generar contenido genérico. PTminder no promociona generación con IA en su oferta pública (verificado en abril de 2026).",
        },
        {
            question: "¿Necesito contratar módulos aparte?",
            answer: "No. Gestión de clientes, rutinas, nutrición, seguimiento, app marca blanca y recordatorios de renovación entran en el plan, sin módulos sueltos. PTminder comercializa parte de su funcionalidad como add-ons y factura en dólares, lo que hace menos predecible el coste final para un autónomo en España.",
        },
        {
            question: "¿Qué diferencias objetivas hay entre ambas?",
            answer: "Según lo publicado por ambas plataformas en abril de 2026: idioma (español nativo frente a inglés), IA generativa incluida frente a no promocionada, app marca blanca incluida en todos los planes frente a add-on de unos 40 USD/mes, base propia de +240.000 alimentos en español frente a planificador sin base integrada específica, y facturación en euros con IVA frente a dólares.",
        },
        {
            question: "¿Y el soporte?",
            answer: "En TotalGains hablas en español y con el equipo que desarrolla el producto, con respuesta en menos de 24 horas en los planes Pro y Unlimited. PTminder da soporte por chat en inglés.",
        },
    ],

    dudyfit: [
        {
            question: "¿Mis clientes descargarán una app con mi marca?",
            answer: "Sí: nombre, logo y colores tuyos en iOS y Android, incluido en todos los planes desde 29,90 €/mes con IVA. En Dudyfit tus clientes usan la app de la plataforma, sin personalización de marca para el coach (verificado en su web en abril de 2026).",
        },
        {
            question: "¿TotalGains avisa a mis clientes de la renovación?",
            answer: "Sí. Aviso dentro de la app del cliente cuando toca renovar y segunda vuelta de win-back si no responde en 48 horas. El cobro efectivo lo mantienes por tu canal habitual: TotalGains no cobra comisión sobre tus ventas.",
        },
        {
            question: "¿Qué aporta TotalGains frente a Dudyfit para escalar la cartera?",
            answer: "IA de rutinas y dietas trabajando con tu propia biblioteca, app marca blanca, recordatorios automáticos de renovación y base de +240.000 alimentos en español. Dudyfit no promociona generación con IA ni app marca blanca en su oferta pública (abril de 2026). Compruébalo en su web: si tu operativa no depende de esas piezas, ambas te pueden servir.",
        },
        {
            question: "¿Cómo es la base de alimentos comparada con la de Dudyfit?",
            answer: "TotalGains incluye +240.000 alimentos validados en español, con marcas de supermercado, y permite añadir alimentos nuevos con IA desde una foto o un PDF. Dudyfit trabaja con una base estándar más reducida.",
        },
    ],

    virtuagym: [
        {
            question: "¿TotalGains está pensado para entrenadores personales o para gimnasios?",
            answer: "Para el entrenador personal autónomo. Virtuagym está orientado a gimnasios, clubs e instalaciones, así que buena parte de sus funciones (control de accesos, gestión de socios, aforo de sala) no te aportan nada si trabajas online con tu propia cartera. Si además llevas un centro, TotalGains tiene su propia vertical de gimnasios.",
        },
        {
            question: "¿Cuál sale más a cuenta para un autónomo?",
            answer: "TotalGains arranca en 29,90 €/mes con IVA incluido y tiene plan gratuito permanente hasta 5 atletas. Virtuagym trabaja con presupuestos orientados a instalaciones, normalmente bajo cotización y con coste por número de socios. Pide su presupuesto y compáralo con tu volumen real de clientes.",
        },
        {
            question: "¿Mis clientes verán mi marca o la de la plataforma?",
            answer: "En TotalGains la app que descargan lleva tu nombre, tu logo y tus colores, en todos los planes. En la oferta estándar de Virtuagym la marca visible para el usuario final es la del centro o la de la propia plataforma, según la configuración contratada.",
        },
        {
            question: "¿Cuánto tardo en tenerlo funcionando?",
            answer: "La mayoría de entrenadores crean su primer cliente, generan una rutina con IA y programan el primer check-in en la primera sesión de uso. Virtuagym es una suite de instalación más amplia y su puesta en marcha suele implicar configuración de centro.",
        },
    ],
};

/** Preguntas comunes a todas las páginas de alternativa (objeciones de migración). */
function genericas(name) {
    return [
        {
            question: "¿Qué tiene el plan gratuito de TotalGains y en qué se diferencia de la competencia?",
            answer: "TotalGains tiene el plan gratuito más generoso del mercado hispano: 5 atletas de por vida, sin tarjeta de crédito y sin caducidad. Trainerize Basic ofrece 1 cliente; TrainerStudio Free ofrece 3; Harbiz no tiene plan gratuito permanente (arranca a 22,99 €/mes con IVA para el mismo tramo de 5 clientes). Puedes empezar en https://totalgains.es/onboarding/ sin coste.",
        },
        {
            question: `¿Perderé los datos de mis clientes al migrar desde ${name}?`,
            answer: "No. Nuestro equipo se encarga de importar a tus atletas actuales con herramientas propias de migración, guiando el proceso en español. La migración asistida está incluida en todos los planes.",
        },
        {
            question: "¿Cobráis comisiones extra por mis ventas?",
            answer: "No aplicamos comisiones sobre tus ventas. Usas tu propia cuenta de Stripe para los cobros de tus clientes; TotalGains es únicamente la tecnología SaaS que tú contratas.",
        },
        {
            question: `Mis clientes están acostumbrados a ${name}, ¿les costará el cambio?`,
            answer: "Nuestra experiencia con entrenadores que han migrado es que el periodo de adaptación suele resolverse en los primeros días. Tus clientes reciben una invitación clara con la nueva app y un onboarding guiado. Si tienes dudas sobre un caso concreto, escríbenos y te contamos cómo suele ser el proceso.",
        },
    ];
}

/**
 * FAQs completas de una página de alternativa: primero las específicas del
 * competidor, después las objeciones de migración comunes.
 * @param {string} key  clave del competidor (trainerize, harbiz, mypthub…)
 * @param {string} name nombre comercial para las preguntas genéricas
 */
export function getAlternativaFaqs(key, name) {
    return [...(ESPECIFICAS[key] || []), ...genericas(name)];
}
