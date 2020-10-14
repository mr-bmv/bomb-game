import React from 'react'
import { useState } from 'react'
import './Auth.css'

const Auth = () => {

    const [auth, setAuth] = useState({ login: '' })

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('----> ', auth)
    }

    const onChange = (word) => {
        setAuth({ login: word.target.value })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="text">Введите ник</div>&nbsp;
            <input type="text" onChange={(word) => onChange(word)} />
        </form>
    )
}
export default Auth;