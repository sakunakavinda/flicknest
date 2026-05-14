import React from 'react';
import { Monitor, Volume2, Sofa, Popcorn, Wifi, Lock, Mic, Mic2 } from 'lucide-react';
import './Features.css';

const Features = () => {
  /*
    Lesson: Storing UI data in an array of objects.
    Each feature has an icon, a title, and a description.
    We store them in an array so we can .map() over them
    instead of writing 6 separate cards by hand.
  */
  const features = [
    {
      id: 1,
      icon: <Monitor size={32} />,
      title: "4K Projection",
      description: "Crystal-clear visuals by smart 4K projector on a massive 140-inch screen."
    },
    {
      id: 2,
      icon: <Volume2 size={32} />,
      title: "High Quality Sound System",
      description: "360° immersive surround sound that puts you inside the movie."
    },
    {
      id: 3,
      icon: <Sofa size={32} />,
      title: "Luxury Recliners",
      description: "Premium comfy seating with air conditioning."
    },
    {
      id: 4,
      icon: <Lock size={32} />,
      title: "Total Privacy",
      description: "A completely private space — just you and your guests."
    },
    {
      id: 5,
      icon: <Mic2 size={32} />,
      title: "Karaoke",
      description: "Enjoy to the fullest with the high quality karaoke system."
    },
    {
      id: 6,
      icon: <Popcorn size={32} />,
      title: "Food & Refreshments",
      description: "Enjoy a variety of snacks and beverages to complement your movie experience."
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-header">
        <h2>Why Choose <span className="gold-text">Flicknest</span>?</h2>
        <p className="features-subtitle">
          Every detail is crafted for the ultimate cinematic experience.
        </p>
      </div>

      {/*
        Lesson: We .map() again! Same pattern as Schedule.
        This time each item has an icon (which is JSX stored in a variable).
      */}
      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
