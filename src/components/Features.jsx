"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Rocket,
} from "lucide-react";
import "./Features.css";
import { features, featureOrder } from "../data/featuresData";


const Features = () => {
  const [activeFeature, setActiveFeature] = useState("board");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef(null);

  // Detectar si es móvil con Debounce
  useEffect(() => {
    let timeoutId = null;
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    const debouncedCheck = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150); // 150ms debounce
    };

    checkMobile();
    window.addEventListener("resize", debouncedCheck);
    return () => {
      window.removeEventListener("resize", debouncedCheck);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleFeatureClick = (featureId) => {
    if (isAnimating) return;

    // Permitir contraer si ya está activo en móvil
    if (featureId === activeFeature) {
      if (isMobile) {
        setActiveFeature(null);
      }
      return;
    }

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

  const currentFeature = activeFeature ? features[activeFeature] : features[featureOrder[0]];

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
