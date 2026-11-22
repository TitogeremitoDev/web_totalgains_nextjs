import { Check } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   5. PARA QUIÉN ES
   ─────────────────────────────────────────────────────────── */
export default function WhoIsItForSection() {
  const useCases = [
    "Gimnasios de barrio con 50-200 socios y 2-5 entrenadores",
    "Estudios de entrenamiento personal con varios coaches",
    "Boxes de CrossFit pequeños con clases dirigidas + seguimiento individual",
    "Centros de pilates, yoga o funcional con clases sueltas y bonos",
    "Centros de tecnificación deportiva con clases programadas",
    "Gimnasios boutique premium con servicio cuidado y marca propia",
  ];

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div className="aparece" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
            ¿Es para ti?
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
            TotalGains Gym encaja con estos perfiles de centro:
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 14,
          }}
        >
          {useCases.map((uc, i) => (
            <div
              className="aparece"
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "16px 18px",
                background: "rgba(102,126,234,0.06)",
                border: "1px solid rgba(102,126,234,0.15)",
                borderRadius: 14,
              }}
          >
              <div
                style={{
                  flexShrink: 0,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "var(--primary-gradient)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <Check size={14} color="white" strokeWidth={3} />
              </div>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.93rem", lineHeight: 1.5 }}>{uc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
