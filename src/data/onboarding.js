/* Recorrido de «Empieza gratis» (/onboarding/). German, 28-nov-2026: «¿podemos hacer el onboarding más interesante?».
   Antes: 3 preguntas solo para entrenadores cuyas respuestas no se usaban. Ahora se adapta a quien entra:
   gimnasio o box (primero), entrenador, nutricionista o «entreno por mi cuenta». Cada respuesta sirve para algo:
   el tamaño elige el plan (con los precios de planesCoach.js y productSchema.js, que son los de /precios/),
   lo que más tiempo le quita enseña cómo lo resuelve TotalGains con una captura real, y «¿cómo nos has conocido?»
   empieza a medir de dónde viene la gente (evento de GA4; la app todavía no guarda el origen).
   ⛔ Todo lo que se dice aquí está comprobado: si cambia una función, cambia su texto. */

import { PLANES_COACH, euros } from "@/data/planesCoach";
import { PLANES_GYM } from "@/data/productSchema";

export const PERFILES = [
    { id: "gimnasio", titulo: "Tengo un gimnasio, box o estudio", texto: "Clases, cuotas y la app de tu centro", icono: "gimnasio" },
    { id: "entrenador", titulo: "Soy entrenador personal", texto: "Rutinas, dietas y seguimiento de tus clientes", icono: "entrenador" },
    { id: "nutricionista", titulo: "Soy nutricionista", texto: "Dietas y seguimiento de tus pacientes", icono: "nutricionista" },
    { id: "atleta", titulo: "Entreno por mi cuenta", texto: "Tu rutina, tu RM y cómo progresas", icono: "atleta" },
];

export const esProfesional = (perfil) => perfil === "entrenador" || perfil === "nutricionista";

export function tamano(perfil) {
    if (perfil === "gimnasio") {
        return {
            pregunta: "¿Cuántos socios activos tenéis?",
            ayuda: "Con esto te decimos qué plan os toca.",
            opciones: [
                { id: "hasta-100", texto: "Menos de 100", plan: "gym-starter" },
                { id: "100-200", texto: "De 100 a 200", plan: "gym-pro" },
                { id: "mas-200", texto: "Más de 200", plan: "gym-elite" },
            ],
        };
    }
    const quien = perfil === "nutricionista" ? "pacientes" : "clientes";
    return {
        pregunta: `¿Cuántos ${quien} llevas ahora?`,
        ayuda: "Sea cual sea tu caso, empiezas gratis.",
        opciones: [
            { id: "hasta-5", texto: "Hasta 5", plan: "gratis" },
            { id: "6-25", texto: "De 6 a 25", plan: "starter" },
            { id: "26-100", texto: "De 26 a 100", plan: "pro" },
            { id: "mas-100", texto: "Más de 100", plan: "unlimited" },
        ],
    };
}

