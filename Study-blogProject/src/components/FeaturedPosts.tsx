import { Post, getPosts } from "@/service/posts";
import Image from "next/image";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getPosts();
  const featured = posts.filter((post) => post.featured === true);

  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={featured} />
    </section>
  );
}
