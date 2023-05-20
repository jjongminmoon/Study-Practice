import Profile from "@/components/Profile";

export default function AboutPage() {
  return (
    <main className="pt-20 px-20">
      <Profile />
      <div className="flex flex-col items-center bg-gray-100 p-10 shadow-lg">
        <h3 className="font-bold text-xl my-2">Who am I?</h3>
        <p>개발을 사랑하는 프론트엔드 개발자</p>
        <p>사용자에게 다시 찾고 싶은 서비스 경험을 주는 개발자가 되기 위해 공부중</p>
        <h3 className="font-bold text-xl my-2">Career</h3>
        <p>준비중(-Now)</p>
        <p>농협은행(-2022)</p>
        <p>삼성전자판매(-2020)</p>
        <h3 className="font-bold text-xl my-2">Skills</h3>
        <p>VS Code, JavaScript, React, Sass, Emotion, Tailwind CSS, Firebase</p>
      </div>
    </main>
  );
}
