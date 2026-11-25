"use client";

import { useMemo, useState } from "react";
import "./CalculadoraRM.css";

/* Calculadora de RM (repetición máxima) de /calculadora-rm/ y del artículo «Cómo calcular tu 1RM».
   ⚠️ La fórmula principal es la de EPLEY, la misma que usa la app de TotalGains (entreno.jsx, calculate1RM):
   1RM = peso × (1 + reps / 30). Brzycki (peso × 36 / (37 − reps)) se enseña al lado como segunda referencia.
   Repeticiones por porcentaje: tabla de la NSCA (Haff y Triplett, Essentials of Strength Training and
   Conditioning, 4.ª ed., 2016). Zonas: fuerza ≥ 85 % (≤ 6 reps), hipertrofia 67-85 % (6-12), resistencia ≤ 67 % (≥ 12).
   Sin servidor y sin guardar nada. */

const NSCA = [
    { pct: 100, reps: "1" },
    { pct: 95, reps: "2" },
    { pct: 93, reps: "3" },
    { pct: 90, reps: "4" },
    { pct: 87, reps: "5" },
    { pct: 85, reps: "6" },
    { pct: 83, reps: "7" },
    { pct: 80, reps: "8" },
    { pct: 77, reps: "9" },
    { pct: 75, reps: "10" },
    { pct: 70, reps: "11" },
    { pct: 67, reps: "12" },
    { pct: 65, reps: "15" },
    { pct: 60, reps: "calentar" },
    { pct: 50, reps: "calentar" },
];

export function epley(peso, reps) {
    if (!(peso > 0) || !(reps >= 1)) return 0;
    return reps === 1 ? peso : peso * (1 + reps / 30);
}

export function brzycki(peso, reps) {
    if (!(peso > 0) || !(reps >= 1) || reps >= 37) return 0;
    return reps === 1 ? peso : (peso * 36) / (37 - reps);
}

const zona = (pct) => (pct >= 85 ? "fuerza" : pct >= 67 ? "hipertrofia" : pct >= 65 ? "resistencia" : "suave");

const exacto = (x) => `${x.toLocaleString("es-ES", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} kg`;

const kg = (x, paso) => {
    const r = Math.round(x / paso) * paso;
    return `${r.toLocaleString("es-ES", { minimumFractionDigits: paso < 1 ? 1 : 0, maximumFractionDigits: 1 })} kg`;
};

export default function CalculadoraRM({ titulo = "Calcula tu RM (repetición máxima)" }) {
    const [peso, setPeso] = useState(80);
    const [reps, setReps] = useState(5);
    const [discos, setDiscos] = useState(false);
    const paso = discos ? 2.5 : 0.5;

    const r = useMemo(() => {
        const p = Number(peso);
        const n = Math.round(Number(reps));
        const fuera = !(p > 0 && p <= 500);
        const e = fuera ? 0 : epley(p, n);
        const b = fuera ? 0 : brzycki(p, n);
        return { e, b, valido: e > 0, aviso: n > 10 };
    }, [peso, reps]);

    return (
        <section className="calc-rm" aria-label="Calculadora de RM (repetición máxima)">
            <h2 className="calc-rm__titulo">{titulo}</h2>
            <p className="calc-rm__intro">
                Pon el peso que levantaste y cuántas repeticiones completas hiciste con buena técnica. La calculadora estima tu
                1RM sin que tengas que probar tu máximo.
            </p>

            <div className="calc-rm__campos">
                <label className="calc-rm__campo">
                    <span>Peso levantado (kg)</span>
                    <input
                        type="number"
                        inputMode="decimal"
                        min="1"
                        max="500"
                        step="0.5"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                    />
                </label>
                <label className="calc-rm__campo">
                    <span>Repeticiones hechas: <strong>{Math.round(Number(reps)) || 0}</strong></span>
                    <input type="range" min="1" max="12" step="1" value={reps} onChange={(e) => setReps(e.target.value)} />
                </label>
            </div>

            <label className="calc-rm__check">
                <input type="checkbox" checked={discos} onChange={(e) => setDiscos(e.target.checked)} />
                <span>Redondear los pesos de la tabla a discos de 2,5 kg (para cargar la barra)</span>
            </label>

            <div className="calc-rm__resultado" aria-live="polite">
                {r.valido ? (
                    <>
                        <p className="calc-rm__etiqueta">Tu 1RM estimado</p>
                        <p className="calc-rm__cifra">{exacto(r.e)}</p>
                        <p className="calc-rm__detalle">
                            Fórmula de Epley (la que usa la app de TotalGains). Con la de Brzycki: <strong>{exacto(r.b)}</strong>.
                        </p>
                        {r.aviso && (
                            <p className="calc-rm__aviso">
                                Con más de 10 repeticiones la estimación pierde precisión: para afinar, usa una serie de 3 a 8 repeticiones.
                            </p>
                        )}
                    </>
                ) : (
                    <p className="calc-rm__detalle">Escribe un peso entre 1 y 500 kg.</p>
                )}
            </div>

            {r.valido && (
                <div className="calc-rm__tabla">
                    <table>
                        <caption>Tus pesos por porcentaje del 1RM</caption>
                        <thead>
                            <tr>
                                <th scope="col">% del 1RM</th>
                                <th scope="col">Peso</th>
                                <th scope="col">Reps aprox.</th>
                                <th scope="col">Zona</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NSCA.map((f) => (
                                <tr key={f.pct} className={`calc-rm__fila--${zona(f.pct)}`}>
                                    <td>{f.pct} %</td>
                                    <td>{kg((r.e * f.pct) / 100, paso)}</td>
                                    <td>{f.reps}</td>
                                    <td>{zona(f.pct)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <p className="calc-rm__nota">
                Cómo se calcula: Epley, 1RM = peso × (1 + repeticiones ÷ 30); Brzycki, 1RM = peso × 36 ÷ (37 − repeticiones).
                Los pesos de la tabla se redondean a 0,5 kg (o a 2,5 kg si marcas la casilla).
                Repeticiones por porcentaje según la tabla de la NSCA. Es una estimación orientativa: cada persona y cada
                ejercicio varían.
            </p>
        </section>
    );
}
