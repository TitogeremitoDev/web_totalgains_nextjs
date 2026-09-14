"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ──────────────────────────────────────────────
   VÍDEO QUE SOLO SE DESCARGA CUANDO SE VE

   El servidor pinta el PÓSTER como <img loading="lazy">. En el navegador, un
   IntersectionObserver espera a que la caja entre en pantalla y entonces la
   cambia por un <video autoplay muted loop>. Hasta ese momento no se ha bajado
   ni un byte del mp4.

   Por qué existe, medido en la auditoría del 14-sep-2026: los 6 <video> de
   /funciones/entrenadores/ se descargaban ENTEROS en la primera carga, 7.080 KB
   de los 7.085 de la página, y 5 de ellos estaban en áreas en `display:none`
   que el visitante puede no abrir nunca. `preload="metadata"` no servía: el
   atributo `autoplay` le gana en Chrome y fuerza la descarga completa.

   Esto NO saca el catálogo del HTML inicial, que es la restricción de estas
   páginas: las 61 funciones y los pósters siguen en el HTML servido, y sin
   JavaScript se ven los pósters. El vídeo es una mejora progresiva.

   Un área oculta con `display:none` no interseca nunca, así que su vídeo solo
   se pide cuando se abre su pestaña Y se baja hasta él. Y si el visitante ha
   pedido menos movimiento (prefers-reduced-motion), se queda el póster.
   ────────────────────────────────────────────── */

export default function LazyVideo({ src, poster, width, height, posterWidth, posterHeight, alt, className }) {
    const ref = useRef(null);
    const [visto, setVisto] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || visto) return undefined;
        if (typeof IntersectionObserver === "undefined") return undefined;
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

        /* 240px de margen: empieza a bajar un poco antes de asomar, para que
           cuando llegue a la vista ya esté arrancando. */
        const io = new IntersectionObserver((entries) => {
            if (entries.some((e) => e.isIntersecting)) {
                setVisto(true);
                io.disconnect();
            }
        }, { rootMargin: "240px 0px" });
        io.observe(el);
        return () => io.disconnect();
    }, [visto]);

    return (
        <div ref={ref} className="fn-media-lazy">
            {visto ? (
                <video
                    className={className}
                    poster={poster}
                    width={width}
                    height={height}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={alt}
                >
                    <source src={src} type="video/mp4" />
                </video>
            ) : (
                <Image
                    className={className}
                    src={poster}
                    alt={alt}
                    width={posterWidth}
                    height={posterHeight}
                    loading="lazy"
                />
            )}
        </div>
    );
}
