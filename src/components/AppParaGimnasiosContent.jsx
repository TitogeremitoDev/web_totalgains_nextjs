/* /app-para-gimnasios/: la app del SOCIO con la marca del centro (27-nov-2026).
   Todo es texto fijo que se pinta al compilar; las únicas piezas con código en
   el navegador son las que ya existían en /para-gimnasios/ (barra de progreso,
   vídeo, formulario «Te llamamos» y preguntas desplegables).

   Las capturas son reales y van ENTERAS (640x1385), con gimnasios inventados:
   «Gimnasio Atlas», «Gimnasio Vital» y «Box Cumbre».
   ⛔ Es una sola app (TotalGains) que se viste con la marca del centro al entrar.
   Nunca decir que es una app aparte del gimnasio en las tiendas. */
import Link from "next/link";
import {
  ArrowRight, Bell, CalendarCheck, Check, CreditCard, Dumbbell, Monitor, Phone, Smartphone, Utensils, X,
} from "lucide-react";
import ImagenAdaptable from "@/components/ImagenAdaptable";
import DemoVideo from "@/components/DemoVideo";
import CasoGimnasio from "@/components/CasoGimnasio";
import TeLlamamosGimnasio from "@/components/TeLlamamosGimnasio";
import ScrollProgress from "./para-gimnasios/ScrollProgress";
import PricingSection from "./para-gimnasios/PricingSection";
import FAQSection from "./para-gimnasios/FAQSection";
import FinalCTASection from "./para-gimnasios/FinalCTASection";
import { CASOS_GIMNASIO } from "./para-gimnasios/datos";
import { APP_PARA_GIMNASIOS_FAQS } from "@/data/appParaGimnasiosFaqs";

const ANCHO = 640;
const ALTO = 1385;

function Movil({ src, alt, className = "", priority = false, inmediata = false }) {
  return (
    <div className={`apg-phone ${className}`}>
      <ImagenAdaptable src={src} alt={alt} width={ANCHO} height={ALTO} priority={priority} inmediata={inmediata} />
    </div>
  );
}

