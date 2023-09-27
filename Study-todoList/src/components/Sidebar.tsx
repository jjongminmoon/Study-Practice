import styles from "../css/Sidebar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineCalendar } from "react-icons/ai";
import { SiTodoist } from "react-icons/si";
import { RiBarChartHorizontalFill } from "react-icons/ri";

export default function Sidebar() {
  const sidebar = [
    {
      id: 1,
      link: "/",
      title: "Home",
      icon: <AiOutlineHome />
    },
    {
      id: 2,
      link: "/calendar",
      title: "Calendar",
      icon: <AiOutlineCalendar />
    },
    {
      id: 3,
      link: "/myprogress",
      title: "My Progress",
      icon: <RiBarChartHorizontalFill />
    },
    {
      id: 4,
      link: "/todomanagement",
      title: "Todo Management",
      icon: <SiTodoist />
    }
  ];

  return (
    <section className={styles.sidebar}>
      {sidebar.map((item) => (
        <div className={styles.tab} key={item.id}>
          {item.icon}
          <Link to={item.link}>{item.title}</Link>
        </div>
      ))}
    </section>
  );
}
