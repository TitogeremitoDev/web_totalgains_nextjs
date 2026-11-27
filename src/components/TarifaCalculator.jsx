"use client";

import { useState } from "react";

/**
 * TarifaCalculator — «¿Cuánto deberías cobrar?»: de lo que quieres ganar limpio a
 * la tarifa por cliente. Cuenta, a la vista del lector:
 *   facturación sin IVA = limpio ÷ (1 − impuestos y cuota) + gastos fijos
 *   tarifa por cliente  = facturación ÷ clientes   (con IVA: × 1,21)
 *   sesiones presenciales equivalentes = facturación ÷ 32,50 € ÷ 4,33 semanas
 * 32,50 € es el centro de la media por sesión de Cronoshare (30-35 €, ene-2026).
 * El porcentaje de impuestos lo pone el lector (30 % de salida, el mismo orden que
 * usa la calculadora del precio real por hora de la web). No es asesoramiento fiscal.
 */

const IVA = 0.21;
const SESION_MEDIA = 32.5;
// Miles con punto también en cifras de cuatro dígitos (toLocaleString("es-ES") deja «3157»).
const miles = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const eur = (n) => miles(n) + " €";

function Control({ id, etiqueta, valor, min, max, paso, sufijo, onChange }) {
  return (
    <div style={{ flex: "1 1 240px", minWidth: 0 }}>
      <label htmlFor={id} style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 6, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.4 }}>
        <span>{etiqueta}</span>
        <strong style={{ color: "var(--text-primary,#fff)", whiteSpace: "nowrap" }}>{miles(valor)}{sufijo}</strong>
      </label>
      <input
        id={id} type="range" min={min} max={max} step={paso} value={valor}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "#8fa4f5" }}
      />
    </div>
  );
}

export default function TarifaCalculator() {
  const [limpio, setLimpio] = useState(2000);
  const [impuestos, setImpuestos] = useState(30);
  const [gastos, setGastos] = useState(300);
  const [clientes, setClientes] = useState(25);

  const facturacion = limpio / (1 - impuestos / 100) + gastos;
  const porCliente = facturacion / clientes;
  const sesionesSemana = facturacion / SESION_MEDIA / 4.33;

  return (
    <section
      aria-label="Calculadora de tarifa para entrenadores personales: a partir de lo que quieres ganar limpio al mes, tus gastos y tus clientes, calcula cuánto cobrar a cada cliente"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        ¿Cuánto deberías cobrar?
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Mueve los cuatro controles y mira la tarifa que te sale.
      </p>

      <div style={{ display: "flex", gap: "18px 24px", flexWrap: "wrap", marginBottom: 22 }}>
        <Control id="tc-limpio" etiqueta="Lo que quieres ganar limpio al mes" valor={limpio} min={800} max={6000} paso={100} sufijo=" €" onChange={setLimpio} />
        <Control id="tc-impuestos" etiqueta="Lo que se va en impuestos y cuota de autónomo" valor={impuestos} min={10} max={50} paso={1} sufijo=" %" onChange={setImpuestos} />
        <Control id="tc-gastos" etiqueta="Gastos fijos al mes (sala, seguro, programa…)" valor={gastos} min={0} max={1500} paso={50} sufijo=" €" onChange={setGastos} />
        <Control id="tc-clientes" etiqueta="Clientes que puedes llevar bien" valor={clientes} min={5} max={80} paso={1} sufijo="" onChange={setClientes} />
      </div>

      <div aria-live="polite" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 240px", minWidth: 0, padding: "16px 16px 18px", borderRadius: 14, background: "linear-gradient(180deg, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 100%)", border: "1px solid rgba(34,197,94,0.4)" }}>
          <p style={{ margin: 0, fontSize: "0.74rem", fontWeight: 800, color: "#22c55e", textTransform: "uppercase", letterSpacing: 0.5 }}>Tu tarifa por cliente</p>
          <p style={{ margin: "4px 0 4px", fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.15 }}>{eur(porCliente)} <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-secondary,#aaa)" }}>al mes</span></p>
          <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>Sin IVA. Con el 21 % de IVA, {eur(porCliente * (1 + IVA))}.</p>
        </div>
        <div style={{ flex: "1 1 240px", minWidth: 0, padding: "16px 16px 18px", borderRadius: 14, background: "rgba(102,126,234,0.06)", border: "1px solid rgba(102,126,234,0.25)" }}>
          <p style={{ margin: 0, fontSize: "0.74rem", fontWeight: 800, color: "#8fa4f5", textTransform: "uppercase", letterSpacing: 0.5 }}>Tienes que facturar</p>
          <p style={{ margin: "4px 0 4px", fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.15 }}>{eur(facturacion)} <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-secondary,#aaa)" }}>al mes</span></p>
          <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>Solo con sesiones presenciales serían unas {Math.round(sesionesSemana)} a la semana, a 32,50 € cada una.</p>
        </div>
      </div>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        La cuenta: lo que quieres ganar, dividido entre lo que te queda tras impuestos, más tus gastos, repartido entre tus clientes. El porcentaje de impuestos es orientativo: pon el tuyo. No es asesoramiento fiscal.
      </p>
    </section>
  );
}
