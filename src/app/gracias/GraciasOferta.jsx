import Link from "next/link";
import { CheckCircle, MessageCircle, Image as ImageIcon, Camera, ListChecks, Heart } from "lucide-react";
import { OFERTA_WEB, whatsappOfertaWeb } from "@/data/ofertaWeb";
import "./gracias-oferta.css";

/* «Gracias» de la reserva de la oferta de noviembre de 2026 (?de=oferta-web).
   Se quita con el resto de la oferta el 1-dic. */
const pasos = [
  { titulo: "Te escribimos", texto: "En menos de 24 horas, por WhatsApp o por correo, para confirmar tu plaza." },
  { titulo: "Te pasas al plan anual", texto: "Tu plaza queda confirmada en cuanto activas el plan anual." },
  { titulo: "Nos mandas tu material", texto: "Con un formulario sencillo: logo, fotos, servicios y cómo te gustaría." },
  { titulo: "Tu web, en 1 semana", texto: `Desde que nos llega todo, en ${OFERTA_WEB.entrega} la tienes publicada.` },
];

const preparar = [
  { icono: ImageIcon, texto: "Tu logo (mejor en PNG o SVG)" },
  { icono: Camera, texto: "3-5 fotos tuyas con buena luz" },
  { icono: ListChecks, texto: "Tus servicios y, si quieres, sus precios" },
  { icono: Heart, texto: "2 o 3 webs que te gusten" },
];

export default function GraciasOferta() {
  return (
    <div className="gof">
      <CheckCircle size={56} color="#22c55e" aria-hidden="true" />
      <h1 className="gof-h1">¡Tenemos tu reserva!</h1>
      <p className="gof-entrada">
        Ya estás en la lista de la oferta de noviembre. Esto es lo que pasa ahora:
      </p>

      <ol className="gof-pasos">
        {pasos.map(({ titulo, texto }, i) => (
          <li key={titulo}>
            <span className="gof-num">{i + 1}</span>
            <span><strong>{titulo}</strong>{texto}</span>
          </li>
        ))}
      </ol>

      <section className="gof-caja" aria-labelledby="gof-preparar">
        <h2 id="gof-preparar">Mientras tanto, ve preparando</h2>
        <ul>
          {preparar.map(({ icono: Icono, texto }) => (
            <li key={texto}><Icono size={18} aria-hidden="true" />{texto}</li>
          ))}
        </ul>
      </section>

      <div className="gof-botones">
        <a href={whatsappOfertaWeb()} target="_blank" rel="noopener" className="gof-wa">
          <MessageCircle size={18} aria-hidden="true" /> ¿Prisa? Escríbenos por WhatsApp
        </a>
        <Link href="/onboarding/" prefetch={false} className="gof-cuenta">
          ¿Aún sin cuenta? Créala gratis
        </Link>
      </div>
    </div>
  );
}
