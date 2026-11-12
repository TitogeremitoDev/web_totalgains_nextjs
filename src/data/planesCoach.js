// Una sola fuente para las tarjetas de planes de las páginas de aterrizaje.
// Dice lo mismo que /precios/ (components/Pricing.jsx): TODOS los planes del
// entrenador llevan las mismas funciones; entre planes solo cambian el número
// de atletas y el soporte.
//
// Por qué existe (12-nov-2026): cada página tenía su lista escrita a mano, sin
// el plan gratuito, y la tarjeta de Pro ponía «App marca blanca incluida» y
// «Publicación en App Store» como si fueran extras de ese plan. Al preguntar a
// Gemini, contestaba que la app con tu marca iba «desde planes intermedios» y
// que los cobros eran «un registro manual». Por eso cada tarjeta repite las
// dos cosas, aunque sea redundante: es lo que leen las personas y las IA.
export const EN_TODOS_LOS_PLANES = ["App con tu marca incluida", "Cobros dentro de la app"];

export const NOTA_PLANES =
  "La app con tu marca y los cobros dentro de la app van en todos los planes, también en el gratuito. Entre planes solo cambian el número de atletas y el soporte.";

/** @param {string} quien «clientes», «pacientes»… como los llame la página. */
export function planesResumen(quien = "clientes") {
  const Quien = quien.charAt(0).toUpperCase() + quien.slice(1);
  return [
    { name: "Gratuito", price: "0 €", incl: `Hasta 5 ${quien}, para siempre`, extras: [...EN_TODOS_LOS_PLANES, "Rutinas y dietas con IA", "Sin tarjeta"] },
    { name: "Starter", price: "29,90 €/mes", incl: `Hasta 25 ${quien} activos`, extras: [...EN_TODOS_LOS_PLANES, "Las mismas funciones que el resto", "Soporte por email (48 h)"] },
    { name: "Pro", price: "89,90 €/mes", incl: `Hasta 100 ${quien} activos`, extras: [...EN_TODOS_LOS_PLANES, "Las mismas funciones que el resto", "Soporte prioritario (24 h)"], highlight: true },
    { name: "Unlimited", price: "149,90 €/mes", incl: `${Quien} ilimitados`, extras: [...EN_TODOS_LOS_PLANES, "Migración de datos incluida", "Soporte VIP directo"] },
  ];
}
