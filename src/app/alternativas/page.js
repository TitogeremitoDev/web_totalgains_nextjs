import Link from "next/link";

export const metadata = {
  title: "Alternativas Software Entrenadores 2026",
  description:
    "Compara TotalGains con Trainerize, Harbiz, MyPT Hub, TrueCoach, PTminder, Dudapp, Dudyfit y Virtuagym. El software para entrenadores personales más completo en español.",
  alternates: { canonical: "https://totalgains.es/alternativas/" },
  openGraph: {
    title: "TotalGains vs Competencia — Comparativas para Entrenadores Personales",
    description: "Tablas comparativas detalladas: IA, precios, soporte, app marca blanca. Descubre por qué los entrenadores eligen TotalGains.",
    url: "https://totalgains.es/alternativas/",
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains" }],
  },
  robots: { index: true, follow: true },
};

const alternativas = [
  { slug: "trainerize", name: "Trainerize", desc: "El más usado internacionalmente. Sin soporte en español y IA genérica." },
  { slug: "harbiz", name: "Harbiz", desc: "Popular en España. Tarifas por tramos de clientes que penalizan al crecer." },
  { slug: "mypthub", name: "MyPT Hub", desc: "Curva de aprendizaje alta. Sin IA propia ni app de marca blanca real." },
  { slug: "truecoach", name: "TrueCoach", desc: "Pensado para el mercado anglosajón. Base de alimentos en inglés." },
  { slug: "ptminder", name: "PTminder", desc: "Interfaz anticuada. Módulos separados que encarecen el precio final." },
  { slug: "dudapp", name: "Dudapp", desc: "Herramienta básica sin IA, sin cobros automáticos y sin app de marca blanca." },
  { slug: "dudyfit", name: "Dudyfit", desc: "App genérica sin personalización de marca ni generación IA de contenido." },
  { slug: "virtuagym", name: "Virtuagym", desc: "Diseñado para gimnasios. Pagas por funciones que nunca usarás como entrenador personal." },
];

