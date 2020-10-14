import React from 'react'
import { useState } from 'react'
import { useUserContext } from '../context/UserContext'
import './Auth.css'

const Auth = () => {

    const { setLogin } = useUserContext()
    const [auth, setAuth] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        setLogin(auth)
    }

    const onChange = (login) => {
        setAuth({ user: login.target.value })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="text">Введите ник</div>&nbsp;
            <input type="text" onChange={(login) => onChange(login)} />
        </form>
    )
}
export default Auth;