import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   9. BLOG / Alternativas
   ─────────────────────────────────────────────────────────── */
export default function CompetitorsBlogSection() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <div className="aparece">
          <h2 style={{ fontSize: "clamp(1.4rem, 2.8vw, 1.8rem)", fontWeight: 800, marginBottom: 16 }}>
            ¿Quieres compararlo con Harbiz o Virtuagym?
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>
            Análisis editorial honesto con tablas verificadas, trade-offs y cuándo encaja mejor cada uno.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/blog/software-gimnasios-pequenos-boutique-2026/"
              prefetch={false}
              className="btn btn-secondary"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              Guía completa software gimnasios <ArrowRight size={16} />
            </Link>
            <Link
              href="/alternativas/harbiz/"
              prefetch={false}
              className="btn btn-secondary"
            >
              TotalGains vs Harbiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
