import { Scale, ShieldCheck, ShieldOff, Check } from "lucide-react";

/**
 * CustomerServiceLawScope — Qué exige la Ley 10/2025 de servicios de atención
 * a la clientela y a quién protege. Texto contrastado con el BOE consolidado
 * (BOE-A-2025-26698) el 9-oct-2026: art. 2 (ámbito), art. 3.1 (clientela =
 * personas consumidoras), art. 8 (atención personalizada) y art. 17 (plazo).
 *
 * La caja de abajo es una lectura, no un artículo de la ley: por eso dice
 * «en general». Quien contrata software para su negocio actúa como
 * profesional, y la ley protege a personas consumidoras.
 */

const exige = [
  { texto: "Prohíbe atender solo con contestadores automáticos o medios parecidos.", art: "art. 8.1" },
  { texto: "Si hay bot, tiene que ofrecer una persona desde el principio de la conversación, y esa persona se identifica.", art: "art. 8.2" },
  { texto: "El 95 % de las peticiones de atención personal, atendidas de media en menos de 3 minutos.", art: "art. 8.2" },
  { texto: "Consultas y reclamaciones resueltas en un máximo de 15 días hábiles.", art: "art. 17.1" },
];

const protege = [
  "A las personas consumidoras.",
  "Frente a servicios básicos: agua, luz, gas, transporte, telecomunicaciones, correos y servicios financieros.",
  "Y frente a grandes empresas que venden a consumidores: desde 250 trabajadores, 50 millones de facturación o 43 millones de balance.",
];

export default function CustomerServiceLawScope() {
  return (
    <section
      aria-label="Resumen de la Ley 10/2025 de servicios de atención a la clientela: qué exige sobre la atención por personas y los bots, y a quién protege, que son las personas consumidoras frente a servicios básicos y grandes empresas"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        La ley de atención a la clientela, en una pantalla
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Ley 10/2025, en vigor desde el 28 de diciembre de 2025. Las empresas tienen 12 meses para adaptarse.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <article style={{ flex: "1 1 330px", minWidth: 0, padding: "18px 18px", background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: 16 }}>
          <header style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Scale size={18} style={{ color: "#22c55e", flexShrink: 0 }} />
            <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>Lo que exige</h4>
          </header>
          {exige.map((e) => (
            <div key={e.texto} style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 10 }}>
              <Check size={15} style={{ color: "#22c55e", flexShrink: 0, marginTop: 3 }} />
              <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
                {e.texto} <span style={{ fontSize: "0.72rem", color: "var(--text-secondary,#888)", whiteSpace: "nowrap" }}>({e.art})</span>
              </p>
            </div>
          ))}
        </article>

        <article style={{ flex: "1 1 330px", minWidth: 0, padding: "18px 18px", background: "rgba(79,172,254,0.06)", border: "1px solid rgba(79,172,254,0.35)", borderRadius: 16 }}>
          <header style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <ShieldCheck size={18} style={{ color: "#4facfe", flexShrink: 0 }} />
            <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 800, color: "var(--text-primary,#fff)" }}>A quién protege</h4>
          </header>
          {protege.map((p) => (
            <div key={p} style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 10 }}>
              <Check size={15} style={{ color: "#4facfe", flexShrink: 0, marginTop: 3 }} />
              <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{p}</p>
            </div>
          ))}
          <p style={{ margin: "4px 0 0", fontSize: "0.72rem", color: "var(--text-secondary,#888)" }}>(arts. 2 y 3.1)</p>
        </article>
      </div>

      <div
        style={{
          marginTop: 16, padding: "14px 16px",
          background: "rgba(250,112,154,0.08)", border: "1px solid rgba(250,112,154,0.35)", borderRadius: 12,
          display: "flex", gap: 11, alignItems: "flex-start",
        }}
      >
        <ShieldOff size={17} style={{ color: "#fa709a", flexShrink: 0, marginTop: 2 }} />
        <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.6 }}>
          <strong style={{ color: "#fa709a" }}>Lo que no cubre:</strong> cuando contratas software para tu negocio, en general actúas como profesional y no como consumidor. Que te atienda una persona depende de tu proveedor, no de la ley. Por eso hay que preguntarlo antes de firmar.
        </p>
      </div>

      <p style={{ marginTop: 16, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Texto consolidado en el{" "}
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2025-26698" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light,#8fa4f5)" }}>
          BOE (BOE-A-2025-26698)
        </a>
        . Esto es información general, no asesoramiento jurídico.
      </p>
    </section>
  );
}
