import { AlertTriangle } from "lucide-react";

/**
 * TrustDamageScale — 10 frases del coach ordenadas por daño a la confianza del cliente.
 * Cada fila: número + frase + barra horizontal proporcional al impacto + etiqueta corta.
 * Escala común 0-10, colores rojo→naranja→amarillo (todas dañinas, gradiente de intensidad).
 */

const SCALE_MAX = 10;

const frases = [
  { rank: 1, text: "\"Métele más ganas\"", damage: 10, tag: "Culpabiliza", color: "#dc2626" },
  { rank: 2, text: "\"Es lo que hay\"", damage: 9.5, tag: "Resignación", color: "#dc2626" },
  { rank: 3, text: "\"Ya te aviso cuando pueda\"", damage: 9, tag: "Sin fecha", color: "#ef4444" },
  { rank: 4, text: "\"Sí, mañana lo veo\" (por 4ª vez)", damage: 9, tag: "Patrón aplazar", color: "#ef4444" },
  { rank: 5, text: "\"Es normal, a todos les pasa\"", damage: 8, tag: "Minimiza", color: "#f97316" },
  { rank: 6, text: "\"Otros clientes lo hacen y les va bien\"", damage: 7.5, tag: "Comparativa", color: "#f97316" },
  { rank: 7, text: "\"Lo intentamos\"", damage: 7, tag: "Duda previa", color: "#f97316" },
  { rank: 8, text: "\"No te preocupes\"", damage: 6.5, tag: "Invalida", color: "#f59e0b" },
  { rank: 9, text: "\"Prueba esto y me dices\"", damage: 6, tag: "Sin criterio", color: "#f59e0b" },
  { rank: 10, text: "\"Yo no soy nutricionista\" (sin puente)", damage: 5.5, tag: "Se lava", color: "#eab308" },
];

function FraseRow({ f }) {
  const widthPct = Math.min((f.damage / SCALE_MAX) * 100, 100);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "34px minmax(0, 1fr) auto",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        marginBottom: 8,
        background: `${f.color}0F`,
        border: `1px solid ${f.color}33`,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          background: `${f.color}22`,
          border: `1px solid ${f.color}55`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.78rem",
          fontWeight: 800,
          color: f.color,
          flexShrink: 0,
        }}
      >
        {f.rank}
      </div>

      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "var(--text-primary,#fff)",
            lineHeight: 1.35,
            marginBottom: 6,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {f.text}
        </div>
        <div
          style={{
            position: "relative",
            height: 8,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: `${widthPct}%`,
              background: `linear-gradient(90deg, ${f.color}, ${f.color}dd)`,
              borderRadius: 4,
            }}
          />
        </div>
      </div>

      <div
        style={{
          padding: "4px 10px",
          background: f.color,
          color: "#fff",
          borderRadius: 100,
          fontSize: "0.72rem",
          fontWeight: 800,
          whiteSpace: "nowrap",
          textTransform: "uppercase",
          letterSpacing: 0.4,
        }}
      >
        {f.tag}
      </div>
    </div>
  );
}

export default function TrustDamageScale() {
  return (
    <section
      aria-label="Las 10 frases ordenadas por el daño que hacen a la confianza del cliente, con etiqueta del patrón que representa cada una"
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)",
        borderRadius: 20,
      }}
    >
      <header style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 6 }}>
        <AlertTriangle size={20} style={{ color: "#ef4444" }} />
        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
          Las 10 frases, ordenadas por daño real
        </h3>
      </header>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Escala 0-10 de impacto en la confianza del cliente. Todas restan. Las de arriba, además, aceleran la baja.
      </p>

      {frases.map((f) => (
        <FraseRow key={f.rank} f={f} />
      ))}

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Ranking editorial basado en el patrón que representa cada frase, no en un estudio cuantitativo.
      </p>
    </section>
  );
}
