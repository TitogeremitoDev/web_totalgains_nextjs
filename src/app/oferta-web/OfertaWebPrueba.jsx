"use client";

import { useEffect, useRef, useState } from "react";
import { Upload, Sparkles, X, MapPin, Star, Lock, Check, MessageCircle, ArrowDown } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import { OFERTA_WEB, whatsappOfertaWeb } from "@/data/ofertaWeb";
import { useOfertaWeb } from "@/components/useOfertaWeb";

/* ──────────────────────────────────────────────
   «Pon tu nombre y mira tu web»: el entrenador escribe su nombre, a quién
   entrena y su ciudad, sube su logo y elige color, y la web de ejemplo (y su
   app) cambian al momento. «Crear mi web» la monta con una animación y la
   remata con el sello «Tu web incluida».

   El logo NO sale del navegador: se enseña con URL.createObjectURL y no se
   envía a ningún sitio. «¡La quiero!» pasa el nombre y el color al formulario
   de reserva (evento `ow:reservar`, lo escucha OfertaWebReserva).
   ────────────────────────────────────────────── */

const COLORES = ["#ff7a1a", "#e11d48", "#8b5cf6", "#2563eb", "#0d9488", "#16a34a", "#ca8a04", "#0f172a"];

const PASOS = [
  "Poniendo tu logo",
  "Pintando tus colores",
  "Escribiendo tu portada",
  "Preparándola para Google y las IAs",
];
const MS_PASO = 520;

/* Chispas del final: direcciones y giros fijos (nada de Math.random en el render). */
const CHISPAS = Array.from({ length: 34 }, (_, i) => {
  const angulo = ((i * 360) / 34 + (i % 4) * 6) * (Math.PI / 180);
  const distancia = 170 + ((i * 53) % 190);
  return {
    "--dx": `${Math.round(Math.cos(angulo) * distancia)}px`,
    "--dy": `${Math.round(Math.sin(angulo) * distancia * 0.8)}px`,
    "--giro": `${(i * 67) % 540}deg`,
    "--retraso": `${(i % 6) * 35}ms`,
  };
});

const sinAcentos = (t) => t.normalize("NFD").replace(/[̀-ͯ]/g, "");
const dominioDe = (nombre) => (sinAcentos(nombre).toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 22) || "tunombre") + ".es";
const inicialesDe = (nombre) =>
  sinAcentos(nombre.trim())
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("") || "TU";

/* Texto oscuro sobre colores claros (amarillo, verde lima…), blanco sobre el resto. */
const textoSobre = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return 0.299 * r + 0.587 * g + 0.114 * b > 165 ? "#14110f" : "#ffffff";
};

function Logo({ logo, iniciales, peque }) {
  return (
    <span className={`owb-logo${peque ? " peque" : ""}`}>
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element -- es un blob local del visitante, next/image no puede con él
        <img src={logo} alt="" />
      ) : (
        iniciales
      )}
    </span>
  );
}

