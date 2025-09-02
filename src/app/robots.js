// src/app/robots.js

// Tambahkan baris ini
export const dynamic = 'force-static';

export default function robots() {
    // ... sisa kode Anda tetap sama
    const siteUrl = 'https://sukmaaji.my.id/blogs'; // Ganti dengan URL Anda

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}