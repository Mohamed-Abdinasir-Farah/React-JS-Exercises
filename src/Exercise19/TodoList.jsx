import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <div className={styles.container}>
      {
        state.length === 0 ? (
          <p className={styles.emptyMessage}>
            No todos yet. Add your first todo!
          </p>
        ) : (
          state.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )
      }
    </div>
  );
};
