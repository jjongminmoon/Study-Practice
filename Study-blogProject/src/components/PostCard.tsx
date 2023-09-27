import { Post } from "@/service/posts";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/posts/${post.path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-2xl">
        <Image
          className="w-full"
          src={`/images/posts/${post.path}.png`}
          alt={post.title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-600 text-xs">{post.date.toString()}</time>
          <h3 className="w-fill truncate text-center text-lg font-bold">{post.title}</h3>
          <p className="w-full truncate text-center">{post.description}</p>
          <span className="text-sm rounded-xl bg-green-100 px-2 my-2">{post.category}</span>
        </div>
      </article>
    </Link>
  );
}
