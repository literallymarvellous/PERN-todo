import React, { useContext, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setDescription("");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5">Todo List</h1>
      <form onSubmit={onSubmitForm} className="text-center mt-5">
        <input
          className="bg-gray-200 w-80 appearance-none border-2 border-gray-200 rounded text-black focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-500"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-green-500 px-3 py-1 rounded-sm">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
