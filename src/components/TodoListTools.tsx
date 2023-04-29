import styles from "../css/TodoListTools.module.css";
import { useTodoDispatch, useTodoState } from "../context/TodoProvider";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { CgRadioCheck } from "react-icons/cg";
import { AiTwotoneDelete } from "react-icons/ai";

export default function TodoListTools() {
  const todoState = useTodoState();
  const todoDispatch = useTodoDispatch();

  const isAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked);
  };

  const handleAllCheck = () => {
    todoDispatch({
      type: "allChecked",
      payload: isAllChecked()
    });
  };

  const handleAllRemove = () => {
    todoDispatch({
      type: "allRemove"
    });
  };

  return (
    <section className={styles.container}>
      <button onClick={handleAllCheck}>
        {isAllChecked() ? (
          <>
            <CgRadioCheck className={styles.icon} />
            전체해제
          </>
        ) : (
          <>
            <IoCheckmarkDoneCircleOutline className={styles.icon} />
            전체완료
          </>
        )}
      </button>
      <button onClick={handleAllRemove}>
        <AiTwotoneDelete className={styles.icon} />
        전체삭제
      </button>
    </section>
  );
}
