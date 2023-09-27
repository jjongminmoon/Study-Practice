import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed flex justify-between items-center w-full max-w-screen-2xl bg-white p-4 mb-4 px-20 shadow-md">
      <Link className="text-2xl font-bold" href="/">
        <h1 className="text-2xl font-bold">{"MJ's Blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
