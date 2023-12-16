import React, { useRef } from 'react'
import Input from './Input'

export default function CreateList({ setTodo , todo }) {

    const list = useRef(null)

    return (
        <div className='CreateList'>
            <h1 className='todoTitle'>Todo Input</h1>
            <div className="addTodo">
                <Input list={list} />
                <button onClick={() => setTodo(todo ,[...todo[{desc:list.current.value}]])}>Add new task</button>
            </div>
        </div>
    )
}
