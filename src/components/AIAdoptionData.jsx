import { TrendingUp, AlertTriangle, ShieldCheck } from "lucide-react";

/**
 * AIAdoptionData — Las cifras de adopción y de miedo a la IA entre entrenadores,
 * del informe "The State of AI in Fitness Coaching 2026" (FitBudd, agosto 2026).
 *
 * El bloque separa a propósito dos lecturas que suelen mezclarse: cuánta gente
 * ya la usa (casi todos) y qué teme esa misma gente (equivocarse y quedarse
 * atrás). El cierre lleva la advertencia de procedencia: quien publica el
 * informe vende software de coaching, y no declara muestra ni países.
 */

const bloques = [
  {
    titulo: "Lo que ya hacen",
    icon: TrendingUp,
    color: "#22c55e",
    datos: [
      { pct: 91, label: "Usa IA en su trabajo" },
      { pct: 75, label: "Empezó a usarla entre 2024 y 2025" },
      { pct: 71, label: "La usa de forma habitual" },
      { pct: 71, label: "Piensa usarla más el próximo año" },
      { pct: 59, label: "La usa a diario" },
      { pct: 3, label: "Piensa evitarla del todo" },
    ],
  },
  {
    titulo: "Lo que temen",
    icon: AlertTriangle,
    color: "#eab308",
    datos: [
      { pct: 54, label: "Teme recomendaciones inexactas o inseguras" },
      { pct: 43, label: "Teme quedarse rezagado si no la usa" },
    ],
  },
];

function Barra({ d, color }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 5 }}>
        <span style={{ fontSize: "1.05rem", fontWeight: 900, color, whiteSpace: "nowrap", minWidth: 52 }}>
          {d.pct} %
        </span>
        <span style={{ fontSize: "0.86rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.45 }}>{d.label}</span>
      </div>
      <div style={{ height: 8, background: "rgba(0,0,0,0.35)", borderRadius: 100, overflow: "hidden" }}>
        <div style={{ width: `${d.pct}%`, height: "100%", background: color, borderRadius: 100 }} />
      </div>
    </div>
  );
}

export default function AIAdoptionData() {
  return (
    <section
      aria-label="Cifras de adopción de la inteligencia artificial entre entrenadores personales y miedos declarados, según el informe The State of AI in Fitness Coaching 2026 de FitBudd"
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
        La IA ya no es una tendencia entre entrenadores, es la norma
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Dos lecturas que conviene no mezclar: cuánta gente ya la usa, y qué teme esa misma gente.
      </p>

      <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
        {bloques.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.titulo}
              style={{
                flex: b.datos.length > 3 ? "1 1 320px" : "1 1 260px",
                minWidth: 0,
                padding: "18px 20px",
                background: `linear-gradient(180deg, ${b.color}0F 0%, ${b.color}05 100%)`,
                border: `1px solid ${b.color}44`,
                borderRadius: 16,
              }}
            >
              <header style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div
                  style={{
                    width: 34, height: 34, borderRadius: 10,
                    background: `${b.color}22`, border: `1px solid ${b.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: b.color, flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <h4 style={{ margin: 0, fontSize: "0.98rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{b.titulo}</h4>
              </header>
              {b.datos.map((d, i) => (
                <Barra key={i} d={d} color={b.color} />
              ))}
            </div>
          );
        })}
      </div>

      {/* El consenso, destacado aparte porque es la cifra que ordena el resto */}
      <div
        style={{
          marginTop: 18,
          padding: "18px 20px",
          background: "rgba(102,126,234,0.10)",
          border: "1px solid rgba(102,126,234,0.35)",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <ShieldCheck size={20} style={{ color: "#667eea", flexShrink: 0 }} />
        <span style={{ fontSize: "2rem", fontWeight: 900, color: "#667eea", whiteSpace: "nowrap", lineHeight: 1 }}>77 %</span>
        <p style={{ margin: 0, flex: "1 1 240px", fontSize: "0.9rem", color: "var(--text-primary,#ddd)", lineHeight: 1.5 }}>
          de los entrenadores que ya la usan a diario afirma que <strong>la IA no reemplaza al entrenador humano</strong>. La usan y no creen que les sustituya. Las dos cosas a la vez.
        </p>
      </div>

      <p style={{ marginTop: 16, fontSize: "0.76rem", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Fuente: <em>The State of AI in Fitness Coaching 2026</em>, FitBudd, agosto de 2026.{" "}
        <strong style={{ color: "var(--text-secondary,#bbb)" }}>Léelo con la cabeza puesta:</strong> quien publica el informe vende software de coaching, y la nota no declara ni el tamaño de la muestra ni los países de los encuestados. Las cifras orientan, no zanjan.
      </p>
    </section>
  );
}
