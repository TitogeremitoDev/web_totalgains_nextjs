/* eslint-disable @next/next/no-img-element -- a propósito, ver abajo */
import variantes from "@/data/variantesImagenes.json";

/* Una foto con sus copias por tamaño (srcset), para que el móvil se baje la
   que necesita y no la captura entera.

   Por qué un <img> y no next/image: la web se exporta estática con
   `images: { unoptimized: true }` y en ese modo Next NO genera srcset aunque
   le pases `sizes`. Las copias las crea `node scripts/variantes-imagenes.mjs`
   (nombres `-w<ancho>.webp`) y deja la lista en src/data/variantesImagenes.json:
   aquí solo se ofrecen las que existen y pesan menos que el original. Una foto
   sin copias sale tal cual, como antes.

   Revisión de la web 21-nov-2026, mejora CD79: /para-gimnasios/ mandaba cinco
   capturas de 1837 px a un móvil que las enseña a ~380. */
export default function ImagenAdaptable({ src, alt, width, height, sizes, priority = false, style, className }) {
  const v = variantes[src];
  const base = src.replace(/\.webp$/, "");
  const srcSet = v
    ? [...v.copias.map((a) => `${base}-w${a}.webp ${a}w`), `${src} ${v.w}w`].join(", ")
    : undefined;
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      style={style}
      className={className}
    />
  );
}
