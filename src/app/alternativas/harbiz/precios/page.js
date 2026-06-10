import Link from "next/link";
import "@/app/alternativas/trainerize/Alternativas.css";

export const metadata = {
  title: "Precios Harbiz 2026: Planes y Add-ons (con IVA)",
  description:
    "Tablas verificadas de precios Harbiz Basic, Pro y My APP en 2026: mensual y anual, todos los tramos, todos los add-ons. Datos actualizados manualmente en mayo de 2026 con IVA 21% aplicado.",
  keywords: [
    "Harbiz precios",
    "Harbiz precios 2026",
    "cuánto cuesta Harbiz",
    "Harbiz planes",
    "Harbiz add-ons",
    "tarifas Harbiz",
  ],
  alternates: {
    canonical: "https://totalgains.es/alternativas/harbiz/precios/",
  },
  openGraph: {
    title: "Precios Harbiz 2026: Todos los Planes y Add-ons (con IVA)",
    description:
      "Tablas completas de precios Harbiz verificadas en mayo de 2026. Plan Basic, Pro y My APP. Add-ons explicados.",
    url: "https://totalgains.es/alternativas/harbiz/precios/",
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains" }],
  },
  robots: { index: true, follow: true },
};

const VERIFIED_DATE_ISO = "2026-05-13";

const basicMensual = [
  { c: "Hasta 5", sinIva: "19 €/mes", conIva: "22,99 €/mes" },
  { c: "Hasta 15", sinIva: "39 €/mes", conIva: "47,19 €/mes" },
  { c: "Hasta 30", sinIva: "69 €/mes", conIva: "83,49 €/mes" },
  { c: "Hasta 40", sinIva: "99 €/mes", conIva: "119,79 €/mes" },
];

const proMensual = [
  { c: "Hasta 50", sinIva: "119 €/mes", conIva: "143,99 €/mes" },
  { c: "Hasta 75", sinIva: "169 €/mes", conIva: "204,49 €/mes" },
  { c: "Hasta 100", sinIva: "199 €/mes", conIva: "240,79 €/mes" },
  { c: "Hasta 200", sinIva: "224 €/mes", conIva: "271,04 €/mes" },
  { c: "Hasta 500", sinIva: "249 €/mes", conIva: "301,29 €/mes" },
  { c: "Hasta 5.000", sinIva: "349 €/mes", conIva: "422,29 €/mes" },
  { c: "+5.000", sinIva: "Precio personalizado", conIva: "Precio personalizado" },
];

const myappMensual = [
  { c: "Hasta 50", sinIva: "199 €/mes", conIva: "240,79 €/mes" },
  { c: "Hasta 75", sinIva: "229 €/mes", conIva: "277,09 €/mes" },
  { c: "Hasta 100", sinIva: "259 €/mes", conIva: "313,39 €/mes" },
  { c: "Hasta 200", sinIva: "284 €/mes", conIva: "343,64 €/mes" },
  { c: "Hasta 500", sinIva: "309 €/mes", conIva: "373,89 €/mes" },
  { c: "Hasta 5.000", sinIva: "399 €/mes", conIva: "482,79 €/mes" },
  { c: "+5.000", sinIva: "Precio personalizado", conIva: "Precio personalizado" },
];

const basicAnual = [
  { c: "Hasta 5", sinIva: "14 €/mes", conIva: "16,94 €/mes" },
  { c: "Hasta 15", sinIva: "29 €/mes", conIva: "35,09 €/mes" },
  { c: "Hasta 30", sinIva: "52 €/mes", conIva: "62,92 €/mes" },
  { c: "Hasta 40", sinIva: "74 €/mes", conIva: "89,54 €/mes" },
];

const proAnual = [
  { c: "Hasta 50", sinIva: "89 €/mes", conIva: "107,69 €/mes" },
  { c: "Hasta 75", sinIva: "127 €/mes", conIva: "153,67 €/mes" },
  { c: "Hasta 100", sinIva: "149 €/mes", conIva: "180,29 €/mes" },
  { c: "Hasta 200", sinIva: "168 €/mes", conIva: "203,28 €/mes" },
  { c: "Hasta 500", sinIva: "187 €/mes", conIva: "226,27 €/mes" },
  { c: "Hasta 5.000", sinIva: "262 €/mes", conIva: "317,02 €/mes" },
];

