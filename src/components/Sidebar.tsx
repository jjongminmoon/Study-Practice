import { User } from "@/model/user";
import Avatar from "./Avatar";

type Props = {
  user: User;
};

export default function Sidebar({ user: { name, image, username } }: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} size="big" highlight={true} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="w-full text-xs text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        About * Help * Press * API * Jobs * Privacy * Terms * Location * Language
      </p>
      <p className="text-sm font-bold text-neutral-500 mt-8">@Copyright INSTAGRAM from METAL</p>
    </>
  );
}
