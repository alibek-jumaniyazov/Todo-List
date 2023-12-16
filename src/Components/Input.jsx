import React from 'react'

export default function Input({list}) {
    return (
        <div className="createListInput">
            <div className="inputIcon">
                <i class="fa-solid fa-book"></i>
            </div>
            <input type="text" placeholder='New Todo' ref={list}/>
        </div>
    )
}
