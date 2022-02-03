import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ThemeToggle from "./UI/ThemeToggle";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import FilterList from "./FilterList";

function App() {
  const [theme, setTheme] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [
        {
          id: uuidv4(),
          text: "Complete online JavaScript course",
          completed: true,
        },
        {
          id: uuidv4(),
          text: "Jog around the park 3x",
          completed: false,
        },
        {
          id: uuidv4(),
          text: "10 minutes meditation",
          completed: false,
        },
        {
          id: uuidv4(),
          text: "Read for 1 hour",
          completed: false,
        },
        {
          id: uuidv4(),
          text: "Pick up groceries",
          completed: false,
        },
        {
          id: uuidv4(),
          text: "Complete Todo App on Frontend Mentor",
          completed: false,
        },
      ];
    }
  });

  const [activeButton, setActiveButton] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 480);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (!currentTheme) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme(currentTheme);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <header className="header">
          <h1 className="header__logo">Todo</h1>
          <ThemeToggle theme={theme} setTheme={setTheme} isMobile={isMobile} />
        </header>
        <main className="main">
          <TaskForm tasks={tasks} setTasks={setTasks} />
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            isMobile={isMobile}
          />
          {isMobile && (
            <div className="filters-mobile-wrapper">
              <FilterList
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            </div>
          )}
          <div className="hint">Drag and drop to reorder list</div>
        </main>
      </div>
    </div>
  );
}

export default App;
