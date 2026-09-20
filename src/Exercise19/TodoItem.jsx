import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import styles from "./TodoItem.module.css";

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
    <div className={styles.todoItem}>
      <div className={styles.todoContent}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />

        <span
          className={`${styles.todoText} ${
            todo.completed ? styles.completed : ""
          }`}
        >
          {todo.text}
        </span>
      </div>

      <div className={styles.buttons}>
        <button className={styles.editButton} onClick={handleEdit}>
          Edit
        </button>

        <button className={styles.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
