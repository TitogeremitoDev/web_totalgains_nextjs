import Link from 'next/link';
import './guia.css';

/* ──────────────────────────────────────────────
   /verifactu/gimnasios — guía práctica para los gimnasios que usan TotalGains.
   Es la página que enlazan los avisos escritos (rondas de noviembre y diciembre)
   y el botón «Guía y vídeos» de Configuración → VeriFactu. Los dos vídeos viven
   en /video/ (sin build: se cambian con un rsync). Texto en positivo y sin
   promesas: solo lo que ya existe y lo que marca la ley.
   ────────────────────────────────────────────── */

const GUIDE_URL = 'https://totalgains.es/verifactu/gimnasios/';
const PDF_URL = '/verifactu/guia-verifactu-totalgains.pdf';

const faqs = [
  { q: '¿Por qué ya no puedo borrar ni editar una factura?', a: 'Porque lo exige la ley (Real Decreto 1007/2023): lo registrado en Hacienda no se puede alterar ni borrar, y así es en todos los programas de facturación de España. No es una decisión de TotalGains. Se corrige con una rectificativa o se anula indicando el motivo.' },
  { q: '¿Tengo que hacer algo con las facturas antiguas?', a: 'No. Lo anterior a la activación se queda como está.' },
  { q: '¿Puedo desactivarlo si cambio de opinión?', a: 'Una vez activado, la ley no permite volver atrás hasta el 31 de diciembre de ese año; y desde tu fecha legal es obligatorio. Por eso te pedimos el NIF y un código al confirmar.' },
  { q: '¿Qué datos van a Hacienda?', a: 'Los de cada factura: importes, IVA, fecha y, en las facturas completas, nombre y NIF del socio. Van a través de Verifacti (Bilbabit, S.L.), componente certificado y colaborador social de la AEAT, con servidores en la Unión Europea.' },
  { q: '¿Quién es el responsable de las facturas?', a: 'Tu gimnasio sigue siendo quien emite y quien responde de que los datos sean correctos. TotalGains genera la factura, la registra y lo guarda todo.' },
  { q: '¿Y si Hacienda no está disponible en ese momento?', a: 'La factura se registra en cuanto vuelve a estarlo, sin que hagas nada. La ley lo contempla.' },
  { q: '¿Qué ve el socio?', a: 'Su factura con un código QR. Si lo escanea, la sede de la AEAT le confirma que está registrada.' },
  { q: '¿Qué datos del socio hacen falta para la factura?', a: 'Para la completa: nombre, NIF y dirección (calle, código postal y ciudad); si falta algo, la app te pide completar su ficha y volver a generar. Para la simplificada, ninguno.' },
  { q: '¿Necesito certificado digital?', a: 'Si eres autónomo, no: la representación se firma por vídeo con tu DNI. Si eres sociedad, se firma con el certificado de la empresa.' },
  { q: '¿Cuánto cuesta?', a: 'Nada aparte de tu cuota de TotalGains.' },
  { q: '¿Dónde está la declaración responsable del programa?', a: 'En totalgains.es/verifactu y dentro de la app (Configuración → VeriFactu → Declaración responsable).' },
];

