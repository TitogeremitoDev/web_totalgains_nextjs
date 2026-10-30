"use client";

import { OFERTA_WEB, plazasLibres, textoPlazas } from "@/data/ofertaWeb";
import { useOfertaWeb, useCuentaAtras } from "@/components/useOfertaWeb";
import "./ofertaWeb.css";

/* Piezas de la oferta de noviembre que dependen de la fecha (por eso son de
   cliente): el icono de temporada, la cuenta atrás y las plazas. Las usan el
   ticket (portada, precios y artículo) y la página /oferta-web/. */

/* Lo que solo tiene sentido con la oferta abierta (plazas, «Se acaba en»…):
   desde la página de servidor se envuelve aquí y se esconde solo al acabar. */
export function SoloConOferta({ children }) {
  const { activa } = useOfertaWeb();
  return activa ? children : null;
}

export function IconoOferta() {
  const { halloween } = useOfertaWeb();
  return <span aria-hidden="true">{halloween ? "🎃" : "🎁"}</span>;
}

const PARTES = [
  ["dias", "días"],
  ["horas", "horas"],
  ["minutos", "min"],
  ["segundos", "seg"],
];

export function CuentaAtras({ tam = "peque" }) {
  const { activa } = useOfertaWeb();
  const t = useCuentaAtras();
  if (!activa) return null;

  return (
    <span className={`owc owc--${tam}`} role="timer" aria-label={`La oferta acaba el ${OFERTA_WEB.finTexto} a las 23:59`}>
      {PARTES.map(([clave, etiqueta]) => (
        <span key={clave} className="owc-caja" aria-hidden="true">
          <span className="owc-num">{t ? String(t[clave]).padStart(2, "0") : "--"}</span>
          <span className="owc-lbl">{etiqueta}</span>
        </span>
      ))}
    </span>
  );
}

export function Plazas({ tam = "peque" }) {
  const { activa } = useOfertaWeb();
  if (!activa) return null;
  const libres = plazasLibres();

  return (
    <span className={`owp owp--${tam}`}>
      <span className="owp-puntos" aria-hidden="true">
        {Array.from({ length: OFERTA_WEB.plazas }, (_, i) => (
          <span key={i} className={`owp-punto${i < libres ? " is-libre" : ""}`} />
        ))}
      </span>
      <span className="owp-texto">{textoPlazas()}</span>
    </span>
  );
}
