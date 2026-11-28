"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Activity, Apple, ArrowLeft, Building2, Check, Dumbbell } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import DemoVideo from "@/components/DemoVideo";
import { EN_TODOS_LOS_PLANES } from "@/data/planesCoach";
import { ORIGENES, PERFILES, dolores, esProfesional, pasos, planDe, tamano } from "@/data/onboarding";
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
    const quieto = useReducedMotion();

    const lista = pasos(r.perfil);
    const actual = lista[paso];
    const plan = useMemo(() => planDe(r.perfil, r.tamano), [r.perfil, r.tamano]);
    const dolor = r.perfil && r.perfil !== "atleta" ? dolores(r.perfil).find((d) => d.id === r.dolor) : null;

    const responder = (campo, valor) => {
        setElegido(valor);
        const nuevo = { ...r, [campo]: valor };
        if (campo === "perfil") Object.assign(nuevo, { tamano: null, dolor: null });
        setR(nuevo);
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
        >
            {contenido}
            <span className="ob-opcion-check" aria-hidden="true">
                <Check size={16} />
            </span>
        </button>
    );

    return (
        <main className="onboarding-page">
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
                                    <h2 className="step-title">¿Qué te trae a TotalGains?</h2>
                                    <p className="step-subtitle">Elige lo que mejor te describe y te enseñamos lo que hay para ti.</p>
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
                                    <h2 className="step-title">{tamano(r.perfil).pregunta}</h2>
                                    <p className="step-subtitle">{tamano(r.perfil).ayuda}</p>
                                    <div className="options-grid">
                                        {tamano(r.perfil).opciones.map((o) => opcion("tamano", o.id, o.texto))}
                                    </div>
                                </>
                            )}

                            {actual === "dolor" && (
                                <>
                                    <h2 className="step-title">¿Qué te quita más tiempo ahora?</h2>
                                    <p className="step-subtitle">Te enseñamos cómo se resuelve con TotalGains.</p>
                                    <div className="options-grid">
                                        {dolores(r.perfil).map((d) => opcion("dolor", d.id, d.texto))}
                                    </div>
                                </>
                            )}

                            {actual === "origen" && (
                                <>
                                    <h2 className="step-title">¿Cómo nos has conocido?</h2>
                                    <p className="step-subtitle">Nos ayuda a saber dónde contar lo que hacemos. Es lo último.</p>
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
