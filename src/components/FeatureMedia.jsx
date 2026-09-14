import Image from "next/image";

/* ──────────────────────────────────────────────
   MEDIA DE UN ÁREA

   Vive en su propia columna, al lado de la lista de funciones, no encima.
   Un 16:9 a ancho de contenedor son 675px de alto: puesto arriba empujaba la
   lista fuera de la pantalla y se veía el vídeo en vez de para qué sirve.

   Los vídeos van silenciados, en bucle y sin controles: son demostraciones de
   pocos segundos, no piezas que nadie vaya a "reproducir". `preload="metadata"` y no "none":
   con "none" el navegador no baja nada y el arranque automático queda a su
   criterio (en Safari puede no llegar a ocurrir). Con metadata baja unos pocos
   KB, el póster cubre la primera pintada y los que quedan fuera de pantalla
   los difiere el propio navegador.

   Sin JavaScript de cliente: el catálogo entero tiene que existir en el HTML.
   ────────────────────────────────────────────── */

export default function FeatureMedia({ media, ancha = false }) {
    if (!media || !media.length) return null;

    return (
        <div className={`fn-media-col ${ancha ? "ancha" : ""}`}>
            {media.map((m) => (
                <figure key={m.src} className={`fn-media ${m.vertical ? "vertical" : ""}`}>
                    {/* Tope al ANCHO REAL del fichero. Sin esto, un recorte de
                        480px metido en una caja de 880 se amplía un 1,83x y sale
                        borroso y gigante: pasó con las capturas del gimnasio. */}
                    <div
                        className="fn-media-marco"
                        style={{ maxWidth: Math.min(m.vertical ? 264 : 880, m.w) }}
                    >
                        {m.tipo === "video" ? (
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
            ))}
        </div>
    );
}
