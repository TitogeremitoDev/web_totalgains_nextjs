/**
 * ContestPrepRateScale — Las tres zonas de ritmo de pérdida de peso en una
 * preparación natural, en porcentaje del peso corporal por semana. Las etiquetas
 * (cómodo, exigente, agresivo) y sus cortes son los del panel «Corte de peso» del
 * Modo Elite de TotalGains; los rangos los dan los estudios (5-nov-2026):
 *  - Helms, Aragon y Fitschen 2014 (JISSN 11:20): 0,5-1 % por semana, y el ensayo
 *    de Garthe (0,7 % frente a 1,4 %) que recoge esa revisión.
 *  - Roberts y colaboradores 2020 (J Hum Kinet 71:79-108): 0,5 % o menos.
 * El ejemplo de 80 kg es aritmética: 0,5 % = 0,4 kg; 1 % = 0,8 kg.
 */

const zonas = [
  {
    color: "#22c55e",
    nombre: "Cómodo",
    rango: "Hasta el 0,5 %",
    ejemplo: "80 kg: hasta 0,4 kg por semana",
    texto: "Lo que prefiere la revisión de 2020 para proteger el músculo.",
  },
  {
    color: "#eab308",
    nombre: "Exigente",
    rango: "Del 0,5 % al 1 %",
    ejemplo: "80 kg: de 0,4 a 0,8 kg por semana",
    texto: "El rango que recomendaba la revisión de 2014. Pide vigilar de cerca el entreno, el hambre y el descanso.",
  },
  {
    color: "#fa709a",
    nombre: "Agresivo",
    rango: "Más del 1 %",
    ejemplo: "80 kg: más de 0,8 kg por semana",
    texto: "Fuera de lo recomendado. En el ensayo con deportistas, perder un 1,4 % por semana no sumó masa magra.",
  },
];

const marcas = ["0 %", "0,5 %", "1 %", "1,5 %"];

export default function ContestPrepRateScale() {
  return (
    <section
      aria-label="Zonas de ritmo de pérdida de peso en una preparación natural: cómodo hasta el 0,5 % por semana, exigente del 0,5 % al 1 % y agresivo por encima del 1 %, con el ejemplo de un atleta de 80 kilos"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        ¿A qué ritmo está bajando tu atleta?
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Porcentaje de su peso corporal por semana, con el ejemplo de un atleta de 80 kg.
      </p>

      <div aria-hidden="true" style={{ display: "flex", gap: 3, height: 12, marginBottom: 6 }}>
        {zonas.map((z, i) => (
          <div
            key={z.nombre}
            style={{
              flex: 1, background: z.color,
              borderRadius: i === 0 ? "999px 0 0 999px" : i === zonas.length - 1 ? "0 999px 999px 0" : 0,
            }}
          />
        ))}
      </div>
      <div aria-hidden="true" style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, fontSize: "0.74rem", fontWeight: 700, color: "var(--text-secondary,#aaa)" }}>
        {marcas.map((m) => <span key={m}>{m}</span>)}
      </div>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {zonas.map((z) => (
          <li
            key={z.nombre}
            style={{
              flex: "1 1 230px", minWidth: 0, padding: "16px 16px 18px",
              background: `linear-gradient(180deg, ${z.color}12 0%, ${z.color}05 100%)`,
              border: `1px solid ${z.color}44`, borderRadius: 14,
            }}
          >
            <p style={{ margin: 0, fontSize: "0.72rem", fontWeight: 800, color: z.color, textTransform: "uppercase", letterSpacing: 0.6 }}>{z.nombre}</p>
            <p style={{ margin: "2px 0 8px", fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.25 }}>{z.rango}</p>
            <p style={{ margin: "0 0 8px", fontSize: "0.84rem", fontWeight: 700, color: "var(--text-primary,#fff)", lineHeight: 1.4 }}>{z.ejemplo}</p>
            <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{z.texto}</p>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Los nombres de las zonas son los del Modo Elite de TotalGains. Los rangos salen de Helms y colaboradores (2014) y Roberts y colaboradores (2020).
      </p>
    </section>
  );
}
