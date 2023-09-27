import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full drop-shadow-lg">
          <div className="flex items-center justify-between h-20 py-3 px-20 bg-white">
            <p className="text-2xl font-bold">MJ Blog</p>
            <div className="flex gap-8">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/posts">Posts</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="px-20 mt-8">
          <p className="flex justify-center p-3 bg-gray-900 text-white">
            Don&apos;t forget to CODE your DREAM | All Right Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
