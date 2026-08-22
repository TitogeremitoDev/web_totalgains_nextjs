import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Rocket, Star, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Casos de Éxito: Entrenadores y Nutricionistas",
  description:
    "Coaches reales que escalaron con TotalGains: Nacho Pulido pasó de 15 a 40 clientes y Lorena Eses ahorra 10 h/semana. Entrevistas completas, sin humo.",
  alternates: { canonical: "https://totalgains.es/casos-de-exito/" },
  openGraph: {
    title: "Casos de Éxito TotalGains | Coaches y Nutricionistas Reales",
    description:
      "Historias documentadas de entrenadores y nutricionistas que transformaron su gestión con TotalGains. Métricas verificables, no marketing.",
    url: "https://totalgains.es/casos-de-exito/",
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains" }],
  },
  robots: { index: true, follow: true },
};

const cases = [
  {
    slug: "nacho-pulido",
    name: "Nacho Pulido",
    handle: "@puli.trainer",
    role: "Entrenador de Fuerza & Resistencia",
    avatar: "/testimonials/nacho.webp",
    quote:
      "Tener todo centralizado — clientes, entrenamientos, seguimiento y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana.",
    keyResult: "15 → 40+ clientes",
    keySub: "8-10 h/sem ahorradas",
    accent: "#3b82f6",
  },
  {
    slug: "lorena-eses",
    name: "Lorena Eses",
    handle: "@lorena.eses",
    role: "Nutricionista Online · 28K seguidores",
    avatar: "/testimonials/lorena.webp",
    quote:
      "He automatizado revisiones, citas y seguimiento. Ahora ofrezco un servicio más profesional a mis pacientes y ahorro más de 10 horas semanales de gestión.",
    keyResult: "+10 h/sem ahorradas",
    keySub: "revisiones y citas 100 % automatizadas",
    accent: "#22c55e",
  },
];

export default function CasosDeExitoHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://totalgains.es/casos-de-exito/#collection",
        name: "Casos de Éxito de TotalGains",
        description: "Coaches y nutricionistas hispanohablantes que documentan su crecimiento con TotalGains con métricas verificables.",
        url: "https://totalgains.es/casos-de-exito/",
        inLanguage: "es",
        isPartOf: { "@id": "https://totalgains.es/#website" },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: cases.length,
          itemListElement: cases.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://totalgains.es/casos-de-exito/${c.slug}/`,
            name: `${c.name} — ${c.role}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Casos de éxito", item: "https://totalgains.es/casos-de-exito/" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main style={{ minHeight: "80vh", padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: "0 0 16px" }}>
            <ol style={{ display: "flex", flexWrap: "wrap", gap: 6, listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Inicio</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" style={{ color: "var(--text-secondary,#ccc)" }}>Casos de éxito</li>
            </ol>
          </nav>

          <header style={{ textAlign: "center", marginBottom: 48 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                background: "rgba(34,197,94,0.15)",
                border: "1px solid rgba(34,197,94,0.35)",
                color: "#22c55e",
                borderRadius: 100,
                fontSize: "0.78rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 0.5,
                marginBottom: 16,
              }}
            >
              <TrendingUp size={14} /> Historias reales
            </span>
            <h1
              className="gradient-text"
              style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", lineHeight: 1.15, marginBottom: 16 }}
            >
              Casos de éxito de coaches y nutricionistas reales
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.6, maxWidth: 720, margin: "0 auto" }}>
              Sin humo, sin métricas maquilladas. Aquí solo aparecen coaches y nutricionistas que documentaron
              su crecimiento con TotalGains con datos verificables y cita literal. Si quieres estar en esta
              página, escríbeme.
            </p>
          </header>

          {/* Grid de casos */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
              marginBottom: 64,
            }}
          >
            {cases.map((c) => (
              <article
                key={c.slug}
                className="glass"
                style={{
                  padding: 28,
                  borderRadius: 20,
                  border: `1px solid ${c.accent}44`,
                  background: `linear-gradient(180deg, ${c.accent}0F 0%, transparent 100%)`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <header style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Image
                    src={c.avatar}
                    alt={c.name}
                    width={64}
                    height={64}
                    style={{ borderRadius: "50%", border: `2px solid ${c.accent}88`, objectFit: "cover" }}
                  />
                  <div style={{ minWidth: 0 }}>
                    <h2 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>
                      {c.name}
                    </h2>
                    <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-secondary,#aaa)" }}>{c.role}</p>
                    <p style={{ margin: "2px 0 0", fontSize: "0.78rem", color: c.accent, fontWeight: 700 }}>{c.handle}</p>
                  </div>
                </header>

                <div
                  style={{
                    padding: "14px 16px",
                    background: `${c.accent}18`,
                    border: `1px solid ${c.accent}55`,
                    borderRadius: 12,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.35rem", fontWeight: 800, color: c.accent, lineHeight: 1.15 }}>
                    {c.keyResult}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-secondary,#aaa)", marginTop: 4 }}>
                    {c.keySub}
                  </div>
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    lineHeight: 1.55,
                    color: "var(--text-primary,#ddd)",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{c.quote}&rdquo;
                </p>

                <Link
                  href={`/casos-de-exito/${c.slug}/`}
                  prefetch={false}
                  style={{
                    marginTop: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "12px 20px",
                    background: c.accent,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    borderRadius: 100,
                  }}
                >
                  Leer caso completo <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </section>

          {/* CTA final con bloque canónico */}
          <section
            className="glass"
            style={{
              padding: 32,
              borderRadius: 20,
              textAlign: "center",
              border: "1px solid rgba(34,197,94,0.3)",
              background: "linear-gradient(180deg, rgba(34,197,94,0.06) 0%, transparent 100%)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                marginBottom: 12,
              }}
            >
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
              ))}
              <Star size={16} fill="url(#half-hub)" color="#fbbf24" />
              <svg width="0" height="0" style={{ position: "absolute" }}>
                <defs>
                  <linearGradient id="half-hub">
                    <stop offset="60%" stopColor="#fbbf24" />
                    <stop offset="60%" stopColor="transparent" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ marginLeft: 8, fontSize: "0.86rem", color: "var(--text-secondary,#aaa)" }}>
                4,6/5 en Trustpilot · 17 reseñas verificadas
              </span>
            </div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12 }}>
              Empieza gratis. Sin tarjeta. Sin caducidad.
            </h2>
            <p style={{ color: "var(--text-secondary,#aaa)", fontSize: "0.95rem", lineHeight: 1.55, marginBottom: 20, maxWidth: 640, margin: "0 auto 20px" }}>
              <strong style={{ color: "var(--text-primary,#fff)" }}>Plan Gratuito de por vida para 5 atletas</strong>, el más generoso del mercado hispano.
              Trainerize Basic ofrece 1 cliente; TrainerStudio Free ofrece 3; Harbiz no tiene plan gratuito permanente.
            </p>
            <Link
              href="/onboarding/"
              prefetch={false}
              className="btn btn-primary btn-lg"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                color: "#fff",
                fontWeight: 800,
                borderRadius: 100,
                textDecoration: "none",
              }}
            >
              <Rocket size={20} /> Empieza gratis · 5 atletas
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
