import { getAllPosts } from '@/lib/blog';

export const dynamic = "force-static";

export default function sitemap() {
    const baseUrl = 'https://totalgains.es';
    const posts = getAllPosts();

    return [
        { url: `${baseUrl}/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/alternativas/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/alternativas/trainerize/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/alternativas/harbiz/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/alternativas/harbiz/precios/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/alternativas/mypthub/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/alternativas/dudapp/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/alternativas/truecoach/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/alternativas/ptminder/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/alternativas/dudyfit/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/alternativas/virtuagym/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/software-entrenador-personal/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/para-gimnasios/`, lastModified: '2026-08-11' },
        { url: `${baseUrl}/ia-entrenador-personal/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/app-marca-blanca-entrenador-personal/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/base-datos-alimentos-fitness/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/app-entrenador-personal-online/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/gestion-clientes-fitness/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/plataforma-entrenamiento-online/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/software-nutricionista-online/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/casos-de-exito/nacho-pulido/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/casos-de-exito/lorena-eses/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/sobre-nosotros/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/opiniones-clientes/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/onboarding/`, lastModified: '2026-07-11' },
        { url: `${baseUrl}/aviso-legal/`, lastModified: '2026-01-01' },
        { url: `${baseUrl}/blog/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/privacy/`, lastModified: '2026-08-10' },
        { url: `${baseUrl}/terms/`, lastModified: '2026-08-10' },
        // Los posts con `canonical` propio apuntan a otra URL: no se listan
        // aquí, o el sitemap contradiría a su propio canonical.
        ...posts.filter(post => !post.canonical).map(post => ({
            url: `${baseUrl}/blog/${post.slug}/`,
            lastModified: post.lastModified || post.date || '2026-01-01',
        })),
    ];
}
