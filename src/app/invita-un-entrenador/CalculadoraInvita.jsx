"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

/* ¿Cuántos días ganas? La MISMA cuenta que hace el servidor al primer pago del
   invitado (webhook de Stripe en TotalGains_Backend/index.js) y la tabla de la
   app (ShareMenuModal): días = (precio mensual del invitado ÷ el tuyo) × 30, o
   × 60 si él paga al año, entre 1 y ese máximo. Si tú aún no pagas (gratis o en
   prueba): 10, 20 o 30 días según su plan, el doble si paga al año. Él gana 30
   días siempre. Si cambia la regla en el servidor, cambia aquí. */
const PLANES = [
  { id: "starter", nombre: "Starter", mes: 29.9, anio: 299 },
  { id: "pro", nombre: "Pro", mes: 89.9, anio: 899 },
  { id: "unlimited", nombre: "Unlimited", mes: 149.9, anio: 1499 },
];

export function diasParaTi({ tuPlan, tuPago, suPlan, suPago }) {
  const su = PLANES.find((p) => p.id === suPlan);
  const anual = suPago === "anio";
  const suMensual = anual ? su.anio / 12 : su.mes;
  if (tuPlan === "gratis") {
    const base = suMensual >= 140 ? 30 : suMensual >= 60 ? 20 : 10;
    return anual ? base * 2 : base;
  }
  const tu = PLANES.find((p) => p.id === tuPlan);
  const tuMensual = tuPago === "anio" ? tu.anio / 12 : tu.mes;
  const max = anual ? 60 : 30;
  return Math.min(max, Math.max(1, Math.round((suMensual / tuMensual) * max)));
}

function Opciones({ id, etiqueta, valor, onChange, opciones }) {
  return (
    <fieldset className="calc-grupo">
      <legend>{etiqueta}</legend>
      <div className="calc-opciones">
        {opciones.map((o) => (
          <label key={o.id} className={`calc-op${valor === o.id ? " es-activa" : ""}`}>
            <input type="radio" name={id} value={o.id} checked={valor === o.id} onChange={() => onChange(o.id)} />
            {o.texto}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function CalculadoraInvita() {
  const [tuPlan, setTuPlan] = useState("pro");
  const [tuPago, setTuPago] = useState("mes");
  const [suPlan, setSuPlan] = useState("pro");
  const [suPago, setSuPago] = useState("anio");
  const dias = diasParaTi({ tuPlan, tuPago, suPlan, suPago });
  const planes = PLANES.map((p) => ({ id: p.id, texto: p.nombre }));
  const pagos = [{ id: "mes", texto: "Al mes" }, { id: "anio", texto: "Al año" }];

  return (
    <div className="calc">
      <div className="calc-cab">
        <span className="calc-icono"><Calculator size={20} aria-hidden="true" /></span>
        <h3>¿Cuántos días ganas tú?</h3>
      </div>
      <div className="calc-cuerpo">
        <div className="calc-columna">
          <p className="calc-quien">Tú</p>
          <Opciones id="tu-plan" etiqueta="Tu plan" valor={tuPlan} onChange={setTuPlan} opciones={[...planes, { id: "gratis", texto: "Gratis o en prueba" }]} />
          {tuPlan !== "gratis" && <Opciones id="tu-pago" etiqueta="Pagas" valor={tuPago} onChange={setTuPago} opciones={pagos} />}
        </div>
        <div className="calc-columna">
          <p className="calc-quien">El entrenador que invitas</p>
          <Opciones id="su-plan" etiqueta="Su plan" valor={suPlan} onChange={setSuPlan} opciones={planes} />
          <Opciones id="su-pago" etiqueta="Paga" valor={suPago} onChange={setSuPago} opciones={pagos} />
        </div>
      </div>
      <div className="calc-resultado" aria-live="polite">
        <div><strong>+{dias} días</strong><span>para ti</span></div>
        <div><strong>+30 días</strong><span>para él</span></div>
      </div>
      <p className="calc-nota">La misma cuenta que hace TotalGains con su primer pago en totalgains.es.</p>
    </div>
  );
}
