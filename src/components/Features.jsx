"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Apple,
  Activity,
  RefreshCw,
  Zap,
  CreditCard,
  BarChart3,
  Palette,
  Sparkles,
  Rocket,
} from "lucide-react";
import "./Features.css";

const Features = () => {
  // Empezamos por BOARD como indicaste
  const [activeFeature, setActiveFeature] = useState("board");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef(null);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const features = {
    board: {
      id: "board",
      icon: <LayoutDashboard size={28} color="#3b82f6" strokeWidth={2} />,
      title: "Tu Centro de Mando",
      subtitle: "Command Center",
      image: "/carrousel/BOARD.png",
      description: "El software para entrenadores definitivo. Gestiona atletas online, tareas pendientes, finanzas y alertas desde un único dashboard centralizado.",
      highlight: "Control total de tu negocio fitness sin caos.",
      keywords: ["software para entrenadores", "negocio fitness", "dashboard centralizado"],
    },
    nutricion: {
      id: "nutricion",
      icon: <Apple size={28} color="#22c55e" strokeWidth={2} />,
      title: "Creador de Dietas Inteligente",
      subtitle: "+240.000 Alimentos",
      image: "/carrousel/NUTRICION.png",
      description: "Olvídate de la calculadora. Nuestra potente base de datos incluye más de 240.000 alimentos validados. La IA genera planes nutricionales milimétricos en segundos ajustando macros y calorías automáticamente.",
      highlight: "Edita, clona y asigna dietas personalizadas sin perder horas frente a la pantalla.",
      keywords: ["IA", "planes nutricionales", "240.000 alimentos"],
    },
    rutinas: {
      id: "rutinas",
      icon: <Activity size={28} color="#eab308" strokeWidth={2} />,
      title: "Ingeniería de Entrenamiento",
      subtitle: "Training Engineering & AI",
      image: "/carrousel/RUTINAS.png",
      description: "El creador de rutinas para entrenadores personales más avanzado. Deja que la IA diseñe periodizaciones complejas, o accede a nuestra biblioteca infinita para estructurar series adaptables.",
      highlight: "Tu metodología, impulsada por tecnología deportiva de alto rendimiento.",
      keywords: ["creador de rutinas para entrenadores personales", "IA", "periodizaciones"],
    },
    seguimiento: {
      id: "seguimiento",
      icon: <RefreshCw size={28} color="#a855f7" strokeWidth={2} />,
      title: "Seguimiento 360º",
      subtitle: "Full Tracking & Audio Transcription",
      image: "/carrousel/SEGUIMIENTO.png",
      description: 'La app para entrenadores personales líder en tracking. Compara y analiza métricas vitales de tu atleta, fotos "Antes/Después" y lee los audios de tus clientes transcritos a texto.',
      highlight: "Entiende el contexto de tus atletas al instante, sin escuchar notas de voz eternas.",
      keywords: ["app para entrenadores personales", "tracking", "transcritos a texto"],
    },
    feedback: {
      id: "feedback",
      icon: <Zap size={28} color="#60a5fa" strokeWidth={2} />,
      title: "Feedback Instantáneo",
      subtitle: "Real-time Communication",
      image: "/carrousel/SEGUIMIENTO.png",
      description: "La comunicación que retiene clientes. Envía correcciones técnicas en tiempo real, marca videos y ofrece feedback motivacional en una experiencia continua.",
      highlight: "Un atleta guiado de forma inmersiva es un atleta que renueva su suscripción mensual.",
      keywords: ["retiene clientes", "feedback motivacional"],
    },
    facturacion: {
      id: "facturacion",
      icon: <CreditCard size={28} color="#4ade80" strokeWidth={2} />,
      title: "Piloto Automático Financiero",
      subtitle: "Anti-Churn System",
      image: "/carrousel/FACTURACION.png",
      description: "Automatiza los cobros de tus clientes de entrenamiento. El sistema B2B cobra suscripciones recurrentes, previene impagos y bloquea el acceso en caso de morosidad.",
      highlight: "Nuestro Sistema Anti-Abandono detecta inactividad antes de perder el Lead.",
      keywords: ["cobros de tus clientes de entrenamiento", "Anti-Abandono", "suscripciones recurrentes"],
    },
    progresion: {
      id: "progresion",
      icon: <BarChart3 size={28} color="#ef4444" strokeWidth={2} />,
      title: "Analítica de Progreso Visual",
      subtitle: "Visual Progress Analytics",
      image: "/carrousel/PROGRESION.png",
      description: "Multiplica el ticket medio con datos medibles. Transforma la evolución de peso, 1RM, y adherencia en espectaculares gráficas visuales que fidelizan automáticamente.",
      highlight: "Demuestra el ROI (Retorno de Inversión) de tu suscripción de entrenamiento velozmente.",
      keywords: ["ticket medio", "fidelizan", "ROI"],
    },
    branding: {
      id: "branding",
      icon: <Palette size={28} color="#ec4899" strokeWidth={2} />,
      title: "Implementador de Branding IA",
      subtitle: "White Label Experience",
      image: "/carrousel/BOARD.png",
      description:
        "Diseña tu app de fitness marca blanca. Con un click, inyecta los colores de tu branding corporativo, logotipos únicos, y temas visuales generados algorítmicamente para el ecosistema móvil de tus atletas.",
      highlight:
        "Diferénciate del resto ofreciendo un producto 100% premium y personalizado sin picar código.",
      keywords: [
        "app de fitness marca blanca",
        "branding corporativo",
        "ecosistema móvil",
      ],
    },
  };

  const featureOrder = [
    "board",
    "nutricion",
    "rutinas",
    "seguimiento",
    "facturacion",
    "progresion",
    "branding",
  ];

  const handleFeatureClick = (featureId) => {
    if (featureId === activeFeature || isAnimating) return;

    setIsAnimating(true);

    // Animación de salida
    if (imageRef.current) {
      imageRef.current.style.opacity = "0";
      imageRef.current.style.transform = "translateX(20px)";
    }

    setTimeout(() => {
      setActiveFeature(featureId);
      // Animación de entrada
      if (imageRef.current) {
        imageRef.current.style.transform = "translateX(-20px)";
        requestAnimationFrame(() => {
          if (imageRef.current) {
            imageRef.current.style.opacity = "1";
            imageRef.current.style.transform = "translateX(0)";
          }
        });
      }
      setIsAnimating(false);
    }, 250);
  };

  // Función para resaltar palabras clave
  const highlightKeywords = (text, keywords) => {
    if (!keywords || keywords.length === 0) return text;

    let result = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi");
      result = result.replace(
        regex,
        '<span class="keyword-highlight">$1</span>',
      );
    });
    return result;
  };

  const currentFeature = features[activeFeature];

  // Versión móvil: Acordeón
  if (isMobile) {
    return (
      <section className="features-switcher" id="features">
        <div className="container">
          <div className="section-header">
            <div className="badge animate-scaleIn">
              <Rocket size={16} className="inline mr-2" /> Demostración de
              Producto
            </div>
            <h2 className="gradient-text">
              Tu Suite de Herramientas Profesional
            </h2>
            <p>
              Haz clic en cada funcionalidad para ver cómo potenciará tu negocio
            </p>
          </div>

          <div className="features-accordion">
            {featureOrder.map((featureId) => {
              const feature = features[featureId];
              const isActive = activeFeature === featureId;

              return (
                <div
                  key={feature.id}
                  className={`accordion-item ${isActive ? "active" : ""}`}
                >
                  <button
                    className="accordion-header"
                    onClick={() => handleFeatureClick(feature.id)}
                  >
                    <div className="accordion-header-content">
                      <span className="feature-icon">{feature.icon}</span>
                      <span className="feature-title">{feature.title}</span>
                    </div>
                    <span className="accordion-arrow">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`accordion-content ${isActive ? "expanded" : ""}`}
                  >
                    <div className="accordion-image-wrapper">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        className="accordion-image"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="accordion-text">
                      <p
                        className="feature-description"
                        dangerouslySetInnerHTML={{
                          __html: highlightKeywords(
                            feature.description,
                            feature.keywords,
                          ),
                        }}
                      />
                      <p className="feature-highlight">{feature.highlight}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Versión Desktop: Feature Switcher estilo Apple/Stripe
  return (
    <section className="features-switcher" id="features">
      <div className="container">
        <div className="section-header">
          <div className="badge animate-scaleIn">
            <Rocket size={16} className="inline mr-2" /> Demostración de
            Producto
          </div>
          <h2 className="gradient-text">
            Tu Suite de Herramientas Profesional
          </h2>
          <p>
            Haz clic en cada funcionalidad para ver cómo potenciará tu negocio
          </p>
        </div>

        <div className="features-content">
          {/* Lista de funcionalidades - Izquierda */}
          <div className="features-list">
            {featureOrder.map((featureId) => {
              const feature = features[featureId];
              return (
                <button
                  key={feature.id}
                  className={`feature-item ${activeFeature === feature.id ? "active" : ""}`}
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <div className="feature-item-icon">{feature.icon}</div>
                  <div className="feature-item-text">
                    <h4>{feature.title}</h4>
                    <span className="feature-subtitle">{feature.subtitle}</span>
                  </div>
                  <div className="feature-item-arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </div>
                  {activeFeature === feature.id && (
                    <div className="active-indicator"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Display de imagen y descripción - Derecha */}
          <div className="feature-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="feature-image-container"
                ref={imageRef}
              >
                <div className="image-glow"></div>
                <Image
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="feature-image"
                  width={800}
                  height={600}
                  priority
                />
                <div className="image-reflection"></div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`info-${activeFeature}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="feature-info"
              >
                <div className="feature-info-header">
                  <div className="info-icon">{currentFeature.icon}</div>
                  <h3>{currentFeature.title}</h3>
                </div>
                <p
                  className="feature-description"
                  dangerouslySetInnerHTML={{
                    __html: highlightKeywords(
                      currentFeature.description,
                      currentFeature.keywords,
                    ),
                  }}
                />
                <p className="feature-highlight">
                  <Sparkles
                    size={20}
                    className="highlight-icon text-yellow-400"
                  />
                  {currentFeature.highlight}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
