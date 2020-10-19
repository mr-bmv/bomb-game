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
        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
        Bomb
      </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to='/new_game' activeStyle>
            Новая Игра
        </NavLink>
          <NavLink to='/' activeStyle>
            Правила
        </NavLink>

          <NavLink to='/about' activeStyle>
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