export const metadata = {
  title: 'VeriFactu para gimnasios: qué cambia y cómo activarlo',
  description: 'Guía para los gimnasios que usan TotalGains: qué es VeriFactu, cuándo es obligatorio (1 de enero de 2027 para sociedades, 1 de julio de 2027 para autónomos), qué cambia, qué no, y cómo activarlo paso a paso. Con dos vídeos cortos.',
  alternates: { canonical: GUIDE_URL },
  openGraph: {
    title: 'VeriFactu en tu gimnasio: qué es, qué cambia y cómo activarlo | TotalGains',
    description: 'Dos vídeos cortos y una guía práctica. Tus socios no notan nada; tú lo activas en diez minutos.',
    url: GUIDE_URL,
    images: [{ url: 'https://totalgains.es/video/gym-verifactu-que-es.jpg', width: 1280, height: 720, alt: 'VeriFactu llega a tu gimnasio' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

function Video({ id, name, title, caption }) {
  return (
    <div className="vfg-media">
      <video id={id} className="vfg-video" controls preload="none" playsInline poster={`/video/${name}.jpg`} title={title}>
        <source src={`/video/${name}.mp4`} type="video/mp4" />
        Tu navegador no reproduce vídeo. Puedes verlo en <a href={`/video/${name}.mp4`}>este enlace</a>.
      </video>
      <p className="vfg-caption">{caption}</p>
    </div>
  );
}

export default function VerifactuGimnasiosPage() {
  return (
    <main className="vfg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="vfg-update">
        <b>Actualización del 5 de octubre de 2026.</b> El Ministerio de Hacienda ha anunciado que la obligación de VeriFactu se aplaza a octubre de 2028, para
        hacerla coincidir con la factura electrónica. La norma todavía no está publicada; cuando lo esté, actualizaremos esta guía y los vídeos con las fechas
        definitivas. Las fechas de 2027 que ves aquí son las que siguen figurando en la ley hasta entonces. En tu gimnasio no cambia nada: todo sigue como hasta ahora.
      </div>

      <p className="vfg-eyebrow">Guía para gimnasios</p>
      <h1>VeriFactu en tu gimnasio: qué es, qué cambia y cómo activarlo</h1>
      <p className="vfg-lead">
        A partir de 2027 todas las facturas de España se registran en la Agencia Tributaria al emitirlas. TotalGains ya lo tiene listo.
        Tus socios no notan nada; tú lo activas en diez minutos, un día tranquilo, antes de tu fecha.
      </p>
      <div className="vfg-dates">
        <span className="vfg-date">Sociedades (S.L., S.A., cooperativas): <b>1 de enero de 2027</b></span>
        <span className="vfg-date">Autónomos y comunidades de bienes: <b>1 de julio de 2027</b></span>
      </div>
      <div className="vfg-ctas">
        <a className="vfg-btn" href="#video-que-es">Ver el vídeo (1 min 36 s)</a>
        <a className="vfg-btn ghost" href="#activar">Cómo se activa</a>
        <a className="vfg-btn ghost" href="#ya-no">Lo que ya no se podrá hacer</a>
        <a href={PDF_URL}>Descargar la guía en PDF</a>
      </div>

      <section className="vfg-block">
        <Video id="video-que-es" name="gym-verifactu-que-es" title="Qué es VeriFactu y qué cambia en tu gimnasio" caption="Vídeo 1 · Qué es VeriFactu, cuándo le toca a tu gimnasio, qué cambia y lo que ya no se podrá hacer (1 min 36 s)." />
        <div>
          <h2>Qué es VeriFactu, en una frase</h2>
          <p>
            Es el sistema con el que la Agencia Tributaria quiere que se emitan todas las facturas en España: cada factura se registra en Hacienda
            en el momento de emitirla y lleva un código QR con el que cualquiera puede comprobar que es auténtica. Lo fija el Real Decreto 1007/2023
            y afecta a todos los programas de facturación, no solo a TotalGains.
          </p>
          <h2>Cuándo le toca a tu gimnasio</h2>
          <table className="vfg-table">
            <thead><tr><th>Tu gimnasio es…</th><th>Obligatorio desde</th></tr></thead>
            <tbody>
              <tr><td>Una sociedad (S.L., S.A., cooperativa…)</td><td><b>1 de enero de 2027</b></td></tr>
              <tr><td>Un autónomo o una comunidad de bienes</td><td><b>1 de julio de 2027</b></td></tr>
            </tbody>
          </table>
          <p>
            Son las fechas que marca la ley hoy; si cambiaran, nos adaptaríamos y te avisaríamos. Si tributas en el País Vasco o en Navarra, sigues tu
            sistema foral y VeriFactu no se aplica; si tu empresa ya está en el SII, tampoco. Antes de activarlo, confírmalo con tu asesoría.
          </p>
        </div>
      </section>

      <section className="vfg-block media-right">
        <div>
          <h2>Qué cambia para ti</h2>
          <ol>
            <li><b>Cada factura que generes se registra en Hacienda al instante</b> y sale con su código QR y la frase «Factura verificable en la sede electrónica de la AEAT».</li>
            <li><b>Una factura registrada ya no se puede borrar ni editar.</b> Si hay que corregir algo, se hace con una factura rectificativa; si se emitió por equivocación, se anula indicando el motivo. Es la ley, y es igual en todos los programas.</li>
            <li><b>Los tickets siguen siendo tickets.</b> Puedes seguir cobrando como siempre y generar la factura cuando el socio la pida.</li>
            <li>Si Hacienda devolviera una factura (casi siempre porque el NIF o el nombre del socio no coinciden con su censo), la verás en Pagos → Facturas con el botón «Corregir y reenviar». Conserva el mismo número.</li>
          </ol>
          <h2>Qué no cambia</h2>
          <ul>
            <li><b>Tus socios no notan nada.</b> Siguen reservando, entrenando y viendo sus cosas en la app.</li>
            <li><b>Tus facturas y tickets anteriores no se tocan.</b> Lo registrado es solo lo que emitas desde la activación.</li>
            <li><b>Tus cobros y tu día a día</b> en el panel siguen igual.</li>
            <li><b>El precio.</b> VeriFactu está incluido en tu cuota de TotalGains, sin coste adicional.</li>
          </ul>
        </div>
        <div className="vfg-media">
          <div className="vfg-opt">
            <h3>El día que sea obligatorio</h3>
            <p>
              Si llega tu fecha legal y todavía no lo has activado, el panel de gestión te pedirá activarlo antes de seguir registrando cobros y facturas:
              es la única forma de que TotalGains cumpla la ley desde ese día. Tus socios siguen reservando y entrenando con normalidad. Te lo recordamos
              por email 60, 30 y 7 días antes.
            </p>
          </div>
        </div>
      </section>

      <section className="vfg-important" id="ya-no">
        <p className="vfg-eyebrow">Lo más importante</p>
        <h2>Lo que ya no se podrá hacer con VeriFactu activo, y por qué</h2>
        <p>
          Conviene saberlo antes, para que no te pille de sorpresa el día que busques el botón. Sobre las facturas ya emitidas, en TotalGains desaparecen o se bloquean estas acciones:
        </p>
        <table className="vfg-table">
          <thead><tr><th>Ya no se puede…</th><th>En su lugar…</th></tr></thead>
          <tbody>
            <tr><td><b>Borrar una factura emitida</b></td><td>Si se emitió por equivocación, se anula indicando el motivo. Su número no se reutiliza.</td></tr>
            <tr><td><b>Editar una factura</b> (importes, IVA, fecha, datos del socio)</td><td>Se emite una factura rectificativa que corrige la original.</td></tr>
            <tr><td><b>Devolver una factura a ticket</b></td><td>La factura queda registrada; si hace falta, rectificativa o anulación.</td></tr>
            <tr><td><b>Cambiar o reorganizar la numeración</b></td><td>La numeración va seguida y en orden, siempre.</td></tr>
            <tr><td><b>Ponerle a una factura la fecha de otro día</b></td><td>La factura lleva la fecha del día en que se emite; la fecha del cobro va impresa como «fecha de operación».</td></tr>
            <tr><td><b>Desactivar VeriFactu</b> una vez activado</td><td>La ley no permite volver atrás hasta el 31 de diciembre de ese año; desde tu fecha legal es obligatorio.</td></tr>
          </tbody>
        </table>
        <p>Los tickets y justificantes siguen funcionando como siempre, y las facturas que Hacienda devuelva se arreglan con «Corregir y reenviar».</p>
        <div className="vfg-why">
          <h3>Por qué: lo manda la ley, no TotalGains</h3>
          <p>
            El Real Decreto 1007/2023 obliga a que cada factura genere un registro encadenado al anterior y enviado a Hacienda en el momento, y a que el programa garantice que lo registrado no se puede
            alterar ni borrar (en palabras de la norma: integridad, inalterabilidad y trazabilidad). Un programa que permita borrar o modificar facturas no puede cumplir el reglamento, y la Ley General
            Tributaria (artículo 201 bis) sanciona tanto a quien lo fabrica como a quien lo usa, con hasta 50.000 € por ejercicio para el usuario. Por eso estas reglas son las mismas en todos los
            programas de facturación de España: TotalGains las aplica tal y como las exige la norma.
          </p>
        </div>
      </section>

      <section className="vfg-block" style={{ display: 'block' }}>
        <h2>Elige cómo quieres trabajar</h2>
        <p>Al activar VeriFactu eliges entre dos formas de trabajar. Puedes cambiar después desde la misma pantalla.</p>
        <div className="vfg-two">
          <div className="vfg-opt">
            <h3>Opción A · Ticket primero, factura cuando la pidan</h3>
            <p>Como hasta ahora. Al cobrar sale un justificante; cuando un socio quiere factura, pulsas «Generar factura» y se registra en Hacienda al instante. La opción que menos cambia tu rutina.</p>
          </div>
          <div className="vfg-opt">
            <h3>Opción B · Factura simplificada automática en cada cobro</h3>
            <p>Cada cobro emite una factura simplificada registrada con su QR, sin que hagas nada. Si un socio pide factura con su NIF, se convierte en completa. La opción que más te olvida de todo.</p>
          </div>
        </div>
      </section>

      <section className="vfg-block" id="activar">
        <Video id="video-activar" name="gym-verifactu-activar" title="Cómo activar VeriFactu paso a paso" caption="Vídeo 2 · Cómo se activa, paso a paso: requisitos, lo que aceptas y la confirmación (1 min 52 s)." />
        <div>
          <h2>Cómo se activa, paso a paso</h2>
          <p>Solo puede hacerlo el titular del gimnasio (la cuenta principal), desde el panel web o la app: <b>Configuración → VeriFactu · Agencia Tributaria → «Activar VeriFactu»</b>.</p>
          <ol className="vfg-steps">
            <li>
              <b>Requisitos.</b> Datos fiscales completos (razón social, NIF y dirección); la representación ante la Agencia Tributaria, una autorización que
              se firma una sola vez (autónomos: por vídeo con tu DNI, en dos minutos y sin certificado digital; sociedades: descargas el modelo, lo firmas con
              el certificado de la empresa y lo subes); y la forma de trabajar, A o B.
            </li>
            <li>
              <b>Lo que aceptas.</b> Seis frases claras con lo que supone activarlo (registro al instante, no se puede deshacer, emitir factura por cada cobro y
              que los datos sean correctos es responsabilidad del gimnasio, lo anterior no cambia, los datos viajan por un componente certificado con servidores
              en la Unión Europea), el anexo de condiciones y tres casillas.
            </li>
            <li>
              <b>Confirmar.</b> Escribes el NIF de tu gimnasio y el código de un solo uso que te enviamos al email. Al pulsar «Activar VeriFactu» queda firmada
              el acta con fecha, hora y dispositivo, y te la enviamos en PDF.
            </li>
          </ol>
          <div className="vfg-tip">
            <b>Antes de activar, comprueba los datos de tus socios.</b> Una factura completa lleva el nombre, el NIF y la dirección del socio (lo exige el reglamento
            de facturación); una simplificada no necesita ningún dato. En la misma tarjeta de VeriFactu, el botón «Comprobar los DNI de los socios» revisa a todos
            tus socios activos y te dice quién consta bien en Hacienda, a quién le falta el DNI, cuál no coincide y quién no tiene dirección. Se corrige en la ficha
            de cada socio. Si falta algo, la app no genera la factura completa: te pide completar la ficha y volver a generar.
          </div>
        </div>
      </section>

      <section className="vfg-faq">
        <h2>Preguntas frecuentes</h2>
        {faqs.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      <section className="vfg-contact">
        <h2>¿Dudas?</h2>
        <p>
          Escríbenos a <a href="mailto:soporte@totalgains.es">soporte@totalgains.es</a> y te ayudamos. Si tu asesoría quiere revisar algo, puede escribirnos también.
          La declaración responsable del programa está en <Link href="/verifactu/">totalgains.es/verifactu</Link>.
        </p>
      </section>
      <p className="vfg-foot">TotalGains · Germán Martínez Calvente · Esta guía se actualizará si cambia la normativa.</p>
    </main>
  );
}
