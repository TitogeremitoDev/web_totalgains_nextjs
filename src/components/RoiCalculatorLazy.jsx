"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

/* La calculadora de rentabilidad solo se enseña en pantallas de ordenador
   (.hide-on-mobile la esconde por debajo de 769px), pero antes se descargaba
   y montaba también en el móvil, donde no la ve nadie: 429 líneas de código
   para nada en el teléfono. Ahora solo se pide si la pantalla es ancha
   (revisión de la web 21-nov, mejora 5EC6).

   El hueco de 400px se mantiene igual que antes mientras carga, para que la
   página no salte. */
const RoiCalculator = dynamic(() => import("@/components/RoiCalculator"), {
  ssr: false,
  loading: () => <div style={{ height: "400px" }} />,
});

const PANTALLA_ANCHA = "(min-width: 769px)";
const suscribir = (aviso) => {
  const mq = window.matchMedia(PANTALLA_ANCHA);
  mq.addEventListener("change", aviso);
  return () => mq.removeEventListener("change", aviso);
};
const leer = () => window.matchMedia(PANTALLA_ANCHA).matches;
const leerEnServidor = () => false;

export default function RoiCalculatorLazy() {
  const ancha = useSyncExternalStore(suscribir, leer, leerEnServidor);
  return ancha ? <RoiCalculator /> : <div style={{ height: "400px" }} />;
}
