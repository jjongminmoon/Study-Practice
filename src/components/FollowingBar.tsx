"use client";

import Link from "next/link";
import useSWR from "swr";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";
import { DetailUser } from "@/model/user";
import { FadeLoader } from "react-spinners";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>("/api/me");
  // const users = data?.following;
  // const users = undefined;
  const users = data?.following && [...data?.following, ...data?.following, ...data?.following];

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 m-0 rounded-lg min-h-[120px] overflow-x-auto">
      {isLoading ? (
        <FadeLoader height={15} width={5} color="pink" />
      ) : (
        (!users || users.length === 0) && <p>{"You don't have following"}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className="flex flex-col items-center w-20"
              href={`/user/${username}`}
            >
              <Avatar image={image} size="big" highlight />
              <p className="w-full text-sm text-center text-ellipsis overflow-hidden">{username}</p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
