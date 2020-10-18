import React from 'react'
import { useState } from 'react'
import { useUserContext } from '../context/UserContext'
import './Auth.css'

const Auth = () => {

  const { user, setLogin, onExit } = useUserContext()
  const [auth, setAuth] = useState('')

  const goToGame = (event) => {
    event.preventDefault();
    setLogin(auth)
  }

  const onChange = (login) => {
    setAuth(login.target.value)
  }

  const content = user.login
    ?
    (<div>
      <div>{`Вы вошли как ${user.login}`}</div>
      <div
        className="button"
        onClick={onExit}>Выйти</div>
    </div>
    )
    :
    (<form onSubmit={goToGame}>
      <div className="text">Введите ник</div>&nbsp;
      <input type="text" onChange={(login) => onChange(login)} />
    </form>
    );

  return (
    <div>{content}</div>

  )
}
export default Auth;