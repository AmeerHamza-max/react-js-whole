import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>HamzaFlix</h3>
          <p>Your one-stop shop for amazing products. Shop with confidence!</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
            <li><NavLink to="/movie" activeClassName="active-link">Movies</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@hamzaflix.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <NavLink to="#"><i className="fab fa-facebook"></i></NavLink>
            <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 HamzaFlix. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
