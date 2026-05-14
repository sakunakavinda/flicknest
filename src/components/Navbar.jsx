import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      {/* 
        The logo is imported just like the hero background image.
        We use the imported variable as the 'src' of the <img> tag.
      */}
      <div className="navbar-logo">
        <img src={logo} alt="Flicknest Logo" />
      </div>

      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="#schedule">Schedule</a>
        <a href="#book-now-btn" className="nav-book-btn">Book Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
