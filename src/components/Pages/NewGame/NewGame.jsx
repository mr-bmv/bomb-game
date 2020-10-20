import React, { useState } from 'react'
import { useGameContext } from '../../../context/GameContext';
import { useUserContext } from '../../../context/UserContext';
import Game from '../../Game';

import './NewGame.css'

const NewGame = () => {

  const [level, setLevel] = useState('')

  const { onNew } = useGameContext();
  const { user } = useUserContext();

  const startGame = (qty, size) => {
    onNew(qty, size)
    setLevel({ level: 'beginner' })
  }

  return (
    <div className='new-game'>
      <h2>{`Кем себя считаешь ты${user.login ? `, ${user.login}` : ''}?`}</h2>
      <div className='level-wrapper'>
        <div className='level' onClick={() => startGame(3, 5)}>Новичек</div>
        <div className='level' onClick={() => startGame(20, 10)}>Профессионал</div>
        <div className='level' onClick={() => startGame(40, 10)}>Эксперт</div>
        <div className='level' onClick={() => startGame(65, 12)}>Мегамозг</div>
      </div>
      <div className="game">{level ? <Game /> : null}</div>
    </div>
  )
}
export default NewGame;