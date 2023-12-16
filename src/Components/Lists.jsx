import React from 'react'
import FilterButtons from './FilterButtons'
import DeleteButtons from './DeleteButtons'
import AllList from './AllList'

export default function Lists() {
    return (
        <div className='Lists'>
            <h1 className='todoTitle'>Todo List</h1>
            <FilterButtons />
            <AllList/>
            <DeleteButtons />
        </div>
    )
}
