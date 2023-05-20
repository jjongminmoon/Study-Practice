"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Post } from "@/service/getPosts";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

type Props = {
  posts: Post[];
};

export default function Carousel({ posts }: Props) {
  return (
    <section className="px-20 mt-6">
      <h1 className="text-lg font-bold mb-2">You may like</h1>
      <Swiper modules={[Navigation]} spaceBetween={15} slidesPerView={3} loop={true} navigation>
        {posts
          .filter((post) => post.featured === false)
          .map((post) => (
            <SwiperSlide className="" key={post.path}>
              <Link href="">
                <Image
                  className="rounded-t-lg"
                  src={`/images/${post.path}.png`}
                  alt={post.title}
                  width={2000}
                  height={500}
                />
                <div className="mb-1 flex flex-col px-5 py-3 text-xs rounded-b-lg shadow-2xl">
                  <p className="ml-auto mb-2">{post.date}</p>
                  <div className="flex flex-col gap-1 items-center">
                    <p className="font-bold">{post.title}</p>
                    <p className="flex justify-center w-full truncate">{post.description}</p>
                    <div className="px-3 py-1 bg-green-100 rounded-full">{post.category}</div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
