import { Calendar, Archive, Copy, UserCheck, Clock, Coffee, Download, ShieldCheck } from "lucide-react";

/**
 * PreventionChecklistCard — 8 hábitos preventivos para no perder datos de atletas.
 * Grid 2 columnas en desktop, 1 en móvil. Cada tarjeta = un hábito + una regla concreta.
 */

const habits = [
  {
    icon: Calendar,
    title: "Nombra los planes con fecha",
    rule: "\"Fuerza julio 2026\" es reconocible dentro de 6 meses. \"Nueva rutina\" no.",
  },
  {
    icon: Archive,
    title: "Antes de eliminar, pregúntate si vale archivar",
    rule: "Archivar es reversible. Eliminar rara vez lo es. Ante la duda, archiva.",
  },
  {
    icon: Copy,
    title: "Renombra la copia antes de tocarla",
    rule: "Duplicar y editar es más seguro que sobrescribir el original.",
  },
  {
    icon: UserCheck,
    title: "Confirma el atleta antes de asignar",
    rule: "Dos clientes con el mismo nombre son un desastre esperando. Mira la foto o el email.",
  },
  {
    icon: Clock,
    title: "Trabajos delicados, a primera hora",
    rule: "Borrar clientes o dietas con sueño es la receta del arrepentimiento.",
  },
  {
    icon: Coffee,
    title: "Nunca borres después de una llamada difícil",
    rule: "El cliente que te ha discutido puede volver la semana que viene. Archiva.",
  },
  {
    icon: Download,
    title: "Exporta un CSV cada trimestre",
    rule: "Tu propia copia local es la última línea de defensa. Aunque no la mires jamás.",
  },
  {
    icon: ShieldCheck,
    title: "Confía en la papelera antes que en tu memoria",
    rule: "Si el software tiene 'Archivados' o 'Anuladas', ese es tu red de seguridad real.",
  },
];

function HabitCard({ habit }) {
  const Icon = habit.icon;
  return (
    <article
      style={{
        padding: "16px 16px 14px",
        background: "rgba(102,126,234,0.06)",
        border: "1px solid rgba(102,126,234,0.22)",
        borderRadius: 14,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <header style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: "#667eea22",
            border: "1px solid #667eea55",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#667eea",
            flexShrink: 0,
          }}
        >
          <Icon size={18} />
        </div>
        <h4 style={{ margin: 0, fontSize: "0.96rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>
          {habit.title}
        </h4>
      </header>
      <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        {habit.rule}
      </p>
    </article>
  );
}

export default function PreventionChecklistCard() {
  return (
    <section
      aria-label="Ocho hábitos preventivos para no perder datos de tus atletas por un descuido"
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
        8 hábitos para no perder datos por un descuido
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Reglas sencillas que aplican a cualquier software (o incluso a un Excel bien montado).
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 12,
        }}
      >
        {habits.map((h) => (
          <HabitCard key={h.title} habit={h} />
        ))}
      </div>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        La mejor recuperación es la que no necesitas hacer.
      </p>
    </section>
  );
}