export default function AlternativasHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Alternativas a software para entrenadores personales",
        description: "Comparativas de TotalGains con los principales competidores del mercado hispanohablante.",
        numberOfItems: alternativas.length,
        itemListElement: alternativas.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `TotalGains vs ${a.name}`,
          url: `https://totalgains.es/alternativas/${a.slug}/`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Alternativas", item: "https://totalgains.es/alternativas/" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1.25, marginBottom: 16 }}>
          TotalGains vs la Competencia
        </h1>
        <p style={{ fontSize: "1.05rem", color: "var(--text-secondary, #aaa)", lineHeight: 1.7, marginBottom: 56 }}>
          ¿Buscas una alternativa a tu software actual? Compara TotalGains con las principales herramientas para entrenadores personales en España y decide con datos reales.
        </p>

        <div style={{ display: "grid", gap: 16, marginBottom: 56 }}>
          {alternativas.map((a) => (
            <Link
              key={a.slug}
              href={`/alternativas/${a.slug}/`}
              style={{ display: "block", padding: "24px", background: "rgba(255,255,255,0.03)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none", transition: "border-color 0.2s" }}
            >
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 6, color: "var(--text-primary, #fff)" }}>
                TotalGains vs {a.name}
              </h2>
              <p style={{ margin: 0, color: "var(--text-secondary, #aaa)", fontSize: "0.9rem", lineHeight: 1.6 }}>{a.desc}</p>
            </Link>
          ))}
        </div>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Comparativa rápida: TotalGains frente a los 8 software más usados</h2>
          <p style={{ color: "var(--text-secondary, #aaa)", lineHeight: 1.7, marginBottom: 24 }}>
            Tabla resumen para tener una primera impresión antes de entrar al detalle de cada comparativa. Los precios de Harbiz y Trainerize están verificados manualmente en sus webs oficiales el 13 de mayo de 2026; el resto se cita según web oficial del proveedor.
          </p>
          <div style={{ overflowX: "auto", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead style={{ background: "rgba(255,255,255,0.04)" }}>
                <tr>
                  <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Software</th>
                  <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Idioma</th>
                  <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Precio entrada</th>
                  <th style={{ padding: 12, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>IA incluida</th>
                  <th style={{ padding: 12, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Marca blanca</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "rgba(34,197,94,0.06)" }}>
                  <td style={{ padding: 12, fontWeight: 700 }}>TotalGains</td>
                  <td style={{ padding: 12 }}>Español nativo</td>
                  <td style={{ padding: 12 }}>29,90 €/mes (25 clientes)</td>
                  <td style={{ padding: 12, textAlign: "center" }}>✅</td>
                  <td style={{ padding: 12, textAlign: "center" }}>✅ (Plan Pro)</td>
                </tr>
                <tr><td style={{ padding: 12 }}>Trainerize</td><td style={{ padding: 12 }}>Inglés</td><td style={{ padding: 12 }}>$10/mes (2 clientes)</td><td style={{ padding: 12, textAlign: "center" }}>❌ add-on</td><td style={{ padding: 12, textAlign: "center" }}>❌ $169 pago único</td></tr>
                <tr><td style={{ padding: 12 }}>Harbiz</td><td style={{ padding: 12 }}>Español</td><td style={{ padding: 12 }}>16,94 €/mes con IVA (5 cl, anual)</td><td style={{ padding: 12, textAlign: "center" }}>❌ add-on 18,14 €</td><td style={{ padding: 12, textAlign: "center" }}>❌ add-on 30,24 €</td></tr>
                <tr><td style={{ padding: 12 }}>MyPT Hub</td><td style={{ padding: 12 }}>Inglés</td><td style={{ padding: 12 }}>~25 €/mes (3 cl)</td><td style={{ padding: 12, textAlign: "center" }}>❌ add-on 17 €</td><td style={{ padding: 12, textAlign: "center" }}>❌ add-on 145 €</td></tr>
                <tr><td style={{ padding: 12 }}>TrueCoach</td><td style={{ padding: 12 }}>Inglés</td><td style={{ padding: 12 }}>$26,34/mes (5 cl)</td><td style={{ padding: 12, textAlign: "center" }}>❌</td><td style={{ padding: 12, textAlign: "center" }}>⚠️ Custom branding</td></tr>
                <tr><td style={{ padding: 12 }}>PTminder</td><td style={{ padding: 12 }}>Inglés</td><td style={{ padding: 12 }}>$59/mes (50 cl)</td><td style={{ padding: 12, textAlign: "center" }}>❌</td><td style={{ padding: 12, textAlign: "center" }}>❌ add-on $40</td></tr>
                <tr><td style={{ padding: 12 }}>Dudapp / Dudyfit</td><td style={{ padding: 12 }}>Español</td><td style={{ padding: 12 }}>Sin tarifa pública clara</td><td style={{ padding: 12, textAlign: "center" }}>❌</td><td style={{ padding: 12, textAlign: "center" }}>❌</td></tr>
                <tr><td style={{ padding: 12 }}>Virtuagym</td><td style={{ padding: 12 }}>Multi-idioma</td><td style={{ padding: 12 }}>Cuota gimnasio (no PT)</td><td style={{ padding: 12, textAlign: "center" }}>⚠️</td><td style={{ padding: 12, textAlign: "center" }}>⚠️</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 12 }}>
            Datos verificados a mayo 2026. Los precios sin IVA o con IVA se especifican expresamente cuando aplica. Recomendamos confirmar el precio final en la web del proveedor antes de tomar decisiones.
          </p>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Cómo elegir el software adecuado para tu negocio</h2>
          <p style={{ color: "var(--text-secondary, #aaa)", lineHeight: 1.7, marginBottom: 16 }}>
            Los tres criterios que más diferencian a las plataformas en 2026 son: <strong>idioma y soporte</strong>, <strong>modelo de precios</strong> (plano vs add-ons) y <strong>profundidad de la IA integrada</strong> (rutinas y nutrición).
          </p>
          <ul style={{ color: "var(--text-secondary, #aaa)", lineHeight: 1.8, paddingLeft: 20 }}>
            <li><strong>Si trabajas en España o Latinoamérica</strong>: el soporte en español y la base de alimentos hispanos hacen una diferencia operativa. Compara TotalGains con <Link href="/alternativas/harbiz/">Harbiz</Link> y <Link href="/alternativas/harbiz/precios/">sus precios reales</Link>.</li>
            <li><strong>Si tu funcionalidad requerida es alta</strong> (marca blanca + IA dietas + biblioteca de vídeos): el "precio base" es engañoso. Suma los add-ons obligatorios y compara totales finales, no entrada.</li>
            <li><strong>Si planeas escalar 50 → 200 clientes</strong>: las plataformas con tramos discretos (Harbiz, Trainerize, PTminder) suben de precio en saltos al cruzar volúmenes. TotalGains mantiene plan plano hasta 100 clientes (Pro) y luego ilimitado (Unlimited).</li>
            <li><strong>Si tu cliente está acostumbrado al ecosistema americano</strong> (MyFitnessPal, wearables): <Link href="/alternativas/trainerize/">Trainerize</Link> tiene mejor integración aunque pagues más por funcionalidad equivalente.</li>
          </ul>
        </section>

        <section style={{ textAlign: "center", padding: "40px 24px", background: "rgba(255,255,255,0.03)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 8 }}>¿Listo para el cambio?</h2>
          <p style={{ color: "var(--text-secondary, #aaa)", marginBottom: 24, fontSize: "0.95rem" }}>14 días gratis. Sin tarjeta. Sin compromiso. Migración asistida incluida.</p>
          <Link href="/onboarding" className="btn btn-primary btn-lg">Empieza gratis ahora</Link>
        </section>
      </main>
    </>
  );
}
