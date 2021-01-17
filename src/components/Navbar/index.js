import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase/utils'
import { FaBars } from 'react-icons/fa'
import Logo from '../svgs/Logo'
/* import router from 'react-router-dom'; */
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import firebase from "firebase";

const db = firebase.firestore();



const Navbar = ({ toggle, currentUser }) => {

    const [size, setSize] = useState(0)

    db.collection("users").doc(currentUser.uid).collection("cart").get().then(snap => {
        setSize(snap.size)
    })

    const renderLogin = currentUser => {
        if (currentUser == "No current user") return false
        else return true
    }


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" >Gutenberg E-Shirts</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/prodcuts" >Products</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="checkout"><i class="fas fa-shopping-basket"><span > {size}</span></i></NavLinks>
                        </NavItem>

                        {renderLogin(currentUser) && (
                            <>
                                <NavItem>
                                    <NavLinks to="/dashboard">Profile</NavLinks>
                                </NavItem>

                                <NavBtn onClick={() => auth.signOut()}>
                                    <NavBtnLink>Logout</NavBtnLink>
                                </NavBtn>
                            </>
                        )}
                        {!renderLogin(currentUser) && (
                            <>
                                <NavItem>
                                    <NavLinks to="/signup">Sign Up</NavLinks>
                                </NavItem>
                                <NavBtn>
                                    <NavBtnLink to="/login">Login</NavBtnLink>
                                </NavBtn>
                            </>
                        )}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar 
