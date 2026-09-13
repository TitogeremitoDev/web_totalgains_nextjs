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
    intro:
        'El catálogo completo, sin letra pequeña. Todas estas funciones entran en cualquier plan de entrenador, incluido el gratuito de 5 atletas. Lo único que cambia de un plan a otro es cuántos atletas activos puedes llevar.',

    breadcrumb: 'Entrenadores',

    categorias: [
        {
            id: 'rutinas',
            nombre: 'Rutinas y entrenamiento',
            resumen: 'Del papel en blanco a la periodización completa, sin salir de tu metodología.',
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
            ],
        },
        {
            id: 'nutricion',
            nombre: 'Nutrición',
            resumen: 'Dietas que se montan en minutos y se adaptan sin rehacerlas enteras.',
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
            ],
        },
        {
            id: 'seguimiento',
            nombre: 'Seguimiento y comunicación',
            resumen: 'Saber cómo va cada atleta sin perseguir a nadie por WhatsApp.',
            items: [
                { t: 'Check-in diario y semanal', d: 'El atleta registra su día y su semana desde la app, con recordatorios en su franja horaria.' },
                { t: 'Fotos de progreso', d: 'Comparativa de antes y después, y el atleta puede marcar fotos como privadas si no quiere compartirlas.' },
                { t: 'Medidas corporales con guía', d: 'Cada medida explica dónde y cómo se toma, para que los números de una semana y otra sean comparables.' },
                { t: 'Formularios personalizados', d: 'Diseñas tus propios cuestionarios de seguimiento y los asignas a quien quieras.' },
                { t: 'Vídeo-feedback con anotaciones', d: 'El atleta sube su serie y tú dibujas encima del vídeo, en el instante exacto, y contestas con audio que se transcribe solo.' },
                { t: 'Audios transcritos a texto', d: 'Las notas de voz del atleta llegan escritas, así que se leen en diez segundos en vez de escucharlas enteras.' },
                { t: 'Gráficas de evolución y récords', d: 'Progreso por ejercicio, marcas personales detectadas solas y métricas de carga alta sin mezclar sesiones no comparables.' },
                { t: 'Chat integrado', d: 'Las conversaciones viven junto a la ficha del atleta, con contador de mensajes sin leer.' },
            ],
        },
        {
            id: 'retencion',
            nombre: 'Retención y avisos',
            resumen: 'La plataforma te levanta la mano antes de que un atleta se caiga.',
            items: [
                { t: 'Centro de alertas', d: 'Detecta dolor o lesión en notas de entreno, formularios y comentarios del semanal, además de baja motivación, racha rota y atletas que llevan días sin subir nada.' },
                { t: 'Chat urgente detectado por IA', d: 'Cuando un mensaje pide atención inmediata se abre el caso y llega un aviso, con un borrador de respuesta listo para editar.' },
                { t: 'Riesgo de abandono por atleta', d: 'Una puntuación sobre su actividad real de las últimas semanas, no sobre la última vez que abrió la app.' },
                { t: 'Cumpleaños y aniversarios', d: 'El aviso llega el día que toca por su propio canal, separado de las alertas de problemas.' },
                { t: 'Racha de entreno', d: 'Con margen real, para que un imprevisto no la rompa. Visible para el atleta y para ti en la lista de clientes.' },
                { t: 'Avisos masivos', d: 'Mandas una notificación a toda tu cartera o a un segmento cuando lo necesitas.' },
            ],
        },
        {
            id: 'ciclo',
            nombre: 'Mi Ciclo',
            resumen: 'Ninguna otra plataforma de gestión para entrenadores lleva esto dentro.',
            items: [
                { t: 'Fases del ciclo en el entreno y la nutrición', d: 'No es un calendario aparte: la fase condiciona la planificación dentro de la misma app.' },
                { t: 'Registro de síntomas con IA', d: 'La atleta lo escribe con sus palabras y el sistema marca los síntomas, sin rellenar casillas.' },
                { t: 'Autoexamen de mamas con recordatorio mensual', d: 'Un aviso al mes y la pauta delante, dentro de la misma app que ya usa.' },
                { t: 'Patrones a revisar con su médico', d: 'La atleta puede exportar un informe en PDF para llevarlo a consulta. TotalGains no diagnostica ni es un método anticonceptivo.' },
                { t: 'Privacidad por capas', d: 'La atleta elige categoría por categoría qué comparte contigo. El diario, la vida sexual y el autoexamen no salen nunca de su móvil.' },
            ],
        },
        {
            id: 'marca',
            nombre: 'Tu app y tu marca',
            resumen: 'Tus atletas se descargan tu app, no la nuestra.',
            items: [
                { t: 'App de marca blanca en iOS y Android', d: 'Con tu logo, tu nombre y tus colores. Incluida en todos los planes, también en el gratuito, y sin coste adicional.' },
                { t: 'Panel web del entrenador', d: 'Todo el trabajo de escritorio desde el navegador, sin instalar nada.' },
                { t: 'Branding generado con IA', d: 'Genera la paleta y la identidad de tu app en un clic si no tienes manual de marca.' },
                { t: 'Marcos y personalización', d: 'Marcos desbloqueables para tu logo y tu avatar, que tus atletas ven en su pantalla de inicio.' },
            ],
        },
        {
            id: 'negocio',
            nombre: 'Gestión del negocio',
            resumen: 'Lo administrativo, en la misma ficha que el entrenamiento.',
            items: [
                { t: 'Gestión de pagos', d: 'Cuotas por atleta, previsión del mes, vencidos sin cobrar, ticket medio y comparación con el mes anterior, con las trimestrales y anuales normalizadas a mensual.' },
                { t: 'Historial de cobros', d: 'Quién hizo qué y cuándo, guardando el antes y el después de cada modificación. Es lo que resuelve un «a mí me dijiste otro precio».' },
                { t: 'Recordatorios de renovación', d: 'El atleta recibe el aviso en su app cuando le toca renovar. El cobro se hace por el canal que ya uses: transferencia, Bizum, TPV o la pasarela que tengas montada.' },
                { t: 'Citas con el atleta', d: 'Propones huecos, el atleta elige y la cita queda en su agenda y en la tuya.' },
                { t: 'Eventos y avisos programados', d: 'Eventos puntuales o recurrentes con notificación al atleta.' },
                { t: 'Migración asistida', d: 'Traemos tus atletas, plantillas y planes desde Trainerize, Harbiz, MyPT Hub o tus propios Excel. Lo hacemos nosotros, en español y sin coste.' },
            ],
        },
        {
            id: 'adherencia',
            nombre: 'Lo que engancha al atleta',
            resumen: 'Un atleta que abre la app sola es un atleta que renueva.',
            items: [
                { t: 'Logros y medallas', d: 'Sistema de progresión por objetivos cumplidos, con medallas que solo suben de nivel.' },
                { t: 'Compartir el entreno', d: 'El atleta puede compartir su sesión o su récord, con tu marca en la imagen.' },
                { t: 'Comunidad y amigos', d: 'Los atletas pueden verse entre ellos y compararse si tú lo permites.' },
                { t: 'Misiones para el entrenador', d: 'Tu panel te guía con misiones que se completan con tus propios datos, para que no te dejes nada a medias al empezar.' },
            ],
        },
        {
            id: 'ayuda',
            nombre: 'Ayuda y puesta en marcha',
            resumen: 'Empezar no puede ser un problema tuyo.',
            items: [
                { t: 'Asistente «¿cómo hago X?»', d: 'Preguntas dentro de la app y te lleva a la pantalla exacta con los pasos.' },
                { t: 'Soporte en español', d: 'Contesta una persona, no un formulario que se pierde.' },
                { t: 'Prueba sin tarjeta', d: 'Plan gratuito permanente hasta 5 atletas, y 14 días de prueba opcional en los planes de pago.' },
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
