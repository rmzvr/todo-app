import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Checkbox from "./UI/Checkbox";
import Input from "./UI/Input";

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
        </main>
      </div>
    </div>
  );
}

export default App;
