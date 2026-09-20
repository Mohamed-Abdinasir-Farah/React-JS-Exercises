import React, { useContext, useEffect, useState } from "react";

import TodoContext from "./TodoContext";
import styles from "./TodoForm.module.css";

export const TodoForm = () => {
  const [text, setText] = useState("");

  const {
    dispatch,
    editingTodo,
    setEditingTodo,
  } = useContext(TodoContext);

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
      completed: false
    };

    dispatch({
      type: "add",
      payload: newTodo,
    });

    setText("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter a todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className={styles.addButton} type="submit">
          {editingTodo ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};
