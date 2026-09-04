import { ArrowDown, ArrowUp, Search } from "lucide-react";

/**
 * AIPlanNumberErrors — Los dos fallos de magnitud que aparecen cuando un sistema
 * confunde la unidad de un alimento: dividir de más (el día entero suma nada) o
 * multiplicar de más (una guarnición pesa como una semana).
 *
 * El grafico existe porque el disparate solo se ve comparando: leidos sueltos,
 * "3,7 kcal" y "22.500 kcal" son numeros; puestos al lado del valor correcto,
 * son alarmas. Cada card cierra con la senal que lo delata sin hacer cuentas.
 */

const fallos = [
  {
    dir: "abajo",
    icon: ArrowDown,
    color: "#4facfe",
    titulo: "Dividido de más",
    subtitulo: "La unidad no eran gramos",
    ejemplo: "1 taza de avena",
    malo: "3,7 kcal",
    bueno: "≈ 760 kcal",
    explicacion: "Pasa cuando el alimento se mide en tazas, unidades o rebanadas pero el cálculo lo trata como si el número fueran gramos. El resultado se queda dividido entre cien.",
    senal: "El día entero te suma 40 kcal. No hace falta revisar comida por comida: si el total diario no daría ni para un desayuno, la unidad está mal en alguna parte.",
  },
  {
    dir: "arriba",
    icon: ArrowUp,
    color: "#ef4444",
    titulo: "Multiplicado de más",
    subtitulo: "Falta dividir entre cien",
    ejemplo: "150 g de patata cruda",
    malo: "22.500 kcal",
    bueno: "≈ 130 kcal",
    explicacion: "El valor por cada 100 g se aplica como si fuera el valor total del alimento. Una guarnición acaba pesando lo que come una persona en diez días.",
    senal: "Una sola comida se te va por encima de 1.500 kcal sin que lleve nada raro. Ordena las opciones de mayor a menor calorías y el error salta el primero.",
  },
];

function Card({ f }) {
  const Icon = f.icon;
  return (
    <article
      style={{
        flex: "1 1 300px",
        minWidth: 0,
        padding: "20px 22px",
        background: `linear-gradient(180deg, ${f.color}0F 0%, ${f.color}05 100%)`,
        border: `1px solid ${f.color}44`,
        borderRadius: 16,
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
        <div
          style={{
            width: 36, height: 36, borderRadius: 10,
            background: `${f.color}22`, border: `1px solid ${f.color}55`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: f.color, flexShrink: 0,
          }}
        >
          <Icon size={20} />
        </div>
        <div style={{ minWidth: 0 }}>
          <h4 style={{ margin: 0, fontSize: "1.02rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{f.titulo}</h4>
          <p style={{ margin: "2px 0 0", fontSize: "0.74rem", color: f.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{f.subtitulo}</p>
        </div>
      </header>

      {/* El contraste: lo que sale contra lo que debería salir */}
      <div style={{ padding: "12px 14px", background: "rgba(0,0,0,0.3)", borderRadius: 10, marginBottom: 12 }}>
        <p style={{ margin: "0 0 8px", fontSize: "0.78rem", color: "var(--text-secondary,#bbb)" }}>{f.ejemplo}</p>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontSize: "1.5rem", fontWeight: 900, color: f.color, whiteSpace: "nowrap" }}>{f.malo}</span>
          <span style={{ fontSize: "0.78rem", color: "var(--text-secondary,#888)", whiteSpace: "nowrap" }}>en vez de</span>
          <span style={{ fontSize: "1.05rem", fontWeight: 800, color: "#22c55e", whiteSpace: "nowrap" }}>{f.bueno}</span>
        </div>
      </div>

      <p style={{ margin: "0 0 12px", fontSize: "0.85rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{f.explicacion}</p>

      <div style={{ padding: "10px 12px", background: `${f.color}12`, border: `1px solid ${f.color}35`, borderRadius: 8, display: "flex", gap: 9, alignItems: "flex-start" }}>
        <Search size={15} style={{ color: f.color, flexShrink: 0, marginTop: 3 }} />
        <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
          <strong style={{ color: "var(--text-primary,#ddd)" }}>Cómo se caza:</strong> {f.senal}
        </p>
      </div>
    </article>
  );
}

export default function AIPlanNumberErrors() {
  return (
    <section
      aria-label="Los dos errores de magnitud en los números de un plan nutricional generado: dividir de más cuando la unidad no son gramos, y multiplicar de más cuando falta dividir entre cien"
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)",
        borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Cuando el número está mal, lo está por cien
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Los fallos de unidad no producen desviaciones pequeñas. Producen disparates, y esa es la buena noticia: se ven a simple vista si sabes qué mirar.
      </p>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {fallos.map((f) => (
          <Card key={f.dir} f={f} />
        ))}
      </div>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Ninguno de los dos exige que recalcules nada. Los dos se cazan mirando el total del día y la comida más calórica, en veinte segundos, antes de darle a enviar.
      </p>
    </section>
  );
}
