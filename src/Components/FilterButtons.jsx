import React from 'react';

export default function FilterButtons({ setTodoFilter }) {
  return (
    <div className='FilterButtons'>
      <button onClick={() => setTodoFilter(null)}>All</button>
      <button onClick={() => setTodoFilter(true)}>Done</button>
      <button onClick={() => setTodoFilter(false)}>Todo</button>
    </div>
  );
}
