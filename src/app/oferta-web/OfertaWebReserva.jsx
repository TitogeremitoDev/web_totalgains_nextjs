"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";
import { Send, MessageCircle } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import { OFERTA_WEB, whatsappOfertaWeb } from "@/data/ofertaWeb";
import { useOfertaWeb } from "@/components/useOfertaWeb";
import OfertaWebCta from "./OfertaWebCta";

/* ──────────────────────────────────────────────
   Formulario de reserva de la oferta de noviembre. Sale por EmailJS con la
   misma cuenta y plantilla que el contacto de la home (Contact.jsx: variables
   from_name, from_email, subject, message) y llega a soporte@. Al enviar se
   va a /gracias/?de=oferta-web, que es donde se mide la conversión.

   Si el visitante ha probado «Pon tu nombre y mira tu web», el botón «¡La
   quiero!» manda aquí su nombre y su color (evento `ow:reservar`).
   Pasada la oferta enseña el «terminó» de OfertaWebCta.
   ────────────────────────────────────────────── */

const PLANES = ["Starter · 299 €/año", "Pro · 899 €/año", "Unlimited · 1.499 €/año", "Aún no lo sé"];
const DOMINIO = ["Sí, ya tengo", "No", "No lo sé"];
const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function OfertaWebReserva() {
  const { activa } = useOfertaWeb();
  const router = useRouter();
  const [datos, setDatos] = useState({ nombre: "", email: "", telefono: "", plan: "", dominio: "", mensaje: "" });
  const [colorPrueba, setColorPrueba] = useState("");
  const [privacidad, setPrivacidad] = useState(false);
  const [estado, setEstado] = useState("listo");
  const emailRef = useRef(null);

  useEffect(() => {
    const alPedirla = (e) => {
      const { nombre, color } = e.detail || {};
      if (nombre) setDatos((d) => (d.nombre ? d : { ...d, nombre }));
      if (color) setColorPrueba(color);
      setTimeout(() => emailRef.current?.focus({ preventScroll: true }), 700);
    };
    window.addEventListener("ow:reservar", alPedirla);
    return () => window.removeEventListener("ow:reservar", alPedirla);
  }, []);

  if (!activa) return <OfertaWebCta />;

  const cambiar = (campo) => (e) => setDatos((d) => ({ ...d, [campo]: e.target.value }));

  const enviar = (e) => {
    e.preventDefault();
    if (!privacidad) return;
    if (!EMAIL_OK.test(datos.email.trim())) {
      setEstado("email");
      return;
    }
    setEstado("enviando");

    const url = new URLSearchParams(window.location.search);
    const lineas = [
      "Reserva de plaza · Oferta de noviembre (tu web incluida con el plan anual)",
      "",
      `Nombre: ${datos.nombre.trim()}`,
      `Correo: ${datos.email.trim()}`,
      `Teléfono: ${datos.telefono.trim() || "no lo ha dejado"}`,
      `Plan anual: ${datos.plan}`,
      `¿Tiene dominio?: ${datos.dominio || "no lo ha dicho"}`,
    ];
    if (colorPrueba) lineas.push(`Color que eligió en la prueba de la web: ${colorPrueba}`);
    if (datos.mensaje.trim()) lineas.push("", `Mensaje: ${datos.mensaje.trim()}`);
    if (url.get("utm_source")) lineas.push("", `Llega desde: ${url.get("utm_source")} / ${url.get("utm_medium") || "sin medio"}`);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: datos.nombre.trim(),
          from_email: datos.email.trim(),
          subject: OFERTA_WEB.asunto,
          message: lineas.join("\n"),
          to_email: OFERTA_WEB.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(() => {
        trackEvent("lead_submit", { form_name: "oferta_web", form_subject: datos.plan });
        router.push("/gracias/?de=oferta-web");
      })
      .catch((err) => {
        trackEvent("lead_submit_error", {
          form_name: "oferta_web",
          error_status: String(err?.status ?? "sin_status"),
          error_text: String(err?.text || err?.message || "sin_texto").slice(0, 100),
        });
        setEstado("no-salio");
      });
  };

  return (
    <div className="owr">
      <form className="owr-form" onSubmit={enviar}>
        <div className="owr-fila">
          <label className="owb-campo">
            <span>Nombre *</span>
            <input value={datos.nombre} onChange={cambiar("nombre")} required maxLength={60} autoComplete="name" />
          </label>
          <label className="owb-campo">
            <span>Correo *</span>
            <input ref={emailRef} type="email" value={datos.email} onChange={cambiar("email")} required maxLength={80} autoComplete="email" />
          </label>
        </div>
        <div className="owr-fila">
          <label className="owb-campo">
            <span>Teléfono <em>(si prefieres WhatsApp)</em></span>
            <input type="tel" value={datos.telefono} onChange={cambiar("telefono")} maxLength={20} autoComplete="tel" />
          </label>
          <label className="owb-campo">
            <span>Plan anual *</span>
            <select value={datos.plan} onChange={cambiar("plan")} required>
              <option value="" disabled>Elige uno</option>
              {PLANES.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>
        </div>

        <fieldset className="owb-campo owr-opciones">
          <legend>¿Tienes ya tu propio dominio?</legend>
          <div>
            {DOMINIO.map((op) => (
              <label key={op} className={`owr-chip${datos.dominio === op ? " is-elegido" : ""}`}>
                <input type="radio" name="dominio" value={op} checked={datos.dominio === op} onChange={cambiar("dominio")} />
                {op}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="owb-campo">
          <span>¿Algo que debamos saber? <em>(opcional)</em></span>
          <textarea value={datos.mensaje} onChange={cambiar("mensaje")} maxLength={600} rows={3} placeholder="Por ejemplo: ya tengo web y quiero cambiarla" />
        </label>

        {/* Consentimiento RGPD (art. 6.1.a y 13): obligatorio antes de enviar, como en Contact.jsx */}
        <div className="owr-consentimiento">
          <input type="checkbox" id="owr-privacidad" checked={privacidad} onChange={(e) => setPrivacidad(e.target.checked)} required />
          <label htmlFor="owr-privacidad">
            He leído y acepto la{" "}
            <Link href="/privacy/" target="_blank" rel="noopener noreferrer">Política de Privacidad</Link>.
            Responsable: Germán Martínez Calvente (NIF 77137460Z). Finalidad: gestionar tu reserva y responderte.
            Legitimación: tu consentimiento. El envío se procesa a través de EmailJS como encargado de tratamiento;
            no se ceden datos a terceros para sus propios fines. Puedes ejercer tus derechos de acceso,
            rectificación y supresión en soporte@totalgains.es.
          </label>
        </div>

        {estado === "email" && <p className="owr-nota">Revisa el correo: parece que le falta algo.</p>}
        {estado === "no-salio" && (
          <p className="owr-nota">
            No ha podido salir. Escríbenos por WhatsApp o a {OFERTA_WEB.email} y te guardamos la plaza igual.
          </p>
        )}

        <button type="submit" className="ow-btn ow-btn--fuego owr-enviar" disabled={estado === "enviando"}>
          <Send size={19} aria-hidden="true" /> {estado === "enviando" ? "Reservando…" : "Reservar mi plaza"}
        </button>
      </form>

      <div className="owr-whatsapp">
        <span>¿Prefieres WhatsApp?</span>
        <a
          className="ow-btn ow-btn--whatsapp"
          href={whatsappOfertaWeb(datos.nombre)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("cta_click", { cta_text: "oferta_web_whatsapp", cta_location: "oferta_web_reserva" })}
        >
          <MessageCircle size={20} aria-hidden="true" /> Escríbenos al {OFERTA_WEB.whatsappVisible}
        </a>
      </div>
    </div>
  );
}
