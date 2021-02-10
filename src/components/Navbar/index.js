import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase/utils'
import { FaBars } from 'react-icons/fa'
import Logo from '../svgs/Logo'
/* import router from 'react-router-dom'; */
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import firebase from "firebase";

const db = firebase.firestore();



const Navbar = ({ toggle, currentUser }) => {

    const [list, setList] = useState([])
    const [products, setProducts] = useState([])

    console.log(currentUser.uid)

    useEffect(() => {
        let array = []
        const getProducts = async () => {
            await db.collection("users").doc(currentUser.uid).collection("cart").get().then(function (item) {
                item.forEach(function (doc) {
                    array.push(doc.data())
                });
            });
            setProducts(array)

        }
        getProducts()

        console.log(products)

    }, [])

    let amountSuff = 0;

    products.map(function (item) {

        return amountSuff += item.amount;


    })


    console.log(amountSuff)

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
                            <NavLinks to="checkout"><i className="fas fa-shopping-basket"><span> {amountSuff}</span></i></NavLinks>
                        </NavItem>

                        {renderLogin(currentUser) && (
                            <>
                                <NavItem>
                                    <NavLinks to="/dashboard">Profile</NavLinks>
                                </NavItem>

                                <NavBtn onClick={() => auth.signOut()}>
                                    <NavBtnLink to="/" >Logout</NavBtnLink>
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
