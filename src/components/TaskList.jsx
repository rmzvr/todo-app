import React, { useEffect, useState } from "react";
import FilterList from "./FilterList";
import Task from "./Task";
import Button from "./UI/Button";

function TaskList({ tasks, setTasks }) {
  const [countOfActiveTasks, setCountOfActiveTasks] = useState(0);
  const [sortedTasks, setSortedTasks] = useState([]);
  const [activeButton, setActiveButton] = useState("All");

  useEffect(() => {
    if (activeButton === "All") {
      setSortedTasks(tasks);
    } else if (activeButton === "Active") {
      setSortedTasks(tasks.filter((t) => t.completed === false));
    } else {
      setSortedTasks(tasks.filter((t) => t.completed === true));
    }

    setCountOfActiveTasks(getCountOfActiveTasks(tasks));
  }, [tasks, activeButton]);

  function getCountOfActiveTasks(tasks) {
    return tasks.reduce(
      (total, task) => (task.completed === false ? total + 1 : total),
      0
    );
  }

  function removeTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  function updateTask(task) {
    setTasks([...tasks.map((t) => (t.id === task.id ? task : t))]);
  }

  function removeCompletedTasks() {
    setTasks(tasks.filter((t) => t.completed === false));
  }

  return (
    <section className="tasks">
      <main>
        <ul className="tasks__list">
          {sortedTasks.length > 0 ? (
            sortedTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                updateTask={updateTask}
                removeTask={removeTask}
              />
            ))
          ) : (
            <li className="task task--empty">No tasks to do</li>
          )}
        </ul>
      </main>
      <footer className="tasks__footer">
        <ul className="tasks__footer-list">
          <li>
            {countOfActiveTasks} {countOfActiveTasks === 1 ? "item" : "items"}{" "}
            left
          </li>
          <li>
            <FilterList
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </li>
          <li>
            <Button type="button" handleClick={removeCompletedTasks}>
              Clear Completed
            </Button>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default TaskList;