/* Lo que más tiempo le quita → cómo lo resuelve TotalGains, con una captura real de la app. */
export function dolores(perfil) {
    if (perfil === "gimnasio") {
        return [
            {
                id: "reservas",
                texto: "Las reservas de clases y la lista de espera",
                titulo: "Reservas con aforo y lista de espera",
                detalle: "Tus socios reservan su plaza desde la app y, si se libera una, entra el primero de la lista de espera.",
                img: "/images/gym/app-socio-reservas.webp",
                ancho: 640,
                alto: 1385,
                movil: true,
            },
            {
                id: "cuotas",
                texto: "Cobrar las cuotas y los bonos",
                titulo: "Cuotas y bonos desde la app",
                detalle: "El socio ve lo que le toca renovar y paga con «Pagar ahora»; queda como una venta más, con su ticket.",
                img: "/images/gym/app-socio-pagos.webp",
                ancho: 640,
                alto: 1385,
                movil: true,
            },
            {
                id: "avisos",
                texto: "Avisar a los socios de horarios y cambios",
                titulo: "Avisos dentro de la app de tu centro",
                detalle: "Horarios, cambios y clases nuevas aparecen en la app de tus socios, sin depender del grupo de WhatsApp.",
                img: "/images/gym/app-socio-avisos.webp",
                ancho: 640,
                alto: 1385,
                movil: true,
            },
            {
                id: "marca",
                texto: "Tener una app con nuestra marca",
                titulo: "La app con la marca de tu centro",
                detalle: "Tus socios entran en una app con tu logo y tus colores: reservas, rutinas, nutrición y seguimiento.",
                img: "/images/gym/app-socio-portada-vital.webp",
                ancho: 640,
                alto: 1385,
                movil: true,
            },
        ];
    }
    return [
        {
            id: "rutinas",
            texto: "Hacer las rutinas",
            titulo: "Rutinas en un minuto",
            detalle: "El asistente te la monta por días (Full Body, Torso/Pierna, Push-Pull-Legs…) y tú ajustas series, descansos y RIR. Tu cliente la sigue serie a serie en la app.",
            img: "/images/onboarding/coach-rutina-asistente.webp",
            ancho: 793,
            alto: 546,
            movil: false,
        },
        {
            id: "dietas",
            texto: "Hacer las dietas",
            titulo: "Dietas con IA que revisas tú",
            detalle: "La IA te propone el plan con más de 240.000 alimentos en español; tú lo revisas y decides.",
            img: "/video/coach-primera-dieta.webp",
            ancho: 1200,
            alto: 676,
            movil: false,
        },
        {
            id: "seguimiento",
            texto: "El seguimiento por WhatsApp",
            titulo: "Tu feedback, en menos de 10 minutos",
            detalle: "Montas su informe con todo lo suyo al lado y le llega al chat con «Ver mi feedback»: su gráfica, su figura con los cm que ha cambiado y tu vídeo, en grande.",
            img: "/images/onboarding/app-feedback-cliente.webp",
            ancho: 234,
            alto: 511,
            movil: true,
        },
        {
            id: "cobros",
            texto: "Cobrar a mis clientes",
            titulo: "Cobros dentro de la app",
            detalle: "Tu cliente paga su cuota con un toque y el dinero va directo a tu cuenta.",
            img: "/video/coach-cobros.webp",
            ancho: 1200,
            alto: 675,
            movil: false,
        },
    ];
}

export const ORIGENES = [
    { id: "google", texto: "Buscando en Google" },
    { id: "redes", texto: "Instagram o TikTok" },
    { id: "ia", texto: "ChatGPT, Gemini u otra IA" },
    { id: "recomendacion", texto: "Me lo recomendó alguien" },
    { id: "otro", texto: "De otra forma" },
];

/* Pasos del recorrido según el perfil (el deportista no necesita tamaño ni «qué te quita tiempo»). */
export function pasos(perfil) {
    if (perfil === "atleta") return ["perfil", "origen", "final"];
    return ["perfil", "tamano", "dolor", "origen", "final"];
}

/* Plan que le toca, con su precio real (con IVA). */
export function planDe(perfil, tamanoId) {
    const opcion = perfil ? tamano(perfil).opciones.find((o) => o.id === tamanoId) : null;
    if (!opcion) return null;
    if (perfil === "gimnasio") {
        const g = PLANES_GYM.find((p) => p.id === opcion.plan);
        return g ? { nombre: g.name.replace("TotalGains ", ""), precio: `${g.price} €/mes`, nota: "con IVA", detalle: g.description } : null;
    }
    if (opcion.plan === "gratis") {
        return { nombre: "Gratuito", precio: "0 €", nota: "para siempre", detalle: "Hasta 5 atletas, sin tarjeta y sin caducidad." };
    }
    const c = PLANES_COACH[opcion.plan];
    return c
        ? { nombre: c.nombre, precio: `${euros(c.mes)}/mes`, nota: "con IVA", detalle: c.atletas ? `Hasta ${c.atletas} atletas.` : "Atletas ilimitados." }
        : null;
}

/* ── Lo que se ve a los lados mientras responde: el móvil (la app del socio, cliente o paciente) y el portátil
   (el panel del centro o del entrenador). Cambian al pasar por una respuesta y al elegirla. Capturas reales. ── */
// Proporción de cada pantalla: móvil 184 × 398 y portátil 16:10. Si la captura no encaja (más de un 10 % de diferencia),
// se ve ENTERA sobre su color de borde en vez de recortada (German, 28-nov: «hay imágenes que están cortadas»).
const PROPORCION = { movil: 184 / 398, pc: 16 / 10 };
const P = (src, ancho, alto, alt, fondo = "#f8fafc") => {
    const tipo = alto > ancho ? "movil" : "pc";
    const entera = Math.abs(ancho / alto - PROPORCION[tipo]) / PROPORCION[tipo] > 0.1;
    return { src, ancho, alto, alt, tipo, entera, fondo };
};

