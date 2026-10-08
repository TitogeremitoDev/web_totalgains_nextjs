import VerifactuDeclaracion from '../../components/VerifactuDeclaracion';

export const metadata = {
  title: 'VeriFactu en TotalGains',
  description: 'Cómo TotalGains cumple VeriFactu (RD 1007/2023): registro de cada factura en la Agencia Tributaria con código QR, inalterabilidad, dos modos de trabajo para gimnasios y la declaración responsable del sistema.',
  alternates: { canonical: 'https://totalgains.es/verifactu/' },
};

const H2 = ({ children }) => <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 36 }}>{children}</h2>;
const P = ({ children }) => <p style={{ lineHeight: 1.7, color: 'var(--text-secondary, #ccc)', marginBottom: 12 }}>{children}</p>;

export default function VerifactuPage() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px 120px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 8 }}>VeriFactu en TotalGains</h1>
      <p style={{ color: 'var(--text-secondary, #888)', marginBottom: 32 }}>
        Registro de facturas en la Agencia Tributaria conforme al Real Decreto 1007/2023 y la Orden HAC/1177/2024
      </p>
      <p style={{ lineHeight: 1.7, marginBottom: 16, padding: '14px 18px', borderRadius: 12, background: 'rgba(59,91,219,0.18)', border: '1px solid rgba(96,165,250,0.45)' }}>
        <strong style={{ color: '#fff' }}>Actualización del 5 de octubre de 2026.</strong> El Ministerio de Hacienda ha anunciado que la obligación de VeriFactu se aplaza a octubre de 2028. La norma todavía no está publicada; cuando lo esté, actualizaremos esta página con las fechas definitivas. Las fechas de 2027 que figuran más abajo son las vigentes hasta entonces.
      </p>
      <p style={{ lineHeight: 1.7, marginBottom: 24, padding: '14px 18px', borderRadius: 12, background: 'rgba(59,91,219,0.14)', border: '1px solid rgba(96,165,250,0.3)' }}>
        ¿Tienes un gimnasio en TotalGains? Lee la <a href="/verifactu/gimnasios/" style={{ color: '#60a5fa', fontWeight: 700 }}>guía práctica para gimnasios</a>: qué cambia, cuándo te toca y cómo activarlo paso a paso, con dos vídeos cortos.
      </p>

      <H2>Qué es VeriFactu</H2>
      <P>Desde el 1 de enero de 2027 (sociedades) y el 1 de julio de 2027 (resto de empresarios y profesionales), cada factura tiene que emitirse desde un programa adaptado que genere su registro de facturación, lo remita a la Agencia Tributaria en el momento y lo imprima con un código QR. Lo registrado no se puede alterar: los errores se corrigen con una factura rectificativa, una subsanación o una anulación con motivo.</P>

      <H2>Cómo lo hace TotalGains</H2>
      <P>TotalGains funciona exclusivamente en la modalidad VERI*FACTU. Cada factura que un gimnasio emite desde la aplicación genera su registro, que un componente certificado (Verifacti, de Bilbabit, S.L., colaborador social de la AEAT) encadena y remite a la Agencia Tributaria en nombre del gimnasio. La factura lleva el código QR y la leyenda «Factura verificable en la sede electrónica de la AEAT». Las facturas registradas no se pueden borrar ni editar desde la aplicación.</P>
      <P>El sistema da soporte a varios obligados tributarios: cada gimnasio factura con su propio NIF, su propia cadena de registros y su propia numeración, y la aplicación muestra en todo momento a qué gimnasio corresponde la operativa.</P>

      <H2>Dos modos de trabajo para el gimnasio</H2>
      <P><strong style={{ color: '#fff' }}>Hasta que el gimnasio activa VeriFactu</strong>, todo sigue como siempre. <strong style={{ color: '#fff' }}>Al activarlo</strong> (voluntariamente, o como muy tarde en su fecha legal), elige entre <em>ticket primero</em> (justificante al cobrar; factura completa registrada cuando el socio la pide) o <em>factura simplificada automática</em> (cada cobro emite una factura simplificada registrada con QR, canjeable por una completa). La activación queda documentada en un acta y, una sola vez, el gimnasio firma el modelo de representación de la AEAT que permite al componente certificado presentar sus registros. Una vez activado no se puede desactivar hasta el 31 de diciembre de ese año.</P>

      <H2>Declaración responsable del sistema informático de facturación</H2>
      <VerifactuDeclaracion />

      <H2>Contacto</H2>
      <P>Productor: Germán Martínez Calvente · NIF 77137460Z · Calle Sur, 9, 1.º A, 18140 La Zubia (Granada) · <a href="mailto:soporte@totalgains.es" style={{ color: '#60a5fa' }}>soporte@totalgains.es</a></P>
    </main>
  );
}
