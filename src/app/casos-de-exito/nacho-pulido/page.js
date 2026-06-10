import Image from "next/image";
import Link from "next/link";
import { Instagram, Clock, Star, ArrowLeft, Rocket } from "lucide-react";

export const metadata = {
  title: "Nacho Pulido: +25 clientes con TotalGains",
  description:
    "Caso de éxito real: Nacho Pulido (@puli.trainer), entrenador de fuerza y resistencia, pasó de gestionar clientes con Excel y WhatsApp a ahorrar 8-10 horas semanales con TotalGains.",
  alternates: {
    canonical: "https://totalgains.es/casos-de-exito/nacho-pulido/",
  },
  openGraph: {
    title: "Nacho Pulido ahorra 10h/semana con TotalGains",
    description:
      "Caso de éxito real de un entrenador personal que dejó Excel y WhatsApp para centralizar todo en TotalGains.",
    url: "https://totalgains.es/casos-de-exito/nacho-pulido/",
    images: [{ url: "/testimonials/nacho.webp", width: 400, height: 400, alt: "Nacho Pulido" }],
  },
};

const qa = [
  {
    q: "¿Cómo gestionabas antes tus asesorías?",
    a: "Antes usaba Excel, WhatsApp y mails por todos lados. Lo más pesado era perseguir pagos, recordar seguimientos y tener toda la info desordenada. Cada cliente era un hilo de mensajes diferente, y cuando tenías 15 activos la cabeza ya no podía con todo.",
  },
  {
    q: "¿Cuántos clientes tenías antes de TotalGains y cuántos tienes ahora?",
    a: "Cuando empecé con TotalGains tenía 15 clientes activos. Ahora gestiono más de 40 sin que haya aumentado el tiempo que dedico a administración — de hecho ha bajado. El sistema hace el trabajo que antes hacía yo a mano.",
  },
  {
    q: "¿Qué fue lo primero que notaste al empezar a usarlo?",
    a: "La centralización. De repente todos los clientes estaban en un solo sitio con su historial completo: entrenamientos, pagos, mensajes y progreso. No tuve que buscar nada más. Eso solo ya cambió mi forma de trabajar.",
  },
  {
    q: "¿Cómo usas la IA para crear rutinas?",
    a: "Le doy el perfil del cliente — objetivo, nivel, días disponibles — y la IA me genera una periodización completa usando mis propios ejercicios. No inventa nada genérico. El resultado parece diseñado por mí porque está basado en mi metodología y mi biblioteca. Le hago ajustes finos y listo.",
  },
  {
    q: "¿Qué es lo que más te ha cambiado?",
    a: "Tener todo centralizado: clientes, entrenamientos, pagos y comunicación en un solo sitio. Ahora todo fluye muchísimo mejor y me siento más profesional. Antes perdía clientes por falta de seguimiento. Ahora el sistema me avisa cuando alguien lleva días sin registrar entrenamientos.",
  },
  {
    q: "¿Cómo llevas los cobros ahora?",
    a: "Automáticamente. Antes era un dolor de cabeza: facturas manuales, recordatorios por WhatsApp, clientes que 'se olvidaban'. Ahora la suscripción se cobra sola, y si hay un impago el acceso se bloquea automáticamente. He recuperado tiempo y dinero que antes simplemente perdía.",
  },
  {
    q: "¿Cuánto tiempo ahorras a la semana?",
    a: "Calculo que ahorro entre 8 y 10 horas a la semana fácil. Menos líos y más tiempo para entrenar, para seguir formándome y para disfrutar. Ha sido el mejor cambio operativo que he hecho en mi negocio.",
  },
  {
    q: "¿Qué le dirías a un entrenador que todavía usa Excel y WhatsApp?",
    a: "Que ese tiempo que pierdes en administración se lo estás robando a tus clientes y a ti mismo. Yo lo aguanté más de lo que debería. El cambio a TotalGains fue en un día, y en la primera semana ya noté la diferencia. No hay vuelta atrás.",
  },
];

