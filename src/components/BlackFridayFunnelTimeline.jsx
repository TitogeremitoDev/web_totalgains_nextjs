import { Sprout, Megaphone, KeyRound, DoorOpen, Flame } from "lucide-react";

/**
 * BlackFridayFunnelTimeline — El embudo de Black Friday de un entrenador,
 * por fases y con fechas de 2026 (Black Friday viernes 27-nov, Cyber Monday
 * lunes 30-nov, comprobado con `date`). Cada fase dice qué hacer y qué mirar
 * para saber si va bien. No hay porcentajes de conversión inventados: lo que
 * se mide son números propios del entrenador.
 */

const fases = [
  { icon: Sprout, color: "#22c55e", fase: "Siembra", fechas: "Hoy → 9 de noviembre", hacer: "Habla de enero: por qué tanta gente empieza y lo deja. Abre la lista de espera con una palabra clave por mensaje o con un formulario.", mirar: "Cuántos se apuntan a la lista." },
  { icon: Megaphone, color: "#8fa4f5", fase: "Expectación", fechas: "10 → 23 de noviembre", hacer: "Cuenta la oferta por partes: qué es, para quién, cuántas plazas y qué extra lleva. Pon fecha y cuenta atrás.", mirar: "Respuestas a tus historias y gente nueva en la lista." },
  { icon: KeyRound, color: "#a78bfa", fase: "Acceso anticipado", fechas: "24 → 26 de noviembre", hacer: "La lista de espera reserva primero, antes que nadie. Es su premio por haberse apuntado.", mirar: "Plazas reservadas antes de abrir." },
  { icon: DoorOpen, color: "#fa709a", fase: "Apertura y cierre", fechas: "27 → 30 de noviembre", hacer: "Abres para todos el viernes 27 y cierras el lunes 30 a las 23:59. Cuenta las plazas que quedan, si es verdad.", mirar: "Reservas totales y plazas libres." },
  { icon: Flame, color: "#f97316", fase: "Calentamiento", fechas: "1 de diciembre → su arranque en enero", hacer: "Invitación a tu app, formulario de valoración, rutina y dieta programadas para su primer día, y el extra de Navidad.", mirar: "Cuántos llegan a enero con la app instalada y la ficha completa." },
];

export default function BlackFridayFunnelTimeline() {
  return (
    <section
      aria-label="Embudo de Black Friday para un entrenador en cinco fases con fechas de 2026: siembra con lista de espera, expectación, acceso anticipado, apertura del 27 al 30 de noviembre y calentamiento en diciembre hasta el arranque en enero"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        El embudo, de hoy a enero
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Cinco fases. En cada una, qué haces y qué miras para saber si va bien.
      </p>

      <ol style={{ listStyle: "none", margin: 0, padding: 0, position: "relative" }}>
        {fases.map((f, i) => {
          const Icon = f.icon;
          const ultima = i === fases.length - 1;
          return (
            <li key={f.fase} style={{ display: "flex", gap: 14, alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div
                  style={{
                    width: 38, height: 38, borderRadius: 100,
                    background: `${f.color}22`, border: `2px solid ${f.color}`,
                    display: "flex", alignItems: "center", justifyContent: "center", color: f.color,
                  }}
                >
                  <Icon size={18} />
                </div>
                {!ultima ? <div style={{ flex: 1, width: 2, minHeight: 18, background: `linear-gradient(180deg, ${f.color}88, ${fases[i + 1].color}88)` }} /> : null}
              </div>
              <div style={{ flex: 1, minWidth: 0, paddingBottom: ultima ? 0 : 18 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                  <h4 style={{ margin: 0, fontSize: "1.02rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{i + 1}. {f.fase}</h4>
                  <span style={{ fontSize: "0.76rem", fontWeight: 700, color: f.color }}>{f.fechas}</span>
                </div>
                <p style={{ margin: "0 0 6px", fontSize: "0.86rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{f.hacer}</p>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary,#999)", lineHeight: 1.5 }}>
                  <strong style={{ color: f.color }}>Qué mirar:</strong> {f.mirar}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Fechas de 2026: Black Friday cae el viernes 27 de noviembre y Cyber Monday el lunes 30. Si empiezas más tarde, junta las dos primeras fases, pero no te saltes la lista de espera.
      </p>
    </section>
  );
}
