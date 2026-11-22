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
/* Los precios del entrenador como NÚMEROS, con IVA (revisión de la web 21-nov,
   mejora C450). Antes la calculadora de /invita-un-entrenador/, el formulario
   de /oferta-web/ y la tabla de /ia-entrenador-personal/ llevaban cada uno su
   copia escrita a mano. ⚠️ Siguen apareciendo dentro de frases en unas 30
   páginas (FAQ, introducciones, comparativas): si cambia un precio, buscar
   también «29,90», «89,90», «149,90», «299», «899» y «1.499» en src/. */
export const PLANES_COACH = {
  starter: { id: "starter", nombre: "Starter", mes: 29.9, anio: 299, atletas: 25 },
  pro: { id: "pro", nombre: "Pro", mes: 89.9, anio: 899, atletas: 100 },
  unlimited: { id: "unlimited", nombre: "Unlimited", mes: 149.9, anio: 1499, atletas: null },
};

/** 29.9 → «29,90 €» · 1499 → «1.499 €». A mano y no con toLocaleString: en
    es-ES el navegador NO pone el punto en los números de 4 cifras («1499»), y
    lo que se publica es «1.499». */
export function euros(n) {
  const [ent, dec] = n.toFixed(n % 1 ? 2 : 0).split(".");
  return ent.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (dec ? "," + dec : "") + " €";
}

export const EN_TODOS_LOS_PLANES = ["App con tu marca incluida", "Cobros dentro de la app"];

export const NOTA_PLANES =
  "La app con tu marca y los cobros dentro de la app van en todos los planes, también en el gratuito. Entre planes solo cambian el número de atletas y el soporte.";

/** @param {string} quien «clientes», «pacientes»… como los llame la página. */
export function planesResumen(quien = "clientes") {
  const Quien = quien.charAt(0).toUpperCase() + quien.slice(1);
  return [
    { name: "Gratuito", price: "0 €", incl: `Hasta 5 ${quien}, para siempre`, extras: [...EN_TODOS_LOS_PLANES, "Rutinas y dietas con IA", "Sin tarjeta"] },
    { name: "Starter", price: `${euros(PLANES_COACH.starter.mes)}/mes`, incl: `Hasta 25 ${quien} activos`, extras: [...EN_TODOS_LOS_PLANES, "Las mismas funciones que el resto", "Soporte por email (48 h)"] },
    { name: "Pro", price: `${euros(PLANES_COACH.pro.mes)}/mes`, incl: `Hasta 100 ${quien} activos`, extras: [...EN_TODOS_LOS_PLANES, "Las mismas funciones que el resto", "Soporte prioritario (24 h)"], highlight: true },
    { name: "Unlimited", price: `${euros(PLANES_COACH.unlimited.mes)}/mes`, incl: `${Quien} ilimitados`, extras: [...EN_TODOS_LOS_PLANES, "Migración de datos incluida", "Soporte VIP directo"] },
  ];
}
