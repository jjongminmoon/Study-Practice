import styles from "../css/TodoInput.module.css";
import { AiFillPlusCircle, AiOutlineWarning } from "react-icons/ai";
import {
  useTodoDispatch,
  useInputDispatch,
  useDateDispatch,
  useInputState,
  useDateState
} from "../context/TodoProvider";
import { today } from "../Today";

export default function TodoInput() {
  const todoDispatch = useTodoDispatch();
  const inputDispatch = useInputDispatch();
  const dateDispatch = useDateDispatch();
  const inputState = useInputState();
  const dateState = useDateState();

  const handleInputTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: "change",
      payload: {
        text: e.target.value
      }
    });
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dateDispatch({
      type: "change",
      payload: {
        date: e.target.value
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputState.text) {
      alert("해야할 일을 입력해주세요");
      return;
    }

    if (!dateState.date) {
      alert("마감기한을 입력해주세요!");
      return;
    }

    if (Number(dateState.date) < today) {
      alert("오늘 이전 날짜는 입력할 수 없습니다.");
      return;
    }

    if (dateState.date.length > 8) {
      alert("마김기한을 형식에 맞게 입력해주세요.");
      return;
    }

    todoDispatch({
      type: "add",
      payload: {
        text: inputState.text,
        date: dateState.date
      }
    });

    inputDispatch({
      type: "clear"
    });

    dateDispatch({
      type: "clear"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.deadlineContainer}>
        <div className={styles.text}>Deadline : </div>
        <input
          placeholder="Enter the EndDate. (YYYYMMDD)"
          value={dateState.date}
          onChange={handleEndDateChange}
          className={styles.deadline}
        />
      </div>
      <p className={styles.warning}>
        <AiOutlineWarning className={styles.warningIcon} />
        마감기한을 다른 형식으로 입력 시 캘린더에 반영되지 않습니다.
      </p>
      <div className={styles.inputContainer}>
        <input
          className={styles.title}
          placeholder={"Enter To Do."}
          value={inputState.text}
          onChange={handleInputTitleChange}
        />
        <button type="submit" className={styles.button}>
          <AiFillPlusCircle />
        </button>
      </div>
    </form>
  );
}
