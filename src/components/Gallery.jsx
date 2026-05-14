import React from 'react';
import './Gallery.css';

const Gallery = () => {
  /*
    Lesson: Dynamic Asset Loading with Vite!
    Instead of writing 5 separate 'import img from ...' statements,
    Vite allows us to import an entire folder at once using import.meta.glob.
    This automatically grabs all .jpg and .png files inside the venue folder.
  */
  const imageFiles = import.meta.glob('../assets/venue/*.{png,jpg,jpeg}', { eager: true, import: 'default' });

  // Convert the object Vite gives us into an array of objects we can .map() over
  const photos = Object.values(imageFiles).map((url, index) => ({
    id: index + 1,
    url: url,
    alt: `Flicknest Venue Photo ${index + 1}`
  }));

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <h2>Inside <span className="gold-text">Flicknest</span></h2>
        <p className="gallery-subtitle">Take a tour of our private luxury spaces.</p>
      </div>

      <div className="gallery-grid">
        {/* We map over the array exactly like we did in Features and Schedule */}
        {photos.map((photo) => (
          <div className="gallery-item" key={photo.id}>
            <img src={photo.url} alt={photo.alt} loading="lazy" />
            {/* The overlay appears on hover for a premium effect */}
            <div className="gallery-overlay">
              <span>{photo.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
