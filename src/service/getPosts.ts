import path from "path";
import { promises as fs } from "fs";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
  content: string;
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}

export async function getPost(path: string): Promise<Post | undefined> {
  const posts = await getPosts();

  return posts.find((post) => post.path === path);
}
