"use client";

/* ──────────────────────────────────────────────
   MOTOR DE LOS EMBUDOS  (/demo/nutricionistas · /entrenadores · /gimnasios)

   Un solo componente, tres perfiles. Todo el contenido vive en
   `src/data/funnels/*.js`: aquí no se escribe copy, se decide cómo se cuenta.

   Reglas de embudo aplicadas (por si alguien lo toca en el futuro):
   1. UNA sola acción por página. Sin menú, sin footer de 33 enlaces: cada
      enlace de navegación es una puerta por la que se escapa una conversión.
   2. El vídeo NO carga YouTube hasta que pulsan play (fachada). Ni terceros
      antes de tiempo, ni un iframe de 800 KB castigando el LCP.
   3. Micro-compromisos antes de pedir nada: el checklist y el test de 3
      preguntas hacen que la persona se diga a SÍ MISMA cuánto le cuesta su
      método actual. Nadie discute su propio número.
   4. Todo lo medible se mide: cada paso emite un evento con el perfil y el
      origen (?src=), para saber qué QR o qué historia trae gente de verdad.
   5. Nada de urgencia falsa ni contadores inventados. Lo único que se promete
      es lo que el producto hace de verdad.
   ────────────────────────────────────────────── */

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
    Check, Play, ArrowRight, ChevronRight, Plus, ShieldCheck,
    Sparkles, Clock, Send, Loader2,
} from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import "./funnel.css";

const YT_VIDEO_ID = "TDLCfk8pGxc";
const CONTACT_EMAIL = "soporte@totalgains.es";

const fadeUp = {
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.55 },
};

/* Las capturas son de tres tipos y cada una necesita su caja: el panel del
   gimnasio es apaisado, las de la app son móviles verticales y las fichas de
   alimento son pequeñas (ampliarlas las pixela). */
function imgKind(src) {
    if (src.startsWith("/images/gym/")) return { w: 1837, h: 916, cls: "" };
    if (src.includes("/food-")) return { w: 240, h: 310, cls: "tall" };
    return { w: 600, h: 1339, cls: "tall" };
}

/* ──────────────────────────────────────────────
   ORIGEN DE LA VISITA
   El QR de la tarjeta, el enlace de la bio y el que mandas por privado son
   tres canales distintos que hoy no se distinguen. Con ?src=lo-que-sea en la
   URL, cada evento sale etiquetado y por fin se sabe cuál trae gente.
   ────────────────────────────────────────────── */
const SRC_KEY = "tg_funnel_src";

/* Devuelve una REF, no estado: el origen no pinta nada en pantalla, solo viaja
   en los eventos y en el correo del formulario. Guardarlo en estado obligaría
   a un render extra en cuanto carga la página, para nada. */
function useSource() {
    const src = useRef("directo");
    useEffect(() => {
        try {
            const params = new URLSearchParams(window.location.search);
            const found = params.get("src") || params.get("utm_source");
            if (found) {
                sessionStorage.setItem(SRC_KEY, found);
                src.current = found;
                return;
            }
            const stored = sessionStorage.getItem(SRC_KEY);
            if (stored) src.current = stored;
        } catch {
            /* sessionStorage bloqueado (modo privado): seguimos como "directo" */
        }
    }, []);
    return src;
}

/* ──────────────────────────────────────────────
   CTA PRINCIPAL
   Vive fuera del componente a propósito: definido dentro, React lo trataría
   como un tipo nuevo en cada render y desmontaría el subárbol entero.
   ────────────────────────────────────────────── */
function PrimaryCta({ data, primaryIsForm, goToForm, track, where, size = "", block = false, children }) {
    const cls = `fnl-btn fnl-btn-primary ${size} ${block ? "fnl-btn-block" : ""}`;

    if (primaryIsForm) {
        return (
            <button type="button" className={cls} onClick={() => goToForm(where)}>
                {children || data.cta.primary.text} <ArrowRight size={19} />
            </button>
        );
    }

    return (
        <Link
            href={data.cta.primary.href}
            className={cls}
            prefetch={false}
            onClick={() => track("funnel_cta_click", { cta_location: where, destino: "onboarding" })}
        >
            {children || data.cta.primary.text} <ArrowRight size={19} />
        </Link>
    );
}

