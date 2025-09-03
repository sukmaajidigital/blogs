// src/app/components/PostList.tsx
"use client"; // <-- Tetap Client Component

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PostListItem } from "@/lib/posts"; // Import tipe data

// Komponen ini menerima 'allPosts' sebagai props
export default function PostList({ allPosts }: { allPosts: PostListItem[] }) {
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = allPosts.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {/* Tampilkan postingan untuk halaman saat ini */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map(({ slug, date, title, excerpt, coverImage }) => (
          <article
            key={slug}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col dark:bg-gray-900 dark:text-white"
          >
            {coverImage && (
              <Link href={`/${slug}`}>
                <Image
                  src={coverImage}
                  alt={`Cover image for ${title}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </Link>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 mb-2 dark:text-gray-300">{date}</p>
              <h2 className="text-xl font-bold mb-2">
                <Link
                  href={`/${slug}`}
                  className="text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                >
                  {title}
                </Link>
              </h2>
              <p className="text-gray-700 mb-4 flex-grow dark:text-gray-200">{excerpt}</p>
              <Link
                href={`/${slug}`}
                className="font-semibold text-accent hover:text-accent-dark transition self-start mt-auto dark:text-gray-300 dark:hover:text-accent"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Kontrol Paginasi */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-6 mt-12">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-accent text-black px-6 py-2 rounded-lg hover:bg-accent-dark transition shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
          >
            Previous
          </button>
          <span className="text-gray-700 font-medium dark:text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-accent text-black px-6 py-2 rounded-lg hover:bg-accent-dark transition shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
