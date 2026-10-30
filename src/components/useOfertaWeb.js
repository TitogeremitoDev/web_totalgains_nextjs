"use client";

import { useSyncExternalStore } from "react";
import { OFERTA_WEB, ofertaWebActiva, esFinDeSemanaHalloween, plazasLibres } from "@/data/ofertaWeb";

/* La fecha solo se sabe en el navegador. En el HTML estático la oferta sale
   puesta (con calabaza), que es lo que toca el día que se publica; al
   hidratar, useSyncExternalStore lee la fecha real y la esconde a partir del
   30-nov (y cambia la calabaza por un regalo desde el 2-nov) sin avisos de
   hidratación. Mismo patrón que el scroll de Navbar.
   Se vuelve a mirar cada 5 s para que a las 23:59:59 del 30-nov se cierre
   también con la página abierta (React solo repinta si cambia el valor). */
const suscribirCada5s = (avisar) => {
  const id = setInterval(avisar, 5000);
  return () => clearInterval(id);
};
// Sin fecha, lo único que se sabe al compilar es si se marcó agotada.
const activaEnServidor = () => !OFERTA_WEB.agotada && plazasLibres() > 0;
const conCalabaza = () => true;

export function useOfertaWeb() {
  const activa = useSyncExternalStore(suscribirCada5s, ofertaWebActiva, activaEnServidor);
  const halloween = useSyncExternalStore(suscribirCada5s, esFinDeSemanaHalloween, conCalabaza);
  return { activa, halloween };
}

/* Cuenta atrás hasta el final de la oferta. En el servidor no hay hora
   (null): se pinta con guiones y al hidratar empieza a contar. Cada segundo
   es un número nuevo, así que la instantánea es estable dentro del segundo. */
const suscribirSegundo = (avisar) => {
  const id = setInterval(avisar, 1000);
  return () => clearInterval(id);
};
const segundoActual = () => Math.floor(Date.now() / 1000);
const sinHora = () => null;
const finEnSegundos = Math.floor(Date.parse(OFERTA_WEB.fin) / 1000);

export function useCuentaAtras() {
  const ahora = useSyncExternalStore(suscribirSegundo, segundoActual, sinHora);
  if (ahora === null) return null;
  const resto = Math.max(0, finEnSegundos - ahora);
  return {
    dias: Math.floor(resto / 86400),
    horas: Math.floor((resto % 86400) / 3600),
    minutos: Math.floor((resto % 3600) / 60),
    segundos: resto % 60,
  };
}
