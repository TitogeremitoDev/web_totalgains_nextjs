import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function robots() {
    // Toda la zona /app/ es la aplicación autenticada — NUNCA debe indexarse en SEO ni AI
    const APP_DISALLOW = ['/app/', '/private/', '/api/'];

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: APP_DISALLOW,
            },
            // AI crawlers — allow contenido público + disallow de la app
            { userAgent: 'GPTBot', allow: '/', disallow: APP_DISALLOW },
            { userAgent: 'Google-Extended', allow: '/', disallow: APP_DISALLOW },
            { userAgent: 'ClaudeBot', allow: '/', disallow: APP_DISALLOW },
            { userAgent: 'PerplexityBot', allow: '/', disallow: APP_DISALLOW },
            { userAgent: 'OAI-SearchBot', allow: '/', disallow: APP_DISALLOW },
            { userAgent: 'CCBot', allow: '/', disallow: APP_DISALLOW },
            { userAgent: 'anthropic-ai', allow: '/', disallow: APP_DISALLOW },
            { userAgent: 'Applebot-Extended', allow: '/', disallow: APP_DISALLOW },
            { userAgent: 'Bytespider', allow: '/', disallow: APP_DISALLOW },
            // Bing/Copilot
            { userAgent: 'bingbot', allow: '/', disallow: APP_DISALLOW },
            { userAgent: 'msnbot', allow: '/', disallow: APP_DISALLOW },
        ],
        sitemap: 'https://totalgains.es/sitemap.xml',
    };
}
