/* Contacto de TotalGains para toda la web. El WhatsApp es el que dio German el
   30-oct-2026 (el mismo de la oferta de noviembre, que vive aparte en
   ofertaWeb.js porque se quita el 1-dic). */
export const WHATSAPP = "34687065772";
export const WHATSAPP_VISIBLE = "687 06 57 72";

/* El mismo número como teléfono de la empresa en los datos para Google y las
   IAs (schema Organization) y en /contacto/. German, 31-oct-2026: «el teléfono sí». */
export const TELEFONO = "+34 687 06 57 72";

export const whatsappUrl = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
