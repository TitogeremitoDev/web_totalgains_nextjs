"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  Lock,
  Palette,
  CreditCard,
  Layers,
  AlertTriangle,
  Mail,
  ArrowRight,
  Check,
  X,
  Sparkles,
  TrendingUp,
  Rocket,
  Star,
  Quote,
  ChevronDown,
} from "lucide-react";

const MAILTO = "mailto:soporte@totalgains.es?subject=Demo%20TotalGains%20para%20gimnasios&body=Hola%20Germ%C3%A1n%2C%0A%0AMe%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20TotalGains%20para%20mi%20gimnasio.%0A%0ANombre%3A%20%0AGimnasio%3A%20%0AN%C3%BAmero%20de%20socios%20activos%3A%20%0AN%C3%BAmero%20de%20coaches%3A%20%0ATel%C3%A9fono%20de%20contacto%3A%20%0A%0AUn%20saludo.";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function ParaGimnasiosContent() {
  return (
    <div className="pg" style={{ overflow: "hidden" }}>
      <ScrollProgress />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductGallerySection />
        <HowItWorksSection />
        <WhoIsItForSection />
        <ComparisonSection />
        <PricingSection />
        <RealScenariosSection />
        <CompetitorsBlogSection />
        <FAQSection />
        <FinalCTASection />
        <RelatedSection />
      </main>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────
   Scroll progress bar at top of page
   ─────────────────────────────────────────────────────────── */
function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;
    function onScroll() {
      const st = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = h > 0 ? st / h : 0;
      el.style.transform = `scaleX(${ratio})`;
      ticking = false;
    }
    function handler() {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }
    window.addEventListener("scroll", handler, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return <div ref={ref} className="pg-scroll-progress" aria-hidden="true" />;
}

/* ───────────────────────────────────────────────────────────
   Stat counter with IntersectionObserver
   ─────────────────────────────────────────────────────────── */
function StatNumber({ value, style }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const m = value.match(/^(\d+)(.*)$/);
    if (!m || value.indexOf("-") !== -1) {
      setDisplay(value);
      return;
    }
    const target = parseInt(m[1], 10);
    const suffix = m[2] || "";
    if (target === 0) {
      setDisplay(value);
      return;
    }

    let observed = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !observed) {
            observed = true;
            io.unobserve(el);
            const dur = 1100;
            const t0 = performance.now();
            function tick(now) {
              const p = Math.min((now - t0) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(target * eased) + suffix);
              if (p < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            }
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} style={style}>
      {display}
    </span>
  );
}

/* ───────────────────────────────────────────────────────────
   1. HERO
   ─────────────────────────────────────────────────────────── */
function HeroSection() {
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
              href={MAILTO}
              className="btn btn-gold btn-lg"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <Mail size={18} /> Contacta conmigo
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
        </motion.div>

        <motion.div
          ref={mediaRef}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: "relative" }}
        >
          <div ref={shotRef} className="pg-hero-shot">
            <Image
              src="/images/gym/dashboard.webp"
              alt="Dashboard supervisor real de TotalGains para gimnasios: ingresos del mes, miembros activos, asistencia, riesgo de baja, cobros pendientes y top coaches en tiempo real"
              width={1837}
              height={916}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          {/* Floating badge */}
          <motion.div
            className="pg-float-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
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
          </motion.div>
        </motion.div>
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

/* ───────────────────────────────────────────────────────────
   2. PROBLEMA — qué pasa SIN un software dedicado
   ─────────────────────────────────────────────────────────── */
