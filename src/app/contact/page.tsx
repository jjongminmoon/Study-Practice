import { SiGithub, SiTistory, SiNotion } from "react-icons/si";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex flex-col pt-20 justify-center items-center text-sm">
      <h1 className="text-2xl font-bold mt-10 mb-3">Contact me</h1>
      <p>fe.mjm7042@gmail.com</p>
      <div className="flex gap-4 text-2xl mt-3">
        <Link href="">
          <SiGithub />
        </Link>
        <Link href="">
          <SiTistory />
        </Link>
        <Link href="">
          <SiNotion />
        </Link>
      </div>
      <h1 className="text-2xl font-bold my-10">Or Send me an email</h1>
      <form className="flex flex-col gap-2 p-5 w-1/3 bg-sky-900 rounded text-white">
        <p>Your Email</p>
        <input className="w-full text-sky-900 px-2" type="email" />
        <p>Subject</p>
        <input className="w-full text-sky-900 px-2" type="text" />
        <p>Message</p>
        <textarea className="w-full text-sky-900 p-2 h-60" />
        <button className="w-full h-8 bg-yellow-300 text-sky-900 font-bold" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
