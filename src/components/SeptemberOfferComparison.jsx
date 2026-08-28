import { TrendingDown, CalendarCheck, X, Check } from "lucide-react";

/**
 * SeptemberOfferComparison — Las dos palancas que un coach usa para cerrar en
 * septiembre, enfrentadas: bajar el precio contra cerrar la fecha de inicio.
 *
 * La tesis del bloque es que las dos generan urgencia, pero solo una deja el
 * negocio en pie en octubre. Por eso el lado del descuento va apagado y con
 * cruces, y el de la fecha va en verde con checks.
 */

const opciones = [
  {
    lado: "izq",
    color: "#ef4444",
    icon: TrendingDown,
    titulo: "Bajar el precio",
    subtitulo: "La palanca fácil",
    apagado: true,
    puntos: [
      { ok: false, t: "Funciona una vez y te ata a ese precio con ese cliente para siempre" },
      { ok: false, t: "Atrae justo al perfil que más pregunta y menos aguanta" },
      { ok: false, t: "Te obliga a captar más gente para facturar lo mismo" },
      { ok: false, t: "Y en enero tienes que volver a bajarlo para repetir el efecto" },
    ],
  },
  {
    lado: "der",
    color: "#22c55e",
    icon: CalendarCheck,
    titulo: "Cerrar la fecha de inicio",
    subtitulo: "La palanca que aguanta",
    apagado: false,
    puntos: [
      { ok: true, t: "La urgencia la pone el calendario, no tu margen" },
      { ok: true, t: "Arrancan todos a la vez, así que la primera semana la das una sola vez" },
      { ok: true, t: "Quien no entra ahora queda para la siguiente fecha, no perdido" },
      { ok: true, t: "Y el precio sigue donde estaba cuando llegue enero" },
    ],
  },
];

function Card({ o }) {
  const Icon = o.icon;
  return (
    <article
      style={{
        flex: "1 1 280px",
        minWidth: 0,
        padding: "20px 22px",
        background: `linear-gradient(180deg, ${o.color}0F 0%, ${o.color}05 100%)`,
        border: `1px solid ${o.color}44`,
        borderRadius: 16,
        opacity: o.apagado ? 0.82 : 1,
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div
          style={{
            width: 40, height: 40, borderRadius: 11,
            background: `${o.color}22`, border: `1px solid ${o.color}55`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: o.color, flexShrink: 0,
          }}
        >
          <Icon size={20} />
        </div>
        <div style={{ minWidth: 0 }}>
          <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>
            {o.titulo}
          </h4>
          <p style={{ margin: "2px 0 0", fontSize: "0.74rem", color: o.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>
            {o.subtitulo}
          </p>
        </div>
      </header>

      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {o.puntos.map((p, i) => (
          <li key={i} style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: i === o.puntos.length - 1 ? 0 : 11 }}>
            <span style={{ color: p.ok ? "#22c55e" : "#ef4444", flexShrink: 0, marginTop: 2 }}>
              {p.ok ? <Check size={16} /> : <X size={16} />}
            </span>
            <span style={{ fontSize: "0.86rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{p.t}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function SeptemberOfferComparison() {
  return (
    <section
      aria-label="Comparativa entre bajar el precio y cerrar una fecha de inicio como palanca de captación en septiembre"
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)",
        borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Las dos formas de meter prisa, y lo que cuesta cada una
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        Las dos cierran ventas en septiembre. Solo una te deja el negocio intacto para enero.
      </p>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {opciones.map((o) => (
          <Card key={o.lado} o={o} />
        ))}
      </div>

      <p style={{ marginTop: 18, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        La escasez que funciona en septiembre no es de dinero, es de sitio y de fecha. Y esa no te la tienes que inventar: es verdad, porque tu tiempo tiene un límite.
      </p>
    </section>
  );
}
