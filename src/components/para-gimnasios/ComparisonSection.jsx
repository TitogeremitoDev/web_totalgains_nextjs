import Link from "next/link";

/* ───────────────────────────────────────────────────────────
   6. COMPARATIVA: lo que pagas de verdad
   Rivales que citan ChatGPT y Gemini para gimnasios en España.
   Cada dato sale de la web oficial de cada programa, leída el
   24-nov-2026 (fichero de fuentes con URL y cita literal:
   ~/.cache/tg-seo-nov/rivales-gimnasios-2026-11-24.md).
   Decisiones de German (propuesta gimnasios-chatgpt-gemini, 24-nov):
   con nombre y fuente, sin enlazarles; «trae / no trae / aparte»
   sin adjetivos; y los que no publican precio, también.
   Al cambiar un dato: volver a mirar su web y cambiar FECHA_DATOS.
   ─────────────────────────────────────────────────────────── */
const FECHA_DATOS = "24 de noviembre de 2026";

const COLUMNAS = ["Precio al mes", "IVA", "Entrenadores", "App con tu marca", "Facturación", "Rutinas"];

const FILAS = [
  { nombre: "TotalGains", tg: true, datos: ["149, 199 o 249 €", "Incluido", "Ilimitados", "Incluida", "Incluida", "Incluidas, con IA"] },
  { nombre: "Gestión Gym", datos: ["29, 49 o 99 €", "Sin IVA", "1, 5 o ilimitados", "Sin app de tienda", "Sí", "No aparece"] },
  { nombre: "TIMP", datos: ["50 a 170 €", "No lo dice", "1, 3, 10 o 15", "Solo web", "Sí", "Desde 85 €"] },
  { nombre: "WodBuster", datos: ["34, 44 o 54 €", "No lo dice", "No lo publica", "No lo publica", "Aparte", "En otra app"] },
  { nombre: "Trainingym", datos: ["99 a 319 € + alta", "Sin IVA", "No lo publica", "Solo plan Pro", "Servicio externo", "Sí"] },
  { nombre: "GestionaTuBox", datos: ["34,95 € (oferta)", "Sin IVA", "Módulo +10 €", "Aparte", "+15 €", "+15 €"] },
  { nombre: "Trainin", datos: ["29 o 49 €", "Sin IVA", "+5 € cada uno", "+29 €", "Sí", "+24 €"] },
  { nombre: "GymGym", datos: ["Desde 47,50 €", "Sin IVA", "No lo publica", "A la carta", "No lo dice", "Solo Premium"] },
  { nombre: "Mindbody", datos: ["Desde 99 €", "Sin IVA", "Ilimitados", "Complemento", "No lo dice", "No aparece"] },
  { nombre: "Bsport", datos: ["Desde 139 €", "En presupuesto", "No lo publica", "Plan Engage", "Plan Engage", "No aparece"] },
];

const SIN_PRECIO = "Virtuagym, Resasports, AimHarder y Glofox no publican su precio: hay que pedir una demo.";

export default function ComparisonSection() {
  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-darker)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="aparece" style={{ textAlign: "center", marginBottom: 40 }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "var(--primary-light)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Lo que pagas de verdad
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
            Con IVA, sin coste por entrenador y sin módulos aparte
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: 760, margin: "0 auto" }}>
            El precio que anuncian casi nunca es el que se paga: suele ir sin IVA, limita los entrenadores y deja
            fuera la app, la facturación o las rutinas. Esto publica cada programa en su web oficial, a {FECHA_DATOS}.
          </p>
        </div>

        <div
          className="aparece"
          style={{
            overflowX: "auto",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.86rem", minWidth: 900 }}>
            <thead>
              <tr style={{ background: "rgba(102,126,234,0.08)" }}>
                <th style={{ padding: 14, textAlign: "left", color: "var(--text-secondary)", fontWeight: 600 }}>
                  Programa
                </th>
                {COLUMNAS.map((c) => (
                  <th key={c} style={{ padding: 14, textAlign: "left", color: "var(--text-secondary)", fontWeight: 600 }}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FILAS.map((f) => (
                <tr
                  key={f.nombre}
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    background: f.tg ? "rgba(102,126,234,0.07)" : undefined,
                  }}
                >
                  <td style={{ padding: 14, fontWeight: 700, whiteSpace: "nowrap" }}>
                    {f.tg ? (
                      <span
                        style={{
                          background: "var(--primary-gradient)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: 800,
                        }}
                      >
                        {f.nombre}
                      </span>
                    ) : (
                      f.nombre
                    )}
                  </td>
                  {f.datos.map((d, i) => (
                    <td
                      key={i}
                      style={{
                        padding: 14,
                        color: f.tg ? "var(--text-primary)" : "var(--text-secondary)",
                        fontWeight: f.tg ? 700 : 400,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {d}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: 14, textAlign: "center", lineHeight: 1.6 }}>
          {SIN_PRECIO} Precios en € al mes, tal como los publica cada uno. «Aparte», «a la carta» o «complemento»: se
          contrata como extra. «No aparece»: su web no lo ofrece. Si algún dato ha cambiado, escríbenos y lo corregimos.
          Fuentes y detalle en{" "}
          <Link href="/blog/cuanto-cuesta-software-gimnasio-2026/" prefetch={false} style={{ color: "var(--primary-light)" }}>
            cuánto cuesta de verdad un software para gimnasio
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
