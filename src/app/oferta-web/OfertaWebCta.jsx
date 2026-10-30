"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import { OFERTA_WEB, mailtoOfertaWeb } from "@/data/ofertaWeb";
import { useOfertaWeb } from "@/components/useOfertaWeb";

/* Botones de la página de la oferta (héroe y cierre). Pasado el 30 de
   noviembre (o con la oferta agotada) cambian solos a «terminó» + precios,
   por si alguien llega con un enlace viejo antes de que se quite la página. */
export default function OfertaWebCta() {
  const { activa } = useOfertaWeb();

  if (!activa) {
    return (
      <div className="ow-cta ow-cta--fin">
        <p>
          {OFERTA_WEB.agotada
            ? "Las plazas de esta oferta ya están cubiertas. ¡Gracias a quienes se apuntaron!"
            : `Esta oferta terminó el ${OFERTA_WEB.finTexto}. ¡Gracias a quienes se apuntaron!`}
        </p>
        <Link href="/precios/" className="ow-btn ow-btn--cristal" prefetch={false}>
          Ver los planes
        </Link>
      </div>
    );
  }

  return (
    <div className="ow-cta">
      <a
        href={mailtoOfertaWeb()}
        className="ow-btn ow-btn--fuego"
        onClick={() => trackEvent("cta_click", { cta_text: "oferta_web_reservar", cta_location: "oferta_web" })}
      >
        <Mail size={20} aria-hidden="true" /> Reservar mi plaza
      </a>
      <Link
        href="/precios/"
        className="ow-btn ow-btn--cristal"
        prefetch={false}
        onClick={() => trackEvent("cta_click", { cta_text: "oferta_web_planes", cta_location: "oferta_web" })}
      >
        Ver los planes anuales <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </div>
  );
}
