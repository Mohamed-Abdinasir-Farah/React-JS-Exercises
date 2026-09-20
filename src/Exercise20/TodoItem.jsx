import React, { useContext } from "react";
import TodoContext from "./TodoContext";

export const TodoItem = ({ todo }) => {
  const { dispatch, setEditingTodo } = useContext(TodoContext);

  const handleToggle = () => {
    dispatch({
      type: "toggle",
      payload: todo.id,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "delete",
      payload: todo.id,
    });
  };

  const handleEdit = () => {
    setEditingTodo(todo);
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-md transition hover:shadow-lg">
      {/* Todo information */}
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="h-5 w-5 cursor-pointer accent-blue-600"
        />

        <span
          className={`break-words text-base ${
            todo.completed
              ? "text-gray-400 line-through"
              : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex shrink-0 gap-2">
        <button
          onClick={handleEdit}
          className="rounded-lg bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 transition hover:bg-yellow-200 active:scale-95"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-200 active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
};