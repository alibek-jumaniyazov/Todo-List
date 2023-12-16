import React, { useState } from 'react'
import CreateList from '../Components/CreateList'
import Lists from '../Components/Lists'

export default function Todo() {

    const [todo , setTodo] = useState([])
    console.log(todo);

  return (
    <div className='Todo'>
        <CreateList setTodo={setTodo} todo={todo}/>
        <Lists todo={todo}/>
    </div>
  )
}
