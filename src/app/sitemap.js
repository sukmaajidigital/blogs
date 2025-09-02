// src/app/sitemap.js
import { getSortedPostsData } from '@/lib/posts';

export default function sitemap() {
    const siteUrl = 'https://your-github-username.github.io/my-blog'; // Ganti dengan URL Anda

    const posts = getSortedPostsData().map(({ slug }) => ({
        url: `${siteUrl}/blog/${slug}`,
        lastModified: new Date().toISOString(),
    }));

    const routes = [
        { url: siteUrl, lastModified: new Date().toISOString() },
    ];

    return [...routes, ...posts];
}