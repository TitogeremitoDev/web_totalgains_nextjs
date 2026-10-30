"use client";

import Link from "next/link";
import { Send, Sparkles } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import { OFERTA_WEB } from "@/data/ofertaWeb";
import { useOfertaWeb } from "@/components/useOfertaWeb";

/* Botones del héroe de la oferta: bajan al formulario de reserva y a «Pon tu
   nombre y mira tu web». Pasado el 30 de noviembre (o con la oferta agotada)
   cambian solos a «terminó» + precios, por si alguien llega con un enlace
   viejo antes de que se quite la página (también lo usa OfertaWebReserva). */
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
        href="#reservar"
        className="ow-btn ow-btn--fuego"
        onClick={() => trackEvent("cta_click", { cta_text: "oferta_web_reservar", cta_location: "oferta_web_heroe" })}
      >
        <Send size={19} aria-hidden="true" /> Reservar mi plaza
      </a>
      <a
        href="#prueba"
        className="ow-btn ow-btn--cristal"
        onClick={() => trackEvent("cta_click", { cta_text: "oferta_web_probar", cta_location: "oferta_web_heroe" })}
      >
        <Sparkles size={19} aria-hidden="true" /> Mira cómo quedaría la tuya
      </a>
    </div>
  );
}
