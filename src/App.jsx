import React from 'react';
import { useState } from 'react';
import getCanvas from './getCanvas';

import "./APP.css"

// const FIELD_SIZE = 10

function App() {

  const [field, setField] = useState(() => {
    return getCanvas()
  })

  const onHandler = (row, column) => {

    const before = field[row].slice(0, column);
    const my = {
      ...field[row][column],
      // circle from 0 till 2
      status: (field[row][column].status === 2 ? 0 : field[row][column].status + 1)
    }

    const after = field[row].slice(column + 1)

    setField({
      ...field,
      [row]: [...before, my, ...after]
    })
  }

  const cells = Object.keys(field)
    .map((row) =>
      field[row].map((cell, index) => {
        let className = "cell"
        if (cell.status === 1) {
          className = 'cell marked'
        }
        if (cell.status === 2) {
          className = 'cell bomb'
        }

        return (
          <div
            key={cell.id}
            className={className}
            onClick={() => onHandler(row, index)}
          >
            {cell.value}
            {/* 💣 */}
          </div>)
      })
    )

  const onHandlerButton = () => {
    const bomb = "💣";



  }

  return (
    <div className="container">
      {cells}
      <button
        className="button"
        onClick={() => onHandlerButton()}>Check</button>
    </div>
  );
}

export default App;