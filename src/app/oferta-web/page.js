import Link from "next/link";
import { LayoutTemplate, Globe, CalendarCheck, Mail, ClipboardList, Users } from "lucide-react";
import { OFERTA_WEB } from "@/data/ofertaWeb";
import OfertaWebCta from "./OfertaWebCta";

/* ──────────────────────────────────────────────
   /oferta-web — SERVER COMPONENT

   Oferta de noviembre de 2026 («Tu web incluida al pasarte al plan anual»).
   Datos en src/data/ofertaWeb.js. Página de un mes: noindex y FUERA del
   sitemap, para que no quede en Google cuando se quite. Se llega desde la
   franja del bloque de precios, el artículo de SEO y GEO, redes y el stand
   del Campeonato PCA (7 de noviembre).
   ────────────────────────────────────────────── */

export const metadata = {
  title: "Tu web incluida al pasarte al plan anual",
  description: `Oferta de noviembre para entrenadores: pásate al plan anual de TotalGains y te hacemos tu web. ${OFERTA_WEB.plazas} plazas, hasta el ${OFERTA_WEB.finTexto}.`,
  robots: { index: false, follow: true },
  alternates: { canonical: `https://totalgains.es${OFERTA_WEB.ruta}` },
};

const planes = [
  {
    icono: LayoutTemplate,
    nombre: "Starter",
    precio: "299 €/año",
    para: "Hasta 25 atletas",
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
    precio: "899 €/año y 1.499 €/año",
    para: "Hasta 100 atletas o sin límite",
    puntos: [
      "Web completa: tus servicios, tus resultados y tu contacto.",
      "En tu dominio y sin rastro de TotalGains, igual que tu app con marca blanca.",
      `Mantenimiento incluido: alojamiento y ${OFERTA_WEB.cambiosAlMes} cambios pequeños al mes.`,
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
    icono: Mail,
    titulo: "Escríbenos",
    texto: `Un correo a ${OFERTA_WEB.email} con el asunto «Quiero mi web» y te reservamos la plaza.`,
  },
  {
    icono: ClipboardList,
    titulo: "Nos pasas tus datos",
    texto: "Te mandamos un formulario corto (logo, colores, servicios, fotos y contacto) y con eso montamos tu web.",
  },
];

const letraPequena = [
  `Hay ${OFERTA_WEB.plazas} plazas y se dan por orden de llegada.`,
  `La oferta acaba el ${OFERTA_WEB.finTexto} de 2026 a las 23:59 (hora peninsular) o cuando se cubran las plazas, lo que pase antes.`,
  "Es para los planes anuales de entrenador (Starter, Pro y Unlimited) contratados durante la oferta.",
  "El dominio propio, si quieres uno, lo contratas tú. En Starter, sin dominio, la web va en tunombre.totalgains.es.",
  "La web incluye lo básico para que Google la entienda. Un trabajo continuado de posicionamiento (SEO y GEO) es un servicio aparte.",
  "Si te das de baja de TotalGains, te llevas tu web o mantienes el alojamiento pagándolo aparte.",
];

const caja = { padding: "28px 24px", borderRadius: 20 };

export default function OfertaWebPage() {
  return (
    <main style={{ padding: "clamp(96px, 12vw, 150px) 0 96px" }}>
      <div className="container" style={{ maxWidth: 960 }}>
        <header style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ display: "inline-flex", alignItems: "center", gap: 8, margin: "0 0 18px", padding: "6px 14px", borderRadius: 999, fontSize: "0.85rem", fontWeight: 700, color: "#fa709a", background: "rgba(250,112,154,0.12)", border: "1px solid rgba(250,112,154,0.4)" }}>
            <Users size={15} aria-hidden="true" /> Oferta de noviembre · {OFERTA_WEB.plazas} plazas
          </p>
          <h1 className="gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3.1rem)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 18px" }}>
            Una oferta que da miedo… a tu competencia
          </h1>
          <p style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)", color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto 28px" }}>
            Pásate al plan anual de TotalGains y <strong style={{ color: "var(--text-primary)" }}>te hacemos tu web</strong>: con tu nombre, tus servicios y tu contacto, para que quien te busque en Google o en una IA encuentre algo que contar de ti.
          </p>
          <OfertaWebCta />
          <p style={{ margin: "18px 0 0", fontSize: "0.9rem", color: "var(--text-muted)" }}>
            Hasta el {OFERTA_WEB.finTexto} o hasta que se acaben las plazas.
          </p>
        </header>

        <section aria-labelledby="que-web" style={{ marginBottom: 56 }}>
          <h2 id="que-web" style={{ fontSize: "1.6rem", fontWeight: 800, textAlign: "center", margin: "0 0 24px" }}>
            Qué web te llevas
          </h2>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            {planes.map(({ icono: Icono, nombre, precio, para, puntos }) => (
              <article key={nombre} className="glass" style={{ ...caja, flex: "1 1 340px", minWidth: 0 }}>
                <p style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 6px", fontSize: "1.25rem", fontWeight: 800 }}>
                  <Icono size={22} color="#667eea" aria-hidden="true" /> {nombre}
                </p>
                <p style={{ margin: "0 0 18px", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)", whiteSpace: "nowrap" }}>{precio}</strong> · {para}
                </p>
                <ul style={{ margin: 0, paddingLeft: 20, color: "var(--text-secondary)", lineHeight: 1.65, fontSize: "0.97rem" }}>
                  {puntos.map((p) => <li key={p} style={{ marginBottom: 6 }}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p style={{ margin: "18px 0 0", textAlign: "center", fontSize: "0.9rem", color: "var(--text-muted)" }}>
            Precios con IVA. El plan anual son 10 mensualidades: <Link href="/precios/" style={{ color: "var(--text-secondary)", textDecoration: "underline" }}>ver los planes</Link>.
          </p>
        </section>

        <section aria-labelledby="como" style={{ marginBottom: 56 }}>
          <h2 id="como" style={{ fontSize: "1.6rem", fontWeight: 800, textAlign: "center", margin: "0 0 24px" }}>
            Cómo conseguirla
          </h2>
          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: 18, flexWrap: "wrap" }}>
            {pasos.map(({ icono: Icono, titulo, texto }, i) => (
              <li key={titulo} className="glass" style={{ ...caja, flex: "1 1 260px", minWidth: 0 }}>
                <p style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 10px", fontWeight: 800, fontSize: "1.05rem" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 30, height: 30, borderRadius: 999, background: "rgba(102,126,234,0.18)", color: "#8b9df8", fontSize: "0.95rem" }}>{i + 1}</span>
                  <Icono size={18} color="#667eea" aria-hidden="true" /> {titulo}
                </p>
                <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>{texto}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="por-que" className="glass" style={{ ...caja, marginBottom: 56, textAlign: "center" }}>
          <h2 id="por-que" style={{ fontSize: "1.3rem", fontWeight: 800, margin: "0 0 10px" }}>
            ¿Para qué quiero una web si ya tengo Instagram?
          </h2>
          <p style={{ margin: "0 auto", maxWidth: 680, color: "var(--text-secondary)", lineHeight: 1.65 }}>
            Instagram te sirve con quien ya te sigue. Quien todavía no te conoce te busca en Google o se lo pregunta a ChatGPT, y ahí lo que cuenta es lo que esté escrito sobre ti. Te lo explicamos paso a paso en{" "}
            <Link href={OFERTA_WEB.articulo} style={{ color: "#fa709a", fontWeight: 700 }}>SEO y GEO para entrenadores: cómo te encuentran tus próximos clientes</Link>.
          </p>
        </section>

        <section aria-labelledby="letra">
          <h2 id="letra" style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 12px" }}>
            Letra pequeña (que también se lee)
          </h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: "var(--text-muted)", lineHeight: 1.65, fontSize: "0.92rem" }}>
            {letraPequena.map((t) => <li key={t} style={{ marginBottom: 6 }}>{t}</li>)}
          </ul>
        </section>
      </div>
    </main>
  );
}
