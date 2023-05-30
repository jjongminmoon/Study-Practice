"use client";

import Link from "next/link";
import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import NewIcon from "./ui/icons/newIcon";
import NewFillIcon from "./ui/icons/newFillIcon";
import ColorButton from "./ui/ColorButton";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const menu = [
  { href: "/", icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: "/search", icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
  { href: "/new", icon: <NewIcon />, clickedIcon: <NewFillIcon /> }
];

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();

  console.log(pathname);

  return (
    <section className="flex justify-between items-center h-20 shadow-md px-20">
      <Link href="/">
        <h1 className="text-2xl font-bold">Instagram</h1>
      </Link>
      <nav>
        <ul className="flex gap-6 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{pathname !== item.href ? item.icon : item.clickedIcon}</Link>
            </li>
          ))}
          {session ? (
            <ColorButton text="Sign Out" onClick={() => signOut()} />
          ) : (
            <ColorButton text="Sign In" onClick={() => signIn()} />
          )}
        </ul>
      </nav>
    </section>
  );
}
