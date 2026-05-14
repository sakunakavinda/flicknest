import React from 'react';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app-container">
      {/* 
        Notice: We replaced ALL the raw text with a single <Hero /> tag!
        The Availability component is now INSIDE Hero.jsx.
        This is the power of components — clean, organized code.
      */}
      <Hero />
    </div>
  )
}

export default App;


