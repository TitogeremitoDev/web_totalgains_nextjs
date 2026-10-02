import { Calculator } from "lucide-react";

/**
 * FractionalSetCount — La forma de contar series que mejor predijo los
 * resultados en Pelland y col. (Sports Medicine, 2025): la serie cuenta 1 para
 * el músculo protagonista del ejercicio y 0,5 para el que solo ayuda.
 *
 * El ejemplo de abajo es la misma semana de bíceps contada de las tres formas
 * que compara el estudio (todo / solo directas / media serie). Es lo que hace
 * que se entienda que la diferencia no es de matiz: 14, 6 o 10.
 */

const ejercicios = [
  { nombre: "Press de banca", uno: "Pecho", medio: "Tríceps y hombro anterior" },
  { nombre: "Press militar", uno: "Hombro", medio: "Tríceps" },
  { nombre: "Remo con barra", uno: "Espalda", medio: "Bíceps" },
  { nombre: "Jalón al pecho", uno: "Espalda", medio: "Bíceps" },
  { nombre: "Curl de bíceps", uno: "Bíceps", medio: "Nada" },
];

const semana = [
  { ejercicio: "Remo con barra", series: 4, factor: "0,5", total: "2" },
  { ejercicio: "Jalón al pecho", series: 4, factor: "0,5", total: "2" },
  { ejercicio: "Curl con barra", series: 3, factor: "1", total: "3" },
  { ejercicio: "Curl inclinado", series: 3, factor: "1", total: "3" },
];

const recuentos = [
  { forma: "Contando todo", valor: "14", nota: "Parece que va sobrado", color: "#ef4444" },
  { forma: "Solo las directas", valor: "6", nota: "Parece que le falta", color: "#f97316" },
  { forma: "Con la media serie", valor: "10", nota: "La que mejor predijo el resultado", color: "#22c55e" },
];

const celda = { padding: "9px 10px", fontSize: "0.85rem", lineHeight: 1.45, borderBottom: "1px solid rgba(255,255,255,0.06)" };

export default function FractionalSetCount() {
  return (
    <section
      aria-label="Cómo contar las series de cada músculo con la regla de la media serie: cuenta 1 para el músculo protagonista del ejercicio y 0,5 para el que solo ayuda, con un ejemplo de una semana de bíceps contada de tres formas"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        La regla de la media serie
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Cuenta 1 para el músculo protagonista del ejercicio y 0,5 para el que solo ayuda.
      </p>

      <div style={{ overflowX: "auto", marginBottom: 22 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ ...celda, textAlign: "left", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: 0.6, color: "var(--text-secondary,#999)" }}>Ejercicio</th>
              <th style={{ ...celda, textAlign: "left", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: 0.6, color: "#22c55e" }}>Cuenta 1 para</th>
              <th style={{ ...celda, textAlign: "left", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: 0.6, color: "#8fa4f5" }}>Cuenta 0,5 para</th>
            </tr>
          </thead>
          <tbody>
            {ejercicios.map((e) => (
              <tr key={e.nombre}>
                <td style={{ ...celda, fontWeight: 700, color: "var(--text-primary,#ddd)" }}>{e.nombre}</td>
                <td style={{ ...celda, color: "var(--text-secondary,#bbb)" }}>{e.uno}</td>
                <td style={{ ...celda, color: "var(--text-secondary,#bbb)" }}>{e.medio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ padding: "16px 16px 6px", background: "rgba(0,0,0,0.22)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
          <Calculator size={16} style={{ color: "#8fa4f5", flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: "0.92rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>Ejemplo: la semana de bíceps de un atleta</p>
        </div>

        {semana.map((s) => (
          <div key={s.ejercicio} style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: "6px 0", fontSize: "0.86rem", color: "var(--text-secondary,#bbb)", borderBottom: "1px dashed rgba(255,255,255,0.07)" }}>
            <span>{s.ejercicio}</span>
            <span style={{ whiteSpace: "nowrap" }}>
              {s.series} series × {s.factor} = <strong style={{ color: "var(--text-primary,#ddd)" }}>{s.total}</strong>
            </span>
          </div>
        ))}

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "16px 0 10px" }}>
          {recuentos.map((r) => (
            <div
              key={r.forma}
              style={{
                flex: "1 1 160px", minWidth: 0, padding: "12px 12px", borderRadius: 12, textAlign: "center",
                background: `${r.color}14`, border: `1px solid ${r.color}55`,
              }}
            >
              <p style={{ margin: 0, fontSize: "0.72rem", fontWeight: 700, color: r.color, textTransform: "uppercase", letterSpacing: 0.5 }}>{r.forma}</p>
              <p style={{ margin: "4px 0 2px", fontSize: "1.6rem", fontWeight: 800, color: r.color, lineHeight: 1.1 }}>{r.valor}</p>
              <p style={{ margin: 0, fontSize: "0.76rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.4 }}>{r.nota}</p>
            </div>
          ))}
        </div>
      </div>

      <p style={{ marginTop: 16, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        De las tres formas de contar que comparó el análisis de Pelland y col. (2025), la de la media serie fue la que mejor predijo cuánto crecía el músculo y cuánta fuerza se ganaba. Qué cuenta como «ayuda» tiene algo de criterio: el propio estudio reconoce que su clasificación no es del todo objetiva.
      </p>
    </section>
  );
}
