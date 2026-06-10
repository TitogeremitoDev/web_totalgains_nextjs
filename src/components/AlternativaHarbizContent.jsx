import Link from 'next/link';
import Image from 'next/image';
import TrustpilotBadge from '@/components/TrustpilotBadge';
import '@/app/alternativas/trainerize/Alternativas.css';

const faqs = [
    {
        question: "¿Perderé los datos de mis clientes al migrar desde Harbiz?",
        answer: "No. El equipo de TotalGains gestiona la migración completa sin que tus atletas noten el cambio. Importamos rutinas, planes nutricionales, historial de check-ins y datos de contacto. El proceso suele completarse en menos de 24 horas y se incluye gratuitamente en todos los planes.",
    },
    {
        question: "¿TotalGains penaliza por volumen de clientes como Harbiz?",
        answer: "No. Los planes son fijos por tramo de atletas (Starter 25, Pro 100, Unlimited ilimitado), sin tarifas escalonadas ni add-ons que se acumulen. Pagas lo mismo el primer mes que el mes 36. En Harbiz, escalar de 50 a 100 clientes implica saltar a otro tramo del plan Pro y añadir el add-on Personaliza tu app (30,24 €/mes con IVA) si quieres app marca blanca.",
    },
    {
        question: "¿Por qué TotalGains es mejor alternativa a Harbiz para entrenadores en España?",
        answer: "TotalGains incluye IA que genera rutinas y dietas con tu propia base de datos, app marca blanca en el plan Pro (89,90 €/mes), pagos recurrentes Stripe sin comisiones y soporte en español. Harbiz cobra Personaliza tu app, Nutri AI y Biblioteca de Vídeos como add-ons separados, lo que para funcionalidad equivalente eleva el coste a ~313 €/mes con IVA (verificado mayo 2026).",
    },
    {
        question: "¿Cobráis comisiones por las ventas que hago a mis clientes?",
        answer: "Cero comisiones. Tú usas tu propia cuenta de Stripe y cobras directamente a tus clientes. TotalGains no toca tus ingresos. En Harbiz la integración de pagos también está disponible, pero el coste total con marca blanca + nutrición IA + vídeos supera 3× el precio de TotalGains Pro.",
    },
    {
        question: "¿Vale la pena Harbiz frente a alternativas en español? Qué dicen las opiniones",
        answer: "Harbiz tiene una valoración de 4,4/5 en Capterra (20 reseñas verificadas en mayo 2026). Los entrenadores destacan su biblioteca de ejercicios y facilidad para planificar entrenamientos, pero las críticas más repetidas son la velocidad de la app en móvil, el precio frente a la profundidad de gestión y la base de alimentos limitada. TotalGains nace específicamente para resolver estos puntos: app móvil optimizada, plan plano sin add-ons y base de +240.000 alimentos personalizable.",
    },
];

