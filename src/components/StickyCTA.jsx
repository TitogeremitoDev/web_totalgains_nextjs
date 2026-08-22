"use client";

import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import './StickyCTA.css';

/**
 * CTA fijo en móvil: aparece cuando el hero sale de vista.
 *
 * `anchorId` es el id del hero de CADA página, no siempre "home" — la landing
 * usa "lp-hero" y las comparativas "alt-hero". Sin un id que exista, el
 * IntersectionObserver no engancha y el botón no llega a aparecer nunca.
 *
 * Props:
 *   anchorId    string — id del elemento cuya salida de pantalla dispara el CTA
 *   href        string — destino (por defecto el onboarding)
 *   text        string — etiqueta del botón
 *   ctaLocation string — para distinguir en analítica de qué página vino
 */
const StickyCTA = ({
    anchorId = 'home',
    href = '/onboarding/',
    text = 'Empieza gratis · 5 atletas',
    ctaLocation = 'sticky_mobile',
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById(anchorId);
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(!entry.isIntersecting),
            { threshold: 0, rootMargin: '-60px 0px 0px 0px' }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, [anchorId]);

    return (
        <div className={`sticky-cta ${visible ? 'sticky-cta--visible' : ''}`} aria-hidden={!visible}>
            <a
                href={href}
                className="sticky-cta-btn"
                tabIndex={visible ? 0 : -1}
                onClick={() => trackEvent('cta_click', { cta_text: text, cta_location: ctaLocation })}
            >
                <Rocket size={18} />
                <span>{text}</span>
            </a>
        </div>
    );
};

export default StickyCTA;
