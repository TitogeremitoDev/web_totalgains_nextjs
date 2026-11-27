import { Zap, Dumbbell, Repeat } from "lucide-react";

/**
 * RmZones — Las tres zonas de porcentaje del 1RM de la guía clásica de la NSCA
 * (Haff y Triplett, Essentials of Strength Training and Conditioning, 4.ª ed.,
 * 2016), con el peso que sale para un 1RM de 120 kg (aritmética: 85 % = 102 kg,
 * 67 % = 80,4 kg). El pie recoge el matiz de Schoenfeld y colaboradores 2021
 * (Sports 9(2):32): las cargas altas son necesarias para maximizar el 1RM, pero
 * las adaptaciones se consiguen en un abanico de cargas mucho más amplio.
 */

const zonas = [
  { icon: Zap, color: "#fa709a", nombre: "Fuerza", pct: "85 % o más", reps: "6 repeticiones o menos", ejemplo: "Con un 1RM de 120 kg: de 102 kg hacia arriba" },
  { icon: Dumbbell, color: "#8fa4f5", nombre: "Hipertrofia", pct: "Del 67 % al 85 %", reps: "De 6 a 12 repeticiones", ejemplo: "Con un 1RM de 120 kg: de 80 a 102 kg" },
  { icon: Repeat, color: "#22c55e", nombre: "Resistencia muscular", pct: "67 % o menos", reps: "12 repeticiones o más", ejemplo: "Con un 1RM de 120 kg: de 80 kg hacia abajo" },
];

export default function RmZones() {
  return (
    <section
      aria-label="Zonas de porcentaje del 1RM según la NSCA: fuerza al 85 % o más, hipertrofia del 67 al 85 % y resistencia muscular al 67 % o menos, con el ejemplo de un 1RM de 120 kilos"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Qué porcentaje para cada objetivo
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Las tres zonas de la guía clásica de la NSCA.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {zonas.map((z) => {
          const Icon = z.icon;
          return (
            <li
              key={z.nombre}
              style={{
                flex: "1 1 230px", minWidth: 0, padding: "16px 16px 18px",
                background: `linear-gradient(180deg, ${z.color}12 0%, ${z.color}05 100%)`,
                border: `1px solid ${z.color}44`, borderRadius: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div
                  style={{
                    width: 32, height: 32, borderRadius: 9,
                    background: `${z.color}22`, border: `1px solid ${z.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: z.color, flexShrink: 0,
                  }}
                >
                  <Icon size={17} />
                </div>
                <p style={{ margin: 0, fontSize: "0.76rem", fontWeight: 800, color: z.color, textTransform: "uppercase", letterSpacing: 0.6 }}>{z.nombre}</p>
              </div>
              <p style={{ margin: "0 0 4px", fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.25 }}>{z.pct}</p>
              <p style={{ margin: "0 0 8px", fontSize: "0.86rem", fontWeight: 700, color: "var(--text-primary,#fff)", lineHeight: 1.4 }}>{z.reps}</p>
              <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>{z.ejemplo}</p>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Es una guía, no una frontera. Para subir tu 1RM hacen falta cargas altas, pero el músculo responde en un abanico de cargas mucho más amplio (Schoenfeld y colaboradores, 2021).
      </p>
    </section>
  );
}
