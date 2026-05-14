import React from 'react';
import { Play } from 'lucide-react';
import Availability from './Availability';
import heroBg from '../assets/hero-bg.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      {/* 
        This is the background image layer.
        We use an <img> tag inside a div instead of CSS background-image
        so Vite can properly bundle and optimize it.
      */}
      <div className="hero-bg">
        <img src={heroBg} alt="Flicknest private theater" />
        {/* This overlay div creates the dark gradient on top of the image */}
        <div className="hero-overlay"></div>
      </div>

      {/* 
        This is the content layer that sits ON TOP of the background.
        Everything here is positioned with CSS (position: relative + z-index).
      */}
      <div className="hero-content">
        {/* The Availability badge sits at the top of our hero */}
        <Availability />

        <h1 className="hero-title">
          Your Private
          <span className="hero-highlight"> Cinema </span>
          Experience
        </h1>

        <p className="hero-subtitle">
          Immerse yourself in luxury. 4K visuals, HD sound, 
          and total privacy — all reserved exclusively for you.
        </p>

        <button className="book-now-btn" id="book-now-btn">
          <Play size={18} />
          <span>Book Now</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
