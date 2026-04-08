"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  LineChart,
  Globe,
  ArrowRight
} from "lucide-react";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: <Building2 size={44} className="text-purple-400" />,
    title: "Configura tu Software de Entrenamiento",
    description:
      "Accede desde Web, Android o iOS. Define tus servicios y prepara tu entorno de trabajo profesional.",
    color: "primary",
  },
  {
    number: "02",
    icon: <Users size={44} className="text-blue-400" />,
    title: "Añade y Gestiona tus Atletas",
    description:
      "Invita a tus clientes, centraliza sus datos y ofréceles una app dedicada para realizar sus rutinas.",
    color: "secondary",
  },
  {
    number: "03",
    icon: <LineChart size={44} className="text-yellow-400" />,
    title: "Escala tu Negocio de Entrenamiento",
    description:
      "Diseña programas de entrenamiento con IA, automatiza cobros y fideliza a tus clientes.",
    color: "accent",
  },
];

const HowItWorks = () => {

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="gradient-text">Cómo funciona nuestro software de entrenamiento</h2>
          <p>Digitaliza tu negocio fitness y empieza a gestionar atletas en 3 pasos</p>
        </motion.div>

        <div className="steps-container">
          <div className="steps-line"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`step-card step-${step.color}`}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-arrow"><ArrowRight size={20} className="text-gray-400" /></div>}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="container"
        >
          {/* Simple download buttons in a row */}
          <div className="download-buttons">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://play.google.com/store/apps/details?id=com.german92.titofitapp"
              className="download-btn android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.22-.29.15-.4.53-.24.85l1.86 3.2A11.39 11.39 0 0 0 2 19h20c-1.2-3.8-3.41-7.11-6.4-9.52zm-11.4 6.72c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm11.6 0c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2z" /></svg>
              </span>
              <span className="btn-text">Android</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://apps.apple.com/app/id6756856683"
              className="download-btn ios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.05 16.35c-.03.07-2.3 8.16-5.83 8.16-1.57 0-3.32-.97-4.48-.97-1.12 0-2.6.93-4.04.93C1.04 24.47-1.16 19.34.45 14.5c.81-2.45 2.72-4.14 5.3-4.14 1.5 0 2.87.96 3.96.96 1.11 0 2.8-.99 4.67-.99 1.76 0 3.32.78 4.22 2.06-3.86 1.88-3.1 7.15.45 8.92zM12.03 9.36c-1.15 0-2.34-.69-3.07-1.63-.78-.97-1.18-2.22-.98-3.5C8.36 2.5 10.1 1.24 11.83 1.24c1.19 0 2.45.65 3.19 1.58.74.91 1.21 2.21.98 3.5-.47 1.83-2.29 3.04-3.97 3.04z" /></svg>
              </span>
              <span className="btn-text">iOS</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://totalgains.es/app/login"
              className="download-btn web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-icon"><Globe size={24} /></span>
              <span className="btn-text">Web App</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
