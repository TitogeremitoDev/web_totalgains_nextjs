import React from 'react';
import './Privacy.css';

const Privacy = () => {
    return (
        <div className="legal-page">
            <div className="container">
                <h1>Política de Privacidad</h1>
                <p className="last-updated">Última actualización: 11 de Enero de 2025</p>

                <section className="legal-section">
                    <h2>1. Información que Recopilamos</h2>
                    <p>En TotalGains recopilamos la siguiente información para proporcionar nuestros servicios:</p>
                    <ul>
                        <li><strong>Datos de cuenta:</strong> nombre, email, nombre de usuario, contraseña encriptada</li>
                        <li><strong>Datos de perfil y salud:</strong> edad, peso, altura, género, objetivos fitness, nivel de experiencia, lesiones, preferencias dietéticas y alergias alimentarias</li>
                        <li><strong>Datos de entrenamiento:</strong> rutinas, ejercicios, series, repeticiones, pesos, progreso y estadísticas</li>
                        <li><strong>Datos de nutrición:</strong> planes de alimentación, calorías, macronutrientes</li>
                        <li><strong>Contenido multimedia:</strong> fotos de progreso corporal, vídeos de técnica de ejercicios y grabaciones de voz subidas voluntariamente por el usuario para seguimiento con su entrenador</li>
                        <li><strong>Comunicaciones:</strong> mensajes intercambiados entre usuario y entrenador dentro de la aplicación</li>
                        <li><strong>Datos de pago:</strong> procesados de forma segura a través de proveedores externos (Stripe, PayPal, Google Play Billing) o mediante la plataforma de la tienda de aplicaciones (Apple App Store, Google Play Store) para compras integradas dentro de la app. TotalGains no almacena datos de tarjetas de crédito ni información bancaria directamente.</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>2. Cómo Usamos tu Información</h2>
                    <p>Utilizamos la información recopilada para:</p>
                    <ul>
                        <li>Proporcionar y mejorar nuestros servicios</li>
                        <li>Personalizar tu experiencia de entrenamiento</li>
                        <li>Generar rutinas y planes de nutrición adaptados</li>
                        <li>Enviar notificaciones importantes sobre tu cuenta</li>
                        <li>Procesar pagos de suscripciones</li>
                        <li>Analizar el uso para mejorar la plataforma</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>3. Compartición de Datos</h2>
                    <p>No vendemos tu información personal. Solo compartimos datos:</p>
                    <ul>
                        <li>Con tu entrenador asignado (si usas modo cliente): tu progreso, fotos, vídeos y mensajes</li>
                        <li>Con proveedores de pago y plataformas de distribución (Stripe, PayPal, Apple App Store, Google Play Store) estrictamente para procesar las transacciones y gestionar las suscripciones activas.</li>
                        <li>Con servicios de autenticación (Google Sign-In, Apple Sign-In) cuando eliges iniciar sesión con estos proveedores</li>
                        <li>Cuando sea requerido por ley</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>4. Seguridad de Datos</h2>
                    <p>Implementamos medidas de seguridad para proteger tu información:</p>
                    <ul>
                        <li>Encriptación de contraseñas con bcrypt</li>
                        <li>Conexiones seguras HTTPS/SSL</li>
                        <li>Tokens JWT para autenticación</li>
                        <li>Almacenamiento seguro en servidores protegidos</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>5. Tus Derechos (RGPD)</h2>
                    <p>Como usuario de la UE, tienes derecho a:</p>
                    <ul>
                        <li><strong>Acceso:</strong> Solicitar una copia de tus datos</li>
                        <li><strong>Rectificación:</strong> Corregir datos incorrectos</li>
                        <li><strong>Eliminación:</strong> Solicitar la eliminación de tu cuenta y datos</li>
                        <li><strong>Portabilidad:</strong> Recibir tus datos en formato legible</li>
                        <li><strong>Oposición:</strong> Oponerte al procesamiento de ciertos datos</li>
                    </ul>
                    <p>Para ejercer estos derechos, contacta: <a href="mailto:ger3dman@gmail.com">ger3dman@gmail.com</a></p>
                    <p><strong>Eliminación de Cuenta en la App:</strong> Además de contactar por email, puedes solicitar la eliminación inmediata de tu cuenta y todos tus datos asociados directamente desde la aplicación móvil. Esta opción se encuentra disponible en la sección de "Perfil" o "Ajustes" &gt; "Eliminar Cuenta". Una vez solicitada, tus datos dejarán de ser visibles y se eliminarán permanentemente según nuestros plazos de retención.</p>
                </section>

                <section className="legal-section">
                    <h2>6. Cookies</h2>
                    <p>Utilizamos cookies esenciales para:</p>
                    <ul>
                        <li>Mantener tu sesión iniciada</li>
                        <li>Recordar tus preferencias</li>
                        <li>Mejorar el rendimiento de la aplicación</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>7. Retención de Datos</h2>
                    <p>Conservamos tus datos mientras tu cuenta esté activa. Al eliminar tu cuenta, todos tus datos personales serán eliminados en un plazo de 30 días, excepto cuando la ley requiera su conservación.</p>
                </section>

                <section className="legal-section">
                    <h2>8. Menores de Edad</h2>
                    <p>TotalGains no está dirigido a menores de 16 años. No recopilamos conscientemente información de menores sin consentimiento parental.</p>
                </section>

                <section className="legal-section">
                    <h2>9. Cambios en esta Política</h2>
                    <p>Podemos actualizar esta política periódicamente. Te notificaremos de cambios significativos a través del email registrado en tu cuenta.</p>
                </section>

                <section className="legal-section">
                    <h2>10. Contacto</h2>
                    <p>Para cualquier consulta sobre privacidad:</p>
                    <ul>
                        <li>Email: <a href="mailto:ger3dman@gmail.com">ger3dman@gmail.com</a></li>
                        <li>Web: <a href="https://totalgains.es">totalgains.es</a></li>
                    </ul>
                </section>

                <div className="back-link">
                    <a href="/" className="btn btn-outline">← Volver al Inicio</a>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
