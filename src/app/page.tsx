// src/app/page.tsx
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-3">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600">Thoughts, stories, and ideas on web development.</p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allPostsData.map(({ slug, date, title, excerpt, coverImage }) => (
          <article
            key={slug}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {coverImage && (
              <Link href={`/blog/${slug}`}>
                <img
                  src={coverImage}
                  alt={`Cover image for ${title}`}
                  className="w-full h-48 object-cover"
                />
              </Link>
            )}
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{date}</p>
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/blog/${slug}`} className="text-gray-900 hover:text-blue-600">
                  {title}
                </Link>
              </h2>
              <p className="text-gray-700 mb-4">{excerpt}</p>
              <Link href={`/blog/${slug}`} className="font-semibold text-blue-600 hover:underline">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
