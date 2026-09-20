import React, { useReducer, useState } from "react";
import { initialValue, reducer } from "./Reducer";
import TodoContext from "./TodoContext";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        editingTodo,
        setEditingTodo,
      }}
    >
      <TodoForm />
      <TodoList />
    </TodoContext.Provider>
  );
};

export default App;
