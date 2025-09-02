// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Ganti 'my-blog' dengan nama repo Anda
const REPO_NAME = "blogs";
const GITHUB_USERNAME = "sukmaajidigital";
const SITE_URL = `https://${GITHUB_USERNAME}.github.io/${REPO_NAME}`;

export const metadata: Metadata = {
  // Metadata Base
  metadataBase: new URL(SITE_URL),
  title: {
    default: "My Awesome Blog",
    template: `%s | My Awesome Blog`,
  },
  description: "A personal blog about web development, technology, and life.",
  keywords: ["Next.js", "React", "TypeScript", "Web Development", "Blog"],
  authors: [{ name: "Your Name", url: SITE_URL }],
  creator: "Your Name",

  // Open Graph (untuk social media sharing)
  openGraph: {
    title: "My Awesome Blog",
    description: "A personal blog about web development, technology, and life.",
    url: SITE_URL,
    siteName: "My Awesome Blog",
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
    title: "My Awesome Blog",
    description: "A personal blog about web development, technology, and life.",
    // creator: '@yourTwitterHandle', // Tambahkan handle twitter Anda
    images: [`${SITE_URL}/og-image.webp`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
