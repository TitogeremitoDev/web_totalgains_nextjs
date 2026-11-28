"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Activity, Apple, ArrowLeft, Building2, Check, Dumbbell } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import DemoVideo from "@/components/DemoVideo";
import { EN_TODOS_LOS_PLANES } from "@/data/planesCoach";
import { ESCENAS, ETIQUETAS, ORIGENES, PANTALLAS, PERFILES, avisoDe, dolores, esProfesional, pasos, planDe, tamano, vistaDe } from "@/data/onboarding";
import "@/app/onboarding/Onboarding.css";

/* «Empieza gratis»: un recorrido que se adapta a quien entra (datos y textos en src/data/onboarding.js).
   Gimnasio → plan por socios + «Pide tu demo» (/demo/gimnasios/) · entrenador o nutricionista → plan por clientes
   + «Crear mi cuenta gratis» (/app/register) · deportista → la app para entrenar por su cuenta.
   ⚠️ «Crear mi cuenta» va a /app/register, no a /app/login: quien llega aquí aún no tiene cuenta (necesita la web-app
   con el guard que respeta /register, app 4332a7d2, PLAN_entrada-coach.md R3). */

const ICONOS = { gimnasio: Building2, entrenador: Dumbbell, nutricionista: Apple, atleta: Activity };
const APP_REGISTER = "https://totalgains.es/app/register";

