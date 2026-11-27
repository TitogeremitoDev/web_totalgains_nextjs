import { BadgeEuro, Briefcase } from "lucide-react";

/**
 * PtSalaryCompare — Cuánto gana un entrenador personal: en nómina frente a por su
 * cuenta. Comprobado por mí el 27-nov-2026 en el BOE:
 *  - V Convenio colectivo estatal de instalaciones deportivas y gimnasios
 *    (BOE-A-2024-1506, 26-ene-2024), tablas salariales de 2025, las últimas que
 *    trae: monitor unidisciplinar (grupo 4, nivel I) 16.279,89 € al año y monitor
 *    multidisciplinar (grupo 3, nivel II) 16.680,87 €; 9,29 y 9,52 € por hora.
 *    El convenio no tiene una categoría «entrenador personal».
 *  - Real Decreto 126/2026 (BOE-A-2026-3815): salario mínimo de 2026, 1.221 € al
 *    mes en 14 pagas (17.094 € al año), por encima de esas tablas.
 *  - Por su cuenta: aritmética con el precio medio por sesión de Cronoshare
 *    (30-35 €): 20 sesiones a la semana × 4,33 semanas = de 2.598 a 3.031 € al mes.
 */

const lados = [
  {
    icon: BadgeEuro, color: "#8fa4f5", titulo: "En nómina, en un gimnasio", cifra: "Desde 1.221 € brutos al mes",
    lineas: [
      "En 14 pagas: 17.094 € al año. Es el salario mínimo de 2026, a jornada completa.",
      "El convenio de gimnasios fija para un monitor entre 16.280 y 16.681 € al año (tablas de 2025), así que hoy manda el salario mínimo.",
      "Aparte van los pluses y lo que cada gimnasio pague por las sesiones de entrenamiento personal.",
    ],
  },
  {
    icon: Briefcase, color: "#22c55e", titulo: "Por su cuenta, como autónomo", cifra: "De 2.600 a 3.000 € facturados al mes",
    lineas: [
      "Es un ejemplo: 20 sesiones a la semana a 30 o 35 € cada una.",
      "De ahí hay que quitar el IVA, la cuota de autónomos, el IRPF y los gastos: alquiler de sala, seguro, material y programa.",
      "El techo lo ponen las horas: por eso muchos añaden clientes online.",
    ],
  },
];

export default function PtSalaryCompare() {
  return (
    <section
      aria-label="Cuánto gana un entrenador personal en España: en nómina desde 1.221 euros brutos al mes en 14 pagas, y por su cuenta de 2.600 a 3.000 euros facturados al mes con 20 sesiones a la semana"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Cuánto gana: en nómina o por su cuenta
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Dos formas de trabajar con números muy distintos.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {lados.map((l) => {
          const Icon = l.icon;
          return (
            <li
              key={l.titulo}
              style={{
                flex: "1 1 320px", minWidth: 0, padding: "16px 16px 18px",
                background: `linear-gradient(180deg, ${l.color}12 0%, ${l.color}05 100%)`,
                border: `1px solid ${l.color}44`, borderRadius: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, color: l.color }}>
                <Icon size={17} />
                <p style={{ margin: 0, fontSize: "0.76rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5 }}>{l.titulo}</p>
              </div>
              <p style={{ margin: "0 0 10px", fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.25 }}>{l.cifra}</p>
              <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                {l.lineas.map((t) => (
                  <li key={t} style={{ margin: "0 0 5px", fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>{t}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Fuentes: convenio estatal de instalaciones deportivas y gimnasios y Real Decreto 126/2026, los dos en el BOE. El ejemplo del autónomo es una cuenta, no una media.
      </p>
    </section>
  );
}
