import React from 'react'

export default function Input() {
    return (
        <div className="createListInput">
            <div className="inputIcon">
                <i class="fa-solid fa-book"></i>
            </div>
            <input type="text" placeholder='New Todo' />
        </div>
    )
}
