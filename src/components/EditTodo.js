import React, { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";

const EditTodo = ({ todo }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState(todo.description);

  let closeModal = () => {
    setIsOpen(false);
    setDescription(todo.description);
  };

  let openModal = () => {
    setIsOpen(true);
  };

  let editTodo = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const res = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
    closeModal();
  };
  return (
    <>
      <button
        onClick={() => openModal()}
        className="bg-gray-300 px-3 py-1 rounded-sm mr-5"
      >
        Edit
      </button>

      <Dialog
        as="div"
        open={isOpen}
        onClose={() => closeModal()}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="relative bg-white rounded max-w-sm mx-auto">
            <Dialog.Title className="text-center">Edit Todo</Dialog.Title>

            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-200 w-80 appearance-none border-2 border-gray-200 rounded text-black focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-500"
            />

            <button
              className="bg-gray-300 px-3 py-1 rounded-sm mr-5"
              onClick={editTodo}
            >
              Edit
            </button>
            <button
              className="bg-red-500 px-3 py-1 rounded-sm"
              onClick={() => closeModal()}
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default EditTodo;
