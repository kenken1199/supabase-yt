import React from "react";
import { deleteTodo, getAllTodos } from "../../../utils/supabaseFuctions";

const TodoList = (props) => {
  const { todos, setTodos } = props;

  const handleDelete = async (id) => {
    await deleteTodo(id);
    let todos = await getAllTodos();
    setTodos(todos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id} className="flex">
            <li>{todo.title}</li>
            <span
              className="cursor-pointer"
              onClick={() => handleDelete(todo.id)}
            >
              ❌
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
