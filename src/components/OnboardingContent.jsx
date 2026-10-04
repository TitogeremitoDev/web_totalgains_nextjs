"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { trackEvent } from '@/components/Analytics';
import DemoVideo from '@/components/DemoVideo';
import '@/app/onboarding/Onboarding.css';

export default function OnboardingContent() {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const handleNext = () => {
        trackEvent('onboarding_step_complete', { step });
        if (step < 3) {
            setStep(step + 1);
        } else {
            trackEvent('onboarding_complete', { step: 3 });
            /* Va a «Crear cuenta», no a «Entrar»: quien llega aquí aún no tiene cuenta.
               ⚠️ Necesita la web-app con el guard que respeta /register (app 4332a7d2,
               PLAN_entrada-coach.md R3) publicada en /app/; con una /app/ anterior, la
               carga directa de /app/register rebota a /app/login (lo mismo que antes). */
            trackEvent('signup_redirect', { destination: 'app_register' });
            window.location.href = "https://totalgains.es/app/register";
        }
    };

    return (
        <main className="onboarding-page">
            <div className="glass onboarding-card animate-fadeInUp">
                <div className="onboarding-content"><h1 className="sr-only">Empieza gratis con TotalGains: configura tu entorno</h1>
                    <div className="progress-bar">
                        <div className={`progress-segment ${step >= 1 ? 'active' : ''}`}></div>
                        <div className={`progress-segment ${step >= 2 ? 'active' : ''}`}></div>
                        <div className={`progress-segment ${step >= 3 ? 'active' : ''}`}></div>
                    </div>

                    {step === 1 && (
                        <div className="animate-fadeInUp step-container">
                            <h2 className="step-title">¿Cuántos clientes gestionas actualmente?</h2>
                            <p className="step-subtitle">Sea cual sea tu caso, puedes empezar gratis.</p>
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
                            <p className="step-subtitle">Cuéntanoslo: en TotalGains tienes herramientas para los tres.</p>
                            <div className="options-grid">
                                <button className="btn btn-outline w-full txt-left" onClick={handleNext}>Perder tiempo haciendo rutinas</button>
                                <button className="btn btn-outline w-full txt-left" onClick={handleNext}>Llevar dietas y seguimiento a mano</button>
                                <button className="btn btn-outline w-full txt-left" onClick={handleNext}>Comunicación desordenada por WhatsApp</button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-fadeInUp step-container text-center">
                            <span className="celebration-emoji">🎉</span>
                            <h2 className="step-title gradient-text">¡Todo listo!</h2>
                            <p className="step-subtitle mx-auto">Así arranca tu panel en 45 segundos: tus misiones, lo que ganas y dónde pedir ayuda.</p>
                            {/* El mismo vídeo de bienvenida que ve el coach al activar su prueba
                                (PLAN_entrada-coach.md R6): horizontal en el ordenador y vertical
                                en el móvil. preload="none": no se baja nada hasta pulsar play. */}
                            <div className="ob-video ob-video--wide">
                                <DemoVideo
                                    src="/video/coach-bienvenida-escritorio.mp4"
                                    poster="/video/coach-bienvenida-escritorio.jpg"
                                    titulo="Bienvenida a TotalGains para entrenadores"
                                    ubicacion="onboarding"
                                />
                            </div>
                            <div className="ob-video ob-video--tall">
                                <DemoVideo
                                    src="/video/coach-bienvenida-movil.mp4"
                                    poster="/video/coach-bienvenida-movil.jpg"
                                    width={720}
                                    height={1280}
                                    titulo="Bienvenida a TotalGains para entrenadores"
                                    ubicacion="onboarding"
                                />
                            </div>
                            <button className="btn btn-primary btn-lg w-full mt-4" onClick={handleNext}>
                                Crear mi cuenta gratis
                            </button>
                            <p className="microcopy-secure mt-4">Sin tarjeta de crédito. Cancela cuando quieras.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
