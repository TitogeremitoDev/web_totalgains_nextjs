import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/', '/app/', '/delete-account/'],
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            }
        ],
        sitemap: 'https://totalgains.es/sitemap.xml',
    };
}
