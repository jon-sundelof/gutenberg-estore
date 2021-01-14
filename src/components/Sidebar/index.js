import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="products" onClick={toggle}>
                        Products
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact Us
                    </SidebarLink>
                    <SidebarLink to="checkout" onClick={toggle}>
                        <i class="fas fa-shopping-basket"><span> 0</span></i>
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/login" onClick={toggle}>
                        Login
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

