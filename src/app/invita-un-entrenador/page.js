import Link from "next/link";
import Image from "next/image";
import { Gift, Share2, UserPlus, CreditCard, Check, ChevronDown, Smartphone, Users } from "lucide-react";
import LazyVideo from "@/components/LazyVideo";
import CalculadoraInvita from "./CalculadoraInvita";
import "./invita.css";

/* ──────────────────────────────────────────────
   /invita-un-entrenador — SERVER COMPONENT

   El «invita a un entrenador» ya existía en la app (panel del entrenador →
   «Compartir e invitar») y la web no lo contaba en ningún sitio.
   Reglas, las MISMAS que la app (ShareMenuModal) y el servidor (webhook del
   primer pago):
   - El código solo se mete al crear la cuenta, en «¿Te invitó otro
     entrenador?». Nunca por enlace con ?ref= (es el otro sistema, el de
     clientes, y mezclarlos da dobles premios).
   - Al primer pago del invitado: él gana 30 días y quien invita, días según
     el plan del invitado frente al suyo (× 30 si paga al mes, × 60 si al año).
   - Solo cuenta el pago en la web (Stripe o PayPal): las compras dentro de la
     app (Apple / Google) no dan los días. German, 31-oct: no se cambia en el
     servidor, así que la página lo dice («en totalgains.es»).
   Capturas: app real con datos de ejemplo (Laura Ruiz invita a Carlos Díaz).
   Fotos de ambiente: IA (Gemini), sin texto ni logos.
   Animación: ~/Escritorio/hyperframes-test/totalgains-invita-entrenador-web.
   ────────────────────────────────────────────── */

export const metadata = {
  title: "Invita a otro entrenador y ganad días gratis",
  description: "Comparte tu código de TotalGains con otro entrenador: cuando haga su primer pago, él gana un mes y tú hasta 60 días gratis según su plan.",
  alternates: { canonical: "https://totalgains.es/invita-un-entrenador/" },
  robots: { index: true, follow: true },
};

const pasos = [
  {
    icono: Share2,
    titulo: "Abre «Compartir e invitar»",
    texto: "En tu panel de entrenador, arriba, toca el icono de compartir y elige «Invita a un entrenador».",
    img: "/images/invita/paso-1-compartir.webp",
    alto: 830,
    alt: "Menú «Compartir» del panel con la opción «Invita a un entrenador»",
  },
  {
    icono: Gift,
    titulo: "Mándale tu código",
    texto: "Ahí está tu código y lo que ganas con cada plan. Un toque en «Compartir por WhatsApp» y le llega con las instrucciones.",
    img: "/images/invita/paso-2-codigo.webp",
    alto: 1056,
    alt: "Programa de afiliados con el código TOTALGAIN y la tabla de días por plan",
  },
  {
    icono: UserPlus,
    titulo: "Lo pone al crear su cuenta",
    texto: "Al registrarse elige «Soy entrenador» y escribe tu código en «¿Te invitó otro entrenador?». Solo vale en ese momento.",
    img: "/images/invita/paso-3-registro.webp",
    alto: 1035,
    alt: "Registro de TotalGains con el código escrito en «¿Te invitó otro entrenador?»",
  },
  {
    icono: CreditCard,
    titulo: "Primer pago: días para los dos",
    texto: "Cuando hace su primer pago en totalgains.es, a él le suman 30 días y a ti los tuyos, solos. Lo ves en el mismo sitio, con quién se ha apuntado.",
    img: "/images/invita/paso-4-dias.webp",
    alto: 1169,
    alt: "Programa de afiliados con 1 entrenador referido y 30 días ganados",
  },
];

const preguntas = [
  { q: "¿Cuándo llegan los días?", a: "Con el primer pago del entrenador que invitas en totalgains.es (con tarjeta o PayPal), en cualquier plan. Registrarse no basta: los días llegan cuando empieza a pagar, y se suman solos a vuestros planes." },
  { q: "¿Y si se le olvidó poner el código?", a: "El código va al crear la cuenta. Si se le pasó, escríbenos por WhatsApp o a soporte@totalgains.es antes de su primer pago y lo vemos." },
  { q: "¿Hay límite de invitaciones?", a: "No. Cada entrenador que invites y empiece a pagar te suma sus días." },
  { q: "¿Sirve para invitar a mis clientes?", a: "No: esto es entre entrenadores. A tus clientes los invitas desde «Invitar cliente», con su propio código." },
];

