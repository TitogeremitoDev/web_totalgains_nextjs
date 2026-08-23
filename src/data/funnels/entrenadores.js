/* ──────────────────────────────────────────────
   EMBUDO · ENTRENADORES PERSONALES  (/demo/entrenadores/)

   Tráfico dirigido (QR, bio de Instagram, lead frío). `noindex`: no compite
   con /software-entrenador-personal/, que es la que sí trabaja el buscador.

   ⚠️ Features verificadas contra CHANGELOG.md. Prohibido vender cobros
   in-app: no existen para el coach autónomo (memoria `no-marketing-cobros`).
   ────────────────────────────────────────────── */

const entrenadores = {
    slug: 'entrenadores',
    perfil: 'entrenador',
    accent: '#2563EB', // azul de marca

    hero: {
        eyebrow: 'Para entrenadores personales online',
        title: 'Deja de montar rutinas en Excel.',
        titleAccent: 'Empieza a entrenar gente.',
        sub: 'Periodizaciones completas en segundos, seguimiento que se rellena solo y una app con tu marca en el móvil de cada cliente. Todo en una plataforma, en español.',
        bullets: [
            'Rutinas con IA que puedes revisar antes de aplicar',
            'Más de 1.000 ejercicios con vídeo',
            'App marca blanca incluida en todos los planes',
        ],
    },

    heroStats: [
        { value: '8-10 h', label: 'a la semana recuperadas', foot: 'Nacho Pulido, entrenador' },
        { value: '1.025', label: 'ejercicios con imagen y vídeo', foot: 'biblioteca propia' },
        { value: '3', label: 'apps: iOS, Android y web', foot: 'con tu logo' },
    ],

    pain: {
        title: 'Marca lo que hiciste esta semana',
        sub: 'Solo lo que te tocó hacer a mano, sin contar el entreno en sí.',
        foot: 'Estimación en base al tiempo medio que declaran los entrenadores que migran. Tu número real depende de tu cartera.',
        items: [
            { text: 'Montar o adaptar una rutina en una hoja de cálculo', hours: 3 },
            { text: 'Buscar el vídeo de un ejercicio para mandarlo por WhatsApp', hours: 1 },
            { text: 'Preguntar uno por uno quién ha entrenado esta semana', hours: 2 },
            { text: 'Copiar los kilos del cliente a tu tabla de seguimiento', hours: 2 },
            { text: 'Rehacer un plan porque el cliente se lesionó o viaja', hours: 1.5 },
            { text: 'Contestar el mismo audio de dudas por tercera vez', hours: 1.5 },
        ],
    },

    features: [
        {
            tag: 'Rutinas IA 2.0',
            title: 'Una periodización completa, en segundos',
            desc: 'Le dices el objetivo, los días y el material. Te devuelve la rutina entera — y tú decides si entra. Nada se aplica sin que lo veas.',
            bullets: [
                'Modo PRO con cargas orientativas por ejercicio, no solo series y repes',
                'Detecta grupos rezagados y te propone cómo compensarlos',
                'Diff antes de aplicar: ves exactamente qué cambia frente a la rutina actual',
                '¿No te convence? Reroll y te propone otra variante',
            ],
            image: '/screenshots/coach_rutinas.webp',
            imageAlt: 'Editor de rutinas de TotalGains con la periodización del cliente',
        },
        {
            tag: 'Resistencia',
            title: 'También el cardio, no solo el hierro',
            desc: 'Módulo de resistencia con zonas RT1-RT3 y pulsaciones. Si entrenas híbrido, runners o preparas carreras, ya no tienes que llevarlo aparte.',
            bullets: [
                'Chips de ritmo y ppm por bloque',
                '"HOY TOCA": el cliente abre la app y sabe qué le toca sin preguntarte',
                'Dictado por voz para montar la sesión sin teclear',
                'Pantalla de resistencia del cliente con sus récords',
            ],
            image: '/screenshots/Entreno.webp',
            imageAlt: 'Pantalla de entreno en la app del cliente de TotalGains',
        },
        {
            tag: 'Vídeo-feedback',
            title: 'Corrige la técnica dibujando sobre su vídeo',
            desc: 'El cliente sube su serie. Tú dibujas encima — la línea de la espalda, el ángulo de la rodilla — en el momento exacto del vídeo, y le contestas con audio.',
            bullets: [
                'Las anotaciones se anclan al milisegundo del vídeo',
                'Tu audio se transcribe solo con IA, para que le quede por escrito',
                'Se acabó el "bájalo un poco" sin contexto por WhatsApp',
            ],
            image: '/screenshots/perfil-videos.webp',
            imageAlt: 'Vídeos de técnica del cliente en TotalGains',
        },
        {
            tag: 'Centro de alertas',
            title: 'Te avisa del cliente que se va a ir, antes de que se vaya',
            desc: 'La plataforma lee lo que escriben tus clientes y te levanta la mano cuando algo huele mal. No tienes que acordarte de mirar.',
            bullets: [
                'Detecta dolor o lesión en notas de entreno, formularios y comentarios del semanal',
                'Baja motivación, racha rota y "lleva días sin subir nada"',
                'Chat urgente detectado por IA, con borrador de respuesta listo para editar',
                'Y las alertas buenas también: cumpleaños y aniversarios de tus clientes',
            ],
            image: '/screenshots/home_coach.webp',
            imageAlt: 'Panel del coach en TotalGains con el centro de alertas',
        },
        {
            tag: 'Adherencia',
            title: 'Gamificación que hace que vuelvan solos',
            desc: 'Rachas, logros, récords y marcos desbloqueables. Suena a tontería hasta que ves la diferencia entre un cliente que lleva 40 días de racha y uno que entrena "cuando puede".',
            bullets: [
                'Racha de entreno con margen real, para que un imprevisto no la rompa',
                'Récords personales detectados solos y compartibles',
                'Check-in diario y recordatorios en su franja horaria',
                'Puede cambiar un ejercicio sin ensuciarte las estadísticas',
            ],
            image: '/screenshots/perfil-logros.webp',
            imageAlt: 'Pantalla de logros y racha en la app del cliente',
        },
        {
            tag: 'Nutrición incluida',
            title: 'Y las dietas, en el mismo sitio y sin add-on',
            desc: 'Generador de dietas con IA sobre una base de +240.000 alimentos en español, con cambio de alimento equivalente en un toque. Sin pagar un módulo aparte.',
            bullets: [
                'La IA parte del peso y objetivo de ESE cliente',
                'Aprende de lo que valora y de lo que come de verdad',
                'Todo en la misma ficha: entreno, dieta, medidas y fotos',
            ],
            image: '/screenshots/coach_seguimiento.webp',
            imageAlt: 'Seguimiento del cliente en TotalGains con métricas de evolución',
        },
    ],

    quiz: {
        title: '¿Cuánto te está costando tu método actual?',
        sub: '3 preguntas. 20 segundos. Sin dejar el correo.',
        questions: [
            {
                q: '¿Cómo montas hoy las rutinas de tus clientes?',
                options: [
                    { label: 'Excel o Google Sheets', hours: 7, tag: 'rutinas' },
                    { label: 'Plantillas que voy repitiendo', hours: 4, tag: 'rutinas' },
                    { label: 'Una app, pero me pelea', hours: 2.5, tag: 'rutinas' },
                ],
            },
            {
                q: '¿Cómo sabes quién ha entrenado esta semana?',
                options: [
                    { label: 'Se lo pregunto por WhatsApp', hours: 5, tag: 'seguimiento' },
                    { label: 'Me fío de lo que me cuentan', hours: 4, tag: 'seguimiento' },
                    { label: 'Lo veo en una app', hours: 1.5, tag: 'seguimiento' },
                ],
            },
            {
                q: '¿Cuántos clientes activos llevas ahora mismo?',
                options: [
                    { label: 'Menos de 10', hours: 2, tag: 'escala' },
                    { label: 'Entre 10 y 30', hours: 5, tag: 'escala' },
                    { label: 'Más de 30', hours: 8, tag: 'escala' },
                ],
            },
        ],
        resultTitle: 'Tu diagnóstico',
        resultLead: 'Con tu forma de trabajar actual, cada mes se te van aproximadamente',
        resultUnit: 'horas',
        resultFoot: 'Estimación orientativa a partir de tus respuestas y del tiempo medio que declaran entrenadores con cartera similar. No es una promesa de resultado.',
        solutions: {
            rutinas: 'La IA te devuelve la periodización completa y tú decides si entra, con el diff delante.',
            seguimiento: 'El entreno se registra solo en su app y tú lo ves en la lista de clientes, sin preguntar.',
            escala: 'Con esa cartera, el centro de alertas es lo que evita que se te caiga alguien sin enterarte.',
        },
    },

    testimonial: {
        name: 'Nacho Pulido',
        role: 'Entrenador de Fuerza & Resistencia',
        avatar: '/testimonials/nacho.webp',
        handle: '@puli.trainer',
        instagram: 'https://www.instagram.com/puli.trainer/',
        result: '8-10 h',
        resultLabel: 'a la semana',
        quote: 'Tener todo centralizado — clientes, entrenamientos, seguimiento y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana y he pasado de 15 a 40 clientes activos.',
        before: 'Antes usaba Excel, WhatsApp y mails por todos lados. Lo más pesado era perseguir pagos, recordar seguimientos y tener toda la info desordenada.',
        caseHref: '/casos-de-exito/nacho-pulido/',
    },

    faq: [
        {
            q: '¿La IA me va a montar rutinas genéricas de internet?',
            a: 'No aplica nada sin ti. Genera sobre la biblioteca propia (más de 1.000 ejercicios con vídeo) y te enseña el diff: qué cambia respecto a lo que ya tenía el cliente, ejercicio por ejercicio. Si no te convence, pides otra variante. La firma siempre es tuya.',
        },
        {
            q: 'Tengo mis rutinas y mis clientes en Excel. ¿Se pierde algo?',
            a: 'No. La migración está incluida y la hacemos nosotros: clientes, plantillas y su histórico. Puedes seguir usando tus plantillas como base — la IA trabaja sobre ellas.',
        },
        {
            q: '¿Mis clientes van a saber usarlo?',
            a: 'Abren la app y ven una pantalla: la sesión de hoy, ejercicio a ejercicio con su vídeo. Registrar una serie son dos toques. Es más fácil que la hoja de cálculo que les mandas ahora.',
        },
        {
            q: '¿La app lleva mi marca o la vuestra?',
            a: 'La tuya. Logo, nombre y colores del entrenador, incluido en todos los planes desde 29,90 €/mes — no es un add-on que se paga aparte como en otras plataformas.',
        },
        {
            q: '¿Cobráis comisión por cliente o por volumen?',
            a: 'No. El plan solo escala por número de clientes activos (25, 100 o ilimitados) y todos incluyen exactamente las mismas funciones: IA ilimitada, marca blanca y base de alimentos. Sin comisiones ni penalización por crecer.',
        },
        {
            q: '¿Y si lo pruebo y no me convence?',
            a: 'Plan Gratuito de por vida para 5 atletas sin tarjeta (el más generoso del mercado hispano: Trainerize da 1, TrainerStudio da 3, Harbiz no tiene free). Además, prueba de 14 días sin tarjeta en los planes de pago. Si te vas, te llevas tus datos. Sin permanencia y se cancela en un clic.',
        },
    ],

    offer: {
        title: 'Móntale la rutina a un cliente real',
        sub: 'No una demo con datos de mentira. Coge a un cliente de verdad, genera su próxima rutina y compárala con la que ibas a hacer tú.',
        price: '29,90 €',
        priceFoot: '/mes con IVA · app marca blanca incluida',
        perks: [
            'Plan Gratuito 5 atletas · o 14 días de prueba Pro sin tarjeta',
            'Migración de tus clientes y plantillas incluida',
            'Soporte en español (te contesta una persona)',
            'Plan gratuito de por vida hasta 5 clientes',
        ],
        guarantee: 'Si en 14 días no has ahorrado ni una hora, no pagas nada y te llevas tus datos.',
    },

    close: {
        title: 'Tu competencia sigue mandando Excels.',
        titleAccent: 'Tú puedes mandar una app con tu nombre.',
        sub: 'Empieza ahora y monta tu primera rutina hoy mismo.',
    },

    cta: {
        primary: { text: 'Empezar gratis', href: '/onboarding/' },
        secondary: { text: 'Prefiero que me lo enseñes', href: '#demo-form' },
        microcopy: 'Sin tarjeta · Sin permanencia · Tus datos son tuyos',
    },
};

export default entrenadores;
