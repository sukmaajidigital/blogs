// src/app/page.tsx
import { getSortedPostsData } from "@/lib/posts";
import PostList from "./components/PostList"; // Import komponen klien yang baru

// Hapus 'use client'
// Komponen ini sekarang menjadi Server Component
export default function Home() {
  // Pengambilan data terjadi di server
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-3 text-gray-900 dark:text-white">
          Welcome to My Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Thoughts, stories, and ideas on web development.
        </p>
      </section>

      {/* Render komponen klien dan teruskan data sebagai props */}
      <PostList allPosts={allPostsData} />
    </div>
  );
}
