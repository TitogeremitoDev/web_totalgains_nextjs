"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import emailjs from "emailjs-com";
import { Send, Loader2 } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import "./DemoForm.css";

/* El formulario de demo, en su fichero (revisión de la web 21-nov, mejora
   2236): lo usan /demo/<perfil>/ (FunnelLanding) y «Te llamamos» de
   /para-gimnasios/. Antes vivía dentro de FunnelLanding, y la página de
   gimnasios cargaba las 814 líneas del embudo y su CSS entero para
   enseñar un formulario. */

const CONTACT_EMAIL = "soporte@totalgains.es";

/* ──────────────────────────────────────────────
   FORMULARIO
   El correo del formulario sale por EmailJS, igual que el de contacto de la
   web. Si falla, NO se traga el lead en silencio: se enseña el email para que
   la persona pueda escribir igualmente.
   ────────────────────────────────────────────── */
export default function DemoForm({ data, srcRef, onSent }) {
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
            .catch((err) => {
                // Mismo evento que el formulario de contacto (comparten EmailJS):
                // un solo sitio en GA4 para ver por qué fallan los envíos.
                trackEvent("lead_submit_error", {
                    form_name: `demo_${data.perfil}`,
                    error_status: String(err?.status ?? "sin_status"),
                    error_text: String(err?.text || err?.message || "sin_texto").slice(0, 100),
                });
                setStatus("error");
            });
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
                    : <><Send size={18} /> {data.textoBoton || (data.isDemo ? "Pedir mi demo" : "Que me lo enseñen")}</>}
            </button>
        </form>
    );
}
