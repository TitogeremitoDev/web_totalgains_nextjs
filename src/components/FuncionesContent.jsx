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


/* Cuánto puede medir la media de un bloque, según cuánto texto tiene al lado.

   Una captura de móvil a su tamaño natural mide 696 px de alto; tres funciones
   ocupan 241. El resultado eran 455 px de aire muerto por bloque, medidos en
   el navegador, y German el 15-sep-2026: "hay algunas pantallas que son para
   quemarlas, como puedes dejar tanto espacio???".

   El número de funciones del bloque es la única señal fiable de la altura del
   texto, y se conoce aquí, en el servidor: la página no lleva JavaScript de
   cliente (las 108 funciones tienen que estar en el HTML para los rastreadores
   de IA), así que no se puede medir y ajustar en el navegador.

   Las apaisadas con mucho texto tienen el problema al revés (el hueco cae bajo
   la imagen): esas reparten la lista en dos columnas. */
function clasesDeBloque(b) {
    if (!b.media) return "sin-media";
    /* 5+ funciones caben en tres columnas; con 4 quedaría una sola colgando. */
    if (b.media.ancha) return `panel ${b.items.length >= 5 ? "panel-3col" : "panel-2col"}`;
    if (b.media.vertical) return "vertical";
    return b.items.length >= 5 ? "lista-2col" : "";
}

/* Hasta dónde puede crecer la captura de móvil de un bloque. Es lo que estaba
   roto: a su tamaño natural mide 696 px de alto y, al lado, tres funciones
   ocupan 241, así que cada bloque dejaba 455 px de aire muerto (medidos en el
   navegador; German el 15-sep-2026: "como puedes dejar tanto espacio???").

   El número de funciones es la única señal de la altura del texto que se tiene
   aquí, y aquí es el servidor: el catálogo no lleva JavaScript de cliente (las
   108 funciones tienen que estar en el HTML para los rastreadores de IA), así
   que medir en el navegador y ajustar no es una opción. */
function topeAltoDeBloque(b) {
    if (!b.media || !b.media.vertical) return 0;
    const n = b.items.length;
    return n <= 3 ? 390 : n === 4 ? 450 : 510;
}

/* ── El color de cada área, calculado para que se lea ──

   Cada área lleva en sus datos el color que ya tiene en el producto. De ahí
   salen las cuatro variables que usa el CSS: el hex para bordes y sombras, el
   triplete para poder darle alfa con rgba(), la tinta del texto cuando la
   pestaña se rellena de ese color, y el tono del contador sobre el fondo
   oscuro de la barra.

   Nada de esto se elige a ojo, y un umbral de luminancia tampoco sirve: mi
   primer intento mandaba tinta blanca a todo lo que estuviera por debajo de
   0,36 y dejaba cinco de doce colores sin llegar al mínimo de 4,5:1 (el
   celeste de Seguimiento daba 2,77 en blanco... y 6,69 en oscuro). Así que se
   prueban las dos tintas y gana la que más contraste da.

   El contador es el caso contrario: el color puro sobre el fondo de la barra
   se queda corto en los tonos oscuros (el azul de Clases, 3,90:1), así que se
   aclara mezclándolo con blanco hasta pasar de 4,5. */
