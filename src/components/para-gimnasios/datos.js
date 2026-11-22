/* Datos compartidos por las secciones de /para-gimnasios/. */

export const MAILTO = "mailto:soporte@totalgains.es?subject=Demo%20TotalGains%20para%20gimnasios&body=Hola%20Germ%C3%A1n%2C%0A%0AMe%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20TotalGains%20para%20mi%20gimnasio.%0A%0ANombre%3A%20%0AGimnasio%3A%20%0AN%C3%BAmero%20de%20socios%20activos%3A%20%0AN%C3%BAmero%20de%20coaches%3A%20%0ATel%C3%A9fono%20de%20contacto%3A%20%0A%0AUn%20saludo.";

/* Gimnasios reales: cifras de su cuenta (últimos 30 días al 30-oct-2026) y la
   frase TAL CUAL la aprobaron el 31-oct. Fotos: las mandó cada gimnasio. */
export const CASOS_GIMNASIO = [
  {
    id: "method-results",
    nombre: "method & results",
    foto: { src: "/images/gimnasios/method-results.webp", ancho: 1000, alto: 1000, posicion: "62% 30%", alt: "Sala de entrenamiento funcional de method & results, con el logo MR iluminado" },
    cifras: [
      { valor: "75 de 83", texto: "socios entrenan con la app" },
      { valor: "735", texto: "entrenos registrados al mes" },
      { valor: "819", texto: "reservas de clases al mes" },
    ],
    frase: "«Cada socio tiene su rutina en la app y la registra al entrenar: el último mes, 75 de nuestros 83 socios entrenaron con TotalGains. Y además reservan sus clases desde el móvil.»",
    autor: "Mourad · method & results",
  },
  {
    id: "euphormia",
    nombre: "Euphormia Studio",
    lugar: "Santa Fe",
    foto: { src: "/images/gimnasios/euphormia.webp", ancho: 335, alto: 597, posicion: "50% 62%", alt: "Socios entrenando en la sala de Euphormia Studio con su entrenador" },
    cifras: [
      { valor: "147", texto: "socios en la app" },
      { valor: "887", texto: "reservas de clases al mes" },
      { valor: "4", texto: "entrenadores en el equipo" },
    ],
    frase: "«Con TotalGains llevamos las clases, las reservas y los bonos de todo el centro en un solo sitio. Solo el último mes, nuestros socios hicieron 887 reservas desde la app.»",
    autor: "Equipo de Euphormia Studio",
  },
];
