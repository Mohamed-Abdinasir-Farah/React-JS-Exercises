import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <div className="space-y-3">
      {state.length === 0 ? (
        <div className="rounded-2xl bg-white p-8 text-center shadow-md">
          <p className="text-gray-500">
            No todos yet. Add your first todo!
          </p>
        </div>
      ) : (
        state.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};