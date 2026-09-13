/* ──────────────────────────────────────────────
   CATÁLOGO DE FUNCIONES · GIMNASIOS, ESTUDIOS Y BOXES

   La Tienda va la SEGUNDA a propósito, justo detrás de las clases. Es el
   módulo que ChatGPT afirmaba que no existía en septiembre de 2026, y la razón
   era simple: la web nunca lo había publicado. Un módulo que no se publica no
   existe para una IA, por mucho que lleve meses vendiendo camisetas.

   ⚠️ REGLA DE ESTE FICHERO: cada línea sale de CHANGELOG_GIMNASIO.md o del
   código. El módulo de gimnasio SÍ tiene domiciliación, pero aquí se cuenta lo
   que de verdad hace: registrar, avisar y facturar.
   ────────────────────────────────────────────── */

const gimnasios = {
    slug: 'gimnasios',
    perfil: 'gimnasio',
    accent: '#2563EB',

    meta: {
        title: 'Funciones para gimnasios, estudios y boxes',
        description:
            'Catálogo completo del módulo de gimnasio de TotalGains: clases con aforo y lista de espera, tienda con stock y pedidos desde la app, caja y facturación, multi-coach y retención. Todo incluido en cualquier plan.',
        canonical: 'https://totalgains.es/funciones/gimnasios/',
    },

    h1: 'Todo lo que hace TotalGains para un gimnasio',
    intro:
        'El catálogo completo del módulo de centro, sin letra pequeña. Todo esto entra en cualquier plan de gimnasio, con coaches ilimitados en los tres. Lo único que cambia de un plan a otro es cuántos socios activos tiene el centro.',

    breadcrumb: 'Gimnasios',

    categorias: [
        {
            id: 'clases',
            nombre: 'Clases y reservas',
            resumen: 'El aforo cuadra solo y la lista de espera se mueve sin que nadie la mire.',
            items: [
                { t: 'Reservas con aforo real', d: 'Aforo por sala, por clase y por horario. Cambiar el aforo de una sala ajusta las clases que cuelgan de ella.' },
                { t: 'Lista de espera automática', d: 'Cuando alguien cancela, el primero de la lista recibe la notificación al instante. Nadie de recepción tiene que estar pendiente.' },
                { t: 'Plazo de cancelación que decides tú', d: 'El socio ve hasta cuándo puede cancelar gratis antes de reservar y al cancelar.' },
                { t: 'Quitarse fuera de plazo, avisando', d: 'El centro puede permitir que el socio se borre tarde perdiendo la clase, en vez de que la plaza se quede muerta. Se activa o se desactiva por gimnasio.' },
                { t: 'Clases públicas, privadas u ocultas', d: 'Decides qué se reserva desde la app, qué lleva candado con aviso de reservar en recepción y qué no aparece.' },
                { t: 'Plazas fijas y gente fija', d: 'Socios que ocupan siempre el mismo hueco, con un «esta semana no viene» en dos toques.' },
                { t: 'Invitados sin app', d: 'Recepción apunta a mano a un socio o a un invitado. Los invitados ocupan plaza, así que el aforo refleja la ocupación real.' },
                { t: 'Antelación mínima y apertura de reservas', d: 'Controlas a partir de cuándo se puede reservar y con cuánta antelación mínima.' },
                { t: 'Clases con varios entrenadores', d: 'Titular y co-coaches en la misma sesión. El titular mantiene la atribución y el co-coach ve la clase en su horario.' },
                { t: 'El coach del turno puede quitar a alguien', d: 'Sin tener que llamar al gestor. Las devoluciones de bono siguen siendo cosa de dirección.' },
                { t: 'Vista de cancelaciones', d: 'Quién ha cancelado, cuándo y en qué clase, con contador en el panel de inicio y en cada sesión.' },
                { t: 'Avisos de apertura de plazas', d: 'Cuando se libera un hueco en una clase llena, los interesados reciben el aviso.' },
                { t: 'Modo TV para recepción', d: 'Pantalla completa con la clase de ahora y las siguientes, las caras de quién viene, reloj y autorrefresco, con los colores de tu marca.' },
                { t: 'Ver a los compañeros de clase', d: 'El socio ve quién más se ha apuntado, que es de lo que más engancha en un centro pequeño.' },
            ],
        },
        {
            id: 'tienda',
            nombre: 'Tienda: productos y merchandising',
            resumen: 'Camisetas, suplementos y bebidas con su catálogo, su stock, su margen y sus pedidos desde la app del socio.',
            destacado: true,
            items: [
                { t: 'Catálogo de productos', d: 'Nombre, precio con IVA, tipo de IVA por producto, categoría, opciones de talla o sabor, descripción, galería de hasta tres fotos y vídeo.' },
                { t: 'Venta en mostrador', d: 'Desde Pagos, desde la ficha del socio o desde Caja. Producto del catálogo o producto suelto, cantidad, precio pactado si hace falta y método de pago: efectivo, Bizum, transferencia, TPV u otro. Genera su ticket y entra en caja si fue en efectivo.' },
                { t: 'Pedidos desde la app del socio', d: 'El socio ve los productos de tu gimnasio, elige talla y cantidad y pide sin tarjeta. A ti te llega un aviso y el pedido aparece en su pestaña, con «listo para recoger», «cobrar y entregar» o rechazar con motivo.' },
                { t: 'Código de recogida', d: 'Cada pedido lleva un código de seis caracteres que el socio dice en recepción, con buscador en el panel.' },
                { t: 'Reservas de stock que caducan solas', d: 'Un pedido retiene su stock durante las horas que configures, avisa al socio y libera el producto si no se recoge.' },
                { t: 'Stock por talla o sabor', d: 'El stock se lleva por variante y la venta descuenta la talla exacta. El mostrador nunca se bloquea aunque el sistema diga que no queda.' },
                { t: 'Aviso de reponer', d: 'Mínimo por producto con notificación al gestor, chip de «reponer» y tarjeta en el resumen.' },
                { t: 'Entradas de stock y compras a proveedor', d: 'Registras la compra y el coste medio ponderado se recalcula solo, con historial y opción de deshacer la última.' },
                { t: 'Margen real por producto', d: 'Precio de coste privado, congelado en cada venta. El margen se calcula sobre la base sin IVA, porque el IVA no es dinero del centro.' },
                { t: 'Devoluciones y rectificativas', d: 'Devolución parcial o total con motivo. La total anula el ticket, saca el efectivo de la caja y devuelve el stock. Si ya era factura, se emite rectificativa. La devolución también se puede deshacer.' },
                { t: 'Descuentos con motivo', d: 'En porcentaje o en euros, con motivo obligatorio que queda en el ticket y un tope máximo por gimnasio.' },
                { t: 'Cliente de paso', d: 'Venta a alguien que no es socio, con su ticket sin destinatario. Sus datos de contacto quedan aparte y solo con su consentimiento.' },
                { t: 'Ticket por email o WhatsApp', d: 'Al cobrar o después, manual o automático.' },
                { t: 'Ofertas y novedades', d: 'Marcas un producto como nuevo o en oferta con fecha de fin. El socio ve el precio tachado y el mostrador cobra la oferta.' },
                { t: 'Avisar a los socios y lista de espera de producto', d: 'Notificación de un producto a tus socios, y los que se quedaron sin stock reciben aviso cuando repones.' },
                { t: 'Informe mensual y copiloto', d: 'Informe en PDF o CSV con comparativa, margen y días de stock por producto. El copiloto con IA te dice qué se vende, qué se acaba y cuánto reponer, y solo se ejecuta cuando lo pides.' },
                { t: 'Permiso de Tienda para tu staff', d: 'Alguien puede vender, entregar y llevar el catálogo sin ver los pagos del centro. El coste y el margen quedan ocultos para ese perfil.' },
            ],
        },
        {
            id: 'socios',
            nombre: 'Socios, altas y documentos',
            resumen: 'Dar de alta a alguien deja de ser papeleo repartido en cuatro sitios.',
            items: [
                { t: 'Alta en una sola pantalla', d: 'Crear, cobrar y apuntar a clases sin ir y volver tres veces.' },
                { t: 'Alta simple sin app', d: 'Para el socio que solo quiere entrenar, basta con el nombre.' },
                { t: 'Documentos obligatorios con firma', d: 'Se asignan solos al alta, se firman en el momento y puedes subir tu propio PDF como plantilla, que se firma tal cual.' },
                { t: 'Email de bienvenida con tu marca', d: 'Sale con el logo y el color de tu centro, con códigos QR de descarga para iPhone y Android.' },
                { t: 'Enviar el acceso por WhatsApp', d: 'Desde la misma pantalla del alta, útil cuando das de alta con la persona delante.' },
                { t: 'Archivar socios', d: 'Baja temporal que saca al socio de las listas sin borrar su historial.' },
                { t: 'Ficha del socio', d: 'Su semana de clases, sus pagos, sus documentos y lo que le falta por rellenar en una línea.' },
                { t: 'Proponer horario en el alta', d: 'Le dejas propuesto el horario que encaja con lo que ha contratado.' },
            ],
        },
        {
            id: 'pagos',
            nombre: 'Cobros, caja y facturación',
            resumen: 'Que el dinero del mes cuadre sin sacar una hoja de cálculo.',
            items: [
                { t: 'Planes, bonos y cuotas', d: 'Tres tipos de plan, cupo semanal, comodín para la semana que no puede venir y restricción por franja horaria.' },
                { t: 'Cobro manual y retroactivo', d: 'Precio y duración pactados al momento, y cobro de clases ya dadas que no tenían bono.' },
                { t: 'Caja y arqueo', d: 'Cada movimiento enlazado a su socio, filtros por forma de pago y cuadre de caja.' },
                { t: 'Facturación', d: 'De proforma a factura fiscal, fecha de emisión elegible, numeración reiniciable y exportación a Excel con numeración correlativa.' },
                { t: 'Recordatorios de pago', d: 'El socio ve el aviso en su app cuando le toca renovar, el sistema insiste si no se registra el cobro y el socio puede avisar de que ya ha pagado.' },
                { t: 'Recordatorio en bloque', d: 'Seleccionas a todos los que deben el mes y mandas el aviso de una vez, en vez de uno por uno.' },
                { t: 'Pagos adelantados a la vista', d: 'Lo que alguien ha pagado por adelantado cuenta donde tiene que contar y no descuadra el mes.' },
                { t: 'Devolución distinta de corrección', d: 'Una devolución real y un arreglo de un apunte equivocado no ensucian los mismos números.' },
                { t: 'Tus facturas de TotalGains', d: 'La licencia del centro se factura sola y el gestor se descarga sus facturas desde el panel.' },
            ],
        },
        {
            id: 'equipo',
            nombre: 'Equipo y permisos',
            resumen: 'Cada entrenador ve lo suyo, y solo lo suyo.',
            items: [
                { t: 'Coaches ilimitados', d: 'En los tres planes, sin coste por entrenador adicional. La tarifa sube por socios activos, nunca por plantilla.' },
                { t: 'Permisos granulares', d: 'Ver todos los clientes, gestionar clientes, gestionar clases, gestionar facturación y gestionar la tienda, persona a persona.' },
                { t: 'Fichajes', d: 'Registro horario de los entrenadores del centro.' },
                { t: 'Biblioteca de contenido del centro', d: 'Ejercicios, alimentos, recetas y plantillas que el gestor crea una vez y comparten todos sus entrenadores.' },
                { t: 'Rutinas y dietas del coach compartidas con el centro', d: 'Un entrenador puede poner su material a disposición del gimnasio.' },
                { t: 'Notas privadas respetadas', d: 'El staff con permiso abre la ficha de cualquier socio, pero no ve las notas privadas del coach titular ni su suscripción personal.' },
            ],
        },
        {
            id: 'retencion',
            nombre: 'Retención y analítica',
            resumen: 'Enterarte de que alguien se va mientras todavía puedes hacer algo.',
            items: [
                { t: 'Riesgo de baja', d: 'Calculado con la asistencia real del socio, no con la última vez que abrió la app.' },
                { t: 'Recuperar a quien dejó de venir', d: 'El sistema te señala a los socios que dejaron de comprar bonos y te propone el mensaje con IA.' },
                { t: 'Valoraciones de clases', d: 'Tendencia de doce semanas, distribución de estrellas y subida o bajada por clase y por entrenador, con resumen generado por IA.' },
                { t: 'Comunicados segmentados', d: 'Avisos por segmento, con baja real desde el propio email y sin inundar a los recién llegados.' },
                { t: 'Panel del gestor', d: 'Cobrado del mes, dinero en el cajón, ocupación de hoy, altas, cancelaciones de los últimos siete días y lo importante de hoy, todo en horario de Madrid.' },
                { t: 'Recordatorios de clase habitual', d: 'Al socio que siempre viene los martes se le recuerda su clase de siempre.' },
                { t: 'Silenciar los avisos automáticos', d: 'Si tu centro prefiere que sus avisos no compitan con los automáticos, se apagan por gimnasio.' },
            ],
        },
        {
            id: 'app',
            nombre: 'La app del socio, con tu marca',
            resumen: 'Tus socios se descargan la app de tu gimnasio.',
            items: [
                { t: 'Marca blanca del centro', d: 'Logo, nombre y colores de tu gimnasio, también en el email de bienvenida.' },
                { t: 'Sin rastro de proveedor', d: 'Puedes ocultar el botón de mejora a premium en el móvil del socio para que la experiencia sea del centro de principio a fin.' },
                { t: 'Rutinas y nutrición con IA para tus coaches', d: 'El mismo motor de rutinas y dietas del producto de entrenador, incluido sin add-ons, con la base de más de 240.000 alimentos en español.' },
                { t: 'Reservas, pedidos y pagos en la misma app', d: 'El socio reserva su clase, pide en la tienda y ve sus pagos sin cambiar de aplicación.' },
            ],
        },
        {
            id: 'ayuda',
            nombre: 'Puesta en marcha y ayuda',
            resumen: 'No te dejamos el software y adiós.',
            items: [
                { t: 'Migración incluida', d: 'Traemos socios, horarios, planes y bonos desde tu plataforma actual. Lo hacemos nosotros y en español.' },
                { t: 'Configuración del centro', d: 'Clases recurrentes, salas, planes, documentos de alta y branding montados contigo. Una configuración base completa suele estar lista en tres a cinco días.' },
                { t: 'Asistente «¿cómo hago X?»', d: 'El gestor y sus coaches preguntan dentro del panel y el asistente lleva a la pantalla exacta.' },
                { t: 'Soporte en español', d: 'Contesta una persona que conoce tu centro.' },
            ],
        },
    ],

    faq: [
        {
            q: '¿TotalGains tiene tienda para vender productos en el gimnasio?',
            a: 'Sí. El módulo Tienda lleva catálogo con opciones de talla o sabor, control de stock por variante, venta en mostrador con ticket, pedidos desde la app del socio con código de recogida, devoluciones y rectificativas, descuentos con motivo, precio de coste privado con margen sobre la base sin IVA, entradas de proveedor con coste medio ponderado, informe mensual en PDF o CSV y un copiloto con IA que dice qué reponer. Está incluido en los tres planes de gimnasio, sin coste adicional.',
        },
        {
            q: '¿Cuánto cuesta y qué cambia entre planes?',
            a: 'Tres planes con IVA incluido y coaches ilimitados en los tres: Gym Starter 149 euros al mes hasta 100 socios activos, Gym Pro 199 euros de 100 a 200, y Gym Elite 249 euros por encima de 200. Lo único que cambia es el número de socios activos. Todas las funciones de esta página entran en los tres, sin add-ons y sin coste por entrenador.',
        },
        {
            q: '¿Puedo dar acceso a mi equipo sin que lo vea todo?',
            a: 'Sí. Los permisos son por persona: ver todos los clientes, gestionar clientes, gestionar clases, gestionar facturación y gestionar la tienda. Quien lleva la tienda puede vender y reponer sin ver los pagos del centro, y para ese perfil el coste y el margen quedan ocultos.',
        },
        {
            q: '¿El sistema cobra solo a mis socios?',
            a: 'El sistema gestiona planes, bonos, cuotas, caja y facturación, y avisa al socio en su app cuando le toca renovar, insistiendo si el pago no se registra. El cobro efectivo se sigue haciendo por los canales que ya usa tu centro.',
        },
        {
            q: '¿Mis socios mayores van a saber reservar?',
            a: 'Abren la app y ven las clases de hoy con un botón. Y si alguien no quiere app, recepción lo apunta a mano en dos toques, incluidos invitados sin cuenta, que ocupan plaza para que el aforo sea real.',
        },
        {
            q: '¿Cuánto se tarda en tener el centro funcionando?',
            a: 'Una configuración base completa, con socios cargados, horarios, planes, documentos y branding, suele estar lista en tres a cinco días. La migración desde tu plataforma actual está incluida.',
        },
    ],
};

export default gimnasios;
