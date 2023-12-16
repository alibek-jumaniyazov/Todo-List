import React from 'react'
import FilterButtons from './FilterButtons'
import DeleteButtons from './DeleteButtons'
import List from './List'

export default function Lists({todo}) {
    return (
        <div className='Lists'>
            <h1 className='todoTitle'>Todo List</h1>
            <FilterButtons />
            <div className='AllList'>
            {
                todo.map((item) => (
                    <List item={item}/>
                ))
            }
        </div>
            <DeleteButtons />
        </div>
    )
}
