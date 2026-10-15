import { Percent, Gift, Crown, Ticket } from "lucide-react";

/**
 * BlackFridayOfferFormats — Las cuatro formas de montar una oferta de Black
 * Friday siendo entrenador, con a quién atrae cada una, su riesgo y cuándo
 * usarla. La del descuento lleva el dato de Lewis (2006) que el artículo
 * cita arriba; el resto es criterio de negocio y así lo dice el pie.
 */

const ofertas = [
  {
    icon: Percent, color: "#ef4444", nombre: "Descuento", ejemplo: "«-30 % este fin de semana»",
    atrae: "A quien compara precios.",
    riesgo: "Cobras menos por el mismo trabajo y, según el estudio de Lewis, el cliente captado con descuento vale menos a largo plazo.",
    cuando: "Casi nunca en un servicio 1 a 1. Si acaso, en productos.",
    veredicto: "Evítalo",
  },
  {
    icon: Gift, color: "#22c55e", nombre: "Precio normal con un extra", ejemplo: "«Reserva enero y te llevas la valoración inicial y un plan para Navidad»",
    atrae: "A quien quiere resultados, no rebajas.",
    riesgo: "Que el extra te coma horas. Elige extras que hagas una vez y sirvan a todos.",
    cuando: "Como oferta principal. Es la que protege tu precio.",
    veredicto: "La mejor base",
  },
  {
    icon: Crown, color: "#a78bfa", nombre: "Plaza de fundador", ejemplo: "«Las 10 primeras plazas mantienen este precio todo 2027»",
    atrae: "A quien se compromete en serio.",
    riesgo: "Atarte un precio demasiado tiempo. Pon fecha y número de plazas, y que sean de verdad.",
    cuando: "Si vas a subir precios en 2027 o lanzas un servicio nuevo.",
    veredicto: "Para crear expectación",
  },
  {
    icon: Ticket, color: "#4facfe", nombre: "Tarjeta regalo para Navidad", ejemplo: "«Regala un mes de entrenamiento: empieza en enero»",
    atrae: "A un comprador nuevo: el que regala, no el que entrena.",
    riesgo: "Que quien la recibe no tenga ganas. Incluye una llamada de bienvenida.",
    cuando: "Como segunda oferta, para diciembre.",
    veredicto: "Para llegar a gente nueva",
  },
];

export default function BlackFridayOfferFormats() {
  return (
    <section
      aria-label="Comparativa de cuatro ofertas de Black Friday para entrenadores personales: descuento, precio normal con un extra, plaza de fundador y tarjeta regalo para Navidad, con a quién atrae cada una, su riesgo y cuándo usarla"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Cuatro ofertas de Black Friday, y cuál te conviene
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        No todas atraen al mismo cliente. Elige la oferta por el cliente que quieres en enero, no por lo que hace todo el mundo.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {ofertas.map((o) => {
          const Icon = o.icon;
          return (
            <article
              key={o.nombre}
              style={{
                flex: "1 1 360px", minWidth: 0, padding: "18px 18px",
                background: `linear-gradient(180deg, ${o.color}10 0%, ${o.color}04 100%)`,
                border: `1px solid ${o.color}44`, borderRadius: 16,
              }}
            >
              <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  <div
                    style={{
                      width: 34, height: 34, borderRadius: 10,
                      background: `${o.color}22`, border: `1px solid ${o.color}55`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: o.color, flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{o.nombre}</h4>
                </div>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: o.color, padding: "3px 9px", borderRadius: 100, border: `1px solid ${o.color}66`, whiteSpace: "nowrap" }}>
                  {o.veredicto}
                </span>
              </header>
              <p style={{ margin: "0 0 12px", fontSize: "0.86rem", fontStyle: "italic", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>{o.ejemplo}</p>
              <p style={{ margin: "0 0 6px", fontSize: "0.85rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
                <strong style={{ color: "var(--text-primary,#ddd)" }}>Atrae:</strong> {o.atrae}
              </p>
              <p style={{ margin: "0 0 6px", fontSize: "0.85rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
                <strong style={{ color: "var(--text-primary,#ddd)" }}>Riesgo:</strong> {o.riesgo}
              </p>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
                <strong style={{ color: o.color }}>Cuándo:</strong> {o.cuando}
              </p>
            </article>
          );
        })}
      </div>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        El dato del descuento es del estudio de Lewis (2006). El resto es criterio de negocio. Lo que te proponemos: la oferta principal con un extra, y la plaza de fundador para crear expectación.
      </p>
    </section>
  );
}
