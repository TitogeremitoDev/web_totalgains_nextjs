"use client";

import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import './StickyCTA.css';

const StickyCTA = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById('home');
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(!entry.isIntersecting),
            { threshold: 0, rootMargin: '-60px 0px 0px 0px' }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`sticky-cta ${visible ? 'sticky-cta--visible' : ''}`} aria-hidden={!visible}>
            <a
                href="/onboarding"
                className="sticky-cta-btn"
                tabIndex={visible ? 0 : -1}
                onClick={() => trackEvent('cta_click', { cta_text: 'Empieza gratis', cta_location: 'sticky_mobile' })}
            >
                <Rocket size={18} />
                <span>Empieza gratis · 14 días</span>
            </a>
        </div>
    );
};

export default StickyCTA;
