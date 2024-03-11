import React from "react";

export default function DeleteButtons({ setTodo, todo }) {
  function deleteDone() {
    const newTodo = todo.filter((item) => !item.check);
    setTodo(newTodo);
  }

  return (
    <div className="DeleteButtons">
      <button onClick={() => deleteDone()}>Delete done task</button>
      <button onClick={() => setTodo([])}>Delete all tasks</button>
    </div>
  );
}