export default function InvitaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <main className="inv">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="container inv-heroe">
        <div className="inv-heroe-texto">
          <p className="inv-cejilla"><Gift size={16} aria-hidden="true" /> Programa de afiliados</p>
          <h1>Invita a otro entrenador y ganad los dos</h1>
          <p className="inv-entrada">¿Conoces a alguien que aún lleva a sus clientes con Excel y WhatsApp? Pásale tu código: cuando empiece a pagar, él gana un mes y tú hasta 60 días gratis.</p>
          <div className="inv-premios">
            <div><strong>+1 mes</strong><span>para él, en cualquier plan</span></div>
            <div><strong>Hasta 60 días</strong><span>para ti, según su plan</span></div>
          </div>
          <div className="inv-botones">
            <a href="#como" className="btn btn-primary btn-lg">Cómo se hace</a>
            <Link href="/onboarding/" prefetch={false} className="inv-secundario">¿Aún no usas TotalGains? Empieza gratis</Link>
          </div>
        </div>
        <div className="inv-heroe-video">
          <LazyVideo
            src="/video/invita-entrenador.mp4"
            poster="/video/invita-entrenador.webp"
            width={720}
            height={900}
            posterWidth={720}
            posterHeight={900}
            alt="Animación: compartes tu código, tu compañero lo pone al registrarse y los dos ganáis días"
            className="inv-video"
          />
        </div>
      </section>

      <section className="container inv-calc-zona" aria-label="Calculadora de días">
        <CalculadoraInvita />
      </section>

      <section className="container inv-foto" aria-labelledby="inv-foto-t">
        <div className="inv-foto-img">
          <Image src="/images/invita/entre-entrenadores.webp" alt="Una entrenadora le enseña el móvil a un compañero en el gimnasio" width={1600} height={893} sizes="(max-width: 860px) 100vw, 560px" />
        </div>
        <div className="inv-foto-texto">
          <p className="inv-cejilla"><Users size={16} aria-hidden="true" /> Entre entrenadores</p>
          <h2 id="inv-foto-t">La mejor recomendación es la de un compañero</h2>
          <p>Tú ya sabes lo que te ahorra llevar rutinas, dietas y seguimiento en un solo sitio. Cuéntaselo a ese compañero que aún va con Excel y WhatsApp: él empieza con un mes de regalo y tú sumas días a tu plan.</p>
          <ul>
            <li><Check size={16} aria-hidden="true" />Sin límite: cada entrenador que empiece a pagar te suma días.</li>
            <li><Check size={16} aria-hidden="true" />Los días se suman solos a vuestros planes.</li>
          </ul>
        </div>
      </section>

      <section className="container inv-pasos" id="como" aria-labelledby="inv-pasos-t">
        <p className="inv-cejilla inv-centro"><Smartphone size={16} aria-hidden="true" /> En la app, paso a paso</p>
        <h2 id="inv-pasos-t">Así se hace</h2>
        <ol>
          {pasos.map(({ icono: Icono, titulo, texto, img, alto, alt }, i) => (
            <li key={titulo} className="inv-paso">
              <div className="inv-paso-texto">
                <span className="inv-num">{i + 1}</span>
                <h3><Icono size={20} aria-hidden="true" /> {titulo}</h3>
                <p>{texto}</p>
              </div>
              <div className="inv-paso-movil">
                <Image src={img} alt={alt} width={600} height={alto} sizes="(max-width: 860px) 70vw, 300px" />
              </div>
            </li>
          ))}
        </ol>
        <p className="inv-sello">● Capturas reales de la app, con datos de ejemplo</p>
      </section>

      <section className="container inv-faq" aria-labelledby="inv-faq-t">
        <h2 id="inv-faq-t">Preguntas que nos hacéis</h2>
        <div className="inv-faq-lista">
          {preguntas.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}<ChevronDown size={18} aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container inv-final">
        <div className="inv-final-img">
          <Image src="/images/invita/choca-esos-cinco.webp" alt="Dos entrenadores chocan la mano en el gimnasio" width={1400} height={781} sizes="(max-width: 860px) 100vw, 480px" />
        </div>
        <div className="inv-final-texto">
          <h2>Tu código ya está en la app</h2>
          <ul>
            <li><Check size={16} aria-hidden="true" />Panel → «Compartir e invitar» → «Invita a un entrenador».</li>
            <li><Check size={16} aria-hidden="true" />Puedes invitar a todos los entrenadores que quieras.</li>
          </ul>
          <Link href="/onboarding/" prefetch={false} className="btn btn-primary btn-lg">¿Aún no usas TotalGains? Empieza gratis</Link>
        </div>
      </section>
    </main>
  );
}
