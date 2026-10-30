"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import { OFERTA_WEB, textoPlazas } from "@/data/ofertaWeb";
import { useOfertaWeb } from "@/components/useOfertaWeb";
import { IconoOferta, CuentaAtras, Plazas } from "@/components/OfertaWebPiezas";

/**
 * OfertaWebTicket — el «ofertón» de noviembre: icono de temporada, titular,
 * plazas, cuenta atrás y botón, con un borde de luz que gira. Mismo ticket en
 * el héroe de la portada (`donde="portada"`), en el bloque de precios
 * (`"precios"`) y en el artículo de SEO y GEO, antes del título
 * (`"articulo-arriba"`) y a mitad del texto (`"articulo"`). A partir del 30
 * de noviembre no pinta nada (useOfertaWeb).
 *
 * Color y subrayado van en línea: dentro del artículo `.post-body a` pinta
 * todos los enlaces de morado y subrayados, y el ticket entero es un enlace.
 */
export default function OfertaWebTicket({ donde }) {
  const { activa } = useOfertaWeb();
  if (!activa) return null;

  return (
    <Link
      href={OFERTA_WEB.ruta}
      prefetch={false}
      className={`owt owt--${donde}`}
      style={{ color: "#fff", textDecoration: "none" }}
      aria-label={`Una oferta que da miedo a tu competencia: tu web incluida al pasarte al plan anual. ${textoPlazas()}, hasta el ${OFERTA_WEB.finTexto}. Ver la oferta`}
      onClick={() => trackEvent("cta_click", { cta_text: "oferta_web", cta_location: `oferta_ticket_${donde}` })}
    >
      <span className="owt-icono">
        <IconoOferta />
      </span>
      <span className="owt-texto">
        <span className="owt-kicker">
          Oferta de noviembre<span className="owt-kicker-fin"> · hasta el {OFERTA_WEB.finTexto}</span>
        </span>
        <span className="owt-titulo">
          Una oferta que da miedo… <span className="ow-degradado">a tu competencia</span>
        </span>
        <span className="owt-sub">
          Pásate al plan anual y <strong>tu web va incluida</strong>.
        </span>
        <Plazas />
      </span>
      <CuentaAtras />
      <span className="owt-cta">
        Ver la oferta <ArrowRight size={18} aria-hidden="true" />
      </span>
    </Link>
  );
}
