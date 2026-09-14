import Image from "next/image";

/* ──────────────────────────────────────────────
   MEDIA DE UN ÁREA

   Vive en su propia columna, al lado de la lista de funciones, no encima.
   Un 16:9 a ancho de contenedor son 675px de alto: puesto arriba empujaba la
   lista fuera de la pantalla y se veía el vídeo en vez de para qué sirve.

   Los vídeos van silenciados, en bucle y sin controles: son demostraciones de
   pocos segundos, no piezas que nadie vaya a "reproducir". Con `preload="none"`
   y su póster, el navegador no descarga vídeo hasta que decide reproducirlo.

   Sin JavaScript de cliente: el catálogo entero tiene que existir en el HTML.
   ────────────────────────────────────────────── */

export default function FeatureMedia({ media }) {
    if (!media || !media.length) return null;

    return (
        <div className="fn-media-col">
            {media.map((m) => (
                <figure key={m.src} className={`fn-media ${m.vertical ? "vertical" : ""}`}>
                    <div className="fn-media-marco">
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
                                preload="none"
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
