import { Check, X, FileText, Swords, AlertTriangle } from "lucide-react";

/**
 * CoachDeductiblesList — Lo que un entrenador autonomo SI puede deducir, con lo
 * que hace falta para justificarlo, y las cinco que Hacienda tumba.
 *
 * La columna de justificacion es la que de verdad usa el lector: casi nadie
 * pierde la deduccion por no tener derecho, la pierde por no tener el papel.
 * El bloque rojo del final es el que se comparte.
 */

const deducibles = [
  { gasto: "Cuota de autónomos", justifica: "El recibo de la Seguridad Social. Se deduce íntegra." },
  { gasto: "Software de gestión de clientes", justifica: "Factura a tu nombre fiscal, no a tu nombre a secas." },
  { gasto: "Seguro de responsabilidad civil", justifica: "Póliza y recibos. Es el gasto que más se olvida y en este oficio es casi obligatorio." },
  { gasto: "Formación y certificaciones del sector", justifica: "Factura, y que la formación tenga relación directa con tu actividad." },
  { gasto: "Material que usas para trabajar", justifica: "Factura. Gomas, bandas, cintas métricas, básculas: lo que usas CON clientes." },
  { gasto: "Gestoría y asesoría", justifica: "Factura mensual. Se deduce entera." },
  { gasto: "Teléfono e Internet", justifica: "Si la línea es solo profesional, entera. Si es la de casa, entra en la regla de suministros." },
  { gasto: "Suministros de la vivienda afecta", justifica: "Haberlo declarado en el 036 o 037, y aplicar la fórmula correcta." },
  { gasto: "Manutención en desplazamientos", justifica: "Restaurante u hostelería, pago electrónico y máximo 26,67 € al día en territorio nacional." },
  { gasto: "Publicidad y promoción", justifica: "Factura de la plataforma. Los anuncios de redes entran." },
];

const ring = [
  {
    gasto: "El coche",
    matiz: "Tu gestora te dirá que depende de la actividad y de que puedas demostrarlo. Es de los gastos que más paralelas provoca, así que aquí no te fíes de ningún blog: métete en el ring con tu asesor y que decida quien firma.",
  },
  {
    gasto: "Ropa deportiva PERSONALIZADA",
    matiz: "Unas mallas con tu marca sí pueden contar como uniforme de trabajo en determinadas actividades. Las mismas mallas sin personalizar, no. La diferencia es literalmente el logo.",
  },
  {
    gasto: "Suplementos para VENDER",
    matiz: "Si los compras para revenderlos, no es consumo: es mercancía. Pero implica dar de alta un epígrafe nuevo y ahí aparece la prorrata de IVA. Ver el aviso de abajo antes de hacer nada.",
  },
];

const rechazados = [
  { gasto: "La ropa deportiva SIN personalizar", porque: "Si te la puedes poner el domingo, es tuya y no de tu actividad. Personalizada es otra historia, y está arriba." },
  { gasto: "Tu cuota del gimnasio donde entrenas tú", porque: "Es tu ocio o tu formación personal, no un gasto de tu actividad. Otra cosa es alquilar una sala para atender clientes." },
  { gasto: "Comidas con «clientes potenciales» sin justificar", porque: "Sin quién, cuándo y para qué, es una comida tuya. Y pagada en efectivo no se sostiene ni justificándola." },
  { gasto: "Los suplementos que te tomas tú", porque: "Consumo propio. Que te ayuden a rendir en tu trabajo no los convierte en gasto de la actividad. Comprarlos para venderlos es otra cosa, y está arriba." },
];