export default function CasoNachoPulido() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "@id": "https://totalgains.es/casos-de-exito/nacho-pulido/#review",
        author: {
          "@type": "Person",
          name: "Nacho Pulido",
          sameAs: "https://www.instagram.com/puli.trainer/",
        },
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: "TotalGains",
          applicationCategory: "HealthApplication",
          operatingSystem: "iOS, Android, Web",
          url: "https://totalgains.es/",
        },
        name: "Caso de éxito: Nacho Pulido, +25 clientes activos con TotalGains",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Tener todo centralizado — clientes, entrenamientos, pagos y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana.",
        datePublished: "2025-03-01",
        publisher: { "@type": "Organization", name: "TotalGains", url: "https://totalgains.es/" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Casos de éxito", item: "https://totalgains.es/casos-de-exito/" },
          { "@type": "ListItem", position: 3, name: "Nacho Pulido", item: "https://totalgains.es/casos-de-exito/nacho-pulido/" },
        ],
      },
    ],
  };

  return (
    <main className="caso-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="container" style={{ maxWidth: 760, padding: "120px 24px 80px" }}>
        {/* Back */}
        <Link href="/#testimonials" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: 40, textDecoration: "none" }}>
          <ArrowLeft size={14} /> Volver a la home
        </Link>

        {/* Header Title */}
        <h1 style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1.25, marginBottom: 32, paddingRight: 15, color: "var(--text-primary)" }}>
          Caso de Éxito: Cómo Nacho Pulido ahorra 10 horas a la semana centralizando sus asesorías
        </h1>

        {/* Header Profile */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <Image src="/testimonials/nacho.webp" alt="Nacho Pulido" width={80} height={80} style={{ borderRadius: "50%", border: "2px solid rgba(102,126,234,0.4)" }} />
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0, color: "var(--text-primary)" }}>Nacho Pulido</h2>
            <p style={{ color: "var(--text-secondary)", margin: "4px 0 8px", fontSize: "0.95rem" }}>Entrenador de Fuerza &amp; Resistencia</p>
            <a href="https://www.instagram.com/puli.trainer/" target="_blank" rel="noopener noreferrer"
               style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.82rem", color: "var(--primary-light)", textDecoration: "none" }}>
              <Instagram size={13} /> @puli.trainer · 1.4K seguidores
            </a>
          </div>
        </div>

        {/* Key results */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
          {[
            { value: "8–10h", label: "ahorradas cada semana" },
            { value: "15→40", label: "clientes antes y ahora" },
            { value: "1 día", label: "para completar la migración" },
          ].map(({ value, label }) => (
            <div key={label} style={{ padding: "20px 16px", background: "rgba(102,126,234,0.08)", border: "1px solid rgba(102,126,234,0.2)", borderRadius: 16, textAlign: "center" }}>
              <p style={{ fontSize: "1.8rem", fontWeight: 800, margin: 0, background: "var(--primary-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{value}</p>
              <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "0.82rem", marginTop: 4 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Stars */}
        <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
          {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />)}
        </div>

        {/* Quote */}
        <blockquote style={{ borderLeft: "3px solid var(--primary)", paddingLeft: 20, margin: "0 0 48px", fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-secondary)", fontStyle: "italic" }}>
          "Tener todo centralizado — clientes, entrenamientos, pagos y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahora todo fluye muchísimo mejor y me siento más profesional."
        </blockquote>

        {/* Q&A */}
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 24 }}>Entrevista completa</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 40 }}>
          {qa.map((item, i) => (
            <div key={i}>
              <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>— {item.q}</p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

        {/* Screenshots — vista del entorno de Nacho */}
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 16 }}>Cómo gestiona Nacho sus 40 clientes con TotalGains</h2>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>
          Tras migrar desde su sistema anterior en un día, Nacho centraliza rutinas, nutrición, cobros recurrentes y comunicación en la misma plataforma. Estas son las pantallas que utiliza con más frecuencia:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, marginBottom: 40, justifyItems: "center" }}>
          <figure style={{ margin: 0, maxWidth: 280, width: "100%" }}>
            <Image src="/screenshots/coach_rutinas.webp" alt="Editor de rutinas de TotalGains con asistente IA" width={354} height={791} style={{ width: "100%", height: "auto", borderRadius: 24, border: "1px solid rgba(255,255,255,0.08)", display: "block" }} loading="lazy" />
            <figcaption style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: 12, textAlign: "center" }}>Creador de rutinas con IA generando bloques personalizados a partir de la BBDD propia.</figcaption>
          </figure>
          <figure style={{ margin: 0, maxWidth: 280, width: "100%" }}>
            <Image src="/screenshots/coach_nutricion.webp" alt="Generador de planes nutricionales con IA en TotalGains" width={354} height={791} style={{ width: "100%", height: "auto", borderRadius: 24, border: "1px solid rgba(255,255,255,0.08)", display: "block" }} loading="lazy" />
            <figcaption style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: 12, textAlign: "center" }}>Planificación nutricional con base de +240.000 alimentos y recetas personalizables.</figcaption>
          </figure>
        </div>

        {/* Resumen de métricas visualizadas */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 56 }}>
          <div style={{ padding: 20, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)", borderRadius: 12 }}>
            <p style={{ fontSize: "1.7rem", fontWeight: 800, margin: 0, color: "#22c55e" }}>15 → 40</p>
            <p style={{ margin: "4px 0 0", color: "var(--text-secondary)", fontSize: "0.85rem" }}>clientes activos en gestión</p>
          </div>
          <div style={{ padding: 20, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)", borderRadius: 12 }}>
            <p style={{ fontSize: "1.7rem", fontWeight: 800, margin: 0, color: "#22c55e" }}>8-10h</p>
            <p style={{ margin: "4px 0 0", color: "var(--text-secondary)", fontSize: "0.85rem" }}>ahorradas a la semana</p>
          </div>
          <div style={{ padding: 20, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)", borderRadius: 12 }}>
            <p style={{ fontSize: "1.7rem", fontWeight: 800, margin: 0, color: "#22c55e" }}>1 día</p>
            <p style={{ margin: "4px 0 0", color: "var(--text-secondary)", fontSize: "0.85rem" }}>de migración completa</p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "40px 24px", background: "rgba(255,255,255,0.03)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 20 }}>¿Quieres resultados como los de Nacho?</p>
          <Link href="/onboarding" className="btn btn-gold btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <Rocket size={20} /> Empieza gratis 14 días
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: 12 }}>Sin tarjeta · Sin compromiso</p>
        </div>
      </div>
    </main>
  );
}
