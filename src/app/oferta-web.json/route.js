import { OFERTA_WEB, plazasLibres } from "@/data/ofertaWeb";

/* https://totalgains.es/oferta-web.json — estado de la oferta para la app
   (regalo del panel y pastilla de «Planes», OfertaWebChip.jsx). Sale de
   src/data/ofertaWeb.js al compilar: al marcar `agotada` o subir
   `plazasCogidas` y publicar, la app se entera sin OTA. La fecha `fin` la
   mira la propia app, así que el 1-dic desaparece aunque nadie publique. */
export const dynamic = "force-static";

export function GET() {
  return Response.json({
    activa: !OFERTA_WEB.agotada && plazasLibres() > 0,
    fin: OFERTA_WEB.fin,
    url: `https://totalgains.es${OFERTA_WEB.ruta}`,
    texto: "Tu web incluida con el plan anual",
  });
}
