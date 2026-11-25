"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/components/Analytics";
import { Escena, BarraDeFrente } from "@/components/calculadora-rm/Escena";
import { EJERCICIOS, cargar, pesoCargable } from "@/components/calculadora-rm/geometria";
import "./CalculadoraRM.css";

/* Calculadora de RM por ejercicio, de /calculadora-rm/ y del artículo «Cómo calcular tu 1RM» (marcador __calculadora_rm__).
   German, 25-nov-2026: «una calculadora mejor que lo genérico… por ejercicio, con una animación algo pro de verdad»,
   «algún rollo para compartir… y después llamada a la acción para entrar en mi app».
   - 1RM con EPLEY, la misma fórmula que la app de TotalGains (entreno.jsx, calculate1RM): peso × (1 + reps / 30).
     Brzycki (peso × 36 / (37 − reps)) al lado como segunda referencia.
   - Repeticiones por porcentaje: tabla de la NSCA (Haff y Triplett, Essentials of Strength Training and Conditioning,
     4.ª ed., 2016). Zonas: fuerza ≥ 85 %, hipertrofia 67-85 %, resistencia ≤ 67 %.
   - Compartir: enlace con ?ej=&peso=&reps= (quien lo abre ve el «reto») e imagen de historia hecha en el navegador.
   - Entrar en la app: «Crear mi cuenta gratis» (/app/register; la app deja elegir «Entreno por mi cuenta»).
   - Sin servidor y sin guardar nada. */

const NSCA = [
    { pct: 100, reps: "1" }, { pct: 95, reps: "2" }, { pct: 93, reps: "3" }, { pct: 90, reps: "4" }, { pct: 87, reps: "5" },
    { pct: 85, reps: "6" }, { pct: 83, reps: "7" }, { pct: 80, reps: "8" }, { pct: 77, reps: "9" }, { pct: 75, reps: "10" },
    { pct: 70, reps: "11" }, { pct: 67, reps: "12" }, { pct: 65, reps: "15" }, { pct: 60, reps: "calentar" }, { pct: 50, reps: "calentar" },
];
const PCT_RAPIDOS = [100, 95, 90, 85, 80, 75, 70, 65, 60];
const PCT_IMAGEN = [90, 85, 80, 75];
const URL_CALC = "https://totalgains.es/calculadora-rm/";

export function epley(peso, reps) {
    if (!(peso > 0) || !(reps >= 1)) return 0;
    return reps === 1 ? peso : peso * (1 + reps / 30);
}

export function brzycki(peso, reps) {
    if (!(peso > 0) || !(reps >= 1) || reps >= 37) return 0;
    return reps === 1 ? peso : (peso * 36) / (37 - reps);
}

const fmt = (x, dec = 1) => x.toLocaleString("es-ES", { minimumFractionDigits: dec, maximumFractionDigits: dec });
const fmtKg = (x) => fmt(x, Number.isInteger(Math.round(x * 100) / 100) ? 0 : 1);
const fmtDisco = (kg) => kg.toLocaleString("es-ES", { maximumFractionDigits: 2 });
const zona = (pct) => (pct >= 85 ? "fuerza" : pct >= 67 ? "hipertrofia" : pct >= 65 ? "resistencia" : "suave");
const marcar = (accion, extra = {}) => trackEvent("calculadora_rm", { accion, ...extra });

/* Número que sube o baja hasta su valor (0,5 s). */
function useContador(valor, quieto) {
    const [v, setV] = useState(valor);
    const desde = useRef(valor);
    useEffect(() => {
        if (quieto) return undefined;
        const a = desde.current;
        const ini = performance.now();
        let id;
        const paso = (ahora) => {
            const k = Math.min(1, (ahora - ini) / 500);
            const x = a + (valor - a) * (1 - (1 - k) ** 3);
            desde.current = x;
            setV(x);
            if (k < 1) id = requestAnimationFrame(paso);
        };
        id = requestAnimationFrame(paso);
        return () => cancelAnimationFrame(id);
    }, [valor, quieto]);
    return quieto ? valor : v;
}

