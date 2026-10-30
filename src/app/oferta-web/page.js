import Image from "next/image";
import Link from "next/link";
import {
  LayoutTemplate, Globe, CalendarCheck, Send, ClipboardList, Rocket, Check, Lock,
  Smartphone, Search, MapPin, Sparkles, ArrowRight, Star, ExternalLink,
} from "lucide-react";
import { OFERTA_WEB, textoPlazas } from "@/data/ofertaWeb";
import { IconoOferta, CuentaAtras, Plazas, SoloConOferta } from "@/components/OfertaWebPiezas";
import OfertaWebCta from "./OfertaWebCta";
import OfertaWebPrueba from "./OfertaWebPrueba";
import OfertaWebReserva from "./OfertaWebReserva";
import "./oferta-web.css";

/* ──────────────────────────────────────────────
   /oferta-web — SERVER COMPONENT

   Oferta de noviembre de 2026 («Tu web incluida al pasarte al plan anual»).
   Datos en src/data/ofertaWeb.js. Página de un mes: noindex y FUERA del
   sitemap, para que no quede en Google cuando se quite. Se llega desde el
   ticket del héroe de la portada y del bloque de precios, el artículo de SEO
   y GEO, redes y el stand del Campeonato PCA (7 de noviembre).

   La web de ejemplo del héroe es una maqueta hecha con HTML (no una imagen),
   con la misma entrenadora inventada que el artículo: Laura Ruiz.
   ────────────────────────────────────────────── */

