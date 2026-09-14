import Link from "next/link";
import FeatureMedia from "./FeatureMedia";
import "./funciones.css";

/* ──────────────────────────────────────────────
   CATÁLOGO DE FUNCIONES · vista compartida

   SERVER COMPONENT, sin una línea de JavaScript de cliente: esta página existe
   porque las IAs afirmaban que faltaban funciones que sí están, y si el
   catálogo viviese detrás de una pestaña que monta al hacer clic no estaría en
   el HTML inicial y el problema seguiría igual.

   LAYOUT (rediseño del 14-sep, maquetado antes de escribirlo):
   la primera versión apilaba 61 funciones en una columna con el vídeo encima
   de cada bloque. Scroll infinito y sin forma de saltar. Ahora son TRES
   columnas dentro del contenedor de 1200:

     rail 256  ·  funciones 524  ·  media 356      (+ dos gaps de 32)

   El rail queda fijo mientras bajas, así que nunca pierdes dónde estás; las
   funciones son FILAS densas en vez de fichas de tres columnas; y el vídeo va
   al lado, también fijo. El área destacada (la Tienda), que no tiene captura,
   ocupa el centro y la columna de media: 912px.
   ────────────────────────────────────────────── */

export default function FuncionesContent({ data, otro }) {
    const badge = data.perfil === "gimnasio"
        ? "Para gimnasios, estudios y boxes"
        : "Para entrenadores y nutricionistas";
    const total = data.categorias.reduce((n, c) => n + c.items.length, 0);
    const unidad = data.perfil === "gimnasio" ? "socios activos" : "atletas activos";
    const esGym = data.perfil === "gimnasio";

    return (
        <main className="fn">
            {/* ── Hero ──
                El navbar es `position: fixed` y no reserva espacio: el colchón
                superior lo pone .fn-hero. Sin él, el breadcrumb y el h1 salen
                por debajo de la barra. Medido en /precios/: 122px. */}
            <section className="fn-hero">
                <div className="fn-hero-bg" aria-hidden="true" />
                <div className="container fn-hero-inner">
                    <nav aria-label="Ruta de navegación" className="fn-crumbs">
                        <Link href="/">Inicio</Link>
                        <span aria-hidden="true">›</span>
                        <Link href="/funciones/">Funciones</Link>
                        <span aria-hidden="true">›</span>
                        <span>{data.breadcrumb}</span>
                    </nav>

                    <div className="fn-hero-grid">
                        <div>
                            <span className="fn-badge">{badge}</span>
                            <h1 className="fn-h1 gradient-text">{data.h1}</h1>
                            <p className="fn-intro">
                                El catálogo completo, sin letra pequeña. <strong>{total} funciones</strong> repartidas
                                en {data.categorias.length} áreas, y todas entran en cualquier plan.
                            </p>
                            <div className="fn-ctas">
                                <Link href="/precios/" className="btn btn-primary" prefetch={false}>Ver precios</Link>
                                <Link href={otro.href} className="btn btn-outline" prefetch={false}>{otro.label}</Link>
                            </div>
                        </div>

                        {/* El "sin add-ons" no es una frase suelta: son las tres cosas
                            que la gente da por hecho que se pagan aparte. */}
                        <aside className="fn-todo glass">
                            <p className="fn-todo-t">Todo entra en el plan</p>
                            <p className="fn-todo-d">
                                Sin add-ons ni módulos aparte. Lo único que cambia entre planes es cuántos {unidad} llevas.
                            </p>
                            <ul className="fn-todo-list">
                                {data.incluido.map((t) => (
                                    <li key={t}><Check /> {t}</li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>
            </section>

            <div className="container fn-layout">
                {/* Rail de áreas. Fijo: es lo que evita que esto sea un muro. */}
                <aside className="fn-rail">
                    <p className="fn-rail-label">{data.categorias.length} áreas</p>
                    <nav className="fn-rail-nav" aria-label="Áreas de funciones">
                        {data.categorias.map((c) => (
                            <a key={c.id} href={`#${c.id}`} className="fn-rail-item">
                                <span>{c.railNombre || c.nombre}</span>
                                <span className="fn-rail-n">{c.items.length}</span>
                            </a>
                        ))}
                    </nav>
                    <div className="fn-rail-cta glass">
                        <p className="fn-rail-cta-t">{esGym ? "Desde 149 €" : "Desde 0 €"}</p>
                        <p className="fn-rail-cta-d">
                            {esGym
                                ? "Coaches ilimitados en los tres planes, con migración incluida."
                                : "Plan gratuito permanente hasta 5 atletas, sin tarjeta."}
                        </p>
                        <Link
                            href={esGym ? "/para-gimnasios/" : "/onboarding/"}
                            className="btn btn-primary fn-rail-btn"
                            prefetch={false}
                        >
                            {esGym ? "Ver para gimnasios" : "Empezar gratis"}
                        </Link>
                    </div>
                </aside>

                <div className="fn-main">
                    {data.categorias.map((c) => {
                        const conMedia = !c.destacado && c.media && c.media.length > 0;
                        return (
                            <section
                                key={c.id}
                                id={c.id}
                                className={`fn-cat ${c.destacado ? "destacado" : ""} ${conMedia ? "" : "sin-media"}`}
                            >
                                {c.destacado ? (
                                    <div className="fn-cat-caja">
                                        <div className="fn-cat-flag">
                                            <span className="fn-cat-flag-n">{c.items.length} funciones</span>
                                            <span className="fn-cat-flag-t">incluidas en los tres planes Gym</span>
                                        </div>
                                        <h2 className="fn-h2 gradient-text">{c.nombre}</h2>
                                        <p className="fn-cat-sub">{c.resumen}</p>
                                        {c.nota && <p className="fn-cat-nota">{c.nota}</p>}
                                        <ul className="fn-items dos">
                                            {c.items.map((it) => <Fila key={it.t} it={it} />)}
                                        </ul>
                                        <p className="fn-cat-pie">
                                            Única área sin captura: todavía no hay ninguna de la Tienda.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Tres hijos sueltos, no un bloque: la rejilla los
                                            coloca en «titular | media | lista» en escritorio
                                            y en «titular, media, lista» en móvil, sin que el
                                            vídeo acabe detrás de toda la lista. */}
                                        <div className="fn-cat-head">
                                            <h2 className="fn-h2 gradient-text">{c.nombre}</h2>
                                            <p className="fn-cat-sub">{c.resumen}</p>
                                        </div>
                                        <FeatureMedia media={c.media} />
                                        <ul className="fn-items">
                                            {c.items.map((it) => <Fila key={it.t} it={it} />)}
                                        </ul>
                                    </>
                                )}
                            </section>
                        );
                    })}

                    <section className="fn-faq" id="preguntas">
                        <h2 className="fn-h2 gradient-text">Preguntas frecuentes</h2>
                        <div className="fn-faq-grid">
                            {data.faq.map((f) => (
                                <div key={f.q} className="fn-faq-item">
                                    <h3 className="fn-faq-q">{f.q}</h3>
                                    <p className="fn-faq-a">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <section className="fn-cierre">
                <div className="fn-hero-bg" aria-hidden="true" />
                <div className="container fn-cierre-inner">
                    <h2 className="fn-h2 gradient-text">
                        {esGym ? "Todo esto, desde 149 € al mes con IVA" : "Todo esto, empezando por 0 €"}
                    </h2>
                    <p className="fn-intro">
                        {esGym
                            ? "Coaches ilimitados en los tres planes y migración incluida desde tu plataforma actual."
                            : "Plan gratuito permanente hasta 5 atletas, sin tarjeta y sin caducidad. Si necesitas más, los planes de pago tienen 14 días de prueba."}
                    </p>
                    <div className="fn-ctas">
                        <Link
                            href={esGym ? "/para-gimnasios/" : "/onboarding/"}
                            className="btn btn-primary btn-lg"
                            prefetch={false}
                        >
                            {esGym ? "Ver TotalGains para gimnasios" : "Empezar gratis con 5 atletas"}
                        </Link>
                        <Link href="/precios/" className="btn btn-outline" prefetch={false}>Comparar planes</Link>
                    </div>
                    <p className="fn-cierre-nota">
                        <Link href={otro.href} prefetch={false}>{otro.label}</Link>
                    </p>
                </div>
            </section>
        </main>
    );
}

function Fila({ it }) {
    return (
        <li className="fn-item">
            <Check />
            <div>
                <h3 className="fn-item-t">{it.t}</h3>
                <p className="fn-item-d">{it.d}</p>
            </div>
        </li>
    );
}

/* Marca de verificación. Son más de 90 por página: un componente de icono por
   cada una engordaría el HTML sin aportar nada. */
function Check() {
    return (
        <svg className="fn-check" width="17" height="17" viewBox="0 0 24 24" fill="none"
             stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
