import { ShoppingCart, CalendarX, EyeOff, Activity, RefreshCw } from "lucide-react";

/**
 * DietAdherenceReasons — Los 5 motivos reales por los que un cliente deja de
 * seguir la dieta. Cada card contrapone la lectura fácil ("lo que parece") con
 * la causa operativa real ("lo que es"), y cierra con la palanca que lo resuelve.
 *
 * La tesis del artículo es que ninguno de los cinco es falta de voluntad, así
 * que el contraste izquierda-derecha es el corazón del gráfico: gris apagado
 * para el mito, color para la causa real.
 */

const reasons = [
  {
    n: 1,
    icon: ShoppingCart,
    color: "#fa709a",
    title: "El plan tiene comida que no come ni encuentra",
    myth: "No tiene fuerza de voluntad",
    reality:
      "Le pusiste salmón un martes y en su supermercado no había. Sin alternativa a mano, la comida entera se cae.",
    lever: "Cambio de alimento desde su app",
  },
  {
    n: 2,
    icon: CalendarX,
    color: "#f97316",
    title: "El plan no sobrevive a la vida real",
    myth: "Se salta la dieta en cuanto puede",
    reality:
      "Comida de empresa, cena fuera, un imprevisto. El plan asume una semana de laboratorio que no existe.",
    lever: "Cambio de opción entera por un plato equivalente",
  },
  {
    n: 3,
    icon: EyeOff,
    color: "#eab308",
    title: "Te enteras un mes tarde",
    myth: "El cliente no avisa de nada",
    reality:
      "Sí avisa, pero por WhatsApp y a las once de la noche. Para la revisión mensual ya nadie recuerda qué se cambió ni por qué.",
    lever: "Aviso al coach con el motivo del cambio",
  },
  {
    n: 4,
    icon: Activity,
    color: "#667eea",
    title: "Su cuerpo no es igual todos los días",
    myth: "Un día tiene hambre y otro no, es psicológico",
    reality:
      "En clientas con ciclo, el apetito y la retención de líquidos varían de forma previsible a lo largo del mes. El plan fijo no lo contempla.",
    lever: "Consejo nutricional según la fase del ciclo",
  },
  {
    n: 5,
    icon: RefreshCw,
    color: "#22c55e",
    title: "Rehacer el plan cuesta tanto que no lo rehaces",
    myth: "El plan estaba bien, es el cliente",
    reality:
      "El plan estaba bien en enero. En marzo ya no encaja, pero rehacerlo a mano son dos horas y esas dos horas no aparecen nunca.",
    lever: "Generación del plan con IA sobre tu base de alimentos",
  },
];

function ReasonCard({ r }) {
  const Icon = r.icon;
  return (
    <article
      style={{
        marginBottom: 14,
        padding: "18px 20px",
        background: `linear-gradient(180deg, ${r.color}0F 0%, ${r.color}05 100%)`,
        border: `1px solid ${r.color}44`,
        borderRadius: 16,
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: `${r.color}22`,
            border: `1px solid ${r.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: r.color,
            fontSize: "1.4rem",
            fontWeight: 900,
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {r.n}
        </div>

        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: `${r.color}22`,
            border: `1px solid ${r.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: r.color,
            flexShrink: 0,
          }}
        >
          <Icon size={20} />
        </div>

        <div style={{ flex: "1 1 220px", minWidth: 0 }}>
          <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>
            {r.title}
          </h3>
        </div>
      </header>

      {/* Contraste mito vs realidad */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
        <div
          style={{
            flex: "1 1 200px",
            minWidth: 0,
            padding: "10px 12px",
            background: "rgba(0,0,0,0.28)",
            borderRadius: 10,
            opacity: 0.75,
          }}
        >
          <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>
            Lo que parece
          </p>
          <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "var(--text-secondary,#999)", lineHeight: 1.5, textDecoration: "line-through" }}>
            {r.myth}
          </p>
        </div>

        <div
          style={{
            flex: "1 1 240px",
            minWidth: 0,
            padding: "10px 12px",
            background: "rgba(0,0,0,0.28)",
            border: `1px solid ${r.color}33`,
            borderRadius: 10,
          }}
        >
          <p style={{ margin: 0, fontSize: "0.7rem", color: r.color, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 700 }}>
            Lo que es
          </p>
          <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "var(--text-primary,#ddd)", lineHeight: 1.5 }}>
            {r.reality}
          </p>
        </div>
      </div>

      <div
        style={{
          padding: "8px 12px",
          background: `${r.color}14`,
          border: `1px solid ${r.color}3A`,
          borderRadius: 8,
        }}
      >
        <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>
          <strong style={{ color: r.color }}>Lo que lo arregla:</strong> {r.lever}
        </p>
      </div>
    </article>
  );
}

export default function DietAdherenceReasons() {
  return (
    <section
      aria-label="Los 5 motivos reales por los que un cliente deja de seguir la dieta, contrapuestos con la explicación superficial de falta de voluntad"
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
        Los 5 motivos reales, y ninguno es falta de voluntad
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        A la izquierda, la explicación que se da por defecto. A la derecha, lo que está pasando de verdad en la semana de tu cliente.
      </p>

      <div>
        {reasons.map((r) => (
          <ReasonCard key={r.n} r={r} />
        ))}
      </div>

      <p style={{ marginTop: 14, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Los cinco motivos tienen algo en común: son problemas de <strong style={{ color: "var(--text-primary,#ddd)" }}>diseño del sistema</strong>, no de carácter del cliente. Y un problema de sistema se arregla cambiando el sistema, no insistiendo más.
      </p>
    </section>
  );
}
