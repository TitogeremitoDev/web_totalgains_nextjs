import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import "./blog.css";

export const metadata = {
  title: "Blog para Entrenadores Personales — Consejos y Estrategias",
  description: "Artículos sobre negocio fitness, captación de clientes, herramientas y metodología para entrenadores personales online. Aprende a escalar tu negocio.",
  alternates: { canonical: "https://totalgains.es/blog/" },
  openGraph: {
    title: "Blog TotalGains | Recursos para Entrenadores Personales",
    description: "Estrategias de negocio, captación de clientes y herramientas para entrenadores personales online.",
    url: "https://totalgains.es/blog/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const CATEGORY_LABELS = {
  negocio: "Negocio",
  metodologia: "Metodología",
  herramientas: "Herramientas",
  nutricion: "Nutrición",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-bg" />
        <div className="container blog-hero-inner">
          <span className="blog-badge">
            <BookOpen size={14} /> Blog
          </span>
          <h1 className="blog-h1 gradient-text">
            Recursos para Entrenadores Personales
          </h1>
          <p className="blog-subtitle">
            Estrategias de negocio, captación de clientes y herramientas para escalar tu cartera sin trabajar más horas.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="blog-posts-section">
        <div className="container">
          {posts.length === 0 ? (
            <p className="blog-empty">Próximamente...</p>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <article key={post.slug} className="blog-card glass">
                  {post.image && (
                    <div className="blog-card-image">
                      <Link href={`/blog/${post.slug}/`}>
                        <img src={post.image} alt={post.title} loading="lazy" />
                      </Link>
                    </div>
                  )}
                  <div className="blog-card-content">
                    {post.category && (
                      <span className="blog-card-cat">
                        {CATEGORY_LABELS[post.category] || post.category}
                      </span>
                    )}
                    <h2 className="blog-card-title">
                      <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                    </h2>
                    <p className="blog-card-desc">{post.description}</p>
                    <div className="blog-card-meta">
                      {post.date && (
                        <span>
                          <Calendar size={13} />
                          {new Date(post.date).toLocaleDateString("es-ES", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      )}
                      {post.readTime && (
                        <span>
                          <Clock size={13} /> {post.readTime} min
                        </span>
                      )}
                    </div>
                    <Link href={`/blog/${post.slug}/`} className="blog-card-link">
                      Leer artículo <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta-section">
        <div className="container blog-cta-inner">
          <h2>¿Listo para escalar tu negocio?</h2>
          <p>Únete a los entrenadores que ya usan TotalGains para gestionar más clientes en menos tiempo.</p>
          <Link href="/onboarding/" className="btn btn-gold btn-lg">
            Empieza gratis 14 días
          </Link>
        </div>
      </section>
    </main>
  );
}
