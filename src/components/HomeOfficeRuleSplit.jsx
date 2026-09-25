import { Zap, Home, Calculator } from "lucide-react";

/**
 * HomeOfficeRuleSplit — Las DOS reglas distintas que conviven en la misma casa
 * cuando un autonomo trabaja desde ella.
 *
 * Existe porque es el error mas repetido del sector: la gente aplica el 30 % a
 * la factura entera, cuando el 30 % se aplica sobre la PROPORCION de metros. Y
 * porque los gastos de titularidad van por proporcion SIN ese 30 %, que casi
 * nadie sabe. El ejemplo numerado de abajo es lo que hace que se entienda.
 */

const reglas = [
  {
    icon: Zap,
    color: "#eab308",
    titulo: "Suministros",
    que: "Agua, gas, electricidad, telefonía e Internet",
    formula: "30 % × (metros afectos ÷ metros totales)",
    ejemplo: "Casa de 80 m². Despacho de 12 m² = 15 % de la vivienda. Factura de luz de 100 €. Deduces 30 % × 15 % = 4,50 €.",
    trampa: "El error más repetido es deducir 30 €, o sea el 30 % de la factura. No es eso.",
  },
  {
    icon: Home,
    color: "#4facfe",
    titulo: "Gastos de titularidad",
    que: "IBI, comunidad, seguro del hogar, amortización",
    formula: "metros afectos ÷ metros totales, sin el 30 %",
    ejemplo: "Mismo despacho de 12 m² sobre 80 m². IBI de 400 € al año. Deduces el 15 %, es decir 60 €.",
    trampa: "Aquí NO se aplica el 30 %. Es una regla distinta para la misma casa, y mucha gente le pone el 30 % igualmente y deduce de menos.",
  },
];

export default function HomeOfficeRuleSplit() {
  return (
    <section
      aria-label="Las dos reglas distintas de deducción para un autónomo que trabaja desde casa: suministros con el 30 por ciento sobre la proporción de metros, y gastos de titularidad por proporción sin ese porcentaje"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Dos reglas distintas para la misma casa
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Si trabajas desde casa, no todo se deduce igual. Y confundirlas cuesta dinero en las dos direcciones.
      </p>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {reglas.map((r) => {
          const Icon = r.icon;
          return (
            <article
              key={r.titulo}
              style={{
                flex: "1 1 300px", minWidth: 0, padding: "20px 22px",
                background: `linear-gradient(180deg, ${r.color}0F 0%, ${r.color}05 100%)`,
                border: `1px solid ${r.color}44`, borderRadius: 16,
              }}
            >
              <header style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `${r.color}22`, border: `1px solid ${r.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: r.color, flexShrink: 0,
                  }}
                >
                  <Icon size={19} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h4 style={{ margin: 0, fontSize: "1.02rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{r.titulo}</h4>
                  <p style={{ margin: "2px 0 0", fontSize: "0.78rem", color: "var(--text-secondary,#999)", lineHeight: 1.4 }}>{r.que}</p>
                </div>
              </header>

              <div style={{ padding: "11px 13px", background: "rgba(0,0,0,0.32)", borderRadius: 10, marginBottom: 12 }}>
                <p style={{ margin: 0, fontSize: "0.68rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>La fórmula</p>
                <p style={{ margin: "4px 0 0", fontSize: "0.9rem", fontWeight: 800, color: r.color, lineHeight: 1.45 }}>{r.formula}</p>
              </div>

              <div style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 12 }}>
                <Calculator size={15} style={{ color: r.color, flexShrink: 0, marginTop: 3 }} />
                <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{r.ejemplo}</p>
              </div>

              <div style={{ padding: "10px 12px", background: "rgba(239,68,68,0.09)", border: "1px solid rgba(239,68,68,0.28)", borderRadius: 8 }}>
                <p style={{ margin: 0, fontSize: "0.81rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
                  <strong style={{ color: "#ef4444" }}>Ojo:</strong> {r.trampa}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.78rem", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        Regla recogida en el artículo 30.2, regla 5.ª de la{" "}
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>
          Ley 35/2006 del IRPF
        </a>, en la redacción que le dio la{" "}
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2017-12207" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>
          Ley 6/2017 del Trabajo Autónomo
        </a>. Requiere haber declarado la afectación parcial de la vivienda en el modelo 036 o 037.
      </p>
    </section>
  );
}
