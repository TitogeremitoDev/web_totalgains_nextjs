"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './Onboarding.css';

export default function Onboarding() {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            window.location.href = "https://totalgains.es/app/login";
        }
    };

    return (
        <main className="onboarding-page">
            <div className="glass onboarding-card animate-fadeInUp">
                <div className="onboarding-content">
                    <div className="progress-bar">
                        <div className={`progress-segment ${step >= 1 ? 'active' : ''}`}></div>
                        <div className={`progress-segment ${step >= 2 ? 'active' : ''}`}></div>
                        <div className={`progress-segment ${step >= 3 ? 'active' : ''}`}></div>
                    </div>

                    {step === 1 && (
                        <div className="animate-fadeInUp step-container">
                            <h2 className="step-title">¿Cuántos clientes gestionas actualmente?</h2>
                            <p className="step-subtitle">Esto nos ayuda a configurar tu plan de recursos.</p>
                            <div className="options-grid">
                                <button className="btn btn-outline w-full txt-left" onClick={handleNext}>0 - 10 (Estoy empezando)</button>
                                <button className="btn btn-outline w-full txt-left" onClick={handleNext}>11 - 50 (Creciendo)</button>
                                <button className="btn btn-outline w-full txt-left" onClick={handleNext}>Más de 50 (Top Coach)</button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-fadeInUp step-container">
                            <h2 className="step-title">¿Cuál es tu mayor desafío hoy?</h2>
                            <p className="step-subtitle">Adaptaremos tu dashboard para solucionar esto volando.</p>
                            <div className="options-grid">
                                <button className="btn btn-outline w-full txt-left" onClick={handleNext}>Perder tiempo haciendo rutinas</button>
                                <button className="btn btn-outline w-full txt-left" onClick={handleNext}>Cobrar a morosos / Gestión financiera</button>
                                <button className="btn btn-outline w-full txt-left" onClick={handleNext}>Comunicación desordenada por WhatsApp</button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-fadeInUp step-container text-center">
                            <span className="celebration-emoji">🎉</span>
                            <h2 className="step-title gradient-text">¡Entorno optimizado!</h2>
                            <p className="step-subtitle mx-auto">Hemos configurado tu espacio de trabajo B2B con IA integrada. Crea tu cuenta para acceder a tu Panel de Control profesional.</p>
                            <button className="btn btn-primary btn-lg w-full mt-4" onClick={handleNext}>
                                Acceder a mi panel (Regístrate ahora)
                            </button>
                            <p className="microcopy-secure mt-4">Sin tarjeta de crédito. Cancela cuando quieras.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
