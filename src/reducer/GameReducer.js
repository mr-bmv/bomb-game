import { CHECK_GAME, NEW_GAME, ON_CELL, CLEAN_FIELD, FINISH_GAME, GET_TIME } from "./actionTypes"

const handlers = {
    [CHECK_GAME]: state => ({ ...state, ...{ finishedGame: true, showBomb: true } }),
    [NEW_GAME]: (state, action) => ({ canvas: action.payload.canvas, cleanCanvas: action.payload.canvas, finishedGame: false, score: 0, bomb: action.payload.bomb, size: action.payload.size, time: 0 }),
    [ON_CELL]: (state, action) => ({ ...state, ...{ canvas: action.payload.updateCanvas }, ...{ score: action.payload.newScore } }),
    [CLEAN_FIELD]: state => ({ ...state, ...{ canvas: state.cleanCanvas, score: 0 } }),
    [FINISH_GAME]: state => ({ ...state, ...{ finishedGame: true } }),
    [GET_TIME]: (state, action) => ({ ...state, ...{ time: action.payload } }),
    DEFAULT: state => state
}

export const GameReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}