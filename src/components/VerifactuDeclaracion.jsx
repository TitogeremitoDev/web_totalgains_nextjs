'use client';
// Declaración responsable del sistema informático de facturación (Orden
// HAC/1177/2024 art. 15): se lee de la API pública para que la versión
// publicada sea UNA (la misma que ve el gestor dentro de la app).
import { useEffect, useState } from 'react';

const API = 'https://api.totalgains.es/api/public/verifactu/declaracion';

export default function VerifactuDeclaracion() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let alive = true;
    fetch(API).then((r) => r.json()).then((d) => { if (alive) setData(d); }).catch(() => { if (alive) setError(true); });
    return () => { alive = false; };
  }, []);
  if (error) {
    return (
      <p style={{ lineHeight: 1.7, color: 'var(--text-secondary, #ccc)' }}>
        La declaración responsable se publica en esta página y dentro de la aplicación (Configuración → VeriFactu → Declaración responsable).
        Si no se muestra, escríbenos a <a href="mailto:soporte@totalgains.es" style={{ color: '#60a5fa' }}>soporte@totalgains.es</a> y te la enviamos en PDF.
      </p>
    );
  }
  if (!data) return <p style={{ color: 'var(--text-secondary, #888)' }}>Cargando…</p>;
  const lines = String(data.text || '').split('\n');
  return (
    <div>
      {data.publishedAt ? (
        <p style={{ color: 'var(--text-secondary, #888)', fontSize: '0.9rem', marginBottom: 16 }}>
          Versión {data.version} · publicada el {new Date(data.publishedAt).toLocaleDateString('es-ES')}
          {data.pdfUrl ? <> · <a href={data.pdfUrl} style={{ color: '#60a5fa' }} target="_blank" rel="noreferrer">Descargar en PDF</a></> : null}
        </p>
      ) : null}
      {lines.map((l, i) => (
        <p key={i} style={{ lineHeight: 1.7, color: i === 0 ? '#fff' : 'var(--text-secondary, #ccc)', fontWeight: i === 0 || /^[a-l]\)\s/.test(l) ? 600 : 400, margin: '0 0 10px' }}>{l}</p>
      ))}
    </div>
  );
}
