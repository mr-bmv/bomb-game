import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRouter, SidebarWrapper, SideBtnWrap } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='new_game' onClick={toggle}>
                        Новая Игра
                    </SidebarLink>
                    <SidebarLink to='/' onClick={toggle} >
                        Правила
                    </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>
                        Обо мне
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to="login" onClick={toggle}>Вход</SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;