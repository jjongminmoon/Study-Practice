import Datepicker from "../components/Datepicker";
import styles from "../css/TodoCalendar.module.css";

export default function TodoCalendar() {
  return (
    <section className={styles.container}>
      <Datepicker />
    </section>
  );
}
