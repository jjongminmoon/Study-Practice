import { getPost, getPosts } from "@/service/getPosts";
import Image from "next/image";
import { redirect } from "next/navigation";
import path from "path";
import { AiTwotoneCalendar } from "react-icons/ai";
import { promises as fs } from "fs";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const content = await getMarkdown(slug);

  if (!post) {
    redirect("/posts");
  }

  return (
    <section className="pt-20 px-48">
      <div className="p-10">
        <div className="h-80 relative">
          <Image className="rounded-t-xl" src={`/images/${post.path}.png`} alt={post.path} fill />
        </div>
        <article className="p-3 bg-gray-200 rounded-b-xl">
          <div className="flex gap-1 items-center justify-end text-sky-700 text-xs font-bold">
            <AiTwotoneCalendar />
            <p className="pt-0.5">{post.date}</p>
          </div>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm font-bold mb-2">{post.description}</p>
          <div className="border-2 border-sky-700 bg-sky-700 w-1/5 h-1 mb-10" />
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.path
  }));
}

async function getMarkdown(slug: string) {
  const filePath = path.join(process.cwd(), "data", "posts", `${slug}.md`);
  const data = await fs.readFile(filePath, "utf-8");
  return data;
}
