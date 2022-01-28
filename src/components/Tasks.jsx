import React from "react";
import Task from "./Task";
import Button from "./UI/Button";

function Tasks() {
  return (
    <section className="tasks">
      <main>
        <ul className="tasks__list">
          {true ? (
            <>
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
            </>
          ) : (
            <li className="task task--empty">No tasks to do</li>
          )}
        </ul>
      </main>
      <footer className="tasks__footer">
        <ul className="tasks__footer-list">
          <li>5 items left</li>
          <li>
            <ul className="tasks__sort-list">
              <li className="tasks__sort-item active">
                <Button type="button">All</Button>
              </li>
              <li className="tasks__sort-item">
                <Button type="button">Active</Button>
              </li>
              <li className="tasks__sort-item">
                <Button type="button">Completed</Button>
              </li>
            </ul>
          </li>
          <li>
            <Button type="button">Clear Completed</Button>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default Tasks;
