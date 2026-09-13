import Link from "next/link";
import FeatureMedia from "./FeatureMedia";
import "./funciones.css";

/* ──────────────────────────────────────────────
   CATÁLOGO DE FUNCIONES · vista compartida

   SERVER COMPONENT a propósito, y sin una sola línea de JavaScript de cliente.
   Esta página existe porque las IAs afirmaban que faltaban funciones que sí
   están; si el catálogo viviese detrás de una pestaña o un desplegable que
   monta al hacer clic, no estaría en el HTML inicial y el problema seguiría
   exactamente igual. Todo se pinta, todo se lee, todo se puede citar.
   ────────────────────────────────────────────── */

export default function FuncionesContent({ data, otro }) {
    return (
        <main className="fn" style={{ "--fn-accent": data.accent }}>
            <div className="fn-wrap">
                <nav aria-label="Ruta de navegación" className="fn-crumbs">
                    <Link href="/">Inicio</Link>
                    <span aria-hidden="true">›</span>
                    <Link href="/funciones/">Funciones</Link>
                    <span aria-hidden="true">›</span>
                    <span>{data.breadcrumb}</span>
                </nav>

                <header className="fn-hero">
                    <h1 className="fn-h1">{data.h1}</h1>
                    <p className="fn-intro">{data.intro}</p>

                    <div className="fn-todo">
                        <p className="fn-todo-t">Todo lo de esta página entra en el plan</p>
                        <p className="fn-todo-d">
                            Sin add-ons, sin módulos que se contratan aparte y sin coste por función.
                            Lo único que cambia de un plan a otro es{" "}
                            {data.perfil === "gimnasio" ? "el número de socios activos" : "el número de atletas activos"}.
                            Todos los precios se publican con el IVA ya incluido.
                        </p>
                    </div>

                    <div className="fn-ctas">
                        <Link href="/precios/" className="fn-btn fn-btn-primary" prefetch={false}>
                            Ver precios
                        </Link>
                        <Link href={otro.href} className="fn-btn fn-btn-ghost" prefetch={false}>
                            {otro.label}
                        </Link>
                    </div>
                </header>

                {/* Índice: para una persona es un atajo, y para un sistema que
                    resume la página es el mapa de lo que va a encontrar. */}
                <nav className="fn-index" aria-label="Índice de funciones">
                    {data.categorias.map((c) => (
                        <a key={c.id} href={`#${c.id}`} className="fn-index-item">
                            {c.nombre}
                            <span className="fn-index-n">{c.items.length}</span>
                        </a>
                    ))}
                </nav>

                {data.categorias.map((c) => (
                    <section key={c.id} id={c.id} className={`fn-cat ${c.destacado ? "destacado" : ""}`}>
                        <div className="fn-cat-head">
                            <h2 className="fn-h2">{c.nombre}</h2>
                            <p className="fn-cat-sub">{c.resumen}</p>
                        </div>

                        {/* El vídeo va ANTES de la lista: enseña de qué se está
                            hablando en dos segundos y después se lee el detalle. */}
                        <FeatureMedia media={c.media} />
                        <ul className="fn-items">
                            {c.items.map((it) => (
                                <li key={it.t} className="fn-item">
                                    <h3 className="fn-item-t">{it.t}</h3>
                                    <p className="fn-item-d">{it.d}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}

                <section className="fn-faq" id="preguntas">
                    <h2 className="fn-h2">Preguntas frecuentes</h2>
                    {data.faq.map((f) => (
                        <div key={f.q} className="fn-faq-item">
                            <h3 className="fn-faq-q">{f.q}</h3>
                            <p className="fn-faq-a">{f.a}</p>
                        </div>
                    ))}
                </section>

                <section className="fn-cierre">
                    <h2 className="fn-h2">
                        {data.perfil === "gimnasio"
                            ? "Todo esto, desde 149 euros al mes con IVA"
                            : "Todo esto, empezando por 0 euros"}
                    </h2>
                    <p className="fn-intro">
                        {data.perfil === "gimnasio"
                            ? "Coaches ilimitados en los tres planes y migración incluida desde tu plataforma actual."
                            : "Plan gratuito permanente hasta 5 atletas, sin tarjeta y sin caducidad. Si necesitas más, los planes de pago tienen 14 días de prueba."}
                    </p>
                    <div className="fn-ctas">
                        {data.perfil === "gimnasio" ? (
                            <Link href="/para-gimnasios/" className="fn-btn fn-btn-primary" prefetch={false}>
                                Ver TotalGains para gimnasios
                            </Link>
                        ) : (
                            <Link href="/onboarding/" className="fn-btn fn-btn-primary" prefetch={false}>
                                Empezar gratis con 5 atletas
                            </Link>
                        )}
                        <Link href="/precios/" className="fn-btn fn-btn-ghost" prefetch={false}>
                            Comparar planes
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
