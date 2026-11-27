import { Store, Landmark, CreditCard, Repeat, BadgeEuro, BellRing } from "lucide-react";

/**
 * PtCobrosTG — Cómo se cobra con TotalGains en un gimnasio o estudio y como
 * entrenador personal. Comprobado el 27-nov-2026 en las capturas reales de los
 * tutoriales de cobros (panel del gimnasio: «Catálogo de planes» y «Pagos del
 * gimnasio»; entrenador: «Cobros por tarjeta y SEPA»; cliente: «Activa tu plan»,
 * «Pagar ahora» y «Cuota automática») y en llms-full.txt («TotalGains no se queda
 * comisión»; el dinero va a la cuenta de Stripe del entrenador o del centro, y
 * Stripe descuenta la suya). Gimnasios primero, por norma de la casa.
 */

const pasos = [
  { icon: Store, color: "#eab308", quien: "Gimnasios y estudios", titulo: "Catálogo de planes", texto: "Cuotas y bonos con su precio. El socio los compra y los renueva desde su app." },
  { icon: Landmark, color: "#eab308", quien: "Gimnasios y estudios", titulo: "Pagos del gimnasio", texto: "Quién ha pagado, bonos vendidos, suscripciones, facturas y caja, en la misma pantalla." },
  { icon: CreditCard, color: "#22c55e", quien: "Entrenadores", titulo: "Cobros por tarjeta y SEPA", texto: "Tu cliente paga su cuota desde la app con «Pagar ahora», y tú ves cada cobro con su justificante." },
  { icon: Repeat, color: "#22c55e", quien: "Entrenadores", titulo: "Cuota automática", texto: "Por domiciliación bancaria o tarjeta: se cobra sola en cada vencimiento y el cliente la cancela cuando quiere." },
  { icon: BadgeEuro, color: "#8fa4f5", quien: "Para todos", titulo: "Sin comisión de TotalGains", texto: "El dinero va directo a tu cuenta de Stripe. Stripe descuenta la suya, y antes de cobrar ves cuánto te queda." },
  { icon: BellRing, color: "#8fa4f5", quien: "Para todos", titulo: "Avisos de renovación", texto: "El cliente ve en su app que le toca renovar, sin que tengas que perseguirlo por WhatsApp." },
];

export default function PtCobrosTG() {
  return (
    <section
      aria-label="Cómo se cobra con TotalGains: catálogo de planes y pagos del gimnasio, cobros por tarjeta y SEPA para entrenadores, cuota automática, sin comisión de TotalGains y avisos de renovación"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Poner el precio es la mitad. La otra mitad es cobrarlo
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Lo que hace TotalGains para que cobrar no dependa de acordarte.
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {pasos.map((p) => {
          const Icon = p.icon;
          return (
            <li
              key={p.titulo}
              style={{
                flex: "1 1 320px", minWidth: 0, display: "flex", gap: 12, padding: "14px 14px 16px",
                background: `linear-gradient(180deg, ${p.color}12 0%, ${p.color}05 100%)`,
                border: `1px solid ${p.color}44`, borderRadius: 14,
              }}
            >
              <div
                style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: `${p.color}22`, border: `1px solid ${p.color}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: p.color, flexShrink: 0,
                }}
              >
                <Icon size={17} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: "0.72rem", fontWeight: 800, color: p.color, textTransform: "uppercase", letterSpacing: 0.5 }}>{p.quien}</p>
                <p style={{ margin: "2px 0 6px", fontSize: "0.96rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>{p.titulo}</p>
                <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{p.texto}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <p style={{ marginTop: 18, fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Los cobros dentro de la app vienen en todos los planes de entrenador, también en el gratuito de 5 atletas, y en los planes de gimnasio.
      </p>
    </section>
  );
}
