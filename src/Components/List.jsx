import React from 'react'

export default function List({item}) {
    return (
        <div className="List">
            <p className="listDesc">{item.desc}</p>
            <div className="listActins">
                <div class="checkbox-wrapper-13">
                    <input type="checkbox" id="c1-13" />
                </div>
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}
