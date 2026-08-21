/* ──────────────────────────────────────────────
   EMBUDO · NUTRICIONISTAS  (/demo/nutricionistas/)

   Landing de tráfico dirigido (QR, bio de Instagram, lead frío). No compite
   en Google — lleva `noindex` — así que aquí no se escribe para el buscador:
   se escribe para alguien que ya te ha oído hablar y quiere ver si esto le
   sirve. Un solo objetivo: empezar la prueba.

   ⚠️ Todas las features de este fichero están verificadas contra CHANGELOG.md.
   Nada de cobros in-app (no existen): el sistema AVISA, el cobro va por el
   canal del profesional. Ver memoria `no-marketing-cobros`.
   ────────────────────────────────────────────── */

const nutricionistas = {
    slug: 'nutricionistas',
    perfil: 'nutricionista',
    accent: '#22C55E', // verde de marca — el vertical de nutrición

    hero: {
        eyebrow: 'Para nutricionistas y dietistas online',
        title: 'Tus dietas, en minutos.',
        titleAccent: 'Tu tarde, de vuelta.',
        sub: 'La IA de nutrición de TotalGains aprende de cada paciente: sus macros, lo que valora y lo que se come de verdad. Tú revisas y firmas. Se acabó rehacer el Excel a las once de la noche.',
        bullets: [
            'Base de +240.000 alimentos en español',
            'Cambio de alimento equivalente en 1 toque',
            'Tus recetas, dimensionadas solas',
        ],
    },

    /* Números que salen del testimonio real de Lorena (nutricionista, 28,2K)
       y del catálogo verificado. Nada redondeado al alza. */
    heroStats: [
        { value: '+10 h', label: 'a la semana recuperadas', foot: 'Lorena Eses, nutricionista' },
        { value: '240.000', label: 'alimentos en español', foot: 'base verificada' },
        { value: '< 2 min', label: 'una dieta completa', foot: 'generada con IA' },
    ],

    pain: {
        title: 'Marca lo que hiciste esta semana',
        sub: 'Sin trampa: solo lo que te tocó hacer a mano.',
        foot: 'Estimación en base al tiempo medio que declaran los profesionales que migran. Tu número real depende de tu cartera.',
        items: [
            { text: 'Rehacer una dieta entera porque el paciente no toleraba un alimento', hours: 1.5 },
            { text: 'Exportar un PDF y mandarlo por WhatsApp', hours: 1 },
            { text: 'Recalcular macros a mano en una hoja de cálculo', hours: 2 },
            { text: 'Perseguir a alguien para que te mande su peso o sus fotos', hours: 1.5 },
            { text: 'Copiar y pegar una dieta anterior para "adaptarla"', hours: 2 },
            { text: 'Buscar en Google las kcal de un alimento raro', hours: 0.5 },
        ],
    },

    features: [
        {
            tag: 'IA 2.0',
            title: 'Una IA que aprende de cada paciente',
            desc: 'No genera "una dieta genérica". Parte del peso y el objetivo de ESE paciente, con las macros de su última dieta ya cargadas — ajustas en vez de crear de cero.',
            bullets: [
                'Prioriza sus alimentos favoritos y evita los rechazados, deducidos de sus valoraciones reales',
                'Y de lo que come de verdad: si elige un plato 3 veces y en el 60% de las ocasiones, se marca como favorito solo',
                'Un slider decide cuánto se parece a sus dietas anteriores, del 0 % (todo nuevo) al 100 % (continuista)',
            ],
            image: '/screenshots/coach_nutricion.webp',
            imageAlt: 'Editor de nutrición de TotalGains con el plan del paciente y sus macros',
        },
        {
            tag: 'Sustituciones',
            title: 'Cambio de alimento equivalente en 1 toque',
            desc: 'El botón 🔄 de cada alimento sugiere sustitutos del MISMO tipo, con las mismas kcal y macros. Un bagel propone pan integral, tostadas o cereales — no arroz crudo ni "verdura al gusto". El gramaje se ajusta solo.',
            bullets: [
                'También DENTRO de una receta: ¿helado con leche para un intolerante? Lo cambias por bebida de soja y los totales se recalculan',
                'Si la IA falla, degrada a un ranking por macros — nunca te deja tirado',
                'La receta cambiada llega al plan con su desglose completo, editable y en el PDF',
            ],
            image: '/screenshots/food-curry.webp',
            imageAlt: 'Plato con su desglose de macros en TotalGains',
        },
        {
            tag: 'Sin raciones imposibles',
            title: 'Reescala al objetivo sin sacar 700 g de pasta',
            desc: 'Subir las kcal de una dieta no puede significar inflar raciones hasta lo incomible. El techo entiende de densidad: 450 g en alimentos densos, 800 g en acuosos — 650 g de calabacín son 110 kcal y se comen.',
            bullets: [
                'Las unidades salen enteras: nunca "4,5 huevos"',
                'Si con el techo no se llega al objetivo, te lo dice por su nombre: "Ración máxima alcanzada en Pasta, Arroz — añade alimentos"',
                'Bajar nunca se capa, y lo que pongas grande a mano se respeta',
            ],
            image: '/screenshots/food-stat-1.webp',
            imageAlt: 'Detalle de macros de un alimento en TotalGains',
        },
        {
            tag: 'Control',
            title: 'Un crítico IA revisa antes de que firmes',
            desc: 'La dieta generada se abre en el editor completo y no se guarda nada hasta que tú lo dices. Un banner te avisa de posibles alérgenos, imprescindibles ausentes o cantidades absurdas.',
            bullets: [
                'Tú eliges con qué construye: tus recetas, alimentos sueltos o ambos',
                'Y de dónde: solo tus datos, + la base de TotalGains, o que la IA proponga',
                'Si trabajas con recetas propias, las usa como base de cada comida y calcula el gramaje para cuadrar las kcal',
            ],
            image: '/screenshots/coach_clientes.webp',
            imageAlt: 'Panel de pacientes de TotalGains',
        },
        {
            tag: 'Adherencia',
            title: 'El paciente cumple más porque le hablas donde mira',
            desc: 'Tu plan vive en su móvil, no en un PDF que se pierde en el chat. Con menús enlazados marcas qué comidas van juntas: elige la Comida 2 y se le resalta la Cena que va con ella.',
            bullets: [
                'Recordatorios automáticos de seguimiento y peso, en su franja horaria',
                'Analíticas de qué comen de verdad: qué potenciar 🏆, qué arreglar 🔧 y qué jubilar 🗑️, con resumen IA',
                'Fotos de progreso, medidas y check-in semanal centralizados',
            ],
            image: '/screenshots/Nutricion.webp',
            imageAlt: 'Vista del plan nutricional en la app del paciente',
        },
        {
            tag: 'Tu marca',
            title: 'La app la descarga con TU logo',
            desc: 'App marca blanca incluida en todos los planes, sin add-ons. Tu nombre, tu logo y tus colores en el móvil de cada paciente — desde el primer día y sin coste extra.',
            bullets: [
                'iOS, Android y navegador',
                'Historial completo del paciente en una sola vista',
                'Chat integrado: se acaban los audios de WhatsApp a las once',
            ],
            image: '/screenshots/coach_perfil.webp',
            imageAlt: 'Perfil de marca del profesional en TotalGains',
        },
    ],

    quiz: {
        title: '¿Cuánto te está costando tu método actual?',
        sub: '3 preguntas. 20 segundos. Sin dejar el correo.',
        questions: [
            {
                q: '¿Cuánto tardas en montar una dieta nueva desde cero?',
                options: [
                    { label: 'Más de una hora', hours: 6, tag: 'ia' },
                    { label: 'Entre 30 y 60 minutos', hours: 4, tag: 'ia' },
                    { label: 'Menos de 30 minutos', hours: 2, tag: 'ia' },
                ],
            },
            {
                q: 'Un paciente te dice que no tolera un alimento del plan. ¿Qué haces?',
                options: [
                    { label: 'Rehago el día entero a mano', hours: 6, tag: 'swap' },
                    { label: 'Lo cambio a ojo y recalculo después', hours: 3, tag: 'swap' },
                    { label: 'Tengo una tabla de equivalencias', hours: 1.5, tag: 'swap' },
                ],
            },
            {
                q: '¿Cómo sabes si está cumpliendo entre revisión y revisión?',
                options: [
                    { label: 'Se lo pregunto por WhatsApp', hours: 5, tag: 'adherencia' },
                    { label: 'Espero a la revisión y ya veo', hours: 4, tag: 'adherencia' },
                    { label: 'Le pido fotos del plato', hours: 2, tag: 'adherencia' },
                ],
            },
        ],
        resultTitle: 'Tu diagnóstico',
        resultLead: 'Con tu forma de trabajar actual, cada mes se te van aproximadamente',
        resultUnit: 'horas',
        resultFoot: 'Estimación orientativa a partir de tus respuestas y del tiempo medio que declaran profesionales con cartera similar. No es una promesa de resultado.',
        solutions: {
            ia: 'La IA parte de SU peso, SU objetivo y las macros de su última dieta. Tú ajustas y firmas.',
            swap: 'El botón 🔄 propone sustitutos del mismo tipo con las mismas kcal y ajusta el gramaje solo.',
            adherencia: 'Ves qué come de verdad, no lo que dice que come — con recordatorios automáticos en su app.',
        },
    },

    testimonial: {
        name: 'Lorena Eses',
        role: 'Nutricionista Online · 28,2K seguidores',
        avatar: '/testimonials/lorena.webp',
        handle: '@lorenaeses',
        instagram: 'https://www.instagram.com/lorenaeses/',
        result: '+10 h',
        resultLabel: 'a la semana',
        quote: 'La tranquilidad de saber que está todo automatizado, y la ganancia de tiempo al poder delegar en la app la agenda, la programación de citas, las revisiones quincenales y el feedback del progreso.',
        before: 'Lo gestionaba con diferentes Excel. Era un lío: distintos sistemas de pago, cobros y almacenamiento de datos que acababan siendo incompatibles entre sí.',
        caseHref: '/casos-de-exito/lorena-eses/',
    },

    faq: [
        {
            q: '¿La IA se inventa los alimentos y las kcal?',
            a: 'No. Construye sobre una base de +240.000 alimentos en español y sobre TUS recetas. Tú eliges la fuente: solo tus datos, la base de TotalGains o que la IA proponga (y en ese caso te avisa de que es menos preciso). Además, un crítico IA revisa el plan antes de guardar y te marca alérgenos, imprescindibles ausentes y cantidades absurdas.',
        },
        {
            q: 'Ya tengo mis dietas hechas. ¿Tengo que empezar de cero?',
            a: 'No. Puedes subir tus planes y recetas y trabajar sobre ellos: la IA los usa como base de cada comida y calcula el gramaje para cuadrar las kcal. La migración desde tu sistema actual está incluida y la hacemos nosotros en español.',
        },
        {
            q: '¿Mis pacientes tienen que aprender a usar una app nueva?',
            a: 'Descargan una app con tu logo y tus colores y ven una sola cosa: su plan del día. Abren, tocan la comida y listo. El resto (recordatorios, seguimiento, fotos) va solo.',
        },
        {
            q: '¿Y si trabajo también con entrenamiento?',
            a: 'Está incluido en el mismo plan, sin coste extra: rutinas con IA, biblioteca de más de 1.000 ejercicios con vídeo y seguimiento de entreno. Muchos profesionales llevan las dos cosas desde la misma ficha del paciente.',
        },
        {
            q: '¿Qué pasa con los datos de salud de mis pacientes?',
            a: 'Cumplimiento del RGPD europeo, cifrado en tránsito y en reposo, y servidores en la UE. Los datos son tuyos y de tu paciente: puedes exportarlos o eliminarlos cuando quieras.',
        },
        {
            q: '¿Cuánto cuesta y hay permanencia?',
            a: 'Desde 29,90 €/mes con IVA incluido, con la app marca blanca ya dentro. Sin permanencia y sin coste por función: los planes solo cambian en número de pacientes activos y nivel de soporte. Puedes probarlo 14 días sin tarjeta.',
        },
    ],

    offer: {
        title: 'Pruébalo con un paciente real',
        sub: 'No con datos de mentira: coge a un paciente de verdad, genera su plan y compáralo con lo que ibas a hacer tú.',
        price: '29,90 €',
        priceFoot: '/mes con IVA · app marca blanca incluida',
        perks: [
            'Plan Gratuito 5 pacientes · o 14 días de prueba Pro sin tarjeta',
            'Migración de tus planes incluida',
            'Soporte en español (te contesta una persona)',
            'Cancelas en 1 clic, sin permanencia',
        ],
        guarantee: 'Si en 14 días no has ahorrado ni una hora, no pagas nada y te llevas tus datos.',
    },

    close: {
        title: 'La próxima dieta puedes hacerla como siempre.',
        titleAccent: 'O puedes hacerla en dos minutos.',
        sub: 'Empieza ahora y monta tu primer plan hoy mismo.',
    },

    cta: {
        primary: { text: 'Empezar gratis', href: '/onboarding/' },
        secondary: { text: 'Prefiero que me lo enseñes', href: '#demo-form' },
        microcopy: 'Sin tarjeta · Sin permanencia · Tus datos son tuyos',
    },
};

export default nutricionistas;
