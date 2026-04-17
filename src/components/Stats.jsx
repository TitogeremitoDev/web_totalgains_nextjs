"use client";

import React, { useEffect, useState } from 'react';
import { Utensils, Smartphone, Clock, Gift } from 'lucide-react';
import './Stats.css';

const stats = [
    { number: '+240K', suffix: '', label: 'Alimentos en BD', icon: <Utensils size={40} color="#10b981" strokeWidth={2.5} /> },
    { number: '3', suffix: '', label: 'Plataformas', icon: <Smartphone size={40} color="#3b82f6" strokeWidth={2.5} /> },
    { number: '+10h', suffix: '', label: 'Ahorro semanal', icon: <Clock size={40} color="#f97316" strokeWidth={2.5} /> },
    { number: '14', suffix: ' días', label: 'Prueba gratis', icon: <Gift size={40} color="#a855f7" strokeWidth={2.5} /> }
];

const Stats = () => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById('stats');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="stats" id="stats">
            <div className="stats-bg-glow"></div>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`stat-item ${animated ? 'animate' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number">
                                <span className="number">
                                    {stat.number}
                                </span>
                                <span className="suffix">{stat.suffix}</span>
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
