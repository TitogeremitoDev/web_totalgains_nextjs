"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Rocket, Play, Trophy, Palette, Sparkles,
  Users, TrendingUp
} from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import './Hero.css';

const SLIDES = [
  { src: '/screenshots/home_coach.webp',        alt: 'Home del coach' },
  { src: '/screenshots/coach_clientes.webp',    alt: 'Gestión de clientes' },
  { src: '/screenshots/coach_rutinas.webp',     alt: 'Rutinas' },
  { src: '/screenshots/coach_seguimiento.webp', alt: 'Seguimiento' },
  { src: '/screenshots/coach_nutricion.webp',   alt: 'Nutrición' },
];

const Hero = () => {
  const stageRef     = useRef(null);
  const stageInnerRef = useRef(null);
  const heroRef      = useRef(null);
  const [slide, setSlide] = useState(0);

  // Auto-slideshow
  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 4000);
    return () => clearInterval(id);
  }, []);

  // Scroll parallax
  useEffect(() => {
    let raf = null;
    const handle = () => {
      const isMobile = window.innerWidth < 980;
      const y = window.scrollY;
      const h = heroRef.current?.offsetHeight || 1;
      const p = Math.min(1, Math.max(0, y / h));
      if (stageInnerRef.current && !isMobile) {
        stageInnerRef.current.style.transform =
          `scale(${1 - p * 0.08}) translateY(${p * -30}px)`;
      }
      if (heroRef.current) {
        if (isMobile) {
          heroRef.current.style.filter  = '';
          heroRef.current.style.opacity = '';
        } else {
          heroRef.current.style.filter  = `blur(${p * 4}px)`;
          heroRef.current.style.opacity = String(1 - p * 0.5);
        }
      }
      if (!isMobile) {
        document.querySelectorAll('[data-depth]').forEach(el => {
          const d = parseFloat(el.dataset.depth) || 10;
          el.style.setProperty('--py', `${p * d * -1}px`);
        });
      }
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = null; handle(); });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    handle();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Tilt 3D on stage
  useEffect(() => {
    const s = stageRef.current;
    const inner = stageInnerRef.current;
    if (!s || !inner) return;
    let raf = null;
    const mv = e => {
      const r = s.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - .5) * 2;
      const y = ((e.clientY - r.top) / r.height - .5) * 2;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        inner.style.transform =
          `perspective(1400px) rotateY(${x * 4}deg) rotateX(${-y * 3}deg)`;
      });
    };
    const lv = () => { inner.style.transform = ''; };
    s.addEventListener('mousemove', mv);
    s.addEventListener('mouseleave', lv);
    return () => {
      s.removeEventListener('mousemove', mv);
      s.removeEventListener('mouseleave', lv);
    };
  }, []);

  // Magnetic buttons
  useEffect(() => {
    const els = document.querySelectorAll('.magnetic');
    const handlers = [];
    els.forEach(el => {
      const mv = e => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * .15}px, ${y * .25}px)`;
      };
      const lv = () => { el.style.transform = ''; };
      el.addEventListener('mousemove', mv);
      el.addEventListener('mouseleave', lv);
      handlers.push([el, mv, lv]);
    });
    return () => handlers.forEach(([el, mv, lv]) => {
      el.removeEventListener('mousemove', mv);
      el.removeEventListener('mouseleave', lv);
    });
  }, []);

  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="hero-bg">
        <div className="orb orb-a"></div>
        <div className="orb orb-b"></div>
        <div className="orb orb-c"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="container hero-container">
        {/* LEFT */}
        <div className="hero-content">
          <div className="platform-row">
            <span className="chip">
              <span className="dot"></span> Prueba gratuita 14 días · Sin tarjeta
            </span>
          </div>

          <div className="eyebrow">Software para entrenadores personales</div>

          <h1 className="hero-title">
            <span className="line"><span>Software para</span></span>
            <span className="line"><span>Entrenadores Personales</span></span>
            <span className="line"><span><em className="accent-gold">sin límites.</em></span></span>
          </h1>

          <p className="hero-subtitle">
            La plataforma fitness que gestiona atletas, automatiza cobros y diseña rutinas con IA.
            Todo desde una sola app — iOS, Android y Web.
          </p>

          <div className="hero-cta">
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="/onboarding"
              className="btn-gold-lg magnetic"
              onClick={() => trackEvent('cta_click', { cta_text: 'Empieza gratis 14 días', cta_location: 'hero' })}
            >
              <Rocket size={20} /> Empieza gratis 14 días
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="#app-showcase"
              className="btn-outline-lg magnetic"
            >
              <Play size={18} /> Ver en acción
            </motion.a>
          </div>

          <div className="hero-stores">
            <span className="hero-stores-label">O descárgala directamente:</span>
            <div className="hero-stores-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.german92.titofitapp"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-store-btn"
                onClick={() => trackEvent('app_download_click', { store: 'google_play', location: 'hero' })}
                aria-label="Descargar TotalGains en Google Play"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="#8ab4f8" d="M3.609 1.814L13.792 12 3.61 22.186c-.483-.24-.82-.743-.82-1.32V3.134c0-.577.337-1.08.82-1.32zm10.89 10.186l2.728-2.728 2.92 1.686c.91.525.91 1.859 0 2.384l-2.92 1.686-2.728-2.728-2.728 2.728-4.77 2.757L13.79 12 6.001 4.215l4.77 2.757L14.5 12z"/>
                </svg>
                <span>Google Play</span>
              </a>
              <a
                href="https://apps.apple.com/app/id6756856683"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-store-btn"
                onClick={() => trackEvent('app_download_click', { store: 'app_store', location: 'hero' })}
                aria-label="Descargar TotalGains en App Store"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="#fff" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span>App Store</span>
              </a>
            </div>
          </div>

          <div className="hero-trust">
            <Link href="/base-datos-alimentos-fitness/" className="trust" prefetch={false}>
              <Trophy size={18} color="#EAB308" /> +240.000 Alimentos
            </Link>
            <Link href="/app-marca-blanca-entrenador-personal/" className="trust" prefetch={false}>
              <Palette size={18} color="#ec4899" /> Branding IA
            </Link>
            <Link href="/ia-entrenador-personal/" className="trust" prefetch={false}>
              <Sparkles size={18} color="#a855f7" /> IA con tu base de datos →
            </Link>
          </div>
        </div>

        {/* RIGHT: stage */}
        <div className="stage" ref={stageRef}>
          <div className="stage-inner" ref={stageInnerRef}>

            <div className="f-card f-a" data-depth="20">
              <div className="ic"><Users size={18} color="#fff" /></div>
              <div>
                <div className="lbl">Atletas activos</div>
                <div className="val">+37 este mes</div>
              </div>
            </div>

            <div className="f-card f-b" data-depth="30">
              <div className="ic"><TrendingUp size={18} color="#fff" /></div>
              <div>
                <div className="lbl">Ingresos recurrentes</div>
                <div className="val">€4.820 / mes</div>
              </div>
            </div>

            <div className="f-card f-c" data-depth="25">
              <div className="ic"><Sparkles size={18} color="#fff" /></div>
              <div>
                <div className="lbl">Rutina IA generada</div>
                <div className="val">en 2.4s</div>
              </div>
            </div>

            <div className="tile tile-a" data-depth="10">
              <Image src="/screenshots/coach_evolucion.webp" alt="Evolución" width={280} height={500} />
            </div>
            <div className="tile tile-b" data-depth="15">
              <Image src="/screenshots/coach_nutricion.webp" alt="Nutrición" width={280} height={500} />
            </div>

            <div className="phone" data-depth="5">
              <div className="screen">
                <div className="progress-bars">
                  {SLIDES.map((_, i) => (
                    <div key={i} className={`pb ${i === slide ? 'active' : i < slide ? 'done' : ''}`}>
                      <span key={`${i}-${slide}`}></span>
                    </div>
                  ))}
                </div>
                {SLIDES.map((s, i) => (
                  <div key={i} className={`slide ${i === slide ? 'active' : ''}`}>
                    <Image src={s.src} alt={s.alt} fill priority={i === 0} fetchPriority={i === 0 ? "high" : "auto"} sizes="330px" />
                  </div>
                ))}
              </div>
            </div>

            <div className="phone-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
