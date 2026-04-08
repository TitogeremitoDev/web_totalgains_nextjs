"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowLeft } from "lucide-react";
import "./AppShowcase.css";
import Image from "next/image";
import { screens } from "../data/appShowcaseScreens";

// Get screens by category for the selector
const clienteScreens = Object.values(screens).filter(
  (s) => s.category === "cliente",
);
const coachScreens = Object.values(screens).filter(
  (s) => s.category === "coach",
);

const AppShowcase = () => {
  const [currentScreenId, setCurrentScreenId] = useState("login");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [navigationHistory, setNavigationHistory] = useState(["login"]);

  // Handle screen navigation with animation
  const handleScreenChange = (targetId) => {
    if (targetId === currentScreenId || !screens[targetId]) return;

    setIsTransitioning(true);
    setNavigationHistory((prev) => [...prev, targetId]);

    setTimeout(() => {
      setCurrentScreenId(targetId);
      setIsTransitioning(false);
    }, 200);
  };

  // Go back in history
  const handleGoBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = [...navigationHistory];
      newHistory.pop();
      const previousScreen = newHistory[newHistory.length - 1];

      setIsTransitioning(true);
      setNavigationHistory(newHistory);

      setTimeout(() => {
        setCurrentScreenId(previousScreen);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const currentScreen = screens[currentScreenId];

  return (
    <section className="app-showcase" id="app-showcase">
      <div className="showcase-bg-gradient"></div>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="gradient-text">Explora la app de entrenamiento en acción</h2>
          <p>
            Pulsa en los elementos de la pantalla para navegar como en la app
            real
          </p>
        </div>

        <div className="showcase-content">
          {/* Interactive Phone with Hotspots */}
          <div className="showcase-phone animate-on-scroll">
            {/* Navigation hint above phone */}
            <div className="navigation-hint-top">
              <span>Haz clic en los botones de la imagen para navegar</span>
              <ArrowDown
                size={32}
                className="hint-icon-down text-white/50 animate-bounce"
              />
            </div>{" "}
            <div className="screen-header-row">
              {navigationHistory.length > 1 && (
                <button className="back-btn" onClick={handleGoBack}>
                  Atrás
                </button>
              )}
              <span
                className={`screen-category-badge ${currentScreen.category}`}
              >
                {currentScreen.category === "cliente"
                  ? "Cliente"
                  : currentScreen.category === "coach"
                    ? "Coach"
                    : "Auth"}
              </span>
            </div>
            <div className="phone-frame-showcase">
              <div className="phone-notch-showcase"></div>
              <div
                className={`phone-screen-showcase interactive-screen ${isTransitioning ? "transitioning" : ""}`}
              >
                {/* Screen Image */}
                <Image
                  src={currentScreen.image}
                  alt={currentScreen.title}
                  className="screen-image"
                  fill
                  style={{ objectFit: 'contain' }}
                />

                {/* Hotspots Overlay - Clickable areas */}
                <div className="hotspots-layer">
                  {currentScreen.hotspots &&
                    currentScreen.hotspots.map((spot) => (
                      <div
                        key={spot.id}
                        className={`hotspot ${spot.id.includes("back") ? "hotspot-back" : ""}`}
                        style={{
                          top: spot.top,
                          left: spot.left,
                          width: spot.width,
                          height: spot.height,
                        }}
                        onClick={() => handleScreenChange(spot.target)}
                        title={spot.label}
                      >
                        {/* Visible arrow for back buttons */}
                        {spot.id.includes("back") && (
                          <ArrowLeft size={20} className="hotspot-arrow mr-2" />
                        )}
                        <span className="hotspot-ripple"></span>
                        <span className="hotspot-label">{spot.label}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="phone-glow-showcase"></div>
          </div>

          {/* Screen info and selector */}
          <div className="showcase-info animate-on-scroll">
            <div className="screen-details">
              <h3>{currentScreen.title}</h3>
              <p className="screen-subtitle">{currentScreen.subtitle}</p>
              <p className="screen-description">{currentScreen.description}</p>
            </div>

            {/* Quick navigation selector */}
            <div className="screen-selector-grid">
              {/* Cliente Column */}
              <div className="selector-column">
                {/* Auth/Login section */}
                <div className="auth-section">
                  <button
                    className={`screen-btn auth-btn ${currentScreenId === "login" ? "active" : ""}`}
                    onClick={() => {
                      setCurrentScreenId("login");
                      setNavigationHistory(["login"]);
                    }}
                  >
                    Iniciar Sesión
                  </button>
                </div>

                <h4 className="column-title">Cliente</h4>
                <div className="screen-selector">
                  {clienteScreens.slice(0, 6).map((screen) => (
                    <button
                      key={screen.id}
                      className={`screen-btn ${currentScreenId === screen.id ? "active" : ""}`}
                      onClick={() => handleScreenChange(screen.id)}
                    >
                      <span className="screen-btn-title">{screen.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Entrenador Column */}
              <div className="selector-column">
                <h4 className="column-title"> Entrenador</h4>
                <div className="screen-selector">
                  {coachScreens.slice(0, 7).map((screen) => (
                    <button
                      key={screen.id}
                      className={`screen-btn ${currentScreenId === screen.id ? "active" : ""}`}
                      onClick={() => handleScreenChange(screen.id)}
                    >
                      <span className="screen-btn-title">{screen.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
