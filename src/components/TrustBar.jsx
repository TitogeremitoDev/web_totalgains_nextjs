"use client";

import React from 'react';
import { ShieldCheck, Star, CreditCard, Lock, Smartphone } from 'lucide-react';
import './TrustBar.css';

const items = [
    {
        icon: <CreditCard size={16} color="#10b981" />,
        text: 'Pagos seguros con Stripe',
    },
    {
        icon: <ShieldCheck size={16} color="#667eea" />,
        text: 'Cumple RGPD',
    },
    {
        icon: (
            <span className="trust-stars">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#fbbf24" color="#fbbf24" />
                ))}
            </span>
        ),
        text: '4.8 en App Store',
    },
    {
        icon: <Smartphone size={16} color="#4facfe" />,
        text: 'iOS · Android · Web',
    },
    {
        icon: <Lock size={16} color="#f59e0b" />,
        text: 'Sin tarjeta al registrarse',
    },
];

const TrustBar = () => (
    <div className="trust-bar">
        <div className="trust-bar-inner">
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    <div className="trust-bar-item">
                        {item.icon}
                        <span>{item.text}</span>
                    </div>
                    {i < items.length - 1 && (
                        <div className="trust-bar-divider" aria-hidden="true" />
                    )}
                </React.Fragment>
            ))}
        </div>
    </div>
);

export default TrustBar;
