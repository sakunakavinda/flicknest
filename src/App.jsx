import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Features from './components/Features';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Schedule />
      <Features />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  )
}

export default App;




