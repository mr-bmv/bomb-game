import React from 'react';
import { useGameContext } from '../context/GameContext';

import "./Game.css"
import Timer from './Timer';

const Game = () => {

  const { field, FIELD_SIZE, BOMB_QTY, onCell, onHandlerButton, onNew } = useGameContext();

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

  const result = () => {
    if (field.score === BOMB_QTY) {
      const congratulation = 'Поздравляю !!!'
      return <h2>{congratulation}</h2>;
    }
    return field.finishedGame ? <h2>{field.score}</h2> : null;
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
        {/* <div className="clean"
          onClick={onClean}
        >
          Начать заново
      </div> */}
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