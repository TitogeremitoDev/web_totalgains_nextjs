import Link from "next/link";
import { Check, X, Star } from "lucide-react";

/**
 * LandingExtrasBlock — Bloque reutilizable de contenido rico añadido bajo el LandingPageTemplate.
 * Aporta: precios visibles, testimonios, comparativa vs competencia.
 *
 * Props:
 *   plans:        [{ name, price, incl, extras[], highlight? }] — 3 tarjetas de precios
 *   testimonials: [{ name, handle, role, quote, result, href }] — cards de testimonio
 *   competencia:  [{ tool, precio, ia:boolean, marca:boolean, esp:boolean }] — filas comparativa
 *   pageContext:  string — descripción corta del contexto de la página (para el <h2> comparativa)
 */
export default function LandingExtrasBlock({ plans = [], testimonials = [], competencia = [], pageContext = "" }) {
  return (
    <>
      {plans.length > 0 && (
        <section id="precios" style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 60px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Precios verificados con IVA · sin permanencia</h2>
          <p style={{ textAlign: "center", color: "var(--text-secondary,#aaa)", marginBottom: 32, lineHeight: 1.6 }}>
            14 días gratis sin tarjeta. Cancela cuando quieras.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {plans.map((plan) => (
              <div key={plan.name} style={{ padding: "24px", border: plan.highlight ? "2px solid var(--primary,#667eea)" : "1px solid rgba(255,255,255,0.08)", borderRadius: 16, background: plan.highlight ? "rgba(102,126,234,0.06)" : "rgba(255,255,255,0.02)" }}>
                {plan.highlight && (
                  <span style={{ display: "inline-block", padding: "3px 10px", fontSize: "0.72rem", fontWeight: 700, background: "var(--primary,#667eea)", color: "#fff", borderRadius: 100, marginBottom: 8 }}>MÁS ELEGIDO</span>
                )}
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: "6px 0 8px" }}>{plan.name}</h3>
                <p style={{ fontSize: "1.6rem", fontWeight: 800, margin: "0 0 6px" }}>{plan.price}</p>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary,#aaa)", marginBottom: 14 }}>{plan.incl}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                  {(plan.extras || []).map((x) => (
                    <li key={x} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "5px 0", fontSize: "0.86rem", color: "var(--text-primary,#ddd)" }}>
                      <Check size={16} style={{ flexShrink: 0, marginTop: 3, color: "#22c55e" }} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/onboarding/" style={{ display: "block", padding: "10px 16px", textAlign: "center", background: plan.highlight ? "var(--primary,#667eea)" : "rgba(255,255,255,0.06)", color: plan.highlight ? "#fff" : "var(--text-primary,#ddd)", borderRadius: 100, textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>
                  Empieza gratis 14 días
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 60px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 32, textAlign: "center" }}>Coaches reales usando TotalGains</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {testimonials.map((t) => (
              <Link key={t.name} href={t.href} style={{ display: "block", padding: 24, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, textDecoration: "none" }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
                  {[1,2,3,4,5].map((i) => <Star key={i} size={14} fill="#eab308" color="#eab308" />)}
                </div>
                <blockquote style={{ margin: "0 0 14px", fontSize: "0.95rem", lineHeight: 1.55, color: "var(--text-primary,#ddd)", fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary,#ddd)" }}>{t.name}</p>
                <p style={{ margin: "0 0 4px", fontSize: "0.78rem", color: "var(--text-secondary,#aaa)" }}>{t.role} · {t.handle}</p>
                <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--primary-light,#8fa4f5)", fontWeight: 600 }}>{t.result}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {competencia.length > 0 && (
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 60px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 8, textAlign: "center" }}>
            TotalGains vs competencia {pageContext ? `(${pageContext})` : ""}
          </h2>
          <p style={{ textAlign: "center", color: "var(--text-secondary,#aaa)", marginBottom: 24, lineHeight: 1.6 }}>
            Precios reales con marca blanca activa y funcionalidad completa, verificados mayo 2026.
          </p>
          <div style={{ overflowX: "auto", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
              <thead style={{ background: "rgba(255,255,255,0.04)" }}>
                <tr>
                  <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Software</th>
                  <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Precio 100 cl</th>
                  <th style={{ padding: 12, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>IA incluida</th>
                  <th style={{ padding: 12, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Marca blanca</th>
                  <th style={{ padding: 12, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Español</th>
                </tr>
              </thead>
              <tbody>
                {competencia.map((row, i) => (
                  <tr key={row.tool} style={{ background: i === 0 ? "rgba(34,197,94,0.06)" : undefined }}>
                    <td style={{ padding: 12, fontWeight: i === 0 ? 700 : 400 }}>{row.tool}</td>
                    <td style={{ padding: 12 }}>{row.precio}</td>
                    <td style={{ padding: 12, textAlign: "center" }}>{row.ia ? <Check size={16} color="#22c55e" style={{ display: "inline" }} /> : <X size={16} color="#ef4444" style={{ display: "inline" }} />}</td>
                    <td style={{ padding: 12, textAlign: "center" }}>{row.marca ? <Check size={16} color="#22c55e" style={{ display: "inline" }} /> : <X size={16} color="#ef4444" style={{ display: "inline" }} />}</td>
                    <td style={{ padding: 12, textAlign: "center" }}>{row.esp ? <Check size={16} color="#22c55e" style={{ display: "inline" }} /> : <X size={16} color="#ef4444" style={{ display: "inline" }} />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: "center", marginTop: 20, fontSize: "0.86rem", color: "var(--text-secondary,#aaa)" }}>
            Ver comparativa completa:{" "}
            <Link href="/blog/mejores-software-entrenadores-personales-2026/" style={{ color: "var(--primary-light,#8fa4f5)" }}>
              Los 5 mejores software para coaches en España 2026
            </Link>
          </p>
        </section>
      )}
    </>
  );
}
