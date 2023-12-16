import React from 'react';
import FilterButtons from './FilterButtons';
import DeleteButtons from './DeleteButtons';
import List from './List';

export default function Lists({ setTodo, todo }) {
  return (
    <div className='Lists'>
      <h1 className='todoTitle'>Todo List</h1>
      <FilterButtons />
      <div className='AllList'>
        {todo.map((item, index) => (
          <List key={index} index={index} item={item} setTodo={setTodo} todo={todo} />
        ))}
      </div>
      <DeleteButtons setTodo={setTodo}/>
    </div>
  );
}
