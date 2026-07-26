import { Trash2, XCircle, Archive, RotateCcw, CheckCircle2 } from "lucide-react";

/**
 * DataRecoveryFlow — 2 carriles comparados de qué pasa cuando borras algo por error:
 * carril rojo (sin papelera / Excel / apps antiguas) vs carril verde (soft delete + Restaurar).
 * Comparte lenguaje visual con el resto de componentes del blog.
 */

const lanes = [
  {
    key: "sin",
    title: "Sin papelera",
    subtitle: "Excel, papel o apps con borrado físico",
    color: "#ef4444",
    steps: [
      { icon: Trash2, label: "Le das a borrar", detail: "Un clic. Sin doble confirmación real." },
      { icon: XCircle, label: "El registro desaparece", detail: "La BD lo elimina de inmediato." },
      { icon: XCircle, label: "No hay vuelta atrás", detail: "Meses de datos, perdidos sin aviso." },
    ],
    verdict: "Reconstruir desde cero (o disculpa al atleta).",
  },
  {
    key: "con",
    title: "Con soft delete",
    subtitle: "Software diseñado para el error humano",
    color: "#22c55e",
    steps: [
      { icon: Trash2, label: "Le das a borrar", detail: "El sistema pregunta si prefieres archivar." },
      { icon: Archive, label: "Queda archivado", detail: "Fuera de la vista, dentro de la base de datos." },
      { icon: RotateCcw, label: "Restauras con 1 clic", detail: "Aparece en 'Archivados', pulsa Restaurar." },
    ],
    verdict: "El atleta ni se entera. Sigues trabajando.",
  },
];

function Lane({ lane }) {
  return (
    <article
      style={{
        flex: "1 1 300px",
        minWidth: 260,
        padding: "20px 18px",
        background: `linear-gradient(180deg, ${lane.color}12 0%, ${lane.color}05 100%)`,
        border: `1px solid ${lane.color}55`,
        borderRadius: 16,
      }}
    >
      <header style={{ marginBottom: 16, textAlign: "center" }}>
        <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 800, color: lane.color, textTransform: "uppercase", letterSpacing: 0.4 }}>
          {lane.title}
        </h4>
        <p style={{ margin: "4px 0 0", fontSize: "0.78rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.4 }}>
          {lane.subtitle}
        </p>
      </header>

      <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {lane.steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <li
              key={i}
              style={{
                display: "flex",
                gap: 12,
                padding: "10px 12px",
                marginBottom: 8,
                background: "rgba(0,0,0,0.18)",
                borderRadius: 10,
                borderLeft: `3px solid ${lane.color}`,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: `${lane.color}22`,
                  border: `1px solid ${lane.color}55`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: lane.color,
                  flexShrink: 0,
                }}
              >
                <Icon size={16} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--text-primary,#fff)", lineHeight: 1.35 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: "0.74rem", color: "var(--text-secondary,#aaa)", marginTop: 2, lineHeight: 1.4 }}>
                  {s.detail}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div
        style={{
          marginTop: 14,
          padding: "10px 12px",
          background: `${lane.color}18`,
          border: `1px solid ${lane.color}55`,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <CheckCircle2 size={16} style={{ color: lane.color, flexShrink: 0 }} />
        <span style={{ fontSize: "0.82rem", color: "var(--text-primary,#ddd)", lineHeight: 1.4 }}>
          {lane.verdict}
        </span>
      </div>
    </article>
  );
}

export default function DataRecoveryFlow() {
  return (
    <section
      aria-label="Comparativa entre un sistema sin papelera y un sistema con soft delete cuando borras un cliente por error"
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
        Qué pasa cuando borras algo por error
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Mismo error humano, dos finales muy distintos según cómo esté diseñada la herramienta.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {lanes.map((l) => (
          <Lane key={l.key} lane={l} />
        ))}
      </div>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        El diseño se ve cuando algo va mal, no cuando todo funciona.
      </p>
    </section>
  );
}