const BLOQUES = [
  {
    id: "reservas",
    Icono: CalendarCheck,
    etiqueta: "Reservas",
    titulo: "Reservan su clase en dos toques",
    texto:
      "El socio abre la app, ve las clases de hoy y de la semana con las plazas que quedan y reserva. Si la clase está llena, se apunta a la lista de espera y la app le avisa cuando le toca plaza.",
    puntos: [
      "Aforo real: cada clase enseña cuántas plazas quedan.",
      "Lista de espera automática, con aviso al móvil cuando se libera una plaza.",
      "Cancelación desde la app dentro del plazo que tú marques.",
    ],
    moviles: [
      { src: "/images/gym/app-socio-reservas.webp", alt: "Pantalla real de la app del socio: clases de hoy con su hora, las plazas libres y el botón Reservar" },
      { src: "/images/gym/app-socio-mis-reservas.webp", alt: "Pantalla real de la app del socio: sus reservas, con una clase reservada y otra en la que está en la lista de espera, puesto 3" },
    ],
  },
  {
    id: "pagos",
    Icono: CreditCard,
    etiqueta: "Pagos",
    titulo: "Pagan la cuota desde el móvil",
    texto:
      "Cuando toca renovar, el socio lo ve en «Mi gimnasio» y paga con tarjeta en el momento. El dinero llega a la cuenta de Stripe de tu gimnasio y el pago queda apuntado solo, con su ticket. TotalGains no se queda comisión: solo se aplica la tarifa de Stripe.",
    puntos: [
      "Cuotas y bonos, con su saldo y su fecha de caducidad a la vista.",
      "Tienda del centro: el socio reserva un producto y lo recoge con su código.",
      "En recepción puedes seguir cobrando como siempre.",
    ],
    nota: { texto: "Mira cómo paga un socio en el vídeo de cobros", href: "/para-gimnasios/#cobros" },
    moviles: [
      { src: "/images/gym/app-socio-pagos.webp", alt: "Pantalla real «Mi gimnasio» de la app del socio: aviso de que toca renovar la cuota y botón Pagar ahora, 45,00 euros" },
      { src: "/images/gym/app-socio-tienda.webp", alt: "Pantalla real de la tienda del gimnasio en la app del socio: un pedido reservado con su código de recogida y el botón para pagarlo" },
    ],
  },
  {
    id: "rutinas",
    Icono: Dumbbell,
    etiqueta: "Rutinas y WOD",
    titulo: "Entrenan con las rutinas de tu centro",
    texto:
      "Cada socio tiene en la app las rutinas que prepara tu gimnasio: elige la que le encaja, la sigue ejercicio a ejercicio y apunta lo que hace. Y si tiene entrenador asignado, ve la rutina que le ha puesto.",
    puntos: [
      "WOD del día con tu marca: lo publicas y cada socio apunta su resultado.",
      "Vídeo y técnica de cada ejercicio dentro de la app.",
      "¿No sabe cuál elegir? Responde tres preguntas y la app le recomienda una.",
    ],
    moviles: [
      { src: "/images/gym/app-socio-rutinas.webp", alt: "Pantalla real «Rutinas de Gimnasio Atlas» en la app del socio: el WOD de hoy y las rutinas del centro, cada una con su botón Empezar" },
    ],
  },
  {
    id: "dietas",
    Icono: Utensils,
    etiqueta: "Dietas",
    titulo: "Su dieta, con opciones para cada comida",
    texto:
      "Tu equipo prepara la dieta de cada socio, con ayuda de la IA si quiere, y el socio la ve en su móvil: las comidas del día, varios platos para elegir y las calorías y los macros de cada uno.",
    puntos: [
      "Cambia un plato por otro equivalente sin salirse del plan.",
      "Lista de la compra y recetas dentro de la app.",
      "Marca lo que ha comido y puntúa cada plato, para que tu equipo ajuste.",
    ],
    moviles: [
      { src: "/images/gym/app-socio-dieta.webp", alt: "Pantalla real de Nutrición en la app del socio: la comida de hoy con cuatro platos para elegir, cada uno con sus calorías y macros" },
    ],
  },
  {
    id: "avisos",
    Icono: Bell,
    etiqueta: "Avisos",
    titulo: "Tus avisos llegan y se quedan",
    texto:
      "Un cambio de horario, una clase nueva o un cierre por festivo: escribes el comunicado y llega al móvil de tus socios. Después lo siguen teniendo en «Mi gimnasio», por si no lo leyeron en el momento.",
    puntos: [
      "A todos, a los socios de un plan o a los de una clase.",
      "Por notificación al móvil o por email.",
      "Aviso automático cuando se libera una plaza de la lista de espera.",
    ],
    moviles: [
      { src: "/images/gym/app-socio-avisos.webp", alt: "Pantalla real «Mi gimnasio» de la app del socio con el logo de Gimnasio Atlas y dos comunicados nuevos del centro" },
    ],
  },
];

const eyebrow = {
  fontSize: "0.78rem",
  fontWeight: 700,
  letterSpacing: "1.5px",
  color: "var(--accent)",
  textTransform: "uppercase",
  marginBottom: 12,
};
const h2 = { fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 };
const sub = { color: "var(--text-secondary)", maxWidth: 680, margin: "14px auto 0", lineHeight: 1.6 };

