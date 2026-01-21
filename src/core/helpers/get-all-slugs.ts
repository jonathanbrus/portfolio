import path from "node:path";
import fs from "node:fs";
import matter from "gray-matter";

const LOGS_PATH = path.join(process.cwd(), "src/content/engineering-logs");
const files = fs.readdirSync(LOGS_PATH);

export const getAllSlugs = () => {
  return files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(LOGS_PATH, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(".mdx", ""),
        title: data.title || filename,
        date: data.date || "Unknown Date",
        category: data.category || "General",
        roi: data.roi || "N/A",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
