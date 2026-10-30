"use client";

import { OFERTA_WEB } from "@/data/ofertaWeb";
import { useOfertaWeb } from "@/components/useOfertaWeb";
import OfertaWebTicket from "@/components/OfertaWebTicket";

/**
 * OfertaWebBlogCard — la oferta de noviembre dentro del artículo de SEO y GEO
 * (marker __web_offer__): el mismo ticket de la portada y de precios, con una
 * línea que lo ata al artículo. Es cliente solo por la fecha: a partir del 30
 * de noviembre desaparece sola, y el texto del artículo no la nombra, así que
 * no queda nada caducado aunque se tarde en quitar el marker.
 */
export default function OfertaWebBlogCard() {
  const { activa } = useOfertaWeb();
  if (!activa) return null;

  return (
    <section
      aria-label={`Oferta de noviembre: web incluida al pasarte al plan anual de TotalGains, ${OFERTA_WEB.plazas} plazas hasta el ${OFERTA_WEB.finTexto}`}
      style={{ maxWidth: 900, margin: "40px auto" }}
    >
      <OfertaWebTicket donde="articulo" />
      <p style={{ margin: "16px 0 0", textAlign: "center", fontSize: "0.84rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        La web lleva lo básico de este artículo hecho: textos claros, tus servicios, tu zona y tu contacto, para que Google y las IAs entiendan quién eres. Las reseñas y la ficha de Google siguen siendo cosa tuya.
      </p>
    </section>
  );
}
