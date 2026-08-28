import { Megaphone, MessageSquare, Handshake, DoorClosed, CalendarDays } from "lucide-react";

/**
 * SeptemberWindowCalendar — La ventana de captación de septiembre repartida en
 * cuatro tramos, del final de agosto al 20 de septiembre.
 *
 * El gráfico existe para transmitir una sola idea: la curva de decisión del
 * cliente NO coincide con el mes natural. Sube antes del día 1 y se desploma
 * hacia el 20, así que la barra de "intensidad" es lo que manda la lectura.
 */

const tramos = [
  {
    id: 1,
    rango: "25-31 de agosto",
    titulo: "Calentar antes de que abra",
    intensidad: 70,
    color: "#eab308",
    icon: Megaphone,
    accion: "Publicar sin vender. El objetivo es que cuando busquen, ya te hayan visto.",
    error: "Esperar al día 1 porque \"todavía es agosto\".",
  },
  {
    id: 2,
    rango: "1-7 de septiembre",
    titulo: "La semana que decide el mes",
    intensidad: 100,
    color: "#22c55e",
    icon: MessageSquare,
    accion: "Abrir plazas con fecha de inicio concreta y responder en horas, no en días.",
    error: "Tardar dos días en contestar un mensaje que llegó caliente.",
  },
  {
    id: 3,
    rango: "8-15 de septiembre",
    titulo: "Los que se lo estaban pensando",
    intensidad: 65,
    color: "#667eea",
    icon: Handshake,
    accion: "Recuperar las conversaciones abiertas de la semana anterior, una a una.",
    error: "Dar por perdido a quien no contestó a la primera.",
  },
  {
    id: 4,
    rango: "A partir del 20",
    titulo: "La ventana se cierra",
    intensidad: 25,
    color: "#ef4444",
    icon: DoorClosed,
    accion: "Dejar de captar y volcarse en que los nuevos lleguen bien a octubre.",
    error: "Seguir empujando captación mientras los recién entrados se enfrían.",
  },
];

function Tramo({ t }) {
  const Icon = t.icon;
  return (
    <article
      style={{
        marginBottom: 14,
        padding: "18px 20px",
        background: `linear-gradient(180deg, ${t.color}0F 0%, ${t.color}05 100%)`,
        border: `1px solid ${t.color}44`,
        borderRadius: 16,
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
        <div
          style={{
            width: 36, height: 36, borderRadius: 10,
            background: `${t.color}22`, border: `1px solid ${t.color}55`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: t.color, flexShrink: 0,
          }}
        >
          <Icon size={20} />
        </div>
        <div style={{ flex: "1 1 200px", minWidth: 0 }}>
          <p style={{ margin: 0, fontSize: "0.72rem", color: t.color, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5, whiteSpace: "nowrap" }}>
            {t.rango}
          </p>
          <h3 style={{ margin: "2px 0 0", fontSize: "1.02rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>
            {t.titulo}
          </h3>
        </div>
      </header>

      {/* Barra de intensidad: la curva de decisión del cliente */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ flex: 1, height: 10, background: "rgba(0,0,0,0.35)", borderRadius: 100, overflow: "hidden" }}>
          <div style={{ width: `${t.intensidad}%`, height: "100%", background: t.color, borderRadius: 100 }} />
        </div>
        <span style={{ fontSize: "0.74rem", color: t.color, fontWeight: 800, whiteSpace: "nowrap", minWidth: 42, textAlign: "right" }}>
          {t.intensidad} %
        </span>
      </div>

      <div style={{ padding: "10px 12px", background: "rgba(0,0,0,0.28)", borderRadius: 10, marginBottom: 8 }}>
        <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>
          Qué toca
        </p>
        <p style={{ margin: "3px 0 0", fontSize: "0.86rem", color: "var(--text-primary,#ddd)", lineHeight: 1.5 }}>
          {t.accion}
        </p>
      </div>

      <div style={{ padding: "8px 12px", background: "rgba(239,68,68,0.09)", border: "1px solid rgba(239,68,68,0.28)", borderRadius: 8 }}>
        <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>
          <strong style={{ color: "#ef4444" }}>El error de este tramo:</strong> {t.error}
        </p>
      </div>
    </article>
  );
}

export default function SeptemberWindowCalendar() {
  return (
    <section
      aria-label="Calendario de la ventana de captación de septiembre, del 25 de agosto al 20 de septiembre, con la intensidad de decisión del cliente en cada tramo"
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
        La ventana no coincide con el mes
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        La barra marca cuánta gente está decidiendo en cada tramo. Empieza a subir <strong style={{ color: "#eab308" }}>antes del día 1</strong> y se desploma <strong style={{ color: "#ef4444" }}>alrededor del 20</strong>.
      </p>

      <div>
        {tramos.map((t) => (
          <Tramo key={t.id} t={t} />
        ))}
      </div>

      <p style={{ marginTop: 14, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        <CalendarDays size={14} style={{ verticalAlign: "-2px", marginRight: 5 }} />
        Quien empieza a moverse el 1 de septiembre no llega tarde por poco: se pierde el tramo donde la gente pasa de pensarlo a buscarlo.
      </p>
    </section>
  );
}
