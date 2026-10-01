"use client";

import { useRef } from "react";
import { trackEvent } from "@/components/Analytics";
import "./DemoVideo.css";

/* ──────────────────────────────────────────────
   VÍDEO DE DEMO CON SONIDO (no un bucle mudo como LazyVideo)

   Reproductor nativo con controles: el visitante lo arranca, sube el volumen
   o lo pone a pantalla completa como en cualquier web. Con preload="none" no
   se descarga ni un byte del mp4 hasta que pulsa play; antes solo viaja el
   póster. El primer play de cada visita se apunta en GA4 (demo_video_play)
   para saber si alguien lo ve y desde qué página.
   ────────────────────────────────────────────── */

export default function DemoVideo({ src, poster, width = 1280, height = 720, titulo, ubicacion }) {
    const contado = useRef(false);

    const alReproducir = () => {
        if (contado.current) return;
        contado.current = true;
        trackEvent("demo_video_play", {
            video: src.split("/").pop().replace(/\.mp4$/, ""),
            location: ubicacion,
        });
    };

    return (
        <div className="demo-video">
            <video
                className="demo-video-media"
                poster={poster}
                width={width}
                height={height}
                controls
                playsInline
                preload="none"
                aria-label={titulo}
                onPlay={alReproducir}
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
}
