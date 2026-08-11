/* ──────────────────────────────────────────────────────────────
   Introducción editorial de cada página /alternativas/<competidor>/

   POR QUÉ EXISTE ESTE FICHERO
   En agosto de 2026, para la consulta "alternativas a virtuagym"
   (posición 2,7 · 129 impresiones · 0 clics), Google descartó
   nuestra meta description y generó el snippet a partir de la lista
   de enlaces del footer: el resultado se anunciaba como
   "…utilizando Trainerize, MyPT Hub, Harbiz, Dudapp, TrueCoach…".
   Pasaba porque encima de la tabla no había prosa que resumir.
   Estos dos párrafos le dan a Google material propio de cada página
   y, de paso, dejan de ser 6 páginas casi idénticas entre sí.

   ⚠️ MISMA REGLA QUE EN alternativasFaqs.js: sobre el competidor,
   solo hechos objetivos y verificables con su fecha. El primer
   párrafo reconoce honestamente para quién funciona el competidor
   —eso da credibilidad y es lo que hace que la comparación se
   sostenga—; el segundo explica para quién encaja mejor TotalGains.
   ────────────────────────────────────────────────────────────── */

export const INTROS = {
    trainerize: [
        "Trainerize es una de las plataformas de entrenamiento online más consolidadas del mercado, con un ecosistema maduro, integración nativa con MyFitnessPal y una app cliente muy pulida. Si trabajas en inglés, facturas en dólares y quieres una app con ficha propia en App Store, sigue siendo una opción sólida y con años de recorrido por detrás.",
        "La fricción aparece cuando tu negocio está en español. El soporte funciona en franjas horarias de EE.UU. y Canadá, la facturación es en dólares y varias piezas que aquí damos por básicas —la nutrición avanzada, la app con tu marca— se contratan como add-ons que se acumulan sobre el plan. TotalGains parte de otra premisa: un plan plano en euros con IVA incluido, IA de rutinas y dietas y app marca blanca dentro desde 29,90 €/mes, soporte en español y migración asistida sin coste. Datos de Trainerize verificados en su web oficial en abril de 2026.",
    ],

    mypthub: [
        "MyPT Hub lleva años funcionando para entrenadores del mercado anglosajón y su propuesta modular tiene sentido si solo necesitas la base: gestión de clientes, planificación y seguimiento, pagando aparte lo que uses de verdad.",
        "Ese mismo modelo se vuelve caro en cuanto quieres el paquete completo. Marca blanca e IA se contratan por separado —Premium más White Label más Check-Ins AI ronda los 221 €/mes según su web en abril de 2026— y el soporte sigue siendo en inglés. En TotalGains no hay módulos: la IA de rutinas y dietas, la app con tu marca, los +240.000 alimentos en español y los recordatorios de renovación entran en cualquier plan, desde 29,90 €/mes con IVA. Entre planes solo cambia el número de atletas y el nivel de soporte.",
    ],

    harbiz: [
        "Harbiz es probablemente la plataforma en español más conocida del sector y su catálogo modular está bien pensado: si solo necesitas dos o tres funciones concretas, pagas exactamente esas y no más.",
        "El problema aparece al escalar. Personaliza tu app, Nutri AI y Biblioteca de Vídeos son add-ons que se suman al plan base, y cruzar de 50 a 100 clientes implica además saltar de tramo. Para funcionalidad equivalente, el coste se va a unos 313 €/mes con IVA (verificado en harbiz.io en mayo de 2026). TotalGains cubre esos mismos 100 clientes con todo incluido por 89,90 €/mes, sin add-ons que se acumulen ni sorpresas al crecer.",
    ],

    dudapp: [
        "Dudapp resuelve bien lo esencial para un entrenador que empieza: crear rutinas, asignarlas y llevar un seguimiento básico de sus clientes desde una app sencilla, sin curva de aprendizaje.",
        "La diferencia se nota cuando la cartera crece y la operativa manual empieza a comerte las tardes. En su oferta pública (revisada en abril de 2026) no figuran generación con IA, app con la marca del coach ni avisos automáticos de renovación. TotalGains genera rutinas y dietas con tu propia biblioteca en menos de dos minutos, entrega a tus clientes una app con tu logo y tus colores, y avisa por ti cuando toca renovar, con segunda vuelta si no responden.",
    ],

    truecoach: [
        "TrueCoach tiene una de las experiencias de coach más limpias del mercado anglosajón: la asignación de entrenamientos y el feedback en vídeo funcionan muy bien, y ofrece personalización de marca en sus planes Standard y Pro.",
        "Lo que no tiene es localización. La plataforma y el soporte operan en inglés y la nutrición se apoya en la integración con MyFitnessPal, con una base de alimentos pensada para el mercado estadounidense. Si tus clientes registran comidas del supermercado español, la diferencia es diaria: TotalGains trae +240.000 alimentos validados en español, con marcas locales, generador de dietas con IA y soporte en tu idioma y tu zona horaria.",
    ],

    ptminder: [
        "PTminder está orientado al entrenador que trabaja también presencial: su gestión de agenda, reservas y pagos de sesiones está bien resuelta y lleva años en el mercado.",
        "Si tu negocio es sobre todo online, el encaje cambia. La plataforma opera en inglés, factura en dólares, la app con tu marca es un add-on de unos 40 USD/mes y en su oferta pública no promociona generación con IA (verificado en abril de 2026). TotalGains incluye la IA de rutinas y dietas, la app marca blanca y la base de +240.000 alimentos en español dentro del plan, en euros con IVA y sin módulos sueltos.",
    ],

    dudyfit: [
        "Dudyfit es una opción en español pensada para que un entrenador arranque rápido: interfaz sencilla, planificación de entrenamientos y seguimiento del cliente sin complicaciones.",
        "Al profesionalizar el negocio suelen faltar tres piezas: la app que descarga el cliente sigue siendo la de la plataforma y no la tuya, no hay generación de planes con IA en su oferta pública (revisada en abril de 2026) y el seguimiento de renovaciones se lleva a mano. En TotalGains la app va con tu marca en todos los planes, la IA trabaja con tu propia biblioteca de ejercicios y alimentos, y los avisos de renovación salen solos.",
    ],

    virtuagym: [
        "Virtuagym es una suite potente y bien construida, pero está pensada para gimnasios, clubs y cadenas: control de accesos, gestión de socios, aforo de salas y venta de bonos. Si diriges una instalación física, cubre mucho terreno.",
        "Si eres entrenador personal autónomo, estás pagando y manteniendo funciones que no vas a abrir nunca, con una puesta en marcha de nivel centro deportivo. TotalGains está construido para el coach que trabaja online con su propia cartera: creas tu primer cliente, generas una rutina con IA y programas el primer check-in en la misma sesión, desde 29,90 €/mes con IVA y con plan gratuito permanente hasta 3 atletas. Y si además llevas un centro, existe una vertical de gimnasios aparte.",
    ],
};

export function getAlternativaIntro(key) {
    return INTROS[key] || [];
}
