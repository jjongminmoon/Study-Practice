"use client";

import { SiGithub, SiTistory, SiNotion } from "react-icons/si";
import Link from "next/link";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PW
  }
});

export default function ContactPage() {
  const mailOptions = {
    from: "보내는 메일",
    to: "받는 메일",
    subject: "메일의 제목",
    html: `<p>메일의 내용(html 템플릿 형식으로 작성)</p>`,
    text: "템플릿 정도가 아니고 단순히 텍스트 보낼때는 해당 값으로 보내도 됨"
  };

  transporter.sendMail(mailOptions, (err: any, res: any) => {
    if (err) {
      console.error(err);
      res.status(500).json({ status: "fail" });
    } else {
      res.status(200).json({ status: "success" });
    }
  });

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
      <div className="flex flex-col gap-2 p-5 w-1/3 bg-sky-900 rounded text-white">
        <p>Your Email</p>
        <input className="w-full text-sky-900 px-2" type="email" />
        <p>Subject</p>
        <input className="w-full text-sky-900 px-2" type="text" />
        <p>Message</p>
        <textarea className="w-full text-sky-900 p-2 h-60"></textarea>
        <button className="w-full h-8 bg-yellow-300 text-sky-900 font-bold">Submit</button>
      </div>
    </main>
  );
}