export const PANTALLAS = {
    // Al entrar, antes de elegir: la marca TotalGains (German, 28-nov: un gimnasio de primeras despista al entrenador).
    marcaMovil: { marca: true, tipo: "movil", src: "marca-movil", alt: "TotalGains" },
    marcaPc: { marca: true, tipo: "pc", src: "marca-pc", alt: "TotalGains" },
    socioPortadaAtlas: P("/images/gym/app-socio-portada-atlas.webp", 640, 1385, "App de un gimnasio con su marca"),
    socioPortadaVital: P("/images/gym/app-socio-portada-vital.webp", 640, 1385, "App del socio con la marca del gimnasio"),
    socioPortadaCumbre: P("/images/gym/app-socio-portada-cumbre.webp", 640, 1385, "App del socio con la marca del centro"),
    socioReservas: P("/images/gym/app-socio-reservas.webp", 640, 1385, "Reservar clase desde la app del socio"),
    socioPagos: P("/images/gym/app-socio-pagos.webp", 640, 1385, "Renovar la cuota desde la app"),
    socioAvisos: P("/images/gym/app-socio-avisos.webp", 640, 1385, "Avisos del gimnasio en la app"),
    socioDieta: P("/images/gym/app-socio-dieta.webp", 640, 1385, "La dieta en la app"),
    clienteSeguimiento: P("/images/blog/checkin-app-movil-cliente.webp", 780, 1768, "Seguimiento diario en la app del cliente"),
    clienteCuota: P("/images/blog/cuanto-cobra-app-cuota-automatica.webp", 780, 1768, "Cuota automática en la app del cliente"),
    atletaEvolucion: P("/images/blog/calcular-1rm-app-records.webp", 780, 1768, "Evolución de los récords en la app"),
    atletaCarga: P("/images/blog/calcular-1rm-app-carga-alta.webp", 780, 1768, "Evolución de la carga en la app"),
    gymClases: P("/images/gym/clases-w1280.webp", 1280, 638, "Horario de clases del gimnasio", "#fcfdfe"),
    gymPanel: P("/images/gym/dashboard-w1280.webp", 1280, 638, "Panel del gimnasio", "#f1f5f9"),
    gymCobros: P("/images/gym/facturacion.webp", 1600, 798, "Cobros y facturación del gimnasio", "#ffffff"),
    coachRutina: P("/images/blog/calcular-1rm-app-editor.webp", 1440, 900, "Editor de rutinas del entrenador"),
    coachDieta: P("/images/blog/dieta-adherencia-ia-revisar.webp", 1205, 1060, "Revisar la dieta que propone la IA", "#f9fbfc"),
    coachSeguimiento: P("/images/blog/checkin-app-por-revisar.webp", 1440, 1000, "Seguimiento de los clientes por revisar"),
    coachCobros: P("/images/blog/cuanto-cobra-app-cobros.webp", 1440, 900, "Cobros por tarjeta y SEPA"),
    // Recortes de los vídeos tutoriales (public/video), solo la parte de la app: images/onboarding/
    coachMarketing: P("/images/onboarding/coach-marketing-panel.webp", 819, 450, "Marketing: las piezas para tus redes, con tu marca", "#070a11"),
    appInstagram: P("/images/onboarding/app-instagram-menu.webp", 269, 396, "El menú de la semana, listo para Instagram", "#050914"),
    coachReceta: P("/images/onboarding/coach-receta-macros.webp", 746, 529, "Una receta con sus macros en tu biblioteca", "#0d1323"),
    coachMando: P("/images/onboarding/coach-centro-mando.webp", 804, 522, "Ficha del cliente con su centro de mando", "#0b1222"),
    appRecetas: P("/images/onboarding/app-recetas.webp", 720, 992, "Las recetas en la app del cliente", "#050710"),
    gymClientes: P("/images/gym/clientes-w1280.webp", 1280, 638, "Los clientes del gimnasio", "#f1f5f9"),
    coachRutinaAsistente: P("/images/onboarding/coach-rutina-asistente.webp", 793, 546, "El asistente que monta la rutina en un minuto", "#7d8188"),
    appEntreno: P("/images/onboarding/app-entreno-semaforo.webp", 565, 896, "La rutina en la app del cliente, serie a serie", "#09111f"),
    coachFeedback: P("/images/onboarding/coach-feedback-figura.webp", 804, 509, "El informe de feedback con la figura y los cm que ha cambiado", "#0b1220"),
    appFeedback: P("/images/onboarding/app-feedback-cliente.webp", 234, 511, "El feedback del entrenador en la app del cliente", "#edeef1"),
    gymRetencion: P("/images/gym/retencion.webp", 377, 825, "Socios en riesgo en la app del gestor"),
};

