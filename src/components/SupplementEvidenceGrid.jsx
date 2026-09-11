import { CheckCircle2, HelpCircle, XCircle, MinusCircle, MessageSquareQuote } from "lucide-react";

/**
 * SupplementEvidenceGrid — Los 8 suplementos que un cliente pregunta siempre,
 * clasificados segun el marco ABCD del Instituto Australiano del Deporte.
 *
 * Hermano de EvidenceLevelGrid (articulo del ciclo menstrual): mismo lenguaje
 * de color, distinto contenido. La columna que de verdad usa el coach no es el
 * grupo, es la frase de abajo: lo que le contesta al cliente sin discutir.
 */

const GRUPO = {
  A:  { label: "Grupo A",          color: "#22c55e", icon: CheckCircle2, desc: "Evidencia sólida en situaciones concretas" },
  B:  { label: "Grupo B",          color: "#eab308", icon: HelpCircle,   desc: "Evidencia emergente o mixta" },
  C:  { label: "Grupo C",          color: "#ef4444", icon: XCircle,      desc: "La evidencia no respalda el beneficio" },
  NC: { label: "Sin clasificar",   color: "#4facfe", icon: MinusCircle,  desc: "Fuera del marco: no va de rendimiento" },
};

const suplementos = [
  {
    n: 1, nombre: "Creatina monohidrato", grupo: "A", sub: "Suplemento de rendimiento",
    que: "El más estudiado de todos. Fuerza y trabajo repetido de alta intensidad.",
    frase: "Sí, y es de los pocos donde la ciencia no discute. Monohidrato, el barato, el de siempre.",
  },
  {
    n: 2, nombre: "Cafeína", grupo: "A", sub: "Suplemento de rendimiento",
    que: "Respaldada, pero con protocolo: dosis y momento importan más que la marca.",
    frase: "Funciona, pero no es para tomarla todos los días a todas horas. Hablamos de cuándo.",
  },
  {
    n: 3, nombre: "Proteína en polvo", grupo: "A", sub: "Alimento deportivo",
    que: "Está en el grupo A como ALIMENTO, no como potenciador. Es comida cómoda.",
    frase: "No te va a dar nada que no te dé el pollo. Te da que te lo tomes cuando no hay pollo.",
  },
  {
    n: 4, nombre: "Vitamina D3", grupo: "A", sub: "Suplemento médico",
    que: "Grupo A para corregir un déficit. Si tus niveles están bien, no hay nada que corregir.",
    frase: "Depende de tu analítica, no de tu entrenamiento. Sin análisis esto es adivinar.",
  },
  {
    n: 5, nombre: "Omega 3 (aceite de pescado)", grupo: "B", sub: "Evidencia emergente",
    que: "Prometedor y con estudios en marcha, pero todavía sin el respaldo del grupo A.",
    frase: "Ni milagro ni estafa. Si comes pescado azul dos veces por semana, ya lo estás tomando.",
  },
  {
    n: 6, nombre: "Melatonina", grupo: "NC", sub: "No es un suplemento deportivo",
    que: "El marco no la clasifica porque no va de rendimiento. Su evidencia es de sueño.",
    frase: "No te va a hacer entrenar mejor. Te puede ayudar a dormir, que no es poco.",
  },
  {
    n: 7, nombre: "ZMA", grupo: "C", sub: "Sus partes van por separado",
    que: "El combo no existe en el marco. Su magnesio está en grupo C y su zinc solo cuenta para corregir un déficit.",
    frase: "Lo que te venden junto, por separado no promete lo que promete el bote.",
  },
  {
    n: 8, nombre: "BCAA", grupo: "C", sub: "Bajó de grupo B a grupo C",
    que: "Con mejor investigación la evidencia empeoró, y el marco lo degradó.",
    frase: "Si llegas a tu proteína del día, ya te los estás tomando. Dentro de la comida.",
  },
];

function Fila({ s }) {
  const g = GRUPO[s.grupo];
  const Icon = g.icon;
  return (
    <article
      style={{
        marginBottom: 14,
        padding: "18px 20px",
        background: `linear-gradient(180deg, ${g.color}0F 0%, ${g.color}05 100%)`,
        border: `1px solid ${g.color}44`,
        borderRadius: 16,
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
        <div
          style={{
            width: 38, height: 38, borderRadius: 11,
            background: `${g.color}22`, border: `1px solid ${g.color}55`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: g.color, fontSize: "1.15rem", fontWeight: 900, flexShrink: 0, whiteSpace: "nowrap",
          }}
        >
          {s.n}
        </div>
        <div style={{ flex: "1 1 200px", minWidth: 0 }}>
          <h3 style={{ margin: 0, fontSize: "1.02rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.3 }}>
            {s.nombre}
          </h3>
          <p style={{ margin: "2px 0 0", fontSize: "0.76rem", color: "var(--text-secondary,#999)" }}>{s.sub}</p>
        </div>
        <span
          style={{
            padding: "6px 12px", background: g.color, color: "#fff", borderRadius: 100,
            fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5,
            display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
          }}
        >
          <Icon size={14} /> {g.label}
        </span>
      </header>

      <p style={{ margin: "0 0 12px", fontSize: "0.86rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>{s.que}</p>

      <div style={{ padding: "11px 13px", background: "rgba(0,0,0,0.3)", borderRadius: 10, display: "flex", gap: 9, alignItems: "flex-start" }}>
        <MessageSquareQuote size={15} style={{ color: g.color, flexShrink: 0, marginTop: 3 }} />
        <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--text-primary,#ddd)", lineHeight: 1.55, fontStyle: "italic" }}>
          {s.frase}
        </p>
      </div>
    </article>
  );
}

export default function SupplementEvidenceGrid() {
  return (
    <section
      aria-label="Los ocho suplementos más preguntados clasificados según el marco ABCD del Instituto Australiano del Deporte, con la respuesta que dar al cliente en cada caso"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Los 8, con su grupo y con la frase
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        En cursiva, lo que de verdad usas: la respuesta corta que le das al cliente sin abrir un debate.
      </p>

      <div>{suplementos.map((s) => <Fila key={s.n} s={s} />)}</div>

      <p style={{ marginTop: 16, fontSize: "0.76rem", color: "var(--text-secondary,#999)", lineHeight: 1.6, textAlign: "center" }}>
        Clasificación según el <em>AIS Supplement Framework</em> del Instituto Australiano del Deporte, consultado en septiembre de 2026. El grupo A se define como <em>evidencia sólida para usarse en situaciones concretas del deporte</em>: no significa que sirva para todo el mundo ni para todo.
      </p>
    </section>
  );
}
