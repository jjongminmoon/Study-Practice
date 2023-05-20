import { Post } from "@/service/getPosts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts: Post[];
};

export default function FeaturedPosts({ posts }: Props) {
  return (
    <section className="px-20 mt-6">
      <h1 className="text-lg font-bold mb-2">Featured Posts</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts
          .sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          })
          .filter((post) => post.featured === true)
          .map((post) => (
            <Link key={post.path} href="">
              <Image
                className="rounded-t-lg"
                src={`/images/${post.path}.png`}
                alt={post.title}
                width={2000}
                height={2000}
              />
              <div className="flex flex-col px-5 py-3 text-xs rounded-b-lg shadow-2xl">
                <p className="ml-auto mb-2">{post.date}</p>
                <div className="flex flex-col gap-1 items-center">
                  <p className="font-bold">{post.title}</p>
                  <p className="flex justify-center w-full truncate">{post.description}</p>
                  <div className="px-3 py-1 bg-green-100 rounded-full">{post.category}</div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
