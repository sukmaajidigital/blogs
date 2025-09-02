// src/app/robots.js
export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://blogs.sukmaaji.my.id/sitemap.xml', // Ganti dengan URL Anda
    };
}