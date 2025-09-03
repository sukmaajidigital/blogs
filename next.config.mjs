// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Aktifkan output statis
    output: 'export',

    // (PENTING) Ganti 'my-blog' dengan nama repository GitHub Anda
    basePath: '',
    assetPrefix: '/',
    // TAMBAHKAN BLOK INI
    images: {
        // Menonaktifkan Image Optimization API bawaan Next.js
        unoptimized: true,
    },
};

export default nextConfig;