import React from 'react'

const Header = () => {
    return (
        <header className="headerMain">
            <h1>Gutenbergs e-store!</h1>
            <nav>
                <a href="login">Login</a>
                <a href="signup">Sign Up</a>
            </nav>
        </header>
    )
}

export default Header;