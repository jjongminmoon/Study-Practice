import Profile from "@/components/Profile";
import { getPosts } from "@/service/getPosts";
import Carousel from "@/components/Carousel";
import FeaturedPosts from "@/components/FeaturedPosts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Profile />
      <FeaturedPosts posts={posts} />
      <Carousel posts={posts} />
    </main>
  );
}
