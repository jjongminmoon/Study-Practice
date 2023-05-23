"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = { from: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({ message: "메일을 성공적으로 보냈습니다.", state: "success" });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({ message: "메일 전송에 실패했습니다. 다시 시도해 주세요.", state: "error" });
      })
      .finally(() => {
        setTimeout(() => setBanner(null), 3000);
      });
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        className="flex flex-col gap-2 p-5 my-4 bg-sky-900 rounded-xl text-white"
        onSubmit={onSubmit}
      >
        <label htmlFor="from">Your Email</label>
        <input
          className="w-full text-sky-900 px-2"
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          className="w-full text-sky-900 px-2"
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          rows={10}
          className="w-full text-sky-900 p-2 h-60"
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
        />
        <button className="w-full h-8 bg-yellow-300 text-sky-900 font-bold" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
