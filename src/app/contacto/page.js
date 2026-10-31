import Link from "next/link";
import { WHATSAPP_VISIBLE, TELEFONO, whatsappUrl } from "@/data/contacto";

/* Página de contacto (31-oct-2026). La pedía la revisión «agent-ready»: un
   agente que quiere comprobar que el negocio es real busca contacto y «sobre
   nosotros» enlazados desde la portada. Antes el pie llevaba a /#contact, una
   sección que ya no existe. Solo datos que ya son públicos en la web (WhatsApp,
   correo y domicilio del aviso legal); sin prometer horarios ni tiempos de
   respuesta. */

export const metadata = {
  title: "Contacto",
  description: `Contacta con TotalGains por WhatsApp (${WHATSAPP_VISIBLE}) o por correo (soporte@totalgains.es). Software para entrenadores y gimnasios, hecho en Granada.`,
  alternates: { canonical: "https://totalgains.es/contacto/" },
  robots: { index: true, follow: true },
};

const DATOS = [
  ["WhatsApp y teléfono", <a key="w" href={whatsappUrl("Hola, tengo una pregunta sobre TotalGains")}>{WHATSAPP_VISIBLE}</a>],
  ["Correo", <a key="c" href="mailto:soporte@totalgains.es">soporte@totalgains.es</a>],
  ["Dirección", "C/Sur Nº9 1ª, 18140 La Zubia, Granada, España"],
  ["Titular", "Germán Martínez Calvente · NIF 77137460Z"],
];

export default function Contacto() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://totalgains.es/contacto/#webpage",
    url: "https://totalgains.es/contacto/",
    name: "Contacto de TotalGains",
    inLanguage: "es",
    mainEntity: {
      "@type": "Organization",
      "@id": "https://totalgains.es/#organization",
      name: "TotalGains",
      telephone: TELEFONO,
      email: "soporte@totalgains.es",
    },
  };

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 96px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}>Contacto</h1>
      <p style={{ color: "var(--text-secondary, #aaa)", lineHeight: 1.6, marginBottom: 32 }}>
        Hablas directamente con el equipo de TotalGains, en español. Escríbenos para dudas sobre los planes, una demo o
        ayuda con tu cuenta.
      </p>

      <a
        href={whatsappUrl("Hola, tengo una pregunta sobre TotalGains")}
        style={{ display: "inline-block", background: "#25D366", color: "#0b1a10", fontWeight: 700, padding: "12px 22px", borderRadius: 12, textDecoration: "none", marginBottom: 32 }}
      >
        Escríbenos por WhatsApp
      </a>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem", marginBottom: 32 }}>
        <tbody>
          {DATOS.map(([label, value]) => (
            <tr key={label} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <td style={{ padding: "12px 0", fontWeight: 500, width: 190, color: "var(--text-secondary, #aaa)" }}>{label}</td>
              <td style={{ padding: "12px 0" }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ lineHeight: 1.7, color: "var(--text-secondary, #ccc)" }}>
        También te puede servir: <Link href="/sobre-nosotros/">quién hay detrás de TotalGains</Link>,{" "}
        <Link href="/precios/">precios</Link>, <Link href="/aviso-legal/">aviso legal</Link> y{" "}
        <Link href="/privacy/">privacidad</Link>.
      </p>
    </main>
  );
}