/* ──────────────────────────────────────────────
   VÍDEO — fachada
   ────────────────────────────────────────────── */
function VideoDemo({ videoId, onPlay, label, sub }) {
    const [playing, setPlaying] = useState(false);

    if (playing) {
        return (
            <div className="fnl-video">
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title="Demo de TotalGains"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }

    return (
        <button
            type="button"
            className="fnl-video"
            onClick={() => { setPlaying(true); onPlay?.(); }}
            aria-label="Reproducir la demo en vídeo"
        >
            <span className="fnl-video-face">
                <span className="fnl-video-play"><Play size={30} fill="currentColor" /></span>
                <span className="fnl-video-label">{label}</span>
                <span className="fnl-video-sub">{sub}</span>
            </span>
        </button>
    );
}

/* ──────────────────────────────────────────────
   CHECKLIST DEL DOLOR
   No se le dice a nadie cuánto tiempo pierde: se le deja marcarlo. El número
   sale de sus propias casillas, así que no hay nada que rebatir.
   ────────────────────────────────────────────── */
function PainChecklist({ pain, onFirstCheck }) {
    const [checked, setChecked] = useState([]);
    const notified = useRef(false);

    const total = useMemo(
        () => checked.reduce((sum, i) => sum + pain.items[i].hours, 0),
        [checked, pain.items]
    );
    const maxTotal = useMemo(
        () => pain.items.reduce((sum, it) => sum + it.hours, 0),
        [pain.items]
    );

    const toggle = (i) => {
        setChecked((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
        if (!notified.current) { notified.current = true; onFirstCheck?.(); }
    };

    const pct = maxTotal ? Math.round((total / maxTotal) * 100) : 0;
    const fmt = (n) => (Number.isInteger(n) ? n : n.toFixed(1).replace(".", ","));

    return (
        <div>
            <ul className="fnl-check-list">
                {pain.items.map((item, i) => {
                    const on = checked.includes(i);
                    return (
                        <li key={item.text}>
                            <button
                                type="button"
                                className={`fnl-check ${on ? "on" : ""}`}
                                onClick={() => toggle(i)}
                                aria-pressed={on}
                            >
                                <span className="fnl-check-box">{on && <Check size={14} strokeWidth={3.5} />}</span>
                                <span>{item.text}</span>
                                <span className="fnl-check-hours">{fmt(item.hours)} h</span>
                            </button>
                        </li>
                    );
                })}
            </ul>

            <div className="fnl-meter">
                <div className="fnl-meter-value">{fmt(total)} h</div>
                <div style={{ fontSize: "0.95rem", color: "#cdd4e8" }}>
                    {total === 0 ? "Marca arriba lo que te suene" : "al mes en trabajo que no es entrenar ni asesorar"}
                </div>
                <div className="fnl-meter-track">
                    <div className="fnl-meter-fill" style={{ width: `${pct}%` }} />
                </div>
                <p className="fnl-foot" style={{ margin: 0 }}>{pain.foot}</p>
            </div>
        </div>
    );
}

/* ──────────────────────────────────────────────
   TEST DE 3 PREGUNTAS
   El compromiso crece paso a paso: tres toques y un resultado propio. Quien
   llega al final ya se ha explicado a sí mismo por qué necesita esto.
   ────────────────────────────────────────────── */
function Quiz({ quiz, accent, onStep, onComplete, onCta, ctaText }) {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const done = step >= quiz.questions.length;

    const answer = (option) => {
        const next = [...answers, option];
        setAnswers(next);
        setStep((s) => s + 1);
        if (next.length >= quiz.questions.length) {
            onComplete?.(next.reduce((sum, a) => sum + a.hours, 0));
        } else {
            onStep?.(next.length);
        }
    };

    const back = () => {
        setAnswers((a) => a.slice(0, -1));
        setStep((s) => Math.max(0, s - 1));
    };

    const hours = answers.reduce((sum, a) => sum + a.hours, 0);
    const tags = [...new Set(answers.map((a) => a.tag))];

    return (
        <div className="fnl-quiz">
            <div className="fnl-quiz-steps" aria-hidden="true">
                {quiz.questions.map((q, i) => (
                    <div key={q.q} className={`fnl-quiz-step ${i < step ? "done" : ""}`}>
                        <span />
                    </div>
                ))}
            </div>

            {/* Sin AnimatePresence a propósito. Con `mode="wait"` el paso
                siguiente no monta hasta que TERMINA la animación de salida del
                anterior: si esa animación no progresa (pestaña en segundo
                plano, motor de animación parado), el estado avanza y la
                pantalla se queda clavada en la pregunta 1. Un embudo no puede
                depender de que una animación acabe. Cambiar la `key` basta
                para que React remonte y la entrada se anime igual. */}
            {!done ? (
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.28 }}
                    >
                        <p className="fnl-quiz-counter">Pregunta {step + 1} de {quiz.questions.length}</p>
                        <h3 className="fnl-quiz-q">{quiz.questions[step].q}</h3>
                        <div className="fnl-quiz-options">
                            {quiz.questions[step].options.map((opt) => (
                                <button
                                    key={opt.label}
                                    type="button"
                                    className="fnl-quiz-option"
                                    onClick={() => answer(opt)}
                                >
                                    <span>{opt.label}</span>
                                    <ChevronRight size={20} />
                                </button>
                            ))}
                        </div>
                        {step > 0 && (
                            <button type="button" className="fnl-quiz-back" onClick={back}>← Volver</button>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="fnl-center"
                    >
                        <p className="fnl-quiz-counter">{quiz.resultTitle}</p>
                        <p style={{ color: "#cdd4e8", margin: "0 0 6px", fontSize: "1rem" }}>{quiz.resultLead}</p>
                        <div className="fnl-meter-value" style={{ color: accent }}>
                            {hours} {quiz.resultUnit}
                        </div>

                        <ul className="fnl-quiz-solutions">
                            {tags.map((tag) => (
                                <li key={tag}>
                                    <Check size={17} strokeWidth={3} />
                                    <span>{quiz.solutions[tag]}</span>
                                </li>
                            ))}
                        </ul>

                        <button type="button" className="fnl-btn fnl-btn-primary fnl-btn-lg" onClick={onCta}>
                            {ctaText} <ArrowRight size={19} />
                        </button>
                        <p className="fnl-foot">{quiz.resultFoot}</p>
                    </motion.div>
                )}
        </div>
    );
}

/* ──────────────────────────────────────────────
   FAQ — objeciones, no preguntas de manual
   ────────────────────────────────────────────── */
function Faq({ items, onOpen }) {
    const [open, setOpen] = useState(null);
    return (
        <div className="fnl-faq">
            {items.map((item, i) => {
                const isOpen = open === i;
                return (
                    <div key={item.q} className={`fnl-faq-item ${isOpen ? "open" : ""}`}>
                        <button
                            type="button"
                            className="fnl-faq-q"
                            onClick={() => { setOpen(isOpen ? null : i); if (!isOpen) onOpen?.(item.q); }}
                            aria-expanded={isOpen}
                        >
                            <span>{item.q}</span>
                            <Plus size={20} />
                        </button>
                        {/* Despliegue en CSS puro (grid 0fr→1fr), no en JS: una
                            objeción que no se abre es una venta que no se cierra,
                            y esto funciona aunque el motor de animación no vaya. */}
                        <div className="fnl-faq-body">
                            <div>
                                <p className="fnl-faq-a">{item.a}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

/* ──────────────────────────────────────────────
   FORMULARIO
   El correo del formulario sale por EmailJS, igual que el de contacto de la
   web. Si falla, NO se traga el lead en silencio: se enseña el email para que
   la persona pueda escribir igualmente.
   ────────────────────────────────────────────── */
function DemoForm({ data, srcRef, onSent }) {
    const [form, setForm] = useState({ nombre: "", email: "", telefono: "", negocio: "", volumen: "", mensaje: "" });
    const [consent, setConsent] = useState(false);
    const [status, setStatus] = useState("idle");
    const router = useRouter();

    const volumenLabel = {
        nutricionista: "¿Cuántos pacientes llevas ahora?",
        entrenador: "¿Cuántos clientes llevas ahora?",
        gimnasio: "¿Cuántos socios activos tiene tu centro?",
    }[data.perfil];

    const volumenOptions = data.perfil === "gimnasio"
        ? ["Menos de 50", "Entre 50 y 100", "Entre 100 y 200", "Más de 200"]
        : ["Menos de 10", "Entre 10 y 25", "Entre 25 y 100", "Más de 100"];

    const negocioLabel = data.perfil === "gimnasio" ? "Nombre del centro" : "Tu marca o nombre profesional";

    const submit = (e) => {
        e.preventDefault();
        if (status === "sending") return;

        if (!form.nombre.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !consent) {
            setStatus("invalid");
            return;
        }

        setStatus("sending");
        const asunto = `Demo ${data.perfil} · ${form.nombre}${form.negocio ? ` (${form.negocio})` : ""}`;
        const cuerpo = [
            `Perfil: ${data.perfil}`,
            `Origen: ${srcRef?.current || "directo"}`,
            `Nombre: ${form.nombre}`,
            `Email: ${form.email}`,
            `Teléfono: ${form.telefono || "—"}`,
            `${negocioLabel}: ${form.negocio || "—"}`,
            `${volumenLabel} ${form.volumen || "—"}`,
            "",
            form.mensaje || "(sin mensaje)",
        ].join("\n");

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.nombre,
                    from_email: form.email,
                    subject: asunto,
                    message: cuerpo,
                    to_email: CONTACT_EMAIL,
                },
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
            .then(() => {
                onSent?.();
                // La confirmación vive en /gracias/ — URL propia medible como
                // objetivo de destino. El perfil viaja en ?de= para el desglose.
                // gtag envía por sendBeacon, así que el evento sobrevive al push.
                router.push(`/gracias/?de=demo-${data.perfil}`);
            })
            .catch(() => setStatus("error"));
    };

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    return (
        <form className="fnl-form" onSubmit={submit} noValidate>
            <div className="fnl-form-row">
                <div className="fnl-field">
                    <label htmlFor="fnl-nombre">Nombre *</label>
                    <input id="fnl-nombre" type="text" value={form.nombre} onChange={set("nombre")} placeholder="Cómo te llamas" autoComplete="name" />
                </div>
                <div className="fnl-field">
                    <label htmlFor="fnl-email">Email *</label>
                    <input id="fnl-email" type="email" value={form.email} onChange={set("email")} placeholder="tu@email.com" autoComplete="email" />
                </div>
            </div>

            <div className="fnl-form-row">
                <div className="fnl-field">
                    <label htmlFor="fnl-tel">Teléfono o Instagram</label>
                    <input id="fnl-tel" type="text" value={form.telefono} onChange={set("telefono")} placeholder="Por donde prefieras que te escriba" autoComplete="tel" />
                </div>
                <div className="fnl-field">
                    <label htmlFor="fnl-negocio">{negocioLabel}</label>
                    <input id="fnl-negocio" type="text" value={form.negocio} onChange={set("negocio")} placeholder="Opcional" autoComplete="organization" />
                </div>
            </div>

            <div className="fnl-field">
                <label htmlFor="fnl-volumen">{volumenLabel}</label>
                <select id="fnl-volumen" value={form.volumen} onChange={set("volumen")}>
                    <option value="">Prefiero no decirlo</option>
                    {volumenOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
            </div>

            <div className="fnl-field">
                <label htmlFor="fnl-mensaje">¿Algo que deba saber antes?</label>
                <textarea id="fnl-mensaje" rows={3} value={form.mensaje} onChange={set("mensaje")} placeholder="Opcional: de qué plataforma vienes, qué es lo que más te duele hoy…" />
            </div>

            <label className="fnl-consent">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <span>
                    He leído y acepto la <Link href="/privacy/" target="_blank">política de privacidad</Link>.
                    Tus datos se usan solo para responderte, no van a ninguna lista.
                </span>
            </label>

            {status === "invalid" && (
                <div className="fnl-form-msg err" role="alert">
                    Revisa el nombre, el email y la casilla de privacidad.
                </div>
            )}
            {status === "error" && (
                <div className="fnl-form-msg err" role="alert">
                    No he podido enviarlo. Escríbeme directamente a{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "inherit", fontWeight: 700 }}>{CONTACT_EMAIL}</a> y lo vemos.
                </div>
            )}

            <button type="submit" className="fnl-btn fnl-btn-primary fnl-btn-lg fnl-btn-block" disabled={status === "sending"}>
                {status === "sending"
                    ? <><Loader2 size={19} className="fnl-spin" /> Enviando…</>
                    : <><Send size={18} /> {data.isDemo ? "Pedir mi demo" : "Que me lo enseñen"}</>}
            </button>
        </form>
    );
}

/* ──────────────────────────────────────────────
   LANDING
   ────────────────────────────────────────────── */
export default function FunnelLanding({ data }) {
    const srcRef = useSource();
    const formRef = useRef(null);

    const track = useCallback(
        (event, params = {}) => trackEvent(event, { perfil: data.perfil, origen: srcRef.current, ...params }),
        [data.perfil, srcRef]
    );

    useEffect(() => { track("funnel_view"); }, [track]);

    const goToForm = useCallback((from) => {
        track("funnel_cta_click", { cta_location: from, destino: "formulario" });
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [track]);

    /* En gimnasios el alta no es autoservicio: el CTA principal SIEMPRE lleva
       al formulario. En los otros dos perfiles lleva a la prueba de 14 días. */
    const primaryIsForm = Boolean(data.isDemo);

    const handleQuizCta = useCallback(() => {
        if (primaryIsForm) { goToForm("quiz"); return; }
        track("funnel_cta_click", { cta_location: "quiz", destino: "onboarding" });
        window.location.assign(data.cta.primary.href);
    }, [primaryIsForm, goToForm, track, data.cta.primary.href]);

    // Props fijas del CTA, para no repetirlas en los cinco sitios donde sale.
    const ctaProps = { data, primaryIsForm, goToForm, track };

    return (
        <main className="fnl fnl-has-sticky" style={{ "--fnl-accent": data.accent }}>
            {/* ── Barra mínima ── */}
            <nav className="fnl-nav">
                <span className="fnl-nav-brand">
                    <Image src="/logo-optimized.webp" alt="" width={30} height={30} priority />
                    TotalGains
                </span>
                <span className="fnl-nav-tag">{data.hero.eyebrow}</span>
                <PrimaryCta {...ctaProps} where="nav" size="fnl-btn-sm">
                    {primaryIsForm ? "Pedir demo" : "Probar gratis"}
                </PrimaryCta>
            </nav>

            {/* ── Hero ── */}
            <header className="fnl-hero">
                <div className="fnl-hero-glow" aria-hidden="true"><span /><span /></div>
                <div className="fnl-wrap fnl-hero-grid">
                    <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="fnl-eyebrow"><Sparkles size={13} /> {data.hero.eyebrow}</span>
                        <h1 className="fnl-h1">
                            {data.hero.title}<br />
                            <span className="fnl-accent-text">{data.hero.titleAccent}</span>
                        </h1>
                        <p className="fnl-lead">{data.hero.sub}</p>

                        <ul className="fnl-hero-bullets">
                            {data.hero.bullets.map((b) => (
                                <li key={b}><Check size={17} strokeWidth={3} /> {b}</li>
                            ))}
                        </ul>

                        <div className="fnl-hero-ctas">
                            <PrimaryCta {...ctaProps} where="hero" size="fnl-btn-lg" />
                        </div>
                        <p className="fnl-microcopy">{data.cta.microcopy}</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.12 }}>
                        <VideoDemo
                            videoId={data.videoId || YT_VIDEO_ID}
                            label="Ver la demo en 2 minutos"
                            sub="Sin registro. Dale al play."
                            onPlay={() => track("funnel_video_play")}
                        />
                    </motion.div>
                </div>
            </header>

            {/* ── Datos duros ── */}
            <section className="fnl-wrap">
                <div className="fnl-stats">
                    {data.heroStats.map((s) => (
                        <div className="fnl-stat" key={s.label}>
                            <div className="fnl-stat-value">{s.value}</div>
                            <div className="fnl-stat-label">{s.label}</div>
                            <div className="fnl-stat-foot">{s.foot}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Espejo del dolor ── */}
            <section className="fnl-section">
                <div className="fnl-wrap fnl-wrap-narrow">
                    <motion.div {...fadeUp} className="fnl-center">
                        <h2 className="fnl-h2">{data.pain.title}</h2>
                        <p className="fnl-lead">{data.pain.sub}</p>
                    </motion.div>
                    <motion.div {...fadeUp}>
                        <PainChecklist pain={data.pain} onFirstCheck={() => track("funnel_pain_check")} />
                    </motion.div>
                </div>
            </section>

            {/* ── Features ── */}
            <section className="fnl-section">
                <div className="fnl-wrap">
                    <motion.div {...fadeUp} className="fnl-center" style={{ marginBottom: 64 }}>
                        <h2 className="fnl-h2">Lo que hace que te quedes</h2>
                        <p className="fnl-lead">
                            No es una lista de funciones. Es lo que deja de ocupar tu cabeza a partir del lunes.
                        </p>
                    </motion.div>

                    {data.features.map((f, i) => {
                        const kind = imgKind(f.image);
                        return (
                            <motion.article {...fadeUp} className={`fnl-feature ${i % 2 ? "alt" : ""}`} key={f.title}>
                                <div>
                                    <span className="fnl-feature-tag">{f.tag}</span>
                                    <h3 className="fnl-h2" style={{ fontSize: "clamp(1.35rem,3vw,1.85rem)" }}>{f.title}</h3>
                                    <p className="fnl-feature-desc">{f.desc}</p>
                                    <ul className="fnl-feature-bullets">
                                        {f.bullets.map((b) => (
                                            <li key={b}><Check size={16} strokeWidth={3} /> <span>{b}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`fnl-feature-media ${kind.cls}`}>
                                    <Image
                                        src={f.image}
                                        alt={f.imageAlt}
                                        width={kind.w}
                                        height={kind.h}
                                        loading="lazy"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            {/* ── Test de 3 preguntas ── */}
            <section className="fnl-section">
                <div className="fnl-wrap fnl-wrap-narrow">
                    <motion.div {...fadeUp} className="fnl-center">
                        <h2 className="fnl-h2">{data.quiz.title}</h2>
                        <p className="fnl-lead">{data.quiz.sub}</p>
                    </motion.div>
                    <motion.div {...fadeUp}>
                        <Quiz
                            quiz={data.quiz}
                            accent={data.accent}
                            ctaText={primaryIsForm ? "Quiero verlo en mi centro" : "Quiero recuperar ese tiempo"}
                            onStep={(n) => track("funnel_quiz_step", { paso: n })}
                            onComplete={(h) => track("funnel_quiz_complete", { horas_estimadas: h })}
                            onCta={handleQuizCta}
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── Prueba social: testimonio real o compromiso de implantación ── */}
            {data.testimonial && (
                <section className="fnl-section">
                    <div className="fnl-wrap fnl-wrap-narrow">
                        <motion.div {...fadeUp} className="fnl-card fnl-quote">
                            <div className="fnl-quote-avatar">
                                <Image src={data.testimonial.avatar} alt={data.testimonial.name} width={92} height={92} loading="lazy" />
                            </div>
                            <div>
                                <p className="fnl-quote-text">“{data.testimonial.quote}”</p>
                                <p className="fnl-quote-before"><strong>Antes:</strong> {data.testimonial.before}</p>
                                <div className="fnl-quote-meta">
                                    <span className="fnl-quote-name">{data.testimonial.name}</span>
                                    <span className="fnl-quote-role">{data.testimonial.role}</span>
                                    <span className="fnl-quote-result">
                                        {data.testimonial.result} <small>{data.testimonial.resultLabel}</small>
                                    </span>
                                </div>
                                <Link
                                    href={data.testimonial.caseHref}
                                    prefetch={false}
                                    style={{ display: "inline-block", marginTop: 16, fontSize: "0.9rem", fontWeight: 700, color: data.accent }}
                                    onClick={() => track("funnel_case_click")}
                                >
                                    Leer el caso completo →
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {data.implantacion && (
                <section className="fnl-section">
                    <div className="fnl-wrap">
                        <motion.div {...fadeUp} className="fnl-center" style={{ marginBottom: 40 }}>
                            <h2 className="fnl-h2">{data.implantacion.title}</h2>
                            <p className="fnl-lead">{data.implantacion.sub}</p>
                        </motion.div>
                        <motion.div {...fadeUp} className="fnl-steps">
                            {data.implantacion.steps.map((s) => (
                                <div className="fnl-step" key={s.n}>
                                    <div className="fnl-step-n">{s.n}</div>
                                    <h3 className="fnl-h3">{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* ── Objeciones ── */}
            <section className="fnl-section">
                <div className="fnl-wrap fnl-wrap-narrow">
                    <motion.div {...fadeUp} className="fnl-center">
                        <h2 className="fnl-h2">Lo que me preguntan siempre</h2>
                    </motion.div>
                    <motion.div {...fadeUp}>
                        <Faq items={data.faq} onOpen={(q) => track("funnel_faq_open", { pregunta: q })} />
                    </motion.div>
                </div>
            </section>

            {/* ── Oferta ── */}
            <section className="fnl-section">
                <div className="fnl-wrap fnl-wrap-narrow">
                    <motion.div {...fadeUp} className="fnl-offer">
                        <h2 className="fnl-h2">{data.offer.title}</h2>
                        <p className="fnl-lead fnl-center">{data.offer.sub}</p>

                        <div className="fnl-offer-price">{data.offer.price}</div>
                        <p className="fnl-offer-price-foot">{data.offer.priceFoot}</p>

                        <ul className="fnl-perks">
                            {data.offer.perks.map((p) => (
                                <li key={p}><Check size={17} strokeWidth={3} /> {p}</li>
                            ))}
                        </ul>

                        <PrimaryCta {...ctaProps} where="oferta" size="fnl-btn-lg" />
                        <p className="fnl-microcopy" style={{ marginTop: 12 }}>{data.cta.microcopy}</p>

                        <div className="fnl-guarantee">
                            <ShieldCheck size={19} />
                            <span>{data.offer.guarantee}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Formulario ── */}
            <section className="fnl-section" id="demo-form" ref={formRef}>
                <div className="fnl-wrap fnl-wrap-narrow">
                    <motion.div {...fadeUp} className="fnl-center">
                        <span className="fnl-eyebrow"><Clock size={13} /> Respuesta en menos de 24 h</span>
                        <h2 className="fnl-h2">
                            {data.isDemo ? "Cuéntame cómo funciona tu centro" : "¿Prefieres que te lo enseñe yo?"}
                        </h2>
                        <p className="fnl-lead">
                            {data.isDemo
                                ? "Rellena esto y preparo la demo con tus clases y tus planes reales, no con datos de mentira."
                                : "Si prefieres verlo acompañado antes de registrarte, escríbeme y lo vemos juntos por videollamada."}
                        </p>
                    </motion.div>
                    <motion.div {...fadeUp} className="fnl-card">
                        <DemoForm data={data} srcRef={srcRef} onSent={() => track("funnel_lead_sent")} />
                    </motion.div>
                </div>
            </section>

            {/* ── Cierre ── */}
            <section className="fnl-close">
                <div className="fnl-wrap fnl-wrap-narrow">
                    <motion.div {...fadeUp}>
                        <h2 className="fnl-h2">
                            {data.close.title}<br />
                            <span className="fnl-accent-text">{data.close.titleAccent}</span>
                        </h2>
                        <p className="fnl-lead fnl-center">{data.close.sub}</p>
                        <PrimaryCta {...ctaProps} where="cierre" size="fnl-btn-lg" />
                    </motion.div>
                </div>
            </section>

            {/* ── Pie legal mínimo (sin salidas que no sean obligatorias) ── */}
            <footer className="fnl-foot-legal">
                {/* Sin año dinámico: `new Date()` en un componente que se
                    prerenderiza y luego hidrata es un error de hidratación
                    esperando a que cambie el año. */}
                <span>© TotalGains</span>
                <Link href="/privacy/">Privacidad</Link>
                <Link href="/aviso-legal/">Aviso legal</Link>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </footer>

            {/* ── CTA fijo en móvil ── */}
            <div className="fnl-sticky">
                <div className="fnl-sticky-txt">
                    <strong>{data.offer.price}<span style={{ fontWeight: 600, fontSize: "0.78rem" }}> {data.offer.priceFoot}</span></strong>
                    {data.isDemo ? "Demo sin compromiso" : "14 días gratis, sin tarjeta"}
                </div>
                <PrimaryCta {...ctaProps} where="sticky" size="fnl-btn-sm">
                    {primaryIsForm ? "Pedir demo" : "Empezar"}
                </PrimaryCta>
            </div>
        </main>
    );
}
