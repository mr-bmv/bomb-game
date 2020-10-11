import React from 'react';
import { useState } from 'react';
import getCanvas from './getCanvas';

import "./APP.css"

// const FIELD_SIZE = 10

function App() {

  const [field, setField] = useState(() => {
    return getCanvas()
  })

  console.log(field)

  // const getNumber = (row, column) => {
  //   console.log("->", field[row][column])
  // }

  // getNumber('row3', 3)
  const onHandler = (row, column) => {
    console.log(row, column)

    setField({ ...field,
    [] })
  }

  const cells = Object.keys(field)
    .map((row) =>
      field[row].map((cell, index) => {
        return (
          <div
            key={cell.id}
            className="cell"
            onClick={() => onHandler(row, index)}
          >
            {cell.value}
          </div>)
      }
      )
    )

  return (
    <div className="container">
      {cells}
    </div>
  );
}

export default App;