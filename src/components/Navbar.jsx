import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  /*
    Lesson: State for toggling the mobile menu!
    Same useState pattern as Availability — but this time
    it controls whether the mobile menu is open or closed.
  */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This function closes the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar" id="navbar">
      <div 
        className="navbar-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: 'pointer' }}
      >
        <img src={logo} alt="Flicknest Logo" />
      </div>

      {/* 
        Hamburger Button — only visible on mobile (hidden via CSS on desktop).
        It toggles isMenuOpen between true and false.
      */}
      <button 
        className="hamburger-btn" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {/* Show X icon when open, Menu icon when closed */}
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 
        The className changes dynamically based on isMenuOpen state.
        When isMenuOpen is true, we add the "open" class → CSS makes it visible.
      */}
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#schedule" onClick={handleLinkClick}>Schedule</a>
        <a href="#features" onClick={handleLinkClick}>Features</a>
        <a href="#gallery" onClick={handleLinkClick}>Gallery</a>
        <a href="#booking" onClick={handleLinkClick}>Booking</a>
        
        
      </div>
    </nav>
  );
};

export default Navbar;
