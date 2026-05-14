import React from 'react';
import Hero from './components/Hero';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className="app-container">
      {/* 
        Notice: We replaced ALL the raw text with a single <Hero /> tag!
        The Availability component is now INSIDE Hero.jsx.
        This is the power of components — clean, organized code.
      */}
      <Hero />

      {/* The booking schedule appears right below the hero */}
      <Schedule />
    </div>
  )
}

export default App;


