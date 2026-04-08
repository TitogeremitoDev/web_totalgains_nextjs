"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './Navbar.css';
import { trackEvent } from '@/components/Analytics';

const navLinks = [
    { href: '#how-it-works', label: 'Cómo Funciona' },
    { href: '#app-showcase', label: 'Explora la App' },
    { href: '/alternativas/trainerize', label: 'vs Trainerize' },
    { href: '#pricing', label: 'Precios' }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigation = (e, targetHref) => {
        // Si el enlace es una ruta real de Next.js (no un anclaje '#'), deja que Next/Link lo maneje de forma nativa.
        if (!targetHref.startsWith('#')) {
            setMenuOpen(false);
            return;
        }

        e.preventDefault();
        setMenuOpen(false);

        // Si es un anclaje '#', aplicamos lógica de scroll SUAVE y ajuste de Header si estamos en la home
        if (pathname === '/') {
            const element = document.querySelector(targetHref);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        } else {
            // Si estamos en otra página (ej. /alternativas/trainerize) y clican un '#contacto'
            // Mandamos duro a la home + anclaje
            router.push(`/${targetHref}`);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="navbar-logo" onClick={(e) => handleNavigation(e, '#home')}>
                    <img src="/logo-optimized.webp" alt="TotalGains" />
                    <span className="logo-text">TotalGains</span>
                </a>

                <div className="navbar-links">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="nav-link"
                            onClick={(e) => handleNavigation(e, link.href)}
                            prefetch={false}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="navbar-actions">
                    <Link href="https://totalgains.es/app/login" className="btn btn-outline" prefetch={false}>
                        Ya estoy<br />registrado
                    </Link>
                    <Link href="/onboarding" className="btn btn-primary" prefetch={false}
                        onClick={() => trackEvent('cta_click', { cta_text: 'Empieza gratis 14 Días', cta_location: 'navbar' })}
                    >
                        Empieza gratis<br />14 Días
                    </Link>
                </div>

                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-links-container">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="mobile-link"
                            onClick={(e) => handleNavigation(e, link.href)}
                            prefetch={false}
                        >
                            {link.label}
                            <svg className="mobile-link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    ))}
                </div>

                <div className="mobile-footer">
                    <Link
                        href="https://totalgains.es/app/login"
                        className="btn btn-outline"
                        onClick={() => setMenuOpen(false)}
                        prefetch={false}
                    >
                        Ya estoy registrado
                    </Link>
                    <Link
                        href="/onboarding"
                        className="btn btn-primary"
                        onClick={() => { setMenuOpen(false); trackEvent('cta_click', { cta_text: 'Empieza gratis 14 Días', cta_location: 'navbar_mobile' }); }}
                        prefetch={false}
                    >
                        Empieza gratis 14 Días
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
