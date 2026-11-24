/* Las 6 preguntas frecuentes de /para-gimnasios/. Una sola copia: la usan la
   sección visible (ParaGimnasiosContent) y el FAQPage de los datos
   estructurados (app/para-gimnasios/page.js). Antes eran dos copias a mano
   que podían dejar de coincidir (revisión de la web 21-nov, mejora C450). */
export const PARA_GIMNASIOS_FAQS = [
  {
    q: "¿TotalGains soporta clases grupales con reserva y lista de espera?",
    a: "Sí. El módulo de clases grupales permite definir aforo, horario semanal recurrente, monitor asignado y lista de espera automática cuando la clase se llena. Cuando alguien cancela, el sistema avisa al primero de la waitlist por notificación push.",
  },
  {
    q: "¿Cuántos coaches puedo añadir al gimnasio en cada plan?",
    a: "Todos los planes Gym incluyen coaches ilimitados sin coste adicional por entrenador. La tarifa solo escala por número de socios activos: Gym Starter (menos de 100 socios) 149 €/mes con IVA, Gym Pro (100-200 socios) 199 €/mes con IVA, Gym Elite (más de 200 socios) 249 €/mes con IVA. No hay tarifa por entrenador adicional en ningún plan.",
  },
  {
    q: "¿Puedo dar permisos diferentes a cada coach del gimnasio?",
    a: "Sí. Los permisos son granulares: 4 booleanos por coach (ver todos los clientes, gestionar facturación, gestionar clases, gestionar clientes). La dirección configura el rol de cada miembro del equipo.",
  },
  {
    q: "¿Cuánto tarda en implementarse TotalGains en un gimnasio?",
    a: "Una configuración base completa (carga de socios, plantillas de rutinas, programación de clases recurrentes, planes y cuotas, branding de la app) suele estar lista en 3-5 días. La migración de datos desde Harbiz, Virtuagym u otra plataforma está incluida y la gestiona soporte en español. Para gimnasios con más de 100 socios o estructura compleja, los planes Gym Pro y Gym Elite incluyen onboarding asistido prioritario que reduce el tiempo a 48-72 horas.",
  },
  {
    q: "¿Incluye marca blanca para el gimnasio o solo para entrenadores individuales?",
    a: "La marca blanca aplica al gimnasio completo. La app que descargan tus socios tiene el logo, nombre y colores del gimnasio. No es la marca del entrenador individual sino la del centro.",
  },
  {
    q: "¿Cuánto cuesta TotalGains para un gimnasio pequeño?",
    a: "TotalGains Gym tiene 3 planes según número de socios activos, todo IVA incluido: Gym Starter (hasta 100 socios) 149 €/mes, Gym Pro (100-200 socios) 199 €/mes y Gym Elite (más de 200 socios) 249 €/mes. Todos los planes incluyen coaches ilimitados, multi-coach con permisos granulares, clases con reserva y waitlist, app marca blanca del gimnasio, IA de rutinas y nutrición y migración asistida en español. Sin permanencia, sin coste por entrenador adicional, sin add-ons separados.",
  },
  {
    q: "¿Cuánto cuesta de verdad un software para gimnasio pequeño?",
    a: "Con TotalGains, lo que ves es lo que pagas: 149, 199 o 249 € al mes con IVA según tus socios activos, con entrenadores ilimitados y todo incluido. Muchos programas anuncian desde 29 o 34 € al mes, pero sin IVA (un 21 % más) y con la app con la marca del centro, la facturación o las rutinas como módulos de pago. De los 13 programas que revisamos en sus webs oficiales el 24 de noviembre de 2026, ninguno publica su precio con IVA. Comparativa completa en https://totalgains.es/blog/cuanto-cuesta-software-gimnasio-2026/",
  },
  {
    q: "¿Cobráis por entrenador o por módulos?",
    a: "No. Los entrenadores son ilimitados en los tres planes y no hay módulos aparte: reservas, cuotas y facturación, tienda, app con la marca del centro y rutinas y dietas con IA van incluidas. En otros programas, el número de entrenadores depende del plan (TIMP: 1, 3, 10 o 15 profesionales; Gestión Gym: 1, 5 o ilimitados) o se paga por empleado (Trainin: 5 € al mes desde el tercero), según sus webs oficiales a 24 de noviembre de 2026.",
  },
  {
    q: "¿Incluye la facturación y la parte de entrenamiento?",
    a: "Sí, las dos y en todos los planes. Las cuotas y los bonos se registran y se facturan solos, y las ventas de la tienda salen con su ticket. La parte de entrenamiento también va incluida: rutinas y dietas con IA a partir de la biblioteca del centro, seguimiento de cada socio y una app donde el socio reserva sus clases y ve su rutina. En otros programas son módulos de pago (GestionaTuBox: facturación y rutinas, 15 € al mes cada una; Trainin: entrenamiento, 24 €) o no aparecen en su web (la parte de entrenamiento en Gestión Gym, Mindbody o Bsport).",
  },
];
