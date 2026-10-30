"use client";

import { useSyncExternalStore } from "react";
import { ofertaWebActiva, esFinDeSemanaHalloween } from "@/data/ofertaWeb";

/* La fecha solo se sabe en el navegador. En el HTML estático la oferta sale
   puesta (con calabaza), que es lo que toca el día que se publica; al
   hidratar, useSyncExternalStore lee la fecha real y la esconde a partir del
   30-nov (y cambia la calabaza por un regalo desde el 2-nov) sin avisos de
   hidratación. Mismo patrón que el scroll de Navbar. */
const sinSuscripcion = () => () => {};
const enServidor = () => true;

export function useOfertaWeb() {
  const activa = useSyncExternalStore(sinSuscripcion, ofertaWebActiva, enServidor);
  const halloween = useSyncExternalStore(sinSuscripcion, esFinDeSemanaHalloween, enServidor);
  return { activa, halloween };
}
