import { MAILTO } from "./datos";
import { Mail, Rocket } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   11. CTA FINAL
   ─────────────────────────────────────────────────────────── */
export default function FinalCTASection() {
  return (
    <section
      style={{
        padding: "120px 24px",
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(102,126,234,0.22) 0%, var(--bg-dark) 60%)",
        textAlign: "center",
      }}
    >
      <div className="aparece" style={{ maxWidth: 720, margin: "0 auto" }}>
        <div
          className="pg-cta-rocket"
          style={{
            width: 64,
            height: 64,
            borderRadius: 20,
            background: "var(--primary-gradient)",
            margin: "0 auto 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 50px rgba(102,126,234,0.4)",
          }}
        >
          <Rocket size={28} color="white" />
        </div>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          ¿Encaja TotalGains con tu gimnasio?
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: 36,
            maxWidth: 580,
            margin: "0 auto 36px",
          }}
        >
          Cuéntame cómo es tu gimnasio (socios, coaches, qué buscas) y te respondo personalmente con una propuesta a medida en menos de 24 horas.
        </p>
        <a
          href={MAILTO}
          className="btn btn-gold btn-lg"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontSize: "1.05rem",
            padding: "16px 32px",
          }}
        >
          <Mail size={20} /> Escríbeme directamente
        </a>
        <p style={{ marginTop: 20, color: "var(--text-muted)", fontSize: "0.85rem" }}>
          Respuesta personal en menos de 24h · En español · Sin compromiso
        </p>
      </div>
    </section>
  );
}
