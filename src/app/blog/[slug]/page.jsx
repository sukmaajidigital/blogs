// src/app/blog/[slug]/page.jsx
import { getAllPostSlugs, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";

// Function ini memberitahu Next.js halaman statis mana yang harus di-generate saat build
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

// Function ini meng-generate metadata dinamis untuk SEO
export async function generateMetadata({ params }) {
  try {
    const postData = await getPostData(params.slug);
    return {
      title: postData.title,
      description: postData.excerpt,
      openGraph: {
        title: postData.title,
        description: postData.excerpt,
        // tambahkan URL gambar jika ada di frontmatter
        // images: [postData.image],
      },
    };
  } catch (error) {
    return {
      title: "Post Not Found",
      description: "This post could not be found.",
    };
  }
}

export default async function Post({ params }) {
  let postData;
  try {
    postData = await getPostData(params.slug);
  } catch (error) {
    notFound(); // Tampilkan halaman 404 jika post tidak ditemukan
  }

  return (
    <article className="container mx-auto px-4 py-8 prose lg:prose-xl">
      <h1 className="text-4xl font-extrabold mb-2">{postData.title}</h1>
      <div className="text-gray-500 mb-8">{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
