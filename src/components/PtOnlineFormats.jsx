import { MessageSquare, Video, MonitorPlay, Package } from "lucide-react";

/**
 * PtOnlineFormats — Los cuatro formatos del entrenamiento personal online y su
 * rango por experiencia. Sustituye a la tabla de Markdown del artículo de 2025,
 * que en el móvil solo enseñaba la primera columna. Los rangos son los
 * orientativos que ya publicaba el artículo; el pie los contrasta con lo que
 * publican Trustlocal (50-100 € sin videollamadas, 100-225 € con llamadas) y
 * Cronoshare (90-150 € básico y semanal, 150-300 € premium), leído el 27-nov-2026.
 */

const formatos = [
  { icon: MessageSquare, color: "#22c55e", nombre: "Seguimiento mensual sin llamadas", rango: "50-300 € al mes", tramos: ["50-90 € con menos de 2 años de experiencia", "90-150 € con 2 a 5 años", "150-300 € con especialización o marca consolidada"] },
  { icon: Video, color: "#8fa4f5", nombre: "Seguimiento con videollamadas", rango: "120-400 € al mes", tramos: ["De 1 a 4 llamadas al mes", "120-200 € en gama media", "200-400 € en gama alta o especialistas"] },
  { icon: MonitorPlay, color: "#fa709a", nombre: "Sesión suelta en directo", rango: "25-200 € por sesión", tramos: ["25-45 € un entrenador junior", "50-100 € uno sénior", "100-200 € alto rendimiento o imagen pública"] },
  { icon: Package, color: "#eab308", nombre: "Pack de 8 a 12 semanas", rango: "200-1.500 €", tramos: ["200-400 € solo programación", "400-800 € con seguimiento completo", "800-1.500 € con llamadas, nutrición y comunidad"] },
];

export default function PtOnlineFormats() {
  return (
    <section
      aria-label="Precios del entrenamiento personal online por formato: seguimiento mensual sin llamadas de 50 a 300 euros, con videollamadas de 120 a 400 euros, sesión suelta en directo de 25 a 200 euros y pack de 8 a 12 semanas de 200 a 1.500 euros"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Tarifas del entrenamiento online, por formato
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Rangos orientativos en España según la experiencia del entrenador.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {formatos.map((f) => {
          const Icon = f.icon;
          return (
            <li
              key={f.nombre}
              style={{
                flex: "1 1 320px", minWidth: 0, padding: "16px 16px 18px",
                background: `linear-gradient(180deg, ${f.color}12 0%, ${f.color}05 100%)`,
                border: `1px solid ${f.color}44`, borderRadius: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, color: f.color }}>
                <Icon size={17} />
                <p style={{ margin: 0, fontSize: "0.76rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5 }}>{f.nombre}</p>
              </div>
              <p style={{ margin: "0 0 8px", fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.25 }}>{f.rango}</p>
              <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                {f.tramos.map((t) => (
                  <li key={t} style={{ margin: "0 0 3px", fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>{t}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Rangos orientativos de TotalGains. Como contraste, Trustlocal publica de 50 a 100 € al mes sin videollamadas y de 100 a 225 € con ellas, y Cronoshare, de 90 a 150 € el seguimiento básico y de 150 a 300 € el prémium (noviembre de 2026).
      </p>
    </section>
  );
}
