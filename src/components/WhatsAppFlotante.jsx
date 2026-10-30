"use client";

import { usePathname } from "next/navigation";
import { trackEvent } from "@/components/Analytics";
import { whatsappUrl } from "@/data/contacto";
import "./WhatsAppFlotante.css";

/* Botón de WhatsApp en toda la web («¿Dudas?»). El mensaje sale escrito con
   la página desde la que escribe, para saber de qué habla sin preguntarle.
   En móvil va más arriba para no pisar los botones fijos de abajo (StickyCTA
   y la barra de la oferta). */
export default function WhatsAppFlotante() {
  const ruta = usePathname() || "/";
  const texto = `Hola, tengo una duda sobre TotalGains (vengo de totalgains.es${ruta}).`;
  return (
    <a
      href={whatsappUrl(texto)}
      target="_blank"
      rel="noopener"
      className="wa-flotante"
      aria-label="Escríbenos por WhatsApp (se abre en otra pestaña)"
      onClick={() => trackEvent("cta_click", { cta_text: "whatsapp_flotante", cta_location: ruta })}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path fill="currentColor" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.9-3.9-1.9-6 0-5.9 4.9-10.7 11-10.7s11 4.8 11 10.7-4.9 10.9-10.9 10.9zm6-8c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.7-1.6-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6l-1.1-2.6c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 2-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4z" />
      </svg>
      <span className="wa-flotante-texto">¿Dudas? Escríbenos</span>
    </a>
  );
}
