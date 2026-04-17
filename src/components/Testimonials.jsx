"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  ChevronDown,
  Clock,
  TrendingUp,
  Shield,
  Instagram,
  CheckCircle2,
  MessageSquareQuote,
  Zap,
  Timer,
  Sparkles,
  Users,
} from "lucide-react";
import "./Testimonials.css";

/* ─────────────────────────────────────────────
   DATA — Testimonials
   ───────────────────────────────────────────── */
const testimonials = [
  {
    id: "nacho",
    name: "Nacho Pulido",
    role: "Entrenador de Fuerza & Resistencia",
    followers: "1.4K",
    instagram: "https://www.instagram.com/puli.trainer/",
    handle: "@puli.trainer",
    avatar: "/testimonials/nacho.webp",
    accentClass: "accent-nacho",
    resultClass: "result-nacho",
    keyResult: "8-10h",
    keyResultLabel: "Ahorro semanal",
    quote:
      "Tener todo centralizado — clientes, entrenamientos, pagos y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahora todo fluye muchísimo mejor y me siento más profesional.",
    highlightPhrase: "todo centralizado",
    qa: [
      {
        q: "¿Cómo gestionabas antes tus asesorías?",
        a: "Antes usaba Excel, WhatsApp y mails por todos lados. Lo más pesado era perseguir pagos, recordar seguimientos y tener toda la info desordenada.",
      },
      {
        q: "¿Qué es lo que más te ha cambiado?",
        a: "Tener todo centralizado: clientes, entrenamientos, pagos y comunicación en un solo sitio. Ahora todo fluye muchísimo mejor y me siento más profesional.",
      },
      {
        q: "¿Cuánto tiempo ahorras a la semana?",
        a: "Calculo que ahorro entre 8 y 10 horas a la semana fácil. Menos líos y más tiempo para entrenar y disfrutar.",
      },
    ],
  },
  {
    id: "lorena",
    name: "Lorena Eses",
    role: "Nutricionista Online",
    followers: "28.2K",
    instagram: "https://www.instagram.com/lorenaeses/",
    handle: "@lorenaeses",
    avatar: "/testimonials/lorena.webp",
    accentClass: "accent-lorena",
    resultClass: "result-lorena",
    keyResult: "+10h",
    keyResultLabel: "Ahorro semanal",
    quote:
      "La tranquilidad de saber que está todo automatizado, y la ganancia de tiempo al poder delegar en la app cosas como la agenda, la programación de citas y las revisiones quincenales.",
    highlightPhrase: "todo automatizado",
    qa: [
      {
        q: "¿Cómo gestionabas antes tus asesorías?",
        a: "Lo gestionaba con diferentes Excel. Era un lío, ya que llevaba diferentes sistemas de pago, cobros y almacenamiento de datos que acababan siendo incompatibles entre sí. Dedicaba mucho tiempo a los seguimientos y desde que tengo la app, ese tiempo puedo invertirlo en mejorar la calidad de mis planes y asesorías.",
      },
      {
        q: "¿Qué es lo que más te ha cambiado?",
        a: "La tranquilidad de saber que está todo automatizado, y la ganancia de tiempo al poder delegar en la app la agenda, la programación de citas, las revisiones quincenales y el feedback del progreso. Ahora el paciente recibe en su móvil la notificación con los enlaces y la info necesaria de forma automática, permitiéndome distinguir el trabajo de mi vida personal.",
      },
      {
        q: "¿Cuánto tiempo ahorras a la semana?",
        a: "Más de 2 horas diarias, lo cual hace un total de 10 horas semanales en una semana tranquila, más aún las semanas previas a revisiones mensuales. Ahora el sistema lleva un control y un progreso que permite a las pacientes ver su evolución.",
      },
    ],
  },
  {
    id: "german",
    name: "Germán",
    role: "Preparador Físico",
    followers: "452",
    instagram: "https://www.instagram.com/titogeremito/",
    handle: "@titogeremito",
    avatar: "/testimonials/german.webp",
    accentClass: "accent-german",
    resultClass: "result-german",
    keyResult: "3x",
    keyResultLabel: "Más eficiencia",
    quote:
      "Versatilidad y rapidez. Poder cambiar un ejercicio desde el móvil dándole a dos botones, poder ver cómo van mis atletas con un vistazo. Facilidad y comodidad.",
    highlightPhrase: "Versatilidad y rapidez",
    qa: [
      {
        q: "¿Cómo gestionabas antes tus asesorías?",
        a: "Las asesorías las gestionaba a través de tablas de Excel compartidas con mis clientes. Era algo fastidioso tanto para ellos como para mí ya que cualquier cambio era pesado y lento, además de que tenían que estar rellenando todas las semanas un montón de celdas con datos, lo que les generaba hastío.",
      },
      {
        q: "¿Qué es lo que más te ha cambiado?",
        a: "Versatilidad y rapidez, poder cambiar un ejercicio desde el móvil dándole a dos botones, poder ver cómo van mis atletas con un vistazo. Al final facilidad y comodidad además de permitirme poder llevar más atletas sin gastar más tiempo y teniéndolo todo junto en la misma plataforma.",
      },
      {
        q: "¿Cuánto tiempo ahorras a la semana?",
        a: "Yo al tener todavía poca gente el ahorro no es tanto de tiempo como de aumento de comodidad, pero si antes me tiraba mirando gráficas en Excel 10-20 min, con las gráficas de la plataforma tardo 5 min en hacerme una idea concisa de cómo van mis clientes.",
      },
    ],
  },
];

