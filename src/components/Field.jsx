import React, { Fragment, useState } from 'react'
import './Field.css'

export const Field = () => {
    const fields =
        [

            {
                "id": 1,
                "x": 0,
                "y": 0,
                "bomb": false,
                "status": 0,
                "value": 5
            },
            {
                "id": 2,
                "x": 1,
                "y": 0,
                "bomb": false,
                "status": 0,
                "value": 5
            },
            {
                "id": 3,
                "x": 2,
                "y": 0,
                "bomb": false,
                "status": 0,
                "value": 5
            },

            {
                "id": 4,
                "x": 0,
                "y": 1,
                "bomb": false,
                "status": 0,
                "value": 5
            },
            {
                "id": 5,
                "x": 1,
                "y": 1,
                "bomb": false,
                "status": 0,
                "value": 5
            },
            {
                "id": 6,
                "x": 2,
                "y": 1,
                "bomb": false,
                "status": 0,
                "value": 5
            },

            {
                "id": 7,
                "x": 0,
                "y": 2,
                "bomb": false,
                "status": 0,
                "value": 5
            },
            {
                "id": 8,
                "x": 1,
                "y": 2,
                "bomb": false,
                "status": 0,
                "value": 5
            },
            {
                "id": 9,
                "x": 2,
                "y": 2,
                "bomb": false,
                "status": 0,
                "value": 5
            }

        ]

    const [canvas, setCanvas] = useState(fields)

    const onHandler = (id) => {
        setCanvas([...fields, ])
    }

    const cell = (item) => (
        <div onClick={() => onHandler(item.id)} >
            {`${item.id}_
            ${item.x}_
            ${item.y}_
            ${item.bomb}_
            ${item.status}_
            ${item.value}`
            }
        </div >
    )

    const elements = fields.map(user =>
        (
            < div className="cell" key={user.id} >
                {cell(user)}
            </ div>
        )
    )

    return (
        <div className='content'>
            <div className="table">
                {elements}
            </div>

        </div>
    )
}