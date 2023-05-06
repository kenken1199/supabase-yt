import { supabase } from "./supabase";

export const getAllTodos = async () => {
  const todos = await supabase.from("todo").select("*");
  return todos.data;
};

export const addTodo = async (title) => {
  await supabase.from("todo").insert([{ title: title }]);
};

export const deleteTodo = async (id) => {
  await supabase.from("todo").delete().eq("id", id);
};