function ProblemSection() {
  const problems = [
    {
      icon: <AlertTriangle size={22} />,
      title: "Excel + WhatsApp + Stripe manual",
      text: "Cada socio en una hoja diferente, conversaciones perdidas y cobros que persigues a final de mes.",
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Agenda dispersa entre 4 herramientas",
      text: "Google Calendar para clases, Notion para personales, papel para reservas presenciales. Imposible saber el aforo real.",
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Sin permisos: todos ven todo",
      text: "Tus coaches pueden ver facturación del gimnasio o clientes de otros coaches. Sin separación real de privacidad.",
    },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-darker)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            El problema
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Por qué los gimnasios pequeños{" "}
            <span style={{ color: "var(--accent)" }}>se atascan a los 50 socios</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="pg-card-hover"
              style={{
                padding: 28,
                background: "rgba(250,112,154,0.05)",
                border: "1px solid rgba(250,112,154,0.18)",
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(250,112,154,0.15)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {p.icon}
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>
                {p.title}
              </h3>
              <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   3. SOLUCIÓN — 6 features con iconos
   ─────────────────────────────────────────────────────────── */
function SolutionSection() {
  const features = [
    {
      icon: <Calendar size={22} />,
      title: "Clases con reserva y waitlist",
      desc: "Aforo configurable, monitor asignado, lista de espera automática. Notificaciones push cuando se libera una plaza.",
    },
    {
      icon: <Users size={22} />,
      title: "Multi-coach con clientes asignados",
      desc: "Cada entrenador gestiona su cartera. La dirección ve el panel global; cada coach solo lo suyo. Sin solapamientos.",
    },
    {
      icon: <Lock size={22} />,
      title: "Permisos granulares por rol",
      desc: "4 booleanos por coach: ver todos los clientes, gestionar facturación, gestionar clases, gestionar clientes. Privacidad real.",
    },
    {
      icon: <Palette size={22} />,
      title: "App marca blanca del gimnasio",
      desc: "Tus socios descargan una app con tu nombre, logo y colores. Reservas, rutinas, dietas y mensajes en un solo entorno.",
    },
    {
      icon: <CreditCard size={22} />,
      title: "Cobros recurrentes Stripe",
      desc: "Cuotas mensuales, bonos de 10 clases y anuales con cobro automático. Stripe es tu cuenta — nosotros 0% comisión.",
    },
    {
      icon: <Layers size={22} />,
      title: "Rutinas + nutrición con IA",
      desc: "Cada coach genera rutinas y planes nutricionales con IA usando la base de +240.000 alimentos en español. Sin add-ons.",
    },
  ];

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              background: "var(--primary-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            La solución
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            Todo lo que tu gimnasio necesita,{" "}
            <span
              style={{
                background: "var(--primary-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              en una sola plataforma
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 620, margin: "0 auto" }}>
            Diseñada específicamente para gimnasios pequeños y estudios de entrenamiento personal. Sin add-ons ocultos.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="pg-card-hover"
              style={{
                padding: 28,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
              }}
            >
              <div
                className="pg-icon-badge"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "var(--primary-gradient)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  boxShadow: "0 8px 24px rgba(102,126,234,0.3)",
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>
                {f.title}
              </h3>
              <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.93rem" }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   3.5 CÓMO SE VE POR DENTRO — galería con 4 screenshots reales
   ─────────────────────────────────────────────────────────── */
function ProductGallerySection() {
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
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 40 }}>
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
        </motion.div>

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
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.7fr",
            gap: 32,
            alignItems: "center",
          }}
          className="gallery-grid"
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
            <Image
              src={current.img}
              alt={current.alt}
              width={1837}
              height={916}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </motion.div>

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

/* ───────────────────────────────────────────────────────────
   4. CÓMO FUNCIONA — 3 pasos
   ─────────────────────────────────────────────────────────── */
function HowItWorksSection() {
  const steps = [
    {
      n: "01",
      title: "Hablamos",
      desc: "Me escribes un email contándome cómo es tu gimnasio (socios, coaches, qué buscas). Te respondo en menos de 24h con una propuesta clara.",
    },
    {
      n: "02",
      title: "Migramos en 3-5 días",
      desc: "Importamos tus socios desde Excel/Sheets/software antiguo, configuramos tu agenda de clases, conectamos tu Stripe y personalizamos la app con tu marca.",
    },
    {
      n: "03",
      title: "Lanzamos contigo",
      desc: "Formación a tu equipo de coaches, comunicación a tus socios y soporte en español durante las primeras semanas. Listo para crecer.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-darker) 100%)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
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
            Cómo funciona
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
            De Excel a plataforma profesional{" "}
            <span style={{ color: "var(--primary-light)" }}>en una semana</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="pg-card-hover"
              style={{
                position: "relative",
                padding: 32,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(102,126,234,0.2)",
                borderRadius: 20,
              }}
            >
              <p
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  margin: "0 0 16px",
                  background: "var(--primary-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  opacity: 0.7,
                }}
              >
                {s.n}
              </p>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>
                {s.title}
              </h3>
              <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.65 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   5. PARA QUIÉN ES
   ─────────────────────────────────────────────────────────── */
function WhoIsItForSection() {
  const useCases = [
    "Gimnasios de barrio con 50-200 socios y 2-5 entrenadores",
    "Estudios de entrenamiento personal con varios coaches",
    "Boxes de CrossFit pequeños con clases dirigidas + seguimiento individual",
    "Centros de pilates, yoga o funcional con clases sueltas y bonos",
    "Centros de tecnificación deportiva con clases programadas",
    "Gimnasios boutique premium con servicio cuidado y marca propia",
  ];

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
            ¿Es para ti?
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
            TotalGains Gym encaja con estos perfiles de centro:
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 14,
          }}
        >
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "16px 18px",
                background: "rgba(102,126,234,0.06)",
                border: "1px solid rgba(102,126,234,0.15)",
                borderRadius: 14,
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "var(--primary-gradient)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <Check size={14} color="white" strokeWidth={3} />
              </div>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.93rem", lineHeight: 1.5 }}>{uc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   6. COMPARATIVA con competidores
   ─────────────────────────────────────────────────────────── */
function ComparisonSection() {
  const rows = [
    { feature: "Idioma e interfaz", tg: "Español nativo", harbiz: "Español", virtuagym: "Multiidioma", trainerize: "Inglés" },
    { feature: "Multi-coach permisos granulares", tg: "✅ 4 booleanos", harbiz: "⚠️ Roles fijos", virtuagym: "⚠️ Roles fijos", trainerize: "⚠️ Roles fijos" },
    { feature: "Marca blanca del gimnasio", tg: "✅ Incluida", harbiz: "Add-on 30,24 €/mes", virtuagym: "✅ Incluida", trainerize: "✅ en Studio" },
    { feature: "Reservas + waitlist", tg: "✅ Incluido", harbiz: "✅", virtuagym: "✅", trainerize: "✅" },
    { feature: "IA rutinas + nutrición", tg: "✅ Sin add-on", harbiz: "Add-on Nutri AI 18,14 €/mes", virtuagym: "Limitada", trainerize: "Add-on $45/mes" },
    { feature: "Base +240.000 alimentos ES", tg: "✅ Incluida", harbiz: "❌", virtuagym: "Base genérica", trainerize: "MyFitnessPal USA" },
    { feature: "Cobros recurrentes Stripe", tg: "✅ 0% comisión", harbiz: "✅", virtuagym: "Pasarela propia", trainerize: "Add-on $10/mes" },
    { feature: "Soporte en español", tg: "✅ < 24h", harbiz: "✅", virtuagym: "Multiidioma", trainerize: "❌ Inglés" },
    { feature: "Coste hasta 100 socios funcional", tg: "149 €/mes con IVA", harbiz: "~313 €/mes", virtuagym: "Bajo demanda", trainerize: "~352 €/mes" },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-darker)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 40 }}>
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
            Comparativa
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
            TotalGains Gym vs el resto
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
            Datos verificados manualmente en webs oficiales a mayo de 2026.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          style={{
            overflowX: "auto",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem", minWidth: 720 }}>
            <thead>
              <tr style={{ background: "rgba(102,126,234,0.08)" }}>
                <th style={{ padding: 14, textAlign: "left", color: "var(--text-secondary)", fontWeight: 600 }}>
                  Función
                </th>
                <th style={{ padding: 14, textAlign: "left" }}>
                  <span
                    style={{
                      background: "var(--primary-gradient)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 800,
                    }}
                  >
                    TotalGains
                  </span>
                </th>
                <th style={{ padding: 14, textAlign: "left", color: "var(--text-secondary)", fontWeight: 600 }}>
                  Harbiz
                </th>
                <th style={{ padding: 14, textAlign: "left", color: "var(--text-secondary)", fontWeight: 600 }}>
                  Virtuagym
                </th>
                <th style={{ padding: 14, textAlign: "left", color: "var(--text-secondary)", fontWeight: 600 }}>
                  Trainerize
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: 14, fontWeight: 600 }}>{r.feature}</td>
                  <td style={{ padding: 14, color: "var(--primary-light)" }}>{r.tg}</td>
                  <td style={{ padding: 14, color: "var(--text-secondary)" }}>{r.harbiz}</td>
                  <td style={{ padding: 14, color: "var(--text-secondary)" }}>{r.virtuagym}</td>
                  <td style={{ padding: 14, color: "var(--text-secondary)" }}>{r.trainerize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 14, textAlign: "center" }}>
          Comparativa editorial. Cada plataforma encaja con perfiles distintos. Ver{" "}
          <Link href="/blog/software-gimnasios-pequenos-boutique-2026/" prefetch={false} style={{ color: "var(--primary-light)" }}>
            análisis completo
          </Link>{" "}
          con trade-offs honestos.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   7. PRECIOS
   ─────────────────────────────────────────────────────────── */
