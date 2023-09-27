import styles from "../css/ProgressList.module.css";
import { CgLoadbarAlt } from "react-icons/cg";
import { useTodoState } from "../context/TodoProvider";

export default function ProgressList() {
  const todoState = useTodoState();

  return (
    <>
      <div className={styles.title2}>
        <CgLoadbarAlt className={styles.icons} />
        Todo List
      </div>
      <div className={styles.listWrapper}>
        {todoState.todos.map((todo) => (
          <div className={styles.listItem}>
            <div>{todo.text}</div>
            <div>{todo.date}</div>
          </div>
        ))}
      </div>
    </>
  );
}
