"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ImagenAdaptable from "@/components/ImagenAdaptable";
import StatNumber from "./StatNumber";
import { ArrowRight, Sparkles, Phone } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   1. HERO
   ─────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const shotRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const shot = shotRef.current;
    const media = mediaRef.current;
    if (!shot || !media) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !hover) return;

    function move(e) {
      const r = media.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -4;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 4;
      shot.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
    function leave() {
      shot.style.transform = "";
    }
    media.addEventListener("pointermove", move);
    media.addEventListener("pointerleave", leave);
    return () => {
      media.removeEventListener("pointermove", move);
      media.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        padding: "120px 24px 80px",
        background: "var(--bg-dark)",
        overflow: "hidden",
      }}
    >
      {/* Aurora background — 3 drifting orbs */}
      <div className="pg-aurora" aria-hidden="true">
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Columna del titular SIN animación de entrada: con fadeUp el h1 nacía
            con opacidad 0 y no se pintaba hasta que llegaba framer-motion.
            Lighthouse: 1,7 s de los 4,75 s de LCP eran esa espera
            (revisión de la web 21-nov, mejora AB2D). */}
        <div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              background: "rgba(102,126,234,0.12)",
              border: "1px solid rgba(102,126,234,0.3)",
              borderRadius: 100,
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--primary-light)",
              marginBottom: 20,
            }}
          >
            <Sparkles size={13} /> Software para gimnasios pequeños y boutique
          </span>
          <h1
            style={{
              fontSize: "var(--fs-hero)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            La plataforma que tu{" "}
            <span className="grad-text-anim">gimnasio pequeño</span>{" "}
            se merece
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            Clases con reserva, multi-coach con permisos granulares, app marca blanca del gimnasio y cobros recurrentes en una sola plataforma. Diseñada en español para boxes, estudios y gimnasios boutique de 2 a 15 coaches.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
            <a
              href="#te-llamamos"
              className="btn btn-gold btn-lg"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <Phone size={18} /> Te llamamos
            </a>
            <Link
              href="/blog/software-gimnasios-pequenos-boutique-2026/"
              prefetch={false}
              className="btn btn-secondary btn-lg"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              Ver guía completa <ArrowRight size={16} />
            </Link>
          </div>

          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
            Respuesta personal en menos de 24 h · En español · Sin compromiso
          </p>

          {/* Trust stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginTop: 40,
              padding: "20px 0",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {[
              { value: "3-5", label: "días de migración" },
              { value: "149 €", label: "desde · con IVA" },
              { value: "0", label: "permanencia · sin add-ons" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    margin: 0,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  <StatNumber
                    value={s.value}
                    style={{
                      background: "var(--primary-gradient)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                </p>
                <p
                  style={{
                    margin: "2px 0 0",
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div ref={mediaRef} style={{ position: "relative" }}>
          <div ref={shotRef} className="pg-hero-shot">
            <ImagenAdaptable
              src="/images/gym/dashboard.webp"
              alt="Dashboard supervisor real de TotalGains para gimnasios: ingresos del mes, miembros activos, asistencia, riesgo de baja, cobros pendientes y top coaches en tiempo real"
              width={1837}
              height={916}
              sizes="(max-width: 880px) calc(100vw - 40px), 576px"
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          {/* Floating badge */}
          <div
            className="pg-float-badge"
            style={{
              position: "absolute",
              top: -12,
              right: -12,
              background: "var(--primary-gradient)",
              padding: "10px 16px",
              borderRadius: 100,
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "white",
              boxShadow: "0 10px 28px rgba(118,75,162,0.5)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              zIndex: 2,
            }}
        >
            <Sparkles size={14} /> Producto real en producción
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 880px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
