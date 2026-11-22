"use client";

import { useState } from "react";
import ImagenAdaptable from "@/components/ImagenAdaptable";

/* ───────────────────────────────────────────────────────────
   3.5 CÓMO SE VE POR DENTRO — galería con 4 screenshots reales
   ─────────────────────────────────────────────────────────── */
export default function ProductGallerySection() {
  const [active, setActive] = useState(0);

  const views = [
    {
      key: "dashboard",
      tab: "Dashboard",
      title: "Panel supervisor con KPIs en tiempo real",
      desc: "Ingresos del mes, miembros activos, asistencia, riesgo de baja y cobros pendientes en una sola vista. Top coaches por sesiones impartidas, alertas de renovaciones próximas y actividad reciente del centro en vivo.",
      img: "/images/gym/dashboard.webp",
      alt: "Dashboard supervisor del gimnasio en TotalGains con KPIs de ingresos, miembros activos y top coaches",
    },
    {
      key: "clientes",
      tab: "Clientes",
      title: "Cartera de socios filtrable y ordenable",
      desc: "Listado completo de socios con filtros por estado (activo, pausado, cancelado, inactivos +7d), búsqueda por nombre/DNI/teléfono/email y vistas ordenadas por recientes o A-Z. Cada tarjeta muestra coach asignado, franja horaria preferida y fecha de alta.",
      img: "/images/gym/clientes.webp",
      alt: "Vista de Clientes del Gimnasio en TotalGains con filtros y lista de tarjetas de socios",
    },
    {
      key: "clases",
      tab: "Clases",
      title: "Calendario semanal del centro con ocupación visual",
      desc: "Vista de horario con todas las clases del gimnasio coloreadas por sala/disciplina. Mapa de ocupación de últimas 4 semanas (≤50% verde, 51-85% naranja, ≥86% rojo) para detectar al instante clases vacías o llenas. Drag & drop para reorganizar horarios.",
      img: "/images/gym/clases.webp",
      alt: "Vista de calendario de clases del gimnasio en TotalGains con ocupación coloreada por semana",
    },
    {
      key: "pagos",
      tab: "Pagos",
      title: "Estado de pago de cada socio con KPIs financieros",
      desc: "Caja real del mes, clientes al día, próximas expiraciones, refunds, previsto del mes y churn 30d. Vista por cliente con riesgo de baja calculado, último método de pago, fecha de próxima renovación y botón directo de cobro.",
      img: "/images/gym/pagos.webp",
      alt: "Vista de Pagos del gimnasio en TotalGains con caja del mes, churn y tarjetas de cobro por cliente",
    },
  ];

  const current = views[active];

  return (
    <section
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(180deg, var(--bg-dark) 0%, rgba(102,126,234,0.05) 100%)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div className="aparece" style={{ textAlign: "center", marginBottom: 40 }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "var(--primary-light)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Cómo se ve por dentro
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            El producto real,{" "}
            <span
              style={{
                background: "var(--primary-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              no un mockup
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 620, margin: "0 auto" }}>
            Capturas de la versión en producción a junio 2026. Pincha en cada pestaña para ver una vista del panel.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          {views.map((v, i) => (
            <button
              key={v.key}
              onClick={() => setActive(i)}
              type="button"
              style={{
                padding: "10px 22px",
                background:
                  active === i
                    ? "var(--primary-gradient)"
                    : "rgba(255,255,255,0.04)",
                border: active === i ? "1px solid transparent" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 100,
                fontSize: "0.92rem",
                fontWeight: active === i ? 700 : 600,
                color: active === i ? "white" : "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: active === i ? "0 8px 24px rgba(102,126,234,0.35)" : "none",
              }}
            >
              {v.tab}
            </button>
          ))}
        </div>

        {/* Active view */}
        <div
          className="pg-cambio gallery-grid"
          key={current.key}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.7fr",
            gap: 32,
            alignItems: "center",
          }}
      >
          <div>
            <h3
              style={{
                fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                fontWeight: 800,
                marginBottom: 14,
                color: "var(--text-primary)",
                lineHeight: 1.3,
              }}
            >
              {current.title}
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.97rem",
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              {current.desc}
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {views.map((v, i) =>
                i !== active ? (
                  <button
                    key={v.key}
                    onClick={() => setActive(i)}
                    type="button"
                    style={{
                      padding: "6px 14px",
                      background: "rgba(102,126,234,0.06)",
                      border: "1px solid rgba(102,126,234,0.15)",
                      borderRadius: 100,
                      fontSize: "0.78rem",
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                    }}
                  >
                    Ver {v.tab.toLowerCase()} →
                  </button>
                ) : null
              )}
            </div>
          </div>

          <div
            style={{
              position: "relative",
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(102,126,234,0.25)",
              boxShadow:
                "0 30px 70px rgba(102,126,234,0.20), 0 0 0 1px rgba(255,255,255,0.04) inset",
            }}
          >
            <ImagenAdaptable
              src={current.img}
              alt={current.alt}
              width={1837}
              height={916}
              sizes="(max-width: 900px) calc(100vw - 32px), 1100px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 880px) {
            .gallery-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
