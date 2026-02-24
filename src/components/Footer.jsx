import React from 'react';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/logo-optimized.webp" alt="TotalGains" />
                            <span className="gradient-text">TotalGains</span>
                        </div>
                        <p className="footer-tagline">
                            Conectando entrenadores y clientes para alcanzar objetivos extraordinarios.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.instagram.com/totalgainsfitness/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@totalgainsapp" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 002.51 15a6.34 6.34 0 0010.86 4.43V8.67a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.45-.1z" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UCOJehcX1G6jABjONKmXCmbQ" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2.12 2.93 2.93 0 001.74 1.52 78.36 78.36 0 008.34.3 78.45 78.45 0 008.34-.3 2.92 2.92 0 001.73-1 8.5 8.5 0 00.91-4.14 48.29 48.29 0 00-.01-4.03zM9.74 14.85V8.66l5.92 3.11z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Navegación</h4>
                            <ul>
                                <li><a href="#home">Inicio</a></li>
                                <li><a href="#features">Funciones</a></li>
                                <li><a href="#app-showcase">Ver App</a></li>
                                <li><a href="#pricing">Precios</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Descargas</h4>
                            <ul>
                                <li><a href="https://play.google.com/store/apps/details?id=com.german92.titofitapp" target="_blank" rel="noopener noreferrer">Android Play Store</a></li>
                                <li><a href="https://apps.apple.com/app/id6756856683" target="_blank" rel="noopener noreferrer">iOS App Store</a></li>
                                <li><a href="https://totalgains.es/app/login" target="_blank" rel="noopener noreferrer">Web App</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><Link href="/privacy" prefetch={false}>Privacidad</Link></li>
                                <li><Link href="/terms" prefetch={false}>Términos</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Contacto</h4>
                            <ul>
                                <li><a href="#contact">Soporte</a></li>
                                <li><a href="https://titogeremito.com" target="_blank" rel="noopener noreferrer">Web Desarrollador</a></li>
                                <li><a href="mailto:ger3dman@gmail.com">Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="divider"></div>
                    <p className="flex items-center justify-center gap-1">
                        © {currentYear} TotalGains. Todos los derechos reservados.
                        Desarrollado con <Heart size={14} className="text-purple-500 fill-current" /> por <a href="https://titogeremito.com" target="_blank" rel="noopener noreferrer">Tito Geremito</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