/* Bloque de «features» debajo de los dispositivos (German, 28-nov: «en vez de chiquito abajo, en plan features»). */
const RASGOS_PERFIL = {
    inicio: { titulo: "Todo en una app con tu marca", items: ["Gimnasios y boxes: clases, cuotas y la app del socio", "Entrenadores y nutricionistas: rutinas, dietas y seguimiento", "Deportistas: tu entreno, apuntado y medido"] },
    gimnasio: { titulo: "Tu centro, en el bolsillo de cada socio", items: ["Reservas con aforo y lista de espera", "Cuotas y bonos desde la app", "La app con la marca de tu centro"] },
    entrenador: { titulo: "Tus clientes, en una sola app", items: ["Rutinas en minutos", "Dietas con IA que revisas tú", "Seguimiento y cobros dentro de la app"] },
    nutricionista: { titulo: "Tus pacientes, en una sola app", items: ["Dietas con IA que revisas tú", "Recetas con sus macros", "Seguimiento diario y semanal"] },
    atleta: { titulo: "Tu entreno, apuntado y medido", items: ["Tu RM estimado de cada ejercicio", "Tu evolución, semana a semana", "Si tienes entrenador o gimnasio, te vinculas con su código"] },
};

/* «Features» de cada respuesta de «qué te quita tiempo» (mandan sobre las de la etapa mientras están encima o elegidas). */
const RASGOS_DOLOR = {
    reservas: { titulo: "Reservas sin perseguir a nadie", items: ["Reservas con aforo y lista de espera", "Si se libera una plaza, entra el primero de la lista", "El horario de toda la semana en tu panel"] },
    cuotas: { titulo: "Cuotas y bonos desde la app", items: ["El socio renueva con «Pagar ahora»", "Cada pago, una venta con su ticket", "Bonos y cuotas en un solo sitio"] },
    avisos: { titulo: "Avisos en la app de tu centro", items: ["Horarios, cambios y clases nuevas en la app", "Sin depender del grupo de WhatsApp", "Cada socio lo ve en su móvil"] },
    marca: { titulo: "La app con la marca de tu centro", items: ["Tu logo y tus colores en la app del socio", "Reservas, rutinas, nutrición y seguimiento", "Tus socios la ven como la app de tu centro"] },
    rutinas: { titulo: "Tu sistema de rutinas", items: ["El asistente te la monta en un minuto por días", "Tú ajustas series, descansos y RIR", "Tu cliente la sigue serie a serie, con su semáforo"] },
    dietas: { titulo: "Dietas con IA que revisas tú", items: ["La IA propone el plan con más de 240.000 alimentos", "Te avisa de lo que debes revisar antes de guardar", "Tu cliente cambia un plato por otro equivalente"] },
    seguimiento: { titulo: "Feedback en menos de 10 minutos", items: ["Montas su informe con peso, medidas, entrenos y fotos al lado", "Su gráfica, su figura con los cm que ha cambiado y tu vídeo", "Le llega al chat con «Ver mi feedback» y lo ve en grande"] },
    cobros: { titulo: "Cobros dentro de la app", items: ["Tu cliente paga su cuota con un toque", "Cuota automática, si la activas", "El dinero va directo a tu cuenta"] },
};

