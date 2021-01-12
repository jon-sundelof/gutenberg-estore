import React from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { ButtonNav } from './ButtonNav';
import { Link } from 'react-router-dom';
import Logo from '../svgs/Logo';


class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => this.setState({ clicked: !this.state.clicked })

    render() {
        return (
            <nav className="navbar-items">
                <Link to="/" >{/* <h1 className="navbar-logo" >Gutenberg</h1> */} <Logo className="svg-logo" /></Link >
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
                {/*       <Link to="/login" ><ButtonNav>Log In</ButtonNav></Link>
                <Link to="/signup" ><ButtonNav>Sign Up</ButtonNav></Link> */}

            </nav >
        )
    }
}

export default Navbar;