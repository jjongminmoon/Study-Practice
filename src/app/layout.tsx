import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "MJ의 블로그",
    template: "MJ의 블로그 | %s"
  },
  description: "프론트엔드 개발자 MJ의 블로그",
  icons: {
    icon: "favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow px-20 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
