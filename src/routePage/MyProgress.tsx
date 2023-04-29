import styles from "../css/MyProgress.module.css";
import { useTodoState } from "../context/TodoProvider";
import ProgressBar from "../components/ProgressBar";
import ProgressList from "../components/ProgressList";

export default function MyProgress() {
  const todoState = useTodoState();

  const totalCount = todoState.todos.length;
  const completedCount = todoState.todos.filter((todo) => todo.isChecked === true).length;

  return (
    <section className={styles.container}>
      <h1 className={styles.countWrapper}>
        <div className={styles.count}>{totalCount}</div>
        <div>개의 To Do</div>
      </h1>
      <h2 className={styles.countWrapper}>
        <div className={styles.count}>{completedCount}</div>
        <div>개 완료</div>
      </h2>
      <ProgressBar totalCount={totalCount} completedCount={completedCount} />
      <ProgressList />
    </section>
  );
}
