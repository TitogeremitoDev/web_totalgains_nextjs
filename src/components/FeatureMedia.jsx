import Image from "next/image";

/* ──────────────────────────────────────────────
   MEDIA DE UNA CATEGORÍA DE FUNCIONES

   Vídeo o captura, siempre con pie que dice lo que se está viendo.

   Los vídeos van silenciados, en bucle y sin controles: son demostraciones de
   producto de pocos segundos, no piezas que nadie vaya a "reproducir". Y con
   `preload="none"` y su póster puesto, el navegador no descarga un solo byte
   de vídeo hasta que decide reproducirlo, que en la práctica es cuando el
   bloque se acerca a la pantalla. Sin eso, una página con seis vídeos se come
   ocho megas antes de que nadie haya leído nada.

   Sin JavaScript de cliente a propósito: el catálogo entero tiene que existir
   en el HTML, que es justo lo que vinimos a arreglar.
   ────────────────────────────────────────────── */

export default function FeatureMedia({ media }) {
    if (!media || !media.length) return null;

    return (
        <div className={`fn-media-row ${media.length > 1 ? "doble" : ""}`}>
            {media.map((m) => (
                <figure key={m.src} className={`fn-media ${m.vertical ? "vertical" : ""}`}>
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
                    <figcaption className="fn-media-cap">{m.pie}</figcaption>
                </figure>
            ))}
        </div>
    );
}
