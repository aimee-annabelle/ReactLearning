import { useState } from "react";
import NewTodo from "./NewTodo";
import Todo from "./Todo";

import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../stores/todo";
export default function View() {
  const [todo, setTodo] = useState({
    id: nanoid(),
    title: "",
    completed: false,
  });
  const todoList = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setTodo((prevTodo) => ({ ...prevTodo, title: value }));
  };

  const handleSubmit = () => {
    console.log(todo)
    dispatch(add(todo));
    setTodo({
      id: nanoid(),
      title: "",
      completed: false,
    });
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
      {todoList.length!==0 && todoList.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          task={item.title}
          completed={item.completed}
        />
      ))}
    </div>
  );
}
