import React from 'react'
import { useState } from 'react'
import GameProvider from '../context/GameContext';
import Auth from './Auth';
import Game from './Game'

const App = () => {
    const [auth, setAuth] = useState('5');

    const payload = {
        size: 10,
        QTY: 5
    }

    const content = auth ? <Game payload={payload} /> : <Auth />;
    return (
        <GameProvider>
            <div>
                {content}
            </div>
        </GameProvider>
    )
}

export default App;