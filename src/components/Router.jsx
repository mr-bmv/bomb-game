import React from 'react'
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

import './Router.css'


const Router = () => (
    <UserProvider>
        <GameProvider>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Rules} />
                    <Route path='/new_game' component={NewGame} />
                    <Route path='/about' component={About} />
                    <Route path='/login' component={Auth} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </GameProvider>
    </UserProvider>
)

export default Router;