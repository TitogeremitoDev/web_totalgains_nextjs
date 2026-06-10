"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, XCircle, Lock, Eye, EyeOff } from 'lucide-react';
import './ResetPassword.css';

// URL del backend en Koyeb (la misma que usa la app mobile)
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://consistent-donna-titogeremito-29c943bc.koyeb.app';

function ResetPasswordContent() {
    const params = useSearchParams();
    const token = params.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [errorMessage, setErrorMessage] = useState('');

    // Validar que haya token al cargar
    useEffect(() => {
        if (!token) {
            setStatus('error');
            setErrorMessage('No se encontró el token de recuperación. Solicita un nuevo email.');
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (password.length < 8) {
            setErrorMessage('La contraseña debe tener al menos 8 caracteres.');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden.');
            return;
        }

        setStatus('sending');

        try {
            const res = await fetch(`${API_URL}/api/auth/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, newPassword: password }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus('success');
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'No se pudo actualizar la contraseña. Intenta de nuevo.');
            }
        } catch (err) {
            setStatus('error');
            setErrorMessage('Error de red. Verifica tu conexión e intenta de nuevo.');
        }
    };

    // Pantalla éxito
    if (status === 'success') {
        return (
            <div className="reset-page">
                <div className="reset-container">
                    <div className="reset-card">
                        <div className="reset-icon success">
                            <CheckCircle size={64} />
                        </div>
                        <h1>¡Contraseña actualizada!</h1>
                        <p className="reset-subtitle">
                            Tu contraseña se ha cambiado correctamente. Ya puedes iniciar sesión en la app TotalGains con tu nueva contraseña.
                        </p>
                        <div className="reset-info">
                            <p>Abre la app TotalGains en tu dispositivo para acceder a tu cuenta.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Pantalla error sin token
    if (!token && status === 'error') {
        return (
            <div className="reset-page">
                <div className="reset-container">
                    <div className="reset-card">
                        <div className="reset-icon error">
                            <XCircle size={64} />
                        </div>
                        <h1>Enlace inválido</h1>
                        <p className="reset-subtitle">{errorMessage}</p>
                        <div className="reset-info">
                            <p>
                                Vuelve a la app TotalGains y solicita un nuevo email de recuperación
                                de contraseña.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Pantalla principal con formulario
    return (
        <div className="reset-page">
            <div className="reset-container">
                <div className="reset-card">
                    <div className="reset-icon">
                        <Lock size={48} />
                    </div>
                    <h1>Nueva Contraseña</h1>
                    <p className="reset-subtitle">
                        Introduce una nueva contraseña para tu cuenta de TotalGains.
                    </p>

                    <form onSubmit={handleSubmit} className="reset-form">
                        <div className="form-group">
                            <label htmlFor="password">Nueva contraseña</label>
                            <div className="input-wrapper">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    minLength={8}
                                    placeholder="Mínimo 8 caracteres"
                                    autoComplete="new-password"
                                    disabled={status === 'sending'}
                                />
                                <button
                                    type="button"
                                    className="toggle-visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? 'Ocultar' : 'Mostrar'}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmar contraseña</label>
                            <div className="input-wrapper">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    minLength={8}
                                    placeholder="Repite la contraseña"
                                    autoComplete="new-password"
                                    disabled={status === 'sending'}
                                />
                            </div>
                        </div>

                        {errorMessage && (
                            <div className="reset-error">
                                <XCircle size={18} />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="reset-submit"
                            disabled={status === 'sending' || !password || !confirmPassword}
                        >
                            {status === 'sending' ? 'Actualizando...' : 'Cambiar contraseña'}
                        </button>
                    </form>

                    <p className="reset-footer">
                        Por seguridad, este enlace caduca en 30 minutos desde que se generó.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function ResetPassword() {
    return (
        <Suspense fallback={<div className="reset-page"><div className="reset-container"><div className="reset-card">Cargando...</div></div></div>}>
            <ResetPasswordContent />
        </Suspense>
    );
}