export default function AlternativaHarbizContent() {
    return (
        <main className="alternativas-page">
            <div className="container alternativas-container">
                <div className="alternativas-header">
                    <span className="badge warning-badge">⚠️ Atención Entrenadores Top</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary,#aaa)', display: 'block', marginBottom: 4 }}>Actualizado: 13 de mayo de 2026</span>
                    <h1 className="alternativas-title gradient-text">
                        Mejor Alternativa a Harbiz para Entrenadores Personales
                    </h1>
                    <p className="alternativas-subtitle mt-4">
                        Si quieres IA y marca blanca incluidas en el plan base, sin add-ons acumulables, y con capacidad para más de 50 clientes. TotalGains es la alternativa en español con todo incluido desde 89,90 €/mes.
                    </p>
                    <div style={{ marginTop: 20 }}>
                        <TrustpilotBadge score={4.0} totalReviews={3} variant="compact" />
                    </div>
                </div>

                {/* Tabla KILLER de precios directos — antes del feature-by-feature */}
                <section className="alternativas-section glass" style={{ padding: 28, borderRadius: 16, margin: '32px 0', borderLeft: '4px solid #22c55e' }}>
                    <h2 style={{ marginTop: 0 }}>El coste real para 100 clientes con marca blanca + IA</h2>
                    <p style={{ marginBottom: 20 }}>Lo que muchas tablas omiten: para llegar a la <strong>funcionalidad equivalente a TotalGains Pro</strong> (100 clientes + app marca blanca + IA dietas), Harbiz ofrece dos rutas — sumar el add-on "Personaliza tu app" al plan Pro 100, o saltar al plan My APP. Datos verificados manualmente en harbiz.io el 13 de mayo de 2026.</p>
                    <div style={{ overflowX: 'auto' }}>
                        <table className="comparison-table" style={{ width: '100%', fontSize: '0.9rem' }}>
                            <thead>
                                <tr>
                                    <th>Configuración (100 clientes + marca blanca + IA dietas)</th>
                                    <th style={{ textAlign: 'right' }}>Mensual sin IVA</th>
                                    <th style={{ textAlign: 'right' }}>Mensual con IVA</th>
                                    <th style={{ textAlign: 'right' }}>Anual sin IVA<br /><small style={{ fontWeight: 400 }}>(€/mes)</small></th>
                                    <th style={{ textAlign: 'right' }}>Anual con IVA<br /><small style={{ fontWeight: 400 }}>(€/mes)</small></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="feature-name">Harbiz Pro 100 (base, sin marca blanca)</td>
                                    <td style={{ textAlign: 'right' }}>199 €</td>
                                    <td style={{ textAlign: 'right' }}>240,79 €</td>
                                    <td style={{ textAlign: 'right' }}>149 €</td>
                                    <td style={{ textAlign: 'right' }}>180,29 €</td>
                                </tr>
                                <tr>
                                    <td className="feature-name">+ Nutri AI (add-on para IA dietas)</td>
                                    <td style={{ textAlign: 'right' }}>+14,99 €</td>
                                    <td style={{ textAlign: 'right' }}>+18,14 €</td>
                                    <td style={{ textAlign: 'right' }}>+14,99 €</td>
                                    <td style={{ textAlign: 'right' }}>+18,14 €</td>
                                </tr>
                                <tr>
                                    <td className="feature-name">+ Personaliza tu app (add-on marca blanca)</td>
                                    <td style={{ textAlign: 'right' }}>+24,99 €</td>
                                    <td style={{ textAlign: 'right' }}>+30,24 €</td>
                                    <td style={{ textAlign: 'right' }}>+24,99 €</td>
                                    <td style={{ textAlign: 'right' }}>+30,24 €</td>
                                </tr>
                                <tr style={{ background: 'rgba(239,68,68,0.06)' }}>
                                    <td className="feature-name"><strong>Total ruta Pro 100 + 2 add-ons</strong></td>
                                    <td style={{ textAlign: 'right' }}><strong>238,98 €</strong></td>
                                    <td style={{ textAlign: 'right' }}><strong>289,17 €</strong></td>
                                    <td style={{ textAlign: 'right' }}><strong>188,98 €</strong></td>
                                    <td style={{ textAlign: 'right' }}><strong>228,67 €</strong></td>
                                </tr>
                                <tr style={{ background: 'rgba(239,68,68,0.06)' }}>
                                    <td className="feature-name"><strong>O ruta alternativa: My APP 100 + Nutri AI</strong></td>
                                    <td style={{ textAlign: 'right' }}><strong>273,99 €</strong></td>
                                    <td style={{ textAlign: 'right' }}><strong>331,53 €</strong></td>
                                    <td style={{ textAlign: 'right' }}><strong>208,99 €</strong></td>
                                    <td style={{ textAlign: 'right' }}><strong>252,88 €</strong></td>
                                </tr>
                                <tr style={{ background: 'rgba(34,197,94,0.10)' }}>
                                    <td className="feature-name"><strong>TotalGains Pro · TODO incluido</strong></td>
                                    <td style={{ textAlign: 'right' }}>—</td>
                                    <td style={{ textAlign: 'right' }}><strong>89,90 €</strong></td>
                                    <td style={{ textAlign: 'right' }}>—</td>
                                    <td style={{ textAlign: 'right' }}><strong>74,92 €</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{ marginTop: 20, marginBottom: 0, padding: '14px 18px', background: 'rgba(34,197,94,0.06)', borderRadius: 10 }}>
                        <strong>Diferencia con IVA aplicado igual en ambos lados:</strong> en facturación mensual, la ruta más barata de Harbiz (Pro 100 + 2 add-ons = 289,17 €/mes con IVA) cuesta <strong>199,27 €/mes más</strong> que TotalGains Pro (89,90 €/mes con IVA). En facturación anual, Harbiz (228,67 €/mes con IVA) cuesta <strong>153,75 €/mes más</strong> que TotalGains Pro anual (74,92 €/mes con IVA). Diferencia anualizada: <strong>1.845-2.391 € al año a favor de TotalGains</strong>.
                    </p>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary,#aaa)', marginTop: 14 }}>
                        Precios Harbiz verificados en harbiz.io el 13 de mayo de 2026. La web oficial de Harbiz muestra precios sin IVA; aplicamos IVA 21% estándar de España para comparación homogénea. Recomendamos verificar en <a href="https://www.harbiz.io/" rel="nofollow" target="_blank">harbiz.io</a> antes de decidir.
                    </p>
                </section>

                {/* Tabla comparativa feature-by-feature 2-col TG vs Harbiz */}
                <div className="comparison-table-container glass">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Funcionalidad clave</th>
                                <th className="tg-column">
                                    <span className="tg-logo-table">TotalGains Pro</span>
                                </th>
                                <th className="tr-column">Harbiz Pro 100 + add-ons</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="feature-name">Precio mensual con IVA (100 clientes + marca blanca + IA nutrición + vídeos)</td>
                                <td className="tg-feature">✅ <strong>89,90 €/mes</strong> todo incluido</td>
                                <td className="tr-feature">❌ <strong>313,36 €/mes</strong> (Pro 100: 240,79 € + Personaliza tu app 30,24 € + Nutri AI 18,14 € + Biblioteca Vídeos 24,19 €)</td>
                            </tr>
                            <tr>
                                <td className="feature-name">IA generación de rutinas</td>
                                <td className="tg-feature">✅ Incluida en plan base con tu propia BBDD de ejercicios</td>
                                <td className="tr-feature">⚠️ No documentada en su web pública a mayo 2026 — verificar en harbiz.io</td>
                            </tr>
                            <tr>
                                <td className="feature-name">IA generación de dietas</td>
                                <td className="tg-feature">✅ Incluida en plan base con tu propia BBDD de alimentos</td>
                                <td className="tr-feature">❌ Nutri AI como add-on (18,14 €/mes con IVA)</td>
                            </tr>
                            <tr>
                                <td className="feature-name">App marca blanca</td>
                                <td className="tg-feature">✅ Incluida en plan Pro (89,90 €)</td>
                                <td className="tr-feature">❌ Add-on Personaliza tu app (30,24 €/mes con IVA) o cambio a plan My APP</td>
                            </tr>
                            <tr>
                                <td className="feature-name">Biblioteca de vídeos de ejercicios</td>
                                <td className="tg-feature">✅ Incluida</td>
                                <td className="tr-feature">❌ Add-on Biblioteca de Vídeos (24,19 €/mes con IVA)</td>
                            </tr>
                            <tr>
                                <td className="feature-name">Base de alimentos</td>
                                <td className="tg-feature">✅ Personalizable, +240.000 alimentos y recetas</td>
                                <td className="tr-feature">⚠️ Estándar (reseñas en Capterra mencionan que "continúa siendo un poco pobre")</td>
                            </tr>
                            <tr>
                                <td className="feature-name">Límite de clientes plan medio</td>
                                <td className="tg-feature">✅ Hasta 100 clientes en plan Pro</td>
                                <td className="tr-feature">⚠️ Pro 100 cuesta 240,79 €/mes con IVA · escalas en tramos discretos</td>
                            </tr>
                            <tr>
                                <td className="feature-name">Soporte e idioma</td>
                                <td className="tg-feature">✅ Español nativo, &lt;24h respuesta</td>
                                <td className="tr-feature">⚠️ Español, valorado positivamente en reseñas pero rendimiento de app móvil flagueado</td>
                            </tr>
                            <tr>
                                <td className="feature-name">Migración asistida</td>
                                <td className="tg-feature">✅ Incluida por soporte humano en español, &lt;24h</td>
                                <td className="tr-feature">⚠️ Onboarding disponible · migración inversa no documentada públicamente en su web a mayo 2026</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary,#aaa)', marginTop: 16, padding: '0 8px' }}>
                        <strong>Fuente de precios competidores:</strong> Harbiz verificado manualmente en harbiz.com el 13 de mayo de 2026, con IVA 21% aplicado (la web muestra precios sin IVA). Los precios pueden cambiar; recomendamos verificar en la web del proveedor antes de tomar decisiones.
                    </p>
                </div>

                {/* Sección Precios Harbiz — breve con CTA a página dedicada */}
                <section className="alternativas-section glass" style={{ padding: 32, borderRadius: 16, margin: '48px 0' }}>
                    <h2>Cuánto cuesta Harbiz en 2026</h2>
                    <p>Harbiz factura por <strong>tramos de número de clientes</strong> y separa la funcionalidad en tres planes (Basic, Pro y My APP) más tres add-ons opcionales. La web muestra precios sin IVA; aquí los citamos con IVA 21 % aplicado para España, verificados mayo 2026.</p>
                    <ul>
                        <li><strong>Plan Basic</strong> (entrenador autónomo iniciando): desde 16,94 €/mes con IVA hasta 5 clientes en facturación anual, hasta 119,79 €/mes hasta 40 clientes en mensual.</li>
                        <li><strong>Plan Pro</strong> (entrenador establecido): desde 107,69 €/mes con IVA hasta 50 clientes en anual, hasta 422,29 €/mes hasta 5.000 clientes en mensual.</li>
                        <li><strong>Plan My APP</strong> (entrenador con marca blanca incluida): desde 180,29 €/mes con IVA hasta 50 clientes en anual, hasta 482,79 €/mes hasta 5.000 clientes en mensual.</li>
                        <li><strong>Add-ons acumulables</strong> al plan base (con IVA): Personaliza tu app 30,24 €/mes · Nutri AI 18,14 €/mes · Biblioteca de Vídeos 24,19 €/mes.</li>
                    </ul>
                    <p>Para llegar a la <strong>funcionalidad equivalente a TotalGains Pro</strong> (marca blanca + IA dietas + biblioteca de vídeos, hasta 100 clientes), un coach en Harbiz necesita <strong>Plan Pro 100 (240,79 €/mes) + los tres add-ons = 313,36 €/mes</strong> con IVA. Diferencia: <strong>+223 €/mes a favor de TotalGains</strong> (más de 2.680 € al año).</p>
                    <p style={{ marginTop: 24 }}>
                        <Link href="/alternativas/harbiz/precios/" className="btn btn-secondary" prefetch={false}>
                            Ver tabla completa de precios Harbiz 2026 →
                        </Link>
                    </p>
                </section>

                {/* Sección Opiniones — basada en reseñas reales Capterra */}
                <section className="alternativas-section glass" style={{ padding: 32, borderRadius: 16, margin: '48px 0' }}>
                    <h2>Opiniones sobre Harbiz: qué dicen los entrenadores</h2>
                    <p>Harbiz tiene una valoración de <strong>4,4 / 5 sobre 20 reseñas</strong> en <a href="https://www.capterra.es/reviews/201790/harbiz" rel="nofollow" target="_blank">Capterra España</a> (consultado el 13 de mayo de 2026). Las reseñas se reparten entre experiencia positiva con la biblioteca de ejercicios y críticas concretas a velocidad de la app, gestión de clases y profundidad de la base de alimentos. Selección de citas verificables:</p>
                    <ul>
                        <li><strong>Víctor (5/5)</strong>: <em>"Librería de ejercicios y su facilidad de uso permite ahorrar tiempo"</em>. Crítica: <em>"Mala velocidad a la hora de usarla, CRM sin demasiada información"</em>.</li>
                        <li><strong>Adrián (4/5)</strong>: <em>"Gestión del entrenamiento y nutrición de clientes en una aplicación"</em>. Crítica: <em>"El precio no rinde a un nivel tan alto para lo que se paga"</em>.</li>
                        <li><strong>Ricardo (4/5)</strong>: <em>"Flexibilidad para planificar entrenamientos y adaptarlos al cliente"</em>. Crítica: <em>"La base de datos de alimentos continúa siendo un poco pobre"</em>.</li>
                        <li><strong>Kelly Johanna (5/5)</strong>: <em>"Me encanta todo, desde la apariencia del software, la facilidad de uso"</em>.</li>
                    </ul>
                    <p>Compárelo con los <a href="/casos-de-exito/lorena-eses/">casos de éxito públicos de TotalGains</a>: entrenadores y nutricionistas que reportan <strong>+10 horas semanales ahorradas</strong> y migración asistida completa en español. Los puntos débiles repetidos de Harbiz en Capterra (rendimiento app móvil, precio frente a profundidad de gestión, base de alimentos limitada) son exactamente los frentes donde TotalGains se diferencia: app móvil optimizada, plan plano sin add-ons y base de +240.000 alimentos personalizable.</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary,#aaa)', marginTop: 16 }}>
                        <em>Reseñas recopiladas de fuentes públicas (Capterra España) en mayo de 2026. La selección no es exhaustiva; consulta la fuente original para el conjunto completo.</em>
                    </p>
                </section>

                {/* Bloque migración */}
                <div className="migration-block glass">
                    <span className="migration-icon">✈️</span>
                    <h3>Migración asistida desde Harbiz incluida</h3>
                    <p>Sabemos que mover a 30, 50 o más clientes puede dar pereza. Por eso nuestro equipo te acompaña en el proceso: importamos tus datos, recreamos tus rutinas y coordinamos el onboarding de tus clientes. La migración está incluida en todos los planes, en español, y suele completarse en menos de 24 horas.</p>
                </div>

                {/* Testimonio Nacho */}
                <section className="alternativas-section glass" style={{ padding: 32, borderRadius: 16, margin: '48px 0', display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ flex: '0 0 auto' }}>
                        <Image src="/testimonials/nacho.webp" alt="Nacho Pulido, entrenador personal" width={120} height={120} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: '1 1 280px' }}>
                        <h3>Nacho Pulido · Entrenador personal</h3>
                        <p><em>"Tener todo centralizado — clientes, entrenamientos, pagos y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana."</em></p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary,#aaa)' }}>Pasó de 15 a 40 clientes activos. Migración completada en 1 día. <Link href="/casos-de-exito/nacho-pulido/" prefetch={false}>Ver caso completo →</Link></p>
                    </div>
                </section>

                {/* Sub-nota narrativa TrainerStudio (sin tabla, sin link externo) */}
                <section className="alternativas-section" style={{ padding: '16px 0', margin: '32px 0' }}>
                    <h3>Si también estás comparando con TrainerStudio</h3>
                    <p>TrainerStudio es otra opción en español, con tramos por número de clientes verificados en su web oficial el 13 de mayo de 2026: 5 clientes 22,99 €/mes con IVA · 15 clientes 47,19 €/mes · 30 clientes 83,49 €/mes · 50 clientes 119,79 €/mes · Ilimitado 180,29 €/mes. Tiene plan gratuito permanente para 3 clientes.</p>
                    <p>Comparación directa con TotalGains: en el tramo de 50 clientes TG Pro (89,90 €/mes, hasta 100 atletas) sale <strong>~30 €/mes más barato</strong> que el tramo "50 clientes" de TrainerStudio (119,79 €), además de doblarte el techo de atletas en el mismo plan. En el tramo ilimitado, TG Unlimited (149,90 €/mes) se queda <strong>~30 €/mes por debajo</strong> del plan Ilimitado de TrainerStudio (180,29 €). Los criterios decisivos cuando pasas a negocio profesional son la profundidad de la IA (rutinas + dietas), la migración asistida y el modelo plano sin add-ons.</p>
                </section>

                {/* FAQs visibles como H3 */}
                <section className="alternativas-faq">
                    <h2>Preguntas Frecuentes: TotalGains vs Harbiz</h2>
                    <div className="faq-grid">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="faq-card glass">
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="cta-wrapper">
                    <Link href="/onboarding" className="btn btn-primary btn-lg cta-migrar" prefetch={false}>
                        Probar TotalGains gratis 14 días 🚀
                    </Link>
                    <p className="microcopy-secure mt-2">Sin tarjeta. Sin permanencia. Migración asistida incluida si vienes de Harbiz.</p>
                </div>
            </div>
        </main>
    );
}
