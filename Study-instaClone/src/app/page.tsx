import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <section className="w-full flex flex-col md:flex-row p-4 mx-auto px-60">
      <div className="w-3/4">
        <FollowingBar />
        <PostList />
      </div>
      <div className="w-[2px] border-[1px] border-neutral-200 mx-3" />
      <div className="w-1/4">
        <Sidebar user={user} />
      </div>
    </section>
  );
}
