import { CircleCheck, CircleX, Scale } from "lucide-react";

/**
 * HonestHypeRules — Lo que un entrenador puede decir para crear expectación
 * en Black Friday y lo que no. Base comprobada el 15-oct-2026:
 *  - Worchel, Lee y Adewole (1975), JPSP 32(5):906-914: lo escaso por
 *    demanda se valora más que lo escaso por accidente o lo siempre escaso.
 *  - Ley 3/1991 de Competencia Desleal (BOE-A-1991-628): art. 23.4 (afirmar
 *    falsamente disponibilidad muy limitada para meter prisa) y art. 5.1.e
 *    (engaño sobre el precio o la ventaja de precio). Vale para servicios.
 *  - Ley 7/1996 de Comercio Minorista (BOE-A-1996-1072), art. 20.1 vigente
 *    desde 28-may-2022: en artículos (productos) con rebaja, el precio
 *    anterior es el menor de los 30 días precedentes.
 */

const si = [
  { frase: "«Quedan 3 plazas»", nota: "Si quedan 3, y lo vas actualizando." },
  { frase: "«La preventa cierra el lunes 30 a las 23:59»", nota: "Si de verdad cierra." },
  { frase: "«Se han reservado 7 de las 10 plazas»", nota: "Lo escaso por demanda real es lo que más valor da: lo midió un estudio clásico de 1975." },
  { frase: "«Antes 80 €, ahora 60 €»", nota: "Solo si 80 € era tu precio real. En productos, el más bajo de los últimos 30 días." },
];

const no = [
  { frase: "Inventar plazas o fechas límite", nota: "Afirmar falsamente que algo solo estará disponible poco tiempo, para meter prisa, es engañoso (Ley de Competencia Desleal, art. 23.4)." },
  { frase: "«Última oportunidad» cada semana", nota: "La prisa falsa se nota, y la próxima vez nadie te cree." },
  { frase: "Inflar el «antes» para que el descuento parezca mayor", nota: "Engañar sobre el precio o sobre la ventaja de precio también es desleal (art. 5.1.e), y en servicios igual que en productos." },
];

export default function HonestHypeRules() {
  return (
    <section
      aria-label="Qué puede decir un entrenador para crear expectación en Black Friday y qué no: plazas, fechas límite y precios anteriores verdaderos sí; escasez inventada, urgencia falsa y precios anteriores inflados no, según la Ley de Competencia Desleal y la Ley de Comercio Minorista"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Expectación sí, trampas no
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        La regla es corta: puedes decir cualquier cosa que sea verdad.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <article style={{ flex: "1 1 330px", minWidth: 0, padding: "18px 18px", background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: 16 }}>
          <h4 style={{ margin: "0 0 14px", fontSize: "1rem", fontWeight: 800, color: "#22c55e" }}>Lo que puedes decir</h4>
          {si.map((x) => (
            <div key={x.frase} style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 12 }}>
              <CircleCheck size={16} style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }} />
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary,#ddd)" }}>{x.frase}</p>
                <p style={{ margin: "2px 0 0", fontSize: "0.82rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>{x.nota}</p>
              </div>
            </div>
          ))}
        </article>

        <article style={{ flex: "1 1 330px", minWidth: 0, padding: "18px 18px", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.35)", borderRadius: 16 }}>
          <h4 style={{ margin: "0 0 14px", fontSize: "1rem", fontWeight: 800, color: "#ef4444" }}>Lo que no</h4>
          {no.map((x) => (
            <div key={x.frase} style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 12 }}>
              <CircleX size={16} style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }} />
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary,#ddd)" }}>{x.frase}</p>
                <p style={{ margin: "2px 0 0", fontSize: "0.82rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>{x.nota}</p>
              </div>
            </div>
          ))}
        </article>
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 9, alignItems: "flex-start" }}>
        <Scale size={15} style={{ color: "var(--text-secondary,#999)", flexShrink: 0, marginTop: 3 }} />
        <p style={{ margin: 0, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
          Ley 3/1991 de Competencia Desleal, arts. 5.1.e y 23.4 (
          <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1991-628" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>BOE</a>
          ) y Ley 7/1996 de Comercio Minorista, art. 20 (
          <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1996-1072" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>BOE</a>
          ). Estudio de la escasez: Worchel, Lee y Adewole (1975), Journal of Personality and Social Psychology. Información general, no asesoramiento jurídico.
        </p>
      </div>
    </section>
  );
}
