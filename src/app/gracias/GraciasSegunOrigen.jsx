"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

/* Una sola URL de «gracias» (es el objetivo de destino de GA4), con el
   contenido que toque según de dónde viene el lead. Hoy solo cambia para la
   reserva de la oferta de noviembre (?de=oferta-web): ahí el siguiente paso no
   es «empieza gratis» sino «esto es lo que pasa con tu plaza».
   La reserva llega con router.push, así que en la práctica no se ve el
   genérico ni un instante; con recarga dura sale un momento el genérico. */
function Elegir({ porOrigen, children }) {
  const de = useSearchParams().get("de");
  return porOrigen[de] ?? children;
}

export default function GraciasSegunOrigen({ porOrigen, children }) {
  return (
    <Suspense fallback={children}>
      <Elegir porOrigen={porOrigen}>{children}</Elegir>
    </Suspense>
  );
}
