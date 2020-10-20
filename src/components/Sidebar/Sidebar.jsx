import React from 'react'
import { CloseIcon, Icon, MySidebarLink, SidebarContainer, SidebarLink, SidebarMenu, SidebarRouter, SidebarWrapper, SideBtnWrap } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <MySidebarLink to='new_game' onClick={toggle}>
                        Новая Игра
                    </MySidebarLink>
                    <MySidebarLink to='rules' onClick={toggle} >
                        Правила
                    </MySidebarLink>
                    <MySidebarLink to='about' onClick={toggle}>
                        Обо мне
                    </MySidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to="login" onClick={toggle}>Вход</SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;