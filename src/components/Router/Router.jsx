import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Context
import UserProvider from '../../context/UserContext';
import GameProvider from '../../context/GameContext';
import ModalProvider from '../../context/ModalContext';


// Components
import NewGame from '../Pages/NewGame/NewGame';
import Rules from '../Pages/Rules/Rules';
import NotFound from '../Pages/NotFound/NotFound';
import Auth from '../Pages/Auth/Auth';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import About from '../Pages/About/About';

import './Router.css'
import Modal from '../Modal/Modal';

const Router = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <ModalProvider >
      <UserProvider>
        <GameProvider>
          <BrowserRouter>
            <Modal />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Switch>
              <Route exact path='/' component={NewGame} />
              <Route path='/rules' component={Rules} />
              <Route path='/new_game' component={NewGame} />
              <Route path='/about' component={About} />
              <Route path='/login' component={Auth} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </GameProvider>
      </UserProvider>
    </ModalProvider>
  )
}

export default Router;