import ContactForm from "@/components/ContactForm";
import { SiGithub, SiTistory, SiNotion } from "react-icons/si";

const SNS = [
  { url: "www.naver.com", icon: <SiGithub /> },
  { url: "www.google.com", icon: <SiTistory /> },
  { url: "www.kakao.com", icon: <SiNotion /> }
];

export default function ContactPage() {
  return (
    <section className="flex flex-col justify-center items-center text-sm mb-10">
      <h2 className="text-2xl font-bold mt-10 mb-3">Contact me</h2>
      <p>fe.mjm7042@gmail.com</p>
      <div className="flex gap-4 text-2xl mt-3">
        {SNS.map((link, index) => (
          <a
            key={index}
            href={`${link.url}`}
            target="_blank"
            rel="norefferer"
            className="hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <h2 className="text-2xl font-bold my-10">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
