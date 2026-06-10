import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { marked } from "marked";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import BlogCTAButton from "@/components/BlogCTAButton";
import "./post.css";

// Renderer personalizado: lazy loading + width/height por defecto para evitar CLS
// Todas las imágenes editoriales del blog se generan a 1344x768.
// Permite override per-imagen vía title con formato "WIDTHxHEIGHT" (p.ej. ![alt](src "1200x630"))
// o vía title con sufijo "Texto | 1200x630".
const DEFAULT_IMG_WIDTH = 1344;
const DEFAULT_IMG_HEIGHT = 768;
const renderer = new marked.Renderer();
renderer.image = (...args) => {
  let href, title, text;
  if (typeof args[0] === 'object' && args[0] !== null) {
    ({ href, title, text } = args[0]);
  } else {
    [href, title, text] = args;
  }

  // Intenta extraer dimensiones del title: "1200x630" o "Algo | 1200x630"
  let width = DEFAULT_IMG_WIDTH;
  let height = DEFAULT_IMG_HEIGHT;
  let cleanTitle = title;
  if (title) {
    const dimMatch = title.match(/(?:^|\s|\|\s*)(\d{2,5})x(\d{2,5})\s*$/i);
    if (dimMatch) {
      width = parseInt(dimMatch[1], 10);
      height = parseInt(dimMatch[2], 10);
      cleanTitle = title.replace(/\s*\|?\s*\d{2,5}x\d{2,5}\s*$/i, '').trim() || null;
    }
  }

  const titleAttr = cleanTitle ? ` title="${cleanTitle}"` : '';
  return `<img src="${href}" alt="${text || ''}"${titleAttr} width="${width}" height="${height}" loading="lazy" decoding="async" />`;
};
marked.use({ renderer });

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const ogImage = post.image
    ? `https://totalgains.es${post.image}`
    : "https://totalgains.es/og-image.jpg";
  return {
    title: post.seoTitle || post.title,
    description: post.description,
    alternates: { canonical: `https://totalgains.es/blog/${slug}/` },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.description,
      url: `https://totalgains.es/blog/${slug}/`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastModified || post.date,
      authors: ["https://totalgains.es/sobre-nosotros/"],
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.description,
      images: [ogImage],
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

  const ogImage = post.image
    ? `https://totalgains.es${post.image}`
    : "https://totalgains.es/og-image.jpg";

  // Build schema graph: Article + BreadcrumbList always, plus ItemList + Reviews + FAQPage if comparison data provided
  const graph = [
    {
      "@type": "Article",
      headline: post.title,
      description: post.description,
      image: {
        "@type": "ImageObject",
        url: ogImage,
        width: post.imageWidth || 1200,
        height: post.imageHeight || 630,
      },
      datePublished: post.date,
      dateModified: post.lastModified || post.date,
      inLanguage: "es",
      wordCount: (post.content || "").trim().split(/\s+/).filter(Boolean).length,
      author: {
        "@type": "Person",
        "@id": "https://totalgains.es/#founder",
        name: "Germán Martínez Calvente",
        url: "https://totalgains.es/sobre-nosotros/",
        sameAs: [
          "https://www.instagram.com/totalgainsfitness/",
          "https://www.youtube.com/channel/UCOJehcX1G6jABjONKmXCmbQ",
          "https://www.tiktok.com/@totalgainsfitness",
        ],
      },
      publisher: {
        "@id": "https://totalgains.es/#organization",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://totalgains.es/blog/${slug}/`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://totalgains.es/blog/" },
        { "@type": "ListItem", position: 3, name: post.title, item: `https://totalgains.es/blog/${slug}/` },
      ],
    },
  ];

  // ItemList schema for product roundup posts (comparison.reviewedProducts)
  if (post.comparison?.reviewedProducts?.length) {
    graph.push({
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: post.comparison.reviewedProducts.length,
      itemListElement: post.comparison.reviewedProducts.map((product, i) => {
        const productNode = {
          "@type": "Product",
          name: product.name,
          description: product.pros || `${product.name} — software para entrenadores personales`,
          image: product.image || "https://totalgains.es/og-image.jpg",
          brand: { "@type": "Brand", name: product.name },
          ...(product.url ? { url: product.url } : {}),
          review: {
            "@type": "Review",
            name: `Valoración editorial de ${product.name}`,
            reviewRating: {
              "@type": "Rating",
              ratingValue: product.rating,
              bestRating: 5,
              worstRating: 1,
            },
            author: {
              "@type": "Person",
              "@id": "https://totalgains.es/#founder",
              name: "Germán Martínez Calvente",
            },
            datePublished: post.date,
            reviewBody: product.pros || "",
            positiveNotes: { "@type": "ItemList", itemListElement: [{ "@type": "ListItem", position: 1, name: product.pros }] },
            negativeNotes: { "@type": "ItemList", itemListElement: [{ "@type": "ListItem", position: 1, name: product.cons }] },
          },
        };
        // Only emit offers if we have a numeric lowPrice (Google requires a valid float, not a range string)
        if (typeof product.lowPrice === "number" && typeof product.highPrice === "number") {
          productNode.offers = {
            "@type": "AggregateOffer",
            lowPrice: product.lowPrice,
            highPrice: product.highPrice,
            priceCurrency: product.priceCurrency || "EUR",
            offerCount: product.offerCount || 1,
            availability: "https://schema.org/InStock",
            ...(product.url ? { url: product.url } : {}),
          };
        } else if (typeof product.lowPrice === "number") {
          productNode.offers = {
            "@type": "Offer",
            price: product.lowPrice,
            priceCurrency: product.priceCurrency || "EUR",
            availability: "https://schema.org/InStock",
            ...(product.url ? { url: product.url } : {}),
          };
        }
        return {
          "@type": "ListItem",
          position: i + 1,
          item: productNode,
        };
      }),
    });
  }

  // FAQPage schema if faqs provided
  if (post.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  // HowTo schema for step-by-step guides (e.g. migration guide)
  if (post.howto?.steps?.length) {
    graph.push({
      "@type": "HowTo",
      name: post.howto.name || post.title,
      description: post.howto.description || post.description,
      totalTime: post.howto.totalTime,
      step: post.howto.steps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.name,
        text: step.text,
        url: `https://totalgains.es/blog/${slug}/#${step.anchor || `paso-${i + 1}`}`,
      })),
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <main className="post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="post-article">
        {/* Breadcrumb visible (paralelo al BreadcrumbList schema) */}
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: "0 0 12px" }}>
            <ol style={{ display: "flex", flexWrap: "wrap", gap: 6, listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Inicio</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/blog/" style={{ color: "inherit", textDecoration: "none" }}>Blog</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" style={{ color: "var(--text-secondary, #ccc)", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "60vw", whiteSpace: "nowrap" }}>{post.title}</li>
            </ol>
          </nav>
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
              {post.author && (
                <span>
                  <User size={14} /> Por{" "}
                  <Link href="/sobre-nosotros/" rel="author" style={{ color: "inherit", textDecoration: "underline dotted", textUnderlineOffset: 3 }}>
                    {post.author}
                  </Link>
                </span>
              )}
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
              <BlogCTAButton />
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
