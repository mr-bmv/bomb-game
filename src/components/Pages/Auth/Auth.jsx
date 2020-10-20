import React from 'react'
import { useState } from 'react'
import { useUserContext } from '../../../context/UserContext';
import './Auth.css'

const Auth = () => {

  const { user, setLogin, onExit } = useUserContext();
  const [auth, setAuth] = useState('');

  const goToGame = (event) => {
    event.preventDefault();
    setLogin(auth)
  }

  const onChange = (login) => {
    setAuth(login.target.value)
  }

  const content = user.login
    ?
    (<div className="hello">
      <div className="text">Вы вошли как - <span>{user.login}</span></div>
      <div
        className="exit"
        onClick={onExit}>Выйти</div>
    </div>
    )
    :
    (<form onSubmit={goToGame}>
      <div className="text">Введите ник</div>
      <input type="text" onChange={(login) => onChange(login)} />
    </form>
    );

  return (
    <div className='wrapper'>{content}</div>

  )
}
export default Auth;