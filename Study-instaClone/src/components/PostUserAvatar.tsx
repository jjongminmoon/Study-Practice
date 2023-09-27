import Avatar from "./Avatar";

type Props = {
  image: string;
  username: string;
};

export default function PostUserAvatar({ image, username }: Props) {
  return (
    <div className="flex items-center p-2">
      <Avatar image={image} size="small" highlight />
      <span className="text-sm text-gray-900 font-bold ml-2">{username}</span>
    </div>
  );
}
