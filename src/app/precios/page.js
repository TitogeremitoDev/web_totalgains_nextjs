import Link from "next/link";
import Pricing from "@/components/Pricing";
import { softwareApplicationNode, organizationNode } from "@/data/productSchema";
import "./precios.css";

/* ──────────────────────────────────────────────
   /precios — SERVER COMPONENT

   El precio vivía SOLO como sección #pricing de la home: no era enlazable, ni
   compartible, ni indexable por separado, ni utilizable como destino de un
   anuncio. Esta página le da URL propia. La sección de la home se queda donde
   está —forma parte de su recorrido— y no se canonicaliza aquí: son páginas
   distintas, no duplicados.

   El titular sale del propio <Pricing> con headingAs="h1" para no competir con
   un h1 aparte que dijese lo mismo.
   ────────────────────────────────────────────── */

export const metadata = {
  title: { absolute: "Precios de TotalGains 2026: plan gratis y desde 29,90 €" },
  description:
    "Todos los planes con IVA incluido: gratuito de por vida hasta 5 atletas, Starter 29,90 €, Pro 89,90 € y Unlimited. Sin permanencia y sin tarjeta.",
  alternates: { canonical: "https://totalgains.es/precios/" },
  openGraph: {
    title: "Precios de TotalGains: planes para entrenadores y gimnasios",
    description:
      "Plan gratuito permanente hasta 5 atletas y planes de pago desde 29,90 €/mes con IVA incluido. Sin permanencia.",
    url: "https://totalgains.es/precios/",
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "Precios de TotalGains" }],
  },
  robots: { index: true, follow: true },
};

export default function PreciosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      // Trae el AggregateOffer con lowPrice 0: es lo que impide que Google y las
      // IAs crean que lo más barato son 29,90 €.
      softwareApplicationNode({
        description:
          "Software español para entrenadores personales, nutricionistas y gimnasios. Plan gratuito permanente hasta 5 atletas y planes de pago desde 29,90 €/mes con IVA incluido.",
      }),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Precios", item: "https://totalgains.es/precios/" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="precios-page">
        <div className="container precios-top">
          <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
            <ol style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="/" style={{ color: "inherit" }}>Inicio</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" style={{ color: "var(--text-secondary)" }}>Precios</li>
            </ol>
          </nav>
        </div>

        <Pricing headingAs="h1" />

        {/* Las páginas de intención de precio estaban sueltas: la comparativa de
            tarifas de Harbiz no tenía a dónde derivar y acababa enlazando al
            competidor mejor que a nosotros. */}
        <section className="precios-related">
          <h2>¿Estás comparando precios?</h2>
          <p>Estas páginas desglosan lo que cuesta cada alternativa, con el IVA ya aplicado.</p>
          <ul className="precios-related-links">
            <li><Link href="/alternativas/harbiz/precios/" prefetch={false}>Precios de Harbiz 2026</Link></li>
            <li><Link href="/alternativas/harbiz/" prefetch={false}>TotalGains vs Harbiz</Link></li>
            <li><Link href="/alternativas/trainerize/" prefetch={false}>TotalGains vs Trainerize</Link></li>
            <li><Link href="/alternativas/" prefetch={false}>Todas las comparativas</Link></li>
            <li><Link href="/para-gimnasios/" prefetch={false}>Tarifas para gimnasios</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
