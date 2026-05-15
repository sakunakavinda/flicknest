import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
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
      <Pricing />
      <BookingForm />
      <Footer />
    </div>
  )
}

export default App;




