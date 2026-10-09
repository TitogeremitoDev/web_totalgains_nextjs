import { ArrowRightLeft, Wrench, Scissors, LifeBuoy, RotateCcw } from "lucide-react";

/**
 * HumanSupportMoments — Los cinco momentos en los que un entrenador necesita a
 * una persona al otro lado de su software, y qué pasa en cada uno en
 * TotalGains. Cada línea de «En TotalGains» está comprobada en el código de
 * la app o en la página de precios (9-oct-2026):
 *  - Importar con IA (rutinas: PDF, Word, Excel, CSV, texto) e «Importar
 *    archivo» (dietas: PDF, Word, Excel); migración incluida en Unlimited.
 *  - Carpetas: pedido el lunes 28-sep (app 36ab194e), en la OTA 1.3.30 el 30-sep.
 *  - Asistente de ayuda: «Guíame paso a paso» y «Contactar soporte» con la
 *    pregunta y la pantalla ya escritas (HelpAssistantModal).
 *  - «Archivados» → «Desarchivar cliente»; «Historial de rutinas» e
 *    «Historial Nutricional» en la ficha del cliente.
 */

const momentos = [
  { icon: ArrowRightLeft, color: "#8fa4f5", momento: "Cambias de software", necesitas: "Que no se pierda nada y que tus clientes no noten el cambio.", aqui: "Te ayudamos a migrar en todos los planes, y en Unlimited lo hacemos por ti. Rutinas y dietas se importan desde PDF, Word o Excel." },
  { icon: Wrench, color: "#f97316", momento: "Algo no funciona", necesitas: "Que alguien lo entienda a la primera y lo arregle.", aqui: "Lo arregla el mismo equipo que hace la app, y muchos arreglos llegan con una actualización que se instala sola." },
  { icon: Scissors, color: "#a78bfa", momento: "Te falta algo", necesitas: "Que alguien te escuche y te diga sí, no o cuándo.", aqui: "Un lunes nos pidieron poder renombrar las carpetas de rutinas. El miércoles salió en la actualización para todos." },
  { icon: LifeBuoy, color: "#4facfe", momento: "Algo no te sale", necesitas: "Ayuda sin tener que explicarlo tres veces.", aqui: "Un asistente para las dudas rápidas y, si no basta, una persona que recibe tu pregunta y tu pantalla ya escritas." },
  { icon: RotateCcw, color: "#22c55e", momento: "Borras lo que no debías", necesitas: "Recuperarlo ya, no dentro de una semana.", aqui: "Desarchivar a un cliente es cuestión de segundos, sus rutinas y dietas anteriores siguen en su historial, y lo que la app no puede deshacer lo buscamos nosotros." },
];

export default function HumanSupportMoments() {
  return (
    <section
      aria-label="Los cinco momentos en que un entrenador necesita a una persona en el soporte de su software: cuando cambia de software, cuando algo no funciona, cuando le falta una función, cuando algo no le sale y cuando borra algo por error, y qué pasa en cada uno en TotalGains"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Los cinco momentos en que necesitas a una persona
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Lo que necesitas en cada uno, y lo que pasa en TotalGains.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {momentos.map((m, i) => {
          const Icon = m.icon;
          return (
            <article
              key={m.momento}
              style={{
                display: "flex", gap: 14, alignItems: "flex-start", flexWrap: "wrap",
                padding: "16px 16px",
                background: `linear-gradient(90deg, ${m.color}12 0%, ${m.color}04 100%)`,
                border: `1px solid ${m.color}40`, borderRadius: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 11, flex: "1 1 200px", minWidth: 0 }}>
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `${m.color}22`, border: `1px solid ${m.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: m.color, flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: "0.68rem", fontWeight: 700, color: m.color, textTransform: "uppercase", letterSpacing: 0.6 }}>Momento {i + 1}</p>
                  <h4 style={{ margin: "1px 0 0", fontSize: "1rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{m.momento}</h4>
                </div>
              </div>
              <div style={{ flex: "2 1 380px", minWidth: 0 }}>
                <p style={{ margin: "0 0 6px", fontSize: "0.84rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
                  <strong style={{ color: "var(--text-primary,#ddd)" }}>Necesitas:</strong> {m.necesitas}
                </p>
                <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
                  <strong style={{ color: m.color }}>En TotalGains:</strong> {m.aqui}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Te contesta siempre una persona. Lo que cambia entre planes es el plazo que nos comprometemos a cumplir: hasta 48 horas en Starter, 24 horas con prioridad en Pro y trato directo en Unlimited.
      </p>
    </section>
  );
}
