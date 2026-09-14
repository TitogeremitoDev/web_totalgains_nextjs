import Link from "next/link";
import FeatureMedia from "./FeatureMedia";
import "./funciones.css";

/* ──────────────────────────────────────────────
   CATÁLOGO DE FUNCIONES · vista compartida

   SERVER COMPONENT, sin una línea de JavaScript de cliente: la página existe
   porque las IAs afirmaban que faltaban funciones que sí están, y si el
   catálogo se montara al hacer clic no estaría en el HTML inicial.

   HISTORIAL DE ESTE LAYOUT, para no repetir los dos intentos fallidos:
   1º Nueve áreas apiladas en una columna, con el vídeo encima de cada una.
      Más de 8.000px de scroll. "Todo hacia abajo".
   2º Tres columnas (rail · funciones · vídeo) y una sola área a la vez. Al
      quedar una sola área, el rail y el vídeo medían 500px y la lista 900:
      dos columnas vacías enormes y el contenido en una tira estrecha.
   3º Esto. Las áreas son PESTAÑAS horizontales a todo el ancho y las
      funciones una rejilla de tres columnas que llena los 1200px. Sin
      columnas muertas y sin muro vertical: 13 funciones son 5 filas.

   Las pestañas van con `:target` (el ancla de la URL), así que siguen sin
   necesitar JavaScript y el HTML sigue llevando las 61 funciones enteras.
   ────────────────────────────────────────────── */

/* Funciones que van como tarjeta junto a la media; las demás, en lista
   compacta. Los datos de cada área van ordenados de más a menos importante,
   así que "las N primeras" es la selección. Tres junto a un vídeo apaisado
   (van apiladas a su derecha); cuatro junto a una captura de móvil (van en
   2x2 a su izquierda: con tres, la última se quedaba sola en su fila). */
const CLAVE = 3;
const CLAVE_VERTICAL = 4;

