"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

/* El pase de capturas del teléfono de la portada, con SU propio contador.
   Antes la cuenta vivía en Hero y cada 4 segundos React repintaba la cabecera
   entera (titular, botones, tarjetas flotantes) para cambiar una foto
   (revisión de la web 21-nov, mejora 702F). */
const SLIDES = [
  { src: '/screenshots/home_coach.webp',        alt: 'Home del coach' },
  { src: '/screenshots/coach_clientes.webp',    alt: 'Gestión de clientes' },
  { src: '/screenshots/coach_rutinas.webp',     alt: 'Rutinas' },
  { src: '/screenshots/coach_seguimiento.webp', alt: 'Seguimiento' },
  { src: '/screenshots/coach_nutricion.webp',   alt: 'Nutrición' },
];

export default function HeroSlideshow() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
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
  );
}
