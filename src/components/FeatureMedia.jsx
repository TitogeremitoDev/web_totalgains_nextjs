import Image from "next/image";

/* ──────────────────────────────────────────────
   MEDIA DE UN ÁREA

   Va DEBAJO de la rejilla de funciones, no encima. Puesta delante empujaba la
   primera tarjeta a 1.041 px del borde superior: un catálogo que nunca
   enseñaba catálogo. La media sigue ahí, pero después de que el visitante ha
   confirmado que la función existe, que es el orden que pide esta página.

   ⚠️ SOLO EL ÁREA ABIERTA POR DEFECTO LLEVA <video>. Las demás enseñan su
   póster como <img loading="lazy">.

   El motivo, medido: los 6 mp4 de /funciones/entrenadores/ se descargaban
   ENTEROS en la primera carga — 7.080 KB de los 7.085 KB de la página — y 5 de
   ellos viven en áreas que están en `display:none` y que el visitante puede no
   abrir nunca. `preload="metadata"` no sirve de nada: el atributo `autoplay`
   le gana en Chrome y fuerza la descarga completa aunque el área esté oculta
   (`video.buffered.end() == video.duration` en los seis, ocultos incluidos).
   Sin JavaScript de cliente no hay forma de arrancar un vídeo al abrir su
   pestaña, así que la elección real es "todos se bajan" o "solo el primero".

   La página de gimnasios ya funcionaba así, con <img loading="lazy"> en las 8
   áreas, y pesa 324 KB: 22 veces menos con la misma arquitectura.
   ────────────────────────────────────────────── */

export default function FeatureMedia({ media, ancha = false, viva = false }) {
    if (!media || !media.length) return null;

    return (
        <div className={`fn-media-col ${ancha ? "ancha" : ""}`}>
            {media.map((m) => {
                /* Un vídeo de un área oculta se enseña como su póster. */
                const comoVideo = m.tipo === "video" && viva;
                /* El póster tiene su propio tamaño: 1200x676 donde el vídeo es
                   1280x720. El tope anti-ampliación se calcula sobre el ancho
                   del FICHERO que se pinta, no sobre el del vídeo. */
                const anchoReal = comoVideo ? m.w : (m.tipo === "video" ? m.pw : m.w);
                const altoReal = comoVideo ? m.h : (m.tipo === "video" ? m.ph : m.h);

                return (
                    <figure key={m.src} className={`fn-media ${m.vertical ? "vertical" : ""}`}>
                        {/* Tope al ANCHO REAL del fichero. Sin esto, un recorte de
                            480px metido en una caja de 880 se amplía un 1,83x y sale
                            borroso y gigante: pasó con las capturas del gimnasio. */}
                        <div
                            className="fn-media-marco"
                            style={{ maxWidth: Math.min(m.vertical ? 264 : 880, anchoReal) }}
                        >
                            {comoVideo ? (
                                <video
                                    className="fn-media-el"
                                    poster={m.poster}
                                    width={m.w}
                                    height={m.h}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    aria-label={m.alt}
                                >
                                    <source src={m.src} type="video/mp4" />
                                </video>
                            ) : (
                                <Image
                                    className="fn-media-el"
                                    src={m.tipo === "video" ? m.poster : m.src}
                                    alt={m.alt}
                                    width={anchoReal}
                                    height={altoReal}
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
