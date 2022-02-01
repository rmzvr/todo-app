import { useEffect, useState } from "react";
import ThemeToggle from "./UI/ThemeToggle";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  const [theme, setTheme] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (!currentTheme) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme(currentTheme);
    }
  }, []);

  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <header className="header">
          <h1 className="header__logo">Todo</h1>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </header>
        <main className="main">
          <TaskForm tasks={tasks} setTasks={setTasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />
          <div className="hint">Drag and drop to reorder list</div>
        </main>
      </div>
    </div>
  );
}

export default App;
