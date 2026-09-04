import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

  return files
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      return { slug, ...data, content };
    })
    .filter(p => p.published !== false)
    // Orden: más reciente primero. El empate de fecha NO puede resolverlo el
    // orden alfabético de readdirSync, que es lo que pasaba cuando dos artículos
    // se publicaban el mismo día. Desempata por lastModified y, si también
    // coincide, por slug para que el build sea determinista.
    //
    // Para forzar el orden entre dos publicaciones del MISMO día, el frontmatter
    // admite hora en `date` (p. ej. "2026-08-28T18:00:00+02:00"). La ficha sigue
    // pintando solo el día, así que no cambia nada de cara al lector.
    .sort((a, b) => {
      const porFecha = new Date(b.date) - new Date(a.date);
      if (porFecha) return porFecha;
      const porRevision = new Date(b.lastModified || b.date) - new Date(a.lastModified || a.date);
      if (porRevision) return porRevision;
      return String(a.slug).localeCompare(String(b.slug));
    });
}

export function getPostBySlug(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return { slug, ...data, content };
}

export function getAllSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}
