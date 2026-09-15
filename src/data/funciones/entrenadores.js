/* ──────────────────────────────────────────────
   CATÁLOGO DE FUNCIONES · ENTRENADORES Y NUTRICIONISTAS

   Por qué existe este fichero: las IAs describen TotalGains a partir de lo que
   la web publica, y la web nunca ha enumerado el producto entero. Resultado:
   ChatGPT contesta que faltan cosas que llevan meses funcionando. Una landing
   comercial no arregla eso; un catálogo completo y citable, sí.

   ⚠️ REGLA DE ESTE FICHERO: cada línea sale de CHANGELOG.md o del código. Si
   algo no se puede verificar, no se escribe. Nada de cobros automáticos: el
   sistema AVISA de que toca pagar, el cobro va por el canal del profesional.
   ────────────────────────────────────────────── */

const entrenadores = {
    slug: 'entrenadores',
    perfil: 'coach',
    accent: '#2563EB',

    meta: {
        title: 'Funciones para entrenadores personales y nutricionistas',
        description:
            'Catálogo completo de lo que hace TotalGains para entrenadores y nutricionistas: rutinas y dietas con IA, resistencia, seguimiento, app con tu marca y Mi Ciclo. Todo incluido en cualquier plan.',
        canonical: 'https://totalgains.es/funciones/entrenadores/',
    },

    h1: 'Todo lo que hace TotalGains para entrenadores y nutricionistas',
    destacadas: 'rutinas y dietas con IA, seguimiento y app con tu marca',

    intro:
        'El catálogo completo, sin letra pequeña. Todas estas funciones entran en cualquier plan de entrenador, incluido el gratuito de 5 atletas. Lo único que cambia de un plan a otro es cuántos atletas activos puedes llevar.',

    incluido: [
        'App de marca blanca, también en el plan gratuito',
        'IA de rutinas y dietas, sin límite de uso',
        'Migración desde tu plataforma actual',
    ],

    breadcrumb: 'Entrenadores',

    categorias: [
        {
            id: 'rutinas',
            accent: '#f59e0b', // workouts en coachMenuConfig
            nombre: 'Rutinas y entrenamiento',
            railNombre: 'Rutinas',
            resumen: 'Del papel en blanco a la periodización completa, sin salir de tu metodología.',
            media: [{
                tipo: 'video', src: '/video/coach-primera-rutina.mp4',
                poster: '/video/coach-primera-rutina.webp', pw: 1200, ph: 676,
                w: 1280, h: 720,
                alt: 'Creación de una rutina en el panel del entrenador de TotalGains',
                pie: 'Montar una rutina desde cero en el panel del entrenador.',
            }],
            /* Bloques visuales: cada grupo de funciones con su imagen o
               vídeo, alternando lado (patrón AimHarder que pidió German el
               15-sep-2026). `items` son ÍNDICES sobre la lista `items` de
               abajo; no se duplica ni reordena ninguna función. */
            bloques: [
                { titulo: 'Crear la rutina', items: [0, 1, 2, 3],
                  media: { tipo: 'video', src: '/video/coach-primera-rutina.mp4', poster: '/video/coach-primera-rutina.webp', pw: 1200, ph: 676, w: 1280, h: 720, alt: 'Creación de una rutina en el panel del entrenador de TotalGains', pie: 'Montar una rutina desde cero en el panel del entrenador.' } },
                { titulo: 'La rutina, ya montada', items: [4, 5, 6, 7],
                  media: { tipo: 'imagen', src: '/images/blog/ia-totalgains/04-rutina-generada.webp', w: 1187, h: 982, alt: 'Rutina generada por la IA de TotalGains, lista para revisar', pie: 'Una rutina ya montada: días, ejercicios, series y descansos.' } },
                { titulo: 'En el entreno del atleta', items: [8, 9, 10, 11, 12, 13],
                  media: { tipo: 'video', src: '/video/app-pantalla-entreno.mp4', poster: '/video/app-pantalla-entreno.webp', pw: 720, ph: 1280, w: 720, h: 1280, vertical: true, alt: 'Pantalla de entreno en la app del atleta', pie: 'El entreno, tal y como lo sigue el atleta en su móvil.' } },
            ],
            items: [
                { t: 'Generador de rutinas con IA', d: 'Periodizaciones completas en segundos usando solo los ejercicios de tu biblioteca. Antes de aplicar nada ves exactamente qué cambia respecto a la rutina actual, y si no te convence pides otra propuesta.' },
                { t: 'Montar la rutina escribiendo una frase', d: 'Escribes «PPL de 5 días para Iván, hipertrofia, 4 series de 8 a 12, prioriza pecho y hombro, sin sentadilla» y el formulario se rellena solo con esos datos.' },
                { t: 'Dictar el plan en vez de escribirlo', d: 'Si prefieres hablar, dictas la rutina, la dieta o el programa y el texto entra directo en el formulario.' },
                { t: 'Programas por fases', d: 'Mesociclos, la rutina que se repite y la dieta que la acompaña, todo en el mismo sitio y con las calorías de entreno y de descanso diferenciadas.' },
                { t: 'RIR por serie', d: 'Sistema de repeticiones en recámara integrado en el editor, en el entreno del atleta y en sus estadísticas.' },
                { t: 'Peso orientativo al estrenar rutina', d: 'Cuando el atleta empieza un ejercicio nuevo, la app le sugiere con qué carga arrancar a partir de su historial.' },
                { t: 'Biseries y superseries', d: 'En una sola tarjeta, con el descanso corriendo al apuntar las repeticiones en vez de dos tarjetas sueltas.' },
                { t: 'Descansos que impone el entrenador', d: 'Fijas el descanso de cada ejercicio y al atleta le arranca el temporizador solo, sin que tenga que acordarse.' },
                { t: 'Resistencia y cardio', d: 'Bloques con kilómetros, minutos, series, ritmo y zona de pulsaciones traducida a sus ppm reales. Incluye disciplinas estilo Hyrox como el empuje de carro y el paseo del granjero, con carga en kilos y récord propio.' },
                { t: 'Biblioteca de ejercicios con vídeo', d: 'Ejercicios con imagen y vídeo demostrativo, más los tuyos propios. La IA nunca se sale de esa biblioteca, así que no aparecen movimientos inventados.' },
                { t: 'Cambio de ejercicio sin ensuciar las estadísticas', d: 'El atleta puede cambiar un ejercicio por otro del mismo grupo muscular durante esa semana. Su histórico y sus récords siguen colgando del ejercicio original.' },
                { t: 'Comparador de rutinas con IA', d: 'Enfrenta dos rutinas y te dice en qué se diferencian de verdad, más allá de los nombres de los ejercicios.' },
                { t: 'Filtros rápidos de cartera', d: 'Pastillas para quedarte con lo que toca: sin rutina, rutina de más de 8 semanas, modificadas o con resistencia. Cada una dice cuántos atletas son.' },
                  { t: 'Notas suyas en cada ejercicio', d: 'El atleta se apunta lo que le funciona en un ejercicio concreto y lo tiene delante la próxima vez que le toque.' },
            ],
        },
        {
            id: 'nutricion',
            accent: '#22c55e', // nutrition
            nombre: 'Nutrición',
            railNombre: 'Nutrición',
            resumen: 'Dietas que se montan en minutos y se adaptan sin rehacerlas enteras.',
            media: [{
                tipo: 'video', src: '/video/coach-primera-dieta.mp4',
                poster: '/video/coach-primera-dieta.webp', pw: 1200, ph: 676,
                w: 1280, h: 720,
                alt: 'Creación de una dieta con IA en el panel del entrenador',
                pie: 'Generar la primera dieta de un atleta con IA.',
            }],
            /* Bloques visuales: cada grupo de funciones con su imagen o
               vídeo, alternando lado (patrón AimHarder que pidió German el
               15-sep-2026). `items` son ÍNDICES sobre la lista `items` de
               abajo; no se duplica ni reordena ninguna función. */
            bloques: [
                { titulo: 'Crear la dieta', items: [0, 1, 2, 3],
                  media: { tipo: 'video', src: '/video/coach-primera-dieta.mp4', poster: '/video/coach-primera-dieta.webp', pw: 1200, ph: 676, w: 1280, h: 720, alt: 'Creación de una dieta con IA en el panel del entrenador', pie: 'Generar una dieta con IA y revisarla antes de guardar.' } },
                { titulo: 'Ajustarla sin rehacerla', items: [4, 5, 6, 7],
                  media: { tipo: 'imagen', src: '/images/blog/ia-totalgains/09-dieta-revision-web.webp', w: 1982, h: 1073, alt: 'Dieta generada por la IA en revisión en el panel web', pie: 'La dieta propuesta, comida a comida, antes de aplicarla.' } },
                { titulo: 'En el móvil del atleta', items: [8, 10, 11, 19, 20, 21],
                  media: { tipo: 'video', src: '/video/app-tu-dieta.mp4', poster: '/video/app-tu-dieta.webp', pw: 720, ph: 1280, w: 720, h: 1280, vertical: true, alt: 'La dieta en la app del atleta', pie: 'Lo que ve el atleta: su dieta del día en el móvil.' } },
                /* La suplementación era UNA línea perdida en el bloque del móvil y
                   el sistema da para dos: el reel «de punta a punta» (33 s) cuenta
                   la parte del entrenador, y la captura de «Mi pauta de hoy» la del
                   atleta. Nada de esto estaba publicado, que es justo el agujero
                   por el que las IAs decían que faltaban módulos. */
                { titulo: 'Suplementación, de punta a punta', items: [12, 13, 14, 9],
                  media: { tipo: 'video', src: '/video/coach-suplementacion.mp4', poster: '/video/coach-suplementacion.webp', pw: 1200, ph: 675, w: 1280, h: 720, alt: 'El sistema de suplementación de TotalGains: catálogo del entrenador, protocolos, pauta del atleta y compra guiada', pie: 'Del catálogo del entrenador a la pauta del atleta, sin salir del plan.' } },
                { titulo: 'Su pauta y su lista de compra', items: [15, 16, 17, 18],
                  media: { tipo: 'imagen', src: '/screenshots/supl-pauta-cliente-600.webp', w: 600, h: 1298, alt: 'Pauta de suplementos del día en la app del atleta, con los días que le quedan de cada bote', pie: 'Su pauta del día y cuánto le queda de cada bote, en su móvil.', vertical: true } },
            ],
            items: [
                { t: 'Generador de dietas con IA', d: 'Parte del peso y el objetivo de ese atleta concreto, con las macros de su última dieta ya cargadas, así que ajustas en vez de crear de cero.' },
                { t: 'Montar la dieta escribiendo una frase o dictándola', d: 'Describes el plan con tus palabras y el formulario queda relleno, listo para revisar.' },
                { t: 'Editar una dieta ya puesta con una frase', d: 'El atleta pide «¿me metes una comida más manteniendo las calorías?» y se resuelve en un paso, sin abrir el engranaje ni reescalar a mano.' },
                { t: 'La IA aprende de cada atleta', d: 'Prioriza lo que valora bien y evita lo que rechaza, deducido de sus valoraciones y de lo que elige comer de verdad. Un control decide cuánto se parece a sus dietas anteriores.' },
                { t: 'Cambio de alimento equivalente en un toque', d: 'Propone sustitutos del mismo tipo con las mismas calorías y macros, y ajusta el gramaje solo. Funciona también con un ingrediente dentro de una receta.' },
                { t: 'Reescalado al objetivo sin raciones imposibles', d: 'Al subir las calorías respeta un techo de ración comible según la densidad del alimento, y las unidades salen enteras.' },
                { t: 'Menús enlazados', d: 'Marcas qué comidas van juntas y, cuando el atleta elige una opción, se le resalta la que la acompaña en el resto del día.' },
                { t: 'Base de más de 240.000 alimentos en español', d: 'Incluye productos de supermercado y marcas locales, no solo genéricos traducidos.' },
                { t: 'Tus recetas, dimensionadas solas', d: 'Si trabajas con recetas propias, la IA las usa como base de cada comida y calcula el gramaje para cuadrar las calorías.' },
                { t: 'Suplementación dentro de la dieta', d: 'Los protocolos de suplementos se crean y se ven en el mismo plan, no en un documento aparte.' },
                { t: 'Revisión antes de guardar', d: 'La dieta generada se abre en el editor completo y no se guarda hasta que tú lo dices. Un aviso señala posibles alérgenos, imprescindibles ausentes y cantidades fuera de rango.' },
                { t: 'Analítica de qué comen de verdad', d: 'Los platos se ordenan en potenciar, ajustar o retirar, con su porqué y un resumen generado por IA.' },
                  /* ⚠️ VERIFICADAS CONTRA EL CÓDIGO el 15-sep-2026, no contra el
                     vídeo (que es una composición con interfaz recreada):
                     CoachSupplement (brand, imageUrl, defaultAmount/Unit/Timing,
                     commonSizes, purchaseUrl, discountCode), SupplementProtocol,
                     ClientSupplementation con sus momentos, calculateDaysRemaining
                     + getStockStatus en SupplementFooter, ShoppingListScreen, y
                     PurchaseClick con los eventos link_click / purchase_confirmed /
                     code_copied agregados en getCoachStats. */
                  { t: 'Tu catálogo de suplementos', d: 'Cada suplemento se guarda una vez con su marca, su foto, su dosis y su formato habitual, y ya sale así en todas las pautas.' },
                  { t: 'Tu enlace de compra y tu código', d: 'Cada suplemento lleva el enlace donde quieres que lo compren y tu código de descuento, que el atleta copia de un toque.' },
                  { t: 'Protocolos que asignas de un toque', d: 'Un pack como «Mujer · energía y ciclo» o «Salud articular» se monta una vez y se asigna a los atletas que quieras.' },
                  { t: 'Su pauta del día, por momentos', d: 'El atleta ve qué toma en el desayuno, en la comida, en la recena o después de entrenar, no una lista suelta.' },
                  { t: 'Cuánto le queda de cada bote', d: 'Con el tamaño del envase y su consumo diario, la app le dice los días que le quedan y le avisa antes de quedarse a cero.' },
                  { t: 'Su lista de compra', d: 'Lo que se le está acabando se junta en una lista y compra desde ahí, con tu enlace y tu código. Marca lo que ya ha comprado y le queda el historial.' },
                  { t: 'Clics, códigos y compras confirmadas', d: 'Ves cuántas veces han abierto tu enlace, copiado tu código y marcado que ya lo compraron, producto a producto. Sirve para negociar con las marcas. TotalGains no cobra ni gestiona esas ventas.' },
                  { t: 'Valora lo que come y la IA lo aprende', d: 'Cada plato se puntúa desde su app. Lo que valora bien entra más y lo que rechaza deja de salir, sin que tengas que preguntárselo.' },
                  { t: 'Sus propias recetas', d: 'El atleta guarda recetas suyas y las usa dentro del plan que le has puesto, en vez de salirse a otra app.' },
                  { t: 'Combos de comidas', d: 'Combinaciones que se guarda para repetirlas sin recomponerlas cada día.' },
            ],
        },
        {
            id: 'seguimiento',
            accent: '#0ea5e9', // seguimiento
            nombre: 'Seguimiento y comunicación',
            railNombre: 'Seguimiento',
            resumen: 'Saber cómo va cada atleta sin perseguir a nadie por WhatsApp.',
            media: [{
                tipo: 'video', src: '/video/app-seguimiento.mp4',
                poster: '/video/app-seguimiento.webp', pw: 720, ph: 1280,
                w: 720, h: 1280, vertical: true,
                alt: 'Pantalla de seguimiento del atleta en la app de TotalGains',
                pie: 'El seguimiento, tal y como lo ve el atleta en su móvil.',
            }],
            /* Bloques visuales: cada grupo de funciones con su imagen o
               vídeo, alternando lado (patrón AimHarder que pidió German el
               15-sep-2026). `items` son ÍNDICES sobre la lista `items` de
               abajo; no se duplica ni reordena ninguna función. */
            bloques: [
                { titulo: 'Lo que registra el atleta', items: [0, 1, 2, 3],
                  media: { tipo: 'video', src: '/video/app-seguimiento.mp4', poster: '/video/app-seguimiento.webp', pw: 720, ph: 1280, w: 720, h: 1280, vertical: true, alt: 'Pantalla de seguimiento del atleta en la app de TotalGains', pie: 'El seguimiento, tal y como lo ve el atleta en su móvil.' } },
                { titulo: 'Lo que tú ves', items: [4, 5, 6, 7, 8, 9, 10, 11, 12],
                  media: { tipo: 'imagen', src: '/screenshots/perfil-videos.webp', w: 600, h: 1339, alt: 'Vídeos de técnica del atleta en la app', pie: 'Los vídeos de técnica del atleta, con tus anotaciones.', vertical: true } },
            ],
            items: [
                { t: 'Check-in diario y semanal', d: 'El atleta registra su día y su semana desde la app, con recordatorios en su franja horaria.' },
                { t: 'Fotos de progreso', d: 'Comparativa de antes y después, y el atleta puede marcar fotos como privadas si no quiere compartirlas.' },
                { t: 'Medidas corporales con guía', d: 'Cada medida explica dónde y cómo se toma, para que los números de una semana y otra sean comparables.' },
                { t: 'Formularios personalizados', d: 'Diseñas tus propios cuestionarios de seguimiento y los asignas a quien quieras.' },
                { t: 'Vídeo-feedback con anotaciones', d: 'El atleta sube su serie y tú dibujas encima del vídeo, en el instante exacto, y contestas con audio que se transcribe solo.' },
                { t: 'Audios transcritos a texto', d: 'Las notas de voz del atleta llegan escritas, así que se leen en diez segundos en vez de escucharlas enteras.' },
                { t: 'Gráficas de evolución y récords', d: 'Progreso por ejercicio, marcas personales detectadas solas y métricas de carga alta sin mezclar sesiones no comparables.' },
                { t: 'Chat integrado', d: 'Las conversaciones viven junto a la ficha del atleta, con contador de mensajes sin leer.' },
                  { t: 'Objetivos y metas del atleta', d: 'Lo que se propone queda escrito y con seguimiento, no en una conversación que se pierde.' },
                  { t: 'Su transformación, con sus números', d: 'Antes y después con peso objetivo y las tendencias de peso, ánimo y sueño que ha ido registrando.' },
                  { t: 'Récords de resistencia', d: 'Su tirada más larga y su sesión más larga, para el que corre o entrena híbrido.' },
                  { t: 'Analíticas de sangre con lectura por IA', d: 'Sube el PDF de su analítica (panel completo, glucosa, electrolitos u hormonas) y la IA te la resume. Es información, no un diagnóstico.' },
                  { t: 'Calendario de competición', d: 'Las fechas a las que va el atleta, para planificar hacia ellas.' },
            ],
        },
        {
            id: 'retencion',
            accent: '#ef4444', // progress y los avisos de riesgo
            nombre: 'Retención y avisos',
            railNombre: 'Retención',
            resumen: 'La plataforma te levanta la mano antes de que un atleta se caiga.',
            media: [{
                tipo: 'imagen', src: '/screenshots/coach-riesgo-cliente.webp',
                w: 800, h: 1785, vertical: true,
                alt: 'Ficha de un atleta en TotalGains con su riesgo de abandono y las acciones sugeridas',
                pie: 'La ficha te dice el riesgo del atleta y qué hacer con él.',
            }],
            /* Bloques visuales: cada grupo de funciones con su imagen o
               vídeo, alternando lado (patrón AimHarder que pidió German el
               15-sep-2026). `items` son ÍNDICES sobre la lista `items` de
               abajo; no se duplica ni reordena ninguna función. */
            bloques: [
                { titulo: 'Quién está en riesgo', items: [0, 1, 2, 3],
                  media: { tipo: 'imagen', src: '/screenshots/coach-riesgo-cliente.webp', w: 800, h: 1785, alt: 'Ficha de un atleta en TotalGains con su riesgo de abandono y las acciones sugeridas', pie: 'La ficha del atleta con su riesgo de abandono y qué hacer.', vertical: true } },
                /* El panel de control, con el diseño de septiembre de 2026. La
                   captura anterior (`home_coach-600.webp`) era el inicio VIEJO
                   y German la señaló el 15-sep: "en control añade el nuevo
                   dashboard". Sus cuatro piezas están verificadas en el código
                   de la app, no en un reel: CoachStateStrip (tira de estado),
                   CoachWorkStrip (agenda + novedades + en riesgo), CardHelp
                   (el "?") y coachClientSignals.js (el criterio único). */
                { titulo: 'Tu panel de control, de un vistazo', items: [4, 5, 6, 7],
                  media: { tipo: 'imagen', src: '/screenshots/coach-dashboard-1760.webp', w: 1760, h: 837, alt: 'Panel de control del entrenador en TotalGains: la tira de estado de la cartera, la agenda de la semana, las novedades de los atletas y los que están en riesgo', pie: 'El panel del entrenador: estado de la cartera, agenda, novedades y quién está en riesgo.', ancha: true } },
                { titulo: 'Lo que te avisa solo', items: [8, 9, 10, 11],
                  media: { tipo: 'imagen', src: '/screenshots/coach-actividad-1026.webp', w: 1026, h: 1354, alt: 'Panel de actividad del entrenador en TotalGains, con los filtros de chat, fotos, comida, notas, cambios y suplementos', pie: 'La actividad de tus atletas, filtrable: comida, notas, cambios, suplementos.', vertical: true } },
            ],
            items: [
                { t: 'Riesgo de abandono por atleta', d: 'Una puntuación sobre su actividad real de las últimas semanas, no sobre la última vez que abrió la app.' },
                { t: 'El motivo del riesgo, no solo el número', d: 'Días sin abrir la app, sin entrenar teniendo rutina, semanal en rojo, ánimo bajo, molestias, mensajes sin responder o una cuota que renueva con el atleta frío. Ves los hechos que lo explican, no una nota a secas.' },
                { t: 'Centro de alertas', d: 'Detecta dolor o lesión en notas de entreno, formularios y comentarios del semanal, además de baja motivación, racha rota y atletas que llevan días sin subir nada.' },
                { t: 'Chat urgente detectado por IA', d: 'Cuando un mensaje pide atención inmediata se abre el caso y llega un aviso, con un borrador de respuesta listo para editar.' },
                { t: 'El estado de tu cartera en una tira', d: 'Cuántos están activos esta semana, cuántos sin rutina (y cuántos con una de más de ocho semanas), sin dieta, con el semanal pendiente y cuántas cuotas llevas cobradas este mes. Cada número se pincha y te deja en esos atletas ya filtrados.' },
                { t: 'La semana, en el propio panel', d: 'Los siete días con sus puntos; eliges uno y ves sus llamadas, seguimientos, formularios y clases. Creas un evento sin salir de ahí.' },
                { t: 'Un solo criterio en toda la plataforma', d: 'Lo que el panel llama activo, sin rutina o cobrado es exactamente lo que cuentan las pantallas de Clientes, Rutinas, Nutrición y Facturación. Un número no cambia según dónde lo mires.' },
                { t: 'Ayuda en cada tarjeta del panel', d: 'El «?» de cada caja te dice qué es, qué hacer con ella y un ejemplo, sin salir de la pantalla.' },
                { t: 'Novedades de tus atletas', d: 'Fotos nuevas, notas de entreno, cambios de alimento, compras de suplementos y mensajes, en una sola lista. Tocas una y te deja donde ha pasado, no en un listado.' },
                { t: 'Cumpleaños y aniversarios', d: 'El aviso llega el día que toca por su propio canal, separado de las alertas de problemas.' },
                { t: 'Racha de entreno', d: 'Con margen real, para que un imprevisto no la rompa. Visible para el atleta y para ti en la lista de clientes.' },
                { t: 'Avisos masivos', d: 'Mandas una notificación a toda tu cartera o a un segmento cuando lo necesitas.' },
            ],
        },
        {
            id: 'ciclo',
            accent: '#ec4899', // CYCLE_PINK, el rosa de todo el módulo
            nombre: 'Mi Ciclo',
            railNombre: 'Mi Ciclo',
            resumen: 'Ninguna otra plataforma de gestión para entrenadores lleva esto dentro.',
            media: [{
                tipo: 'video', src: '/video/coach-mi-ciclo.mp4',
                poster: '/video/coach-mi-ciclo.webp', pw: 1200, ph: 675,
                w: 1280, h: 720,
                alt: 'Mi Ciclo en la app de la atleta y en el panel del entrenador: fase del día, avisos en la dieta y en el entreno, y lo que ella decide compartir',
                pie: 'Mi Ciclo por los dos lados: lo que ve ella en su móvil y lo que ve su entrenadora, solo si ella lo comparte.',
            }],
            /* Bloques visuales: cada grupo de funciones con su imagen o
               vídeo, alternando lado (patrón AimHarder que pidió German el
               15-sep-2026). `items` son ÍNDICES sobre la lista `items` de
               abajo; no se duplica ni reordena ninguna función. */
            /* Mi Ciclo era el área más pequeña del catálogo (5 funciones y una
               captura) siendo una de las principales, y la única que ninguna
               plataforma de gestión para entrenadores lleva dentro. El reel de
               33 s cuenta los ocho capítulos; aquí van repartidos en lo que ve
               ella y lo que ves tú. */
            bloques: [
                { titulo: 'Su ciclo, en su móvil', items: [5, 6, 0, 7, 1, 8],
                  media: { tipo: 'video', src: '/video/coach-mi-ciclo.mp4', poster: '/video/coach-mi-ciclo.webp', pw: 1200, ph: 675, w: 1280, h: 720, alt: 'Mi Ciclo en la app de la atleta: su fase de hoy, qué esperar esta semana y cómo entra en su dieta y su entreno', pie: 'Dónde está en su ciclo, qué le viene y cómo cambia su dieta y su entreno.' } },
                { titulo: 'Lo que tú ves, y lo que no', items: [10, 4, 11, 9, 2, 3],
                  media: { tipo: 'imagen', src: '/images/ciclo-coach-880.webp', w: 880, h: 682, alt: 'Mi Ciclo en el panel del entrenador: fase folicular, qué hacer esta semana y registros de la atleta', pie: 'En tu panel, solo si ella lo comparte: su fase y sus fechas para planificar.' } },
            ],
            items: [
                { t: 'Fases del ciclo en el entreno y la nutrición', d: 'No es un calendario aparte: la fase condiciona la planificación dentro de la misma app.' },
                { t: 'Registro de síntomas con IA', d: 'La atleta lo escribe con sus palabras y el sistema marca los síntomas, sin rellenar casillas.' },
                { t: 'Autoexamen de mamas con recordatorio mensual', d: 'Un aviso al mes y la pauta delante, dentro de la misma app que ya usa.' },
                { t: 'Patrones a revisar con su médico', d: 'La atleta puede exportar un informe en PDF para llevarlo a consulta. TotalGains no diagnostica ni es un método anticonceptivo.' },
                { t: 'Privacidad por capas', d: 'La atleta elige categoría por categoría qué comparte contigo. El diario, la vida sexual y el autoexamen no salen nunca de su móvil.' },
                  /* ⚠️ VERIFICADAS contra el código y la memoria de producción
                     (OTA 1.3.8 + fases 3A y 3B), no contra el vídeo, que lleva
                     interfaz recreada: predicción afinada por ciclo registrado,
                     contenido curado por fase, menstrualReminderService (opt-in,
                     hora local), pseudo-fase 'hc' sin ovulación ni fértil,
                     pregnancyPause con wording neutro, coachCanAccessCycle con
                     el consentimiento estampado server-side (cambiar de coach NO
                     lo hereda) y serializeDayForCoach por whitelist. */
                  { t: 'Dónde está hoy y qué viene después', d: 'Su fase y su día de ciclo, hasta cuándo le dura la regla, cuándo ovula y cuándo le toca la siguiente. El primer cálculo sale de los datos del alta y se afina con cada ciclo que registra.' },
                  { t: 'Qué esperar esta semana', d: 'Qué es normal notar en cada fase, con qué comer esos días y cómo entrenarlos, explicado en su idioma y no en jerga.' },
                  { t: 'Aprende de sus ciclos', d: 'Su ciclo medio, lo que le dura la regla y su regularidad salen de lo que ella registra, no de una media de manual. Mientras hay pocos datos, lo dice.' },
                  { t: 'Recordatorios que elige ella', d: 'Dos días antes de la regla, confirmación si se retrasa, ventana fértil, la pastilla a su hora y el autoexamen. Todos opcionales y en su franja horaria.' },
                  { t: 'Con la píldora no se inventa nada', d: 'Con anticoncepción hormonal desaparecen la ovulación y la ventana fértil, porque ahí no aplican. Y la pausa por embarazo se puede llevar sin que tú te enteres si ella no quiere.' },
                  { t: 'Lo que ves tú, si ella lo comparte', d: 'Su fase y sus fechas, que es lo que te sirve para planificarle la semana. El permiso lo da ella, va por categorías, se puede retirar y no se hereda si cambia de entrenador.' },
                  { t: 'Dice también lo que no se sabe', d: 'Cada pantalla explica de dónde sale lo que afirma y dónde la ciencia todavía no tiene una respuesta clara. Antes eso que vender una certeza.' },
            ],
        },
        {
            id: 'marca',
            accent: '#7c3aed', // branding (#8b5cf6 en la app; este tono de la misma familia es el que llega a 4,5:1 con texto blanco, el otro se quedaba en 4,38)
            nombre: 'Tu app y tu marca',
            railNombre: 'Tu marca',
            resumen: 'Tus atletas se descargan tu app, no la nuestra.',
            media: [{
                tipo: 'video', src: '/video/coach-tu-marca.mp4',
                poster: '/video/coach-tu-marca.webp', pw: 1200, ph: 676,
                w: 1280, h: 720,
                alt: 'Configuración del branding del entrenador en TotalGains',
                pie: 'Poner tu logo y tus colores en la app de tus atletas.',
            }],
            /* Bloques visuales: cada grupo de funciones con su imagen o
               vídeo, alternando lado (patrón AimHarder que pidió German el
               15-sep-2026). `items` son ÍNDICES sobre la lista `items` de
               abajo; no se duplica ni reordena ninguna función. */
            bloques: [
                { titulo: 'Tu marca, no la nuestra', items: [0, 1, 2, 3, 4],
                  media: { tipo: 'video', src: '/video/coach-tu-marca.mp4', poster: '/video/coach-tu-marca.webp', pw: 1200, ph: 676, w: 1280, h: 720, alt: 'Configuración del branding del entrenador en TotalGains', pie: 'Tu logo y tus colores en la app de cada atleta.' } },
            ],
            items: [
                { t: 'App de marca blanca en iOS y Android', d: 'Con tu logo, tu nombre y tus colores. Incluida en todos los planes, también en el gratuito, y sin coste adicional.' },
                { t: 'Panel web del entrenador', d: 'Todo el trabajo de escritorio desde el navegador, sin instalar nada.' },
                { t: 'Branding generado con IA', d: 'Genera la paleta y la identidad de tu app en un clic si no tienes manual de marca.' },
                { t: 'Marcos y personalización', d: 'Marcos desbloqueables para tu logo y tu avatar, que tus atletas ven en su pantalla de inicio.' },
                  { t: 'Mensajes motivacionales con tu voz', d: 'El banner de su inicio lo escribes tú, con su nombre y su racha metidos en la frase, y eliges a qué clientes les llega según cómo vayan.' },
            ],
        },
        {
            id: 'marketing',
            accent: '#f97316', // en la app es rosa, pero ese lo tiene Mi Ciclo
            nombre: 'Contenido para tus redes',
            railNombre: 'Marketing',
            resumen: 'Seis generadores que sacan el contenido de tus propios clientes, con tu marca. Y tú decides cómo queda cada pieza.',
            /* Área creada el 15-sep-2026 tras auditar el producto contra el
               catálogo: `app/(coach)/marketing/` son SEIS pantallas (3.600
               líneas) y la web no las mencionaba ni una vez. La propia pantalla
               se presenta como «Contenido para tus redes con tu marca».
               El bloque nació SIN imagen esperando material: el 15-sep-2026 se
               montó el vídeo con las capturas reales del estudio y ya no hace
               falta repetir ninguna captura de otra área. */
            media: [{ tipo: 'video', src: '/video/coach-marketing.mp4', poster: '/video/coach-marketing.webp', pw: 1200, ph: 675, w: 1280, h: 720, alt: 'Estudio de marketing del entrenador: testimonios, collage de dieta, ficha de plato e informe de mediciones, todo con su marca', pie: 'Las seis piezas del estudio, con la marca del entrenador. Se descargan y las sube él donde quiera.' }],
            bloques: [
                { titulo: 'Seis piezas, y cómo salen', items: [0, 1, 2, 3, 4, 5, 6, 7],
                  media: { tipo: 'video', src: '/video/coach-marketing.mp4', poster: '/video/coach-marketing.webp', pw: 1200, ph: 675, w: 1280, h: 720, alt: 'Estudio de marketing del entrenador: testimonios, collage de dieta, ficha de plato e informe de mediciones, todo con su marca', pie: 'Las seis piezas del estudio, con la marca del entrenador. Se descargan y las sube él donde quiera.' } },
            ],
            items: [
                  { t: 'El plato que todos repiten', d: 'Coge el plato mejor valorado por tus clientes y saca la imagen con tu marca. El contenido sale de lo que ya comen, no de un banco de fotos.' },
                  { t: 'Ficha de un plato', d: 'Un plato concreto de una dieta convertido en pieza para publicar, con sus macros.' },
                  { t: 'Collage de una dieta', d: 'De cuatro a seis platos de un plan en una sola imagen, con tu marca, lista para subir.' },
                  { t: 'Antes y después de tus clientes', d: 'La transformación montada con sus fotos de progreso, sin sacarlas a otra app.' },
                  { t: 'Informe corporal con sus centímetros', d: 'Un body scan con las medidas reales de un cliente, anónimo y con tu marca.' },
                  { t: 'Banco de testimonios', d: 'Lo que tus clientes responden en los seguimientos, convertido en tarjeta con tu marca. La IA te propone las mejores y tú eliges.' },
                  /* ⚠️ El editor de la tarjeta NO vive en app/(coach)/marketing/
                     sino en components/ShareAnswerCardModal.jsx (1.116 líneas), y
                     se abre también desde la ficha del atleta. Lo busqué solo en
                     la carpeta de marketing, no apareció, y estuve a punto de
                     darlo por maqueta del reel. Verificado: formatos, plantillas,
                     tipografías, estilos de texto, fondo, bordes, fondo de fuera,
                     marco y qué datos salen en la imagen. */
                  { t: 'La tarjeta, a tu gusto', d: 'Diez controles: formato (cuadrado, vertical, story, horizontal o tira), plantilla, tipografía, fondo, bordes, marco y qué datos salen. También se abre desde la ficha del atleta, sin pasar por Marketing.' },
                  { t: 'Se descargan y las subes tú', d: 'TotalGains no publica en tu nombre. Te da la imagen, con fondo transparente si la quieres para montar varias en una story, y la subes donde te interese.' },
            ],
        },
        {
            id: 'negocio',
            accent: '#14b8a6', // billing
            nombre: 'Gestión del negocio',
            railNombre: 'Negocio',
            resumen: 'Lo administrativo, en la misma ficha que el entrenamiento.',
            media: [{
                tipo: 'video', src: '/video/coach-invita-escritorio.mp4',
                poster: '/video/coach-invita-escritorio.webp', pw: 1200, ph: 676,
                w: 1280, h: 720,
                alt: 'Alta de un cliente nuevo desde el panel web del entrenador',
                pie: 'Dar de alta a un atleta desde el ordenador.',
            }],
            /* Bloques visuales: cada grupo de funciones con su imagen o
               vídeo, alternando lado (patrón AimHarder que pidió German el
               15-sep-2026). `items` son ÍNDICES sobre la lista `items` de
               abajo; no se duplica ni reordena ninguna función. */
            bloques: [
                { titulo: 'Cobros y renovaciones', items: [0, 1, 2],
                  /* ⛔ NO VOLVER A PONER AQUÍ /screenshots/suscripcion.webp. Esa captura es la
                     pantalla donde el ENTRENADOR contrata su plan de TotalGains (19,99 €/mes,
                     199 €/año, «Plan seleccionado»), y yo la etiqueté como «lo que ve el atleta
                     cuando le toca renovar». Doble error: no es del atleta, y con precios y un
                     plan marcado parece un checkout dentro de la app. German, 15-sep-2026:
                     «ESTO ES UN FALLO GRAVE, RECUERDA QUE AÚN NO TENEMOS PAGOS IN-APP».
                     Lo que hay es FACTURACIÓN MANUAL: tú registras el pago.
                     Va sin imagen hasta que llegue la captura del panel de Facturación del
                     entrenador (Suscripciones · Historial de pagos · Actividad, con el botón
                     «Registrar Pago» y los filtros de «Falta este mes» / «Por verificar»).
                     Ver feedback_no_marketing_cobros. */
                  media: { tipo: 'imagen', src: '/screenshots/coach-facturacion-1760.webp', w: 1760, h: 892, alt: 'Panel de facturación del entrenador en TotalGains, con el botón Registrar Pago en cada cuota y los filtros de quién falta este mes', pie: 'Facturación del entrenador: tú registras cada pago. El filtro te dice quién falta este mes.' } },
                { titulo: 'Altas, citas y avisos', items: [3, 4, 5, 6, 7, 8, 9, 10],
                  media: { tipo: 'video', src: '/video/coach-invita-escritorio.mp4', poster: '/video/coach-invita-escritorio.webp', pw: 1200, ph: 676, w: 1280, h: 720, alt: 'Alta de un cliente nuevo desde el panel web del entrenador', pie: 'Dar de alta a un atleta desde el panel.' } },
            ],
            items: [
                { t: 'Facturación manual, no pasarela', d: 'Tú registras cada pago cuando lo cobras, y la pantalla te da la previsión del mes, lo vencido sin cobrar, el ticket medio y la comparación con el mes anterior, con las cuotas trimestrales y anuales normalizadas a mensual. TotalGains NO cobra a tus atletas: no hay pasarela ni pago dentro de la app.' },
                { t: 'Historial de pagos y actividad', d: 'Quién hizo qué y cuándo, guardando el antes y el después de cada modificación. Es lo que resuelve un «a mí me dijiste otro precio». Con filtros de quién falta este mes y qué queda por verificar.' },
                { t: 'Recordatorios de renovación', d: 'El atleta recibe el aviso en su app cuando le toca renovar, e insiste si el pago no se registra. Cobras por el canal que ya uses (transferencia, Bizum, TPV o lo que tengas montado por tu cuenta) y lo apuntas aquí.' },
                { t: 'Citas con el atleta', d: 'Propones huecos, el atleta elige y la cita queda en su agenda y en la tuya.' },
                { t: 'Eventos y avisos programados', d: 'Eventos puntuales o recurrentes con notificación al atleta.' },
                { t: 'Migración asistida', d: 'Traemos tus atletas, plantillas y planes desde Trainerize, Harbiz, MyPT Hub o tus propios Excel. Lo hacemos nosotros, en español y sin coste.' },
                  { t: 'Tus clases en grupo', d: 'Clases propias con su horario, públicas, privadas o de grupo cerrado, sin depender de un gimnasio.' },
                  { t: 'Bonos que valen para todo', d: 'Un bono cuenta junto las sesiones uno a uno y las clases en grupo, con la duración que le pongas.' },
                  { t: 'Tu agenda, y que te pidan hueco', d: 'Publicas tus horas con la antelación mínima que quieras, y el atleta puede pedirte una hora libre de tu agenda.' },
                  { t: 'Estadísticas de tu negocio', d: 'Cómo va tu cartera y tus ingresos, sin montarte una hoja de cálculo aparte.' },
                  { t: 'Fichajes si trabajas en un centro', d: 'Fichas entrada y salida, y si las horas no cuadran las corriges dejando el motivo.' },
            ],
        },
        {
            id: 'adherencia',
            accent: '#eab308', // el dorado de los logros
            nombre: 'Lo que engancha al atleta',
            railNombre: 'Adherencia',
            resumen: 'Un atleta que abre la app sola es un atleta que renueva.',
            media: [{
                tipo: 'imagen', src: '/screenshots/perfil-logros.webp',
                w: 600, h: 1339, vertical: true,
                alt: 'Pantalla de logros y racha del atleta en la app de TotalGains',
                pie: 'Logros y racha, en la pantalla del atleta.',
            }],
            /* Bloques visuales: cada grupo de funciones con su imagen o
               vídeo, alternando lado (patrón AimHarder que pidió German el
               15-sep-2026). `items` son ÍNDICES sobre la lista `items` de
               abajo; no se duplica ni reordena ninguna función. */
            bloques: [
                { titulo: 'Que vuelvan solos', items: [0, 1, 2, 3],
                  media: { tipo: 'imagen', src: '/screenshots/perfil-logros.webp', w: 600, h: 1339, alt: 'Pantalla de logros y racha del atleta en la app de TotalGains', pie: 'Logros, medallas y racha en la app del atleta.', vertical: true } },
            ],
            items: [
                { t: 'Logros y medallas', d: 'Sistema de progresión por objetivos cumplidos, con medallas que solo suben de nivel.' },
                { t: 'Compartir el entreno', d: 'El atleta puede compartir su sesión o su récord, con tu marca en la imagen.' },
                { t: 'Comunidad y amigos', d: 'Los atletas pueden verse entre ellos y compararse si tú lo permites.' },
                { t: 'Misiones para el entrenador', d: 'Tu panel te guía con misiones que se completan con tus propios datos, para que no te dejes nada a medias al empezar.' },
            ],
        },
        {
            id: 'ayuda',
            accent: '#06b6d4', // faqs
            nombre: 'Ayuda y puesta en marcha',
            railNombre: 'Ayuda',
            resumen: 'Empezar no puede ser un problema tuyo.',
            media: [{
                tipo: 'video', src: '/video/reel-primeros-pasos.mp4',
                poster: '/video/reel-primeros-pasos.webp', pw: 720, ph: 1280,
                w: 720, h: 1280, vertical: true,
                alt: 'Primeros pasos de un entrenador nuevo en TotalGains',
                pie: 'Los primeros pasos, de la cuenta vacía al primer atleta.',
            }],
            /* Bloques visuales: cada grupo de funciones con su imagen o
               vídeo, alternando lado (patrón AimHarder que pidió German el
               15-sep-2026). `items` son ÍNDICES sobre la lista `items` de
               abajo; no se duplica ni reordena ninguna función. */
            bloques: [
                { titulo: 'Empezar', items: [0, 1, 2, 3, 4, 5, 6],
                  media: { tipo: 'video', src: '/video/reel-primeros-pasos.mp4', poster: '/video/reel-primeros-pasos.webp', pw: 720, ph: 1280, w: 720, h: 1280, vertical: true, alt: 'Primeros pasos en TotalGains', pie: 'Los primeros pasos, en un minuto.' } },
            ],
            items: [
                { t: 'Asistente «¿cómo hago X?»', d: 'Preguntas dentro de la app y te lleva a la pantalla exacta con los pasos.' },
                { t: 'Soporte en español', d: 'Contesta una persona, no un formulario que se pierde.' },
                { t: 'Prueba sin tarjeta', d: 'Plan gratuito permanente hasta 5 atletas, y 14 días de prueba opcional en los planes de pago.' },
                  { t: 'Tus propias preguntas frecuentes', d: 'Montas el centro de ayuda que ven tus atletas con las dudas que te repiten, partiendo de un set base al que añades las tuyas.' },
                  { t: 'Frases guardadas', d: 'Los textos que escribes cien veces quedan etiquetados y se insertan de un toque cuando estás contestando.' },
                  { t: 'Tu biblioteca de recursos', d: 'Tus vídeos y documentos con carpetas, etiquetas y buscador, y te dice quién los ha visto.' },
                  { t: 'Tutoriales para el atleta', d: 'Cómo tomarse las medidas, cómo va el RIR y qué significan los colores del entreno, explicado dentro de su app.' },
            ],
        },
    ],

    faq: [
        {
            q: '¿Hay funciones que se pagan aparte?',
            a: 'No. Dentro del producto para entrenador, todos los planes traen exactamente las mismas funciones, incluido el plan gratuito: app de marca blanca, IA de rutinas y dietas, base de más de 240.000 alimentos, seguimiento, Mi Ciclo y todo lo de esta página. Lo único que cambia entre planes es el número de atletas activos y el nivel de soporte. No hay add-ons, ni módulos bloqueados, ni coste por función.',
        },
        {
            q: '¿El plan gratuito está recortado?',
            a: 'No lo está. El plan gratuito es de 0 euros al mes, permanente, sin tarjeta y sin caducidad, para hasta 5 atletas activos, y lleva las mismas funciones que el plan mayor. No es un periodo de prueba: la prueba de 14 días es opcional y solo aplica a los planes de pago.',
        },
        {
            q: '¿TotalGains cobra a mis atletas automáticamente?',
            a: 'TotalGains gestiona tus cuotas y avisa al atleta en su app cuando le toca renovar, e insiste si no se registra el pago. El cobro efectivo se hace por el canal que ya uses en tu negocio. Es una diferencia importante y preferimos decirla claro antes de que contrates.',
        },
        {
            q: '¿Funciona también para nutricionistas que no programan entreno?',
            a: 'Sí. Puedes trabajar solo la parte de nutrición: generador de dietas, base de alimentos, sustituciones, menús enlazados, seguimiento y app con tu marca. El módulo de entrenamiento está ahí por si algún día lo necesitas, sin pagarlo aparte.',
        },
        {
            q: '¿Qué necesitan mis atletas para usarlo?',
            a: 'Descargar tu app en iOS o Android, o entrar desde el navegador. Ven su plan del día y registran la sesión en dos toques. No necesitan cuenta de pago ni conocimientos previos.',
        },
        {
            q: '¿Puedo traerme lo que ya tengo?',
            a: 'Sí. La migración desde Trainerize, Harbiz, MyPT Hub o tus hojas de cálculo está incluida y la hacemos nosotros en español. Tus plantillas siguen siendo tuyas y la IA puede trabajar sobre ellas.',
        },
    ],
};

export default entrenadores;
