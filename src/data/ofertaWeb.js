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
  plazasCogidas: 0,
  agotada: false,
  // Cambios pequeños al mes incluidos en la web de Pro y Unlimited.
  cambiosAlMes: 2,
  email: "soporte@totalgains.es",
  asunto: "Quiero mi web (oferta de noviembre)",
  articulo: "/blog/seo-geo-entrenador-personal-conseguir-clientes/",
};

export const ofertaWebActiva = (ahora = Date.now()) =>
  !OFERTA_WEB.agotada && ahora <= Date.parse(OFERTA_WEB.fin);

export const esFinDeSemanaHalloween = (ahora = Date.now()) =>
  ahora <= Date.parse(OFERTA_WEB.halloweenHasta);

export const plazasLibres = () => Math.max(0, OFERTA_WEB.plazas - OFERTA_WEB.plazasCogidas);

export const textoPlazas = () =>
  OFERTA_WEB.plazasCogidas > 0
    ? `Quedan ${plazasLibres()} de ${OFERTA_WEB.plazas} plazas`
    : `Solo ${OFERTA_WEB.plazas} plazas`;

export const mailtoOfertaWeb = () =>
  `mailto:${OFERTA_WEB.email}?subject=${encodeURIComponent(OFERTA_WEB.asunto)}`;