async function copiarTexto(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        return true;
    } catch {
        const area = document.createElement("textarea");
        area.value = texto;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        let ok = false;
        try {
            ok = document.execCommand("copy");
        } catch {
            ok = false;
        }
        area.remove();
        return ok;
    }
}

export default function CalculadoraRM({ titulo = "Calcula tu RM por ejercicio" }) {
    const [ej, setEj] = useState("sentadilla");
    const [peso, setPeso] = useState(80);
    const [reps, setReps] = useState(5);
    const [barra, setBarra] = useState(20);
    const [pct, setPct] = useState(85);
    const [quieto, setQuieto] = useState(false);
    const [reto, setReto] = useState(null);
    const [aviso, setAviso] = useState("");
    const imagen = useRef(null);
    const temporizador = useRef(null);

    // «Reducir movimiento» del sistema: sin animaciones.
    useEffect(() => {
        const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
        if (!m) return undefined;
        const f = () => setQuieto(m.matches);
        f();
        m.addEventListener?.("change", f);
        return () => m.removeEventListener?.("change", f);
    }, []);

    // Enlace compartido (?ej=&peso=&reps=): se cargan sus números y se enseña como reto.
    useEffect(() => {
        const q = new URLSearchParams(window.location.search);
        const qEj = q.get("ej");
        const qPeso = Number(String(q.get("peso") || "").replace(",", "."));
        const qReps = Math.round(Number(q.get("reps")));
        if (!EJERCICIOS[qEj] || !(qPeso > 0 && qPeso <= 500) || !(qReps >= 1 && qReps <= 12)) return;
        setEj(qEj);
        setPeso(qPeso);
        setReps(qReps);
        setReto({ ej: qEj, rm: epley(qPeso, qReps) });
        marcar("abrir_reto", { ejercicio: qEj });
    }, []);

    useEffect(() => () => clearTimeout(temporizador.current), []);

    const r = useMemo(() => {
        const p = Number(String(peso).replace(",", "."));
        const n = Math.round(Number(reps));
        const fuera = !(p > 0 && p <= 500);
        const e = fuera ? 0 : epley(p, n);
        return { p, n, e, b: fuera ? 0 : brzycki(p, n), valido: e > 0, aviso: n > 10 };
    }, [peso, reps]);

    const objetivo = (r.e * pct) / 100;
    const carga = useMemo(() => cargar(objetivo, barra), [objetivo, barra]);
    const rmVisto = useContador(r.e, quieto);
    const kgVisto = useContador(r.valido ? pesoCargable(objetivo, barra) : 0, quieto);
    const repsPct = NSCA.find((f) => f.pct === pct)?.reps;
    const nombre = EJERCICIOS[ej].nombre;
    const porLado = carga.discos.length ? carga.discos.map((d) => fmtDisco(d.kg)).join(" + ") : "ninguno, solo la barra";

    const enlace = r.valido ? `${URL_CALC}?ej=${ej}&peso=${r.p}&reps=${r.n}` : URL_CALC;
    const texto = r.valido
        ? `Mi 1RM estimado en ${nombre.toLowerCase()}: ${fmt(r.e)} kg (${fmtKg(r.p)} kg × ${r.n}). ¿Cuánto levantas tú? Calcula el tuyo:`
        : "Calcula tu 1RM por ejercicio y qué discos poner en la barra:";

    // La imagen para compartir se prepara antes de pulsar: el móvil solo deja compartir justo tras el toque.
    useEffect(() => {
        if (!r.valido) {
            imagen.current = null;
            return undefined;
        }
        let vivo = true;
        const id = setTimeout(async () => {
            try {
                const { crearImagen } = await import("@/components/calculadora-rm/imagen");
                const blob = await crearImagen({
                    ej,
                    rm: fmt(r.e),
                    peso: fmtKg(r.p),
                    reps: r.n,
                    discos: cargar(r.e * 0.85, barra).discos,
                    filas: PCT_IMAGEN.map((v) => ({ pct: v, kg: fmtKg(pesoCargable((r.e * v) / 100, barra)), reps: NSCA.find((f) => f.pct === v).reps })),
                    fuente: getComputedStyle(document.body).fontFamily,
                });
                if (vivo) imagen.current = new File([blob], `mi-1rm-${ej}-totalgains.png`, { type: "image/png" });
            } catch {
                if (vivo) imagen.current = null;
            }
        }, 600);
        return () => {
            vivo = false;
            clearTimeout(id);
        };
    }, [ej, r.e, r.p, r.n, r.valido, barra]);

    const avisar = (msg) => {
        setAviso(msg);
        clearTimeout(temporizador.current);
        temporizador.current = setTimeout(() => setAviso(""), 2600);
    };

    const compartir = async () => {
        const datos = { title: "Mi 1RM", text: `${texto} ${enlace}` };
        const file = imagen.current;
        if (file && navigator.canShare?.({ files: [file] })) datos.files = [file];
        if (navigator.share) {
            try {
                await navigator.share(datos);
                marcar("compartir", { metodo: datos.files ? "imagen" : "texto", ejercicio: ej });
                return;
            } catch (err) {
                if (err?.name === "AbortError") return;
            }
        }
        const ok = await copiarTexto(`${texto} ${enlace}`);
        marcar("compartir", { metodo: "copiar", ejercicio: ej });
        avisar(ok ? "Copiado: pégalo en WhatsApp, Instagram o donde quieras." : "Copia el enlace de la barra de direcciones.");
    };

    const whatsapp = () => {
        marcar("compartir", { metodo: "whatsapp", ejercicio: ej });
        window.open(`https://wa.me/?text=${encodeURIComponent(`${texto} ${enlace}`)}`, "_blank", "noopener,noreferrer");
    };

    const copiarEnlace = async () => {
        const ok = await copiarTexto(enlace);
        marcar("compartir", { metodo: "enlace", ejercicio: ej });
        avisar(ok ? "Enlace copiado." : "No se ha podido copiar: copia el de la barra de direcciones.");
    };

    const guardarImagen = () => {
        const file = imagen.current;
        if (!file) {
            avisar("La imagen se está preparando: vuelve a pulsar en un segundo.");
            return;
        }
        const url = URL.createObjectURL(file);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
        marcar("compartir", { metodo: "descargar", ejercicio: ej });
        avisar("Imagen guardada: súbela a tu historia.");
    };

    const diferenciaReto = reto && r.valido && reto.ej === ej ? r.e - reto.rm : null;

    return (
        <section className="calc-rm" aria-label="Calculadora de RM por ejercicio">
            <h2 className="calc-rm__titulo">{titulo}</h2>
            <p className="calc-rm__intro">
                Elige el ejercicio, pon el peso y las repeticiones que hiciste con buena técnica: te sale tu 1RM estimado, el peso
                para cada porcentaje y qué discos poner en la barra.
            </p>

            {reto && (
                <p className="calc-rm__reto">
                    <strong>Te han retado:</strong> {fmt(reto.rm)} kg de 1RM en {EJERCICIOS[reto.ej].nombre.toLowerCase()}. Cambia el
                    peso y las repeticiones por las tuyas y compáralo.
                </p>
            )}

            <div className="calc-rm__ejercicios" role="group" aria-label="Ejercicio">
                {Object.entries(EJERCICIOS).map(([id, e]) => (
                    <button
                        key={id}
                        type="button"
                        aria-pressed={ej === id}
                        className={`calc-rm__chip ${ej === id ? "is-on" : ""}`}
                        onClick={() => {
                            setEj(id);
                            marcar("ejercicio", { ejercicio: id });
                        }}
                    >
                        {e.nombre}
                    </button>
                ))}
            </div>

            <div className="calc-rm__campos">
                <label className="calc-rm__campo">
                    <span>Peso levantado (kg)</span>
                    <input type="number" inputMode="decimal" min="1" max="500" step="0.5" value={peso} onChange={(e) => setPeso(e.target.value)} />
                </label>
                <label className="calc-rm__campo">
                    <span>
                        Repeticiones hechas: <strong>{r.n || 0}</strong>
                    </span>
                    <input type="range" min="1" max="12" step="1" value={reps} onChange={(e) => setReps(e.target.value)} />
                </label>
                <div className="calc-rm__campo">
                    <span id="calc-rm-barra">Barra</span>
                    <div className="calc-rm__toggle" role="group" aria-labelledby="calc-rm-barra">
                        {[20, 15].map((v) => (
                            <button key={v} type="button" className={barra === v ? "is-on" : ""} onClick={() => setBarra(v)} aria-pressed={barra === v}>
                                {v} kg
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <Escena
                ej={ej}
                pct={pct}
                discos={r.valido ? carga.discos : []}
                quieto={quieto}
                etiqueta={`${nombre} con ${r.valido ? fmtKg(pesoCargable(objetivo, barra)) : "—"} kg, el ${pct} % de tu 1RM`}
            >
                <div className="calc-rm__marcador calc-rm__marcador--rm" aria-live="polite">
                    <span className="calc-rm__marcador-etq">Tu 1RM en {nombre.toLowerCase()}</span>
                    <span className="calc-rm__marcador-rm">{r.valido ? `${fmt(rmVisto)} kg` : "—"}</span>
                </div>
                <div className="calc-rm__marcador calc-rm__marcador--pct">
                    <span className="calc-rm__marcador-etq">{pct} % del 1RM</span>
                    <span className="calc-rm__marcador-kg">{r.valido ? `${fmtKg(kgVisto)} kg` : "—"}</span>
                    <span className="calc-rm__marcador-etq">{repsPct === "calentar" ? "para calentar" : `~${repsPct} reps`}</span>
                </div>
            </Escena>
            <p className="calc-rm__pie-escena">
                La barra sube más despacio cuanto más te acercas a tu máximo, como pasa de verdad. La línea punteada es su recorrido.
            </p>

            <div className="calc-rm__pcts" role="group" aria-label="Porcentaje del 1RM">
                {PCT_RAPIDOS.map((v) => (
                    <button
                        key={v}
                        type="button"
                        aria-pressed={pct === v}
                        className={`calc-rm__pctbtn ${pct === v ? "is-on" : ""}`}
                        onClick={() => {
                            setPct(v);
                            marcar("porcentaje", { pct: v });
                        }}
                    >
                        {v} %
                    </button>
                ))}
            </div>

            <BarraDeFrente discos={r.valido ? carga.discos : []} barra={barra} />
            <p className="calc-rm__porlado">
                {r.valido ? (
                    objetivo < barra ? (
                        <>El {pct} % ({fmtKg(pesoCargable(objetivo, barra))} kg) pesa menos que la barra de {barra} kg: usa mancuernas o una barra más ligera.</>
                    ) : (
                        <>
                            Discos por lado: <strong>{porLado}</strong> · barra de {barra} kg
                            {Math.abs(carga.real - objetivo) >= 0.05 ? ` (lo más cerca de ${fmt(objetivo)} kg que se puede cargar)` : ""}
                        </>
                    )
                ) : (
                    "Escribe un peso entre 1 y 500 kg."
                )}
            </p>

            {r.valido && (
                <div className="calc-rm__resultado" aria-live="polite">
                    <p className="calc-rm__etiqueta">Tu 1RM estimado en {nombre.toLowerCase()}</p>
                    <p className="calc-rm__cifra">{fmt(r.e)} kg</p>
                    <p className="calc-rm__detalle">
                        Fórmula de Epley (la que usa la app de TotalGains). Con la de Brzycki: <strong>{fmt(r.b)} kg</strong>.
                    </p>
                    {diferenciaReto !== null && Math.abs(diferenciaReto) >= 0.05 && (
                        <p className={`calc-rm__vs ${diferenciaReto > 0 ? "is-gana" : ""}`}>
                            {diferenciaReto > 0
                                ? `Superas el reto por ${fmt(diferenciaReto)} kg.`
                                : `Te faltan ${fmt(-diferenciaReto)} kg para el reto.`}
                        </p>
                    )}
                    <p className="calc-rm__nota-ej">{EJERCICIOS[ej].nota}</p>
                    {r.aviso && <p className="calc-rm__aviso">Con más de 10 repeticiones la estimación pierde precisión: para afinar, usa una serie de 3 a 8.</p>}
                </div>
            )}

            {r.valido && (
                <div className="calc-rm__compartir">
                    <p className="calc-rm__compartir-tit">Compártelo o reta a tu compañero de box</p>
                    <div className="calc-rm__compartir-btns">
                        <button type="button" className="calc-rm__btn calc-rm__btn--principal" onClick={compartir}>
                            Compartir mi RM
                        </button>
                        <button type="button" className="calc-rm__btn" onClick={whatsapp}>
                            WhatsApp
                        </button>
                        <button type="button" className="calc-rm__btn" onClick={guardarImagen}>
                            Guardar imagen para historias
                        </button>
                        <button type="button" className="calc-rm__btn" onClick={copiarEnlace}>
                            Copiar enlace
                        </button>
                    </div>
                    <p className="calc-rm__toast" role="status" aria-live="polite">
                        {aviso}
                    </p>
                </div>
            )}

            {r.valido && (
                <div className="calc-rm__tabla">
                    <table>
                        <caption>Tus pesos por porcentaje del 1RM (toca un porcentaje para cargar la barra)</caption>
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
                                <tr key={f.pct} className={`calc-rm__fila--${zona(f.pct)} ${pct === f.pct ? "is-on" : ""}`}>
                                    <td>
                                        <button type="button" className="calc-rm__fila-btn" onClick={() => setPct(f.pct)} aria-pressed={pct === f.pct}>
                                            {f.pct} %
                                        </button>
                                    </td>
                                    <td>{fmtKg(pesoCargable((r.e * f.pct) / 100, barra))} kg</td>
                                    <td>{f.reps}</td>
                                    <td>{zona(f.pct)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="calc-rm__cta">
                <p className="calc-rm__cta-tit">Que tu RM se calcule solo en cada entreno</p>
                <p className="calc-rm__cta-txt">
                    En la app de TotalGains apuntas tus series y te calcula el RM estimado de cada ejercicio con esta misma fórmula. En
                    «Evolución» ves cómo sube semana a semana. Entrena por tu cuenta o con tu entrenador, tu box o tu gimnasio.
                </p>
                <div className="calc-rm__cta-btns">
                    <a
                        href="https://totalgains.es/app/register"
                        className="btn btn-primary"
                        onClick={() => trackEvent("cta_click", { cta_text: "Crear mi cuenta gratis", cta_location: "calculadora_rm" })}
                    >
                        Crear mi cuenta gratis
                    </a>
                    <Link
                        href="/para-gimnasios/"
                        className="btn btn-outline"
                        prefetch={false}
                        onClick={() => trackEvent("cta_click", { cta_text: "Para tu box o gimnasio", cta_location: "calculadora_rm" })}
                    >
                        Para tu box o gimnasio
                    </Link>
                </div>
                <p className="calc-rm__cta-mini">Crear la cuenta es gratis y sin tarjeta. ¿Ya la tienes? <a href="https://totalgains.es/app/login">Entra aquí</a>.</p>
            </div>

            <p className="calc-rm__nota">
                Cómo se calcula: Epley, 1RM = peso × (1 + repeticiones ÷ 30); Brzycki, 1RM = peso × 36 ÷ (37 − repeticiones). Los
                pesos se redondean a lo que se puede cargar con discos de 25, 20, 15, 10, 5, 2,5 y 1,25 kg (por debajo de la barra, a
                0,5 kg). Repeticiones por porcentaje según la tabla de la NSCA. Es una estimación orientativa: cada persona y cada
                ejercicio varían.
            </p>
        </section>
    );
}
