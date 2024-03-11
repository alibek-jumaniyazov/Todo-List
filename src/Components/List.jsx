import React, { useState } from "react";

export default function List({ item, setTodo, todo }) {
  const descInitialValue = {
    text: "listDesc",
    input: "none",
    icon1: "none",
    icon2: "fa-pen",
  };

  const [editList, setEditList] = useState(item.desc);
  const [desc, setDesc] = useState(descInitialValue);

  function removeList() {
    const newTodo = todo.filter((i) => i.id !== item.id);
    setTodo(newTodo);
  }

  function putList() {
    setDesc({
      text: "none",
      input: "listDescInput",
      icon1: "fa-check",
      icon2: "none",
    });
  }

  function updateList() {
    if (editList.trim() === "") {
      alert("Bosh maydonni to'ldiring");
    }
    if (editList.trim() !== "") {
      const updatedTodo = [...todo];
      const updatedItem = { ...item, desc: editList.trim() };
      const itemIndex = updatedTodo.findIndex((i) => i.id === item.id);
      updatedTodo[itemIndex] = updatedItem;
      setTodo(updatedTodo);
      setDesc(descInitialValue);
    }
  }

  function clickCheck(e) {
    if (e === false) {
      setDesc({
        ...desc,
        text: "listDescCheck",
      });
    } else {
      setDesc(descInitialValue);
    }
    setTodo(
      todo.map((i) => (i.id === item.id ? { ...item, check: !item.check } : i))
    );
  }

  return (
    <div className="List">
      <p className={item.check ? "listDescCheck" : "clear"}>{item.desc}</p>
      <input
        type="text"
        className={desc.input}
        value={editList}
        onChange={(e) => setEditList(e.target.value)}
      />
      <div className="listActins">
        <div className="checkbox-wrapper-13">
          <input
            type="checkbox"
            checked={item.check}
            onChange={() => clickCheck(item.check)}
          />
        </div>
        <i className={`fa-solid ${desc.icon1}`} onClick={updateList}></i>
        <i className={`fa-solid ${desc.icon2}`} onClick={() => putList()}></i>
        <i className="fa-solid fa-trash" onClick={() => removeList()}></i>
      </div>
    </div>
  );
}
