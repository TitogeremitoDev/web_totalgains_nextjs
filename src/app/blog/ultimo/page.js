import { redirect } from "next/navigation";
import { getAllPosts } from "@/lib/blog";

/* ──────────────────────────────────────────────
   /blog/ultimo — REDIRECT al último artículo publicado
   URL permanente para compartir en redes sociales:
   https://totalgains.es/blog/ultimo/
   ────────────────────────────────────────────── */

export const dynamic = "force-static";

export async function generateMetadata() {
  const posts = getAllPosts();
  const latest = posts[0];

  if (!latest) {
    return {
      title: "Blog TotalGains",
      description: "Últimos artículos del blog para entrenadores personales.",
      robots: { index: false, follow: true },
    };
  }

  const ogImage = latest.image
    ? `https://totalgains.es${latest.image}`
    : "https://totalgains.es/og-image.jpg";

  const targetUrl = `https://totalgains.es/blog/${latest.slug}/`;

  return {
    title: latest.seoTitle || latest.title,
    description: latest.description,
    alternates: { canonical: targetUrl },
    robots: { index: false, follow: true },
    openGraph: {
      title: latest.seoTitle || latest.title,
      description: latest.description,
      url: targetUrl,
      type: "article",
      publishedTime: latest.date,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: latest.seoTitle || latest.title,
      description: latest.description,
      images: [ogImage],
    },
  };
}

export default function UltimoArticuloPage() {
  const posts = getAllPosts();
  const latest = posts[0];

  if (!latest) {
    redirect("/blog/");
  }

  const targetUrl = `/blog/${latest.slug}/`;

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${targetUrl}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(targetUrl)});`,
        }}
      />
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: 20 }}>
          Redirigiendo al último artículo...
        </h1>
        <p style={{ color: "var(--text-secondary, #aaa)", lineHeight: 1.6 }}>
          Si no eres redirigido automáticamente,{" "}
          <a
            href={targetUrl}
            style={{ color: "var(--primary-light, #a78bfa)", textDecoration: "underline" }}
          >
            haz click aquí para ir a "{latest.title}"
          </a>
          .
        </p>
      </main>
    </>
  );
}
