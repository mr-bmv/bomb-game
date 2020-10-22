import React, { useReducer } from 'react';
import { useContext } from 'react';
import getCanvas from '../helpFunction/getCanvas';
import { CHECK_GAME, NEW_GAME, ON_CELL, CLEAN_FIELD, FINISH_GAME, GET_TIME } from '../reducer/actionTypes';
import { GameReducer } from '../reducer/GameReducer';

const GameContext = React.createContext()

export const useGameContext = () => {
  return useContext(GameContext)
}

export const GameProvider = ({ children }) => {

  const initialState = {
    canvas: '',
    cleanCanvas: '',
    finishedGame: false,
    bomb: '',
    size: '',
    score: 0,
    showBomb: false,
    time: ''
  }

  const [field, dispatch] = useReducer(GameReducer, initialState);

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
      dispatch({ type: ON_CELL, payload: { updateCanvas, newScore } })
    }
  }

  const onCheckButton = () => {
    dispatch({ type: CHECK_GAME })
  }

  const onCleanButton = () => {
    dispatch({ type: CLEAN_FIELD })
  }

  const onNew = (bomb, size) => {
    const canvas = getCanvas(bomb, size);
    dispatch({ type: NEW_GAME, payload: { canvas, bomb, size } })
  }

  const finishGame = () => {
    dispatch({ type: FINISH_GAME })
  }

  const getTime = (seconds) => {
    dispatch({ type: GET_TIME, payload: seconds })
  }

  return (
    <GameContext.Provider value={{
      field,
      onCell,
      onCheckButton,
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