"use client";

import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import { textoPlazas } from "@/data/ofertaWeb";
import { useOfertaWeb } from "@/components/useOfertaWeb";

/* Barra fija «Reservar mi plaza» solo en móvil. En el móvil la página son
   ~15 pantallas y el formulario está en la 11: entre el héroe y el final no
   había ningún botón para reservar. Sale cuando el titular deja de verse y se
   va cuando el formulario entra en pantalla (ahí ya no hace falta). Pasada la
   oferta o sin plazas no pinta nada (useOfertaWeb). */
export default function OfertaWebBarraMovil() {
  const { activa } = useOfertaWeb();
  const [heroFuera, setHeroFuera] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const titular = document.getElementById("ow-h1");
    const form = document.getElementById("reservar");
    if (!titular || !form) return;
    const obsTitular = new IntersectionObserver(([e]) => setHeroFuera(!e.isIntersecting), { rootMargin: "-60px 0px 0px 0px" });
    const obsForm = new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), { threshold: 0.05 });
    obsTitular.observe(titular);
    obsForm.observe(form);
    return () => { obsTitular.disconnect(); obsForm.disconnect(); };
  }, []);

  if (!activa) return null;
  const visible = heroFuera && !formVisible;

  return (
    <div className={`owm-barra${visible ? " es-visible" : ""}`} aria-hidden={!visible}>
      <a
        href="#reservar"
        className="owm-btn"
        tabIndex={visible ? 0 : -1}
        onClick={() => trackEvent("cta_click", { cta_text: "oferta_web_reservar", cta_location: "oferta_web_barra_movil" })}
      >
        <Send size={18} aria-hidden="true" />
        <span className="owm-texto">
          <strong>Reservar mi plaza</strong>
          <small>{textoPlazas()} · tu web incluida</small>
        </span>
      </a>
    </div>
  );
}
