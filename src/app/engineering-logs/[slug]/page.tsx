import { getAllSlugs } from "@/core/helpers/get-all-slugs";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/engineering-logs/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return getAllSlugs().map((log) => ({ slug: log.slug }));
}

export const dynamicParams = false;
