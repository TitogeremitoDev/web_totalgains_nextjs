import React from 'react';
import Link from 'next/link';
import './Privacy.css';

/*
 * Reescritos el 23-08-2026: la versión anterior era de diciembre de 2024 —
 * describía planes que ya no existen ("Premium"), no recogía el plan Gratuito
 * permanente ni los planes de gimnasio, no incluía el derecho de desistimiento
 * de 14 días (obligatorio ante consumidores, art. 102 y ss. TRLGDCU), decía
 * "no ofrecemos reembolsos" a secas y fijaba un fuero genérico que frente a un
 * consumidor no se sostiene (el fuero es SU domicilio). El enlace a la
 * plataforma ODR de la UE NO se añade: la Comisión la cerró en julio de 2025.
 * Redactados por IA sobre los hechos reales del producto; pendientes de
 * revisión por asesor si German quiere el sello profesional.
 */

const Terms = () => {
    return (
        <div className="legal-page">
            <div className="container">
                <h1>Términos y Condiciones</h1>
                <p className="last-updated">Última actualización: 23 de agosto de 2026</p>

                <section className="legal-section">
                    <h2>1. Quién presta el servicio</h2>
                    <ul>
                        <li><strong>Titular:</strong> Germán Martínez Calvente (empresario individual)</li>
                        <li><strong>NIF:</strong> 77137460Z</li>
                        <li><strong>Domicilio:</strong> C/ Sur Nº 9, 1ª — 18140 La Zubia (Granada), España</li>
                        <li><strong>Email:</strong> <a href="mailto:soporte@totalgains.es">soporte@totalgains.es</a></li>
                    </ul>
                    <p>
                        Al crear una cuenta o usar TotalGains aceptas estos términos. Si no estás de acuerdo con
                        alguna parte, no uses el servicio.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Qué es TotalGains</h2>
                    <p>
                        TotalGains es una plataforma de software (web, iOS y Android) para entrenadores personales,
                        nutricionistas y gimnasios, que incluye entre otras funciones:
                    </p>
                    <ul>
                        <li>Gestión de clientes y seguimiento de progreso</li>
                        <li>Creación de rutinas y planes nutricionales, con asistencia de inteligencia artificial</li>
                        <li>Base de datos de alimentos y biblioteca de ejercicios</li>
                        <li>Comunicación profesional-cliente y app de marca blanca</li>
                        <li>Herramientas de gestión para gimnasios (clases, reservas, cobros)</li>
                    </ul>
                    <p>
                        <strong>TotalGains es una herramienta, no un servicio médico ni de entrenamiento.</strong> Las
                        rutinas y dietas las elabora y supervisa tu profesional (o tú, si eres el profesional); la IA es
                        un asistente que trabaja bajo su revisión.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>3. Consumidores y profesionales</h2>
                    <p>
                        Si contratas TotalGains para tu actividad profesional (entrenador, nutricionista o gimnasio),
                        actúas como <strong>empresario o profesional</strong>. Si lo usas como particular, actúas como{' '}
                        <strong>consumidor</strong> y te amparan además los derechos irrenunciables de la normativa de
                        consumo española (TRLGDCU), incluidos el desistimiento y el fuero de tu domicilio. Nada en estos
                        términos limita esos derechos.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>4. Cuentas de usuario</h2>
                    <ul>
                        <li>Debes proporcionar información veraz y mantenerla actualizada</li>
                        <li>Eres responsable de la confidencialidad de tu contraseña y de lo que ocurra en tu cuenta</li>
                        <li>Debes tener al menos 16 años para crear una cuenta</li>
                        <li>Los deportistas gestionados por un profesional acceden por invitación de este</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>5. Planes y precios</h2>
                    <ul>
                        <li><strong>Plan Gratuito:</strong> permanente, hasta 5 atletas activos, sin tarjeta y sin caducidad</li>
                        <li><strong>Planes de entrenador:</strong> Starter (hasta 25 atletas), Pro (hasta 100) y Unlimited (sin límite), con facturación mensual o anual</li>
                        <li><strong>Planes de gimnasio:</strong> según volumen de socios, con las condiciones indicadas al contratar</li>
                        <li><strong>Prueba gratuita:</strong> el plan Pro puede probarse 14 días sin tarjeta; al terminar no hay cobro automático si no has introducido un método de pago</li>
                    </ul>
                    <p>
                        Los precios vigentes, <strong>con IVA incluido</strong>, son los publicados en{' '}
                        <Link href="/precios/">totalgains.es/precios</Link> en el momento de contratar. El precio que
                        aceptas al contratar no cambia durante el período ya pagado; cualquier subida se te comunicará
                        con al menos 30 días de antelación y aplicará a partir de la siguiente renovación.
                    </p>
                    <h3>5.1 Facturación y renovación</h3>
                    <ul>
                        <li>Las suscripciones se renuevan automáticamente al final de cada período (mensual o anual) salvo que canceles antes</li>
                        <li>Los pagos se procesan según el canal de contratación: Stripe o PayPal en web, o la tienda correspondiente (Apple App Store, Google Play) en la app</li>
                    </ul>
                    <h3>5.2 Suscripciones contratadas en Apple (iOS)</h3>
                    <ul>
                        <li>El pago se carga a tu cuenta de Apple ID al confirmar la compra</li>
                        <li>La suscripción se renueva automáticamente salvo que desactives la renovación al menos 24 horas antes del final del período actual</li>
                        <li>La renovación se cobra dentro de las 24 horas anteriores al final del período, al precio del plan seleccionado</li>
                        <li>Puedes gestionar la suscripción y desactivar la renovación desde los ajustes de tu cuenta de Apple tras la compra</li>
                        <li>La parte no utilizada de un período de prueba gratuito, si se ofrece, se pierde al comprar una suscripción</li>
                        <li>Los reembolsos de compras hechas en la App Store se solicitan a Apple según sus condiciones</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>6. Cancelación, desistimiento y reembolsos</h2>
                    <h3>6.1 Cancelar la suscripción</h3>
                    <ul>
                        <li>Puedes cancelar en cualquier momento, sin permanencia ni penalización, desde tu perfil o desde la tienda donde contrataste</li>
                        <li>Al cancelar mantienes el acceso hasta el final del período ya pagado; después tu plan pasa a las condiciones del Plan Gratuito o la cuenta queda inactiva</li>
                    </ul>
                    <h3>6.2 Derecho de desistimiento (solo consumidores)</h3>
                    <p>
                        Si contratas como consumidor, tienes <strong>14 días naturales</strong> desde la contratación para
                        desistir sin dar explicaciones, escribiendo a{' '}
                        <a href="mailto:soporte@totalgains.es">soporte@totalgains.es</a> con una declaración inequívoca
                        (por ejemplo: «quiero desistir de mi suscripción contratada el [fecha]»). Te reembolsaremos el
                        importe pagado por el mismo medio de pago en un plazo máximo de 14 días.
                    </p>
                    <p>
                        Como el servicio comienza inmediatamente a petición tuya, si desistes tras haber empezado a
                        usarlo podremos deducir la <strong>parte proporcional</strong> del servicio ya prestado
                        (art. 108.3 TRLGDCU). En la práctica, el Plan Gratuito y la prueba de 14 días sin tarjeta te
                        permiten evaluar el servicio sin pagar nada.
                    </p>
                    <h3>6.3 Otras solicitudes</h3>
                    <p>
                        Fuera de los casos anteriores no hay reembolso por períodos parciales ya disfrutados, sin
                        perjuicio de tus derechos legales (por ejemplo, ante una falta de conformidad del servicio).
                        Para casos especiales, escríbenos: los revisamos uno a uno.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>7. Uso aceptable</h2>
                    <p>Al usar TotalGains te comprometes a NO:</p>
                    <ul>
                        <li>Usar el servicio para fines ilegales</li>
                        <li>Compartir tu cuenta con terceros ni acceder a cuentas ajenas</li>
                        <li>Subir contenido ofensivo, ilegal o que vulnere derechos de terceros</li>
                        <li>Realizar ingeniería inversa, scraping o uso de bots sobre la plataforma</li>
                        <li>Revender el servicio fuera de los mecanismos previstos (por ejemplo, la marca blanca para tus propios clientes sí está permitida y es parte del producto)</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>8. Propiedad intelectual y tus datos</h2>
                    <ul>
                        <li>El software, la marca y el contenido de TotalGains son de su titular</li>
                        <li><strong>El contenido que creas (rutinas, dietas, datos de tus clientes) es tuyo.</strong> Nos concedes solo la licencia técnica imprescindible para alojarlo y mostrarlo dentro del servicio</li>
                        <li>Al terminar el servicio puedes pedir una copia de tus datos (portabilidad) antes de su eliminación, según la <Link href="/privacy/">Política de Privacidad</Link></li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>9. Salud y limitación de responsabilidad</h2>
                    <ul>
                        <li>TotalGains proporciona herramientas de software, no asesoramiento médico</li>
                        <li>Consulta a un profesional sanitario antes de comenzar cualquier programa de ejercicio o dieta, especialmente si tienes una condición médica</li>
                        <li>El ejercicio físico conlleva riesgos inherentes; la responsabilidad de la programación corresponde al profesional que la prescribe</li>
                        <li>El servicio se presta «tal cual»; trabajamos por mantenerlo disponible y sin errores, pero no garantizamos disponibilidad ininterrumpida</li>
                        <li>Frente a profesionales, nuestra responsabilidad total se limita a las cantidades pagadas en los 12 meses anteriores al hecho que la origine. Frente a consumidores, esta limitación se aplica solo en lo que permita la ley, y nunca a daños causados por dolo o negligencia grave</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>10. Si eres profesional (entrenador, nutricionista o gimnasio)</h2>
                    <ul>
                        <li>Eres responsable de las rutinas y dietas que prescribes a tus clientes, incluidas las generadas con ayuda de la IA, que debes revisar antes de asignar</li>
                        <li>Respecto a los datos personales de tus clientes actúas como responsable del tratamiento y TotalGains como encargado (ver <Link href="/privacy/">Política de Privacidad</Link>)</li>
                        <li>Debes contar con la base legal necesaria para introducir datos de tus clientes, y con autorización de padres o tutores si gestionas menores</li>
                        <li>TotalGains no es parte de la relación contractual entre tú y tus clientes</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>11. Modificaciones del servicio y de los términos</h2>
                    <p>
                        Podemos mejorar o modificar el servicio y estos términos. Los cambios relevantes se notificarán
                        por email con al menos <strong>30 días</strong> de antelación. Si no estás de acuerdo, puedes
                        cancelar antes de que entren en vigor; seguir usando el servicio después implica aceptarlos.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>12. Suspensión y terminación</h2>
                    <p>
                        Podemos suspender o cerrar tu cuenta si incumples gravemente estos términos, avisándote salvo
                        urgencia justificada. En caso de cierre, podrás solicitar una copia de tus datos durante el
                        plazo de conservación de 30 días previsto en la <Link href="/privacy/">Política de Privacidad</Link>;
                        después se eliminan definitivamente.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>13. Ley aplicable y fuero</h2>
                    <p>
                        Estos términos se rigen por la ley española. Si contratas como <strong>consumidor</strong>, las
                        disputas se someterán a los juzgados de <strong>tu domicilio</strong>, y puedes acudir también al
                        Sistema Arbitral de Consumo y a las oficinas municipales de información al consumidor. Si
                        contratas como <strong>profesional</strong>, las partes se someten a los juzgados y tribunales
                        de Granada capital.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>14. Contacto</h2>
                    <ul>
                        <li>Email: <a href="mailto:soporte@totalgains.es">soporte@totalgains.es</a></li>
                        <li>Web: <a href="https://totalgains.es">totalgains.es</a></li>
                        <li>Información legal completa: <Link href="/aviso-legal/">totalgains.es/aviso-legal</Link></li>
                    </ul>
                </section>

                <div className="back-link">
                    <Link href="/" className="btn btn-outline">← Volver al Inicio</Link>
                </div>
            </div>
        </div>
    );
};

export default Terms;
