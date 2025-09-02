// src/lib/posts.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Mendefinisikan tipe untuk metadata post (frontmatter)
export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  coverImage?: string;
}

// Mendefinisikan tipe untuk data post lengkap yang akan ditampilkan
export interface PostData extends PostMetadata {
  slug: string;
  contentHtml: string;
}

// Mendefinisikan tipe untuk data post di halaman list
export interface PostListItem extends PostMetadata {
  slug: string;
}

const postsDirectory = path.join(process.cwd(), "_posts");

export function getSortedPostsData(): PostListItem[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      // Validasi metadata menggunakan tipe
      const metadata: PostMetadata = {
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        author: matterResult.data.author,
        coverImage: matterResult.data.coverImage,
      };

      return {
        slug,
        ...metadata,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  const postData: PostData = {
    slug,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    excerpt: matterResult.data.excerpt,
    author: matterResult.data.author,
    coverImage: matterResult.data.coverImage,
  };

  return postData;
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.(md|mdx)$/, ""),
      };
    });
}
