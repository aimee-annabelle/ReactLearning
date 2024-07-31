import { useEffect, useState } from "react";
import NewTodo from "./NewTodo";
import Todo from "./Todo";

import { nanoid } from "nanoid";
export default function View() {
  const [todo, setTodo] = useState({
    id: nanoid(),
    title: "",
    completed: false,
  });
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  const handleChange = (event) => {
    const { value } = event.target;
    setTodo((prevTodo) => ({ ...prevTodo, title: value }));
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);
  const handleSubmit = () => {
    setTodoList((prevList) => [...prevList, todo]);
    setTodo({
      id: nanoid(),
      title: "",
      completed: false,
    });
  };
  const toggleCompleted = (id) => {
    setTodoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  const handleDelete = (id) => {
    console.log(todo.id);
    setTodoList((prevList) => prevList.filter((item) => item.id !== id));
  };
  return (
    <div className="flex py-20 gap-10 flex-col justify-center items-center w-full h-full">
      <h1 className="font-bold text-7xl text-gray-600">Todos</h1>
      <NewTodo
        name="todo"
        value={todo.title}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {todoList.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          task={item.title}
          completed={item.completed}
          toggleCompleted={toggleCompleted}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
