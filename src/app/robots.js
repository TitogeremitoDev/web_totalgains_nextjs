import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/api/'],
        },
        sitemap: 'https://totalgains.es/sitemap.xml',
    };
}
