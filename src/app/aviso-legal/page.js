export const metadata = {
  title: "Aviso Legal — TotalGains",
  description: "Aviso legal e información legal de TotalGains conforme a la Ley 34/2002 (LSSICE).",
  alternates: { canonical: "https://totalgains.es/aviso-legal/" },
  robots: { index: false, follow: true },
};

export default function AvisoLegal() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 120px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}>Aviso Legal</h1>
      <p style={{ color: "var(--text-secondary, #888)", marginBottom: 48 }}>
        Información legal conforme a la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSICE)
      </p>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 16 }}>Datos del titular</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
          <tbody>
            {[
              ["Nombre comercial", "TotalGains"],
              ["Titular", "Germán Martínez Calvente"],
              ["NIF", "77137460Z"],
              ["Forma jurídica", "Autónomo"],
              ["Domicilio fiscal", "C/Sur Nº9 1ª, 18140 La Zubia, Granada, España"],
              ["Email de contacto", "soporte@totalgains.es"],
              ["Sitio web", "https://totalgains.es"],
            ].map(([label, value]) => (
              <tr key={label} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "12px 0", fontWeight: 500, width: 200, color: "var(--text-secondary, #aaa)" }}>{label}</td>
                <td style={{ padding: "12px 0" }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 12 }}>Objeto y condiciones de uso</h2>
        <p style={{ lineHeight: 1.7, color: "var(--text-secondary, #ccc)" }}>
          El acceso y uso de este sitio web atribuye al usuario la condición de usuario y supone la aceptación plena de las presentes condiciones. El titular se reserva el derecho a modificar, en cualquier momento, la presentación, configuración y contenido del sitio web.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 12 }}>Propiedad intelectual e industrial</h2>
        <p style={{ lineHeight: 1.7, color: "var(--text-secondary, #ccc)" }}>
          Todos los contenidos del sitio web — textos, imágenes, diseños, logos, código fuente — son propiedad de Germán Martínez Calvente o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 12 }}>Contacto para consultas legales</h2>
        <p style={{ lineHeight: 1.7, color: "var(--text-secondary, #ccc)" }}>
          Para cualquier consulta legal, incidencia o ejercicio de derechos RGPD:<br />
          <strong>soporte@totalgains.es</strong>
        </p>
      </section>
    </main>
  );
}
