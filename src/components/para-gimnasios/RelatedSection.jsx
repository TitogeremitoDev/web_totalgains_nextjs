import Link from "next/link";

/* ───────────────────────────────────────────────────────────
   12. ALSO RELATED
   ─────────────────────────────────────────────────────────── */
export default function RelatedSection() {
  const items = [
    { href: "/app-para-gimnasios/", label: "La app de tus socios, con tu marca" },
    { href: "/blog/software-gimnasios-pequenos-boutique-2026/", label: "Guía completa software gimnasios 2026" },
    { href: "/alternativas/harbiz/", label: "TotalGains vs Harbiz" },
    { href: "/alternativas/harbiz/precios/", label: "Precios Harbiz 2026" },
    { href: "/app-marca-blanca-entrenador-personal/", label: "App marca blanca" },
    { href: "/gestion-clientes-fitness/", label: "Gestión de clientes" },
    { href: "/ia-entrenador-personal/", label: "IA para entrenadores" },
  ];

  return (
    <section style={{ padding: "60px 24px 100px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "0.92rem",
            fontWeight: 700,
            color: "var(--text-secondary)",
            marginBottom: 16,
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          También te puede interesar
        </h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {items.map(({ href, label }) => (
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
  );
}
