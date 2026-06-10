/**
 * TrustpilotBadge — badge custom verificable
 *
 * Cero dependencia de scripts externos de Trustpilot.
 * Linkea directamente al perfil público real:
 *   https://es.trustpilot.com/review/totalgains.es
 *
 * El TrustScore se debe pasar como prop `score` y mantenerse sincronizado con
 * el valor público de Trustpilot (no la media aritmética de las reviews).
 *
 * Props:
 *   - score: number (TrustScore actual de Trustpilot, ej. 4.0)
 *   - totalReviews: number
 *   - variant: "default" | "compact"
 */
import React from "react";

const STAR_FILLED = "#00b67a"; // verde Trustpilot oficial
const STAR_EMPTY = "rgba(255,255,255,0.15)";
const TRUSTPILOT_URL = "https://es.trustpilot.com/review/totalgains.es";

function Star({ fill, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" fill={fill} rx="2" />
      <path
        d="M12 4.5 L13.85 9.65 L19.5 9.95 L15.2 13.4 L16.6 18.9 L12 15.85 L7.4 18.9 L8.8 13.4 L4.5 9.95 L10.15 9.65 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default function TrustpilotBadge({ score = 4.0, totalReviews = 3, variant = "default" }) {
  const fullStars = Math.floor(score);
  const stars = [1, 2, 3, 4, 5].map((i) => (i <= fullStars ? STAR_FILLED : STAR_EMPTY));
  const scoreFmt = score.toString().replace(".", ",");

  const ariaLabel = `Valorado ${scoreFmt} sobre 5 en Trustpilot con ${totalReviews} reseñas verificadas — abrir perfil`;

  if (variant === "compact") {
    return (
      <a
        href={TRUSTPILOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          background: "rgba(0,182,122,0.08)",
          border: "1px solid rgba(0,182,122,0.3)",
          borderRadius: 8,
          textDecoration: "none",
          fontSize: "0.85rem",
          color: "var(--text-secondary, #aaa)",
        }}
      >
        <span style={{ display: "inline-flex", gap: 2 }} aria-hidden="true">
          {stars.map((c, i) => (
            <Star key={i} fill={c} size={14} />
          ))}
        </span>
        <span>
          <strong style={{ color: "var(--text-primary, #fff)" }}>{scoreFmt}</strong> en{" "}
          <strong style={{ color: STAR_FILLED }}>Trustpilot</strong>
        </span>
      </a>
    );
  }

  return (
    <a
      href={TRUSTPILOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 16,
        padding: "14px 18px",
        background: "rgba(0,182,122,0.06)",
        border: "1px solid rgba(0,182,122,0.25)",
        borderRadius: 12,
        textDecoration: "none",
      }}
    >
      <span style={{ display: "inline-flex", gap: 3 }} aria-hidden="true">
        {stars.map((c, i) => (
          <Star key={i} fill={c} size={20} />
        ))}
      </span>
      <span>
        <strong
          style={{
            fontSize: "1.05rem",
            display: "block",
            color: "var(--text-primary, #fff)",
            lineHeight: 1.1,
          }}
        >
          {scoreFmt} / 5
        </strong>
        <small style={{ color: "var(--text-secondary, #aaa)", fontSize: "0.78rem" }}>
          Verificado en <strong style={{ color: STAR_FILLED }}>Trustpilot</strong> · {totalReviews}{" "}
          reseñas
        </small>
      </span>
    </a>
  );
}
