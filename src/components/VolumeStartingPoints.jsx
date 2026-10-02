import { Sprout, TrendingUp, Gauge, Clock, ArrowUpRight } from "lucide-react";

/**
 * VolumeStartingPoints — Las cuatro situaciones en las que cae casi toda la
 * cartera de un entrenador, con su punto de partida de volumen y la señal que
 * dice cuándo moverlo.
 *
 * Los rangos son CRITERIO de entrenador apoyado en estudios concretos, no la
 * cifra de un único estudio, y el pie lo dice. Cada "por qué" cita solo lo que
 * su estudio mide de verdad (Barsuhn 2025: músculo sin diferencias entre
 * mantener y subir; Scarpelli 2022: volumen propio +20 % frente a 22 series).
 */

const perfiles = [
  {
    icon: Sprout,
    color: "#22c55e",
    situacion: "Empieza de cero o vuelve tras un parón",
    arranque: "8 a 10 series por músculo",
    porque: "Es el tramo donde cada serie rinde más, y con 4 ya hay crecimiento medible. Al principio limita la técnica, no las series.",
    mover: "Cuando la técnica sea estable y las cargas suban solas, añade un par de series en el músculo que quieras priorizar.",
  },
  {
    icon: TrendingUp,
    color: "#4facfe",
    situacion: "Lleva tiempo entrenando y sigue progresando",
    arranque: "Lo que ya hacía",
    porque: "En hombres entrenados, subir un 30 % o un 60 % sus series de siempre no dio más músculo en 8 semanas que mantenerlas.",
    mover: "Cuando ese músculo deje de progresar. Mientras suba, no lo toques.",
  },
  {
    icon: Gauge,
    color: "#f97316",
    situacion: "Lleva tiempo entrenando y se ha estancado",
    arranque: "Su volumen de antes + 20 %",
    porque: "En entrenados, su propio volumen más un 20 % hizo crecer más que las 22 series estándar iguales para todos.",
    mover: "A las 4 semanas. Si recupera mal, el problema no era el volumen: mira sueño, comida y esfuerzo.",
  },
  {
    icon: Clock,
    color: "#a78bfa",
    situacion: "Tiene 2 días y 45 minutos",
    arranque: "10 series en sus 2 músculos prioritarios; el resto, cerca de 4",
    porque: "Con el mismo volumen semanal, entrenar un músculo más días apenas cambia el resultado. Lo que importa es que las series quepan.",
    mover: "Cuando gane un día: úsalo para repartir, no para meter más de lo mismo.",
  },
];

export default function VolumeStartingPoints() {
  return (
    <section
      aria-label="Punto de partida de volumen semanal según la situación de cada atleta: principiante, entrenado que progresa, entrenado estancado y atleta con poco tiempo, con la señal que indica cuándo cambiarlo"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Por dónde empezar con cada atleta
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        No hay un número para todos. Hay un punto de partida para cada situación y una señal que dice cuándo moverlo.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {perfiles.map((p) => {
          const Icon = p.icon;
          return (
            <article
              key={p.situacion}
              style={{
                flex: "1 1 360px", minWidth: 0, padding: "18px 20px",
                background: `linear-gradient(180deg, ${p.color}0F 0%, ${p.color}05 100%)`,
                border: `1px solid ${p.color}44`, borderRadius: 16,
              }}
            >
              <header style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 12 }}>
                <div
                  style={{
                    width: 34, height: 34, borderRadius: 10,
                    background: `${p.color}22`, border: `1px solid ${p.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: p.color, flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <h4 style={{ margin: 0, fontSize: "0.98rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{p.situacion}</h4>
              </header>

              <div style={{ padding: "10px 12px", background: "rgba(0,0,0,0.3)", borderRadius: 10, marginBottom: 12 }}>
                <p style={{ margin: 0, fontSize: "0.68rem", color: "var(--text-secondary,#aaa)", textTransform: "uppercase", letterSpacing: 0.5 }}>Empieza en</p>
                <p style={{ margin: "3px 0 0", fontSize: "0.98rem", fontWeight: 800, color: p.color, lineHeight: 1.4 }}>{p.arranque}</p>
              </div>

              <p style={{ margin: "0 0 10px", fontSize: "0.85rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
                <strong style={{ color: "var(--text-primary,#ddd)" }}>Por qué:</strong> {p.porque}
              </p>

              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <ArrowUpRight size={15} style={{ color: p.color, flexShrink: 0, marginTop: 3 }} />
                <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
                  <strong style={{ color: p.color }}>Muévelo:</strong> {p.mover}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Puntos de partida orientativos, con las series contadas con la media serie. Son criterio de entrenador apoyado en los estudios del artículo (Pelland 2025, Barsuhn 2025, Scarpelli 2022), no la cifra de un único estudio. El ajuste fino lo decide la respuesta de cada atleta, que es justo lo que más varía.
      </p>
    </section>
  );
}
