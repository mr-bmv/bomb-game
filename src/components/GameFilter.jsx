import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useGameContext } from '../context/GameContext';
import { useUserContext } from '../context/UserContext';
import Game from './Game';

const GameFilter = () => {

  const { field, onNew } = useGameContext();
  const { user, changeGame } = useUserContext();

  const getLevel = (qty, size) => {
    // setLevel({ level: true })
    onNew(qty, size)
  }

  // useEffect(() => {
  //   changeGame()
  // }, [])

  return (
    <div>
      <div>
        <h2>{`Кем себя считаешь ты${user.login ? `, ${user.login}` : ''}?`}</h2>
        <NavLink onClick={() => getLevel(3, 5)} to={'/game/1'}>Новичек</NavLink>
        <NavLink onClick={() => onNew(20, 10)} to={'/game/2'}>Профессионал</NavLink>
        <NavLink onClick={() => onNew(40, 10)} to={'/game/3'}>Эксперт</NavLink>
        <NavLink onClick={() => onNew(75, 12)} to={'/game/4'}>Мегамозг</NavLink>
      </div>
    </div>
  )
}
export default GameFilter;