import React from 'react'
import CreateList from '../Components/CreateList'
import Lists from '../Components/Lists'

export default function Todo() {
  return (
    <div className='Todo'>
        <CreateList/>
        <Lists/>
    </div>
  )
}
