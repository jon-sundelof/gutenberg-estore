import React, { useState } from 'react';
/* import { auth } from '../../firebase/utils'
import firebase from "firebase";
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom'; */
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = ({ isOpen, toggle, currentUser, auth }) => {



    const renderLogin = currentUser => {
        if (currentUser == "No current user") return false
        else return true
    }



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
                    {/*   <SidebarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink> */}
                </SidebarMenu>

                {renderLogin(currentUser) && (
                    <>
                        <SideBtnWrap>
                            <SidebarLink to="/dashboard">Profile</SidebarLink>
                        </SideBtnWrap>

                        <SideBtnWrap onClick={() => auth.signOut()}>
                            <SidebarRoute to="/" style={{ marginTop: '35px' }} >Logout</SidebarRoute>
                        </SideBtnWrap>
                    </>
                )}
                {!renderLogin(currentUser) && (
                    <>
                        <SideBtnWrap>
                            <SidebarLink to="/signup">Sign Up</SidebarLink>
                        </SideBtnWrap>
                        <SideBtnWrap>
                            <SidebarRoute to="/login" style={{ marginTop: '35px' }}>Login</SidebarRoute>
                        </SideBtnWrap>
                    </>
                )}
                {/*   <SideBtnWrap>
                    <SidebarRoute to="/login" onClick={toggle}>
                        Login
                    </SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