/* Lo que se ve según el tamaño (German, 28-nov: «con pocos, el de marketing; intermedio, recetas; muchos, la gestión»). */
const VISTA_TAMANO = {
    profesional: {
        "hasta-5": { rasgos: { titulo: "Para conseguir clientes", items: ["Sistema de marketing: 6 piezas para tus redes, con tu marca", "Las opiniones de tus clientes, listas para compartir", "El menú de la semana con tus platos, para Instagram"] }, izq: "appInstagram", der: "coachMarketing", etqDer: "Para conseguir clientes: piezas para tus redes", aviso: "Para empezar: piezas para Instagram, con tu marca" },
        "6-25": { rasgos: { titulo: "Para crecer sin repetir trabajo", items: ["Tus recetas, guardadas y con sus macros", "Modo cocina paso a paso para tus clientes", "Las imágenes que comparten llevan tu logo"] }, izq: "appRecetas", der: "coachReceta", etqDer: "Para crecer sin repetir trabajo: tus recetas", aviso: "Para crecer: tus recetas, guardadas y con sus macros" },
        "26-100": { rasgos: { titulo: "Para llegar a todos", items: ["Los check-in por revisar, en una lista", "Seguimiento diario y semanal en la app", "Cuota automática, si la activas"] }, izq: "clienteCuota", der: "coachSeguimiento", etqDer: "Para llegar a todo: seguimiento y cuota automática", aviso: "Para llegar a todo: los check-in por revisar, en una lista" },
        "mas-100": { rasgos: { titulo: "Para llevar a muchos", items: ["El centro de mando de cada cliente", "Informes con su gráfica y su figura", "La IA da forma a lo que tú eliges"] }, izq: null, der: "coachMando", etqDer: "Para llevar a muchos: cada cliente, de un vistazo", aviso: "Para llevar a muchos: el centro de mando de cada cliente" },
    },
    gimnasio: {
        "hasta-100": { rasgos: { titulo: "Para llenar tus clases", items: ["Reservas con aforo y lista de espera", "El horario de toda la semana", "La app con la marca de tu centro"] }, izq: "socioReservas", der: "gymClases", etqDer: "Para llenar tus clases", aviso: "Para llenar tus clases: reservas con aforo y lista de espera" },
        "100-200": { rasgos: { titulo: "Para cobrar sin perseguir a nadie", items: ["Cuotas y bonos desde la app", "Cada pago, una venta con su ticket", "Caja y facturación en un sitio"] }, izq: "socioPagos", der: "gymCobros", etqDer: "Para cobrar sin perseguir a nadie", aviso: "Para cobrar: cuotas, bonos y caja en un sitio" },
        "mas-200": { rasgos: { titulo: "Para cuidar a tus socios", items: ["Socios en riesgo: quién lleva tiempo sin venir", "Entrenadores ilimitados", "Valoraciones de las clases"] }, izq: "gymRetencion", der: "gymClientes", etqDer: "Para cuidar a los socios en riesgo", aviso: "Para cuidar a tus socios: quién lleva tiempo sin venir" },
    },
};

export function etapaDe(perfil, tamanoId) {
    if (!perfil || perfil === "atleta" || !tamanoId) return null;
    return VISTA_TAMANO[perfil === "gimnasio" ? "gimnasio" : "profesional"][tamanoId] || null;
}

const VISTA_PERFIL = {
    inicio: { izq: "marcaMovil", der: "marcaPc", etqIzq: null, etqDer: null },
    gimnasio: { izq: "socioPortadaVital", der: "gymPanel", etqIzq: "La app de tu socio, con tu marca", etqDer: "El panel de tu centro" },
    entrenador: { izq: "clienteSeguimiento", der: "coachRutina", etqIzq: "La app de tu cliente", etqDer: "Tu panel" },
    nutricionista: { izq: "socioDieta", der: "coachDieta", etqIzq: "La app de tu paciente", etqDer: "Tu panel" },
    atleta: { izq: "atletaEvolucion", der: "atletaCarga", etqIzq: "Tu progreso", etqDer: "Tu carga semana a semana" },
};

const VISTA_DOLOR = {
    reservas: { izq: "socioReservas", der: "gymClases" },
    cuotas: { izq: "socioPagos", der: "gymCobros" },
    avisos: { izq: "socioAvisos", der: "gymPanel" },
    marca: { izq: "socioPortadaCumbre", der: "gymPanel" },
    rutinas: { izq: "appEntreno", der: "coachRutinaAsistente" },
    dietas: { izq: "socioDieta", der: "coachDieta" },
    seguimiento: { izq: "appFeedback", der: "coachFeedback" },
    cobros: { izq: "clienteCuota", der: "coachCobros" },
};

/* Qué se ve a los lados: lo que se tiene el ratón encima manda; si no, lo ya elegido. */
export function vistaDe(r, encima) {
    const perfil = encima?.campo === "perfil" ? encima.valor : r.perfil;
    const base = VISTA_PERFIL[perfil || "inicio"];
    const dolorId = encima?.campo === "dolor" ? encima.valor : r.dolor;
    const d = perfil && perfil !== "atleta" && VISTA_DOLOR[dolorId] ? VISTA_DOLOR[dolorId] : null;
    // El tamaño manda mientras no haya «qué te quita tiempo» encima o elegido; las «features» siguen la etapa.
    const tamanoId = encima?.campo === "tamano" ? encima.valor : encima?.campo === "perfil" ? null : r.tamano;
    const etapa = etapaDe(perfil, tamanoId);
    const e = !d ? etapa : null;
    return {
        izq: PANTALLAS[d ? d.izq : e?.izq || base.izq],
        der: PANTALLAS[d ? d.der : e?.der || base.der],
        rasgos: (d && RASGOS_DOLOR[dolorId]) || etapa?.rasgos || RASGOS_PERFIL[perfil || "inicio"],
    };
}

