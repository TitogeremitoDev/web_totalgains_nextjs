"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import { OFERTA_WEB } from "@/data/ofertaWeb";
import { useOfertaWeb } from "@/components/useOfertaWeb";

/**
 * Franja de la oferta de noviembre en el bloque de precios (solo «Soy
 * entrenador»): calabaza el fin de semana de Halloween, regalo después y nada
 * a partir del 30 de noviembre (ver useOfertaWeb).
 */
export default function OfertaWebBanner() {
  const { activa, halloween } = useOfertaWeb();
  if (!activa) return null;

  return (
    <Link
      href={OFERTA_WEB.ruta}
      prefetch={false}
      onClick={() => trackEvent("cta_click", { cta_text: "oferta_web", cta_location: "pricing_banner" })}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "8px 14px",
        maxWidth: 820, margin: "0 auto 28px", padding: "14px 20px",
        borderRadius: 16, textDecoration: "none", textAlign: "center",
        background: "linear-gradient(135deg, rgba(250,112,154,0.14) 0%, rgba(102,126,234,0.16) 100%)",
        border: "1px solid rgba(250,112,154,0.45)",
        color: "var(--text-primary,#fff)",
      }}
    >
      <span style={{ fontSize: "1.35rem", lineHeight: 1 }} aria-hidden="true">{halloween ? "🎃" : "🎁"}</span>
      <span style={{ fontSize: "0.98rem", lineHeight: 1.45 }}>
        <strong>Una oferta que da miedo… a tu competencia:</strong>{" "}
        tu web incluida al pasarte al plan anual.{" "}
        <span style={{ color: "var(--text-secondary,#b8b8d1)" }}>
          {OFERTA_WEB.plazas} plazas, hasta el {OFERTA_WEB.finTexto}.
        </span>
      </span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 700, color: "#fa709a", whiteSpace: "nowrap" }}>
        Ver la oferta <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}
