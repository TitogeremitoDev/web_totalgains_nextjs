import { getAllPosts } from '@/lib/blog';

export const dynamic = "force-static";

export default function sitemap() {
    const baseUrl = 'https://totalgains.es';
    const posts = getAllPosts();

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/alternativas/trainerize/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/alternativas/harbiz/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/alternativas/mypthub/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/alternativas/dudapp/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/alternativas/truecoach/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/alternativas/ptminder/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/alternativas/virtuagym/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/software-entrenador-personal/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ia-entrenador-personal/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/app-marca-blanca-entrenador-personal/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/base-datos-alimentos-fitness/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/app-entrenador-personal-online/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gestion-clientes-fitness/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/plataforma-entrenamiento-online/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/software-nutricionista-online/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/casos-de-exito/nacho-pulido/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/casos-de-exito/lorena-eses/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/onboarding/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${baseUrl}/terms/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        // ── Blog ──
        {
            url: `${baseUrl}/blog/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...posts.map(post => ({
            url: `${baseUrl}/blog/${post.slug}/`,
            lastModified: post.date ? new Date(post.date) : new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        })),
    ];
}
