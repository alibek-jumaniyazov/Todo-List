import React, { useRef, useState } from 'react'
import Input from './Input'

export default function CreateList({ setTodo }) {

    const [list, setList] = useState('')
    const [count, setCount] = useState(0)

    function addNewList() {
        if (list.trim() === '') {
            alert("Bosh maydonni to'ldiring")
        }
        if (list.trim() !== '') {
            setCount(count + 1)
            setTodo(value => [...value, { id: count, desc: list , check:false }])
            setList('')
        }
    }


    return (
        <div className='CreateList'>
            <h1 className='todoTitle'>Todo Input</h1>
            <div className="addTodo">
                <Input list={list} setList={setList} />
                <button onClick={() => addNewList()}>Add new task</button>
            </div>
        </div>
    )
}
