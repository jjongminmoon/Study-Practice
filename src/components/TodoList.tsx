import styles from "../css/TodoList.module.css";
import { useTodoState } from "../context/TodoProvider";
import ListItem from "./ListItem";

export default function TodoList() {
  const todoState = useTodoState();

  return (
    <section>
      <ul className={styles.container}>
        {todoState.todos.map((todo) => (
          <ListItem
            id={todo.id}
            key={todo.id}
            text={todo.text}
            isChecked={todo.isChecked}
            date={todo.date}
          />
        ))}
      </ul>
    </section>
  );
}
