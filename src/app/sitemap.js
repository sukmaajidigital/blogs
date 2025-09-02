// src/app/sitemap.js
import { getSortedPostsData } from '@/lib/posts';
export const dynamic = 'force-static';

export default function sitemap() {
    const siteUrl = 'https://sukmaaji.my.id/blogs';

    const posts = getSortedPostsData().map(({ slug }) => ({
        url: `${siteUrl}/${slug}`,
        lastModified: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.7,
    }));

    const routes = [
        { url: siteUrl, lastModified: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
    ];

    return [...routes, ...posts];
}