export default function OfertaWebPrueba() {
  const { activa } = useOfertaWeb();
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [color, setColor] = useState(COLORES[0]);
  const [logo, setLogo] = useState(null);
  const [avisoLogo, setAvisoLogo] = useState("");
  const [fase, setFase] = useState("editando");
  const [paso, setPaso] = useState(0);
  const [vez, setVez] = useState(0);
  const tiempos = useRef([]);
  const logoActual = useRef(null);

  // Al salir de la página: parar la animación y soltar el logo de memoria.
  useEffect(() => () => {
    tiempos.current.forEach(clearTimeout);
    if (logoActual.current) URL.revokeObjectURL(logoActual.current);
  }, []);

  if (!activa) return null;

  const nombreVisto = nombre.trim() || "Tu nombre";
  const ciudadVista = ciudad.trim() || "tu ciudad";
  const tituloVisto = especialidad.trim() || "Entrenamiento personal a tu medida";
  const dominio = dominioDe(nombre);
  const iniciales = inicialesDe(nombre);

  const cambiarLogo = (e) => {
    const archivo = e.target.files?.[0];
    e.target.value = "";
    if (!archivo) return;
    if (!archivo.type.startsWith("image/")) {
      setAvisoLogo("Sube una imagen (PNG, JPG o SVG).");
      return;
    }
    if (archivo.size > 8 * 1024 * 1024) {
      setAvisoLogo("Esa imagen pesa mucho: prueba con una de menos de 8 MB.");
      return;
    }
    if (logoActual.current) URL.revokeObjectURL(logoActual.current);
    logoActual.current = URL.createObjectURL(archivo);
    setLogo(logoActual.current);
    setAvisoLogo("");
  };

  const quitarLogo = () => {
    if (logoActual.current) URL.revokeObjectURL(logoActual.current);
    logoActual.current = null;
    setLogo(null);
  };

  const crear = (e) => {
    e.preventDefault();
    tiempos.current.forEach(clearTimeout);
    tiempos.current = [];
    trackEvent("oferta_web_prueba", { con_logo: Boolean(logo), con_nombre: Boolean(nombre.trim()) });
    // En el móvil la web de ejemplo queda debajo del formulario: bajamos a verla.
    if (window.matchMedia("(max-width: 980px)").matches) {
      document.querySelector(".owb-escena")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFase("lista");
      setVez((v) => v + 1);
      return;
    }
    setFase("montando");
    setPaso(0);
    PASOS.forEach((_, i) => {
      tiempos.current.push(setTimeout(() => setPaso(i + 1), MS_PASO * (i + 1)));
    });
    tiempos.current.push(
      setTimeout(() => {
        setFase("lista");
        setVez((v) => v + 1);
      }, MS_PASO * PASOS.length + 420)
    );
  };

  const laQuiero = () => {
    trackEvent("cta_click", { cta_text: "oferta_web_la_quiero", cta_location: "oferta_web_prueba" });
    window.dispatchEvent(new CustomEvent("ow:reservar", { detail: { nombre: nombre.trim(), color } }));
    document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const vars = {
    "--marca": color,
    "--marca-texto": textoSobre(color),
  };

  return (
    <section id="prueba" className="ow-sec owb-sec" aria-labelledby="owb-t">
      <div className="container ow-ancho">
        <p className="ow-antetitulo">Pruébala ahora</p>
        <h2 id="owb-t" className="ow-h2 owb-h2">Pon tu nombre y mira tu web</h2>
        <p className="owb-entradilla">Escribe tu nombre, sube tu logo, elige tu color y dale a crear.</p>

        <div className="owb">
          <form className="owb-panel" onSubmit={crear}>
            <label className="owb-campo">
              <span>Tu nombre o el de tu marca</span>
              <input value={nombre} onChange={(e) => setNombre(e.target.value)} maxLength={32} placeholder="Laura Ruiz" autoComplete="name" />
            </label>
            <label className="owb-campo">
              <span>¿A quién entrenas?</span>
              <input value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} maxLength={70} placeholder="Fuerza y pérdida de grasa para mujeres de más de 40" />
            </label>
            <label className="owb-campo">
              <span>Tu ciudad</span>
              <input value={ciudad} onChange={(e) => setCiudad(e.target.value)} maxLength={24} placeholder="Granada" autoComplete="address-level2" />
            </label>

            <div className="owb-campo">
              <span>Tu color</span>
              <div className="owb-colores">
                {COLORES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`owb-color${c === color ? " is-elegido" : ""}`}
                    style={{ background: c }}
                    aria-label={`Color ${c}`}
                    aria-pressed={c === color}
                    onClick={() => setColor(c)}
                  />
                ))}
                <label className="owb-color owb-color-libre" title="Otro color">
                  <input type="color" value={color} onChange={(e) => setColor(e.target.value)} aria-label="Elegir otro color" />
                </label>
              </div>
            </div>

            <div className="owb-campo">
              <span>Tu logo <em>(opcional)</em></span>
              {logo ? (
                <div className="owb-logo-subido">
                  <Logo logo={logo} iniciales={iniciales} />
                  <span>¡Listo! Ya sale en tu web y en tu app.</span>
                  <button type="button" onClick={quitarLogo} aria-label="Quitar el logo"><X size={16} /></button>
                </div>
              ) : (
                <label className="owb-subir">
                  <Upload size={18} aria-hidden="true" />
                  <span>Sube tu logo</span>
                  <input type="file" accept="image/*" onChange={cambiarLogo} />
                </label>
              )}
              {avisoLogo && <small className="owb-aviso">{avisoLogo}</small>}
            </div>

            <button type="submit" className="ow-btn ow-btn--fuego owb-crear" disabled={fase === "montando"}>
              <Sparkles size={20} aria-hidden="true" /> {vez > 0 ? "Volver a crearla" : "Crear mi web"}
            </button>
            <p className="owb-privado"><Lock size={12} aria-hidden="true" /> Tu logo no sale de tu dispositivo: solo lo ves tú.</p>
          </form>

          <div className="owb-escena" style={vars}>
            <div key={vez} className={`owb-vista${fase === "lista" ? " is-lista" : ""}`} aria-label={`Vista previa de la web de ${nombreVisto}`} role="img">
              <div className="owb-navegador">
                <div className="owb-barra">
                  <i /><i /><i />
                  <span className="owb-url"><Lock size={11} aria-hidden="true" /> {dominio}</span>
                </div>
                <div className="owb-sitio">
                  <div className="owb-menu">
                    <Logo logo={logo} iniciales={iniciales} />
                    <b className="owb-marca">{nombreVisto}</b>
                    <span className="owb-links"><i>Servicios</i><i>Resultados</i><i>Contacto</i></span>
                  </div>
                  <div className="owb-heroe">
                    <span className="owb-kicker"><MapPin size={13} aria-hidden="true" /> Entrenamiento personal en {ciudadVista}</span>
                    <span className="owb-titulo">{tituloVisto}</span>
                    <span className="owb-boton">Reserva tu primera sesión</span>
                  </div>
                  <div className="owb-servicios">
                    <span><b>Presencial</b>En {ciudadVista}</span>
                    <span><b>Online</b>Desde cualquier sitio</span>
                    <span><b>Tu app</b>Rutina, dieta y progreso</span>
                  </div>
                  <div className="owb-resenas">
                    <span className="owb-estrellas">
                      {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={13} aria-hidden="true" />)}
                    </span>
                    Opiniones de tus clientes
                  </div>
                </div>
              </div>

              <div className="owb-movil">
                <div className="owb-pantalla">
                  <div className="owb-app-cab">
                    <Logo logo={logo} iniciales={iniciales} peque />
                    <b>{nombreVisto}</b>
                  </div>
                  <p className="owb-hola">Hola, Marta</p>
                  <div className="owb-tarjeta fuerte"><small>Rutina de hoy</small><b>Pierna y glúteo</b></div>
                  <div className="owb-fila">
                    <div className="owb-tarjeta"><small>Dieta</small><b>1.850 kcal</b></div>
                    <div className="owb-tarjeta"><small>Racha</small><b>12 días</b></div>
                  </div>
                  <div className="owb-progreso"><span /></div>
                </div>
                <span className="owb-movil-pie">Tu app, con tu marca</span>
              </div>

              {fase === "lista" && (
                <>
                  <div className="owb-onda" aria-hidden="true" />
                  <div className="owb-chispas" aria-hidden="true">
                    {CHISPAS.map((estilo, i) => <span key={i} style={estilo} />)}
                  </div>
                  <div className="owb-sello" aria-hidden="true">
                    <span>Tu web</span>
                    <strong>incluida</strong>
                  </div>
                </>
              )}
            </div>

            {fase === "montando" && (
              <div className="owb-montando" role="status">
                <p>Montando tu web…</p>
                <ul>
                  {PASOS.map((texto, i) => (
                    <li key={texto} className={i < paso ? "is-hecho" : i === paso ? "is-ahora" : ""}>
                      <span className="owb-marca-paso">{i < paso ? <Check size={14} aria-hidden="true" /> : null}</span>
                      {texto}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {fase === "lista" && (
          <div className="owb-resultado" role="status">
            <p className="owb-resultado-t">
              ¡Así quedaría <strong>{dominio}</strong>!
            </p>
            <p className="owb-resultado-s">
              La tuya, lista en {OFERTA_WEB.entrega} desde que nos mandas tu material. Esto es una muestra: tu web de verdad la diseñamos con tus fotos y tus textos.
            </p>
            <div className="owb-resultado-cta">
              <button type="button" className="ow-btn ow-btn--fuego" onClick={laQuiero}>
                ¡La quiero! Reservar mi plaza <ArrowDown size={18} aria-hidden="true" />
              </button>
              <a
                className="ow-btn ow-btn--whatsapp"
                href={whatsappOfertaWeb(nombre)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("cta_click", { cta_text: "oferta_web_whatsapp", cta_location: "oferta_web_prueba" })}
              >
                <MessageCircle size={20} aria-hidden="true" /> Por WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
