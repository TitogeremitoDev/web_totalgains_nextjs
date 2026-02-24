// Complete screen definitions with hotspots for interactive navigation
export const screens = {
  // ============ AUTH ============
  login: {
    id: "login",
    title: "Iniciar Sesión",
    subtitle: "Accede a tu cuenta",
    image: "/screenshots/LOGIN.png",
    description:
      "Inicia sesión con tu email o con Google para acceder a todas las funcionalidades de TotalGains.",
    category: "auth",
    hotspots: [
      // Botón de login (centrado abajo)
      {
        id: "login_btn",
        top: "57%",
        left: "10%",
        width: "80%",
        height: "15%",
        target: "home",
        label: "Iniciar Sesión",
      },
    ],
  },

  // ============ CLIENTE - HOME ============
  home: {
    id: "home",
    title: "Dashboard Principal",
    subtitle: "Tu centro de control fitness",
    image: "/screenshots/home.png",
    description:
      "Accede a todas las funciones desde un solo lugar: entrenamientos, nutrición, seguimiento y más.",
    category: "cliente",
    hotspots: [
      // Botón cambiar modo (arriba izquierda)
      {
        id: "h_mode",
        top: "10%",
        left: "4%",
        width: "35%",
        height: "5%",
        target: "home_coach",
        label: "Cambiar Modo",
      },
      // BotónSuscripción (arriba derecha)
      {
        id: "h_suscripcion",
        top: "10%",
        left: "61%",
        width: "35%",
        height: "5%",
        target: "suscripcion",
        label: "Suscripción",
      },
      // Empezar entreno
      {
        id: "h_entreno",
        top: "46%",
        left: "25%",
        width: "50%",
        height: "5%",
        target: "entreno",
        label: "Empezar Entreno",
      },
      // Seguimiento
      {
        id: "h_seguimiento",
        top: "58%",
        left: "25%",
        width: "50%",
        height: "5%",
        target: "seguimiento",
        label: "Seguimiento",
      },
      // Nutrición
      {
        id: "h_nutricion",
        top: "64%",
        left: "25%",
        width: "50%",
        height: "5%",
        target: "nutricion",
        label: "Nutrición",
      },
      // Mis Rutinas
      {
        id: "h_rutinas",
        top: "52%",
        left: "25%",
        width: "50%",
        height: "5%",
        target: "rutinas",
        label: "Mis Rutinas",
      },
      // Perfil botón grande
      {
        id: "h_perfil_btn",
        top: "70%",
        left: "25%",
        width: "50%",
        height: "5%",
        target: "perfil",
        label: "Mi Perfil",
      },
    ],
  },

  // ============ CLIENTE - FUNCIONES ============
  entreno: {
    id: "entreno",
    title: "Entreno del Día",
    subtitle: "Tu rutina actual",
    image: "/screenshots/Entreno.png",
    description:
      "Visualiza y ejecuta tu rutina de entrenamiento con cronómetro, series y repeticiones.",
    category: "cliente",
    hotspots: [
      {
        id: "e_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home",
        label: "VOLVER",
      },
    ],
  },

  rutinas: {
    id: "rutinas",
    title: "Mis Rutinas",
    subtitle: "Gestiona tus entrenamientos",
    image: "/screenshots/Rutinas.png",
    description: "Explora, crea y personaliza tus rutinas de entrenamiento.",
    category: "cliente",
    hotspots: [
      {
        id: "r_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home",
        label: "VOLVER",
      },
    ],
  },

  nutricion: {
    id: "nutricion",
    title: "Nutrición",
    subtitle: "Control de macros",
    image: "/screenshots/Nutricion.png",
    description:
      "Calcula tus calorías diarias y distribución de macronutrientes automáticamente.",
    category: "cliente",
    hotspots: [
      {
        id: "n_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home",
        label: "VOLVER",
      },
    ],
  },

  seguimiento: {
    id: "seguimiento",
    title: "Seguimiento",
    subtitle: "Visualiza tu evolución",
    image: "/screenshots/seguimiento.png",
    description:
      "Gráficos de peso, estado de ánimo y métricas para ver tu progreso real.",
    category: "cliente",
    hotspots: [
      {
        id: "s_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home",
        label: "VOLVER",
      },
    ],
  },

  // ============ CLIENTE - PERFIL ============
  perfil: {
    id: "perfil",
    title: "Mi Perfil",
    subtitle: "Tu información personal",
    image: "/screenshots/Perfil.png",
    description:
      "Gestiona tu perfil, logros, evolución y configuración de la aplicación.",
    category: "cliente",
    hotspots: [
      {
        id: "p_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home",
        label: "VOLVER",
      },
      // Opciones del perfil (grid de botones) - Reordenado según usuario
      // Fila 1: Info Personal | Seguimiento
      {
        id: "p_info",
        top: "25%",
        left: "5%",
        width: "43%",
        height: "14%",
        target: "perfil_info",
        label: "Info Personal",
      },
      {
        id: "p_seguimiento",
        top: "25%",
        left: "52%",
        width: "43%",
        height: "14%",
        target: "perfil_seguimiento",
        label: "Evolución",
      },
      // Fila 2: Evolución | Logros
      {
        id: "p_evolucion",
        top: "42%",
        left: "5%",
        width: "43%",
        height: "14%",
        target: "perfil_evolucion",
        label: "Seguimiento",
      },
      {
        id: "p_logros",
        top: "42%",
        left: "52%",
        width: "43%",
        height: "14%",
        target: "perfil_logros",
        label: "Logros",
      },
      // Fila 3: Amigos | Comunidad
      {
        id: "p_amigos",
        top: "58%",
        left: "5%",
        width: "43%",
        height: "14%",
        target: "perfil_amigos",
        label: "Amigos",
      },
      {
        id: "p_comunidad",
        top: "58%",
        left: "52%",
        width: "43%",
        height: "14%",
        target: "perfil_comunidad",
        label: "Comunidad",
      },
      // Fila 4: Vídeos | Ajustes
      {
        id: "p_videos",
        top: "75%",
        left: "5%",
        width: "43%",
        height: "14%",
        target: "perfil_videos",
        label: "Vídeos",
      },
      {
        id: "p_ajustes",
        top: "75%",
        left: "52%",
        width: "43%",
        height: "14%",
        target: "perfil_ajustes",
        label: "Ajustes",
      },
    ],
  },

  // Subpantallas del perfil
  perfil_info: {
    id: "perfil_info",
    title: "Información Personal",
    subtitle: "Tus datos de perfil",
    image: "/screenshots/perfil-informacionpersonal.png",
    description:
      "Edita tu información personal: nombre, edad, peso objetivo y más.",
    category: "cliente",
    hotspots: [
      {
        id: "pi_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "perfil",
        label: "VOLVER",
      },
    ],
  },

  perfil_logros: {
    id: "perfil_logros",
    title: "Logros",
    subtitle: "Tus medallas",
    image: "/screenshots/perfil-logros.png",
    description:
      "Desbloquea logros completando objetivos y mantén tu racha de entrenamientos.",
    category: "cliente",
    hotspots: [
      {
        id: "pl_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "perfil",
        label: "VOLVER",
      },
    ],
  },

  perfil_evolucion: {
    id: "perfil_evolucion",
    title: "Evolución",
    subtitle: "Tu progreso visual",
    image: "/screenshots/perfil-evolucion.png",
    description:
      "Sube fotos para comparar tu evolución física a lo largo del tiempo.",
    category: "cliente",
    hotspots: [
      {
        id: "pe_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "perfil",
        label: "VOLVER",
      },
    ],
  },

  perfil_seguimiento: {
    id: "perfil_seguimiento",
    title: "Seguimiento",
    subtitle: "Métricas avanzadas",
    image: "/screenshots/perfil-seguimiento.png",
    description:
      "Registra tus medidas corporales y visualiza gráficos detallados.",
    category: "cliente",
    hotspots: [
      {
        id: "ps_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "perfil",
        label: "VOLVER",
      },
    ],
  },

  perfil_videos: {
    id: "perfil_videos",
    title: "Vídeos",
    subtitle: "Tutoriales y guías",
    image: "/screenshots/perfil-videos.png",
    description:
      "Accede a vídeos de ejercicios y tutoriales para mejorar tu técnica.",
    category: "cliente",
    hotspots: [
      {
        id: "pv_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "perfil",
        label: "VOLVER",
      },
    ],
  },

  perfil_comunidad: {
    id: "perfil_comunidad",
    title: "Comunidad",
    subtitle: "Conecta con otros",
    image: "/screenshots/perfil-comunidad.png",
    description: "Únete a la comunidad TotalGains y comparte tu progreso.",
    category: "cliente",
    hotspots: [
      {
        id: "pc_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "perfil",
        label: "VOLVER",
      },
    ],
  },

  perfil_amigos: {
    id: "perfil_amigos",
    title: "Amigos",
    subtitle: "Tu red fitness",
    image: "/screenshots/perfil_amigos.png",
    description:
      "Conecta con amigos, compara progreso y motívate mutuamente.",
    category: "cliente",
    hotspots: [
      {
        id: "pa_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "perfil",
        label: "VOLVER",
      },
    ],
  },

  perfil_ajustes: {
    id: "perfil_ajustes",
    title: "Ajustes",
    subtitle: "Configuración",
    image: "/screenshots/perfil-ajustes.png",
    description: "Personaliza la app: temas, notificaciones y preferencias.",
    category: "cliente",
    hotspots: [
      {
        id: "pa_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "perfil",
        label: "VOLVER",
      },
    ],
  },

  suscripcion: {
    id: "suscripcion",
    title: "Suscripción",
    subtitle: "Planes Premium",
    image: "/screenshots/suscripcion.png",
    description:
      "Elige el plan que mejor se adapte a tus necesidades y objetivos.",
    category: "cliente",
    hotspots: [
      {
        id: "su_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home",
        label: "VOLVER",
      },
    ],
  },

  // ============ COACH - HOME ============
  home_coach: {
    id: "home_coach",
    title: "Panel Coach",
    subtitle: "Gestiona tus clientes",
    image: "/screenshots/home_coach.png",
    description:
      "Panel profesional para entrenadores con gestión de clientes y rutinas personalizadas.",
    category: "coach",
    hotspots: [
      // Botón cambiar a modo cliente (arriba izquierda)
      {
        id: "hc_mode",
        top: "16%",
        left: "72%",
        width: "25%",
        height: "11%",
        borderRadius: "50%",
        target: "home",
        label: "Modo Cliente",
      },
      // Botones del dashboard coach
      {
        id: "hc_clientes",
        top: "53%",
        left: "50%",
        width: "45%",
        height: "14%",
        target: "coach_clientes",
        label: "Mis Clientes",
      },
      {
        id: "hc_rutinas",
        top: "83%",
        left: "50%",
        width: "45%",
        height: "14%",
        target: "coach_rutinas",
        label: "Crear Rutinas",
      },
      {
        id: "hc_nutricion",
        top: "83%",
        left: "4%",
        width: "45%",
        height: "14%",
        target: "coach_nutricion",
        label: "Nutrición",
      },
      {
        id: "hc_seguimiento",
        top: "68%",
        left: "50%",
        width: "45%",
        height: "14%",
        target: "coach_seguimiento",
        label: "Seguimiento",
      },
      {
        id: "hc_evolucion",
        top: "68%",
        left: "4%",
        width: "45%",
        height: "14%",
        target: "coach_evolucion",
        label: "Evolución",
      },
      {
        id: "hc_perfil",
        top: "53%",
        left: "4%",
        width: "45%",
        height: "14%",
        target: "coach_perfil",
        label: "Mi Perfil",
      },
    ],
  },

  // ============ COACH - FUNCIONES ============
  coach_clientes: {
    id: "coach_clientes",
    title: "Mis Clientes",
    subtitle: "Gestión de clientes",
    image: "/screenshots/coach_clientes.png",
    description:
      "Visualiza y gestiona todos tus clientes, asigna rutinas y realiza seguimiento.",
    category: "coach",
    hotspots: [
      {
        id: "cc_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home_coach",
        label: "VOLVER",
      },
      {
        id: "cc_profile",
        top: "5%",
        left: "85%",
        width: "12%",
        height: "5%",
        target: "home",
        label: "Perfil",
      },
    ],
  },

  coach_rutinas: {
    id: "coach_rutinas",
    title: "Crear Rutinas",
    subtitle: "Editor de rutinas",
    image: "/screenshots/coach_rutinas.png",
    description:
      "Crea rutinas personalizadas para tus clientes con ejercicios, series y repeticiones.",
    category: "coach",
    hotspots: [
      {
        id: "cr_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home_coach",
        label: "VOLVER",
      },
      {
        id: "cr_profile",
        top: "5%",
        left: "85%",
        width: "12%",
        height: "5%",
        target: "home",
        label: "Perfil",
      },
    ],
  },

  coach_nutricion: {
    id: "coach_nutricion",
    title: "Nutrición Coach",
    subtitle: "Planes nutricionales",
    image: "/screenshots/coach_nutricion.png",
    description:
      "Diseña planes de alimentación personalizados para cada cliente.",
    category: "coach",
    hotspots: [
      {
        id: "cn_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home_coach",
        label: "VOLVER",
      },
      {
        id: "cn_profile",
        top: "5%",
        left: "85%",
        width: "12%",
        height: "5%",
        target: "home",
        label: "Perfil",
      },
    ],
  },

  coach_seguimiento: {
    id: "coach_seguimiento",
    title: "Seguimiento Coach",
    subtitle: "Métricas de clientes",
    image: "/screenshots/coach_seguimiento.png",
    description:
      "Monitoriza el progreso de tus clientes con gráficos y estadísticas.",
    category: "coach",
    hotspots: [
      {
        id: "cs_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home_coach",
        label: "VOLVER",
      },
      {
        id: "cs_profile",
        top: "5%",
        left: "85%",
        width: "12%",
        height: "5%",
        target: "home",
        label: "Perfil",
      },
    ],
  },

  coach_evolucion: {
    id: "coach_evolucion",
    title: "Evolución Coach",
    subtitle: "Progreso visual",
    image: "/screenshots/coach_evolucion.png",
    description:
      "Compara fotos de evolución de tus clientes a lo largo del tiempo.",
    category: "coach",
    hotspots: [
      {
        id: "ce_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home_coach",
        label: "VOLVER",
      },
      {
        id: "ce_profile",
        top: "5%",
        left: "85%",
        width: "12%",
        height: "5%",
        target: "home",
        label: "Perfil",
      },
    ],
  },

  coach_perfil: {
    id: "coach_perfil",
    title: "Perfil Coach",
    subtitle: "Tu perfil de entrenador",
    image: "/screenshots/coach_perfil.png",
    description:
      "Gestiona tu perfil profesional, certificaciones y configuración.",
    category: "coach",
    hotspots: [
      {
        id: "cp_back",
        top: "5%",
        left: "2%",
        width: "12%",
        height: "5%",
        target: "home_coach",
        label: "VOLVER",
      },
    ],
  },
};