import React from 'react';
import { useEffect } from 'react';

// contexts
import { useGameContext } from '../../context/GameContext';
import { useModalContext } from '../../context/ModalContext';

// help function
import transformSeconds from '../../helpFunction/transformSeconds';

// style
import "./Game.css"

// components
import Timer from '../Timer/Timer';

const Game = () => {
  const { field, onCell, onCheckButton, onCleanButton, finishGame } = useGameContext();
  const { resetModal } = useModalContext();
  // watching for all bombs would be found and game could be finished
  useEffect(() => {
    if (field.score === field.bomb) {
      finishGame();
    }
    // eslint-disable-next-line
  }, [field.score])

  // need to reset modal from 'false' to 'true' when new game started
  useEffect(() => {
    resetModal();
    // eslint-disable-next-line
  }, [field.cleanCanvas])

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

  const GamePlay = () => {
    return (
      <div>
        {/* Timer could be run or stopped */}
        <div className="timer">
          {field.finishedGame ? `Время ${transformSeconds(field.time)}`
            : <Timer />}
        </div>

        {/* main canvas for bomb field */}
        <div
          className="container"
          style={{ gridTemplateColumns: `repeat(${field.size}, 1fr)` }}
        >
          {cells}
        </div>

        {/* Check button could be shown during the game or toggle when game finished */}
        {
          !field.finishedGame
            ?
            <div
              className="button"
              onClick={onCheckButton}
            >
              Проверить
            </div>
            :
            null}

        {/* win message would be shown when user win  */}
        {/* Clean button could be shown during game and hide when it finished */}
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
      </div>
    )
  };

  return (
    <div>
      {GamePlay()}
    </div>
  );
}

export default Game;