import { Timer, CalendarDays, Smartphone, Building2 } from "lucide-react";

/**
 * PtPriceQuick — Los cuatro precios que más se buscan de un entrenador personal en
 * España, cada uno con su fuente. Leídos por mí en cada página el 27-nov-2026
 * (copia en ~/Escritorio/PLANES/blog-cuanto-cobra/datos/competencia/):
 *  - Cronoshare (página fechada el 12-ene-2026): presencial 15-60 €, media 30-35 €.
 *  - Trustlocal: con dos sesiones por semana, 240-400 € al mes.
 *  - Enfaf: online 50-150 € al mes; gimnasio o cadena 25-50 € por sesión (o bono).
 *  - Trustlocal: online con llamadas semanales, de 100 a 225 € al mes.
 * Son precios de terceros y no coinciden entre sí: por eso van en rangos y con fuente.
 */

const precios = [
  { icon: Timer, color: "#fa709a", titulo: "Por sesión, presencial", valor: "30-35 €", sub: "de media. Lo habitual va de 15 a 60 €.", fuente: "Cronoshare, enero de 2026" },
  { icon: CalendarDays, color: "#8fa4f5", titulo: "Al mes, presencial", valor: "240-400 €", sub: "con dos sesiones por semana.", fuente: "Trustlocal, noviembre de 2026" },
  { icon: Smartphone, color: "#22c55e", titulo: "Online, al mes", valor: "50-150 €", sub: "con plan y seguimiento. Con videollamadas, hasta 225 €.", fuente: "Enfaf y Trustlocal, noviembre de 2026" },
  { icon: Building2, color: "#eab308", titulo: "En el gimnasio", valor: "25-50 €", sub: "por sesión, y menos por sesión si compras un bono.", fuente: "Enfaf, noviembre de 2026" },
];

export default function PtPriceQuick() {
  return (
    <section
      aria-label="Precios de un entrenador personal en España en 2026: por sesión presencial de 30 a 35 euros de media, al mes presencial de 240 a 400 euros, online de 50 a 150 euros al mes y en el gimnasio de 25 a 50 euros por sesión"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Cuánto cuesta un entrenador personal en 2026
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Los cuatro precios que más se buscan, en España y con su fuente.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {precios.map((p) => {
          const Icon = p.icon;
          return (
            <li
              key={p.titulo}
              style={{
                flex: "1 1 165px", minWidth: 0, padding: "16px 14px 18px",
                background: `linear-gradient(180deg, ${p.color}12 0%, ${p.color}05 100%)`,
                border: `1px solid ${p.color}44`, borderRadius: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, color: p.color }}>
                <Icon size={17} />
                <p style={{ margin: 0, fontSize: "0.74rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5 }}>{p.titulo}</p>
              </div>
              <p style={{ margin: "0 0 6px", fontSize: "1.6rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.15 }}>{p.valor}</p>
              <p style={{ margin: "0 0 8px", fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>{p.sub}</p>
              <p style={{ margin: 0, fontSize: "0.72rem", color: "var(--text-secondary,#999)", lineHeight: 1.4 }}>Fuente: {p.fuente}</p>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Son precios orientativos publicados por un portal de presupuestos, un directorio y una escuela de formación. No coinciden entre sí, y por eso van en rangos.
      </p>
    </section>
  );
}
