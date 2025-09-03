// src/app/robots.js

// Tambahkan baris ini
export const dynamic = 'force-static';

export default function robots() {
    // ... sisa kode Anda tetap sama
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blog.sukmaaji.my.id";

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}