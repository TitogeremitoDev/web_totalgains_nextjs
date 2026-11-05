import { Drumstick, Droplet, Wheat, Clock } from "lucide-react";

/**
 * ContestPrepMacros — Los números de la comida en una preparación natural, con las
 * dos revisiones una al lado de la otra. Leído en el texto completo (5-nov-2026):
 *  - Helms, Aragon y Fitschen 2014 (JISSN 11:20): proteína 2,3-3,1 g/kg de masa
 *    magra, grasa 15-30 % de las calorías, resto hidratos, 3-6 comidas.
 *  - Roberts y colaboradores 2020 (J Hum Kinet 71:79-108): proteína 1,8-2,7 g/kg,
 *    hasta 3,5 g/kg para quien quiere frenar el hambre; grasa 10-25 %; resto
 *    hidratos; 4-5 tomas de proteína, una cerca del entreno y otra antes de dormir.
 * Son tarjetas y no una tabla porque en el móvil la tabla del blog se corta.
 */

const nutrientes = [
  { icon: Drumstick, color: "#fa709a", nombre: "Proteína", helms: "De 2,3 a 3,1 g por kilo de masa magra", roberts: "De 1,8 a 2,7 g por kilo de peso" },
  { icon: Droplet, color: "#eab308", nombre: "Grasa", helms: "Del 15 % al 30 % de las calorías", roberts: "Del 10 % al 25 % de las calorías" },
  { icon: Wheat, color: "#8fa4f5", nombre: "Hidratos", helms: "Las calorías que queden", roberts: "Las calorías que queden" },
  { icon: Clock, color: "#a78bfa", nombre: "Reparto", helms: "De 3 a 6 comidas al día", roberts: "4 o 5 tomas de proteína, una cerca del entreno y otra antes de dormir" },
];

export default function ContestPrepMacros() {
  return (
    <section
      aria-label="Proteína, grasa, hidratos y reparto de comidas en una preparación natural según las revisiones de Helms y colaboradores (2014) y Roberts y colaboradores (2020)"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Los números de la comida
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Las dos revisiones, una al lado de la otra.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {nutrientes.map((n) => {
          const Icon = n.icon;
          return (
            <li
              key={n.nombre}
              style={{
                flex: "1 1 300px", minWidth: 0, padding: "16px 16px 18px",
                background: `linear-gradient(180deg, ${n.color}12 0%, ${n.color}05 100%)`,
                border: `1px solid ${n.color}44`, borderRadius: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div
                  style={{
                    width: 32, height: 32, borderRadius: 9,
                    background: `${n.color}22`, border: `1px solid ${n.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: n.color, flexShrink: 0,
                  }}
                >
                  <Icon size={17} />
                </div>
                <p style={{ margin: 0, fontSize: "0.98rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{n.nombre}</p>
              </div>
              <p style={{ margin: "0 0 2px", fontSize: "0.7rem", fontWeight: 800, color: n.color, textTransform: "uppercase", letterSpacing: 0.6 }}>Helms, 2014</p>
              <p style={{ margin: "0 0 10px", fontSize: "0.86rem", color: "var(--text-primary,#fff)", lineHeight: 1.5 }}>{n.helms}</p>
              <p style={{ margin: "0 0 2px", fontSize: "0.7rem", fontWeight: 800, color: n.color, textTransform: "uppercase", letterSpacing: 0.6 }}>Roberts, 2020</p>
              <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--text-primary,#fff)", lineHeight: 1.5 }}>{n.roberts}</p>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Para quien lo pasa mal con el hambre, Roberts admite subir la proteína hasta 3,5 g por kilo, si no desplaza a los hidratos y la grasa hasta perjudicar el rendimiento.
      </p>
    </section>
  );
}
