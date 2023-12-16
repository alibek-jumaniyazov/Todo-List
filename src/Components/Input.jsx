import React from 'react'

export default function Input({list ,setList}) {
    
    return (
        <div className="createListInput">
            <div className="inputIcon">
                <i className="fa-solid fa-book"></i>
            </div>
            <input type="text" placeholder='New Todo' value={list} onChange={(e) => setList(e.target.value)}/>
        </div>
    )
}
