import React, { useReducer, useState } from "react";
import { initialValue, reducer } from "./Reducer";
import TodoContext from "../Exercise20/TodoContext";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <TodoContext.Provider
      value={{ state, dispatch, editingTodo, setEditingTodo }}
    >
      <div className="min-h-screen bg-gray-100 px-4 py-10">
        <div className="mx-auto w-full max-w-2xl">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default App;