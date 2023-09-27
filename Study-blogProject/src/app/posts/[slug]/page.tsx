import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getPostData, getPosts } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { title, description } = await getPostData(slug);

  return {
    title,
    description
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg mx-40 mb-20">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {post.prev && <AdjacentPostCard post={post.prev} type="prev" />}
        <div className="border-2 border-gray-100 h-full" />
        {post.next && <AdjacentPostCard post={post.next} type="next" />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const featuredPosts = posts.filter((post) => post.featured === true);

  return featuredPosts.map((post) => ({
    slug: post.path
  }));
}
