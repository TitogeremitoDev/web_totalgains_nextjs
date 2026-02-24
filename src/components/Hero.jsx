"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Apple, Globe, Rocket, UserCheck, Trophy, Palette, Play, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        if (videoRef.current && !isPlaying) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            videoRef.current.controls = true;
            setIsPlaying(true);
        }
    };

    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="grid-pattern"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content"
                >
                    <div className="platform-badges">
                        <span className="platform-tag"><Smartphone size={14} className="icon-text" /> Android</span>
                        <span className="platform-tag"><Apple size={14} className="icon-text" /> iOS</span>
                        <span className="platform-tag"><Globe size={14} className="icon-text" /> Web App</span>
                    </div>
                    <h1 className="hero-title">Escala tu negocio de <span className="accent-text">entrenamiento</span></h1>

                    <p className="hero-subtitle">
                        Gestiona atletas, automatiza cobros y diseña rutinas con IA.
                    </p>

                    <div className="hero-cta">
                        <motion.a
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            href="/onboarding" className="btn btn-gold btn-lg"
                        >
                            <Rocket size={20} /> Empieza gratis 14 días
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://totalgains.es/app/login" className="btn btn-secondary btn-lg"
                        >
                            <UserCheck size={20} /> Ya estoy registrado
                        </motion.a>
                    </div>

                    <div className="hero-trust">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="trust-badge animate-pulse"
                        >
                            <Trophy size={20} color="#eab308" strokeWidth={2.5} />
                            <span>+240.000 Alimentos</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="trust-badge animate-pulse"
                        >
                            <Palette size={20} color="#ec4899" strokeWidth={2.5} />
                            <span>Branding IA</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Video Promocional */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="hero-visual"
                >
                    <div className="video-container">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="video-frame"
                            onClick={handleVideoClick}
                        >
                            <div className="video-border-glow"></div>
                            <video
                                ref={videoRef}
                                src="/video/Futuristic_Tech_Commercial_Generation.mp4"
                                title="TotalGains - Video Promocional"
                                preload="metadata"
                                playsInline
                                className="promo-video"
                            ></video>

                            {!isPlaying && (
                                <div className="custom-video-poster">
                                    <img src="/logo-optimized.webp" alt="Logotipo principal de TotalGains" className="poster-logo" />
                                    <div className="video-overlay-permanent">
                                        <div className="play-button-wrapper">
                                            <Play size={32} className="play-icon" fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                        <div className="video-glow"></div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="scroll-indicator"
            >
                <span>Descubre más</span>
                <div className="scroll-arrow"><ChevronDown size={24} className="text-white/70" /></div>
            </motion.div>
        </section>
    );
};

export default Hero;
