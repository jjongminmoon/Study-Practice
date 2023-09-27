import { getPosts } from "@/service/posts";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getPosts();

  return (
    <section className="my-20">
      <h2 className="text-2xl font-bold mt-2">You may like</h2>
      <MultiCarousel>
        {posts
          .filter((post) => post.featured === false)
          .map((post) => (
            <PostCard key={post.path} post={post} />
          ))}
      </MultiCarousel>
    </section>
  );
}
