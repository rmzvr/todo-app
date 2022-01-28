import { useEffect, useState } from "react";
import ThemeToggle from "./UI/ThemeToggle";
import Checkbox from "./UI/Checkbox";
import Input from "./UI/Input";
import Tasks from "./Tasks";

function App() {
  const [theme, setTheme] = useState("");

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
          <div className="new-task-field">
            <Checkbox />
            <Input type="text" placeholder="Create a new todo…" />
          </div>
          <Tasks />
          <div className="hint">Drag and drop to reorder list</div>
        </main>
      </div>
    </div>
  );
}

export default App;
