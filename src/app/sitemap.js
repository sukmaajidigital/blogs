// src/app/sitemap.js
import { getSortedPostsData } from '@/lib/posts';
export const dynamic = 'force-static';

export default function sitemap() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blog.sukmaaji.my.id";
    const changefreq = 'weekly';
    const posts = getSortedPostsData().map(({ slug }) => ({
        url: `${siteUrl}/${slug}`,
        lastModified: new Date().toISOString(),
        changefreq: changefreq,
        priority: 0.7,
    }));

    const routes = [
        { url: siteUrl, lastModified: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
    ];

    return [...routes, ...posts];
}