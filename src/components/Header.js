import React from 'react'

const Header = ({ number }) => {
    return (
        <header className="headerMain">
            <h1>Gutenbergs e-store!</h1>
            <nav>
                <a href="shopping-cart"
                    className="shopping-cart">
                    <i class="fas fa-shopping-basket">
                        <span>{number}</span>
                    </i>
                </a>
                <a href="login">Login</a>
                <a href="signup">Sign Up</a>
            </nav>
        </header>
    )
}

export default Header;