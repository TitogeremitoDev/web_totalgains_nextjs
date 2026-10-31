"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Send, Check } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import { GUIAS, GUIAS_API } from "@/data/guias";
import "./GuiasGratis.css";

/* «Llévate las guías en PDF»: quien lee y aún no se registra deja su correo y
   elige las guías que quiere (o todas). El servidor guarda la petición y le
   manda un correo con las guías y, si abre alguna, 3 consejos (GUIAS_API).
   El texto de la casilla es el que el servidor guarda como permiso: si cambia
   aquí, cambia PERMISO_TEXTO en TotalGains_Backend/routes/guiasRoutes.js. */
export default function GuiasGratis({ donde = "blog" }) {
  const [elegidas, setElegidas] = useState(() => new Set(GUIAS.map((g) => g.id)));
  const [email, setEmail] = useState("");
  const [acepto, setAcepto] = useState(false);
  const [trampa, setTrampa] = useState("");
  // listo · revisar · enviando · hecho · muchas (límite por hora) · otra-vez
  const [estado, setEstado] = useState("listo");

  const alternar = (id) => setElegidas((s) => {
    const n = new Set(s);
    if (n.has(id)) n.delete(id); else n.add(id);
    return n;
  });
  const todas = elegidas.size === GUIAS.length;

  const enviar = async (e) => {
    e.preventDefault();
    if (estado === "enviando") return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || !acepto || elegidas.size === 0) {
      setEstado("revisar");
      return;
    }
    setEstado("enviando");
    const corte = new AbortController();
    const tope = setTimeout(() => corte.abort(), 12000);
    try {
      const r = await fetch(GUIAS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), guias: [...elegidas], acepto: true, origen: donde, web: trampa }),
        signal: corte.signal,
      });
      if (r.status === 429) { setEstado("muchas"); return; }
      if (r.status === 400) { setEstado("revisar"); return; }
      if (!r.ok) throw new Error(String(r.status));
      trackEvent("lead_submit", { form_name: "guias_pdf", form_subject: [...elegidas].join(","), cta_location: donde });
      setEstado("hecho");
    } catch {
      setEstado("otra-vez");
    } finally {
      clearTimeout(tope);
    }
  };

  if (estado === "hecho") {
    return (
      <section className="gg gg--hecho" role="status">
        <Check size={28} aria-hidden="true" />
        <p><strong>¡Hecho!</strong> Te llegan a {email.trim()} en un par de minutos. Si no las ves, mira en «Promociones» o en el correo no deseado.</p>
      </section>
    );
  }

  return (
    <section className="gg" aria-labelledby={`gg-t-${donde}`}>
      <div className="gg-cab">
        <span className="gg-icono"><BookOpen size={22} aria-hidden="true" /></span>
        <div>
          <h2 id={`gg-t-${donde}`}>Llévate las guías en PDF, gratis</h2>
          <p>Elige las que te sirvan (o todas) y te las mandamos al correo.</p>
        </div>
      </div>
      <form onSubmit={enviar} noValidate>
        <div className="gg-lista">
          {GUIAS.map((g) => (
            <label key={g.id} className={`gg-guia${elegidas.has(g.id) ? " es-elegida" : ""}`}>
              <input type="checkbox" checked={elegidas.has(g.id)} onChange={() => alternar(g.id)} />
              <Image className="gg-portada" src={`/images/guias/${g.id}.webp`} alt="" width={360} height={509} sizes="64px" />
              <span><strong>{g.titulo}</strong><span className="gg-texto">{g.texto}</span></span>
            </label>
          ))}
        </div>
        <button type="button" className="gg-todas" onClick={() => setElegidas(todas ? new Set() : new Set(GUIAS.map((g) => g.id)))}>
          {todas ? "Quitar todas" : "Elegir todas"}
        </button>
        <div className="gg-fila">
          <label className="gg-email">
            <span>Tu correo</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.com" autoComplete="email" />
          </label>
          <button type="submit" className="gg-enviar" disabled={estado === "enviando"}>
            <Send size={17} aria-hidden="true" /> {estado === "enviando" ? "Enviando…" : `Enviármelas (${elegidas.size})`}
          </button>
        </div>
        <label className="gg-acepto">
          <input type="checkbox" checked={acepto} onChange={(e) => setAcepto(e.target.checked)} />
          <span>Acepto la <Link href="/privacy/" target="_blank">política de privacidad</Link> y recibir hasta 3 correos con consejos. Te das de baja con un clic.</span>
        </label>
        <input className="gg-trampa" type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" value={trampa} onChange={(e) => setTrampa(e.target.value)} />
        {estado === "revisar" && <p className="gg-aviso" role="alert">Revisa el correo, elige al menos una guía y marca la casilla.</p>}
        {estado === "muchas" && <p className="gg-aviso" role="alert">Ya nos has pedido guías varias veces seguidas. Prueba otra vez en un rato.</p>}
        {estado === "otra-vez" && <p className="gg-aviso" role="alert">Ahora mismo no hemos podido enviarlas. Prueba otra vez en un momento.</p>}
      </form>
    </section>
  );
}
