import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { marked } from "marked";
import { Calendar, Clock, ArrowLeft, Rocket } from "lucide-react";
import "./post.css";

// Renderer personalizado: lazy loading en todas las imágenes del artículo
const renderer = new marked.Renderer();
renderer.image = (...args) => {
  let href, title, text;
  if (typeof args[0] === 'object' && args[0] !== null) {
    ({ href, title, text } = args[0]);
  } else {
    [href, title, text] = args;
  }
  return `<img src="${href}" alt="${text || ''}"${title ? ` title="${title}"` : ''} loading="lazy" decoding="async" />`;
};
marked.use({ renderer });

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://totalgains.es/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://totalgains.es/blog/${slug}/`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const CATEGORY_LABELS = {
  negocio: "Negocio",
  metodologia: "Metodología",
  herramientas: "Herramientas",
  nutricion: "Nutrición",
};

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = marked(post.content, { breaks: true });

  // Related posts (same category, max 3)
  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // Schema.org Article
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "TotalGains",
      url: "https://totalgains.es",
    },
    publisher: {
      "@type": "Organization",
      name: "TotalGains",
      url: "https://totalgains.es",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://totalgains.es/blog/${slug}/`,
    },
  };

  return (
    <main className="post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="post-article">
        {/* Back link */}
        <div className="container">
          <Link href="/blog/" className="post-back">
            <ArrowLeft size={15} /> Blog
          </Link>
        </div>

        {/* Header */}
        <header className="post-header">
          <div className="post-header-bg" />
          <div className="container post-header-inner">
            {post.category && (
              <span className="post-cat">
                {CATEGORY_LABELS[post.category] || post.category}
              </span>
            )}
            <h1 className="post-h1">{post.title}</h1>
            <p className="post-description">{post.description}</p>
            <div className="post-meta">
              {post.date && (
                <span>
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}
              {post.readTime && (
                <span>
                  <Clock size={14} /> {post.readTime} min de lectura
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="container post-layout">
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Sidebar CTA */}
          <aside className="post-sidebar">
            <div className="post-sidebar-card glass">
              <p className="post-sidebar-eyebrow">¿Quieres escalar?</p>
              <p className="post-sidebar-title">Gestiona más clientes, trabaja menos horas</p>
              <p className="post-sidebar-desc">
                TotalGains automatiza rutinas, revisiones y seguimiento. Prueba gratis 14 días.
              </p>
              <Link href="/onboarding/" className="btn btn-gold">
                <Rocket size={16} /> Empieza gratis
              </Link>
              <p className="post-sidebar-note">Sin tarjeta · Sin permanencia</p>
            </div>
          </aside>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="post-related">
            <div className="container">
              <h2 className="post-related-title">Artículos relacionados</h2>
              <div className="post-related-grid">
                {related.map((p) => (
                  <article key={p.slug} className="post-related-card glass">
                    <span className="post-related-cat">
                      {CATEGORY_LABELS[p.category] || p.category}
                    </span>
                    <h3>
                      <Link href={`/blog/${p.slug}/`}>{p.title}</Link>
                    </h3>
                    <p>{p.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
