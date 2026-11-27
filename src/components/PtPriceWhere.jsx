import { Building2, Home, Smartphone, Shuffle } from "lucide-react";

/**
 * PtPriceWhere — Cuánto cambia el precio de un entrenador personal según dónde se
 * entrena. Leído por mí el 27-nov-2026:
 *  - Gimnasio: Enfaf 25-50 € por sesión (o bono); Trustlocal 25-60 € por hora y
 *    paquetes de 10 sesiones desde 250 €.
 *  - A domicilio: Cronoshare 17-45 € más 5-10 € de desplazamiento; Enfaf +10-20 €
 *    sobre la tarifa base; Trustlocal 30-80 € por sesión.
 *  - Online: Enfaf 50-150 € al mes; Trustlocal 50-100 € sin videollamadas y
 *    100-225 € con llamadas semanales.
 *  - Híbrido: Cronoshare (10-ene-2026) 80-250 € al mes con 1 o 2 sesiones
 *    presenciales al mes más el online.
 */

const sitios = [
  { icon: Building2, color: "#eab308", nombre: "En el gimnasio", precio: "25-50 € por sesión", texto: "Suele venderse en bonos: diez sesiones salen desde unos 250 €. Normalmente se paga aparte de la cuota." },
  { icon: Home, color: "#fa709a", nombre: "A domicilio", precio: "De 17 a 45 €, más el desplazamiento", texto: "El desplazamiento suma de 5 a 20 € por sesión según la fuente. En grandes ciudades puede llegar a 80 €." },
  { icon: Smartphone, color: "#22c55e", nombre: "Online", precio: "50-150 € al mes", texto: "No se paga por sesión, sino una cuota con plan, seguimiento y mensajes. Con videollamadas semanales, de 100 a 225 €." },
  { icon: Shuffle, color: "#8fa4f5", nombre: "Híbrido", precio: "80-250 € al mes", texto: "Una o dos sesiones presenciales al mes y el resto, online." },
];

export default function PtPriceWhere() {
  return (
    <section
      aria-label="Precio de un entrenador personal según dónde se entrena: en el gimnasio de 25 a 50 euros por sesión, a domicilio de 17 a 45 euros más desplazamiento, online de 50 a 150 euros al mes e híbrido de 80 a 250 euros al mes"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Gimnasio, domicilio, online o híbrido
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        El mismo entrenador no cuesta lo mismo en cada sitio.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {sitios.map((s) => {
          const Icon = s.icon;
          return (
            <li
              key={s.nombre}
              style={{
                flex: "1 1 320px", minWidth: 0, display: "flex", gap: 12, padding: "14px 14px 16px",
                background: `linear-gradient(180deg, ${s.color}12 0%, ${s.color}05 100%)`,
                border: `1px solid ${s.color}44`, borderRadius: 14,
              }}
            >
              <div
                style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: `${s.color}22`, border: `1px solid ${s.color}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: s.color, flexShrink: 0,
                }}
              >
                <Icon size={17} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: "0.76rem", fontWeight: 800, color: s.color, textTransform: "uppercase", letterSpacing: 0.5 }}>{s.nombre}</p>
                <p style={{ margin: "2px 0 6px", fontSize: "1.02rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{s.precio}</p>
                <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{s.texto}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Fuentes: Enfaf, Trustlocal y Cronoshare, consultadas en noviembre de 2026.
      </p>
    </section>
  );
}
