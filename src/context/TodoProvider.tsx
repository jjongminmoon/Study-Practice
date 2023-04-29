import { createContext, Dispatch, useContext, useReducer } from "react";
import { DateActionType, dateReducer, DateStateType } from "../reducer/DateReducer";
import { InputActionType, inputReducer, InputStateType } from "../reducer/InputReducer";
import { TodoActionType, todoReducer, TodoStateType } from "../reducer/TodoReducer";
import { loadTodos } from "../storage/TodoStorage";

interface TodoProviderProps {
  children: React.ReactNode;
}

const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(null);
const InputStateContext = createContext<InputStateType | null>(null);
const InputDispatchContext = createContext<Dispatch<InputActionType> | null>(null);
const DateStateContext = createContext<DateStateType | null>(null);
const DateDispatchContext = createContext<Dispatch<DateActionType> | null>(null);

export const TodoProvider = (props: TodoProviderProps) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: loadTodos() });
  const [inputState, inputDispatch] = useReducer(inputReducer, {
    text: ""
  });
  const [dateState, dateDispatch] = useReducer(dateReducer, {
    date: ""
  });

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <InputStateContext.Provider value={inputState}>
          <InputDispatchContext.Provider value={inputDispatch}>
            <DateStateContext.Provider value={dateState}>
              <DateDispatchContext.Provider value={dateDispatch}>
                {props.children}
              </DateDispatchContext.Provider>
            </DateStateContext.Provider>
          </InputDispatchContext.Provider>
        </InputStateContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const value = useContext(TodoStateContext);

  if (!value) {
    throw new Error("cannot find todoState");
  }

  return value;
};
export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext);

  if (!value) {
    throw new Error("cannot find todoDispatch");
  }

  return value;
};
export const useInputState = () => {
  const value = useContext(InputStateContext);

  if (!value) {
    throw new Error("cannot find inputState");
  }

  return value;
};
export const useInputDispatch = () => {
  const value = useContext(InputDispatchContext);

  if (!value) {
    throw new Error("cannot find inputDispatch");
  }

  return value;
};
export const useDateState = () => {
  const value = useContext(DateStateContext);

  if (!value) {
    throw new Error("cannot find dateState");
  }

  return value;
};
export const useDateDispatch = () => {
  const value = useContext(DateDispatchContext);

  if (!value) {
    throw new Error("cannot find dateDispatch");
  }

  return value;
};
