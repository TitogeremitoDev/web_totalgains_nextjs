import { Check, X } from "lucide-react";

/**
 * AIEquivalenceTrap — El cambio que cuadra en calorias y hunde la proteina.
 *
 * Es el fallo mas dificil de ver porque el numero que todo el mundo mira (kcal)
 * sale perfecto. Por eso el grafico pone las cuatro cifras en fila y deja que
 * el ojo encuentre la unica que se ha movido: si solo validas la primera, la
 * cuarta se te cuela.
 */

const filas = [
  { macro: "Calorías", antes: "520 kcal", despues: "521 kcal", delta: "+0 %", ok: true },
  { macro: "Grasas", antes: "18 g", despues: "19 g", delta: "+6 %", ok: true },
  { macro: "Carbohidratos", antes: "44 g", despues: "52 g", delta: "+18 %", ok: false },
  { macro: "Proteína", antes: "42 g", despues: "34 g", delta: "−19 %", ok: false },
];

export default function AIEquivalenceTrap() {
  return (
    <section
      aria-label="Ejemplo de un cambio de alimento que mantiene las calorías idénticas pero reduce la proteína de la comida en un 19 por ciento"
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
        El cambio que cuadra en calorías y te vacía la proteína
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Misma comida, un alimento sustituido por otro <strong>equivalente en calorías</strong>. Mira las cuatro filas y busca la que se ha movido.
      </p>

      <div style={{ overflowX: "auto" }}>
        <div style={{ minWidth: 420 }}>
          {/* Cabecera */}
          <div style={{ display: "flex", gap: 10, padding: "0 14px 8px", fontSize: "0.7rem", color: "var(--text-secondary,#888)", textTransform: "uppercase", letterSpacing: 0.5 }}>
            <span style={{ flex: "2 1 0" }} />
            <span style={{ flex: "1 1 0", textAlign: "right" }}>Antes</span>
            <span style={{ flex: "1 1 0", textAlign: "right" }}>Después</span>
            <span style={{ flex: "1 1 0", textAlign: "right" }}>Δ</span>
          </div>

          {filas.map((f) => (
            <div
              key={f.macro}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                padding: "13px 14px",
                marginBottom: 8,
                background: f.ok ? "rgba(0,0,0,0.28)" : "rgba(239,68,68,0.10)",
                border: `1px solid ${f.ok ? "rgba(255,255,255,0.06)" : "rgba(239,68,68,0.4)"}`,
                borderRadius: 10,
              }}
            >
              <span style={{ flex: "2 1 0", display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
                <span style={{ color: f.ok ? "#22c55e" : "#ef4444", flexShrink: 0, display: "flex" }}>
                  {f.ok ? <Check size={15} /> : <X size={15} />}
                </span>
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary,#ddd)" }}>{f.macro}</span>
              </span>
              <span style={{ flex: "1 1 0", textAlign: "right", fontSize: "0.86rem", color: "var(--text-secondary,#999)", whiteSpace: "nowrap" }}>{f.antes}</span>
              <span style={{ flex: "1 1 0", textAlign: "right", fontSize: "0.86rem", color: "var(--text-primary,#ddd)", whiteSpace: "nowrap" }}>{f.despues}</span>
              <span
                style={{
                  flex: "1 1 0",
                  textAlign: "right",
                  fontSize: "0.88rem",
                  fontWeight: 800,
                  color: f.ok ? "var(--text-secondary,#888)" : "#ef4444",
                  whiteSpace: "nowrap",
                }}
              >
                {f.delta}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: 16,
          padding: "14px 16px",
          background: "rgba(239,68,68,0.10)",
          border: "1px solid rgba(239,68,68,0.35)",
          borderRadius: 12,
        }}
      >
        <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.6 }}>
          <strong style={{ color: "#ef4444" }}>Por qué se cuela:</strong> cualquier validación que compruebe solo las calorías da esta comida por buena. Y lo es, en calorías. Repetido en las cinco comidas del día, tu cliente en definición se queda sin la proteína que sostiene su masa muscular, comiendo exactamente lo que le pusiste.
        </p>
      </div>

      <p style={{ marginTop: 16, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        La regla: un alimento no es equivalente porque coincidan las calorías. Lo es cuando coinciden las calorías <strong style={{ color: "var(--text-primary,#ddd)" }}>y los macros que te importan en ese plan</strong>.
      </p>
    </section>
  );
}