/* La notificación que salta en el móvil al responder. */
export function avisoDe(campo, valor, r) {
    if (campo === "perfil") {
        return { perfil: valor, texto: { gimnasio: "Tu centro, en el bolsillo de cada socio", entrenador: "Tus clientes, en una sola app", nutricionista: "Tus pacientes, en una sola app", atleta: "Tu entreno, apuntado y medido" }[valor] };
    }
    if (campo === "tamano") {
        const plan = planDe(r.perfil, valor);
        return plan ? { texto: `${plan.nombre} · ${plan.precio}` } : null;
    }
    if (campo === "dolor") {
        const d = dolores(r.perfil).find((x) => x.id === valor);
        return d ? { texto: `${d.titulo}: resuelto` } : null;
    }
    return { texto: "¡Listo! Ya está todo preparado" };
}

/* ── Escenas: lo que aparece según lo que pulsas (German, 28-nov: «que según qué pulses aparezca una cosa u otra»).
   - etiquetas alrededor del móvil al elegir perfil (se encienden con la respuesta que tienes encima);
   - al elegir lo que más tiempo te quita: un dedo pulsa el botón de verdad de la captura (toque, en fracción de la
     imagen) y saltan avisos en el móvil y en el portátil, con datos que salen de las propias capturas;
   - «Tu marca»: la app va cambiando de gimnasio (tres marcas inventadas). ── */
export const ETIQUETAS = {
    gimnasio: [
        { id: "reservas", texto: "Reservas" },
        { id: "cuotas", texto: "Cuotas" },
        { id: "avisos", texto: "Avisos" },
        { id: "marca", texto: "Tu marca" },
    ],
    entrenador: [
        { id: "rutinas", texto: "Rutinas" },
        { id: "dietas", texto: "Dietas con IA" },
        { id: "seguimiento", texto: "Seguimiento" },
        { id: "cobros", texto: "Cobros" },
    ],
    nutricionista: [
        { id: "dietas", texto: "Dietas con IA" },
        { id: "seguimiento", texto: "Seguimiento" },
        { id: "cobros", texto: "Cobros" },
        { id: "rutinas", texto: "Rutinas" },
    ],
    atleta: [
        { id: "rm", texto: "Tu RM" },
        { id: "evolucion", texto: "Evolución" },
        { id: "records", texto: "Récords" },
    ],
};

export const ESCENAS = {
    reservas: {
        toque: { x: 0.812, y: 0.434 },
        momentos: [
            { en: "movil", texto: "Plaza reservada · Funcional, 19:00" },
            { en: "pc", texto: "La clase de las 19:00 suma una reserva" },
        ],
    },
    cuotas: {
        toque: { x: 0.443, y: 0.496 },
        momentos: [
            { en: "movil", texto: "Pago recibido · Cuota mensual, 45,00 €" },
            { en: "pc", texto: "Venta registrada, con su ticket" },
        ],
    },
    avisos: {
        toque: { x: 0.5, y: 0.45 },
        momentos: [
            { en: "pc", texto: "Aviso publicado para tus socios" },
            { en: "movil", texto: "Nueva clase de movilidad los jueves" },
        ],
    },
    marca: {
        carrusel: ["socioPortadaAtlas", "socioPortadaVital", "socioPortadaCumbre"],
        momentos: [{ en: "movil", texto: "Tu logo y tus colores en la app" }],
    },
    rutinas: {
        momentos: [
            { en: "pc", texto: "Rutina «Full Body 3 días» montada en un minuto" },
            { en: "movil", texto: "Tienes una rutina nueva: Full Body 3 días" },
        ],
    },
    dietas: {
        momentos: [
            { en: "pc", texto: "La IA está preparando el plan…", carga: true },
            { en: "pc", texto: "Dieta lista · 2.158 kcal: revísala y guarda" },
            { en: "movil", texto: "Tienes una dieta nueva" },
        ],
    },
    seguimiento: {
        momentos: [
            { en: "pc", texto: "Informe montado: su gráfica, su figura y tu vídeo" },
            { en: "movil", texto: "Tu feedback · semana 9: «Ver mi feedback»" },
        ],
    },
    cobros: {
        toque: { x: 0.499, y: 0.67 },
        momentos: [
            { en: "movil", texto: "Cuota automática activada · 60,00 € al mes" },
            { en: "pc", texto: "Cobro programado para cada mes" },
        ],
    },
};
