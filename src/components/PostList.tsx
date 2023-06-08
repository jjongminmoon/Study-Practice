"use client";

import FadeSpinner from "./ui/FadeLoader";
import PostListCard from "./PostListCard";
import usePosts from "@/hooks/posts";

export default function PostList() {
  const { posts, isLoading } = usePosts();

  return (
    <section>
      {isLoading && (
        <div className="flex justify-center mt-32">
          <FadeSpinner color="pink" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className="mb-4">
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
