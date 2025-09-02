// src/app/blog/[slug]/page.tsx
import { getAllPostSlugs, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

// Generate metadata dinamis
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);
    const siteUrl = `https://${process.env.GITHUB_USER}.github.io/${process.env.REPO_NAME}`;

    return {
      title: post.title,
      description: post.excerpt,
      authors: [{ name: post.author }],
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: post.date,
        url: `${siteUrl}/${post.slug}`,
        images: post.coverImage ? [{ url: `${siteUrl}${post.coverImage}` }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: post.coverImage ? [`${siteUrl}${post.coverImage}`] : [],
      },
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

// Generate halaman statis saat build
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

// Komponen Structured Data untuk SEO
const JsonLd = ({ postData }: { postData: Awaited<ReturnType<typeof getPostData>> }) => {
  const siteUrl = `https://${process.env.GITHUB_USER}.github.io/${process.env.REPO_NAME}`;
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postData.title,
    datePublished: postData.date,
    dateModified: postData.date,
    author: [
      {
        "@type": "Person",
        name: postData.author,
        url: siteUrl,
      },
    ],
    description: postData.excerpt,
    image: postData.coverImage ? `${siteUrl}${postData.coverImage}` : `${siteUrl}/og-image.webp`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/${postData.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "My Awesome Blog",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.ico`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};

export default async function Post({ params }: Props) {
  const siteUrl = `https://${process.env.GITHUB_USER}.github.io/${process.env.REPO_NAME}`;
  let postData;
  try {
    postData = await getPostData(params.slug);
  } catch {
    notFound();
  }
  return (
    <>
      {/* Menambahkan JSON-LD ke dalam <head> */}
      <JsonLd postData={postData} />

      <article className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Link untuk kembali */}
          <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
            ← Back to all posts
          </Link>

          {/* Header Post */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              {postData.title}
            </h1>
            <p className="text-gray-500">
              By {postData.author} on {postData.date}
            </p>
          </header>

          {postData.coverImage && (
            <Image
              src={`${siteUrl}${postData.coverImage}`}
              alt={`Cover for ${postData.title}`}
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg mb-8"
            />
          )}

          {/* Konten Post */}
          <div
            className="prose prose-lg max-w-none prose-indigo"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </article>
    </>
  );
}
