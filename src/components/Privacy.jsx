import React from 'react';
import Link from 'next/link';
import CookiePreferencesButton from './CookiePreferencesButton';
import './Privacy.css';

/*
 * Reescrita el 23-08-2026 para cubrir el art. 13 RGPD completo: la versión
 * anterior no identificaba al responsable, no declaraba bases legales, ni la
 * AEPD, ni transferencias internacionales, ni el régimen de datos de salud
 * (art. 9) — y esta app trata peso, lesiones, alergias, fotos corporales y
 * ciclo menstrual. Redactada por IA sobre los hechos reales del producto;
 * pendiente de revisión por asesor si German quiere el sello profesional.
 */

const Privacy = () => {
    return (
        <div className="legal-page">
            <div className="container">
                <h1>Política de Privacidad</h1>
                <p className="last-updated">Última actualización: 23 de agosto de 2026</p>

                <section className="legal-section">
                    <h2>1. Quién es el responsable de tus datos</h2>
                    <ul>
                        <li><strong>Responsable:</strong> Germán Martínez Calvente (empresario individual)</li>
                        <li><strong>NIF:</strong> 77137460Z</li>
                        <li><strong>Domicilio:</strong> C/ Sur Nº 9, 1ª — 18140 La Zubia (Granada), España</li>
                        <li><strong>Email de contacto y privacidad:</strong> <a href="mailto:soporte@totalgains.es">soporte@totalgains.es</a></li>
                        <li><strong>Web:</strong> <a href="https://totalgains.es">totalgains.es</a></li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>2. Un matiz importante: dos roles distintos</h2>
                    <p>
                        TotalGains es una herramienta que usan profesionales (entrenadores, nutricionistas y gimnasios)
                        para gestionar a sus clientes. Eso significa que tratamos datos con dos roles diferentes:
                    </p>
                    <ul>
                        <li>
                            <strong>TotalGains como responsable:</strong> para los datos de tu cuenta, la facturación,
                            el soporte, esta web y la analítica. Aquí decidimos nosotros cómo y para qué se tratan los datos.
                        </li>
                        <li>
                            <strong>TotalGains como encargado del tratamiento:</strong> para los datos que un profesional
                            introduce o recibe de sus propios clientes (rutinas, dietas, medidas, fotos de progreso, mensajes…).
                            De esos datos el responsable es <strong>tu entrenador, nutricionista o gimnasio</strong>, y nosotros
                            los tratamos siguiendo sus instrucciones para prestarle el servicio. Si eres cliente de un
                            profesional y quieres ejercer tus derechos sobre esos datos, puedes dirigirte a él o a nosotros:
                            te ayudaremos en ambos casos.
                        </li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>3. Qué datos tratamos</h2>
                    <ul>
                        <li><strong>Datos de cuenta:</strong> nombre, email, nombre de usuario, contraseña cifrada</li>
                        <li><strong>Datos de perfil y salud:</strong> edad, peso, altura, género, objetivos fitness, nivel de experiencia, lesiones, preferencias dietéticas, alergias e intolerancias alimentarias y, si activas la función «Mi ciclo», datos sobre tu ciclo menstrual</li>
                        <li><strong>Datos de entrenamiento:</strong> rutinas, ejercicios, series, repeticiones, pesos, progreso y estadísticas</li>
                        <li><strong>Datos de nutrición:</strong> planes de alimentación, calorías, macronutrientes y registros de comidas</li>
                        <li><strong>Contenido multimedia:</strong> fotos de progreso corporal, vídeos de técnica y grabaciones de voz subidas voluntariamente para el seguimiento con tu profesional</li>
                        <li><strong>Comunicaciones:</strong> mensajes intercambiados con tu profesional dentro de la aplicación y correos de soporte</li>
                        <li><strong>Datos de facturación:</strong> los pagos se procesan a través de proveedores externos (Stripe, PayPal, Apple App Store, Google Play). TotalGains no almacena números de tarjeta ni datos bancarios completos</li>
                        <li><strong>Formulario de contacto de la web:</strong> nombre, email, asunto y mensaje</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>4. Para qué los usamos y con qué base legal</h2>
                    <ul>
                        <li>
                            <strong>Prestarte el servicio</strong> (cuenta, rutinas, dietas, seguimiento, comunicación
                            con tu profesional, notificaciones de la app) — base legal: <em>ejecución del contrato</em>
                            (art. 6.1.b RGPD).
                        </li>
                        <li>
                            <strong>Tratar tus datos de salud</strong> (peso, lesiones, alergias, fotos de progreso,
                            ciclo menstrual). Son una categoría especialmente protegida: solo los tratamos con tu{' '}
                            <em>consentimiento explícito</em> (art. 9.2.a RGPD), que prestas al introducirlos o al activar
                            la función correspondiente, y que puedes retirar en cualquier momento borrando esos datos o tu cuenta.
                        </li>
                        <li>
                            <strong>Generar rutinas y dietas con IA:</strong> cuando tu profesional (o tú) usa el generador,
                            los datos necesarios del perfil se envían al proveedor de IA (Google, modelos Gemini), que actúa
                            como encargado conforme a sus condiciones de servicio empresariales y no los utiliza para
                            entrenar sus modelos generales — base legal: la misma del servicio (contrato + consentimiento
                            explícito para los datos de salud implicados).
                        </li>
                        <li>
                            <strong>Facturar y cumplir obligaciones fiscales</strong> — base legal: <em>obligación legal</em>
                            (art. 6.1.c RGPD).
                        </li>
                        <li>
                            <strong>Responder a tus consultas</strong> del formulario o del email — base legal:{' '}
                            <em>consentimiento</em> (art. 6.1.a) y, si ya eres cliente, la relación contractual.
                        </li>
                        <li>
                            <strong>Seguridad, prevención de fraude y mejora del producto</strong> con datos agregados
                            o seudonimizados — base legal: <em>interés legítimo</em> (art. 6.1.f), ponderado para no
                            afectar a tus derechos.
                        </li>
                        <li>
                            <strong>Analítica de esta web</strong> (no de la app) — base legal: <em>consentimiento</em>,
                            que se pide en el banner de cookies y puede rechazarse sin perder nada.
                        </li>
                    </ul>
                    <p>No tomamos decisiones automatizadas con efectos jurídicos sobre ti ni vendemos tus datos. Nunca.</p>
                </section>

                <section className="legal-section">
                    <h2>5. Quién puede acceder a tus datos (encargados)</h2>
                    <p>
                        No cedemos tus datos a terceros para sus propios fines. Los comparten con nosotros únicamente
                        <strong> proveedores que trabajan bajo contrato de encargado de tratamiento</strong> (art. 28 RGPD),
                        solo en lo imprescindible para su función:
                    </p>
                    <ul>
                        <li><strong>Tu profesional</strong> (entrenador, nutricionista o gimnasio): ve tu progreso, fotos, vídeos y mensajes — es la esencia del servicio</li>
                        <li><strong>Pagos y tiendas:</strong> Stripe, PayPal, Apple App Store, Google Play</li>
                        <li><strong>Infraestructura:</strong> proveedores de alojamiento y base de datos gestionada (Koyeb, MongoDB Atlas) y red de entrega y almacenamiento de archivos (Cloudflare)</li>
                        <li><strong>Correo transaccional:</strong> Resend (emails de la app, como recuperación de contraseña) y EmailJS (envío del formulario de contacto de esta web)</li>
                        <li><strong>IA generativa:</strong> Google (modelos Gemini), para las funciones de generación de rutinas y dietas</li>
                        <li><strong>Notificaciones push:</strong> Expo, Firebase Cloud Messaging (Google) y APNs (Apple)</li>
                        <li><strong>Inicio de sesión:</strong> Google Sign-In y Apple Sign-In, solo si eliges usarlos</li>
                        <li><strong>Analítica web con consentimiento:</strong> Google Analytics 4 y Microsoft Clarity (ver sección de cookies)</li>
                    </ul>
                    <p>También comunicaremos datos cuando una ley u orden judicial nos obligue a ello.</p>
                </section>

                <section className="legal-section">
                    <h2>6. Transferencias internacionales</h2>
                    <p>
                        Algunos de estos proveedores (por ejemplo Stripe, Google, Apple, Cloudflare, Resend o EmailJS)
                        pueden tratar datos en Estados Unidos u otros países fuera del Espacio Económico Europeo.
                        Cuando eso ocurre, la transferencia se ampara en el <strong>Marco de Privacidad de Datos
                        UE-EE.&nbsp;UU. (Data Privacy Framework)</strong> si el proveedor está adherido o, en su defecto,
                        en las <strong>cláusulas contractuales tipo</strong> aprobadas por la Comisión Europea
                        (art. 46 RGPD), junto con medidas adicionales de cifrado.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>7. Cuánto tiempo los conservamos</h2>
                    <ul>
                        <li><strong>Mientras tu cuenta esté activa:</strong> los datos necesarios para prestarte el servicio</li>
                        <li><strong>Al darte de baja o eliminar la cuenta:</strong> tus datos personales se eliminan en un plazo máximo de <strong>30 días</strong></li>
                        <li><strong>Facturación:</strong> los datos fiscales se conservan bloqueados los años que exige la normativa tributaria y mercantil española (con carácter general, entre 4 y 6 años), solo a disposición de las administraciones competentes</li>
                        <li><strong>Soporte:</strong> la correspondencia se conserva mientras sea necesaria para atender y acreditar la consulta</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>8. Tus derechos</h2>
                    <p>Puedes ejercer gratuitamente, en cualquier momento, los derechos de:</p>
                    <ul>
                        <li><strong>Acceso:</strong> saber qué datos tuyos tenemos y pedir una copia</li>
                        <li><strong>Rectificación:</strong> corregir datos inexactos</li>
                        <li><strong>Supresión:</strong> eliminar tu cuenta y tus datos</li>
                        <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común</li>
                        <li><strong>Oposición:</strong> oponerte a tratamientos basados en interés legítimo</li>
                        <li><strong>Limitación:</strong> pedir que congelemos el tratamiento mientras se resuelve una solicitud</li>
                        <li><strong>Retirar el consentimiento:</strong> en cualquier momento, sin que afecte a lo tratado hasta entonces</li>
                    </ul>
                    <p>
                        Cómo ejercerlos: escribe a <a href="mailto:soporte@totalgains.es">soporte@totalgains.es</a> desde el
                        email de tu cuenta, o usa la opción <strong>«Perfil / Ajustes → Eliminar cuenta»</strong> dentro de la
                        app para la supresión inmediata. Respondemos en el plazo máximo de un mes.
                    </p>
                    <p>
                        Si crees que no hemos atendido bien tus derechos, puedes reclamar ante la{' '}
                        <strong>Agencia Española de Protección de Datos</strong> (AEPD), C/ Jorge Juan 6, 28001 Madrid —{' '}
                        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
                        Nos gustaría que primero nos escribieras a nosotros: casi todo se arregla antes por email.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>9. Seguridad</h2>
                    <ul>
                        <li>Contraseñas cifradas con bcrypt; nunca se almacenan en claro</li>
                        <li>Conexiones cifradas HTTPS/TLS en web, app y API</li>
                        <li>Autenticación con tokens firmados (JWT) y control de acceso por roles: tu profesional solo ve a sus clientes</li>
                        <li>Almacenamiento en proveedores con certificaciones de seguridad estándar del sector y copias de seguridad</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>10. Menores de edad</h2>
                    <p>
                        TotalGains no está dirigido a menores de 16 años y no recopilamos conscientemente sus datos.
                        Si un profesional gestiona a un deportista menor de edad, es su responsabilidad contar con la
                        autorización de los padres o tutores antes de introducir sus datos.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>11. Cookies</h2>
                    <p><strong>Cookies necesarias</strong> (no requieren consentimiento, sin ellas la web no funciona):</p>
                    <ul>
                        <li>Mantener tu sesión iniciada</li>
                        <li>Recordar tus preferencias, incluida tu decisión sobre cookies</li>
                        <li>Seguridad y rendimiento básico de la aplicación</li>
                    </ul>
                    <p><strong>Cookies de analítica</strong> (solo se instalan si las aceptas expresamente en el banner):</p>
                    <ul>
                        <li><strong>Google Analytics 4</strong> (Google Ireland Ltd.) — medición de audiencia: páginas visitadas, origen del tráfico y comportamiento agregado. Conservación máxima: 14 meses.</li>
                        <li><strong>Microsoft Clarity</strong> (Microsoft Ireland Operations Ltd.) — mapas de calor y grabación anónima de la navegación para detectar errores de usabilidad. Conservación máxima: 13 meses.</li>
                    </ul>
                    <p>
                        Mientras no aceptes, esos scripts no se cargan en tu navegador. Puedes retirar
                        tu consentimiento en cualquier momento y sin coste: <CookiePreferencesButton />.
                        También puedes bloquear o eliminar cookies desde la configuración de tu navegador.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>12. Cambios en esta política</h2>
                    <p>
                        Si cambiamos algo relevante (nuevas finalidades, nuevos encargados, nuevos plazos), te lo
                        notificaremos por el email de tu cuenta o mediante un aviso destacado en la app antes de que
                        el cambio entre en vigor. La fecha de la última versión aparece siempre al principio.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>13. Contacto</h2>
                    <ul>
                        <li>Email: <a href="mailto:soporte@totalgains.es">soporte@totalgains.es</a></li>
                        <li>Web: <a href="https://totalgains.es">totalgains.es</a></li>
                        <li>Aviso legal completo: <Link href="/aviso-legal/">totalgains.es/aviso-legal</Link></li>
                    </ul>
                </section>

                <div className="back-link">
                    <Link href="/" className="btn btn-outline">← Volver al Inicio</Link>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
