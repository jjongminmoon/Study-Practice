import { FcAbout, FcApproval } from "react-icons/fc";

export type BannerData = {
  message: string;
  state: "success" | "error";
};

export default function Banner({ banner }: { banner: BannerData }) {
  const isSuccess = banner.state === "success";
  const icon = isSuccess ? <FcApproval className="text-xl" /> : <FcAbout className="text-xl" />;

  return (
    <p
      className={`flex items-center justify-center gap-2 rounded-xl p-2 ${
        isSuccess ? "bg-green-300" : "bg-red-300"
      }`}
    >
      {icon}
      {banner.message}
    </p>
  );
}
