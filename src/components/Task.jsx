import React from "react";
import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";

function Task({ task, updateTask, removeTask, innerRef, ...props }) {
  return (
    <li
      className={`task ${task.completed ? "completed" : ""}`}
      ref={innerRef}
      {...props}
    >
      <Checkbox
        isCompleted={task.completed}
        handleChange={() => updateTask({ ...task, completed: !task.completed })}
      />
      <span className="task__text">{task.text}</span>
      <Button
        className="task__cross"
        type="button"
        handleClick={() => removeTask(task)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </Button>
    </li>
  );
}

export default Task;
