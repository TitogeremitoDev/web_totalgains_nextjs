/**
 * PtPriceByExperience — Precio por sesión u hora según la experiencia del entrenador
 * y según la ciudad. Leído por mí el 27-nov-2026:
 *  - Experiencia: Trustlocal (principiante 15-25 €, con experiencia 30-60 €, alto
 *    nivel o especializado 50-80 € por hora) y Cronoshare (recién titulados 15-25 €
 *    frente a especialistas reputados 50-80 €): coinciden en los dos extremos.
 *  - Ciudad (Cronoshare, 12-ene-2026): Madrid 24-40, Barcelona 20-40, Bilbao 23-39,
 *    Santander 19-32, Valencia 18-30 € por sesión.
 * Escala de las barras: de 0 a 80 €.
 */

const TOPE = 80;
const experiencia = [
  { nombre: "Recién titulado", min: 15, max: 25, color: "#22c55e" },
  { nombre: "Con experiencia", min: 30, max: 60, color: "#8fa4f5" },
  { nombre: "Especialista o alto nivel", min: 50, max: 80, color: "#fa709a" },
];
const ciudades = [
  { nombre: "Madrid", min: 24, max: 40 },
  { nombre: "Barcelona", min: 20, max: 40 },
  { nombre: "Bilbao", min: 23, max: 39 },
  { nombre: "Santander", min: 19, max: 32 },
  { nombre: "Valencia", min: 18, max: 30 },
];

function Fila({ nombre, min, max, color }) {
  return (
    <li style={{ margin: "0 0 10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginBottom: 4 }}>
        <span style={{ fontSize: "0.84rem", fontWeight: 700, color: "var(--text-primary,#fff)", lineHeight: 1.25 }}>{nombre}</span>
        <strong style={{ fontSize: "0.84rem", color: "var(--text-primary,#fff)", whiteSpace: "nowrap" }}>{min}-{max} €</strong>
      </div>
      <div aria-hidden="true" style={{ position: "relative", height: 10, borderRadius: 999, background: "rgba(143,164,245,0.12)" }}>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${(min / TOPE) * 100}%`, width: `${((max - min) / TOPE) * 100}%`, borderRadius: 999, background: color }} />
      </div>
    </li>
  );
}

export default function PtPriceByExperience() {
  return (
    <section
      aria-label="Precio por sesión de un entrenador personal según su experiencia (de 15 a 25 euros recién titulado, de 30 a 60 con experiencia y de 50 a 80 especialista) y según la ciudad: Madrid, Barcelona, Bilbao, Santander y Valencia"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        El precio por sesión, según quién y dónde
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Sesión presencial de una hora. Cada barra va del precio más bajo al más alto.
      </p>

      <h4 style={{ margin: "0 0 12px", fontSize: "0.78rem", fontWeight: 800, color: "#8fa4f5", textTransform: "uppercase", letterSpacing: 0.6 }}>Según la experiencia</h4>
      <ul style={{ listStyle: "none", margin: "0 0 22px", padding: 0 }}>
        {experiencia.map((e) => <Fila key={e.nombre} {...e} />)}
      </ul>

      <h4 style={{ margin: "0 0 12px", fontSize: "0.78rem", fontWeight: 800, color: "#8fa4f5", textTransform: "uppercase", letterSpacing: 0.6 }}>Según la ciudad</h4>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {ciudades.map((c) => <Fila key={c.nombre} {...c} color="#eab308" />)}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Experiencia: Trustlocal y Cronoshare coinciden en los dos extremos. Ciudades: Cronoshare (enero de 2026). Otras fuentes dan precios más altos en el centro de Madrid y Barcelona.
      </p>
    </section>
  );
}
