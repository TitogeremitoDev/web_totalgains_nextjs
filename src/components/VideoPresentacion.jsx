import Link from "next/link";
import { Check, Rocket } from "lucide-react";
import "./VideoPresentacion.css";

/* Vídeo de presentación con voz (90 s, vertical) en la portada, dentro de un
   móvil. Sin autoplay y con preload="none": hasta que alguien le da a play no
   se baja ni un byte del mp4 (6 MB), así que la portada pesa lo mismo. */
const puntos = [
  "Rutinas y dietas con IA en minutos, revisadas por ti.",
  "Todo el seguimiento de tus clientes en un solo sitio.",
  "Tu app con tu marca y tus colores.",
];

export default function VideoPresentacion() {
  return (
    <section className="vp" aria-labelledby="vp-titulo">
      <div className="container vp-grid">
        <div className="vp-texto">
          <p className="vp-antetitulo">En 90 segundos</p>
          <h2 id="vp-titulo" className="vp-h2">Mira cómo trabajas con TotalGains</h2>
          <ul>
            {puntos.map((p) => <li key={p}><Check size={18} aria-hidden="true" />{p}</li>)}
          </ul>
          <Link href="/onboarding/" prefetch={false} className="btn btn-primary btn-lg vp-cta">
            <Rocket size={18} aria-hidden="true" /> Empieza gratis · 5 atletas
          </Link>
        </div>
        <div className="vp-movil">
          <video
            src="/video/presentacion-totalgains.mp4"
            poster="/video/presentacion-totalgains.webp"
            controls
            playsInline
            preload="none"
            width={720}
            height={1280}
            aria-label="Vídeo de presentación de TotalGains, 90 segundos, con voz"
          />
        </div>
      </div>
    </section>
  );
}
