import React from 'react';
import { auth } from '../../firebase/utils'
import { FaBars } from 'react-icons/fa'
/* import router from 'react-router-dom'; */
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = ({ toggle, currentUser }) => {

    const renderLogin = currentUser => {
        if (currentUser == "No current user") return false
        else return true
    }


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" >Gutenberg</NavLogo>
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
                            <NavLinks to="checkout"><i class="fas fa-shopping-basket"><span> 0</span></i></NavLinks>
                        </NavItem>

                        {renderLogin(currentUser) && (
                            <NavBtn onClick={() => auth.signOut()}>
                                <NavBtnLink>Logout</NavBtnLink>
                            </NavBtn>
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
