import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Dumbbell, Target, BarChart2, MessageCircle, Video, Trophy, Smartphone, Users, ClipboardList, LineChart, Coins, Link, Star } from 'lucide-react';
import './RoleSelector.css';

const RoleSelector = () => {
    const [selectedRole, setSelectedRole] = useState('cliente');

    const benefits = {
        cliente: [
            {
                icon: <Target size={38} className="text-blue-400" strokeWidth={2} />,
                title: 'Planes Personalizados',
                description: 'Rutinas y dietas adaptadas a tus objetivos específicos'
            },
            {
                icon: <BarChart2 size={38} className="text-indigo-400" strokeWidth={2} />,
                title: 'Seguimiento en Tiempo Real',
                description: 'Monitoriza tu progreso con estadísticas detalladas'
            },
            {
                icon: <MessageCircle size={38} className="text-teal-400" strokeWidth={2} />,
                title: 'Chat Directo',
                description: 'Comunicación instantánea con tu entrenador personal'
            },
            {
                icon: <Video size={38} className="text-purple-400" strokeWidth={2} />,
                title: 'Videoteca de Ejercicios',
                description: 'Accede a cientos de ejercicios con tutoriales en vídeo'
            },
            {
                icon: <Trophy size={38} className="text-yellow-400" strokeWidth={2} />,
                title: 'Logros y Motivación',
                description: 'Sistema de recompensas para mantenerte motivado'
            },
            {
                icon: <Smartphone size={38} className="text-pink-400" strokeWidth={2} />,
                title: 'App Multiplataforma',
                description: 'Entrena desde cualquier dispositivo, en cualquier lugar'
            }
        ],
        entrenador: [
            {
                icon: <Users size={38} className="text-emerald-400" strokeWidth={2} />,
                title: 'Gestión de Clientes',
                description: 'Panel profesional para administrar todos tus clientes'
            },
            {
                icon: <ClipboardList size={38} className="text-indigo-400" strokeWidth={2} />,
                title: 'Creación de Planes',
                description: 'Herramientas avanzadas para diseñar rutinas y dietas'
            },
            {
                icon: <LineChart size={38} className="text-red-400" strokeWidth={2} />,
                title: 'Analytics Avanzado',
                description: 'Visualiza el progreso de cada cliente con métricas detalladas'
            },
            {
                icon: <Coins size={38} className="text-amber-400" strokeWidth={2} />,
                title: 'Sistema de Pagos',
                description: 'Cobra a tus clientes directamente a través de la plataforma'
            },
            {
                icon: <Link size={38} className="text-cyan-400" strokeWidth={2} />,
                title: 'Códigos de Invitación',
                description: 'Genera códigos únicos para que tus clientes se unan fácilmente'
            },
            {
                icon: <Star size={38} className="text-fuchsia-400" strokeWidth={2} />,
                title: 'Perfil Profesional',
                description: 'Destaca tu experiencia y atrae nuevos clientes'
            }
        ]
    };

    return (
        <section className="role-selector" id="roles">
            <div className="container">
                <div className="section-header">
                    <h2 className="gradient-text">¿Eres Cliente o Entrenador?</h2>
                    <p>Descubre cómo TotalGains puede ayudarte a alcanzar tus metas</p>
                </div>

                <div className="role-toggle">
                    <button
                        className={`role-btn ${selectedRole === 'cliente' ? 'active' : ''}`}
                        onClick={() => setSelectedRole('cliente')}
                    >
                        <User size={36} className="role-icon mb-2" strokeWidth={2.5} />
                        <span className="role-label">Soy Cliente</span>
                    </button>
                    <button
                        className={`role-btn ${selectedRole === 'entrenador' ? 'active' : ''}`}
                        onClick={() => setSelectedRole('entrenador')}
                    >
                        <Dumbbell size={36} className="role-icon mb-2" strokeWidth={2.5} />
                        <span className="role-label">Soy Entrenador</span>
                    </button>
                </div>

                <div className="benefits-grid">
                    {benefits[selectedRole].map((benefit, index) => (
                        <div
                            key={index}
                            className="benefit-card glass animate-scaleIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div className="role-cta">
                    <a href="#downloads" className="btn btn-primary btn-lg">
                        {selectedRole === 'cliente' ? 'Comenzar como Cliente' : 'Comenzar como Entrenador'}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RoleSelector;
