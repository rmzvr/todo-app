import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FilterList from "./FilterList";
import Task from "./Task";
import Button from "./UI/Button";

function TaskList({
  tasks,
  setTasks,
  activeButton,
  setActiveButton,
  isMobile,
}) {
  const [sortedTasks, setSortedTasks] = useState([]);
  const [countOfActiveTasks, setCountOfActiveTasks] = useState(0);

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

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(sortedTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  }

  return (
    <section className="task-section">
      <main>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <ul
                className="tasks"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {sortedTasks.length > 0 ? (
                  sortedTasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <Task
                          innerRef={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          task={task}
                          updateTask={updateTask}
                          removeTask={removeTask}
                          isMobile={isMobile}
                        />
                      )}
                    </Draggable>
                  ))
                ) : (
                  <li className="task task--empty">No tasks to do</li>
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </main>
      <footer>
        <ul className="actions">
          <li>
            {countOfActiveTasks} {countOfActiveTasks === 1 ? "item" : "items"}{" "}
            left
          </li>
          {!isMobile && (
            <li>
              <FilterList
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            </li>
          )}
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
