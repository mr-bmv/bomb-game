import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Context
import GameProvider from '../context/GameContext';
import UserProvider from '../context/UserContext';
import About from './About';

// Components
import Auth from './Auth';
import Game from './Game';
import Navbar from './Navbar';
import NewGame from './NewGame';
import NotFound from './NotFound';
import Rules from './Rules';


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
                    {/* <Route path='/game' component={Game} /> */}
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </GameProvider>
    </UserProvider>
)

export default Router;