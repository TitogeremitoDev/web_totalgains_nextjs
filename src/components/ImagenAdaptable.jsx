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
/* `priority`: se pide al momento y con prioridad alta (la foto principal de la
   página, p. ej. la cabecera de /para-gimnasios/).
   `inmediata`: se pide al momento pero SIN prioridad alta. Para la primera
   foto de una lista enlazada desde el menú: React convierte cada <img> con
   fetchPriority="high" en un aviso de precarga dentro de los datos de la
   página, y como el menú de TODAS las páginas enlaza a /blog/, cada página
   que lo precargaba se bajaba también esa foto (26 KB). Medido en vivo el
   22-nov: los artículos pasaron de 411 a 455 KB por esto. */
export default function ImagenAdaptable({ src, alt, width, height, sizes, priority = false, inmediata = false, style, className }) {
  const v = variantes[src];
  const base = src.replace(/\.webp$/, "");
  const srcSet = v
    ? [...v.copias.map((a) => `${base}-w${a}.webp ${a}w`), `${src} ${v.w}w`].join(", ")
    : undefined;
  const img = (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority || inmediata ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      style={style}
      className={className}
    />
  );
  /* React precarga toda <img> que no sea diferida, y ese aviso viaja en los
     datos de la página: el menú de cada página precarga /blog/ y con él la
     foto. Dentro de <picture> React no la precarga, pero al estar en el HTML el
     navegador la pide igual al instante. `display: contents` para que el
     <picture> no altere la maqueta. */
  return inmediata && !priority ? <picture style={{ display: "contents" }}>{img}</picture> : img;
}
