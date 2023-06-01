type Props = {
  image?: string | null;
  size: "small" | "big";
  highlight: boolean;
};

export default function Avatar({ image, size, highlight }: Props) {
  return (
    <div className={getAvatarStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(size)}`}
        src={image ?? undefined}
        alt="User Profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getAvatarStyle(size: string, highlight: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = size === "small" ? "w-[37px] h-[37px]" : "w-[69px] h-[69px]";

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === "small" ? "w-[34px] h-[34px] p-[0.1rem]" : "w-16 h-16 p-[3.2px]";
}
