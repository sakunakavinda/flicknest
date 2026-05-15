import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/94702197071"
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
