/* ──────────────────────────────────────────────
   Oferta de noviembre de 2026: «Tu web incluida al pasarte al plan anual».

   Todo lo de la oferta lee de aquí: el ticket del héroe de la portada y del
   bloque de precios (OfertaWebTicket), la tarjeta del artículo de SEO y GEO
   (OfertaWebBlogCard) y la página /oferta-web/.

   Pasado `fin` se esconde SOLA en el navegador aunque nadie vuelva a
   publicar la web. Si se acaban las plazas antes, `agotada: true` y publicar.
   Al terminar se quita entera revirtiendo el commit que la añadió (German
   tiene el aviso en su calendario para el 30 de noviembre).
   ────────────────────────────────────────────── */

export const OFERTA_WEB = {
  ruta: "/oferta-web/",
  // Hora peninsular: en noviembre es UTC+1.
  fin: "2026-11-30T23:59:59+01:00",
  finTexto: "30 de noviembre",
  // La calabaza solo el fin de semana de Halloween; después, un regalo.
  halloweenHasta: "2026-11-01T23:59:59+01:00",
  plazas: 10,
  // Cuando alguien reserve, súbelo y publica: los puntos de las plazas se
  // apagan y el texto pasa de «Solo 10 plazas» a «Quedan 7 de 10».
  plazasCogidas: 1,
  agotada: false,
  // Cambios pequeños al mes incluidos en la web de Pro y Unlimited.
  cambiosAlMes: 2,
  // Plazo que da German (30-oct): una semana desde que el entrenador manda
  // todo su material y cómo la quiere.
  entrega: "1 semana",
  email: "soporte@totalgains.es",
  asunto: "Quiero mi web (oferta de noviembre)",
  // WhatsApp de TotalGains (lo dio German el 30-oct para esta oferta).
  whatsapp: "34687065772",
  whatsappVisible: "687 06 57 72",
  articulo: "/blog/seo-geo-entrenador-personal-conseguir-clientes/",
  // Servidor: guarda la reserva y manda el correo de confirmación
  // (TotalGains_Backend/routes/ofertaWebRoutes.js; solo hasta el 30-nov).
  reservaApi: "https://api.totalgains.es/api/public/oferta-web/reserva",
};

export const plazasLibres = () => Math.max(0, OFERTA_WEB.plazas - OFERTA_WEB.plazasCogidas);

// Con las 10 plazas cogidas se cierra aunque no se haya marcado `agotada`.
export const ofertaWebActiva = (ahora = Date.now()) =>
  !OFERTA_WEB.agotada && plazasLibres() > 0 && ahora <= Date.parse(OFERTA_WEB.fin);

export const esFinDeSemanaHalloween = (ahora = Date.now()) =>
  ahora <= Date.parse(OFERTA_WEB.halloweenHasta);

export const textoPlazas = () =>
  OFERTA_WEB.plazasCogidas > 0
    ? `Quedan ${plazasLibres()} de ${OFERTA_WEB.plazas} plazas`
    : `Solo ${OFERTA_WEB.plazas} plazas`;

export const whatsappOfertaWeb = (nombre = "") =>
  `https://wa.me/${OFERTA_WEB.whatsapp}?text=${encodeURIComponent(
    `Hola, quiero mi web con la oferta de noviembre${nombre.trim() ? `. Soy ${nombre.trim()}` : ""}.`
  )}`;

export const mailtoOfertaWeb = () =>
  `mailto:${OFERTA_WEB.email}?subject=${encodeURIComponent(OFERTA_WEB.asunto)}`;
