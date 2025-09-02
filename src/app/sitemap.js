// src/app/sitemap.js
import { getSortedPostsData } from '@/lib/posts';
export const dynamic = 'force-static';

export default function sitemap() {
    const siteUrl = 'https://sukmaaji.my.id/blogs'; // Ganti dengan URL Anda

    const posts = getSortedPostsData().map(({ slug }) => ({
        url: `${siteUrl}/${slug}`,
        lastModified: new Date().toISOString(),
    }));

    const routes = [
        { url: siteUrl, lastModified: new Date().toISOString() },
    ];

    return [...routes, ...posts];
}