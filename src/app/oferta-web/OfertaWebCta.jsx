"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import { OFERTA_WEB, mailtoOfertaWeb } from "@/data/ofertaWeb";
import { useOfertaWeb } from "@/components/useOfertaWeb";

/* Botones de la página de la oferta. Pasado el 30 de noviembre (o con la
   oferta agotada) cambian solos a «terminó» + precios, por si alguien llega
   con un enlace viejo antes de que se quite la página. */
export default function OfertaWebCta() {
  const { activa } = useOfertaWeb();

  if (!activa) {
    return (
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: 20 }}>
          {OFERTA_WEB.agotada
            ? "Las plazas de esta oferta ya están cubiertas. ¡Gracias a quienes se apuntaron!"
            : `Esta oferta terminó el ${OFERTA_WEB.finTexto}. ¡Gracias a quienes se apuntaron!`}
        </p>
        <Link href="/precios/" className="btn btn-primary btn-lg" prefetch={false}>
          Ver los planes
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
      <a
        href={mailtoOfertaWeb()}
        className="btn btn-primary btn-lg"
        style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
        onClick={() => trackEvent("cta_click", { cta_text: "oferta_web_reservar", cta_location: "oferta_web" })}
      >
        <Mail size={18} aria-hidden="true" /> Reservar mi plaza
      </a>
      <Link
        href="/precios/"
        className="btn btn-secondary btn-lg"
        prefetch={false}
        onClick={() => trackEvent("cta_click", { cta_text: "oferta_web_planes", cta_location: "oferta_web" })}
      >
        Ver los planes anuales
      </Link>
    </div>
  );
}
