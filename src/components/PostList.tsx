"use client";

import useSWR from "swr";
import PostListCart from "./PostListCart";
import FadeSpinner from "./ui/FadeLoader";
import { SimplePost } from "@/model/post";

export default function PostList() {
  const { data: posts, isLoading } = useSWR<SimplePost[]>("/api/posts");

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
              <PostListCart post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