export const metadata = {
  title: "Una oferta que da miedo… a tu competencia: tu web incluida",
  description: `Oferta de noviembre para entrenadores: pásate al plan anual de TotalGains y te hacemos tu web. ${OFERTA_WEB.plazas} plazas, hasta el ${OFERTA_WEB.finTexto}.`,
  robots: { index: false, follow: true },
  alternates: { canonical: `https://totalgains.es${OFERTA_WEB.ruta}` },
  // Imagen propia para cuando se comparte el enlace (WhatsApp, Instagram…).
  openGraph: {
    title: "Una oferta que da miedo… a tu competencia",
    description: `Tu web incluida al pasarte al plan anual de TotalGains. ${OFERTA_WEB.plazas} plazas, hasta el ${OFERTA_WEB.finTexto}.`,
    url: `https://totalgains.es${OFERTA_WEB.ruta}`,
    type: "website",
    locale: "es_ES",
    siteName: "TotalGains",
    images: [{ url: "https://totalgains.es/images/oferta-web/og-oferta-web.jpg", width: 1200, height: 630, alt: "Una oferta que da miedo… a tu competencia: tu web incluida con el plan anual de TotalGains" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Una oferta que da miedo… a tu competencia",
    description: `Tu web incluida al pasarte al plan anual de TotalGains. ${OFERTA_WEB.plazas} plazas, hasta el ${OFERTA_WEB.finTexto}.`,
    images: ["https://totalgains.es/images/oferta-web/og-oferta-web.jpg"],
  },
};

const recibo = [
  { que: "Plan anual de TotalGains", detalle: "12 meses pagando 10 mensualidades", valor: "Tu plan", fuerte: false },
  { que: "Tu web profesional", detalle: "Diseño y montaje con tu logo, tus colores y tus servicios", valor: "Incluida", fuerte: true },
  { que: "Alojamiento", detalle: "Mientras sigas en TotalGains", valor: "Incluido", fuerte: true },
  { que: "Mantenimiento", detalle: `Pro y Unlimited: ${OFERTA_WEB.cambiosAlMes} cambios pequeños al mes`, valor: "Gratis", fuerte: true },
  { que: "Lo básico para Google y las IAs", detalle: "Tus servicios, tu zona y tu contacto, bien escritos", valor: "Incluido", fuerte: true },
  { que: "Entrega", detalle: "Desde que nos mandas tu material y cómo la quieres", valor: OFERTA_WEB.entrega, fuerte: true },
];

const planes = [
  {
    icono: LayoutTemplate,
    nombre: "Starter",
    precio: "299 €/año",
    para: "Hasta 25 atletas",
    url: "tunombre.totalgains.es",
    paginas: 1,
    puntos: [
      "Web de una página con tu logo, tus colores, tus servicios y tu contacto.",
      "En tunombre.totalgains.es, o en tu dominio si ya tienes uno.",
      "Alojamiento incluido mientras sigas en TotalGains.",
      "Se monta sobre nuestra plantilla. Los cambios posteriores se presupuestan aparte.",
    ],
  },
  {
    icono: Globe,
    nombre: "Pro y Unlimited",
    precio: "899 €/año · 1.499 €/año",
    para: "Hasta 100 atletas o sin límite",
    url: "tudominio.es",
    paginas: 4,
    destacado: true,
    puntos: [
      "Web completa: tus servicios, tus resultados y tu contacto.",
      "En tu dominio y sin rastro de TotalGains, igual que tu app con marca blanca.",
      `Mantenimiento gratis: alojamiento y ${OFERTA_WEB.cambiosAlMes} cambios pequeños al mes.`,
    ],
  },
];

const pasos = [
  {
    icono: CalendarCheck,
    titulo: "Pásate al plan anual",
    texto: "Starter, Pro o Unlimited. Pagas 10 mensualidades y tienes el año entero.",
  },
  {
    icono: Send,
    titulo: "Reserva tu plaza",
    texto: "Con el formulario de abajo o por WhatsApp. Las plazas van por orden de llegada.",
  },
  {
    icono: ClipboardList,
    titulo: "Nos pasas tu material",
    texto: "Te mandamos un formulario corto: logo, colores, servicios, fotos, contacto y cómo la quieres.",
  },
  {
    icono: Rocket,
    titulo: `En ${OFERTA_WEB.entrega}, publicada`,
    texto: `Desde que nos llega todo tu material, en ${OFERTA_WEB.entrega} tienes tu web en internet.`,
  },
];

const preguntas = [
  {
    p: "¿Cuánto tarda en estar lista?",
    r: `${OFERTA_WEB.entrega[0].toUpperCase()}${OFERTA_WEB.entrega.slice(1)} desde que nos mandas todo el material (logo, fotos, servicios y contacto) y nos cuentas cómo la quieres.`,
  },
  {
    p: "¿Tengo que tener dominio?",
    r: "No. En Starter puede ir en tunombre.totalgains.es. Si quieres tu propio dominio (tunombre.es), lo contratas tú y la ponemos ahí. En Pro y Unlimited va en tu dominio.",
  },
  {
    p: "¿Qué es un «cambio pequeño»?",
    r: `Cosas como cambiar un precio, un horario, una foto o un texto. En Pro y Unlimited tienes ${OFERTA_WEB.cambiosAlMes} al mes gratis.`,
  },
  {
    p: "Ya tengo web. ¿Me sirve la oferta?",
    r: "Escríbenos y lo vemos contigo: cada caso es distinto.",
  },
  {
    p: "¿Me pone primero en Google?",
    r: "Lleva lo básico bien hecho: tus servicios, tu zona y tu contacto escritos para que Google y las IAs entiendan quién eres. Un trabajo continuado de posicionamiento (SEO y GEO) es un servicio aparte.",
  },
  {
    p: "¿Y si me doy de baja de TotalGains?",
    r: "Te llevas tu web, o mantienes el alojamiento pagándolo aparte.",
  },
];

const letraPequena = [
  `Hay ${OFERTA_WEB.plazas} plazas y se dan por orden de llegada.`,
  `La oferta acaba el ${OFERTA_WEB.finTexto} de 2026 a las 23:59 (hora peninsular) o cuando se cubran las plazas, lo que pase antes.`,
  "Es para los planes anuales de entrenador (Starter, Pro y Unlimited) contratados durante la oferta.",
  "El dominio propio, si quieres uno, lo contratas tú. En Starter, sin dominio, la web va en tunombre.totalgains.es.",
  `El plazo de ${OFERTA_WEB.entrega} cuenta desde que nos llega todo el material y sabemos cómo quieres la web.`,
  "La prueba «Pon tu nombre y mira tu web» es una muestra: tu web de verdad se diseña con tu material.",
  "La web incluye lo básico para que Google la entienda. Un trabajo continuado de posicionamiento (SEO y GEO) es un servicio aparte.",
  "Si te das de baja de TotalGains, te llevas tu web o mantienes el alojamiento pagándolo aparte.",
];

/* Miniatura de la web de cada plan: una página (Starter) o varias (Pro). */
function MiniWeb({ url, paginas }) {
  return (
    <div className="ow-mini" aria-hidden="true">
      <div className="ow-mini-barra">
        <span /><span /><span />
        <em><Lock size={9} /> {url}</em>
      </div>
      {paginas > 1 && (
        <div className="ow-mini-pestanas">
          <b>Inicio</b><i>Servicios</i><i>Resultados</i><i>Contacto</i>
        </div>
      )}
      <div className="ow-mini-cuerpo">
        <div className="ow-mini-heroe" />
        <div className="ow-mini-linea" />
        <div className="ow-mini-linea corta" />
        <div className="ow-mini-tarjetas"><span /><span /><span /></div>
      </div>
    </div>
  );
}

const CHISPAS = Array.from({ length: 14 }, (_, i) => i);

export default function OfertaWebPage() {
  return (
    <main className="ow">
      {/* ── HÉROE ── */}
      <section className="ow-heroe" aria-labelledby="ow-h1">
        <div className="ow-fondo" aria-hidden="true">
          <div className="ow-niebla ow-niebla-a" />
          <div className="ow-niebla ow-niebla-b" />
          <div className="ow-rejilla" />
          {CHISPAS.map((i) => <span key={i} className="ow-chispa" />)}
        </div>

        <div className="container ow-heroe-grid">
          <div className="ow-heroe-texto">
            <p className="ow-pill">
              <IconoOferta /> Oferta de noviembre<SoloConOferta> · {textoPlazas()}</SoloConOferta>
            </p>
            <h1 id="ow-h1" className="ow-h1">
              Una oferta que da <span className="ow-miedo">miedo</span>…
              <span className="ow-h1-b">a tu competencia.</span>
            </h1>
            <p className="ow-entradilla">
              Pásate al plan anual de TotalGains y <strong>te hacemos tu web</strong>. Con tu nombre, tus servicios y tu contacto, para que quien te busque en Google o le pregunte a una IA te encuentre a ti.
            </p>

            <SoloConOferta>
              <div className="ow-reloj">
                <p className="ow-reloj-titulo">Se acaba en</p>
                <CuentaAtras tam="grande" />
                <Plazas tam="grande" />
              </div>
            </SoloConOferta>

            <OfertaWebCta />
            <p className="ow-heroe-nota">
              <Rocket size={17} aria-hidden="true" /> Lista en {OFERTA_WEB.entrega} desde que nos mandas tu material.
            </p>
          </div>

          <div className="ow-escaparate" aria-hidden="true">
            <div className="ow-navegador">
              <div className="ow-nav-barra">
                <span className="ow-punto r" /><span className="ow-punto a" /><span className="ow-punto v" />
                <span className="ow-url"><Lock size={11} /> tudominio.es</span>
              </div>
              <div className="ow-sitio">
                <div className="ow-sitio-menu">
                  <span className="ow-sitio-logo">LR</span>
                  <span className="ow-sitio-marca">Laura Ruiz</span>
                  <span className="ow-sitio-links">Servicios · Resultados · Contacto</span>
                </div>
                <div className="ow-sitio-heroe">
                  <span className="ow-sitio-kicker"><MapPin size={12} /> Entrenadora personal en Granada</span>
                  <span className="ow-sitio-titulo">Fuerza y pérdida de grasa para mujeres de más de 40</span>
                  <span className="ow-sitio-btn">Reserva tu primera sesión</span>
                </div>
                <div className="ow-sitio-servicios">
                  <span><b>Presencial</b>En el Zaidín</span>
                  <span><b>Online</b>En toda España</span>
                  <span><b>Desde 79 €/mes</b>Plan online</span>
                </div>
                <div className="ow-sitio-resenas">
                  <span className="ow-estrellas"><Star size={12} /><Star size={12} /><Star size={12} /><Star size={12} /><Star size={12} /></span>
                  Opiniones de sus clientas
                </div>
              </div>
            </div>

            <div className="ow-movil">
              <Image src="/screenshots/home_coach.webp" alt="" width={220} height={476} sizes="200px" />
            </div>

            <div className="ow-sello">
              <span>Tu web</span>
              <strong>incluida</strong>
            </div>

            <span className="ow-flota ow-flota-a"><Check size={14} /> En tu dominio</span>
            <span className="ow-flota ow-flota-b"><Sparkles size={14} /> Lista para Google y las IAs</span>
            <span className="ow-flota ow-flota-c"><Check size={14} /> Y tu app con tu marca</span>
            <span className="ow-ejemplo">Ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── PRUEBA: PON TU NOMBRE ── */}
      <OfertaWebPrueba />

      {/* ── RECIBO ── */}
      <section className="ow-sec" aria-labelledby="ow-recibo-t">
        <div className="container ow-estrecho">
          <p className="ow-antetitulo">Lo que te llevas</p>
          <h2 id="ow-recibo-t" className="ow-h2">Tu web, por lo que ya cuesta tu plan</h2>
          <div className="ow-recibo">
            <div className="ow-recibo-cab">
              <span>TotalGains</span>
              <span>Oferta de noviembre · 2026</span>
            </div>
            <ul>
              {recibo.map(({ que, detalle, valor, fuerte }) => (
                <li key={que}>
                  <span className="ow-recibo-que">
                    {fuerte && <Check size={18} aria-hidden="true" />}
                    <span><b>{que}</b><small>{detalle}</small></span>
                  </span>
                  <span className={`ow-recibo-valor${fuerte ? " es-gratis" : ""}`}>{valor}</span>
                </li>
              ))}
            </ul>
            <div className="ow-recibo-total">
              <span>Lo que pagas de más por la web</span>
              <strong>0 €</strong>
            </div>
            <p className="ow-recibo-pie">
              Precios con IVA. El plan anual son 10 mensualidades por 12 meses: <Link href="/precios/" prefetch={false}>ver los planes</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLANES ── */}
      <section className="ow-sec" aria-labelledby="ow-planes-t">
        <div className="container ow-ancho">
          <p className="ow-antetitulo">Qué web te llevas</p>
          <h2 id="ow-planes-t" className="ow-h2">Según tu plan anual</h2>
          <div className="ow-planes">
            {planes.map(({ icono: Icono, nombre, precio, para, url, paginas, destacado, puntos }) => (
              <article key={nombre} className={`ow-plan${destacado ? " es-destacado" : ""}`}>
                {destacado && <span className="ow-plan-badge">La más completa</span>}
                <MiniWeb url={url} paginas={paginas} />
                <h3 className="ow-plan-nombre"><Icono size={22} aria-hidden="true" /> {nombre}</h3>
                <p className="ow-plan-precio"><strong>{precio}</strong> · {para}</p>
                <ul>
                  {puntos.map((p) => <li key={p}><Check size={16} aria-hidden="true" />{p}</li>)}
                </ul>
                {/* Toda la tarjeta lleva a los precios (el ::after del enlace la
                    cubre entera); /precios/ abre ya en «Soy entrenador» y anual. */}
                <Link href="/precios/#pricing" prefetch={false} className="ow-plan-enlace" aria-label={`Ver los precios del plan ${nombre}`}>
                  Ver los precios <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EJEMPLO REAL: LA WEB DE LORENA ──
          Capturas de equilibriobylor.com del 30-oct-2026 (1440 y 390 de ancho).
          Lorena ya es caso de éxito en /casos-de-exito/lorena-eses/. */}
      <section className="ow-sec" aria-labelledby="ow-lorena-t">
        <div className="container ow-ancho">
          <p className="ow-antetitulo">Un ejemplo real</p>
          <h2 id="ow-lorena-t" className="ow-h2">Así es la web que le hicimos a Lorena</h2>
          <div className="ow-lorena">
            <a
              href="https://equilibriobylor.com/"
              target="_blank"
              rel="noopener"
              className="ow-lorena-capturas"
              aria-label="Abrir la web de Lorena, equilibriobylor.com (se abre en otra pestaña)"
            >
              <span className="ow-lorena-navegador">
                <span className="ow-nav-barra">
                  <span className="ow-punto r" /><span className="ow-punto a" /><span className="ow-punto v" />
                  <span className="ow-url"><Lock size={11} aria-hidden="true" /> equilibriobylor.com</span>
                </span>
                <Image src="/images/oferta-web/web-lorena-ordenador.webp" alt="Portada de la web de Lorena en el ordenador" width={1440} height={900} sizes="(max-width: 980px) 92vw, 620px" />
              </span>
              <span className="ow-lorena-movil">
                <Image src="/images/oferta-web/web-lorena-movil.webp" alt="La misma web en el móvil" width={585} height={1266} sizes="160px" />
              </span>
            </a>
            <div className="ow-lorena-texto">
              <p>
                Lorena es nutricionista online y lleva a sus clientas con TotalGains. Su web, «Equilibrio», es suya de arriba abajo:
              </p>
              <ul>
                <li><Check size={16} aria-hidden="true" />En su propio dominio: equilibriobylor.com.</li>
                <li><Check size={16} aria-hidden="true" />Con su marca, sus colores y sus fotos.</li>
                <li><Check size={16} aria-hidden="true" />Un cuestionario de 2 minutos para que cada clienta vea si su método es para ella.</li>
                <li><Check size={16} aria-hidden="true" />Igual de bien en el móvil que en el ordenador.</li>
              </ul>
              <div className="ow-lorena-enlaces">
                <a href="https://equilibriobylor.com/" target="_blank" rel="noopener" className="ow-lorena-ver">
                  Ver su web <ExternalLink size={16} aria-hidden="true" />
                </a>
                <Link href="/casos-de-exito/lorena-eses/" prefetch={false} className="ow-lorena-caso">
                  Su caso con TotalGains <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PASOS ── */}
      <section className="ow-sec" aria-labelledby="ow-pasos-t">
        <div className="container ow-ancho">
          <p className="ow-antetitulo">Cómo conseguirla</p>
          <h2 id="ow-pasos-t" className="ow-h2">Cuatro pasos y es tuya</h2>
          <ol className="ow-pasos">
            {pasos.map(({ icono: Icono, titulo, texto }, i) => (
              <li key={titulo}>
                <span className="ow-paso-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="ow-paso-icono"><Icono size={22} aria-hidden="true" /></span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── INSTAGRAM O WEB ── */}
      <section className="ow-sec" aria-labelledby="ow-insta-t">
        <div className="container ow-ancho">
          <p className="ow-antetitulo">¿Y para qué, si ya tengo Instagram?</p>
          <h2 id="ow-insta-t" className="ow-h2">Instagram te enseña. La web hace que te encuentren.</h2>
          <div className="ow-versus">
            <div className="ow-versus-col">
              <span className="ow-versus-icono insta"><Smartphone size={26} aria-hidden="true" /></span>
              <h3>Instagram</h3>
              <p className="ow-versus-frase">Te ve quien ya te sigue.</p>
              <p>Perfecto para cuidar a tu comunidad y enseñar tu día a día.</p>
            </div>
            <span className="ow-versus-y" aria-hidden="true">+</span>
            <div className="ow-versus-col es-web">
              <span className="ow-versus-icono web"><Search size={26} aria-hidden="true" /></span>
              <h3>Tu web</h3>
              <p className="ow-versus-frase">Te encuentra quien todavía no te conoce.</p>
              <p>En Google, en el mapa y en lo que contestan las IAs, que leen lo que hay escrito sobre ti.</p>
            </div>
          </div>
          <p className="ow-dato">
            <strong>58 %</strong> de los internautas españoles ya usa IA generativa (GfK DAM, 2026). Te lo contamos paso a paso en{" "}
            <Link href={OFERTA_WEB.articulo} prefetch={false}>SEO y GEO para entrenadores <ArrowRight size={14} aria-hidden="true" /></Link>
          </p>
        </div>
      </section>

      {/* ── PREGUNTAS ── */}
      <section className="ow-sec" aria-labelledby="ow-faq-t">
        <div className="container ow-estrecho">
          <p className="ow-antetitulo">Preguntas frecuentes</p>
          <h2 id="ow-faq-t" className="ow-h2">Lo que te estarás preguntando</h2>
          <div className="ow-faq">
            {preguntas.map(({ p, r }) => (
              <details key={p} className="ow-letra">
                <summary>{p}</summary>
                <p>{r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIERRE ── */}
      <section className="ow-final" aria-labelledby="ow-final-t">
        <div className="ow-final-luz" aria-hidden="true" />
        <div className="container ow-estrecho">
          <span className="ow-final-icono"><IconoOferta /></span>
          <SoloConOferta>
            <h2 id="ow-final-t" className="ow-h2">Cuando se acaben las {OFERTA_WEB.plazas}, se acabó.</h2>
            <p className="ow-final-texto">Hasta el {OFERTA_WEB.finTexto} a las 23:59 o hasta que se cubran las plazas.</p>
            <div className="ow-final-reloj">
              <CuentaAtras tam="grande" />
              <Plazas tam="grande" />
            </div>
          </SoloConOferta>
          <div id="reservar" className="ow-reservar">
            <OfertaWebReserva />
          </div>
        </div>
      </section>

      {/* ── LETRA PEQUEÑA ── */}
      <section className="ow-sec ow-sec-letra" aria-label="Letra pequeña">
        <div className="container ow-estrecho">
          <details className="ow-letra">
            <summary>Letra pequeña (que también se lee)</summary>
            <ul>
              {letraPequena.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </details>
        </div>
      </section>
    </main>
  );
}