const CANAL_LIN = (v) => { const c = v / 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const luzDe = ([r, g, b]) => 0.2126 * CANAL_LIN(r) + 0.7152 * CANAL_LIN(g) + 0.0722 * CANAL_LIN(b);
const contrasteDe = (a, b) => { const [alta, baja] = [luzDe(a), luzDe(b)].sort((x, y) => y - x); return (alta + 0.05) / (baja + 0.05); };

const TINTA_CLARA = [255, 255, 255];
const TINTA_OSCURA = [11, 17, 32];      // #0b1120
const FONDO_BARRA = [2, 6, 23];         // #020617, el de .fn-tabs-bar
const MINIMO = 4.5;                     // WCAG AA para texto pequeño

function acentoDeArea(hex) {
    const h = (hex || "#667eea").replace("#", "");
    const rgb = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));

    const clara = contrasteDe(rgb, TINTA_CLARA);
    const oscura = contrasteDe(rgb, TINTA_OSCURA);
    const tinta = clara >= oscura ? "#ffffff" : "#0b1120";

    /* El contador se aclara de 8 % en 8 % hasta que se lee sobre la barra. */
    let nota = rgb;
    for (let i = 0; i < 12 && contrasteDe(nota, FONDO_BARRA) < MINIMO; i++) {
        nota = nota.map((c) => Math.round(c + (255 - c) * 0.08));
    }

    return {
        "--fn-acento": `#${h}`,
        "--fn-acento-rgb": rgb.join(","),
        "--fn-tinta": tinta,
        "--fn-nota": `rgb(${nota.join(",")})`,
    };
}

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
        + "{background-color:var(--fn-acento);background-image:linear-gradient(145deg,rgba(255,255,255,.24),rgba(0,0,0,.2));"
        + "border-color:transparent;color:var(--fn-tinta);transform:translateY(-1px);"
        + "box-shadow:0 9px 22px -9px rgba(var(--fn-acento-rgb),.95),inset 0 1px 0 rgba(255,255,255,.3)}"
        + data.categorias.map((c, i) => (
            `.fn:has(#${c.id}:target) .fn-tab[href="#${c.id}"] .fn-tab-n`
            + (i === 0 ? `,.fn:not(:has(.fn-cat:target)) .fn-tab[href="#${c.id}"] .fn-tab-n` : "")
        )).join(",")
        /* El contador de la activa lleva su propia pastilla, pintada con un
           box-shadow del mismo color: así "engorda" sin ocupar layout. La tira
           mide 1168px de los 1152 útiles, y un padding de verdad la partiría. */
        + "{color:var(--fn-tinta);opacity:1;background:rgba(var(--fn-acento-rgb),.001);"
        + "border-radius:8px;box-shadow:0 0 0 4px rgba(255,255,255,.22),inset 0 0 0 99px rgba(255,255,255,.22)}"
        /* Y la raya de la barra toma el color del área abierta: ata la tira con
           lo que hay debajo sin mover un píxel (mismo grosor, solo color). */
        + data.categorias.map((c, i) => {
            const rgb = acentoDeArea(c.accent)["--fn-acento-rgb"];
            return `.fn:has(#${c.id}:target) .fn-tabs-bar`
                + (i === 0 ? `,.fn:not(:has(.fn-cat:target)) .fn-tabs-bar` : "")
                + `{border-bottom-color:rgba(${rgb},.55)}`;
        }).join("");

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
                        <a key={c.id} href={`#${c.id}`} className="fn-tab" style={acentoDeArea(c.accent)}>
                            {c.railNombre || c.nombre}
                            <span className="fn-tab-n">{c.items.length}</span>
                        </a>
                    ))}
                </div>
            </nav>

            <div className="container fn-main">
                {data.categorias.map((c) => {
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
                            <div className="fn-area">
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

                            {/* BLOQUES VISUALES: cada grupo de 3-5 funciones con su
                                imagen o vídeo, alternando lado. Patrón AimHarder que
                                pidió German el 15-sep-2026: "que priorice lo visual
                                siempre". Antes: rejilla de 13 tarjetas iguales y el
                                vídeo al final; después: escaparate con 3 clave y una
                                lista compacta sin imagen ("aquí a la derecha podríamos
                                añadir la imagen de una rutina ya montada").
                                Las funciones se leen de `items` por índice, así que el
                                inventario completo sigue en el HTML con su <h4>. */}
                            <div className="fn-bloques">
                                {c.bloques.map((b, k) => (
                                    <div key={b.titulo} className={`fn-bloque ${clasesDeBloque(b)} ${k % 2 ? "invertido" : ""}`}>
                                        {/* media: null = todavía no hay captura DISTINTA para este
                                            bloque; va en texto a dos columnas antes que repetir una. */}
                                        {b.media && <FeatureMedia media={[b.media]} tope={b.media.ancha ? 1152 : 880} topeAlto={topeAltoDeBloque(b)} />}
                                        <div className="fn-bloque-texto">
                                            <h3 className="fn-bloque-t">{b.titulo}</h3>
                                            <ul className="fn-bloque-lista">
                                                {b.items.map((idx) => {
                                                    const it = c.items[idx];
                                                    return (
                                                        <li key={it.t} className="fn-bloque-item">
                                                            <Check />
                                                            <div>
                                                                <h4 className="fn-bloque-item-t">{it.t}</h4>
                                                                <p className="fn-bloque-item-d">{it.d}</p>
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
