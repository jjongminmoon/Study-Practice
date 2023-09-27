import styles from "../css/TodoManagement.module.css";
import { useTodoState } from "../context/TodoProvider";
import TodoList from "../components/TodoList";
import TodoListTools from "../components/TodoListTools";
import TodoInput from "../components/TodoInput";

export default function TodoManagement() {
  const todoState = useTodoState();

  return (
    <section className={styles.container}>
      <TodoInput />
      {todoState.todos.length < 1 ? null : <TodoListTools />}
      <TodoList />
    </section>
  );
}
