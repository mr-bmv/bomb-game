import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useGameContext } from '../context/GameContext';
import { useUserContext } from '../context/UserContext';
import Game from './Game';

const GameFilter = () => {

  const [level, setLevel] = useState('')

  const { onNew } = useGameContext();
  const { user } = useUserContext();

  const startGame = (qty, size) => {
    onNew(qty, size)
    setLevel({ level: 'beginner' })
  }

  return (
    <div>
      <div>
        <h2>{`Кем себя считаешь ты${user.login ? `, ${user.login}` : ''}?`}</h2>
        {/* <NavLink onClick={() => getLevel(3, 5)} to={'/game'}>Новичек</NavLink>
        <NavLink onClick={() => onNew(20, 10)} to={'/game'}>Профессионал</NavLink>
        <NavLink onClick={() => onNew(40, 10)} to={'/game'}>Эксперт</NavLink>
        <NavLink onClick={() => onNew(75, 12)} to={'/game'}>Мегамозг</NavLink> */}

        <div onClick={() => startGame(3, 5)}>Новичек</div>
        <div onClick={() => startGame(20, 10)}>Профессионал</div>
        <div onClick={() => startGame(40, 10)}>Эксперт</div>
        <div onClick={() => startGame(75, 12)}>Мегамозг</div>
        {level ? <Game /> : null}
      </div>
    </div>
  )
}
export default GameFilter;