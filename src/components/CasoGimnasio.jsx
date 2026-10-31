import Image from "next/image";
import { Quote } from "lucide-react";
import "./CasoGimnasio.css";

/* Gimnasios reales en /para-gimnasios/ (la página no tenía ni una opinión).
   Las cifras salen de SU cuenta en TotalGains (recuento de solo lectura) y la
   frase la aprobó cada gimnasio antes de publicarla: nada inventado. Si se
   cambia una cifra o una frase, se vuelve a pedir su «sí». `fecha` dice de
   cuándo son las cifras, para que no se lean como de hoy. */
export default function CasoGimnasio({ casos, fecha }) {
  if (!casos?.length) return null;
  return (
    <section className="cgym" aria-labelledby="cgym-titulo">
      <div className="container cgym-caja">
        <p className="cgym-antetitulo">Gimnasios reales</p>
        <h2 id="cgym-titulo">Así lo usan en su día a día</h2>
        <div className="cgym-casos">
          {casos.map(({ id, nombre, lugar, foto, cifras, frase, autor }) => (
            <article key={id} className="cgym-caso">
              <div className="cgym-foto">
                <Image src={foto.src} alt={foto.alt} width={foto.ancho} height={foto.alto} sizes="(max-width: 760px) 100vw, 340px" style={{ objectPosition: foto.posicion }} />
              </div>
              <div className="cgym-cuerpo">
                <h3>{nombre}{lugar && <span>{lugar}</span>}</h3>
                <div className="cgym-cifras">
                  {cifras.map(({ valor, texto }) => (
                    <div key={texto}><strong>{valor}</strong><span>{texto}</span></div>
                  ))}
                </div>
                <blockquote>
                  <Quote size={20} aria-hidden="true" />
                  <p>{frase}</p>
                  <footer>{autor}</footer>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
        {fecha && <p className="cgym-nota">Cifras de su cuenta en TotalGains ({fecha}). Frases con su visto bueno.</p>}
      </div>
    </section>
  );
}
