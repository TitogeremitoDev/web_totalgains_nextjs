"use client";

import Link from "next/link";
import { Globe, LayoutTemplate, ArrowRight } from "lucide-react";
import { OFERTA_WEB } from "@/data/ofertaWeb";
import { useOfertaWeb } from "@/components/useOfertaWeb";

/**
 * OfertaWebBlogCard — la oferta de noviembre dentro del artículo de SEO y GEO
 * (marker __web_offer__). Es cliente solo por la fecha: a partir del 30 de
 * noviembre desaparece sola, y el texto del artículo no la nombra, así que no
 * queda nada caducado aunque se tarde en quitar el marker.
 */
const planes = [
  {
    icono: LayoutTemplate,
    nombre: "Starter · 299 €/año",
    texto: "Web de una página con tu logo, tus colores, tus servicios y tu contacto. En tunombre.totalgains.es o en tu dominio.",
  },
  {
    icono: Globe,
    nombre: "Pro · 899 €/año y Unlimited · 1.499 €/año",
    texto: `Web completa (servicios, resultados y contacto) en tu dominio y sin rastro de TotalGains, con alojamiento y ${OFERTA_WEB.cambiosAlMes} cambios pequeños al mes.`,
  },
];

export default function OfertaWebBlogCard() {
  const { activa } = useOfertaWeb();
  if (!activa) return null;

  return (
    <section
      aria-label={`Oferta de noviembre: web incluida al pasarte al plan anual de TotalGains, ${OFERTA_WEB.plazas} plazas hasta el ${OFERTA_WEB.finTexto}`}
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(250,112,154,0.07) 0%, rgba(102,126,234,0.06) 100%)",
        border: "1px solid rgba(250,112,154,0.35)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Tu web, incluida al pasarte al plan anual
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Oferta de noviembre: {OFERTA_WEB.plazas} plazas, hasta el {OFERTA_WEB.finTexto} o hasta que se acaben.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {planes.map(({ icono: Icono, nombre, texto }) => (
          <article key={nombre} style={{ flex: "1 1 300px", minWidth: 0, padding: "16px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(102,126,234,0.25)", borderRadius: 16 }}>
            <p style={{ margin: "0 0 8px", display: "flex", gap: 8, alignItems: "center", fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>
              <Icono size={18} style={{ color: "#667eea", flexShrink: 0 }} aria-hidden="true" />{nombre}
            </p>
            <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{texto}</p>
          </article>
        ))}
      </div>

      <p style={{ margin: "22px 0 0", textAlign: "center" }}>
        <Link href={OFERTA_WEB.ruta} prefetch={false} className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          Ver la oferta <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </p>

      <p style={{ margin: "16px 0 0", textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        La web lleva lo básico de este artículo hecho: textos claros, tus servicios, tu zona y tu contacto, para que Google y las IAs entiendan quién eres. Las reseñas y la ficha de Google siguen siendo cosa tuya.
      </p>
    </section>
  );
}