const myappAnual = [
  { c: "Hasta 50", sinIva: "149 €/mes", conIva: "180,29 €/mes" },
  { c: "Hasta 75", sinIva: "172 €/mes", conIva: "208,12 €/mes" },
  { c: "Hasta 100", sinIva: "194 €/mes", conIva: "234,74 €/mes" },
  { c: "Hasta 200", sinIva: "213 €/mes", conIva: "257,73 €/mes" },
  { c: "Hasta 500", sinIva: "232 €/mes", conIva: "280,72 €/mes" },
  { c: "Hasta 5.000", sinIva: "299 €/mes", conIva: "361,79 €/mes" },
];

function TramoTable({ title, rows }) {
  return (
    <div style={{ margin: "24px 0" }}>
      <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 12 }}>{title}</h3>
      <div className="comparison-table-container glass">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Tramo clientes</th>
              <th>Sin IVA</th>
              <th>Con IVA 21 % (España)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="feature-name">{r.c}</td>
                <td>{r.sinIva}</td>
                <td><strong>{r.conIva}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "¿Tiene Harbiz prueba gratuita?",
    a: "Sí. Harbiz ofrece 14 días de prueba sin tarjeta de crédito en su web oficial (verificado mayo 2026).",
  },
  {
    q: "¿Hay descuento por facturación anual en Harbiz?",
    a: "Sí. La facturación anual aplica un descuento del 25 % sobre el precio mensual del plan base. El descuento no se aplica sobre los add-ons.",
  },
  {
    q: "¿Qué incluye el add-on Nutri AI de Harbiz?",
    a: "Nutri AI es el add-on de Harbiz para generación asistida de planes nutricionales con IA. Cuesta 14,99 €/mes sin IVA (18,14 €/mes con IVA 21%) y se cobra aparte del plan base.",
  },
  {
    q: "¿Cuánto cuesta cambiar de plan o subir de tramo en Harbiz?",
    a: "Harbiz no documenta un coste de cambio: el precio del nuevo tramo se aplica directamente. Al pasar de Pro 50 a Pro 100, por ejemplo, el coste mensual sube de 143,99 € a 240,79 € con IVA.",
  },
  {
    q: "¿Hay penalización por volumen de clientes en Harbiz?",
    a: "Harbiz factura por tramos discretos (5, 15, 30, 40, 50, 75, 100, 200, 500, 5.000). No hay penalización dinámica, pero al cruzar un tramo se pasa al siguiente precio fijo, sin proración por número exacto de clientes.",
  },
  {
    q: "¿Vale la pena Harbiz My APP frente al add-on Personaliza tu app?",
    a: "Depende del tramo. My APP a 100 clientes con IVA cuesta 313,39 €/mes; Pro 100 + add-on Personaliza tu app sale a 240,79 € + 30,24 € = 271,03 €/mes. La diferencia es de ~42 €/mes a favor del Pro + add-on, salvo que el plan My APP incluya funcionalidades extra que la web no documente públicamente.",
  },
];

