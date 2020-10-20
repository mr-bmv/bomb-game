import React from 'react';
import { useEffect } from 'react';
import { useGameContext } from '../../context/GameContext';
import transformSeconds from '../../helpFunction/transformSeconds';

import "./Game.css"
import Timer from '../Timer/Timer';

const Game = () => {

  const { field, onCell, onCheckButton, onCleanButton, finishGame } = useGameContext();

  // watching for all bombs would be found and game could be finished
  useEffect(() => {
    if (field.score === field.bomb) {
      finishGame()
    }
    // eslint-disable-next-line
  }, [field.score])

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
            {field.showBomb ? (cell.bomb ? `💣` : cell.value) : cell.value}
          </div>)
      })
    )

  const result = () => {
    if (field.score === field.bomb) {
      return <div className="game-over">Все бомбы найдены</div>
      // return <h2>{congratulation}</h2>;
    }
    // return field.finishedGame ? <h2>{field.score}</h2> : null;
  }

  const TopTen = () => {
    if (field.bomb === field.score) {
      return (<div>Тут будет Топ 10</div>)
    }
  }

  return (
    <div>
      <div className="timer">
        {field.finishedGame ? `Время ${transformSeconds(field.time)}`
          : <Timer />}
      </div>
      <div
        className="container"
        style={{ gridTemplateColumns: `repeat(${field.size}, 1fr)` }}
      >
        {cells}
      </div>

      {
        field.finishedGame ? result() :
          <div
            className="button"
            onClick={onCheckButton}
          >
            Проверить
        </div>}

      {
        field.finishedGame ?
          (<div className="game-over">Игра окончена!
            <p>Для начала игры </p>
            <p>выбери уровень </p>
            <p>сложности</p></div>
          )
          : <div className="button"
            onClick={onCleanButton}
          >
            Заново
          </div>
      }

      {TopTen()}
    </div>
  );
}

export default Game;