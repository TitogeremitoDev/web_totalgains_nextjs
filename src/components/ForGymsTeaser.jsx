"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Calendar, BarChart3, ArrowRight, Building2 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function ForGymsTeaser() {
  return (
    <section
      style={{
        position: "relative",
        padding: "100px 24px",
        background: "var(--bg-dark)",
        overflow: "hidden",
      }}
    >
      {/* Aurora ambient — sutil */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 540,
            height: 540,
            top: -160,
            right: -80,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(102,126,234,0.32) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            bottom: -120,
            left: -80,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(250,112,154,0.20) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 56,
          alignItems: "center",
        }}
        className="fgt-grid"
      >
        {/* Columna texto */}
        <motion.div {...fadeUp}>
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
              color: "var(--primary-light, #8b9df8)",
              marginBottom: 20,
              letterSpacing: "0.04em",
            }}
          >
            <Building2 size={13} /> También para gimnasios
          </span>

          <h2
            style={{
              fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 18,
              letterSpacing: "-0.01em",
              textWrap: "balance",
            }}
          >
            ¿Diriges un{" "}
            <span
              style={{
                background: "var(--primary-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              gimnasio pequeño o boutique
            </span>
            ?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary, #b8b8d1)",
              lineHeight: 1.65,
              marginBottom: 28,
              maxWidth: "44ch",
            }}
          >
            TotalGains también tiene un plan para gimnasios de 2 a 15 coaches:
            multi-coach con permisos granulares, agenda de clases con reservas
            y waitlist, app marca blanca del centro y panel supervisor con
            KPIs en tiempo real.
          </p>

          {/* 3 mini-features con iconos */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginBottom: 32,
            }}
          >
            {[
              {
                icon: <Users size={18} />,
                title: "Multi-coach con permisos granulares",
                desc: "4 booleanos por coach. Cada uno solo ve lo suyo.",
              },
              {
                icon: <Calendar size={18} />,
                title: "Clases con reserva y waitlist",
                desc: "Aforo, monitor asignado, lista de espera automática.",
              },
              {
                icon: <BarChart3 size={18} />,
                title: "Panel supervisor para el dueño",
                desc: "Ingresos, retención, top coaches y churn de un vistazo.",
              },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "var(--primary-gradient)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 16px rgba(102,126,234,0.3)",
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--text-primary, #fff)",
                      lineHeight: 1.3,
                    }}
                  >
                    {f.title}
                  </p>
                  <p
                    style={{
                      margin: "2px 0 0",
                      fontSize: "0.86rem",
                      color: "var(--text-muted, #7c7c9a)",
                      lineHeight: 1.5,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Precio chip + CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 14 }}>
            <Link
              href="/para-gimnasios/"
              prefetch={false}
              className="btn btn-primary btn-lg"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Ver TotalGains para gimnasios <ArrowRight size={18} />
            </Link>
            <Link
              href="/blog/software-gimnasios-pequenos-boutique-2026/"
              prefetch={false}
              style={{
                fontSize: "0.92rem",
                color: "var(--primary-light, #8b9df8)",
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Leer la guía completa →
            </Link>
          </div>

          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--text-muted, #7c7c9a)",
              margin: 0,
            }}
          >
            Desde <strong style={{ color: "var(--text-secondary, #b8b8d1)" }}>149 €/mes con IVA</strong> · Coaches ilimitados · Sin permanencia
          </p>
        </motion.div>

        {/* Columna imagen del dashboard real */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(102,126,234,0.28)",
              boxShadow:
                "0 30px 80px rgba(102,126,234,0.25), inset 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            <Image
              src="/images/gym/dashboard.webp"
              alt="Panel supervisor de TotalGains para gimnasios con KPIs de ingresos, miembros activos y top coaches"
              width={1837}
              height={916}
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Badge flotante */}
          <div
            style={{
              position: "absolute",
              top: -12,
              left: -12,
              background: "var(--primary-gradient)",
              color: "white",
              padding: "8px 14px",
              borderRadius: 100,
              fontSize: "0.76rem",
              fontWeight: 700,
              boxShadow: "0 10px 28px rgba(118,75,162,0.45)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              zIndex: 2,
              letterSpacing: "0.02em",
            }}
          >
            <Building2 size={13} /> Panel supervisor real
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 880px) {
          .fgt-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
