import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:5000/todos");
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleted = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [todos]);
  return (
    <>
      {todos.map((todo) => {
        return (
          <div
            className="flex justify-center w-1/2 mx-auto mt-5"
            key={todo.todo_id}
          >
            <div className="mr-5 w-3/4">{todo.description}</div>
            <EditTodo todo={todo} />
            <button
              onClick={() => deleteTodo(todo.todo_id)}
              className="bg-red-500 px-3 py-1 rounded-sm"
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ListTodos;
