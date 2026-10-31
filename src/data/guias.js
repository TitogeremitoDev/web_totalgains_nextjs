/* Guías en PDF para regalar a cambio del correo (idea 8 del análisis de la web,
   30-oct-2026). Cada una sale de un artículo del blog con
   ~/.cache/tg-analisis-web/guias/guia-pdf.mjs y vive en public/guias/<id>.pdf.
   El servidor tiene el mismo catálogo (TotalGains_Backend/services/
   guiasLeadService.js): si se añade una guía, en los dos sitios. */
export const GUIAS = [
  { id: "cuanto-cobrar", titulo: "Cuánto cobrar como entrenador online", texto: "Tarifas reales en España y cómo calcular la tuya.", slug: "cuanto-cobra-entrenador-personal-online" },
  { id: "conseguir-clientes", titulo: "10 mensajes que te traen clientes", texto: "Qué escribir exactamente (y los 4 que queman el contacto).", slug: "mensajes-para-conseguir-clientes-entrenador" },
  { id: "desgravar", titulo: "Lo que te puedes desgravar", texto: "Gastos deducibles del entrenador autónomo, sin sustos.", slug: "gastos-deducibles-entrenador-personal-autonomo" },
  { id: "black-friday", titulo: "Black Friday: vende enero", texto: "Cómo montar tu oferta sin regalar tu trabajo.", slug: "black-friday-entrenador-personal-oferta-enero" },
  { id: "dieta", titulo: "Tu cliente no sigue la dieta", texto: "Los 5 motivos reales y qué hacer con cada uno.", slug: "cliente-no-sigue-la-dieta-motivos-coach-2026" },
  { id: "suplementos", titulo: "8 suplementos que te van a preguntar", texto: "Qué contestar a cada uno, con la evidencia.", slug: "top-suplementos-evidencia-coach-2026" },
];

// Guarda la petición y manda el correo con las guías y, si abre alguna, 3
// consejos (TotalGains_Backend/routes/guiasRoutes.js).
export const GUIAS_API = "https://api.totalgains.es/api/public/guias/pedir";
