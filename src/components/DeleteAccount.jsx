import React from 'react';
import './Privacy.css';

const DeleteAccount = () => {
    return (
        <div className="legal-page">
            <div className="container">
                <h1>Eliminar Cuenta</h1>
                <p className="last-updated">Última actualización: 15 de Marzo de 2026</p>

                <section className="legal-section">
                    <h2>Cómo eliminar tu cuenta de TotalGains</h2>
                    <p>
                        Si deseas eliminar tu cuenta de TotalGains y todos los datos asociados,
                        puedes hacerlo directamente desde la aplicación o contactándonos por email.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>Opción 1: Desde la aplicación</h2>
                    <ol>
                        <li>Abre la app TotalGains e inicia sesión con tu cuenta.</li>
                        <li>Ve a <strong>Perfil</strong> &rarr; <strong>Ajustes</strong>.</li>
                        <li>Desplázate hasta el final de la página.</li>
                        <li>Pulsa el botón <strong>&quot;Eliminar Cuenta&quot;</strong>.</li>
                        <li>Confirma la eliminación en el diálogo que aparece.</li>
                    </ol>
                    <p>Tu cuenta y todos tus datos serán eliminados de forma inmediata y permanente.</p>
                </section>

                <section className="legal-section">
                    <h2>Opción 2: Por email</h2>
                    <p>
                        Si no puedes acceder a la aplicación, puedes solicitar la eliminación de tu cuenta
                        enviando un email a:
                    </p>
                    <p>
                        <a href="mailto:info@totalgains.es"><strong>info@totalgains.es</strong></a>
                    </p>
                    <p>
                        Incluye en el asunto <strong>&quot;Solicitud de eliminación de cuenta&quot;</strong> y
                        el email asociado a tu cuenta. Procesaremos tu solicitud en un plazo máximo de 3 días laborables.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>Datos que se eliminan</h2>
                    <p>Al eliminar tu cuenta, se borran permanentemente:</p>
                    <ul>
                        <li>Tu perfil y datos personales (nombre, email, foto de perfil)</li>
                        <li>Datos de salud y fitness (peso, altura, medidas, objetivos)</li>
                        <li>Rutinas de entrenamiento y registros de sesiones</li>
                        <li>Planes de nutrición y registros alimentarios</li>
                        <li>Fotos y vídeos de progreso</li>
                        <li>Mensajes y comunicaciones con tu entrenador</li>
                        <li>Historial de pagos y datos de suscripción</li>
                    </ul>
                    <p>
                        <strong>Esta acción es irreversible.</strong> Una vez eliminada la cuenta, no es posible
                        recuperar ningún dato.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>Nota sobre suscripciones activas</h2>
                    <p>
                        Si tienes una suscripción activa a través de Google Play o Apple App Store,
                        eliminar tu cuenta en TotalGains <strong>no cancela automáticamente</strong> tu
                        suscripción en la tienda. Debes cancelarla manualmente desde la configuración
                        de suscripciones de tu dispositivo para evitar cargos futuros.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DeleteAccount;
