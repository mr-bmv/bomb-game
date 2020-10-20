import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Context
import GameProvider from '../context/GameContext';
import UserProvider from '../context/UserContext';
import About from './Pages/About';

// Components
import NewGame from './Pages/NewGame';
import Rules from './Pages/Rules';
import NotFound from './Pages/NotFound';
import Auth from './Pages/Auth/Auth';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

import './Router.css'



const Router = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <UserProvider>
            <GameProvider>
                <BrowserRouter>
                    <Sidebar isOpen={isOpen} toggle={toggle} />
                    <Navbar toggle={toggle} />
                    <Switch>
                        <Route path='/rules' component={Rules} />
                        <Route path='/new_game' component={NewGame} />
                        <Route path='/about' component={About} />
                        <Route path='/login' component={Auth} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </GameProvider>
        </UserProvider>
    )
}

export default Router;