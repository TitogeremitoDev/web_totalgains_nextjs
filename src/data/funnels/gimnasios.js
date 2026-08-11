/* ──────────────────────────────────────────────
   EMBUDO · GIMNASIOS  (/demo/gimnasios/)

   Tráfico dirigido (QR en recepción, bio de Instagram, visita comercial).
   `noindex`: no compite con /para-gimnasios/, que es la que trabaja el SEO.

   ⚠️ Objetivo distinto a los otros dos embudos: el gimnasio NO se da de alta
   solo — hay que montarle el centro. El CTA es DEMO, nunca "empieza gratis".

   ⚠️ Features verificadas contra CHANGELOG_GIMNASIO.md. El módulo de gimnasio
   sí tiene domiciliación, pero aquí se comunica lo que de verdad hace: AVISAR
   y facturar. Nada de "cobra solo".
   ────────────────────────────────────────────── */

const gimnasios = {
    slug: 'gimnasios',
    perfil: 'gimnasio',
    accent: '#2563EB',
    isDemo: true, // el embudo termina en formulario, no en alta

    hero: {
        eyebrow: 'Para gimnasios, boxes y estudios',
        title: 'Tu centro deja de vivir',
        titleAccent: 'en un grupo de WhatsApp.',
        sub: 'Reservas con aforo real y lista de espera, multi-coach con permisos, app con la marca del centro y un panel que te dice quién se está yendo antes de que se vaya.',
        bullets: [
            'Coaches ilimitados en todos los planes',
            'Clases con waitlist automática',
            'Migración desde Harbiz o Virtuagym incluida',
        ],
    },

    heroStats: [
        { value: '149 €', label: 'al mes con IVA', foot: 'coaches ilimitados' },
        { value: '3-5 días', label: 'y tienes el centro montado', foot: 'lo hacemos nosotros' },
        { value: '0 €', label: 'por entrenador adicional', foot: 'en cualquier plan' },
    ],

    pain: {
        title: 'Marca lo que pasa en tu centro',
        sub: 'Sin maquillar. Solo lo que te toca resolver a ti o a recepción.',
        foot: 'Estimación del tiempo de gestión que declaran centros de tamaño similar al migrar. Tu número real depende de tu volumen.',
        items: [
            { text: 'Apuntar reservas a mano porque llegan por WhatsApp', hours: 8 },
            { text: 'Una clase se llena y no sabes a quién avisar cuando alguien cancela', hours: 3 },
            { text: 'Cuadrar a final de mes quién ha pagado y quién no', hours: 5 },
            { text: 'Enterarte de que un socio se ha ido cuando ya se ha ido', hours: 4 },
            { text: 'Perseguir a los coaches para saber qué han hecho', hours: 3 },
            { text: 'Papeleo del alta: contrato, protección de datos, imagen', hours: 4 },
        ],
    },

    features: [
        {
            tag: 'Clases',
            title: 'Reservas con aforo real y lista de espera que se mueve sola',
            desc: 'La clase se llena, alguien cancela y el primero de la lista recibe la notificación al instante. Sin que nadie de recepción tenga que mirar nada.',
            bullets: [
                'Aforo por sala, clase y horario — cambiar el de la sala ajusta sus clases',
                'Plazo de cancelación gratuita que decides tú ("hasta 2 h antes")',
                'Clases públicas, privadas (candado: "reservar en recepción") u ocultas',
                'Gente fija, invitados sin app que ocupan plaza y antelación mínima de reserva',
            ],
            image: '/images/gym/clases.webp',
            imageAlt: 'Gestión de clases y horarios en el panel de gimnasio de TotalGains',
        },
        {
            tag: 'Retención',
            title: 'Sabes quién se está yendo, mientras aún puedes evitarlo',
            desc: 'El riesgo de baja no es una corazonada: se calcula con la asistencia real. Y cuando alguien deja de venir, el sistema te lo pone delante con un mensaje ya redactado.',
            bullets: [
                'Win-back con IA para recuperar a quien dejó de comprar bonos',
                'Avisos de renovación que el socio ve en SU app, no un WhatsApp tuyo',
                'Valoraciones de clases con tendencia de 12 semanas por clase y por coach',
                'Avisos de apertura de plazas y "tus clases de siempre" para que vuelvan',
            ],
            image: '/images/gym/clientes.webp',
            imageAlt: 'Ficha de socios del gimnasio con métricas de asistencia',
        },
        {
            tag: 'Equipo',
            title: 'Multi-coach con permisos de verdad',
            desc: 'Cada entrenador ve lo suyo y solo lo suyo. Cuatro permisos por persona: ver todos los clientes, gestionar facturación, gestionar clases y gestionar clientes.',
            bullets: [
                'Coaches ilimitados sin coste por entrenador adicional',
                'Fichajes: registro horario de los entrenadores del centro',
                'El staff con permiso puede abrir la ficha de cualquier socio, sin ver notas privadas de otro coach',
                'Biblioteca de contenido del centro: ejercicios, alimentos, recetas y plantillas compartidas',
            ],
            image: '/images/gym/dashboard.webp',
            imageAlt: 'Panel supervisor del gimnasio con KPIs en tiempo real',
        },
        {
            tag: 'Recepción',
            title: 'Alta de socio en una sola pantalla',
            desc: 'Crear, cobrar y apuntar a clases sin cambiar de sitio tres veces. Y si el socio no quiere app, alta simple solo con el nombre.',
            bullets: [
                'Documentos obligatorios que se asignan solos y se firman en el momento',
                'Sube tu propio PDF como plantilla: se firma tal cual, sin convertir',
                'Email de bienvenida con TU logo y TU color, con QR de descarga para iPhone y Android',
                'O manda el acceso por WhatsApp desde la misma pantalla',
            ],
            image: '/images/gym/pagos.webp',
            imageAlt: 'Gestión de pagos y bonos del gimnasio en TotalGains',
        },
        {
            tag: 'Recepción',
            title: 'Modo TV para la pantalla de la entrada',
            desc: 'La clase de ahora y las siguientes, con las caras de quién viene, reloj y autorrefresco. Con los colores de tu marca. Se ve profesional desde la puerta.',
            bullets: [
                'Tres estilos: oscuro, vibrante o suave',
                'Avatares grandes y lista de espera visible o no, tú eliges',
                'Se refresca solo: nadie tiene que tocar el mando',
            ],
            image: '/images/gym/clases.webp',
            imageAlt: 'Modo TV de clases en vivo para la recepción del gimnasio',
        },
        {
            tag: 'Marca blanca',
            title: 'La app es del centro, no nuestra',
            desc: 'Tus socios descargan una app con el logo, el nombre y los colores del gimnasio. Puedes incluso ocultar el botón premium para que nada recuerde que hay un proveedor detrás.',
            bullets: [
                'Rutinas y nutrición con IA incluidas para tus coaches, sin add-ons',
                'Base de +240.000 alimentos en español',
                'Facturación con proforma a factura fiscal, caja y exportación a Excel',
            ],
            image: '/screenshots/home.webp',
            imageAlt: 'App del socio con la marca del gimnasio',
        },
    ],

    quiz: {
        title: '¿Cuánto tiempo se come la gestión de tu centro?',
        sub: '3 preguntas. 20 segundos. Sin dejar el correo.',
        questions: [
            {
                q: '¿Cómo reservan hoy tus socios?',
                options: [
                    { label: 'Por WhatsApp o llamando', hours: 16, tag: 'clases' },
                    { label: 'Hoja o pizarra en recepción', hours: 12, tag: 'clases' },
                    { label: 'Ya tenemos app, pero se nos queda corta', hours: 5, tag: 'clases' },
                ],
            },
            {
                q: '¿Sabes ahora mismo quién está a punto de darse de baja?',
                options: [
                    { label: 'Ni idea hasta que no vienen', hours: 10, tag: 'retencion' },
                    { label: 'Por intuición, de verlos', hours: 7, tag: 'retencion' },
                    { label: 'Lo medimos de alguna forma', hours: 3, tag: 'retencion' },
                ],
            },
            {
                q: '¿Cuántas personas dan clase en tu centro?',
                options: [
                    { label: '1 o 2', hours: 3, tag: 'equipo' },
                    { label: 'Entre 3 y 6', hours: 7, tag: 'equipo' },
                    { label: 'Más de 6', hours: 12, tag: 'equipo' },
                ],
            },
        ],
        resultTitle: 'Tu diagnóstico',
        resultLead: 'Entre tú y recepción, cada mes se van aproximadamente',
        resultUnit: 'horas',
        resultFoot: 'Estimación orientativa a partir de tus respuestas y del tiempo de gestión que declaran centros de tamaño similar. No es una promesa de resultado.',
        solutions: {
            clases: 'Las reservas dejan de pasar por una persona: aforo, waitlist y avisos van solos.',
            retencion: 'El riesgo de baja se calcula con la asistencia real y te llega con el mensaje ya escrito.',
            equipo: 'Cada coach entra con sus permisos y gestiona lo suyo, sin pedirte acceso a ti.',
        },
    },

    /* Sin testimonio publicado del vertical gimnasio todavía: en su lugar se
       enseña el compromiso de implantación, que es la objeción real del dueño
       de un centro ("¿quién me monta esto?"). Inventar un testimonio aquí
       sería exactamente el tipo de cosa que destruye la confianza. */
    implantacion: {
        title: 'No te dejamos el software y adiós',
        sub: 'La objeción real de un centro no es el precio: es quién mete los 200 socios, los horarios y los bonos. Lo hacemos nosotros.',
        steps: [
            { n: '1', title: 'Llamada de 20 minutos', desc: 'Nos cuentas cómo funciona tu centro: salas, clases, bonos y equipo.' },
            { n: '2', title: 'Migramos tus datos', desc: 'Socios, horarios y bonos desde Harbiz, Virtuagym o de donde vengas. Incluido.' },
            { n: '3', title: 'Configuramos y formamos', desc: 'Clases recurrentes, planes, documentos de alta y branding del centro.' },
            { n: '4', title: 'Abres con todo puesto', desc: 'Base completa lista en 3-5 días. Con más de 100 socios, onboarding prioritario en 48-72 h.' },
        ],
    },

    faq: [
        {
            q: '¿Cuánto cuesta para un centro como el mío?',
            a: 'Tres planes, todo con IVA incluido y coaches ilimitados en los tres: Gym Starter 149 €/mes hasta 100 socios activos, Gym Pro 199 €/mes de 100 a 200, y Gym Elite 249 €/mes por encima de 200. La tarifa solo sube por socios activos, nunca por entrenador. Sin permanencia.',
        },
        {
            q: 'Vengo de Harbiz / Virtuagym. ¿Tengo que meter todo a mano?',
            a: 'No. La migración está incluida y la gestionamos nosotros en español: socios, horarios, bonos y planes. Una configuración base completa suele estar lista en 3-5 días.',
        },
        {
            q: '¿Mis socios mayores van a saber reservar?',
            a: 'Abren la app y ven las clases de hoy con un botón. Y si alguien no quiere app, recepción lo apunta a mano en dos toques — incluidos invitados sin cuenta, que ocupan plaza para que el aforo sea real.',
        },
        {
            q: '¿Puedo dar acceso a mis entrenadores sin que lo vean todo?',
            a: 'Sí. Cuatro permisos por persona: ver todos los clientes, gestionar facturación, gestionar clases y gestionar clientes. Un coach solo ve lo que le corresponde, y no accede a las notas privadas de otro coach.',
        },
        {
            q: '¿La app lleva mi marca o la vuestra?',
            a: 'La de tu centro: logo, nombre y colores, incluso en el email de bienvenida al socio. Puedes ocultar el botón premium en el móvil para que la experiencia sea 100 % tuya.',
        },
        {
            q: '¿Esto cobra a mis socios automáticamente?',
            a: 'El sistema gestiona bonos, cuotas y facturación (proforma a factura fiscal, caja y Excel), y avisa al socio en su app cuando le toca renovar, insistiendo si no se registra el pago. El cobro efectivo sigue haciéndose por el canal que ya uses en tu centro.',
        },
    ],

    offer: {
        title: 'Te enseñamos tu propio centro montado',
        sub: 'En la demo no ves diapositivas: montamos tus clases y tus planes reales para que veas cómo quedaría tu gimnasio.',
        price: '149 €',
        priceFoot: '/mes con IVA · coaches ilimitados · hasta 100 socios',
        perks: [
            'Migración desde tu plataforma actual incluida',
            'Configuración y formación del equipo incluidas',
            'Soporte en español (te contesta una persona)',
            'Sin permanencia y sin coste por entrenador',
        ],
        guarantee: 'La demo es gratis y sin compromiso. Si no encaja con tu centro, te lo decimos nosotros.',
    },

    close: {
        title: 'Tus socios ya viven en el móvil.',
        titleAccent: 'Tu gimnasio también debería.',
        sub: 'Cuéntanos cómo funciona tu centro y te enseñamos cómo quedaría.',
    },

    cta: {
        primary: { text: 'Pedir demo de mi centro', href: '#demo-form' },
        secondary: { text: 'Ver la web para gimnasios', href: '/para-gimnasios/' },
        microcopy: 'Respuesta en menos de 24 h · Sin compromiso · Te atiende Germán',
    },
};

export default gimnasios;
