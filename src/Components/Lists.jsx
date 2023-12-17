import React, { useState } from 'react';
import FilterButtons from './FilterButtons';
import DeleteButtons from './DeleteButtons';
import List from './List';

export default function Lists({ setTodo, todo }) {

  const [desc, setDesc] = useState({
    text: 'listDesc',
    input: 'none',
    icon1: 'none',
    icon2: 'fa-pen',
  });

  return (
    <div className='Lists'>
      <h1 className='todoTitle'>Todo List</h1>
      <FilterButtons />
      <div className='AllList'>
        {todo.map((item, index) => (
          <List key={index} item={item} setTodo={setTodo} todo={todo} desc={desc} setDesc={setDesc} />
        ))}
      </div>
      <DeleteButtons setTodo={setTodo} todo={todo} />
    </div>
  );
}
