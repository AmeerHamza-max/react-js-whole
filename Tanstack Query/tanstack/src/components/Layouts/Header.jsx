import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles.css';

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <NavLink to="/" className="logo">HamzaReactQuery</NavLink>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/trad">FetchOld</NavLink></li>
            <li><NavLink to="/rq">FetchRQ</NavLink></li>
            <li><NavLink>Infinite Scroll</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
