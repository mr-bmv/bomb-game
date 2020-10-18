import React, { useEffect, useState } from 'react'
import { useGameContext } from '../context/GameContext';
import { useUserContext } from '../context/UserContext';
import Game from './Game';
import GameFilter from './GameFilter';

const NewGame = () => {
  const [level, setLevel] = useState('');

  const { field, onNew } = useGameContext();
  const { user } = useUserContext();

  const getLevel = (qty, size) => {
    setLevel({ level: true })
    onNew(qty, size)
  }

  useEffect(() => {
    console.log("Effect")
  }, [field.finishedGame])

  const content = field.newGame ?
    <Game />
    :
    <GameFilter />

  return (
    <div>
      <GameFilter />
    </div>
  )
}
export default NewGame;