export default function OnboardingContent() {
    const [paso, setPaso] = useState(0);
    const [r, setR] = useState({ perfil: null, tamano: null, dolor: null, origen: null });
    const [elegido, setElegido] = useState(null);
    const [encima, setEncima] = useState(null);
    const [aviso, setAviso] = useState(null);
    const [avisoPc, setAvisoPc] = useState(null);
    const [toque, setToque] = useState(null);
    const [vuelta, setVuelta] = useState(0);
    const temporizador = useRef(null);
    const temporizadorPc = useRef(null);
    const escenaTimers = useRef([]);
    const nAviso = useRef(0);
    const quieto = useReducedMotion();
    useEffect(
        () => () => {
            clearTimeout(temporizador.current);
            clearTimeout(temporizadorPc.current);
            escenaTimers.current.forEach(clearTimeout);
        },
        [],
    );

    const lista = pasos(r.perfil);
    const actual = lista[paso];
    const plan = useMemo(() => planDe(r.perfil, r.tamano), [r.perfil, r.tamano]);
    const dolor = r.perfil && r.perfil !== "atleta" ? dolores(r.perfil).find((d) => d.id === r.dolor) : null;
    const base = vistaDe(r, encima);

    // «Tu marca»: mientras está encima o elegida, la app va cambiando de gimnasio.
    const perfilVisto = encima?.campo === "perfil" ? encima.valor : r.perfil;
    const dolorVisto = encima?.campo === "dolor" ? encima.valor : r.dolor;
    const marcaActiva = perfilVisto === "gimnasio" && dolorVisto === "marca" && !quieto;
    useEffect(() => {
        if (!marcaActiva) return undefined;
        const id = setInterval(() => setVuelta((v) => v + 1), 1500);
        return () => clearInterval(id);
    }, [marcaActiva]);
    const carrusel = ESCENAS.marca.carrusel;
    const vista = marcaActiva ? { ...base, izq: PANTALLAS[carrusel[vuelta % carrusel.length]] } : base;
    const etiquetas = perfilVisto ? ETIQUETAS[perfilVisto] : null;

    // La notificación que salta en el móvil de la izquierda al responder.
    const avisar = (a) => {
        if (!a?.texto) return;
        nAviso.current += 1;
        setAviso({ ...a, n: nAviso.current });
        clearTimeout(temporizador.current);
        temporizador.current = setTimeout(() => setAviso(null), 2800);
    };

    // El aviso del portátil (el panel del centro o del entrenador).
    const avisarPc = (a) => {
        nAviso.current += 1;
        setAvisoPc({ ...a, n: nAviso.current });
        clearTimeout(temporizadorPc.current);
        temporizadorPc.current = setTimeout(() => setAvisoPc(null), a.carga ? 1500 : 3000);
    };

    // La escena de cada respuesta: el dedo pulsa el botón de la captura y saltan los avisos, uno detrás de otro.
    const reproducir = (id) => {
        const escena = ESCENAS[id];
        if (!escena) return;
        escenaTimers.current.forEach(clearTimeout);
        escenaTimers.current = [];
        if (escena.toque && !quieto) {
            nAviso.current += 1;
            setToque({ ...escena.toque, n: nAviso.current });
            escenaTimers.current.push(setTimeout(() => setToque(null), 1100));
        }
        let t = escena.toque ? 650 : 250;
        escena.momentos.forEach((m) => {
            escenaTimers.current.push(setTimeout(() => (m.en === "movil" ? avisar(m) : avisarPc(m)), t));
            t += m.carga ? 1500 : 1200;
        });
    };

    const responder = (campo, valor) => {
        setElegido(valor);
        const nuevo = { ...r, [campo]: valor };
        if (campo === "perfil") Object.assign(nuevo, { tamano: null, dolor: null });
        setR(nuevo);
        setEncima(null);
        if (campo === "dolor") reproducir(valor);
        else avisar(avisoDe(campo, valor, nuevo));
        trackEvent("onboarding_respuesta", { paso: campo, valor, perfil: nuevo.perfil });
        const siguiente = paso + 1;
        const ruta = pasos(nuevo.perfil);
        setTimeout(() => {
            setElegido(null);
            setPaso(siguiente);
            if (ruta[siguiente] === "final") {
                trackEvent("onboarding_complete", { perfil: nuevo.perfil, tamano: nuevo.tamano, dolor: nuevo.dolor, origen: nuevo.origen || "sin_respuesta" });
            }
        }, quieto ? 0 : 220);
    };

    const saltarOrigen = () => {
        trackEvent("onboarding_respuesta", { paso: "origen", valor: "sin_respuesta", perfil: r.perfil });
        trackEvent("onboarding_complete", { perfil: r.perfil, tamano: r.tamano, dolor: r.dolor, origen: "sin_respuesta" });
        setPaso(paso + 1);
    };

    const atras = () => setPaso((p) => Math.max(0, p - 1));
    const empezarDeNuevo = () => {
        setR({ perfil: null, tamano: null, dolor: null, origen: null });
        setPaso(0);
    };

    const anim = quieto
        ? {}
        : { initial: { opacity: 0, x: 28 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -28 }, transition: { duration: 0.22 } };

    // Botón de respuesta (función y no componente: así no se vuelve a montar en cada pintado).
    const opcion = (campo, valor, contenido, className = "") => (
        <button
            key={valor}
            type="button"
            className={`ob-opcion ${className} ${elegido === valor || r[campo] === valor ? "is-on" : ""}`}
            onClick={() => responder(campo, valor)}
            onMouseEnter={() => setEncima({ campo, valor })}
            onMouseLeave={() => setEncima(null)}
            onFocus={() => setEncima({ campo, valor })}
            onBlur={() => setEncima(null)}
        >
            {contenido}
            <span className="ob-opcion-check" aria-hidden="true">
                <Check size={16} />
            </span>
        </button>
    );

    return (
        <main className="onboarding-page">
            <div className="ob-escena">
            <Marco lado="izq" pantalla={vista.izq} etiqueta={vista.etqIzq} aviso={aviso} quieto={quieto} etiquetas={etiquetas} activa={dolorVisto} toque={toque} />
            <div className={`glass onboarding-card ${actual === "final" ? "onboarding-card--final" : ""}`}>
                <div className="onboarding-content">
                    <h1 className="sr-only">Empieza con TotalGains: gimnasios, entrenadores, nutricionistas y deportistas</h1>

                    <div className={`ob-arriba ${paso > 0 && actual !== "final" ? "" : "ob-arriba--solo"}`}>
                        {paso > 0 && actual !== "final" && (
                            <button type="button" className="ob-atras" onClick={atras}>
                                <ArrowLeft size={16} aria-hidden="true" /> Atrás
                            </button>
                        )}
                        <div className="progress-bar" role="progressbar" aria-valuemin={1} aria-valuemax={lista.length} aria-valuenow={paso + 1}>
                            {lista.map((p, i) => (
                                <div key={`${p}-${i}`} className={`progress-segment ${i <= paso ? "active" : ""}`} />
                            ))}
                        </div>
                    </div>

                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div key={`${actual}-${r.perfil}`} className="step-container" {...anim}>
                            {actual === "perfil" && (
                                <>
                                    <Cabecera titulo="¿Qué te trae a TotalGains?" sub="Elige lo que mejor te describe y te enseñamos lo que hay para ti." pantalla={vista.izq} aviso={aviso} />
                                    <div className="ob-perfiles">
                                        {PERFILES.map((p) => {
                                            const Icono = ICONOS[p.icono];
                                            return opcion(
                                                "perfil",
                                                p.id,
                                                <>
                                                    <span className={`ob-icono ob-icono--${p.id}`} aria-hidden="true">
                                                        <Icono size={24} />
                                                    </span>
                                                    <span className="ob-perfil-textos">
                                                        <span className="ob-perfil-t">{p.titulo}</span>
                                                        <span className="ob-perfil-d">{p.texto}</span>
                                                    </span>
                                                </>,
                                                "ob-perfil",
                                            );
                                        })}
                                    </div>
                                </>
                            )}

                            {actual === "tamano" && (
                                <>
                                    <Cabecera titulo={tamano(r.perfil).pregunta} sub={tamano(r.perfil).ayuda} pantalla={vista.izq} aviso={aviso} />
                                    <div className="options-grid">
                                        {tamano(r.perfil).opciones.map((o) => opcion("tamano", o.id, o.texto))}
                                    </div>
                                </>
                            )}

                            {actual === "dolor" && (
                                <>
                                    <Cabecera titulo="¿Qué te quita más tiempo ahora?" sub="Elige una y te enseñamos cómo se resuelve con TotalGains." pantalla={vista.izq} aviso={aviso} />
                                    <div className="options-grid">
                                        {dolores(r.perfil).map((d) => opcion("dolor", d.id, d.texto))}
                                    </div>
                                </>
                            )}

                            {actual === "origen" && (
                                <>
                                    <Cabecera titulo="¿Cómo nos has conocido?" sub="Nos ayuda a saber dónde contar lo que hacemos. Es lo último." pantalla={vista.izq} aviso={aviso} />
                                    <div className="options-grid">
                                        {ORIGENES.map((o) => opcion("origen", o.id, o.texto))}
                                    </div>
                                    <button type="button" className="ob-saltar" onClick={saltarOrigen}>
                                        Prefiero no decirlo
                                    </button>
                                </>
                            )}

                            {actual === "final" && r.perfil === "gimnasio" && (
                                <Final
                                    titulo="Esto es TotalGains para tu centro"
                                    plan={plan}
                                    dolor={dolor}
                                    incluido={["Coaches ilimitados", "App con la marca de tu centro", "Clases con reserva"]}
                                    resumen={resumenDe(r)}
                                    alCambiar={empezarDeNuevo}
                                >
                                    <div className="ob-botones">
                                        <Link
                                            href="/demo/gimnasios/"
                                            className="btn btn-primary btn-lg"
                                            prefetch={false}
                                            onClick={() => trackEvent("cta_click", { cta_text: "Pide tu demo", cta_location: "onboarding_gimnasio" })}
                                        >
                                            Pide tu demo
                                        </Link>
                                        <Link href="/para-gimnasios/" className="btn btn-outline btn-lg" prefetch={false}>
                                            Ver TotalGains para gimnasios
                                        </Link>
                                    </div>
                                    <p className="microcopy-secure mt-4">Te contestamos en menos de 24 horas, sin compromiso.</p>
                                </Final>
                            )}

                            {actual === "final" && esProfesional(r.perfil) && (
                                <Final
                                    titulo="Tu TotalGains, listo para empezar"
                                    plan={plan}
                                    dolor={dolor}
                                    incluido={EN_TODOS_LOS_PLANES}
                                    nota="Empiezas con 14 días para probarlo todo. Si al acabar llevas 5 atletas o menos, sigues gratis para siempre."
                                    resumen={resumenDe(r)}
                                    alCambiar={empezarDeNuevo}
                                >
                                    <div className="ob-video ob-video--wide">
                                        <DemoVideo
                                            src="/video/coach-bienvenida-escritorio.mp4"
                                            poster="/video/coach-bienvenida-escritorio.jpg"
                                            titulo="Bienvenida a TotalGains para entrenadores"
                                            ubicacion="onboarding"
                                        />
                                    </div>
                                    <div className="ob-video ob-video--tall">
                                        <DemoVideo
                                            src="/video/coach-bienvenida-movil.mp4"
                                            poster="/video/coach-bienvenida-movil.jpg"
                                            width={720}
                                            height={1280}
                                            titulo="Bienvenida a TotalGains para entrenadores"
                                            ubicacion="onboarding"
                                        />
                                    </div>
                                    <a
                                        href={APP_REGISTER}
                                        className="btn btn-primary btn-lg w-full"
                                        onClick={() => trackEvent("signup_redirect", { destination: "app_register", perfil: r.perfil })}
                                    >
                                        Crear mi cuenta gratis
                                    </a>
                                    <p className="microcopy-secure mt-4">Sin tarjeta de crédito. Cancela cuando quieras.</p>
                                </Final>
                            )}

                            {actual === "final" && r.perfil === "atleta" && (
                                <Final titulo="Entrena con la app de TotalGains" resumen={resumenDe(r)} alCambiar={empezarDeNuevo}>
                                    <ul className="ob-lista">
                                        <li>Apuntas tus series y la app calcula tu RM estimado de cada ejercicio.</li>
                                        <li>En «Evolución» ves cómo progresas semana a semana.</li>
                                        <li>Si tienes entrenador o gimnasio, te vinculas con su código.</li>
                                    </ul>
                                    <div className="ob-botones">
                                        <a
                                            href={APP_REGISTER}
                                            className="btn btn-primary btn-lg"
                                            onClick={() => trackEvent("signup_redirect", { destination: "app_register", perfil: "atleta" })}
                                        >
                                            Crear mi cuenta gratis
                                        </a>
                                        <Link href="/calculadora-rm/" className="btn btn-outline btn-lg" prefetch={false}>
                                            Calcula tu RM ahora
                                        </Link>
                                    </div>
                                    <p className="microcopy-secure mt-4">Al crear la cuenta, elige «Entreno por mi cuenta». Sin tarjeta.</p>
                                </Final>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <Marco lado="der" pantalla={vista.der} etiqueta={vista.etqDer} quieto={quieto} avisoPc={avisoPc} plan={plan} />
            </div>
        </main>
    );
}

function resumenDe(r) {
    const perfil = PERFILES.find((p) => p.id === r.perfil)?.titulo;
    const t = r.perfil && r.perfil !== "atleta" ? tamano(r.perfil).opciones.find((o) => o.id === r.tamano)?.texto : null;
    const d = r.perfil && r.perfil !== "atleta" ? dolores(r.perfil).find((x) => x.id === r.dolor)?.texto : null;
    return [perfil, t, d].filter(Boolean);
}

function Final({ titulo, plan, dolor, incluido, nota, resumen, alCambiar, children }) {
    return (
        <div className="ob-final">
            <span className="ob-final-etiqueta">
                <Check size={14} aria-hidden="true" /> Hecho a tu medida
            </span>
            <h2 className="step-title">{titulo}</h2>
            <div className="ob-resumen">
                {resumen.map((t) => (
                    <span key={t} className="ob-chip">
                        {t}
                    </span>
                ))}
                <button type="button" className="ob-cambiar" onClick={alCambiar}>
                    Cambiar
                </button>
            </div>

            {plan && (
                <div className="ob-plan">
                    <div>
                        <p className="ob-plan-etq">Tu plan</p>
                        <p className="ob-plan-nombre">{plan.nombre}</p>
                        <p className="ob-plan-detalle">{plan.detalle}</p>
                    </div>
                    <div className="ob-plan-precio">
                        <span>{plan.precio}</span>
                        <small>{plan.nota}</small>
                    </div>
                </div>
            )}
            {nota && <p className="ob-nota">{nota}</p>}
            {incluido && (
                <ul className="ob-incluido">
                    {incluido.map((t) => (
                        <li key={t}>
                            <Check size={15} aria-hidden="true" /> {t}
                        </li>
                    ))}
                </ul>
            )}

            {dolor && (
                <div className={`ob-dolor ${dolor.movil ? "ob-dolor--movil" : ""}`}>
                    <div className="ob-dolor-img">
                        <Image src={dolor.img} alt={dolor.titulo} width={dolor.ancho} height={dolor.alto} sizes="(max-width: 600px) 90vw, 320px" />
                    </div>
                    <div className="ob-dolor-textos">
                        <p className="ob-dolor-etq">Lo que más tiempo te quita, resuelto</p>
                        <p className="ob-dolor-t">{dolor.titulo}</p>
                        <p className="ob-dolor-d">{dolor.detalle}</p>
                    </div>
                </div>
            )}

            {children}
        </div>
    );
}

/* Cabecera de cada pregunta. En el móvil lleva al lado un mini teléfono con la app (en el ordenador están los marcos). */
function Cabecera({ titulo, sub, pantalla, aviso }) {
    return (
        <div className="ob-cab">
            <div>
                <h2 className="step-title">{titulo}</h2>
                <p className="step-subtitle">{sub}</p>
            </div>
            <div className="ob-mini" aria-hidden="true">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div key={pantalla.src} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                        <Image src={pantalla.src} alt="" width={pantalla.ancho} height={pantalla.alto} sizes="96px" />
                    </motion.div>
                </AnimatePresence>
                {aviso && <span key={aviso.n} className="ob-mini-aviso" />}
            </div>
        </div>
    );
}

/* Marco de un lado: un teléfono (captura vertical) o un portátil (horizontal), con su etiqueta debajo.
   La captura cambia con un fundido; el de la izquierda enseña la notificación al responder. */
function Marco({ lado, pantalla, etiqueta, aviso, avisoPc, quieto, etiquetas, activa, toque, plan }) {
    const movil = pantalla.tipo === "movil";
    const escala = movil ? 222 / pantalla.ancho : 0;
    return (
        <aside className={`ob-marco ob-marco--${lado} ${movil ? "ob-marco--tel" : "ob-marco--pc"} ${quieto ? "" : "ob-flota"}`} aria-hidden="true">
            {etiquetas && (
                <div className="ob-etiquetas">
                    <AnimatePresence>
                        {etiquetas.map((e, i) => (
                            <motion.span
                                key={e.id}
                                className={`ob-etq ob-etq--${i} ${activa === e.id ? "is-on" : ""}`}
                                initial={quieto ? false : { opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: activa === e.id ? 1.08 : 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                transition={{ type: "spring", stiffness: 380, damping: 24, delay: quieto ? 0 : 0.08 * i }}
                            >
                                {activa === e.id && <Check size={12} />} {e.texto}
                            </motion.span>
                        ))}
                    </AnimatePresence>
                </div>
            )}
            <AnimatePresence>
                {plan && (
                    <motion.div
                        key={plan.nombre}
                        className="ob-plan-flota"
                        initial={quieto ? false : { opacity: 0, y: -24, rotate: -6 }}
                        animate={{ opacity: 1, y: 0, rotate: -3 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    >
                        <span>Tu plan</span>
                        <strong>{plan.nombre}</strong>
                        <em>{plan.precio}</em>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={movil ? "ob-tel" : "ob-pc"}>
                {movil ? <span className="ob-tel-isla" /> : (
                    <div className="ob-pc-barra">
                        <span /><span /><span />
                        <em>totalgains.es/app</em>
                    </div>
                )}
                <div className="ob-pantalla">
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={pantalla.src}
                            className="ob-pantalla-capa"
                            initial={quieto ? false : { opacity: 0, scale: 1.03 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35 }}
                        >
                            <Image src={pantalla.src} alt="" width={pantalla.ancho} height={pantalla.alto} sizes={movil ? "240px" : "440px"} />
                        </motion.div>
                    </AnimatePresence>
                    {toque && movil && (
                        <span key={toque.n} className="ob-toque" style={{ left: `${toque.x * 100}%`, top: `${toque.y * pantalla.alto * escala}px` }}>
                            <span className="ob-toque-onda" />
                            <span className="ob-toque-dedo" />
                        </span>
                    )}
                </div>
                <AnimatePresence>
                    {avisoPc && (
                        <motion.div
                            key={avisoPc.n}
                            className="ob-aviso-pc"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        >
                            {avisoPc.carga ? <span className="ob-cargando" /> : <Check size={15} />}
                            <span>{avisoPc.texto}</span>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {aviso && (
                        <motion.div
                            key={aviso.n}
                            className="ob-aviso"
                            initial={{ opacity: 0, y: -16, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ type: "spring", stiffness: 420, damping: 30 }}
                        >
                            <span className="ob-aviso-logo">TG</span>
                            <span>
                                <strong>TotalGains</strong>
                                <span>{aviso.texto}</span>
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <p className="ob-marco-etq">{etiqueta}</p>
        </aside>
    );
}
