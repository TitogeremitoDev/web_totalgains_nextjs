import { Footprints, TriangleAlert } from "lucide-react";

/**
 * VolumeEfficiencyLadder — Los tramos de eficiencia del volumen semanal para
 * hipertrofia, tal cual los publica Pelland y col. (Sports Medicine, 2025;
 * tabla 3 de la versión publicada, idéntica a la tabla 2A del preprint).
 *
 * La barra NO es "cuánto creces": es lo que CUESTA la siguiente mejora
 * detectable (series extra). Por eso crece hacia abajo. Leerla al revés es el
 * error que este componente quiere evitar. Las cifras van con "≈" porque el
 * estudio las da como aproximadas.
 */

const MAX_COSTE = 12.5;

const tramos = [
  { series: "4", nivel: "Dosis mínima", coste: null, texto: "Ya hay crecimiento medible", color: "#22c55e" },
  { series: "5 a 10", nivel: "La más rentable", coste: 6, texto: "≈ 6 series más para la siguiente mejora", color: "#22c55e", destacado: true },
  { series: "11 a 18", nivel: "Rentable", coste: 8.5, texto: "≈ 8,5 series más para la siguiente mejora", color: "#eab308" },
  { series: "19 a 29", nivel: "Cara", coste: 10.75, texto: "≈ 10,75 series más para la siguiente mejora", color: "#f97316" },
  { series: "30 a 42", nivel: "Muy cara", coste: 12.5, texto: "≈ 12,5 series más para la siguiente mejora", color: "#ef4444" },
  { series: "43 o más", nivel: "Sin datos", coste: null, texto: "No hay estudios suficientes para saberlo, y podría ser incluso peor", color: "#94a3b8", incierto: true },
];

export default function VolumeEfficiencyLadder() {
  return (
    <section
      aria-label="Escalera de eficiencia del volumen de entrenamiento para ganar músculo: con 4 series semanales por músculo ya hay crecimiento medible, y cada mejora siguiente necesita más series extra, según el metaanálisis de Pelland y colaboradores de 2025 con 67 estudios"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        La escalera del volumen: cada mejora cuesta más series
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Series por músculo y semana, con las indirectas contadas como media serie. La barra es lo que cuesta subir el siguiente escalón.
      </p>

      <div>
        {tramos.map((t) => (
          <div
            key={t.series}
            style={{
              marginBottom: 12, padding: "12px 14px", borderRadius: 12,
              background: t.destacado ? "rgba(34,197,94,0.08)" : "rgba(0,0,0,0.18)",
              border: t.destacado ? "1px solid rgba(34,197,94,0.4)" : "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
              <span style={{ fontSize: "1.02rem", fontWeight: 800, color: t.color, minWidth: 82, whiteSpace: "nowrap" }}>{t.series}</span>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: t.color, textTransform: "uppercase", letterSpacing: 0.6 }}>{t.nivel}</span>
              {t.destacado ? (
                <span
                  style={{
                    fontSize: "0.7rem", fontWeight: 700, color: "#22c55e",
                    padding: "2px 9px", borderRadius: 100, border: "1px solid rgba(34,197,94,0.5)",
                  }}
                >
                  Donde cada serie rinde más
                </span>
              ) : null}
              <span style={{ flex: "1 1 220px", fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.5 }}>{t.texto}</span>
            </div>

            {t.coste != null ? (
              <div style={{ height: 10, background: "rgba(0,0,0,0.35)", borderRadius: 100, overflow: "hidden" }}>
                <div style={{ width: `${(t.coste / MAX_COSTE) * 100}%`, height: "100%", background: t.color, borderRadius: 100 }} />
              </div>
            ) : t.incierto ? (
              <div style={{ height: 10, borderRadius: 100, border: "1px dashed rgba(148,163,184,0.6)" }} />
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <Footprints size={14} style={{ color: t.color, flexShrink: 0 }} />
                <span style={{ fontSize: "0.78rem", color: "var(--text-secondary,#aaa)" }}>El primer escalón: aquí empieza a contar</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 16, padding: "14px 16px",
          background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.32)", borderRadius: 12,
          display: "flex", gap: 11, alignItems: "flex-start",
        }}
      >
        <TriangleAlert size={17} style={{ color: "#eab308", flexShrink: 0, marginTop: 2 }} />
        <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.6 }}>
          <strong style={{ color: "#eab308" }}>Lo que la escalera no dice:</strong> no hay un número a partir del cual el músculo deje de crecer. Dice que el precio sube. Y por encima de unas 25 series semanales hay tan pocos estudios que el tramo alto es el menos seguro de todos.
        </p>
      </div>

      <p style={{ marginTop: 16, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Tramos de Pelland, Remmert, Robinson, Hinson y Zourdos,{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/41343037/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>
          Sports Medicine, 2025
        </a>
        : 67 estudios y 2.058 participantes. Una «mejora» es el menor cambio que el estudio distingue del ruido de medición, un 2 % más de tamaño muscular. Son medias: tu atleta puede estar en otro escalón.
      </p>
    </section>
  );
}
