"use client";

import { useRouter } from "next/navigation";

export default function GoContactButton() {
  const router = useRouter();

  return (
    <button
      className="px-3 py-1 rounded-xl bg-yellow-500 font-bold"
      onClick={() => router.push("/contact")}
    >
      Contact me
    </button>
  );
}
