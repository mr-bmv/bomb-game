import React, { useReducer } from 'react';
import { useContext } from 'react';
import changeCell from '../helpFunction/changeCell';
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
      const { updateCanvas, newScore } = changeCell(row, column, field);
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