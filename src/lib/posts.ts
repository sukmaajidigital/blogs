// src/lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";

export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  coverImage?: string;
}

export interface PostData extends PostMetadata {
  slug: string;
  contentHtml: string;
}

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

      const metadata: PostMetadata = {
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        author: matterResult.data.author,
        coverImage: matterResult.data.coverImage,
      };

      return { slug, ...metadata };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark()
    .use(remarkGfm) // dukung table, checklist, dsb
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeHighlight)
    .use(rehypeStringify /*, { allowDangerousHtml: true }*/)
    .process(content);

  const contentHtml = processed.toString();

  return {
    slug,
    contentHtml,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author,
    coverImage: data.coverImage,
  };
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => ({ slug: fileName.replace(/\.(md|mdx)$/, "") }));
}
