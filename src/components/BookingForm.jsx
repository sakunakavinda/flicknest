import React, { useState } from 'react';
import { Upload, CheckCircle2 } from 'lucide-react';
import './BookingForm.css';

const BookingForm = () => {
  /*
    Lesson: Form State
    We use useState to keep track of what the user types into the form.
    For the file upload, we store the filename so we can display it.
  */
  const [formData, setFormData] = useState({
    name: '',
    time: '',
    hours: '2',
    contact: '',
    receiptName: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // This handles typing in text/number/time inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This specifically handles the file upload input
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData({ ...formData, receiptName: e.target.files[0].name });
    }
  };

  // This runs when the user clicks Submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    console.log("Booking Data:", formData);
    setIsSubmitted(true);
    
    // In a real app, you would send `formData` to a database here!
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-header">
        <h2>Reserve Your <span className="gold-text">Time Slot</span></h2>
        <p className="booking-subtitle">Fill out the details below to secure your private theater.</p>
      </div>

      {isSubmitted ? (
        <div className="success-message">
          <CheckCircle2 size={48} color="var(--status-available)" />
          <h3>Booking Request Received!</h3>
          <p>We will contact you shortly at {formData.contact} to confirm your reservation.</p>
          <button className="book-now-btn" onClick={() => setIsSubmitted(false)}>
            Book Another
          </button>
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="your name..." 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input 
                type="time" 
                id="time" 
                name="time" 
                required 
                value={formData.time}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="hours">Duration (Hours)</label>
              <select 
                id="hours" 
                name="hours" 
                value={formData.hours} 
                onChange={handleChange}
              >
                
                <option value="3">3 Hours</option>
                <option value="4">4 Hours</option>
                <option value="5">5+ Hours</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input 
              type="tel" 
              id="contact" 
              name="contact" 
              placeholder="+94 77 123 4567" 
              required 
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          {/* 
            Lesson: Custom File Upload Button
            Default file inputs look terrible. We hide the actual input with CSS,
            and style the <label> to look like a beautiful button instead!
            Clicking the label automatically clicks the hidden input.
          */}
          <div className="form-group">
            <label>Payment Receipt</label>
            <div className="file-upload-container">
              <input 
                type="file" 
                id="receipt" 
                name="receipt" 
                accept="image/*,.pdf" 
                className="hidden-file-input"
                onChange={handleFileChange}
                required
              />
              <label htmlFor="receipt" className="file-upload-button">
                {formData.receiptName ? (
                  <>
                    <CheckCircle2 size={20} color="var(--status-available)" />
                    <span style={{ color: 'var(--status-available)' }}>Receipt Selected</span>
                  </>
                ) : (
                  <>
                    <Upload size={20} />
                    <span>Upload Receipt Image</span>
                  </>
                )}
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </form>
      )}
    </section>
  );
};

export default BookingForm;
