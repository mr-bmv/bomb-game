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

const Navbar = () => {
  const { user } = useUserContext()

  const text = user.login || 'Войти'

  return (
    // <>
    //   <Nav>
    //     <div>
    //       {`Bomb 💣`}
    //     </div>
    //     <ul >
    //       <li >
    //         <NavLink exact to="/">Правила</NavLink>
    //       </li>
    //       <li >
    //         <NavLink exact to="/new_game">Новая Игра</NavLink>
    //       </li>
    //       <li >
    //         <NavLink exact to="/about">Обо мне</NavLink>
    //       </li>
    //       <li >
    //         <NavLink exact to="/login">{text}</NavLink>
    //       </li>
    //     </ul>
    //   </Nav>
    // </>
    <>
      <Nav>
        <NavLink to='/'>
        {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
        Bomb
      </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Правила
        </NavLink>
          <NavLink to='/new_game' activeStyle>
            Новая Игра
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