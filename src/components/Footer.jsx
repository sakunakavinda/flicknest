import React from 'react';
import { MapPin, Phone, Mail, Camera, MessageCircle, Clock } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-content">

        {/* Column 1: Brand */}
        <div className="footer-brand">
          <img src={logo} alt="Flicknest Logo" className="footer-logo" />
          <p className="footer-tagline">
            Your personal cinema experience. Book your private screening today.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Social Media 1"><Camera size={20} /></a>
            <a href="#" aria-label="Social Media 2"><MessageCircle size={20} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#schedule">Schedule</a>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <MapPin size={16} />
            <span>123 Cinema Lane, Colombo</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={16} />
            <span>+94 77 123 4567</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={16} />
            <span>hello@flicknest.lk</span>
          </div>
        </div>

        {/* Column 4: Opening Hours */}
        <div className="footer-column">
          <h4>Opening Hours</h4>
          <div className="footer-contact-item">
            <Clock size={16} />
            <span>Mon – Sun: 9 AM – 12 AM</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2026 Flicknest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