function PricingSection() {
  const plans = [
    {
      name: "Gym Starter",
      price: "149 €",
      period: "/ mes con IVA",
      tagline: "Gimnasios pequeños con menos de 100 socios activos",
      features: [
        "Hasta 100 socios activos",
        "Coaches ilimitados",
        "Multi-coach con permisos granulares",
        "Clases con reserva + waitlist",
        "App marca blanca del gimnasio",
        "IA rutinas + nutrición incluida",
        "Base +240.000 alimentos en español",
        "Migración asistida en español",
        "Soporte por email <24h",
      ],
      featured: false,
    },
    {
      name: "Gym Pro",
      price: "199 €",
      period: "/ mes con IVA",
      tagline: "Gimnasios en crecimiento de 100 a 200 socios",
      features: [
        "De 100 a 200 socios activos",
        "Coaches ilimitados",
        "Todo lo del plan Gym Starter +",
        "Onboarding asistido prioritario (48-72h)",
        "Soporte por email <12h",
        "Panel supervisor avanzado con KPIs",
        "Prioridad en nuevas funcionalidades",
      ],
      featured: true,
    },
    {
      name: "Gym Elite",
      price: "249 €",
      period: "/ mes con IVA",
      tagline: "Gimnasios consolidados con más de 200 socios",
      features: [
        "Socios ilimitados (más de 200)",
        "Coaches ilimitados",
        "Todo lo del plan Gym Pro +",
        "Soporte VIP en español",
        "Sesión mensual con el fundador",
        "Roadmap personalizado con prioridad",
      ],
      featured: false,
    },
  ];

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
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
            Precios
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
            Un precio claro, sin add-ons ocultos
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
            Una sola cifra mensual con TODO incluido. Sin permanencia.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                position: "relative",
                padding: 32,
                background: p.featured ? "rgba(102,126,234,0.08)" : "rgba(255,255,255,0.03)",
                border: p.featured
                  ? "2px solid rgba(102,126,234,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 24,
                boxShadow: p.featured ? "0 20px 60px rgba(102,126,234,0.15)" : "none",
              }}
            >
              {p.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--primary-gradient)",
                    color: "white",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    padding: "6px 14px",
                    borderRadius: 100,
                    letterSpacing: "0.5px",
                  }}
                >
                  RECOMENDADO
                </span>
              )}
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 6 }}>{p.name}</h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  marginBottom: 20,
                  minHeight: "2.4em",
                }}
              >
                {p.tagline}
              </p>
              <div style={{ marginBottom: 28 }}>
                <span
                  style={{
                    fontSize: "2.6rem",
                    fontWeight: 800,
                    background: "var(--primary-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {p.price}
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginLeft: 6 }}>
                  {p.period}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <Check size={16} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: 3 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={MAILTO}
                className={p.featured ? "btn btn-gold" : "btn btn-secondary"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Mail size={16} /> Contacta conmigo
              </a>
            </motion.div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: "0.85rem",
            marginTop: 32,
          }}
        >
          ¿Tu caso es especial (más de 500 socios, varias sedes, etc.)?{" "}
          <a href={MAILTO} style={{ color: "var(--primary-light)" }}>
            Escríbeme
          </a>{" "}
          y diseñamos un plan a medida.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   8. ESCENARIOS REALES
   ─────────────────────────────────────────────────────────── */
