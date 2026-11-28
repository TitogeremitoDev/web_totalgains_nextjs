"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUp, Bookmark, ChevronLeft, Heart, MessageCircle, Mic, Music2, Search, Send, Sparkles } from "lucide-react";
import { ORIGEN_PERFIL } from "@/data/onboarding";

/* Lo que enseña el móvil en «¿Cómo nos has conocido?»: una búsqueda, un reel, un chat con una IA o el mensaje de alguien
   que te lo recomienda. Todo genérico (sin logos de otras marcas); los textos, en src/data/onboarding.js (ORIGEN_PERFIL).
   Cada pantalla va contando su historia por pasos; quien la monta le pone key={fuente} para que empiece de cero. */

// Avanza de 0 a `total` con las esperas indicadas (con «reducir movimiento», empieza ya en el final).
function usePasos(esperas, quieto) {
    const [paso, setPaso] = useState(quieto ? esperas.length : 0);
    useEffect(() => {
        if (quieto || paso >= esperas.length) return undefined;
        const t = setTimeout(() => setPaso((p) => p + 1), esperas[paso]);
        return () => clearTimeout(t);
    }, [paso, esperas, quieto]);
    return paso;
}

const ESPERAS_GOOGLE = [250, 1500, 500, 900];
const ESPERAS_IA = [350, 700, 1100, 450, 450, 450, 500];
const ESPERAS_CHAT = [400, 900, 1000, 900, 1100, 700];

export default function PantallaOrigen({ fuente, perfil, quieto, mini }) {
    const datos = ORIGEN_PERFIL[perfil] || ORIGEN_PERFIL.entrenador;
    if (fuente === "google") return <Buscador datos={datos} quieto={quieto} />;
    if (fuente === "redes") return <Reel datos={datos} quieto={quieto} mini={mini} />;
    if (fuente === "ia") return <ChatIA datos={datos} quieto={quieto} />;
    if (fuente === "recomendacion") return <ChatAmigo datos={datos} quieto={quieto} />;
    return (
        <div className="ob-or ob-or--marca">
            <Image src="/logo.png" alt="" className="ob-or-logo" width={72} height={72} />
            <strong>TotalGains</strong>
            <span>totalgains.es</span>
        </div>
    );
}

/* Buscador: se escribe la búsqueda y sale TotalGains con su título y su descripción reales. */
function Buscador({ datos, quieto }) {
    const paso = usePasos(ESPERAS_GOOGLE, quieto);
    const q = datos.busqueda;
    // 1: escribiendo · 2: búsqueda hecha · 3: resultados · 4: el dedo pulsa el resultado
    const escrito = paso >= 2 ? q : paso === 1 ? q.slice(0, Math.ceil(q.length * 0.55)) : "";
    const r = datos.resultado;
    return (
        <div className="ob-or ob-or--buscador">
            <div className="ob-or-bus-barra">
                <Search size={15} aria-hidden="true" />
                <span className={paso === 1 ? "ob-or-escribe" : ""}>{escrito}</span>
                <Mic size={15} aria-hidden="true" className="ob-or-bus-mic" />
            </div>
            <div className="ob-or-bus-pestanas">
                <b>Todo</b>
                <span>Imágenes</span>
                <span>Vídeos</span>
                <span>Noticias</span>
            </div>
            {paso >= 3 ? (
                <div className="ob-or-bus-res">
                    <div className={`ob-or-bus-uno ${paso >= 4 ? "is-tocado" : ""}`}>
                        <div className="ob-or-bus-sitio">
                            <Image src="/logo.png" alt="" className="ob-or-logo" width={22} height={22} />
                            <span>
                                <strong>TotalGains</strong>
                                <em>{r.ruta}</em>
                            </span>
                        </div>
                        <p className="ob-or-bus-tit">{r.titulo}</p>
                        <p className="ob-or-bus-txt">{r.texto}</p>
                        {paso >= 4 && <span className="ob-or-dedo" />}
                    </div>
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="ob-or-bus-otro">
                            <i className="ob-or-hueso ob-or-hueso--titulo" />
                            <i className="ob-or-hueso" />
                            <i className="ob-or-hueso ob-or-hueso--corto" />
                        </div>
                    ))}
                </div>
            ) : (
                paso === 2 && <span className="ob-or-bus-cargando" />
            )}
        </div>
    );
}

