import Link from "next/link";
import profileImg from "../../public/images/profile.png";
import Image from "next/image";

export default function Profile() {
  return (
    <section className="flex flex-col items-center">
      <Image
        className="rounded-full border"
        src={profileImg}
        alt="Profile Image"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-2xl font-bold mt-3">{"Hi, I'm MJ"}</h2>
      <h3 className="font-semibold">Frontend Engineer</h3>
      <p className="text-sm">사용자가 다시 찾고 싶은 서비스를 만들고 싶은 MJ</p>
      <Link href="/contact">
        <button className="py-1 px-5 bg-yellow-500 rounded-xl font-bold mt-2">Contact Me</button>
      </Link>
    </section>
  );
}
