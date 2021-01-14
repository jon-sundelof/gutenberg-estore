import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { ButtonNav } from './ButtonNav';
import { Link } from 'react-router-dom';
import Logo from '../svgs/Logo';
import { auth } from '../../firebase/utils'

const Navbar = ({ currentUser }) => {
    /*  state = { clicked: false } */

    const [clickedstate, setClickedstate] = useState(false)

    const handleClick = () => setClickedstate(true)



    return (
        <nav className="navbar-items">
            <Link to="/" >{/* <h1 className="navbar-logo" >Gutenberg</h1> */} <Logo className="svg-logo" /></Link >
            <div className="menu-icon" onClick={handleClick}>
                <i className={clickedstate ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clickedstate ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url} >
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            {currentUser && (
                <ul>
                    <li>
                        <span onClick={() => auth.signOut()} >
                            Logout
                        </span>
                    </li>
                </ul>
            )}
            {!currentUser && (
                <ul className="signup-login-ul" >
                    <li className="signup-login-nav" >
                        <Link className="navlinks" to="/signup">
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link className="navlinks" to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            )}





            {/*       <Link to="/login" ><ButtonNav>Log In</ButtonNav></Link>
                <Link to="/signup" ><ButtonNav>Sign Up</ButtonNav></Link> */}

        </nav >
    )
}

export default Navbar;


/* class Navbar extends React.Component(props) {
    state = { clicked: false }

    handleClick = () => this.setState({ clicked: !this.state.clicked })

    render() {
        return (
            <nav className="navbar-items">
                <Link to="/" ><Logo className="svg-logo" /></Link >
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} >
                                    {item.title}
                                </a>
                            </li>

                        )
                    })}
                </ul>
                <Link to="/login" ><ButtonNav>Log In</ButtonNav></Link>
                <Link to="/signup" ><ButtonNav>Sign Up</ButtonNav></Link>

            </nav >
        )
    }
}

export default Navbar; */