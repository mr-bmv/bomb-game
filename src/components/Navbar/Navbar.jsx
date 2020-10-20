import React from 'react'
import { useUserContext } from '../../context/UserContext';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const { user } = useUserContext()

  const text = user.login || 'Войти'

  return (
    <>
      <Nav>
        {/* <NavLink to='/'> */}
          <img src={require('../../img/logo60.png')} alt='logo' />
        {/* </NavLink> */}
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to='/new_game' >
            Новая Игра
        </NavLink>
          <NavLink to='/rules' >
            Правила
        </NavLink>

          <NavLink to='/about' >
            Обо мне
        </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>{text}</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar;