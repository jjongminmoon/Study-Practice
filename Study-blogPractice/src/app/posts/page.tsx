"use client";

import { Post } from "@/service/getPosts";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  category: string;
};

const categoryList: Props[] = [
  { title: "All Posts", category: "" },
  { title: "My story", category: "my story" },
  { title: "Frontend", category: "frontend" },
  { title: "Backend", category: "backend" },
  { title: "Javascript", category: "javascript" }
];

export default function PostsPage() {
  const posts: Post[] = require("../../../data/posts.json");
  const [category, setCategory] = useState("");

  return (
    <section className="flex px-20 pt-20">
      <div className="grid grid-cols-3 gap-4 mt-10">
        {posts
          .sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          })
          .filter((post) => (category.length > 0 ? post.category === category : post))
          .map((post) => (
            <Link key={post.path} href={`/posts/${post.path}`}>
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
      <div className="w-full flex flex-col items-center mt-10">
        <h1 className="underline font-bold text-lg mb-3">Category</h1>
        {categoryList.map((item) => (
          <button
            className="hover:text-sky-400"
            key={item.title}
            onClick={() => setCategory(item.category)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </section>
  );
}
