import React, { useEffect } from 'react';
import { useState } from 'react';
import getCanvas from './getCanvas';

import "./APP.css"

// const FIELD_SIZE = 10

function App() {

  const [field, setField] = useState(() => {
    return { canvas: getCanvas(), finishedGame: false, score: 0 }
  })

  const onCell = (row, column) => {
    if (!field.finishedGame && (field.score !== 40)) {
      const before = field.canvas[row].slice(0, column);
      const my = {
        ...field.canvas[row][column],
        // circle from 0 till 2
        status: (field.canvas[row][column].status === 2 ? 0 : field.canvas[row][column].status + 1)
      }

      let newScore = field.score;
      if (my.status === 2) {
        newScore = field.canvas[row][column].bomb ? (field.score + 1) : field.score
      }

      const after = field.canvas[row].slice(column + 1)
      const { canvas } = field;
      const updateCanvas = {
        ...canvas,
        [row]: [...before, my, ...after],
      }

      setField({
        ...field,
        ...{ canvas: updateCanvas },
        ...{ score: newScore },
      })
    }
  }

  const cells = Object.keys(field.canvas)
    .map((row) =>
      field.canvas[row].map((cell, index) => {
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
            onClick={() => onCell(row, index)}
          >
            {field.finishedGame ? (cell.bomb ? `💣` : cell.value) : cell.value}
          </div>)
      })
    )

  useEffect(() => {
    console.log('Effect')
  }, [field])

  const onHandlerButton = () => {

    setField(
      {
        ...field,
        ...{ finishedGame: true }
      }
    )
  }

  const result = () => {
    if (field.score === 40) {
      const congratulation = 'Круто!!! 40 из 40'
      return <h2>{congratulation}</h2>;
    }
    return field.finishedGame ? <h2>{field.score}</h2> : null;
  }

  return (
    <div className="container">
      {cells}
      <div
        className="button"
        onClick={() => onHandlerButton()}
      >
        Check
      </div>
      { result()}
    </div>
  );
}

export default App;