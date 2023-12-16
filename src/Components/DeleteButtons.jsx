import React from 'react'

export default function DeleteButtons({setTodo}) {
  return (
    <div className='DeleteButtons'>
        <button>Delete done task</button>
        <button onClick={() => setTodo([])}>Delete all task</button>
    </div>
  )
}
