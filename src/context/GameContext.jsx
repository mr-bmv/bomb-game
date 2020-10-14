import React, { useState } from 'react';
import { useContext } from 'react';
import getCanvas from '../helpFunction/getCanvas';

const GameContext = React.createContext()

export const useGameContext = () => {
  return useContext(GameContext)
}

export const GameProvider = ({ children }) => {

  const BOMB_QTY = 1
  const FIELD_SIZE = 10

  // let state = useMemo(() => {
  //     return { canvas: getCanvas(BOMB_QTY, FIELD_SIZE), finishedGame: false, score: 0 }
  // }, [BOMB_QTY, FIELD_SIZE])

  const [field, setField] = useState(() => {
    return {
      canvas: getCanvas(BOMB_QTY, FIELD_SIZE),
      finishedGame: false,
      score: 0
    }
  })

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

  const onHandlerButton = () => {
    setField(
      {
        ...field,
        ...{ finishedGame: true }
      }
    )
  }

  // const onClean = () => {
  //   const { canvas, finishedGame, score } = state;
  //   setField({ canvas, finishedGame, score })
  // }

  const onNew = () => {
    const canvas = getCanvas(BOMB_QTY, FIELD_SIZE);
    setField({
      canvas, finishedGame: false, score: 0
    })
  }

  return (
    <GameContext.Provider value={{
      field,FIELD_SIZE,BOMB_QTY,
      onCell, onHandlerButton, 
      // onClean, 
      onNew

    }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider;