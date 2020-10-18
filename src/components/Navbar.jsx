import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/UserContext';

function Navbar() {
  const { user } = useUserContext()

  const text = user.login || 'Войти'

  return (
    <nav>
      <div>
        {`Bomb 💣`}
      </div>
      <ul >
        <li >
          <NavLink exact to="/">Правила</NavLink>
        </li>
        <li >
          <NavLink exact to="/new_game">Новая Игра</NavLink>
        </li>
        <li >
          <NavLink exact to="/about">Обо мне</NavLink>
        </li>
        <li >
          <NavLink exact to="/login">{text}</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;