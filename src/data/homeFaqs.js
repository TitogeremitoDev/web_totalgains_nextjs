/**
 * FAQ de la home — FUENTE ÚNICA.
 *
 * Antes vivía duplicada a mano en FAQ.jsx (texto visible) y en page.js
 * (FAQPage schema), con avisos de "gemela: si tocas una, toca la otra" que ya
 * habían fallado alguna vez. Ahora ambos importan de aquí: el schema no puede
 * desincronizarse del texto que ve el usuario, que es lo que exige Google.
 *
 * Los datos citados (precios, nº de alimentos, plazos de migración y de
 * conservación) salen de las landings y de la Política de Privacidad — si
 * cambian allí, cambia también aquí.
 */
export const HOME_FAQS = [
    {
        question: '¿El plan gratuito de TotalGains es una prueba o es permanente?',
        answer: 'Es permanente. TotalGains tiene un plan gratuito de 0 €/mes para hasta 5 atletas activos, sin límite de tiempo y sin tarjeta de crédito. No es un periodo de prueba de 14 días: la prueba de 14 días es del plan Pro y es opcional. Los planes de pago empiezan en 29,90 €/mes con IVA incluido.'
    },
    {
        question: '¿Qué es TotalGains y cómo funciona como software para entrenadores personales?',
        answer: 'TotalGains es una plataforma de gestión deportiva todo-en-uno. Centraliza la gestión de atletas, creación de rutinas con IA, planes nutricionales, seguimiento de progreso y recordatorios de renovación al cliente. Funciona en Android, iOS y Web, y cada entrenador obtiene su propia app de fitness personalizada para sus clientes.'
    },
    {
        question: '¿Cuánto cuesta el software de entrenamiento TotalGains?',
        answer: 'Puedes empezar con el Plan Gratuito de TotalGains: hasta 5 atletas de por vida, sin tarjeta y sin caducidad. Es el plan gratuito más generoso del mercado hispano (TrainerStudio ofrece 3, Trainerize Basic solo 1, Harbiz no tiene plan free permanente y cobra 22,99 €/mes con IVA por el mismo tramo de 5 clientes). A partir de ahí, los planes de pago van desde 29,90€/mes (IVA incluido) y todos incluyen exactamente las mismas funciones: IA ilimitada para dietas y rutinas, app marca blanca y base de +240.000 alimentos. Lo único que cambia entre planes es el número de atletas activos (25, 100 o ilimitados) y el nivel de soporte.'
    },
    {
        // Objeción nº1 del coach que YA paga otra herramienta. Datos de la
        // landing /software-entrenador-personal/ (verificados allí).
        question: '¿Puedo migrar a TotalGains desde Excel u otra app como Trainerize o Harbiz?',
        answer: 'Sí. La migración asistida está incluida gratis y en español: nuestro equipo importa tus clientes y la IA transcribe tus rutinas y dietas antiguas en menos de 2 minutos por documento, vengas de Excel, Trainerize, Harbiz o MyPT Hub. Para una cartera de 30-60 clientes el proceso completo suele tardar menos de 5 días, sin que tus atletas pierdan su historial.'
    },
    {
        question: '¿Por qué TotalGains es la mejor alternativa SaaS de fitness del mercado?',
        answer: 'A diferencia de Trainerize, Harbiz o MyPT Hub, TotalGains ofrece soporte nativo en español, una base de más de 240.000 alimentos, creador de rutinas con inteligencia artificial, sistema anti-abandono de clientes y tu propia app de marca blanca — todo sin comisiones ocultas ni penalización por volumen de atletas.'
    },
    {
        question: '¿Puedo crear rutinas de entrenamiento y dietas con la IA de TotalGains?',
        answer: 'Sí. Nuestro creador de rutinas para entrenadores genera periodizaciones completas en segundos. El generador de dietas utiliza una base de +240.000 alimentos validados y ajusta macros y calorías automáticamente según el perfil del atleta.'
    },
    {
        question: '¿Puedo cancelar mi suscripción en cualquier momento?',
        answer: '¡Por supuesto! No hay compromiso de permanencia en nuestra plataforma fitness. Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu perfil, sin penalizaciones.'
    },
    {
        // El miedo al candado es lo último que frena el alta. El plazo de 30
        // días sale de la Política de Privacidad (§7, conservación tras baja).
        question: '¿Qué pasa con mis datos y los de mis clientes si cancelo?',
        answer: 'No hay candado. Al cancelar no se te cobra el siguiente ciclo, y tus datos se conservan 30 días por si decides volver; después se eliminan. Además, en cualquier momento puedes ejercer tus derechos RGPD (acceso, portabilidad o supresión inmediata) escribiendo a soporte@totalgains.es.'
    },
    {
        question: '¿Mis datos y los de mis clientes están seguros en TotalGains?',
        answer: 'Absolutamente. Utilizamos encriptación de nivel bancario, servidores globales con alta disponibilidad y cumplimos con el RGPD europeo. Los datos personales de entrenadores y atletas están completamente protegidos.'
    },
    {
        question: '¿En qué dispositivos puedo usar el software de gestión deportiva?',
        answer: 'TotalGains está disponible en Android (Google Play), iOS (App Store) y como aplicación web accesible desde cualquier navegador. Tus atletas también acceden desde su propia app móvil personalizada con tu marca.'
    },
    {
        question: '¿Cómo contacto con el soporte técnico de TotalGains?',
        answer: 'Puedes contactarnos a través del formulario en esta página, por email a soporte@totalgains.es o desde la app. Los planes Pro y Unlimited tienen soporte prioritario con respuesta en menos de 24 horas.'
    }
];