export default function AppParaGimnasiosContent() {
  return (
    <div className="pg" style={{ overflow: "hidden" }}>
      <ScrollProgress />
      <main>
        {/* 1. CABECERA */}
        <section style={{ position: "relative", padding: "120px 24px 72px", background: "var(--bg-dark)", overflow: "hidden" }}>
          <div className="pg-aurora" aria-hidden="true">
            <span className="a1" />
            <span className="a2" />
            <span className="a3" />
          </div>
          <div className="apg-hero-grid" style={{ position: "relative" }}>
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  background: "rgba(102,126,234,0.12)",
                  border: "1px solid rgba(102,126,234,0.3)",
                  borderRadius: 100,
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--primary-light)",
                  marginBottom: 20,
                }}
              >
                <Smartphone size={13} /> La app de tus socios
              </span>
              <h1 style={{ fontSize: "var(--fs-hero)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
                App para gimnasios con{" "}
                <span className="grad-text-anim">la marca de tu centro</span>
              </h1>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 28 }}>
                Tus socios reservan clase, pagan la cuota, siguen su rutina y su dieta y reciben tus avisos desde el móvil. Al entrar ven el logo, el nombre y los colores de tu gimnasio. Tú lo llevas todo desde el ordenador.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 22 }}>
                <a href="#te-llamamos" className="btn btn-gold btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <Phone size={18} /> Te llamamos
                </a>
                <a href="#que-hace-el-socio" className="btn btn-secondary btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Ver qué hace el socio <ArrowRight size={16} />
                </a>
              </div>
              <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Incluida en el plan del gimnasio: 149, 199 o 249 € al mes con IVA · Entrenadores ilimitados · Sin permanencia
              </p>
            </div>

            <div>
              <div className="apg-trio">
                <Movil className="apg-lado apg-izq" inmediata src="/images/gym/app-socio-portada-vital.webp" alt="Portada real de la app con la marca de un gimnasio de ejemplo, Gimnasio Vital: su logo y los botones en verde" />
                <Movil priority src="/images/gym/app-socio-portada-atlas.webp" alt="Portada real de la app del socio con la marca de un gimnasio de ejemplo, Gimnasio Atlas: su logo, su nombre y los botones Reservas y Rutinas en azul" />
                <Movil className="apg-lado apg-der" inmediata src="/images/gym/app-socio-portada-cumbre.webp" alt="Portada real de la app con la marca de un box de ejemplo, Box Cumbre: su logo y los botones en naranja sobre fondo oscuro" />
              </div>
              <p className="apg-pie">
                La misma app con tres centros de ejemplo. Son capturas reales; los nombres y los logos son inventados.
              </p>
            </div>
          </div>
        </section>

        {/* 2. QUÉ ES Y QUÉ NO ES */}
        <section style={{ padding: "80px 24px", background: "var(--bg-darker)" }}>
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <div className="aparece" style={{ textAlign: "center", marginBottom: 36 }}>
              <p style={eyebrow}>Para que no haya sorpresas</p>
              <h2 style={h2}>
                Qué es exactamente <span style={{ color: "var(--accent)" }}>y qué no</span>
              </h2>
            </div>
            <div className="apg-dos">
              <div className="apg-caja aparece">
                <span className="apg-etiqueta" style={{ color: "#34d399" }}><Check size={16} /> Lo que es</span>
                <h3>Una sola app que se viste con tu marca</h3>
                <p>
                  Tus socios descargan TotalGains en App Store o Google Play. Al entrar con el código de tu centro ven tu logo, tu nombre y tus colores: en la portada, en los botones y en los avisos. Para ellos es la app de su gimnasio.
                </p>
              </div>
              <div className="apg-caja aparece">
                <span className="apg-etiqueta" style={{ color: "#fbbf24" }}><X size={16} /> Lo que no es</span>
                <h3>No es una app aparte con tu nombre en las tiendas</h3>
                <p>
                  En la tienda se llama TotalGains. A cambio no hay que programar ni publicar nada: subes el logo de tu centro y, con un botón, la IA te propone tres temas de color a partir de él (claro, suave y oscuro). Eliges y queda puesto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LO QUE HACE EL SOCIO */}
        <section id="que-hace-el-socio" style={{ padding: "90px 24px 100px" }}>
          <div className="aparece" style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={eyebrow}>Lo que hace el socio</p>
            <h2 style={h2}>
              Todo su gimnasio, <span style={{ color: "var(--accent)" }}>en el móvil</span>
            </h2>
            <p style={sub}>
              Cinco cosas que tus socios hacen sin pasar por recepción ni escribirte por WhatsApp. Cada pantalla es una captura real de la app.
            </p>
          </div>

          {BLOQUES.map((b, i) => (
            <div key={b.id} id={b.id} className={`apg-fila aparece ${i % 2 === 1 ? "apg-inv" : ""}`}>
              <div className="apg-texto">
                <span className="apg-etiqueta"><b.Icono size={16} /> {b.etiqueta}</span>
                <h3>{b.titulo}</h3>
                <p>{b.texto}</p>
                <ul className="apg-lista">
                  {b.puntos.map((p) => (
                    <li key={p}><Check size={17} aria-hidden="true" /> <span>{p}</span></li>
                  ))}
                </ul>
                {b.nota && (
                  <p className="apg-nota">
                    <Link href={b.nota.href} prefetch={false}>{b.nota.texto}</Link>
                  </p>
                )}
              </div>
              <div className={`apg-moviles ${b.moviles.length > 1 ? "apg-dupla" : ""}`}>
                {b.moviles.map((m) => (
                  <Movil key={m.src} src={m.src} alt={m.alt} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 4. CASO REAL: un gimnasio cuyos socios ya la usan */}
        <CasoGimnasio casos={CASOS_GIMNASIO} fecha="octubre de 2026" />

        {/* 5. CÓMO ENTRAN LOS SOCIOS */}
        <section style={{ padding: "90px 24px", background: "var(--bg-darker)" }}>
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <div className="aparece" style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={eyebrow}>Puesta en marcha</p>
              <h2 style={h2}>
                Cómo entran tus socios, <span style={{ color: "var(--accent)" }}>en tres pasos</span>
              </h2>
            </div>
            <div className="apg-pasos">
              {[
                ["Descargan la app", "Buscan TotalGains en App Store o Google Play. Es gratis para el socio."],
                ["Escriben el código de tu centro", "Se lo mandas por WhatsApp o por email y lo ponen al registrarse. También puedes darlos de alta tú desde el panel."],
                ["Ven su gimnasio", "Tu logo, tus colores, las clases de la semana y su rutina. Desde ese momento, reservan y pagan desde el móvil."],
              ].map(([t, d], i) => (
                <div className="apg-paso aparece" key={t}>
                  <div className="apg-num">{i + 1}</div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
            <p className="aparece" style={{ ...sub, fontSize: "0.92rem", textAlign: "center" }}>
              ¿Vienes de otro programa? Importamos tu lista de socios y dejamos montados el horario de clases, los planes y las cuotas. Lo habitual es tenerlo listo en 3 a 5 días.
            </p>
          </div>
        </section>

        {/* 6. EL GESTOR, DESDE EL ORDENADOR */}
        <section style={{ padding: "90px 24px" }}>
          <div className="apg-panel">
            <div className="apg-texto aparece">
              <span className="apg-etiqueta"><Monitor size={16} /> Tu parte</span>
              <h3>Tú lo llevas desde el ordenador</h3>
              <p>
                La app es la del socio. Tú y tu equipo entráis por la web, sin instalar nada, y desde ahí sale todo lo que el socio ve en su móvil.
              </p>
              <ul className="apg-lista">
                {[
                  "Horario de clases, aforos y lista de espera.",
                  "Socios, cuotas, bonos y facturas.",
                  "Rutinas, WOD del día y dietas de cada socio.",
                  "Comunicados y avisos con la marca de tu centro.",
                ].map((p) => (
                  <li key={p}><Check size={17} aria-hidden="true" /> <span>{p}</span></li>
                ))}
              </ul>
              <p className="apg-nota">
                <Link href="/para-gimnasios/" prefetch={false}>Ver todo lo que incluye TotalGains para gimnasios</Link>
              </p>
            </div>
            <div className="apg-panel-img aparece">
              <ImagenAdaptable
                src="/images/gym/clases.webp"
                alt="Panel real del gimnasio en la web de TotalGains: el calendario de clases de la semana con la ocupación de cada una"
                width={1837}
                height={916}
                sizes="(max-width: 900px) calc(100vw - 48px), 580px"
              />
            </div>
          </div>
        </section>

        {/* 7. VÍDEO */}
        <section id="demo" style={{ padding: "0 24px 90px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="aparece" style={{ textAlign: "center", marginBottom: 32 }}>
              <p style={eyebrow}>La demo</p>
              <h2 style={h2}>
                Un gimnasio de ejemplo, <span style={{ color: "var(--accent)" }}>en 2 minutos</span>
              </h2>
              <p style={sub}>
                El panel, las clases, los socios, los cobros y la app con la marca del centro, de punta a punta.
              </p>
            </div>
            <DemoVideo
              src="/video/gym-demo.mp4"
              poster="/video/gym-demo.jpg"
              titulo="Demo de TotalGains para gimnasios: el panel y la app del socio con la marca del centro"
              ubicacion="app_para_gimnasios"
            />
          </div>
        </section>

        <PricingSection />
        <TeLlamamosGimnasio />
        <FAQSection faqs={APP_PARA_GIMNASIOS_FAQS} />
        <FinalCTASection />

        {/* 12. TAMBIÉN */}
        <section style={{ padding: "60px 24px 100px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: 16, textAlign: "center", letterSpacing: "0.5px" }}>
              También te puede interesar
            </h2>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              {[
                ["/para-gimnasios/", "Software para gimnasios: todo lo que incluye"],
                ["/blog/cuanto-cuesta-software-gimnasio-2026/", "Cuánto cuesta un software de gimnasio"],
                ["/blog/software-gimnasios-pequenos-boutique-2026/", "Guía de software para gimnasios pequeños"],
                ["/verifactu/gimnasios/", "VeriFactu para gimnasios"],
                ["/app-marca-blanca-entrenador-personal/", "App con tu marca para entrenadores"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  prefetch={false}
                  className="pg-chip"
                  style={{
                    padding: "9px 18px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 100,
                    fontSize: "0.86rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
