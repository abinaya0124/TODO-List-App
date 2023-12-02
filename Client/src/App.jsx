import React, { useState } from "react";
import Todos from "./Todos";
import Header from "./Header";
import Footer from "./Footer";
import AddTask from "./AddTask";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todo_list")) || []
  );

  const handleCheck = (id) => {
    const selected = tasks.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTasks(selected);
    localStorage.setItem("todo_list", JSON.stringify(selected));
  };

  const handleDelete = (id) => {
    const deleted = tasks.filter((item) => item.id !== id);
    setTasks(deleted);
    localStorage.setItem("todo_list", JSON.stringify(deleted));
  };

  const [newTask, setNewTask] = useState("");

  const addTask = (item) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const addNewTask = { id, checked: false, work: item };
    const listItems = [...tasks, addNewTask];
    setTasks(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    console.log(newTask);
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <Header title={"My TODO list"} />
      <AddTask
        handleSubmit={handleSubmit}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <Todos
        tasks={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={tasks.length} />
    </div>
  );
};

export default App;