/* Reel: el vídeo de verdad de la cuenta, a pantalla completa, con los botones de siempre (sin contadores). */
function Reel({ datos, quieto, mini }) {
    const reel = datos.reel;
    return (
        <div className="ob-or ob-or--reel">
            {mini || quieto ? (
                <Image src={reel.poster} alt="" fill sizes="240px" className="ob-or-reel-video" />
            ) : (
                <video className="ob-or-reel-video" src={reel.src} poster={reel.poster} autoPlay muted loop playsInline preload="auto" />
            )}
            <div className="ob-or-reel-sombra" />
            <div className="ob-or-reel-botones">
                <span className="ob-or-reel-like">
                    <Heart size={22} fill="currentColor" />
                </span>
                <MessageCircle size={22} />
                <Send size={21} />
                <Bookmark size={21} />
            </div>
            <div className="ob-or-reel-pie">
                <div className="ob-or-reel-cuenta">
                    <Image src="/logo.png" alt="" className="ob-or-logo" width={24} height={24} />
                    <strong>totalgainsfitness</strong>
                    <span>Seguir</span>
                </div>
                <p>{reel.texto}</p>
                <small>
                    <Music2 size={11} /> Audio original
                </small>
            </div>
            {!quieto && (
                <div className="ob-or-corazones" aria-hidden="true">
                    <Heart size={16} fill="currentColor" />
                    <Heart size={12} fill="currentColor" />
                    <Heart size={14} fill="currentColor" />
                </div>
            )}
            <span className="ob-or-reel-progreso" />
        </div>
    );
}

/* Chat con una IA: la pregunta, «pensando…» y la respuesta, punto a punto, con el enlace a la web. */
function ChatIA({ datos, quieto }) {
    const paso = usePasos(ESPERAS_IA, quieto);
    const ia = datos.ia;
    // 1: pregunta · 2: pensando · 3: respuesta · 4-6: los tres puntos · 7: el enlace
    return (
        <div className="ob-or ob-or--ia">
            <div className="ob-or-ia-cab">
                <Sparkles size={15} />
                <strong>Asistente IA</strong>
            </div>
            <div className="ob-or-ia-hilo">
                {paso >= 1 && <p className="ob-or-ia-yo">{ia.pregunta}</p>}
                {paso === 2 && (
                    <span className="ob-or-pensando">
                        <i />
                        <i />
                        <i />
                    </span>
                )}
                {paso >= 3 && (
                    <div className="ob-or-ia-resp">
                        <span className="ob-or-ia-ico">
                            <Sparkles size={12} />
                        </span>
                        <div>
                            <p>
                                {ia.respuesta.split("TotalGains").map((t, i, partes) => (
                                    <React.Fragment key={i}>
                                        {t}
                                        {i < partes.length - 1 && <strong>TotalGains</strong>}
                                    </React.Fragment>
                                ))}
                            </p>
                            <ul>
                                {ia.puntos.map((t, i) => paso >= 4 + i && <li key={t}>{t}</li>)}
                            </ul>
                            {paso >= 7 && (
                                <span className="ob-or-ia-enlace">
                                    <Image src="/logo.png" alt="" className="ob-or-logo" width={14} height={14} /> totalgains.es
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="ob-or-ia-caja">
                <span>Pregunta lo que quieras</span>
                <ArrowUp size={14} />
            </div>
        </div>
    );
}

/* Mensaje de alguien que te lo recomienda: escribe, contestas y te manda el enlace. */
function ChatAmigo({ datos, quieto }) {
    const paso = usePasos(ESPERAS_CHAT, quieto);
    const c = datos.chat;
    // Cada mensaje del otro va precedido de «escribiendo…»; el último paso es la tarjeta del enlace.
    const vistos = [paso >= 2, paso >= 3, paso >= 5];
    const escribiendo = paso === 1 || paso === 4;
    return (
        <div className="ob-or ob-or--chat">
            <div className="ob-or-chat-cab">
                <ChevronLeft size={18} />
                <span className="ob-or-chat-avatar">{c.nombre[0]}</span>
                <span>
                    <strong>{c.nombre}</strong>
                    <small>{escribiendo ? "escribiendo…" : "en línea"}</small>
                </span>
            </div>
            <div className="ob-or-chat-hilo">
                {c.mensajes.map((m, i) => vistos[i] && <p key={m.t} className={m.yo ? "ob-or-chat-yo" : "ob-or-chat-el"}>{m.t}</p>)}
                {escribiendo && (
                    <span className="ob-or-pensando ob-or-pensando--chat">
                        <i />
                        <i />
                        <i />
                    </span>
                )}
                {paso >= 6 && (
                    <div className="ob-or-chat-enlace">
                        <Image src="/logo.png" alt="" className="ob-or-logo" width={34} height={34} />
                        <span>
                            <strong>TotalGains</strong>
                            <small>{c.enlace}</small>
                            <em>totalgains.es</em>
                        </span>
                    </div>
                )}
            </div>
            <div className="ob-or-chat-caja">
                <span>Mensaje</span>
                <Mic size={14} />
            </div>
        </div>
    );
}
