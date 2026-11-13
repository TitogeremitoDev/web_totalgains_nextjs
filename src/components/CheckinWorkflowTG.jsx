import { ClipboardList, CalendarDays, CalendarX, BellRing, Inbox, LineChart, Sparkles, FileText } from "lucide-react";

/**
 * CheckinWorkflowTG — Cada paso del check-in semanal al lado de la función de
 * TotalGains que lo resuelve. Comprobado el 13-nov-2026 en el changelog de la app
 * (formularios propios, ★ Datos que usa la app, «Sustituye al check-in semanal» y
 * «Ver semanas y preguntas» —encendidos para todos el 10-nov—, día y hora del
 * check-in, avisos en Seguimiento, Resumen IA) y en capturas reales del 5 y del
 * 10-nov. Lo de los días por grupo NO va aquí: su interruptor sigue pendiente.
 */

const pasos = [
  { icon: ClipboardList, color: "#4facfe", paso: "Preguntar lo justo", donde: "Formularios y ★ Datos que usa la app", texto: "Haces tus formularios con secciones y escalas, y las preguntas con ★ van solas a las gráficas del cliente." },
  { icon: CalendarDays, color: "#a78bfa", paso: "Un formulario por semana", donde: "Sustituye al check-in semanal", texto: "La semana de tu revisión, tu cliente no rellena los dos ni le llega el aviso del semanal." },
  { icon: CalendarX, color: "#fa709a", paso: "Vacaciones o lesión", donde: "Ver semanas y preguntas", texto: "Ves las próximas semanas de cada cliente y le quitas o le pones el semanal de un toque." },
  { icon: BellRing, color: "#eab308", paso: "Que no se le olvide", donde: "Día y hora del check-in", texto: "Le llega el aviso el día y a la hora que elijas, salvo si ya lo ha rellenado." },
  { icon: Inbox, color: "#22c55e", paso: "Revisar por orden", donde: "Seguimiento, Por revisar", texto: "Quién te ha mandado algo, con su sueño, energía, ánimo y peso, y avisos de molestias, cansancio o adherencia baja." },
  { icon: LineChart, color: "#4facfe", paso: "Ver la tendencia", donde: "Ficha del cliente, Gráficos", texto: "Peso con media de 7 días y ritmo, sensaciones, sueño, medidas y dieta en la misma pantalla." },
  { icon: Sparkles, color: "#a78bfa", paso: "Resumir rápido", donde: "Resumen IA", texto: "Resume sus últimos 30 días separando el diario y el semanal, con focos de acción. Solo al pulsar el botón." },
  { icon: FileText, color: "#8fa4f5", paso: "Contestar con método", donde: "Informe de feedback", texto: "Logros, análisis técnico y plan de acción en un informe que tu cliente ve en su app." },
];

export default function CheckinWorkflowTG() {
  return (
    <section
      aria-label="Cada paso del check-in semanal y la función de TotalGains que lo resuelve: formularios, sustituir el semanal, quitar semanas, avisos, Seguimiento, gráficos, resumen con IA e informe de feedback"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Todo el check-in, dentro de la app
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        De la pregunta a la respuesta, sin Excel, sin PDF y sin perseguir a nadie por WhatsApp.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {pasos.map((p) => {
          const Icon = p.icon;
          return (
            <li
              key={p.paso}
              style={{
                flex: "1 1 320px", minWidth: 0, display: "flex", gap: 12, padding: "14px 14px 16px",
                background: `linear-gradient(180deg, ${p.color}12 0%, ${p.color}05 100%)`,
                border: `1px solid ${p.color}44`, borderRadius: 14,
              }}
            >
              <div
                style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: `${p.color}22`, border: `1px solid ${p.color}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: p.color, flexShrink: 0,
                }}
              >
                <Icon size={17} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: "0.94rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{p.paso}</p>
                <p style={{ margin: "2px 0 6px", fontSize: "0.76rem", fontWeight: 700, color: p.color, lineHeight: 1.4 }}>{p.donde}</p>
                <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{p.texto}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Incluido en todos los planes, también en el gratuito de 5 atletas. Si no tocas nada, el check-in semanal de TotalGains funciona solo.
      </p>
    </section>
  );
}
