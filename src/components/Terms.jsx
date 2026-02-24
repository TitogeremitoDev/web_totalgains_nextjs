import React from 'react';
import './Privacy.css';

const Terms = () => {
    return (
        <div className="legal-page">
            <div className="container">
                <h1>Términos y Condiciones</h1>
                <p className="last-updated">Última actualización: 20 de Diciembre de 2024</p>

                <section className="legal-section">
                    <h2>1. Aceptación de los Términos</h2>
                    <p>Al acceder y utilizar TotalGains, aceptas estar vinculado por estos términos y condiciones. Si no estás de acuerdo con alguna parte, no debes usar nuestros servicios.</p>
                </section>

                <section className="legal-section">
                    <h2>2. Descripción del Servicio</h2>
                    <p>TotalGains es una plataforma de fitness que ofrece:</p>
                    <ul>
                        <li>Generación de rutinas de entrenamiento personalizadas</li>
                        <li>Seguimiento de progreso físico</li>
                        <li>Planes de nutrición y cálculo de macronutrientes</li>
                        <li>Conexión entre entrenadores y clientes</li>
                        <li>Biblioteca de ejercicios con vídeos explicativos</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>3. Cuentas de Usuario</h2>
                    <ul>
                        <li>Debes proporcionar información precisa y actualizada</li>
                        <li>Eres responsable de mantener la confidencialidad de tu contraseña</li>
                        <li>Una persona no puede tener múltiples cuentas</li>
                        <li>Debes tener al menos 16 años para usar el servicio</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>4. Planes y Suscripciones</h2>
                    <h3>4.1 Planes de Usuario</h3>
                    <ul>
                        <li><strong>Plan Gratuito:</strong> Acceso limitado a funciones básicas.</li>
                        <li><strong>Plan Premium Mensual:</strong> Acceso completo, facturación mensual.</li>
                        <li><strong>Plan Premium Anual:</strong> Acceso completo con descuento anual.</li>
                    </ul>
                    <h3>4.2 Planes de Entrenador</h3>
                    <ul>
                        <li>Planes según número de clientes: Starter (hasta 25), Pro (hasta 100), Unlimited (ilimitados).</li>
                        <li>Facturación mensual o anual.</li>
                    </ul>
                    <h3>4.3 Facturación y Suscripciones</h3>
                    <p><strong>Métodos de Pago:</strong> Los pagos se procesan a través de la plataforma correspondiente donde se realice la contratación (Apple App Store para iOS, o pasarelas como Stripe/PayPal para web).</p>
                    <h4>Suscripciones en Apple (iOS):</h4>
                    <ul>
                        <li>El pago se cargará a tu cuenta de Apple ID al confirmar la compra.</li>
                        <li>La suscripción se renueva automáticamente a menos que se desactive la renovación automática al menos 24 horas antes del final del período actual.</li>
                        <li>Se cobrará la renovación en tu cuenta dentro de las 24 horas anteriores al final del período actual al precio del plan seleccionado.</li>
                        <li>Las suscripciones pueden ser gestionadas por el usuario y la renovación automática puede desactivarse yendo a la Configuración de la Cuenta del usuario después de la compra.</li>
                        <li>Cualquier parte no utilizada de un período de prueba gratuito, si se ofrece, se perderá cuando el usuario compre una suscripción a esa publicación, cuando corresponda.</li>
                    </ul>
                    <p><strong>Cancelación:</strong> Puedes cancelar tu suscripción en cualquier momento según las normas de la plataforma donde la contrataste. Mantendrás el acceso hasta el final del período ya pagado.</p>
                </section>

                <section className="legal-section">
                    <h2>5. Política de Cancelación y Reembolsos</h2>
                    <ul>
                        <li>Puedes cancelar tu suscripción en cualquier momento</li>
                        <li>Al cancelar, mantendrás acceso hasta el final del período pagado</li>
                        <li>No ofrecemos reembolsos por períodos parciales</li>
                        <li>Para solicitudes especiales, contacta con soporte</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>6. Uso Aceptable</h2>
                    <p>Al usar TotalGains, te comprometes a NO:</p>
                    <ul>
                        <li>Usar el servicio para fines ilegales</li>
                        <li>Compartir tu cuenta con terceros</li>
                        <li>Intentar acceder a cuentas de otros usuarios</li>
                        <li>Enviar spam o contenido ofensivo</li>
                        <li>Realizar ingeniería inversa del software</li>
                        <li>Usar bots o scripts automatizados</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>7. Propiedad Intelectual</h2>
                    <ul>
                        <li>TotalGains y su contenido son propiedad de sus creadores</li>
                        <li>El contenido generado por ti (rutinas, datos) te pertenece</li>
                        <li>No puedes copiar ni redistribuir el software o contenido</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>8. Limitación de Responsabilidad</h2>
                    <ul>
                        <li>TotalGains proporciona herramientas de fitness, no asesoramiento médico</li>
                        <li>Consulta a un profesional antes de comenzar cualquier programa de ejercicio</li>
                        <li>No somos responsables de lesiones derivadas del ejercicio</li>
                        <li>El servicio se proporciona "tal cual" sin garantías explícitas</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>9. Entrenadores</h2>
                    <p>Si usas TotalGains como entrenador:</p>
                    <ul>
                        <li>Eres responsable de las rutinas que creas para tus clientes</li>
                        <li>Debes mantener la confidencialidad de los datos de tus clientes</li>
                        <li>TotalGains no se hace responsable de la relación entrenador-cliente</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>10. Modificaciones</h2>
                    <p>Nos reservamos el derecho de modificar estos términos. Los cambios significativos serán notificados por email con al menos 30 días de antelación.</p>
                </section>

                <section className="legal-section">
                    <h2>11. Terminación</h2>
                    <p>Podemos suspender o terminar tu cuenta si violas estos términos. En caso de terminación, perderás acceso a tus datos.</p>
                </section>

                <section className="legal-section">
                    <h2>12. Ley Aplicable</h2>
                    <p>Estos términos se rigen por las leyes de España. Cualquier disputa se resolverá en los tribunales de España.</p>
                </section>

                <section className="legal-section">
                    <h2>13. Contacto</h2>
                    <p>Para consultas sobre estos términos:</p>
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

export default Terms;
