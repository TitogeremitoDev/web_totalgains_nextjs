import { Apple, Layers, UtensilsCrossed, Undo2, BellRing } from "lucide-react";

/**
 * FoodSwapLevels — Los 3 niveles a los que un cliente puede cambiar comida sin
 * romper el plan, de menor a mayor alcance: alimento suelto, sub-ingrediente
 * dentro de una receta desglosada, y opción entera por un plato equivalente.
 *
 * El cierre recoge las dos propiedades que convierten el cambio en información
 * útil para el coach en vez de en un agujero: viaja con el motivo y es reversible.
 */

const levels = [
  {
    n: 1,
    icon: Apple,
    color: "#22c55e",
    scope: "Un alimento",
    title: "Cambiar un alimento suelto",
    when: "No había salmón. Hay merluza.",
    detail:
      "El cliente sustituye un alimento concreto de la comida por otro de la base. El resto de la comida se queda intacta.",
  },
  {
    n: 2,
    icon: Layers,
    color: "#eab308",
    scope: "Un ingrediente",
    title: "Cambiar un ingrediente dentro de la receta",
    when: "La receta lleva arroz basmati y en casa hay arroz redondo.",
    detail:
      "Cuando desglosaste el plato en ingredientes, el cambio baja a ese nivel y ajusta el total del contenedor por diferencia, sin descuadrar la comida.",
  },
  {
    n: 3,
    icon: UtensilsCrossed,
    color: "#fa709a",
    scope: "La comida entera",
    title: "Cambiar la opción por un plato equivalente",
    when: "Come fuera y no va a montar la receta de seis ingredientes.",
    detail:
      "Cambia el conjunto entero por otra opción equivalente. Es la salida para las dietas donde el plato está desglosado en ingredientes sueltos y cambiar uno a uno no tiene sentido.",
  },
];

function LevelCard({ l }) {
  const Icon = l.icon;
  return (
    <article
      style={{
        flex: "1 1 240px",
        minWidth: 0,
        padding: "18px 20px",
        background: `linear-gradient(180deg, ${l.color}0F 0%, ${l.color}05 100%)`,
        border: `1px solid ${l.color}44`,
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: `${l.color}22`,
            border: `1px solid ${l.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: l.color,
            flexShrink: 0,
          }}
        >
          <Icon size={20} />
        </div>
        <span
          style={{
            padding: "5px 10px",
            background: l.color,
            color: "#fff",
            borderRadius: 100,
            fontSize: "0.68rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            whiteSpace: "nowrap",
          }}
        >
          {l.scope}
        </span>
      </header>

      <h4 style={{ margin: "0 0 10px", fontSize: "0.98rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.35 }}>
        {l.title}
      </h4>

      <div
        style={{
          padding: "8px 10px",
          background: "rgba(0,0,0,0.28)",
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <p style={{ margin: 0, fontSize: "0.68rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>
          Cuándo pasa
        </p>
        <p style={{ margin: "3px 0 0", fontSize: "0.84rem", color: l.color, fontWeight: 600, lineHeight: 1.45 }}>
          {l.when}
        </p>
      </div>

      <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
        {l.detail}
      </p>
    </article>
  );
}

export default function FoodSwapLevels() {
  return (
    <section
      aria-label="Los tres niveles a los que un cliente puede cambiar comida sin romper el plan nutricional: alimento suelto, ingrediente dentro de la receta y opción entera"
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
        Tres niveles de cambio, para que el plan no se caiga entero
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        La diferencia entre un cliente que se salta la comida y uno que la adapta es tener el cambio al alcance en el momento en que le falta algo.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {levels.map((l) => (
          <LevelCard key={l.n} l={l} />
        ))}
      </div>

      {/* Las dos propiedades que hacen que el cambio sirva de algo */}
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 18 }}>
        <div
          style={{
            flex: "1 1 260px",
            minWidth: 0,
            padding: "12px 14px",
            background: "rgba(102,126,234,0.10)",
            border: "1px solid rgba(102,126,234,0.35)",
            borderRadius: 12,
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <BellRing size={16} style={{ color: "#667eea", flexShrink: 0, marginTop: 3 }} />
          <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
            <strong style={{ color: "var(--text-primary,#ddd)" }}>El cambio te llega a ti.</strong> Con el alimento original, el nuevo y el motivo que dio el cliente. No hay que preguntar en la revisión.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 260px",
            minWidth: 0,
            padding: "12px 14px",
            background: "rgba(34,197,94,0.10)",
            border: "1px solid rgba(34,197,94,0.35)",
            borderRadius: 12,
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <Undo2 size={16} style={{ color: "#22c55e", flexShrink: 0, marginTop: 3 }} />
          <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
            <strong style={{ color: "var(--text-primary,#ddd)" }}>Es reversible.</strong> El plan que tú diseñaste sigue ahí debajo, y el cliente puede volver a él cuando vuelva a tener el alimento original.
          </p>
        </div>
      </div>

      <p style={{ marginTop: 16, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Un cambio registrado con su motivo no es una desviación del plan: es el dato que te dice qué hay que cambiar en el plan siguiente.
      </p>
    </section>
  );
}
