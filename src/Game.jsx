import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import getCanvas from './getCanvas';

import "./Game.css"
import Timer from './Timer';

function Game() {
  const BOMB_QTY = 40
  const FIELD_SIZE = 10

  const state = useMemo(() => {
    return { canvas: getCanvas(BOMB_QTY, FIELD_SIZE), finishedGame: false, score: 0 }
  }, [BOMB_QTY, FIELD_SIZE])

  const [field, setField] = useState(() => state)

  const onCell = (row, column) => {
    if (!field.finishedGame && (field.score !== 40)) {
      const before = field.canvas[row].slice(0, column);
      const my = {
        ...field.canvas[row][column],
        // circle from 0 till 2
        status: (field.canvas[row][column].status === 2 ? 0 : field.canvas[row][column].status + 1)
      }
      const after = field.canvas[row].slice(column + 1)

      let newScore = field.score;
      if (my.status === 2) {
        newScore = field.canvas[row][column].bomb ? (field.score + 1) : field.score
      }
      if (my.status === 0) {
        newScore = field.canvas[row][column].bomb ? (field.score - 1) : field.score
      }

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
      const congratulation = 'Поздравляю !!!'
      return <h2>{congratulation}</h2>;
    }
    return field.finishedGame ? <h2>{field.score}</h2> : null;
  }

  const onClean = () => {
    const { canvas, finishedGame, score } = state;
    setField({ canvas, finishedGame, score })
  }

  const onNew = () => {
    const canvas = getCanvas(BOMB_QTY, FIELD_SIZE);
    setField({
      canvas, finishedGame: false, score: 0
    })
  }

  return (
    <div>
      <div className="container"
        style={{ gridTemplateColumns: `repeat(${FIELD_SIZE}, 1fr)` }}
      >
        {cells}
        <div
          className="button"
          onClick={onHandlerButton}
        >
          Проверить
      </div>
        {result()}
        <div className="clean"
          onClick={onClean}
        >
          Начать заново
      </div>
        <div className="clean"
          onClick={onNew}
        >
          Новая игра
      </div>

      </div>
      <div className="timer"> <Timer /></div>
    </div>
  );
}

export default Game;