export default function CoachDeductiblesList() {
  return (
    <section
      aria-label="Lista de gastos que un entrenador personal autónomo puede deducir con lo necesario para justificar cada uno, y cinco gastos que Hacienda no admite"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Lo que sí, y lo que hace falta para que cuele
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Casi nadie pierde una deducción por no tener derecho. La pierde por no tener el papel.
      </p>

      <div style={{ marginBottom: 24 }}>
        {deducibles.map((d, i) => (
          <div
            key={i}
            style={{
              display: "flex", gap: 11, alignItems: "flex-start",
              padding: "13px 15px", marginBottom: 8,
              background: "rgba(34,197,94,0.07)",
              border: "1px solid rgba(34,197,94,0.25)",
              borderRadius: 10,
            }}
          >
            <Check size={16} style={{ color: "#22c55e", flexShrink: 0, marginTop: 3 }} />
            <div style={{ minWidth: 0 }}>
              <p style={{ margin: 0, fontSize: "0.92rem", fontWeight: 700, color: "var(--text-primary,#e8e8e8)", lineHeight: 1.4 }}>{d.gasto}</p>
              <p style={{ margin: "3px 0 0", fontSize: "0.82rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55 }}>
                <FileText size={12} style={{ verticalAlign: "-1px", marginRight: 5, opacity: 0.7 }} />
                {d.justifica}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h4 style={{ margin: "0 0 4px", fontSize: "1.05rem", fontWeight: 800, color: "#eab308", textAlign: "center" }}>
        🥊 Y las 3 en las que te toca meterte en el ring
      </h4>
      <p style={{ margin: "0 0 16px", textAlign: "center", fontSize: "0.83rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Estas no son ni un sí ni un no. Son un «depende», y el depende lo firma tu gestor, no un artículo de internet.
      </p>

      {ring.map((r, i) => (
        <div
          key={i}
          style={{
            display: "flex", gap: 11, alignItems: "flex-start",
            padding: "13px 15px", marginBottom: 8,
            background: "rgba(234,179,8,0.09)",
            border: "1px solid rgba(234,179,8,0.32)",
            borderRadius: 10,
          }}
        >
          <Swords size={16} style={{ color: "#eab308", flexShrink: 0, marginTop: 3 }} />
          <div style={{ minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: "0.92rem", fontWeight: 700, color: "var(--text-primary,#e8e8e8)", lineHeight: 1.4 }}>{r.gasto}</p>
            <p style={{ margin: "3px 0 0", fontSize: "0.82rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55 }}>{r.matiz}</p>
          </div>
        </div>
      ))}

      <div
        style={{
          margin: "16px 0 24px", padding: "14px 16px",
          background: "rgba(239,68,68,0.10)", border: "1px solid rgba(239,68,68,0.38)", borderRadius: 12,
          display: "flex", gap: 11, alignItems: "flex-start",
        }}
      >
        <AlertTriangle size={17} style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }} />
        <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.6 }}>
          <strong style={{ color: "#ef4444" }}>Aviso de la prorrata:</strong> vender suplementos te obliga a dar de alta una actividad nueva, y al mezclar una actividad exenta de IVA con otra sujeta puede activarse la <strong style={{ color: "var(--text-primary,#ddd)" }}>regla de prorrata</strong> (artículos 102 a 106 de la Ley del IVA). Eso cambia cuánto IVA puedes deducirte <em>de todo lo demás</em>, no solo de los botes. Es de las decisiones que se consultan ANTES, no después.
        </p>
      </div>

      <h4 style={{ margin: "0 0 4px", fontSize: "1.05rem", fontWeight: 800, color: "#ef4444", textAlign: "center" }}>
        Y las 4 que te van a tumbar
      </h4>
      <p style={{ margin: "0 0 16px", textAlign: "center", fontSize: "0.83rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Estas sí se deducen mucho y se caen en cuanto alguien las mira.
      </p>

      {rechazados.map((r, i) => (
        <div
          key={i}
          style={{
            display: "flex", gap: 11, alignItems: "flex-start",
            padding: "13px 15px", marginBottom: 8,
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.28)",
            borderRadius: 10,
          }}
        >
          <X size={16} style={{ color: "#ef4444", flexShrink: 0, marginTop: 3 }} />
          <div style={{ minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: "0.92rem", fontWeight: 700, color: "var(--text-primary,#e8e8e8)", lineHeight: 1.4 }}>{r.gasto}</p>
            <p style={{ margin: "3px 0 0", fontSize: "0.82rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55 }}>{r.porque}</p>
          </div>
        </div>
      ))}

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Las cuatro de abajo comparten el mismo fallo: son gastos que también te sirven en tu vida privada. Ese es el filtro que aplica Hacienda, y el que conviene aplicarte tú antes. Las del ring fallan por otro motivo: no están mal, están sin demostrar.
      </p>
    </section>
  );
}
