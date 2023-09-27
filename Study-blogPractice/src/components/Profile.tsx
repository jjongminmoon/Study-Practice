import Image from "next/image";
import profileImg from "../../public/images/profile.png";
import GoContactButton from "./goContactButton";

export default function Profile() {
  return (
    <section className="flex flex-col items-center mb-5">
      <Image
        className="rounded-full border-2 mt-8"
        src={profileImg}
        alt="Profile Image"
        width={200}
        height={200}
        priority
      />
      <p className="text-xl font-bold">Hi, Im&apos; MJ</p>
      <p className="text-sm font-bold mb-1">Full-stack engineer</p>
      <p className="text-xs mb-2">꿈을 코딩하는 사람, 드림코더 MJ</p>
      <GoContactButton />
    </section>
  );
}
