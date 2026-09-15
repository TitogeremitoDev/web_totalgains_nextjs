import Image from "next/image";
import LazyVideo from "./LazyVideo";

/* ──────────────────────────────────────────────
   MEDIA DE UN ÁREA

   Va DEBAJO de la rejilla de funciones, no encima. Puesta delante empujaba la
   primera tarjeta a 1.041 px del borde superior: un catálogo que nunca
   enseñaba catálogo. La media sigue ahí, pero después de que el visitante ha
   confirmado que la función existe, que es el orden que pide esta página.

   Los vídeos van por <LazyVideo>: el HTML lleva el póster y el mp4 solo se
   descarga cuando la caja entra en pantalla. Antes los 6 vídeos de la página
   se bajaban enteros en la primera carga (7 MB), 5 de ellos desde áreas
   ocultas. Ver la nota larga en LazyVideo.jsx.

   Sin JavaScript de cliente en el CATÁLOGO: las 61 funciones tienen que
   existir en el HTML. El vídeo diferido es una mejora encima, no una
   dependencia: sin JS se ve el póster.
   ────────────────────────────────────────────── */

export default function FeatureMedia({ media, ancha = false, tope = 880, topeAlto = 0 }) {
    if (!media || !media.length) return null;

    return (
        <div className={`fn-media-col ${ancha ? "ancha" : ""}`}>
            {media.map((m) => {
                /* El póster tiene su propio tamaño (1200x676 donde el vídeo es
                   1280x720) y es lo primero que se pinta: el tope
                   anti-ampliación se calcula sobre el fichero que se ve. */
                const anchoReal = m.tipo === "video" ? m.pw : m.w;
                const altoReal = m.tipo === "video" ? m.ph : m.h;
                /* El tope de ALTURA se traduce a ancho aquí, con el ratio del
                   fichero. Limitarlo con `max-height` + `width: auto` en CSS
                   parecía más corto, pero le quitaba a la imagen la reserva de
                   espacio: hasta que cargaba, la caja medía 0x0 y el bloque se
                   desplomaba (medido: dos bloques a 0x0 con la red fría). */
                const porAlto = topeAlto && altoReal ? Math.round((topeAlto * anchoReal) / altoReal) : Infinity;

                return (
                    <figure key={m.src} className={`fn-media ${m.vertical ? "vertical" : ""}`}>
                        {/* Tope al ANCHO REAL del fichero. Sin esto, un recorte de
                            480px metido en una caja de 880 se amplía un 1,83x y sale
                            borroso y gigante: pasó con las capturas del gimnasio. */}
                        <div
                            className="fn-media-marco"
                            style={{
                                /* Suelo de 216px de marco (200 de captura): apretar la altura para cerrar el
                                   hueco no puede dejar la captura en 157px de ancho,
                                   donde ya no se distingue la pantalla. */
                                maxWidth: Math.min(anchoReal, Math.max(216, Math.min(m.vertical ? 300 : tope, porAlto))),
                            }}
                        >
                            {m.tipo === "video" ? (
                                <LazyVideo
                                    className="fn-media-el"
                                    src={m.src}
                                    poster={m.poster}
                                    width={m.w}
                                    height={m.h}
                                    posterWidth={m.pw}
                                    posterHeight={m.ph}
                                    alt={m.alt}
                                />
                            ) : (
                                <Image
                                    className="fn-media-el"
                                    src={m.src}
                                    alt={m.alt}
                                    width={m.w}
                                    height={m.h}
                                    loading="lazy"
                                />
                            )}
                        </div>
                        <figcaption className="fn-media-cap">{m.pie}</figcaption>
                    </figure>
                );
            })}
        </div>
    );
}
