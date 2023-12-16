import React from 'react'
import Input from './Input'

export default function CreateList() {
  return (
    <div className='CreateList'>
        <h1 className='todoTitle'>Todo Input</h1>
        <div className="addTodo">
            <Input/>
            <button>Add new task</button>
        </div>
    </div>
  )
}
