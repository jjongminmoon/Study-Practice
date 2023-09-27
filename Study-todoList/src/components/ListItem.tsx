import styles from "../css/ListItem.module.css";
import { useTodoDispatch } from "../context/TodoProvider";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export interface ListItemProps {
  id: number;
  text: string;
  isChecked: boolean;
  date: string;
}

export default function ListItem(props: ListItemProps) {
  const todoDispatch = useTodoDispatch();

  const handleCheckToggle = () => {
    todoDispatch({
      type: "checked",
      payload: {
        id: props.id
      }
    });
  };

  const handleRemoveButton = () => {
    todoDispatch({
      type: "remove",
      payload: {
        id: props.id
      }
    });
  };

  return (
    <li className={styles.itemContainer}>
      <BsCheckCircle
        className={props.isChecked ? styles.unCheckedCircle : styles.checkedCircle}
        onClick={handleCheckToggle}
      />
      <span className={[styles.text, props.isChecked ? styles.lineThrough : ""].join(" ")}>
        {props.text}
      </span>
      <span className={styles.deadline}>{props.date}</span>
      <IoIosRemoveCircleOutline className={styles.removeIcon} onClick={handleRemoveButton} />
    </li>
  );
}
