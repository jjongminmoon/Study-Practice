import { Route, Routes } from "react-router-dom";
import { TodoProvider } from "./context/TodoProvider";
import "./App.css";

import Sidebar from "./components/Sidebar";
import TodoManagement from "./routePage/TodoManagement";
import Home from "./routePage/Home";
import TodoCalendar from "./routePage/TodoCalendar";
import MyProgress from "./routePage/MyProgress";

function App() {
  return (
    <main className="main">
      <TodoProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<TodoCalendar />} />
          <Route path="/myprogress" element={<MyProgress />} />
          <Route path="/todomanagement" element={<TodoManagement />} />
        </Routes>
      </TodoProvider>
    </main>
  );
}

export default App;
