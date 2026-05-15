import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
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
            Your private party and cinema experience. Book your time slot today.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/share/1DkjRJhLV2/?mibextid=wwXIfr"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/flicknest_kurunegala?igsh=MWUwenhqMzZuaGU2eg=="
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/94702197071" aria-label="WhatsApp">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="#features">Features</a>
          <a href="#schedule">Schedule</a>
          <a href="#booking">Booking</a>
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
            <span>Mon – Sun: 10 AM – 11 PM</span>
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
