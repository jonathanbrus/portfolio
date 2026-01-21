import path from "node:path";
import fs from "node:fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { getAllSlugs } from "@/core/helpers/get-all-slugs";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/engineering-logs", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return (
    <article>
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ marginBottom: "0.5rem" }}>{data.title}</h1>
        <p style={{ color: "gray" }}>
          {data.category} • {data.date} • <strong>ROI: {data.roi}</strong>
        </p>
      </header>

      <MDXRemote source={content} components={useMDXComponents()} />
    </article>
  );
}

export function generateStaticParams() {
  return getAllSlugs().map((log) => ({ slug: log.slug }));
}

export const dynamicParams = false;
