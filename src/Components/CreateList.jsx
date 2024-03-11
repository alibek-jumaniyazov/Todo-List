import React, { useRef, useState } from "react";
import Input from "./Input";

export default function CreateList({ setTodo, todo }) {
  const [list, setList] = useState("");

  // function generateID(){
  //     return todos[todos.length - 1].id + 1
  // }

  function addNewList() {
    if (list.trim() === "") {
      alert("Bosh maydonni to'ldiring");
    }
    if (list.trim() !== "") {
      setTodo((value) => [
        ...value,
        { id: todo.length, desc: list, check: false },
      ]);
      setList("");
    }
  }

  return (
    <div className="CreateList">
      <h1 className="todoTitle">Todo Input</h1>
      <div className="addTodo">
        <Input list={list} setList={setList} />
        <button onClick={() => addNewList()}>Add new task</button>
      </div>
    </div>
  );
}
