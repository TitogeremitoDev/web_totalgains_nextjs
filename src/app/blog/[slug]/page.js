import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { marked } from "marked";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import BlogCTAButton from "@/components/BlogCTAButton";
import PriceCalculatorCoach from "@/components/PriceCalculatorCoach";
import LTVCACVisualizer from "@/components/LTVCACVisualizer";
import CoachTiersVisualizer from "@/components/CoachTiersVisualizer";
import WaterfallHourlyRate from "@/components/WaterfallHourlyRate";
import InvisibleTimeChart from "@/components/InvisibleTimeChart";
import LeversRiskLadder from "@/components/LeversRiskLadder";
import CACImpactBars from "@/components/CACImpactBars";
import ScaleComparison from "@/components/ScaleComparison";
import DataRecoveryFlow from "@/components/DataRecoveryFlow";
import HistoricalTimelineClient from "@/components/HistoricalTimelineClient";
import PreventionChecklistCard from "@/components/PreventionChecklistCard";
import WhatsAppChatComparison from "@/components/WhatsAppChatComparison";
import TrustDamageScale from "@/components/TrustDamageScale";
import EvidenceLevelGrid from "@/components/EvidenceLevelGrid";
import CyclePhasesReality from "@/components/CyclePhasesReality";
import PrivacyLayersCard from "@/components/PrivacyLayersCard";
import HybridStructuresGrid from "@/components/HybridStructuresGrid";
import HybridProgrammingErrors from "@/components/HybridProgrammingErrors";
import "./post.css";

// Markers inline en el markdown que el template reemplaza por componentes React.
// Uso: colocar `<div class="__MARKER__"></div>` en el .md donde debe renderizarse
// el componente. Se pueden usar varios en el mismo post; el template divide el
// HTML por cada marker que encuentra y renderiza el componente correspondiente.
const COMPONENT_MARKERS = [
  { marker: '<div class="__calculator_mount__"></div>', Component: PriceCalculatorCoach, gate: (post) => post.calculator === "coach-price" },
  { marker: '<div class="__ltv_cac_visual__"></div>', Component: LTVCACVisualizer, gate: () => true },
  { marker: '<div class="__coach_tiers_visual__"></div>', Component: CoachTiersVisualizer, gate: () => true },
  { marker: '<div class="__waterfall_hourly__"></div>', Component: WaterfallHourlyRate, gate: () => true },
  { marker: '<div class="__invisible_time__"></div>', Component: InvisibleTimeChart, gate: () => true },
  { marker: '<div class="__levers_ladder__"></div>', Component: LeversRiskLadder, gate: () => true },
  { marker: '<div class="__cac_impact__"></div>', Component: CACImpactBars, gate: () => true },
  { marker: '<div class="__scale_comparison__"></div>', Component: ScaleComparison, gate: () => true },
  { marker: '<div class="__data_recovery_flow__"></div>', Component: DataRecoveryFlow, gate: () => true },
  { marker: '<div class="__historical_timeline_client__"></div>', Component: HistoricalTimelineClient, gate: () => true },
  { marker: '<div class="__prevention_checklist__"></div>', Component: PreventionChecklistCard, gate: () => true },
  { marker: '<div class="__whatsapp_chat_comparison__"></div>', Component: WhatsAppChatComparison, gate: () => true },
  { marker: '<div class="__trust_damage_scale__"></div>', Component: TrustDamageScale, gate: () => true },
  { marker: '<div class="__evidence_level_grid__"></div>', Component: EvidenceLevelGrid, gate: () => true },
  { marker: '<div class="__cycle_phases_reality__"></div>', Component: CyclePhasesReality, gate: () => true },
  { marker: '<div class="__privacy_layers__"></div>', Component: PrivacyLayersCard, gate: () => true },
  { marker: '<div class="__hybrid_structures__"></div>', Component: HybridStructuresGrid, gate: () => true },
  { marker: '<div class="__hybrid_errors__"></div>', Component: HybridProgrammingErrors, gate: () => true },
];

