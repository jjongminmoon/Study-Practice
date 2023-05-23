import Profile from "@/components/Profile";

export default function AboutPage() {
  const TITLE_CLASS = "font-bold text-xl my-2";

  return (
    <>
      <Profile />
      <section className="flex flex-col items-center bg-gray-100 p-10 shadow-lg mt-10">
        <h2 className={TITLE_CLASS}>Who am I?</h2>
        <p>개발을 사랑하는 프론트엔드 개발자</p>
        <p>사용자에게 다시 찾고 싶은 서비스 경험을 주는 개발자가 되기 위해 공부중</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>준비중(-Now)</p>
        <p>농협은행(-2022)</p>
        <p>삼성전자판매(-2020)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>VS Code, JavaScript, React, Sass, Emotion, Tailwind CSS, Firebase</p>
      </section>
    </>
  );
}
