import React from 'react';
import Availability from './components/Availability';

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to Flicknest</h1>
      <p style={{ color: 'var(--text-secondary)' }}>Our premium dark mode theater is coming soon.</p>
      
      {/* We are bringing our Availability component onto the screen here! */}
      <Availability />
      
    </div>
  )
}

export default App;

