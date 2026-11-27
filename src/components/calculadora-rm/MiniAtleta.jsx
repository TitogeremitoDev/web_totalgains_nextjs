/* El atleta de la calculadora de RM, quieto, para la tarjeta de /herramientas/ (sin animación ni JavaScript en el navegador). */
import { cargar, formas, plataforma } from "./geometria";
import { DefsDegradados, Forma } from "./FormaSvg";

// Encuadre medido para la sentadilla en t = 0,25 con 100 kg: el atleta ocupa x 148-226 e y 75-233 del escenario.
const ENCUADRE = "0 62 374 184";

export default function MiniAtleta({ ej = "sentadilla", t = 0.25, kg = 100, className }) {
    const discos = cargar(kg, 20).discos;
    return (
        <svg viewBox={ENCUADRE} className={className} role="img" aria-label="Atleta haciendo sentadilla con 100 kg">
            <defs>
                <DefsDegradados />
            </defs>
            {[...plataforma(), ...formas(ej, t, discos)].map((f, i) => (
                <Forma key={i} f={f} />
            ))}
        </svg>
    );
}