/* ─────────────────────────────────────────────
   SUBCOMPONENTS
   ───────────────────────────────────────────── */

const StarRating = () => (
  <div className="card-rating">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} className="star" fill="#fbbf24" strokeWidth={0} />
    ))}
  </div>
);

const TestimonialCard = ({ data, index }) => {
  const [expanded, setExpanded] = useState(false);

  // Highlight the key phrase in the quote
  const renderQuote = () => {
    const idx = data.quote.indexOf(data.highlightPhrase);
    if (idx === -1) return data.quote;
    const before = data.quote.slice(0, idx);
    const after = data.quote.slice(idx + data.highlightPhrase.length);
    return (
      <>
        {before}
        <span className="highlight-text">{data.highlightPhrase}</span>
        {after}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="testimonial-card"
    >
      {/* Accent Glow Line */}
      <div className={`card-accent-line ${data.accentClass}`} />

      <div className="card-inner">
        {/* ── Profile ── */}
        <div className="card-profile">
          <div className="profile-top-row">
            <div className="profile-avatar-wrapper">
              <Image
                src={data.avatar}
                alt={data.name}
                width={52}
                height={52}
                className="profile-avatar"
              />
              <div className="profile-status" />
            </div>
            <div className="profile-info">
              <p className="profile-name">
                {data.name}
                <span className="verified-badge">
                  <CheckCircle2 size={10} color="#fff" strokeWidth={3} />
                </span>
              </p>
              <p className="profile-role">{data.role}</p>
            </div>
          </div>
          <div className="profile-bottom-row">
            <a
              href={data.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
              aria-label={`Instagram de ${data.name}`}
            >
              <Instagram size={13} />
              <span>{data.handle}</span>
              <span className="followers-pill">{data.followers}</span>
            </a>
          </div>
        </div>

        {/* ── Key Result ── */}
        <div className="key-result">
          <div className={`key-result-icon ${data.resultClass}`}>
            {data.id === "nacho" && <Timer size={22} />}
            {data.id === "lorena" && <Clock size={22} />}
            {data.id === "german" && <Zap size={22} />}
          </div>
          <div>
            <p className="key-result-value">{data.keyResult}</p>
            <p className="key-result-label">{data.keyResultLabel}</p>
          </div>
        </div>

        {/* ── Quote ── */}
        <div className="card-quote">
          <span className="quote-icon">"</span>
          <p>{renderQuote()}</p>
        </div>

        {/* ── Expandable Q&A ── */}
        <div className="card-qa-section">
          <button
            className={`qa-toggle-btn ${expanded ? "expanded" : ""}`}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            <span>
              <MessageSquareQuote
                size={14}
                style={{ marginRight: "0.4rem", opacity: 0.7 }}
              />
              {expanded ? "Ocultar entrevista" : "Ver entrevista completa"}
            </span>
            <span className="qa-toggle-icon">
              <ChevronDown size={13} color="var(--primary-light)" />
            </span>
          </button>

          <div className={`qa-content ${expanded ? "expanded" : ""}`}>
            {data.qa.map((item, i) => (
              <div key={i} className="qa-item">
                <div className="qa-question">
                  <Sparkles size={11} />
                  {item.q}
                </div>
                <p className="qa-answer">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="card-footer">
          <StarRating />
          <span className="card-date">
            <Shield size={11} />
            Usuario verificado
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      {/* Background Effects */}
      <div className="testimonials-bg" />

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Users size={14} />
            Casos de Éxito
          </div>
          <h2 className="gradient-text">
            Profesionales reales, resultados reales
          </h2>
          <p className="section-subtitle">
            Descubre cómo entrenadores y nutricionistas están transformando su
            negocio con TotalGains
          </p>
        </div>

        {/* Summary Metrics */}
        <div className="testimonials-metrics">
          <div className="metric-pill">
            <div className="metric-icon">
              <Clock size={18} color="#fff" />
            </div>
            <div>
              <div className="metric-value">+10h</div>
              <div className="metric-label">Ahorro medio/semana</div>
            </div>
          </div>
          <div className="metric-pill">
            <div className="metric-icon">
              <TrendingUp size={18} color="#fff" />
            </div>
            <div>
              <div className="metric-value">100%</div>
              <div className="metric-label">Recomiendan TotalGains</div>
            </div>
          </div>
          <div className="metric-pill">
            <div className="metric-icon">
              <Shield size={18} color="#fff" />
            </div>
            <div>
              <div className="metric-value">0</div>
              <div className="metric-label">Excel necesarios</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} data={t} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="testimonials-cta"
        >
          <p className="cta-text">
            ¿Listo para ser el próximo caso de éxito?{" "}
            <strong>Únete gratis 14 días.</strong>
          </p>
          <a href="/onboarding" className="btn btn-gold btn-lg">
            <Zap size={20} />
            Probar TotalGains gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
