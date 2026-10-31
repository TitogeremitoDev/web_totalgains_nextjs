"use client";

import { Phone, MessageCircle } from "lucide-react";
import { DemoForm } from "@/components/funnel/FunnelLanding";
import { whatsappUrl } from "@/data/contacto";
import "@/components/funnel/funnel.css";
import "./TeLlamamosGimnasio.css";

/* «Te llamamos» de /para-gimnasios/. Antes el único botón de la página era
   un mailto, que en muchos móviles no abre nada. Usa el mismo formulario que
   /demo/gimnasios/ (EmailJS → soporte@, y a /gracias/?de=demo-gimnasio). */
const DATOS = { perfil: "gimnasio", isDemo: true, textoBoton: "Que me llamen" };

export default function TeLlamamosGimnasio() {
  return (
    <section id="te-llamamos" className="tlg" aria-labelledby="tlg-titulo">
      <div className="container tlg-caja">
        <div className="tlg-texto">
          <span className="tlg-icono"><Phone size={22} aria-hidden="true" /></span>
          <h2 id="tlg-titulo">¿Hablamos? Te llamamos</h2>
          <p>Déjanos tus datos y te enseñamos TotalGains con los números de tu centro: socios, clases y bonos. Sin compromiso.</p>
          <a
            href={whatsappUrl("Hola, tengo un gimnasio y quiero ver TotalGains.")}
            target="_blank"
            rel="noopener"
            className="tlg-wa"
          >
            <MessageCircle size={17} aria-hidden="true" /> O escríbenos por WhatsApp
          </a>
        </div>
        <div className="tlg-form">
          <DemoForm data={DATOS} />
        </div>
      </div>
    </section>
  );
}
