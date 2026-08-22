import Link from "next/link";
import { CheckCircle } from "lucide-react";
import GraciasTracker from "./GraciasTracker";

/* ──────────────────────────────────────────────
   /gracias — SERVER COMPONENT

   Destino común de TODOS los formularios de lead (contacto de la home y los
   3 embudos /demo/*). Existir como URL propia es lo que permite medir la
   conversión como objetivo de destino en GA4/Meta sin depender de eventos
   custom, y da un sitio para el siguiente paso — que antes no existía: el
   usuario convertía y se quedaba mirando un mensaje inline.

   noindex y FUERA del sitemap: nadie debe aterrizar aquí desde Google.
   ────────────────────────────────────────────── */

export const metadata = {
  title: "Mensaje recibido",
  description: "Hemos recibido tu mensaje. Te respondemos en menos de 24 horas.",
  robots: { index: false, follow: true },
};

export default function GraciasPage() {
  return (
    <main style={{ padding: "clamp(96px, 12vw, 150px) 0 96px", minHeight: "70vh" }}>
      <GraciasTracker />
      <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
        <CheckCircle size={56} color="#22c55e" style={{ marginBottom: 20 }} aria-hidden="true" />
        <h1 style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)", fontWeight: 800, marginBottom: 16 }}>
          ¡Mensaje recibido!
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 8 }}>
          Te responderá una persona real, en español, en <strong>menos de 24 horas</strong> — normalmente mucho antes.
        </p>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginBottom: 48 }}>
          ¿Tienes prisa? Escríbenos directamente a <a href="mailto:soporte@totalgains.es"><strong>soporte@totalgains.es</strong></a>
        </p>

        {/* El siguiente paso: no dejar al lead en un callejón sin salida */}
        <section className="glass" style={{ padding: "36px 28px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>Mientras tanto…</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: 24 }}>
            No hace falta esperar la respuesta para probarlo: el plan gratuito no pide tarjeta.
          </p>
          <Link href="/onboarding/" className="btn btn-primary btn-lg">
            Empieza gratis · 5 atletas
          </Link>
          <p style={{ marginTop: 22, marginBottom: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>
            O mira cómo lo usan otros:{" "}
            <Link href="/casos-de-exito/" style={{ color: "var(--text-secondary)", textDecoration: "underline" }}>
              casos de éxito
            </Link>{" "}
            ·{" "}
            <Link href="/opiniones-clientes/" style={{ color: "var(--text-secondary)", textDecoration: "underline" }}>
              opiniones verificadas
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
