"use client";
import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { addTodo, getAllTodos } from "../../../utils/supabaseFuctions";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos);
      console.log(todos);
    };
    getTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "") return;
    await addTodo(title);
    let todos = await getAllTodos();
    setTodos(todos);

    setTitle("");
  };

  return (
    <div>
      <div>TodoApp</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>Add</button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
