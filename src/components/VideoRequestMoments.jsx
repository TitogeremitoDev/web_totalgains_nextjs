import { CalendarClock, Sparkles, TrendingUp, Repeat, Hand, TriangleAlert } from "lucide-react";

/**
 * VideoRequestMoments — Los cinco momentos en que conviene pedirle un vídeo de
 * técnica al atleta, y el caso en que el vídeo no es la herramienta (dolor).
 * Base comprobada el 23-oct-2026:
 *  - Wang et al. (2025), Behav Sci 15(9):1291 (PMID 41009321): metaanálisis de
 *    29 estudios y 1.147 personas; dejar que quien aprende elija cuándo recibe
 *    la corrección no mejora la práctica del día, pero sí lo que retiene y lo
 *    que traslada a otras situaciones.
 * Los momentos y el «cada 4 a 6 semanas» son recomendación nuestra.
 */

const momentos = [
  { Icon: CalendarClock, t: "La primera semana", d: "Un vídeo de cada ejercicio principal, una serie de cada uno. Es tu valoración inicial: lo que en persona verías el primer día." },
  { Icon: Sparkles, t: "Cuando entra un ejercicio nuevo", d: "La primera sesión que lo haga. Corregir pronto cuesta menos que deshacer un mes de repeticiones." },
  { Icon: TrendingUp, t: "Cuando sube mucho el peso o bajan las repeticiones", d: "Con más carga, el gesto cambia. Es buen momento para mirar si se mantiene." },
  { Icon: Repeat, t: "Un repaso cada 4 a 6 semanas", d: "Aunque todo vaya bien: un vídeo del ejercicio principal. Sirve para corregir y, de paso, para que vea lo que ha mejorado." },
  { Icon: Hand, t: "Cuando él te lo pida", d: "Dejar que el atleta elija cuándo quiere la corrección le ayuda a retener lo aprendido, según un metaanálisis de 29 estudios." },
];

export default function VideoRequestMoments() {
  return (
    <section
      aria-label="Cuándo pedirle un vídeo de técnica al atleta: la primera semana, cuando entra un ejercicio nuevo, cuando sube mucho el peso, en un repaso cada 4 a 6 semanas y cuando él lo pida; si le duele, el vídeo no sirve para diagnosticar y hay que derivar"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Cuándo pedirle un vídeo
      </h3>
      <p style={{ margin: "0 0 22px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        No hace falta un vídeo de cada serie. Hacen falta los de estos cinco momentos.
      </p>

      <ol style={{ listStyle: "none", margin: 0, padding: 0, position: "relative" }}>
        {momentos.map(({ Icon, t, d }, i) => (
          <li key={t} style={{ display: "flex", gap: 14, alignItems: "flex-start", paddingBottom: i === momentos.length - 1 ? 0 : 16, position: "relative" }}>
            {i < momentos.length - 1 && (
              <span aria-hidden="true" style={{ position: "absolute", left: 17, top: 38, bottom: 0, width: 2, background: "rgba(102,126,234,0.25)" }} />
            )}
            <span style={{ width: 36, height: 36, borderRadius: 999, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(102,126,234,0.14)", border: "1px solid rgba(102,126,234,0.4)" }}>
              <Icon size={16} style={{ color: "#667eea" }} />
            </span>
            <div style={{ minWidth: 0, paddingTop: 4 }}>
              <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>{t}</p>
              <p style={{ margin: "3px 0 0", fontSize: "0.84rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>{d}</p>
            </div>
          </li>
        ))}
      </ol>

      <div style={{ marginTop: 20, display: "flex", gap: 10, alignItems: "flex-start", padding: "14px 16px", background: "rgba(234,179,8,0.07)", border: "1px solid rgba(234,179,8,0.35)", borderRadius: 14 }}>
        <TriangleAlert size={16} style={{ color: "#eab308", flexShrink: 0, marginTop: 2 }} />
        <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-primary,#ddd)", lineHeight: 1.55 }}>
          <strong>Si te dice que le duele, el vídeo no es la herramienta.</strong> Con un vídeo no se diagnostica nada: quita o adapta ese ejercicio y que lo vea un fisioterapeuta o un médico.
        </p>
      </div>

      <p style={{ margin: "20px 0 0", textAlign: "center", fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6 }}>
        Cinco momentos y no un vídeo de cada serie: así corriges a tiempo sin que el chat se llene. Lo de dejarle elegir sale del metaanálisis de{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/41009321/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>Wang et al., 2025</a>
        ; el resto es nuestra recomendación.
      </p>
    </section>
  );
}
