import styles from "../css/Home.module.css";
import { FcTodoList, FcCalendar } from "react-icons/fc";

export default function Home() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>My Todo-List</h1>
      <h4>1. Todo Management : 해야 할 일들을 기록해보세요.</h4>
      <h4>2. My Progress: 내가 해야 할 일들의 진행상황을 확인해보세요.</h4>
      <h4>3. Calendar: 달력에 표시된 해야 할 일들을 보고 일정을 확인해보세요.</h4>
      <div>
        <FcTodoList className={styles.image} />
        <FcCalendar className={styles.image2} />
      </div>
    </section>
  );
}
