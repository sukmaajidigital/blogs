// src/app/sitemap.js
import { getSortedPostsData } from '@/lib/posts';
export const dynamic = 'force-static';

export default async function generateSitemap() {
    const siteUrl = 'https://muriabatikkudus.com';
    const currentDate = new Date().toISOString();

    // Get all blog posts
    const posts = getSortedPostsData();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add the main website URL
    xml += `
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

    // Add each post URL
    posts.forEach(post => {
        xml += `
  <url>
    <loc>${siteUrl}/${post.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    xml += `
</urlset>`;

    return xml;
}