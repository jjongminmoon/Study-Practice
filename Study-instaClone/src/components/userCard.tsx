import { SearchUser } from "@/model/user";
import Link from "next/link";
import Avatar from "./Avatar";

type Props = {
  user: SearchUser;
};

export default function UserCard({ user: { name, username, image, following, followers } }: Props) {
  return (
    <Link
      href={`/user/${username}`}
      className="flex items-center w-full rounded-sm border border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-100"
    >
      <Avatar image={image} size="big" highlight />
      <div className="text-neutral-500 ml-2">
        <div className="flex items-center mb-2 gap-3">
          <p className="text-black font-bold leading-4">{username}</p>
          <p className="text-xs">{`( ${name} )`}</p>
        </div>
        <p className="text-sm leading-4">{`${followers} followers ${following} followings`}</p>
      </div>
    </Link>
  );
}
