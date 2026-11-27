import { MessageSquare, Video, MonitorPlay, Star } from "lucide-react";

/**
 * PtOnlineFormats: los cuatro formatos del entrenamiento personal online con
 * el precio que publica cada fuente (leídas el 27-nov-2026). Sustituye a la
 * tabla de Markdown del artículo de 2025, que en el móvil solo enseñaba la
 * primera columna.
 *  - Trustlocal: 50-100 € al mes sin videollamadas, 100-225 € con llamadas
 *    semanales, 15-35 € la sesión por videollamada.
 *  - Cronoshare (10-ene-2026): básico 90-120, con revisión semanal 120-150,
 *    prémium 150-300 y élite 180-340 € al mes.
 * Antes llevaba rangos orientativos de TotalGains sin fuente (hasta 400 € al
 * mes, 200 € la sesión y packs de 1.500 €) que no casaban con el resto del
 * artículo: fuera (27-nov-2026).
 */

const formatos = [
  { icon: MessageSquare, color: "#22c55e", nombre: "Seguimiento sin llamadas", rango: "50-120 € al mes", tramos: ["Plan, revisión y dudas por mensaje", "50-100 € sin videollamadas (Trustlocal)", "90-120 € el plan básico (Cronoshare)"] },
  { icon: Video, color: "#8fa4f5", nombre: "Con revisión o llamada semanal", rango: "100-225 € al mes", tramos: ["Lo anterior y una llamada cada semana", "100-225 € con llamadas semanales (Trustlocal)", "120-150 € con revisión semanal (Cronoshare)"] },
  { icon: Star, color: "#eab308", nombre: "Prémium y especialistas", rango: "150-340 € al mes", tramos: ["Más contacto y un entrenador especializado", "150-300 € el plan prémium (Cronoshare)", "180-340 € el plan élite (Cronoshare)"] },
  { icon: MonitorPlay, color: "#fa709a", nombre: "Sesión suelta por videollamada", rango: "15-35 € por sesión", tramos: ["Una clase en directo, sin cuota mensual", "15-35 € por sesión (Trustlocal)"] },
];

export default function PtOnlineFormats() {
  return (
    <section
      aria-label="Precios del entrenamiento personal online por formato: seguimiento sin llamadas de 50 a 120 euros al mes, con llamada semanal de 100 a 225 euros, planes prémium de 150 a 340 euros y sesión suelta por videollamada de 15 a 35 euros"
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
        Lo que publican Trustlocal y Cronoshare para cada formato, en España.
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
        Precios publicados por Trustlocal y por Cronoshare (enero de 2026), consultados el 27 de noviembre de 2026. Son orientativos y no coinciden entre sí: por eso cada cifra lleva su fuente.
      </p>
    </section>
  );
}
