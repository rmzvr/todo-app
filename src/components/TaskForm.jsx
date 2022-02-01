import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Checkbox from "./UI/Checkbox";
import Input from "./UI/Input";

function TaskForm({ tasks, setTasks }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function addTask() {
    if (inputValue.length === 0) return;

    const newTask = {
      id: uuidv4(),
      text: inputValue,
      completed: isCompleted,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  }

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <Checkbox
        className="form__checkbox-wrapper"
        handleChange={() => {
          setIsCompleted(!isCompleted);
        }}
      />
      <Input
        className="form__input"
        type="text"
        placeholder="Create a new todo…"
        value={inputValue}
        handleChange={setInputValue}
        handleKey={addTask}
      />
    </form>
  );
}

export default TaskForm;