export default function FuncionesContent({ data, otro }) {
    const esGym = data.perfil === "gimnasio";
    const badge = esGym ? "Para gimnasios, estudios y boxes" : "Para entrenadores y nutricionistas";
    const total = data.categorias.reduce((n, c) => n + c.items.length, 0);
    const unidad = esGym ? "socios activos" : "atletas activos";

    /* Marca la pestaña abierta. Son N reglas generadas de los propios datos:
       no hay forma de escribirlo una sola vez en CSS, y resolverlo con
       JavaScript sacaría el catálogo del HTML inicial. */
    const cssPestanaAbierta = data.categorias
        .map((c, i) => (
            `.fn:has(#${c.id}:target) .fn-tab[href="#${c.id}"]`
            + (i === 0 ? `,.fn:not(:has(.fn-cat:target)) .fn-tab[href="#${c.id}"]` : "")
        ))
        .join(",")
        + "{background:var(--primary-gradient);border-color:transparent;color:#fff;box-shadow:0 6px 18px -6px rgba(102,126,234,.7)}"
        + data.categorias.map((c, i) => (
            `.fn:has(#${c.id}:target) .fn-tab[href="#${c.id}"] .fn-tab-n`
            + (i === 0 ? `,.fn:not(:has(.fn-cat:target)) .fn-tab[href="#${c.id}"] .fn-tab-n` : "")
        )).join(",")
        + "{opacity:.8}";

    return (
        <main className="fn">
            <style dangerouslySetInnerHTML={{ __html: cssPestanaAbierta }} />
            {/* Con teclado, el salto global del layout deja el foco al inicio de
                la página; este segundo salto lleva directo a las pestañas, que
                son el único control. Medido: sin él eran 25 tabulaciones. */}
            <a className="skip-link" href="#areas">Ir a las áreas de funciones</a>

            {/* ── Hero ──
                El navbar es fixed y no reserva espacio: el colchón lo pone
                .fn-hero. Medido en /precios/: 122px. */}
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

                    <span className="fn-badge">{badge}</span>
                    <h1 className="fn-h1 gradient-text">{data.h1}</h1>
                    {/* Las cifras en su propia fila, no en la cola de un párrafo
                        gris: el catálogo era la única página del sitio sin media
                        en el héroe y con el h1 más pequeño (48px frente a 54-80),
                        y leía como página de segundo nivel siendo la que más
                        contenido propio tiene. */}
                    <ul className="fn-cifras" aria-label="El catálogo en cifras">
                        <li><strong className="gradient-text">{total}</strong><span>funciones</span></li>
                        <li><strong className="gradient-text">{data.categorias.length}</strong><span>áreas</span></li>
                        <li><strong className="gradient-text">0</strong><span>add-ons</span></li>
                    </ul>
                    <p className="fn-intro">
                        {/* La negrita va en el argumento que desactiva la objeción de
                            compra, no en el número: "todas entran en cualquier plan"
                            es lo que quita el miedo al recargo por módulos. */}
                        El catálogo completo, sin letra pequeña{data.destacadas ? `: ${data.destacadas}` : ""}.{" "}
                        <strong>Todas entran en cualquier plan</strong>
                        {esGym ? ", con coaches ilimitados en los tres." : ", también en el gratuito."}
                    </p>

                    {/* En franja y no en tarjeta flotante: las tres cosas que
                        la gente da por hecho que se pagan aparte, a la vista. */}
                    <ul className="fn-incluido">
                        {data.incluido.map((t) => (
                            <li key={t}><Check /> {t}</li>
                        ))}
                    </ul>

                    <div className="fn-ctas">
                        <Link href="/precios/" className="btn btn-primary" prefetch={false}>Ver precios</Link>
                        <Link href={otro.href} className="btn btn-outline" prefetch={false}>{otro.label}</Link>
                    </div>
                </div>
            </section>

            {/* ── Pestañas ── */}
            <nav className="fn-tabs-bar" id="areas" tabIndex={-1} aria-label="Áreas de funciones">
                <div className="container fn-tabs">
                    {data.categorias.map((c) => (
                        <a key={c.id} href={`#${c.id}`} className="fn-tab">
                            {c.railNombre || c.nombre}
                            <span className="fn-tab-n">{c.items.length}</span>
                        </a>
                    ))}
                </div>
            </nav>

            <div className="container fn-main">
                {data.categorias.map((c) => {
                    const media = c.media && c.media.length ? c.media : null;
                    const vertical = media && media[0].vertical;
                    const clave = vertical ? CLAVE_VERTICAL : CLAVE;
                    return (
                        <section key={c.id} id={c.id} className={`fn-cat ${c.destacado ? "destacado" : ""}`}>
                            {/* .fn-area es quien maqueta; la sección solo se
                                muestra u oculta (las reglas de pestañas le ponen
                                display:block y pisarían un display:grid aquí).
                                Con media VERTICAL, la captura va en una columna a
                                la derecha junto a las TARJETAS, no junto al
                                titular: medido, compartir fila con el titular
                                dejaba la primera tarjeta a 708-827px porque la
                                fila medía lo que mide el móvil. */}
                            <div className={`fn-area ${vertical ? "vertical" : ""}`}>
                            <div className="fn-area-top">
                                <div className="fn-area-head">
                                    {c.destacado && (
                                        <div className="fn-cat-flag">
                                            <span className="fn-cat-flag-n">{c.items.length} funciones</span>
                                            <span className="fn-cat-flag-t">incluidas en los tres planes Gym</span>
                                        </div>
                                    )}
                                    <h2 className="fn-h2 gradient-text">{c.nombre}</h2>
                                    <p className="fn-cat-sub">{c.resumen}</p>
                                    {c.nota && <p className="fn-cat-nota">{c.nota}</p>}
                                </div>
                            </div>

                            {/* ESCAPARATE: la media y las tres funciones clave en la
                                misma fila, visibles las dos cosas nada más pulsar la
                                pestaña. El resto va debajo en lista compacta, sin cajas.
                                Antes eran 13 tarjetas idénticas en fila y el vídeo al
                                final: "50 cuadrados y luego un vídeo, quién se va a ver
                                eso" (German, 14-sep-2026). El HTML sigue llevando las
                                61 funciones con su descripción. */}
                            <div className={`fn-escaparate ${vertical ? "vertical" : ""} ${media ? "" : "sin-media"}`}>
                                {media && !vertical && <FeatureMedia media={[media[0]]} ancha />}
                                <ul className="fn-items fn-items-clave">
                                    {c.items.slice(0, clave).map((it) => (
                                        <li key={it.t} className="fn-item">
                                            <div className="fn-item-top">
                                                <Check />
                                                <h3 className="fn-item-t">{it.t}</h3>
                                            </div>
                                            <p className="fn-item-d">{it.d}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {c.items.length > clave && (
                                <div className="fn-resto">
                                    <p className="fn-resto-t">Y además, en {c.railNombre || c.nombre}</p>
                                    <ul className="fn-mini-lista">
                                        {c.items.slice(clave).map((it) => (
                                            <li key={it.t} className="fn-mini">
                                                <Check />
                                                <div>
                                                    <h3 className="fn-mini-t">{it.t}</h3>
                                                    <p className="fn-mini-d">{it.d}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* La media VERTICAL (captura de móvil) no cabe en la fila del
                                escaparate sin dejar medio bloque vacío: mide 600px y las
                                tres tarjetas 300. Va como columna derecha del área entera,
                                con las tarjetas Y el inventario a su izquierda. */}
                            {media && vertical && <FeatureMedia media={[media[0]]} />}

                            {/* Tienda lleva dos medias: la segunda, debajo del inventario. */}
                            {media && media.length > 1 && <FeatureMedia media={media.slice(1)} ancha />}
                            </div>
                        </section>
                    );
                })}

                {/* ── Índice plano ──
                    En pantalla se ve un área y las otras están en display:none,
                    así que Ctrl+F no encontraba "Stripe" o "báscula" si estaban
                    en otra pestaña: el 64% del texto del catálogo no existía
                    para el buscador del navegador. Un <details> cerrado SÍ es
                    buscable y Chrome lo abre solo al encontrar dentro. Cada
                    nombre enlaza a su área, así que también sirve de índice. */}
                <details className="fn-indice" id="indice">
                    <summary>Las {total} funciones en una sola lista</summary>
                    <ul className="fn-indice-lista">
                        {data.categorias.map((c) => c.items.map((it) => (
                            <li key={`${c.id}-${it.t}`}>
                                <a href={`#${c.id}`}>{it.t}</a>
                                <span className="fn-indice-area">{c.railNombre || c.nombre}</span>
                            </li>
                        )))}
                    </ul>
                </details>

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

/* Marca de verificación. Son más de 90 por página: un componente de icono por
   cada una engordaría el HTML sin aportar nada. */
function Check() {
    return (
        <svg className="fn-check" width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
