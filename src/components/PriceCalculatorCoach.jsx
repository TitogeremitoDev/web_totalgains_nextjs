"use client";

import { useState, useMemo } from "react";

const SALARIO_MINIMO_HORA = 8.87;
const DEPENDIENTE_MERCADONA_HORA = 10.5;
const INGENIERO_JUNIOR_HORA = 15.3;
const IVA_ESPANA = 0.21;

export default function PriceCalculatorCoach() {
  const [clientes, setClientes] = useState(25);
  const [precioMes, setPrecioMes] = useState(100);
  const [horasSemana, setHorasSemana] = useState(45);
  const [semanasVacaciones, setSemanasVacaciones] = useState(4);
  const [precioIncluyeIva, setPrecioIncluyeIva] = useState(true);

  const r = useMemo(() => {
    // El IVA repercutido NO es ingreso del coach — lo recauda para Hacienda.
    // Si el precio ya incluye IVA (típico: coach cotiza precio final al cliente),
    // hay que restar el 21 % para obtener la base imponible real (ingreso propio).
    const precioMesSinIva = precioIncluyeIva ? precioMes / (1 + IVA_ESPANA) : precioMes;
    const ingresoMensualBruto = clientes * precioMes;
    const ingresoMensual = clientes * precioMesSinIva;
    const ivaMensualRepercutido = ingresoMensualBruto - ingresoMensual;
    const semanasTrabajadas = Math.max(1, 52 - semanasVacaciones);
    const horasAno = horasSemana * semanasTrabajadas;
    const horasMes = horasAno / 12;
    const tarifaHoraReal = horasMes > 0 ? ingresoMensual / horasMes : 0;
    const tarifaHoraPercibida = precioMesSinIva / 2;
    const gap = tarifaHoraPercibida - tarifaHoraReal;
    const cocienteVsPercibida = tarifaHoraPercibida > 0 ? (tarifaHoraReal / tarifaHoraPercibida) : 0;
    let comparadorTexto = "";
    let comparadorColor = "#22c55e";
    if (tarifaHoraReal < SALARIO_MINIMO_HORA) {
      comparadorTexto = `Cobras menos por hora que el Salario Mínimo Interprofesional (${SALARIO_MINIMO_HORA} €/h con IVA incl.).`;
      comparadorColor = "#ef4444";
    } else if (tarifaHoraReal < DEPENDIENTE_MERCADONA_HORA) {
      comparadorTexto = `Cobras menos por hora que un dependiente de Mercadona (${DEPENDIENTE_MERCADONA_HORA} €/h estimado).`;
      comparadorColor = "#ef4444";
    } else if (tarifaHoraReal < INGENIERO_JUNIOR_HORA) {
      comparadorTexto = `Cobras algo más por hora que un dependiente pero menos que un ingeniero junior (${INGENIERO_JUNIOR_HORA} €/h estimado).`;
      comparadorColor = "#eab308";
    } else if (tarifaHoraReal < 30) {
      comparadorTexto = `Cobras mejor que un profesional cualificado por cuenta ajena en España, pero por debajo del rango de coach premium.`;
      comparadorColor = "#eab308";
    } else if (tarifaHoraReal < 60) {
      comparadorTexto = `Cobras en rango de coach consolidado con operativa profesional.`;
      comparadorColor = "#22c55e";
    } else {
      comparadorTexto = `Cobras en rango premium/élite. La escala te sale rentable de verdad.`;
      comparadorColor = "#22c55e";
    }
    return {
      ingresoMensual,
      ingresoMensualBruto,
      ivaMensualRepercutido,
      precioMesSinIva,
      horasMes,
      tarifaHoraReal,
      tarifaHoraPercibida,
      gap,
      cocienteVsPercibida,
      comparadorTexto,
      comparadorColor,
    };
  }, [clientes, precioMes, horasSemana, semanasVacaciones, precioIncluyeIva]);

  //   = non-breaking space entre número y €/h/mes para evitar que la unidad
  // salte a la siguiente línea en anchos estrechos (fix visual columnas del grid).
  const fmt = (n) => n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const fmtInt = (n) => Math.round(n).toLocaleString("es-ES");
  const eur = (n, unit = "") => `${fmt(n)} €${unit}`;
  const eurInt = (n, unit = "") => `${fmtInt(n)} €${unit}`;

  const inputRow = (label, value, setter, min, max, step, unit) => (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <label style={{ fontSize: "0.86rem", fontWeight: 600, color: "var(--text-primary,#ddd)" }}>{label}</label>
        <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-light,#8fa4f5)", whiteSpace: "nowrap" }}>
          {fmtInt(value)}{" "}<span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--text-secondary,#aaa)" }}>{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setter(Number(e.target.value))}
        style={{ width: "100%", accentColor: "var(--primary,#667eea)" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "var(--text-secondary,#888)", marginTop: 2 }}>
        <span style={{ whiteSpace: "nowrap" }}>{fmtInt(min)}{" "}{unit}</span>
        <span style={{ whiteSpace: "nowrap" }}>{fmtInt(max)}{" "}{unit}</span>
      </div>
    </div>
  );

  return (
    <section
      aria-label="Calculadora del precio real por hora del coach online"
      style={{
        maxWidth: 720,
        margin: "48px auto",
        padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.08) 0%, rgba(118,75,162,0.05) 100%)",
        border: "1px solid rgba(102,126,234,0.28)",
        borderRadius: 20,
      }}
    >
      <h2 style={{ margin: "0 0 6px", fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>
        Calculadora: ¿cuánto ganas realmente por hora?
      </h2>
      <p style={{ margin: "0 0 24px", fontSize: "0.9rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Introduce tu operativa real. La calculadora divide tu ingreso mensual entre tus horas de trabajo mensuales — incluyendo admin, comunicación, revisiones y diseño de planes — no solo las sesiones facturables.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
        <div>
          {inputRow("Clientes activos", clientes, setClientes, 1, 100, 1, "")}
          {inputRow("Precio mensual por cliente", precioMes, setPrecioMes, 30, 300, 5, " €")}
        </div>
        <div>
          {inputRow("Horas semanales de trabajo real", horasSemana, setHorasSemana, 10, 70, 1, " h")}
          {inputRow("Semanas de vacaciones/año", semanasVacaciones, setSemanasVacaciones, 0, 12, 1, "")}
        </div>
      </div>

      <label style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8, marginBottom: 14, padding: "10px 14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={precioIncluyeIva}
          onChange={(e) => setPrecioIncluyeIva(e.target.checked)}
          style={{ width: 18, height: 18, accentColor: "var(--primary,#667eea)", cursor: "pointer" }}
        />
        <span style={{ fontSize: "0.86rem", color: "var(--text-primary,#ddd)", lineHeight: 1.4 }}>
          <strong>Mi precio mensual ya incluye el IVA (21 %)</strong>
          {precioIncluyeIva ? (
            <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-secondary,#aaa)", marginTop: 2 }}>
              Restando el IVA, tu base imponible real por cliente son <strong style={{ whiteSpace: "nowrap" }}>{eur(r.precioMesSinIva, "/mes")}</strong> (el IVA no es tu ingreso: lo recaudas para Hacienda).
            </span>
          ) : (
            <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-secondary,#aaa)", marginTop: 2 }}>
              Marcado como sin IVA: los <span style={{ whiteSpace: "nowrap" }}>{eurInt(precioMes, "/mes")}</span> ya son tu base imponible. Si al cliente le cobras el precio + 21 %, esta opción es la correcta.
            </span>
          )}
        </span>
      </label>

      <div style={{ marginTop: 20, padding: "20px", background: "rgba(0,0,0,0.28)", borderRadius: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14 }}>
          <div>
            <p style={{ margin: 0, fontSize: "0.72rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>Ingreso mensual (base sin IVA)</p>
            <p style={{ margin: "4px 0 0", fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary,#fff)", whiteSpace: "nowrap" }}>{eurInt(r.ingresoMensual)}</p>
            {precioIncluyeIva && (
              <p style={{ margin: "2px 0 0", fontSize: "0.68rem", color: "var(--text-secondary,#888)", lineHeight: 1.5 }}>
                Cobrado bruto: <span style={{ whiteSpace: "nowrap" }}>{eurInt(r.ingresoMensualBruto)}</span> · IVA a Hacienda: <span style={{ whiteSpace: "nowrap" }}>{eurInt(r.ivaMensualRepercutido)}</span>
              </p>
            )}
          </div>
          <div>
            <p style={{ margin: 0, fontSize: "0.72rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>Horas/mes trabajadas</p>
            <p style={{ margin: "4px 0 0", fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary,#fff)", whiteSpace: "nowrap" }}>{fmtInt(r.horasMes)}{" "}h</p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: "0.72rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>Tarifa real por hora</p>
            <p style={{ margin: "4px 0 0", fontSize: "1.6rem", fontWeight: 800, color: r.comparadorColor, whiteSpace: "nowrap" }}>{eur(r.tarifaHoraReal, "/h")}</p>
            <p style={{ margin: "2px 0 0", fontSize: "0.68rem", color: "var(--text-secondary,#888)" }}>Bruta antes de IRPF y cuota autónomo</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20, padding: "16px 18px", background: "rgba(255,255,255,0.03)", border: `1px solid ${r.comparadorColor}44`, borderRadius: 12 }}>
        <p style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.55, color: "var(--text-primary,#ddd)" }}>
          <strong style={{ color: r.comparadorColor }}>Diagnóstico: </strong>
          {r.comparadorTexto}
        </p>
        <p style={{ margin: "10px 0 0", fontSize: "0.82rem", lineHeight: 1.55, color: "var(--text-secondary,#aaa)" }}>
          Creías cobrar <strong style={{ color: "var(--text-primary,#ddd)", whiteSpace: "nowrap" }}>{eur(r.tarifaHoraPercibida, "/h")}</strong> (precio mensual base sin IVA ÷ 2 horas de "sesión ideal"). Realmente cobras{" "}
          <strong style={{ color: r.comparadorColor, whiteSpace: "nowrap" }}>{eur(r.tarifaHoraReal, "/h")}</strong>.{" "}
          Diferencia: <strong style={{ color: r.gap > 0 ? "#ef4444" : "#22c55e", whiteSpace: "nowrap" }}>{r.gap > 0 ? "−" : "+"}{eur(Math.abs(r.gap), "/h")}</strong>{" "}
          ({(r.cocienteVsPercibida * 100).toFixed(0)}% de lo que creías cobrar).
        </p>
      </div>

      <p style={{ marginTop: 18, fontSize: "0.72rem", color: "var(--text-secondary,#888)", lineHeight: 1.5 }}>
        <strong style={{ color: "var(--text-primary,#aaa)" }}>Cómo se calcula:</strong> ingreso mensual (base imponible sin IVA, porque el 21 % de IVA repercutido no es tu ingreso — lo recaudas para Hacienda) dividido entre las horas mensuales reales de trabajo (semanas efectivas × horas/sem). El resultado es tu tarifa <em>bruta</em> por hora, aún antes de descontar IRPF y la cuota de autónomo (tramo variable 2026: 200-590 €/mes según rendimiento neto). Después de impuestos, el <em>neto</em> por hora suele quedar un 30-45 % por debajo del bruto.<br /><br />
        <strong style={{ color: "var(--text-primary,#aaa)" }}>Referencias orientativas de comparación</strong> (España 2026): SMI ~8,87 €/h bruto, dependiente de supermercado grande ~10,5 €/h, ingeniero junior por cuenta ajena ~15,3 €/h, coach consolidado con operativa profesional ~30-45 €/h, coach premium/élite ~60+ €/h. La calculadora es orientativa y no sustituye una contabilidad real; te sirve para saber si el precio de tus servicios refleja el trabajo total que estás dedicando.
      </p>
    </section>
  );
}
