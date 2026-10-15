import { TrendingDown, Info } from "lucide-react";

/**
 * DiscountCustomerValue — Lo que vale a largo plazo un cliente captado con
 * descuento frente a uno captado a precio normal, con el dato de Lewis (2006),
 * Journal of Marketing Research 43(2):195-203, verificado en su resumen
 * (Crossref, 15-oct-2026): «a 35% acquisition discount results in customers
 * with about one-half the long-term value».
 *
 * Igual que LeadResponseDecay: el estudio es de un periódico y un súper
 * online, no de entrenadores. Se traslada la dirección del efecto, no la
 * cifra exacta, y el pie lo dice.
 */

export default function DiscountCustomerValue() {
  return (
    <section
      aria-label="Valor a largo plazo de un cliente captado con un descuento del 35 por ciento frente a uno captado a precio normal, según el estudio de Lewis de 2006: aproximadamente la mitad"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Lo que vale un cliente según cómo entró
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Valor a largo plazo de los clientes captados con descuento, comparado con los que entraron a precio normal.
      </p>

      <div style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, marginBottom: 7, flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.94rem", fontWeight: 800, color: "#22c55e" }}>Entró a precio normal</span>
          <span style={{ fontSize: "0.84rem", color: "var(--text-secondary,#bbb)" }}>100 % de su valor</span>
        </div>
        <div style={{ height: 14, background: "rgba(0,0,0,0.35)", borderRadius: 100, overflow: "hidden" }}>
          <div style={{ width: "100%", height: "100%", background: "#22c55e", borderRadius: 100 }} />
        </div>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, marginBottom: 7, flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.94rem", fontWeight: 800, color: "#ef4444" }}>Entró con un 35 % de descuento</span>
          <span style={{ fontSize: "0.84rem", color: "var(--text-secondary,#bbb)" }}>más o menos la mitad</span>
        </div>
        <div style={{ height: 14, background: "rgba(0,0,0,0.35)", borderRadius: 100, overflow: "hidden" }}>
          <div style={{ width: "50%", height: "100%", background: "#ef4444", borderRadius: 100 }} />
        </div>
      </div>

      <div
        style={{
          marginTop: 20, padding: "14px 16px",
          background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 12,
          display: "flex", gap: 11, alignItems: "flex-start",
        }}
      >
        <TrendingDown size={17} style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }} />
        <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.6 }}>
          <strong style={{ color: "#ef4444" }}>Cuanto más profundo el descuento, menos repiten.</strong> En los dos negocios estudiados, la profundidad del descuento de entrada iba unida a menos compras repetidas y a menos valor por cliente. El descuento no solo te quita margen el primer mes: te trae a otro tipo de cliente.
        </p>
      </div>

      <div style={{ marginTop: 12, display: "flex", gap: 9, alignItems: "flex-start" }}>
        <Info size={15} style={{ color: "var(--text-secondary,#999)", flexShrink: 0, marginTop: 3 }} />
        <p style={{ margin: 0, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
          Lewis, M. (2006). <em>Customer Acquisition Promotions and Customer Asset Value</em>. Journal of Marketing Research, 43(2), 195-203. Datos de un periódico y de un supermercado online, no de entrenadores: lo que se traslada a tu caso es la dirección del efecto, no la cifra exacta.
        </p>
      </div>
    </section>
  );
}
