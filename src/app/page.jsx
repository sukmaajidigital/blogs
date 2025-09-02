// src/app/page.jsx
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Awesome Blog</h1>
      <section>
        <ul className="space-y-6">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <li key={slug} className="border p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Link href={`/blog/${slug}`}>
                <h2 className="text-2xl font-semibold text-blue-600 hover:underline">{title}</h2>
              </Link>
              <small className="text-gray-500">{date}</small>
              <p className="mt-2 text-gray-700">{excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