// Renderer personalizado: lazy loading + width/height por defecto para evitar CLS
// Todas las imágenes editoriales del blog se generan a 1344x768.
// Permite override per-imagen vía title con formato "WIDTHxHEIGHT" (p.ej. ![alt](src "1200x630"))
// o vía title con sufijo "Texto | 1200x630".
// También soporta un sufijo "| mobile" (opcional) que aplica class="mobile-shot" al
// <img>. Sirve para capturas de UI móvil que deben ir flotadas a la izquierda,
// pequeñas y con marco de teléfono, en vez de expandirse a full width.
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

  // Detecta sufijos de tratamiento visual en el title:
  //   "| shot"         → captura de UI desktop envuelta en frame estilo Apple keynote
  //   "| shot-mobile"  → captura de UI móvil envuelta en marco de teléfono, flotada
  //   "| mobile"       → (legacy) img suelta con estilo mobile-shot
  let className = '';
  let frameType = null;
  if (cleanTitle) {
    if (/\|\s*shot-mobile\s*$/i.test(cleanTitle)) {
      frameType = 'mobile';
      cleanTitle = cleanTitle.replace(/\s*\|\s*shot-mobile\s*$/i, '').trim() || null;
    } else if (/\|\s*shot\s*$/i.test(cleanTitle)) {
      frameType = 'desktop';
      cleanTitle = cleanTitle.replace(/\s*\|\s*shot\s*$/i, '').trim() || null;
    } else if (/\|\s*mobile\s*$/i.test(cleanTitle)) {
      className = ' class="mobile-shot"';
      cleanTitle = cleanTitle.replace(/\s*\|\s*mobile\s*$/i, '').trim() || null;
    }
  }

  const titleAttr = cleanTitle ? ` title="${cleanTitle}"` : '';
  const imgTag = `<img src="${href}" alt="${text || ''}"${titleAttr}${className} width="${width}" height="${height}" loading="lazy" decoding="async" />`;

  if (frameType) {
    const captionHtml = cleanTitle ? `<figcaption>${cleanTitle}</figcaption>` : '';
    return `<figure class="screenshot-frame screenshot-frame--${frameType}"><div class="screenshot-frame__stage">${imgTag}</div>${captionHtml}</figure>`;
  }

  return imgTag;
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
    // `canonical` en el frontmatter permite consolidar un post en otra URL
    // (contenido duplicado). El post sigue accesible; deja de indexarse.
    alternates: { canonical: post.canonical || `https://totalgains.es/blog/${slug}/` },
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

  // Detecta cada marker en orden y divide el HTML en secciones intercalando
  // los componentes React donde corresponda. Cada segmento del array final
  // es { html: string } o { component: React.Component }.
  const bodySegments = (() => {
    let segments = [{ html: htmlContent }];
    COMPONENT_MARKERS.forEach(({ marker, Component, gate }) => {
      if (!gate(post)) return;
      const next = [];
      segments.forEach((seg) => {
        if (seg.component) {
          next.push(seg);
          return;
        }
        const parts = seg.html.split(marker);
        parts.forEach((part, i) => {
          if (i > 0) next.push({ component: Component });
          next.push({ html: part });
        });
      });
      segments = next;
    });
    return segments;
  })();

  // Related posts: prefer same category, fill remainder with highest-authority
  // posts from any other category so every article shows 4 related cards even
  // when the category has fewer than 4 sibling posts (audit finding).
  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug);
  const sameCat = otherPosts.filter((p) => p.category === post.category);
  const crossCat = otherPosts
    .filter((p) => p.category !== post.category)
    .sort((a, b) => (b.lastModified || b.date || "").localeCompare(a.lastModified || a.date || ""));
  const related = [...sameCat, ...crossCat].slice(0, 4);

  const ogImage = post.image
    ? `https://totalgains.es${post.image}`
    : "https://totalgains.es/og-image.jpg";

  // Build schema graph: Article + BreadcrumbList always, plus ItemList + Reviews + FAQPage if comparison data provided
  const graph = [
    {
      "@type": "BlogPosting",
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
          "https://www.youtube.com/@totalgainsfitness",
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

  // ItemList schema for product roundup posts (comparison.reviewedProducts).
  // Only emit ItemList when there are ≥2 products (Google List rich results
  // require a real list). With 1 product, promote the Product directly to
  // the graph to avoid a semantically empty ItemList with numberOfItems=1.
  const reviewedProducts = post.comparison?.reviewedProducts || [];
  if (reviewedProducts.length >= 2) {
    graph.push({
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: reviewedProducts.length,
      itemListElement: reviewedProducts.map((product, i) => {
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
  } else if (reviewedProducts.length === 1) {
    // Single product: emit the Product directly (no ItemList wrapper) to avoid
    // exposing numberOfItems=1 which Google flags as misleading list markup.
    const product = reviewedProducts[0];
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
        reviewRating: { "@type": "Rating", ratingValue: product.rating, bestRating: 5, worstRating: 1 },
        author: { "@type": "Person", "@id": "https://totalgains.es/#founder", name: "Germán Martínez Calvente" },
        datePublished: post.date,
        reviewBody: product.pros || "",
        positiveNotes: { "@type": "ItemList", itemListElement: [{ "@type": "ListItem", position: 1, name: product.pros }] },
        negativeNotes: { "@type": "ItemList", itemListElement: [{ "@type": "ListItem", position: 1, name: product.cons }] },
      },
    };
    if (typeof product.lowPrice === "number" && typeof product.highPrice === "number") {
      productNode.offers = { "@type": "AggregateOffer", lowPrice: product.lowPrice, highPrice: product.highPrice, priceCurrency: product.priceCurrency || "EUR", offerCount: product.offerCount || 1, availability: "https://schema.org/InStock", ...(product.url ? { url: product.url } : {}) };
    } else if (typeof product.lowPrice === "number") {
      productNode.offers = { "@type": "Offer", price: product.lowPrice, priceCurrency: product.priceCurrency || "EUR", availability: "https://schema.org/InStock", ...(product.url ? { url: product.url } : {}) };
    }
    graph.push(productNode);
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
            {post.author && (
              <p className="post-author-bio" style={{ marginTop: 14, fontSize: "0.86rem", lineHeight: 1.55, color: "var(--text-secondary,#9aa)", maxWidth: 720 }}>
                <strong style={{ color: "var(--text-primary,#ddd)" }}>Germán Martínez Calvente</strong> — Fundador y desarrollador de TotalGains. Coach y desarrollador desde La Zubia (Granada). Escribe sobre gestión operativa, IA aplicada al entrenamiento y escala del negocio del entrenador personal online. <Link href="/sobre-nosotros/" style={{ color: "inherit", textDecoration: "underline dotted", textUnderlineOffset: 3 }}>Sobre el autor</Link>.
              </p>
            )}
          </div>
        </header>

        {/* Body */}
        <div className="container post-layout">
          <div className="post-body">
            {bodySegments.map((seg, i) => {
              if (seg.component) {
                const C = seg.component;
                return <C key={`seg-${i}`} />;
              }
              return <div key={`seg-${i}`} dangerouslySetInnerHTML={{ __html: seg.html }} />;
            })}
          </div>

          {/* Sidebar CTA */}
          <aside className="post-sidebar">
            <div className="post-sidebar-card glass">
              <p className="post-sidebar-eyebrow">¿Quieres escalar?</p>
              <p className="post-sidebar-title">Gestiona más clientes, trabaja menos horas</p>
              <p className="post-sidebar-desc">
                TotalGains automatiza rutinas, revisiones y seguimiento. Plan Gratuito 5 atletas o prueba Pro 14 días.
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
