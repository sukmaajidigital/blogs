// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Ganti 'my-blog' dengan nama repo Anda
const REPO_NAME = "blogs";
const SITE_URL = `https://sukmaaji.my.id/${REPO_NAME}`;

export const metadata: Metadata = {
  // Metadata Base
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Personal Blog - Muhammad Aji Sukma",
    template: `%s | Personal Blog - Muhammad Aji Sukma`,
  },
  description: "Blog pribadi tentang pengembangan web, teknologi, dan kehidupan.",
  keywords: ["Next.js", "React", "TypeScript", "Web Development", "Blog"],
  authors: [{ name: "Muhammad Aji Sukma", url: SITE_URL }],
  creator: "Muhammad Aji Sukma",

  // Open Graph (untuk social media sharing)
  openGraph: {
    title: "Personal Blog - Muhammad Aji Sukma",
    description: "Blog pribadi tentang pengembangan web, teknologi, dan kehidupan.",
    url: SITE_URL,
    siteName: "Personal Blog - Muhammad Aji Sukma",
    images: [
      {
        url: `${SITE_URL}/og-image.webp`, // Buat gambar ini dan letakkan di folder /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Personal Blog - Muhammad Aji Sukma",
    description: "Blog pribadi tentang pengembangan web, teknologi, dan kehidupan.",
    // creator: '@yourTwitterHandle', // Tambahkan handle twitter Anda
    images: [`${SITE_URL}/og-image.webp`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-blue-950 text-white`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
