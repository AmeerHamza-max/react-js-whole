import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Don't forget to import the CSS file

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to="/">
                    <div className="navbar__logo">
                        <h1>React Redux Shopping Cart</h1>
                    </div>
                </Link>
                <ul className="navbar__links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
