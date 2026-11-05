import { Dumbbell, TrendingDown, FlaskConical, Flame, Trophy, Sunrise } from "lucide-react";

/**
 * ContestPrepTimeline — Las seis etapas de una preparación de culturismo natural,
 * con el momento de cada una y lo que decide. Rangos comprobados en el texto
 * completo de las revisiones (5-nov-2026):
 *  - Roberts y colaboradores 2020 (J Hum Kinet 71:79-108): casos de 14 a 32
 *    semanas; 1-2 meses hasta un peso cómodo; recuperación típica de 4 a 6 meses;
 *    no recortar agua, sal ni hidratos en la peak week.
 *  - Escalante y colaboradores 2021 (BMC Sports Sci Med Rehabil 13:68): ensayo de
 *    peak week unas 2 a 4 semanas antes.
 * Las fases se llaman igual que en el Modo Elite de TotalGains.
 */

const etapas = [
  {
    icon: Dumbbell,
    color: "#4facfe",
    fase: "Acumulación",
    cuando: "Meses antes",
    texto: "Llegar con el músculo hecho: en la recta final de la dieta lo normal es no ganar más.",
  },
  {
    icon: TrendingDown,
    color: "#eab308",
    fase: "Definición",
    cuando: "De 14 a 32 semanas en los casos publicados",
    texto: "Manda el ritmo semanal: mejor despacio y con margen para las semanas que se atascan.",
  },
  {
    icon: FlaskConical,
    color: "#a78bfa",
    fase: "Ensayo",
    cuando: "De 2 a 4 semanas antes del stage",
    texto: "Si vas a cambiar algo en la peak week, se prueba aquí y no por primera vez la semana buena.",
  },
  {
    icon: Flame,
    color: "#fa709a",
    fase: "Peak week",
    cuando: "Los últimos 7 días",
    texto: "Tocar lo mínimo. Agua, sal e hidratos no se recortan.",
  },
  {
    icon: Trophy,
    color: "#eab308",
    fase: "Stage",
    cuando: "El día",
    texto: "Horarios, comida, bronceado, bombeo y poses: todo decidido y escrito de antes.",
  },
  {
    icon: Sunrise,
    color: "#8fa4f5",
    fase: "Después",
    cuando: "De 1 a 2 meses, y de 4 a 6 para recuperarse del todo",
    texto: "Subir calorías con un plan escrito antes de competir, no improvisado el lunes.",
  },
];

export default function ContestPrepTimeline() {
  return (
    <section
      aria-label="Las seis etapas de una preparación de culturismo natural: acumulación, definición, ensayo de peak week, peak week, stage y después, con el momento de cada una"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Una preparación, de principio a fin
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Seis etapas y lo que decide cada una. La última es la que más se olvida.
      </p>

      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {etapas.map((e, i) => {
          const Icon = e.icon;
          return (
            <li
              key={e.fase}
              style={{
                flex: "1 1 240px", minWidth: 0, padding: "16px 16px 18px",
                background: `linear-gradient(180deg, ${e.color}12 0%, ${e.color}05 100%)`,
                border: `1px solid ${e.color}44`, borderRadius: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div
                  style={{
                    width: 32, height: 32, borderRadius: 9,
                    background: `${e.color}22`, border: `1px solid ${e.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: e.color, flexShrink: 0,
                  }}
                >
                  <Icon size={17} />
                </div>
                <p style={{ margin: 0, fontSize: "0.98rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>
                  {i + 1}. {e.fase}
                </p>
              </div>
              <p style={{ margin: "0 0 6px", fontSize: "0.78rem", fontWeight: 700, color: e.color, lineHeight: 1.4 }}>{e.cuando}</p>
              <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{e.texto}</p>
            </li>
          );
        })}
      </ol>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Son rangos publicados, no una receta: cada atleta sale de un punto distinto. Fuentes: Roberts y colaboradores (2020) y Escalante y colaboradores (2021).
      </p>
    </section>
  );
}
