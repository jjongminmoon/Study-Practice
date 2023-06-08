"use client";

import Link from "next/link";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";
import { FadeLoader } from "react-spinners";
import useMe from "@/hooks/me";

export default function FollowingBar() {
  const { user, isLoading, error } = useMe();
  const users = user?.following;

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 m-0 rounded-lg min-h-[120px] overflow-x-auto relative z-0">
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
