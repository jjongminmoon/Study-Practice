import "../css/Calendar.css";
import Calendar from "react-calendar";
import { useState } from "react";
import { useTodoState } from "../context/TodoProvider";
import moment from "moment";

export default function Datepicker() {
  const [selectedDay, setSelectedDay] = useState<Date | any | undefined>(null);
  const todoState = useTodoState();

  const todoArr = todoState.todos.map((todo) => todo.date);

  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      showNeighboringMonth={false}
      tileClassName={"todo"}
      tileContent={({ date, view }: any): any => {
        if (todoArr.find((x) => x === moment(date).format("YYYYMMDD"))) {
          return (
            <>
              <div className="dot"></div>
            </>
          );
        }
      }}
    />
  );
}
