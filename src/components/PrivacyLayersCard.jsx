import { Eye, EyeOff, Lock, CheckSquare } from "lucide-react";

/**
 * PrivacyLayersCard — Dos columnas que explican qué comparte Mi Ciclo con la entrenadora
 * (solo si la clienta lo activa una a una) y qué NUNCA sale del móvil. Es el diferenciador
 * emocional del carrusel promocional: prometer menos, acertar más.
 */

const shared = [
  { label: "Fase actual del ciclo", detail: "Menstrual, folicular, ovulación o lútea" },
  { label: "Síntomas registrados",  detail: "Ánimo, energía, dolor de ovulación, retención" },
  { label: "Días previstos de SPM",  detail: "Estimado a partir de tus últimos ciclos" },
  { label: "Ventana de fuerza / descanso", detail: "Para ajustar cargas contigo, si tú quieres" },
];

const private_ = [
  { label: "Diario personal",       detail: "Notas, sensaciones y contexto que apuntas para ti" },
  { label: "Vida sexual",           detail: "Si registras encuentros o método anticonceptivo" },
  { label: "Autoexamen de mamas",   detail: "Recordatorio mensual y hallazgos anotados" },
  { label: "Cuestionario de salud", detail: "Historial ginecológico, medicación, cirugías" },
];

function Item({ label, detail, color, Icon }) {
  return (
    <li
      style={{
        display: "flex",
        gap: 10,
        padding: "10px 12px",
        marginBottom: 8,
        background: "rgba(0,0,0,0.18)",
        borderRadius: 10,
        borderLeft: `3px solid ${color}`,
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          background: `${color}22`,
          border: `1px solid ${color}55`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color,
          flexShrink: 0,
        }}
      >
        <Icon size={14} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--text-primary,#fff)", lineHeight: 1.35 }}>
          {label}
        </div>
        <div style={{ fontSize: "0.74rem", color: "var(--text-secondary,#aaa)", marginTop: 2, lineHeight: 1.4 }}>
          {detail}
        </div>
      </div>
    </li>
  );
}

function Column({ title, subtitle, items, color, headerIcon: HeaderIcon, itemIcon }) {
  return (
    <article
      style={{
        flex: "1 1 300px",
        minWidth: 280,
        padding: "20px 18px",
        background: `linear-gradient(180deg, ${color}12 0%, ${color}05 100%)`,
        border: `1px solid ${color}55`,
        borderRadius: 16,
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 6,
          paddingBottom: 12,
          borderBottom: `1px solid ${color}33`,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: `${color}22`,
            border: `1px solid ${color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color,
            flexShrink: 0,
          }}
        >
          <HeaderIcon size={18} />
        </div>
        <div>
          <div style={{ fontSize: "1rem", fontWeight: 800, color, lineHeight: 1.2 }}>{title}</div>
          <div style={{ fontSize: "0.74rem", color: "var(--text-secondary,#aaa)", marginTop: 2 }}>{subtitle}</div>
        </div>
      </header>

      <ul style={{ margin: "14px 0 0", padding: 0, listStyle: "none" }}>
        {items.map((it, i) => (
          <Item key={i} label={it.label} detail={it.detail} color={color} Icon={itemIcon} />
        ))}
      </ul>
    </article>
  );
}

export default function PrivacyLayersCard() {
  return (
    <section
      aria-label="Qué comparte Mi Ciclo con la entrenadora solo si la clienta activa cada casilla, y qué información nunca sale del móvil"
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
        Qué ve tu entrenadora y qué no ve nadie
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Todo empieza en privado. Compartir es una decisión activa, casilla a casilla, y se revoca cuando quieras.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        <Column
          title="Solo si tú lo activas"
          subtitle="Ayuda a la entrenadora a ajustar el plan"
          items={shared}
          color="#22c55e"
          headerIcon={Eye}
          itemIcon={CheckSquare}
        />
        <Column
          title="Nunca sale de tu móvil"
          subtitle="Ni con permisos ni por error"
          items={private_}
          color="#8b5cf6"
          headerIcon={EyeOff}
          itemIcon={Lock}
        />
      </div>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Esto no es una casilla que se puede pulsar sin querer. Los datos privados sencillamente no viajan.
      </p>
    </section>
  );
}