function RealScenariosSection() {
  const scenarios = [
    {
      title: "Gimnasio de barrio, 80 socios, 3 entrenadores",
      desc: "El recepcionista gestiona altas y cobros (rol con permisos de facturación). Los 3 coaches programan rutinas/nutrición con IA y solo ven a sus clientes asignados. La dirección revisa retención y MRR desde el panel global.",
      price: "149 €/mes con IVA",
      plan: "Gym Starter",
    },
    {
      title: "Box CrossFit, 150 socios, 4 coaches",
      desc: "WOD diario programado por el headcoach, clases con aforo 12 personas y waitlist, bonos de 10 clases con caducidad, comunicación grupal por canal de gimnasio.",
      price: "199 €/mes con IVA",
      plan: "Gym Pro",
    },
    {
      title: "Centro consolidado, 280 socios, 6 coaches",
      desc: "3 salas con clases en paralelo, agenda compartida, marca blanca del centro y panel supervisor con KPIs por coach. Sesión mensual con el fundador para roadmap personalizado.",
      price: "249 €/mes con IVA",
      plan: "Gym Elite",
    },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-darker)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 48 }}>
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
            Casos reales
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
            3 escenarios reales de uso
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {scenarios.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="pg-card-hover"
              style={{
                padding: 28,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 12, color: "var(--text-primary)" }}>
                {s.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 20, fontSize: "0.93rem", flex: 1 }}>
                {s.desc}
              </p>
              <div
                style={{
                  paddingTop: 16,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{s.plan}</span>
                <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--primary-light)" }}>{s.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   9. BLOG / Alternativas
   ─────────────────────────────────────────────────────────── */
function CompetitorsBlogSection() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <motion.div {...fadeUp}>
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
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   10. FAQ
   ─────────────────────────────────────────────────────────── */
function FAQSection() {
  const faqs = [
    {
      q: "¿TotalGains soporta clases grupales con reserva y lista de espera?",
      a: "Sí. El módulo de clases grupales permite definir aforo, horario semanal recurrente, monitor asignado y lista de espera automática cuando la clase se llena. Cuando alguien cancela, el sistema avisa al primero de la waitlist por notificación push.",
    },
    {
      q: "¿Cuántos coaches puedo añadir al gimnasio en cada plan?",
      a: "Todos los planes Gym incluyen coaches ilimitados sin coste adicional por entrenador. La tarifa solo escala por número de socios activos: Gym Starter (menos de 100 socios) 149 €/mes con IVA, Gym Pro (100-200 socios) 199 €/mes con IVA, Gym Elite (más de 200 socios) 249 €/mes con IVA. No hay tarifa por entrenador adicional en ningún plan.",
    },
    {
      q: "¿Puedo dar permisos diferentes a cada coach del gimnasio?",
      a: "Sí. Los permisos son granulares: 4 booleanos por coach (ver todos los clientes, gestionar facturación, gestionar clases, gestionar clientes). La dirección configura el rol de cada miembro del equipo.",
    },
    {
      q: "¿Cuánto tarda en implementarse TotalGains en un gimnasio?",
      a: "Una configuración base completa (carga de socios, plantillas de rutinas, programación de clases recurrentes, conexión Stripe, branding de la app) suele estar lista en 3-5 días. La migración de datos desde Harbiz, Virtuagym u otra plataforma está incluida y la gestiona soporte en español. Para gimnasios con más de 200 socios o estructura compleja, el plan Unlimited incluye onboarding asistido prioritario que reduce el tiempo a 48-72 horas.",
    },
    {
      q: "¿Incluye marca blanca para el gimnasio o solo para entrenadores individuales?",
      a: "La marca blanca aplica al gimnasio completo. La app que descargan tus socios tiene el logo, nombre y colores del gimnasio. No es la marca del entrenador individual sino la del centro.",
    },
    {
      q: "¿Cuánto cuesta TotalGains para un gimnasio pequeño?",
      a: "TotalGains Gym tiene 3 planes según número de socios activos, todo IVA incluido: Gym Starter (hasta 100 socios) 149 €/mes, Gym Pro (100-200 socios) 199 €/mes y Gym Elite (más de 200 socios) 249 €/mes. Todos los planes incluyen coaches ilimitados, multi-coach con permisos granulares, clases con reserva y waitlist, app marca blanca del gimnasio, IA de rutinas y nutrición y migración asistida en español. Sin permanencia, sin coste por entrenador adicional, sin add-ons separados.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-darker)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "var(--fs-h2)", fontWeight: 800, lineHeight: 1.2 }}>
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`pg-faq ${isOpen ? "pg-faq-open" : ""}`}
              >
                <button
                  type="button"
                  className="pg-faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  {f.q}
                  <ChevronDown className="pg-chev" aria-hidden="true" />
                </button>
                <div className="pg-faq-a">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   11. CTA FINAL
   ─────────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section
      style={{
        padding: "120px 24px",
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(102,126,234,0.22) 0%, var(--bg-dark) 60%)",
        textAlign: "center",
      }}
    >
      <motion.div {...fadeUp} style={{ maxWidth: 720, margin: "0 auto" }}>
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
      </motion.div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   12. ALSO RELATED
   ─────────────────────────────────────────────────────────── */
function RelatedSection() {
  const items = [
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
