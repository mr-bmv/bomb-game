import React, { useState } from 'react';
import { useContext } from 'react';
import getCanvas from '../helpFunction/getCanvas';

const GameContext = React.createContext()

export const useGameContext = () => {
  return useContext(GameContext)
}

export const GameProvider = ({ children }) => {

  const [field, setField] = useState(() => {
    return {
      canvas: '',
      cleanCanvas: '',
      finishedGame: false,
      bomb: '',
      size: '',
      score: 0,
      showBomb: false,
      time: ''
    }
  })

  const onCell = (row, column) => {
    if (!field.finishedGame && (field.score !== field.bomb)) {
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

  const onCheckButton = () => {
    setField(
      {
        ...field,
        ...{ finishedGame: true, showBomb: true }
      }
    )
  }

  const onCleanButton = () => {
    setField({
      ...field,
      ...{
        canvas: field.cleanCanvas,
        score: 0,
      }
    })
  }

  const onNew = (bomb, size) => {
    const canvas = getCanvas(bomb, size);
    setField({
      canvas, cleanCanvas: canvas, finishedGame: false, score: 0, bomb, size, time: 0
    })
  }

  const finishGame = () => {
    setField({ ...field, ...{ finishedGame: true } })
  }

  const getTime = (seconds) => {
    setField({ ...field, ...{ time: seconds } })
  }

  return (
    <GameContext.Provider value={{
      field,
      onCell, onCheckButton,
      onCleanButton,
      onNew,
      finishGame,
      getTime
    }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider;