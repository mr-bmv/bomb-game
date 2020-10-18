import React from 'react'
import { useUserContext } from '../../context/UserContext';

const Rules = () => {
    const { user} = useUserContext();

    return (
        <div>
            <h2>Правила игры</h2>
    <p>{`Тут будут правила игры для ${user.login || 'всех'}`}</p>
        </div>
    )
}

export default Rules;