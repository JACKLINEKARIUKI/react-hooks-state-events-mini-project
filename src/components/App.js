import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [tasksList, setTasksList] = useState(tasks);

  function deleteTask(text) {
    const newTasks = tasksList.filter((task) => task.text !== text);
    setTasksList(newTasks);
  } 

  function onTaskFormSubmit(newTask) {
    const updatedTasks = [...tasksList, newTask];
    setTasks(updatedTasks);
    setTasksList(updatedTasks);
  }

  function filterTasks(newCategory) {
    if (newCategory === "All") {
      setTasksList(tasks);
    } else {
      const newTasks = tasks.filter((task) => task.category === newCategory);
      setTasksList(newTasks);
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterCategory={filterTasks} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasksList} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