export default function HarbizPreciosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://totalgains.es/alternativas/harbiz/precios/#article",
        headline: "Precios Harbiz 2026: Todos los Planes y Add-ons (con IVA)",
        description:
          "Tablas verificadas de precios Harbiz Basic, Pro y My APP en 2026: mensual y anual, todos los tramos, todos los add-ons. Datos actualizados manualmente en mayo de 2026 con IVA 21% aplicado.",
        image: {
          "@type": "ImageObject",
          url: "https://totalgains.es/og-image.jpg",
          width: 1200,
          height: 630,
        },
        datePublished: "2026-05-13",
        dateModified: VERIFIED_DATE_ISO,
        inLanguage: "es",
        wordCount: 1450,
        author: { "@type": "Person", "@id": "https://totalgains.es/#founder", name: "Germán Martínez Calvente", url: "https://totalgains.es/sobre-nosotros/" },
        publisher: { "@id": "https://totalgains.es/#organization" },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://totalgains.es/alternativas/harbiz/precios/",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Alternativas", item: "https://totalgains.es/alternativas/" },
          { "@type": "ListItem", position: 3, name: "Alternativa a Harbiz", item: "https://totalgains.es/alternativas/harbiz/" },
          { "@type": "ListItem", position: 4, name: "Precios Harbiz 2026", item: "https://totalgains.es/alternativas/harbiz/precios/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://totalgains.es/alternativas/harbiz/precios/#faqs",
        mainEntity: faqs.map((f, i) => ({
          "@type": "Question",
          "@id": `https://totalgains.es/alternativas/harbiz/precios/#faq-${i + 1}`,
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "Product",
        "@id": "https://totalgains.es/alternativas/harbiz/precios/#product-harbiz",
        name: "Harbiz",
        description: "Plataforma SaaS para entrenadores personales y centros fitness. Tres planes (Basic, Pro, My APP) con tramos por número de clientes y tres add-ons opcionales. Datos verificados manualmente en harbiz.io el 13 de mayo de 2026.",
        image: "https://totalgains.es/images/blog/logos/logo-harbiz.webp",
        brand: { "@type": "Brand", name: "Harbiz" },
        url: "https://www.harbiz.io/",
        offers: {
          "@type": "AggregateOffer",
          "@id": "https://totalgains.es/alternativas/harbiz/precios/#offers-harbiz",
          lowPrice: 16.94,
          highPrice: 482.79,
          priceCurrency: "EUR",
          offerCount: 22,
          availability: "https://schema.org/InStock",
          url: "https://www.harbiz.io/",
          image: "https://totalgains.es/images/blog/logos/logo-harbiz.webp",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://totalgains.es/alternativas/harbiz/precios/#itemlist-planes",
        name: "Planes y add-ons de Harbiz 2026",
        description: "Listado verificado de planes Harbiz Basic, Pro y My APP con add-ons opcionales (Personaliza tu app, Nutri AI, Biblioteca de Vídeos). Precios mostrados con IVA 21% para España. Verificado mayo 2026.",
        numberOfItems: 6,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Offer",
              name: "Harbiz Basic (anual, 5 clientes)",
              description: "Plan de entrada Basic con facturación anual y descuento -25% para hasta 5 clientes.",
              price: 16.94,
              priceCurrency: "EUR",
              priceSpecification: { "@type": "UnitPriceSpecification", price: 16.94, priceCurrency: "EUR", unitText: "MES" },
              availability: "https://schema.org/InStock",
              url: "https://www.harbiz.io/",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Offer",
              name: "Harbiz Pro 100 (mensual)",
              description: "Plan Pro 100 clientes facturación mensual. Sin marca blanca incluida.",
              price: 240.79,
              priceCurrency: "EUR",
              priceSpecification: { "@type": "UnitPriceSpecification", price: 240.79, priceCurrency: "EUR", unitText: "MES" },
              availability: "https://schema.org/InStock",
              url: "https://www.harbiz.io/",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Offer",
              name: "Harbiz My APP 100 (mensual)",
              description: "Plan My APP 100 clientes con marca blanca incluida, facturación mensual.",
              price: 313.39,
              priceCurrency: "EUR",
              priceSpecification: { "@type": "UnitPriceSpecification", price: 313.39, priceCurrency: "EUR", unitText: "MES" },
              availability: "https://schema.org/InStock",
              url: "https://www.harbiz.io/",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "Offer",
              name: "Add-on: Personaliza tu app",
              description: "Add-on para personalizar la app con marca propia. Acumulable sobre plan Pro.",
              price: 30.24,
              priceCurrency: "EUR",
              priceSpecification: { "@type": "UnitPriceSpecification", price: 30.24, priceCurrency: "EUR", unitText: "MES" },
              availability: "https://schema.org/InStock",
              url: "https://www.harbiz.io/",
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "Offer",
              name: "Add-on: Nutri AI",
              description: "Add-on de generación de planes nutricionales asistida por IA.",
              price: 18.14,
              priceCurrency: "EUR",
              priceSpecification: { "@type": "UnitPriceSpecification", price: 18.14, priceCurrency: "EUR", unitText: "MES" },
              availability: "https://schema.org/InStock",
              url: "https://www.harbiz.io/",
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@type": "Offer",
              name: "Add-on: Biblioteca de Vídeos",
              description: "Add-on de acceso a videoteca ampliada de ejercicios.",
              price: 24.19,
              priceCurrency: "EUR",
              priceSpecification: { "@type": "UnitPriceSpecification", price: 24.19, priceCurrency: "EUR", unitText: "MES" },
              availability: "https://schema.org/InStock",
              url: "https://www.harbiz.io/",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="alternativas-page">
        <div className="container alternativas-container">
          <div className="alternativas-header">
            <span style={{ fontSize: "0.78rem", color: "var(--text-secondary,#aaa)", display: "block", marginBottom: 4 }}>
              Actualizado: 13 de mayo de 2026 · Verificado manualmente en harbiz.com
            </span>
            <h1 className="alternativas-title gradient-text">Precios Harbiz 2026: todos los planes y add-ons explicados</h1>
            <p className="alternativas-subtitle mt-4">
              Tablas completas de precios Harbiz para 2026. Tres planes (Basic, Pro y My APP), facturación mensual y anual con descuento del 25 %, y add-ons opcionales. Datos verificados manualmente en la web oficial de Harbiz el 13 de mayo de 2026, con IVA 21 % aplicado para España.
            </p>
          </div>

          <section className="alternativas-section glass" style={{ padding: 28, borderRadius: 16, margin: "32px 0" }}>
            <h2>Resumen rápido</h2>
            <ul>
              <li>Precio de entrada Basic anual: <strong>14 €/mes sin IVA</strong> (16,94 €/mes con IVA) hasta 5 clientes.</li>
              <li>Plan Pro más popular (50 clientes, anual): <strong>89 €/mes sin IVA</strong> (107,69 €/mes con IVA).</li>
              <li>Plan con marca blanca incluida (My APP, 50 clientes, anual): <strong>149 €/mes sin IVA</strong> (180,29 €/mes con IVA).</li>
              <li>Add-ons acumulables al plan base: <strong>Personaliza tu app</strong> (30,24 €/mes con IVA), <strong>Nutri AI</strong> (18,14 €/mes), <strong>Biblioteca de Vídeos</strong> (24,19 €/mes).</li>
              <li>Descuento por facturación anual: <strong>-25 % sobre el plan base</strong> (no aplica a add-ons).</li>
            </ul>
          </section>

          <section className="alternativas-section" style={{ margin: "32px 0" }}>
            <h2>Plan Basic — entrenador autónomo iniciando</h2>
            <p>Plan económico para coaches que están empezando, con hasta 40 clientes. Pensado para gestionar entrenamientos y nutrición básicos.</p>
            <TramoTable title="Facturación mensual (con IVA y sin IVA)" rows={basicMensual} />
            <TramoTable title="Facturación anual (-25 %, precio mensual equivalente)" rows={basicAnual} />
          </section>

          <section className="alternativas-section" style={{ margin: "32px 0" }}>
            <h2>Plan Pro — entrenador establecido</h2>
            <p>Plan principal de Harbiz, con tramos desde 50 hasta 5.000 clientes. Sin app de marca blanca incluida: si la necesitas, hay que sumar el add-on Personaliza tu app o cambiar al plan My APP.</p>
            <TramoTable title="Facturación mensual" rows={proMensual} />
            <TramoTable title="Facturación anual (-25 %)" rows={proAnual} />
          </section>

          <section className="alternativas-section" style={{ margin: "32px 0" }}>
            <h2>Plan My APP — entrenador con marca blanca incluida</h2>
            <p>El plan superior de Harbiz incluye la app personalizada con la marca del entrenador. Conviene cuando la diferencia frente a Pro + add-on Personaliza no es muy grande (compárese tramo a tramo).</p>
            <TramoTable title="Facturación mensual" rows={myappMensual} />
            <TramoTable title="Facturación anual (-25 %)" rows={myappAnual} />
          </section>

          <section className="alternativas-section glass" style={{ padding: 28, borderRadius: 16, margin: "48px 0" }}>
            <h2>Add-ons obligatorios para funcionalidad completa</h2>
            <p>Los add-ons se acumulan sobre el plan base y se facturan por separado. Estos son los tres principales (precios con IVA 21 % aplicado):</p>
            <ul>
              <li><strong>Personaliza tu app</strong> — 30,24 €/mes. Personaliza la app para que tus clientes la vean con tu marca, logo y colores. Equivalente al add-on White-Label de otras plataformas. No necesario si ya estás en el plan My APP.</li>
              <li><strong>Nutri AI</strong> — 18,14 €/mes. Generador de planes nutricionales con IA. Si vendes seguimiento nutricional como parte de tu propuesta, este add-on es prácticamente obligatorio.</li>
              <li><strong>Biblioteca de Vídeos</strong> — 24,19 €/mes. Acceso a la videoteca ampliada de ejercicios. Útil si no quieres grabar todos tus vídeos demostrativos.</li>
            </ul>
          </section>

          <section className="alternativas-section glass" style={{ padding: 28, borderRadius: 16, margin: "48px 0" }}>
            <h2>Cuánto cuestan realmente todas las funcionalidades</h2>
            <p>Para tener la <strong>funcionalidad equivalente</strong> a lo que muchas alternativas incluyen "todo en uno" (plan + marca blanca + IA nutrición + vídeos), un coach en Harbiz necesita combinar plan base más add-ons:</p>
            <div className="comparison-table-container glass">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Configuración (100 clientes)</th>
                    <th>Mensual con IVA</th>
                    <th>Anual con IVA (mes equivalente)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="feature-name">Pro 100 base</td>
                    <td>240,79 €</td>
                    <td>180,29 €</td>
                  </tr>
                  <tr>
                    <td className="feature-name">+ Personaliza tu app</td>
                    <td>+30,24 €</td>
                    <td>+30,24 €</td>
                  </tr>
                  <tr>
                    <td className="feature-name">+ Nutri AI</td>
                    <td>+18,14 €</td>
                    <td>+18,14 €</td>
                  </tr>
                  <tr>
                    <td className="feature-name">+ Biblioteca de Vídeos</td>
                    <td>+24,19 €</td>
                    <td>+24,19 €</td>
                  </tr>
                  <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                    <td className="feature-name"><strong>Total Pro + 3 add-ons</strong></td>
                    <td><strong>313,36 €/mes</strong></td>
                    <td><strong>252,86 €/mes</strong></td>
                  </tr>
                  <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                    <td className="feature-name"><strong>Alternativa: plan My APP 100</strong></td>
                    <td><strong>313,39 €/mes</strong> (= Pro+addons)</td>
                    <td><strong>234,74 €/mes</strong> (mejor)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 16 }}><em>En facturación mensual la diferencia entre las dos rutas es prácticamente cero. En anual, My APP sale más barato (~18 €/mes menos) porque el descuento del 25 % se aplica sobre la base más alta del plan, mientras que los add-ons no descuentan.</em></p>
          </section>

          <section className="alternativas-section glass" style={{ padding: 28, borderRadius: 16, margin: "48px 0", borderColor: "rgba(34,197,94,0.4)" }}>
            <h2>¿Cuánto cuesta una alternativa a Harbiz?</h2>
            <p>Para entrenadores que no quieran gestionar add-ons acumulables, <strong>TotalGains Pro</strong> incluye toda la funcionalidad equivalente (marca blanca, IA dietas, IA rutinas, biblioteca de vídeos, base de +240.000 alimentos personalizable) por <strong>89,90 €/mes</strong> con hasta 100 clientes y migración asistida en español incluida. Diferencia frente a Harbiz Pro 100 con add-ons completos en mensual: <strong>-223 €/mes</strong>. Frente a Harbiz My APP anual: <strong>-145 €/mes</strong> (~1.730 € al año).</p>
            <p style={{ marginTop: 16 }}>
              <Link href="/alternativas/harbiz/" className="btn btn-secondary" prefetch={false}>
                Ver comparativa completa TotalGains vs Harbiz →
              </Link>{" "}
              <Link href="/onboarding" className="btn btn-primary" prefetch={false}>
                Probar TotalGains gratis 14 días 🚀
              </Link>
            </p>
            <p style={{ marginTop: 24, fontSize: "0.92rem", color: "var(--text-secondary,#aaa)" }}>
              📖 ¿Quieres el análisis editorial completo, plan por plan, con escenarios de decisión y comparativa con Trainerize?{" "}
              <Link href="/blog/harbiz-precios-2026/" prefetch={false}>
                Lee la guía Harbiz Precios 2026 en el blog
              </Link>.
            </p>
          </section>

          <section className="alternativas-faq" style={{ margin: "48px 0" }}>
            <h2>Preguntas frecuentes sobre precios de Harbiz</h2>
            <div className="faq-grid">
              {faqs.map((f, i) => (
                <div key={i} className="faq-card glass">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <p style={{ fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16, marginTop: 48 }}>
            <strong>Fuente y disclaimer.</strong> Precios verificados manualmente en <a href="https://www.harbiz.io/" rel="nofollow" target="_blank">harbiz.io</a> el 13 de mayo de 2026. La web oficial de Harbiz muestra precios sin IVA. Aquí se aplica el IVA 21 % estándar de España; para México (16 %), Colombia (19 %) o Argentina (21 %) el cálculo varía. Recomendamos confirmar el precio final con Harbiz antes de tomar decisiones. Esta página es informativa y no está afiliada a Harbiz.
          </p>
        </div>
      </main>
    </>
  );
}
