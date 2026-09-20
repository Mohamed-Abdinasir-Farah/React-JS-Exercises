import React, { useContext, useEffect, useState } from "react";
import TodoContext from "./TodoContext";

export const TodoForm = () => {
  const [text, setText] = useState("");

  const { dispatch, editingTodo, setEditingTodo } = useContext(TodoContext);

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      return;
    }

    if (editingTodo) {
      dispatch({
        type: "edit",
        payload: {
          ...editingTodo,
          text: text.trim(),
        },
      });

      setText("");
      setEditingTodo(null);
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
    };

    dispatch({
      type: "add",
      payload: newTodo,
    });

    setText("");
  };

  return (
    <div className="mb-6 rounded-2xl bg-white p-6 shadow-lg">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Todo List
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          placeholder="Enter a todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          {editingTodo ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};