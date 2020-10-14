import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GameProvider from '../context/GameContext';
import UserProvider from '../context/UserContext';
import App from './App';


const Router = () => (
    <UserProvider>
        <GameProvider>

            <App />
            {/* <BrowserRouter> */}
            {/* <Switch> */}
            {/* <Route exact path='/' component={StorePicker} /> */}
            {/* <Route path='/' component={App} /> */}
            {/* <Route component={NotFound} /> */}
            {/* </Switch> */}
            {/* </BrowserRouter> */}
        </GameProvider>
    </UserProvider>
)

export default Router;