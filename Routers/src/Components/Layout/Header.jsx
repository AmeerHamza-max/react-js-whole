import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <section>
          <div>
            <div>
              <p>Get the Membership 30-day return or refund guarantee</p>
            </div>
            <div>
              <NavLink to="#">SIGN IN</NavLink>
              <NavLink to="#">SIGN UP</NavLink>
            </div>
          </div>
        </section>
        <div>
          <div>
            <NavLink href="#">HamzaFlix</NavLink>
          </div>
          <nav>
            <ul>
              <li><NavLink to="/" className={({isActive})=>{
                return isActive ? "active-link":"navLink"
              }}>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/movie">Movie</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      
      </header>
    </div>
  )
}

export default Header
