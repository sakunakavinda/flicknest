import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import './Schedule.css';

const Schedule = () => {
  /*
    Lesson: Arrays of Objects!
    This is our mock data — a list of today's bookings.
    Later, this will come from a database. For now, we hardcode it.
    Each booking is an "object" (a thing with properties).
  */
  const todaysBookings = [
    { id: 1, customerName: "Perera Family",  startTime: "10:00 AM", endTime: "12:30 PM", movie: "Inception" },
    { id: 2, customerName: "Silva Group",    startTime: "1:00 PM",  endTime: "3:30 PM",  movie: "Interstellar" },
    { id: 3, customerName: "Fernando Party", startTime: "4:00 PM",  endTime: "6:00 PM",  movie: "The Dark Knight" },
    { id: 4, customerName: "Jayasuriya",     startTime: "7:00 PM",  endTime: "9:30 PM",  movie: "Oppenheimer" },
  ];

  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);

  // A simple function to generate mock bookings based on the date so it looks dynamic!
  const getBookingsForDate = (dateStr) => {
    const allBookings = [
      { id: 1, customerName: "Perera Family",  startTime: "10:00 AM", endTime: "12:30 PM", movie: "Inception" },
      { id: 2, customerName: "Silva Group",    startTime: "1:00 PM",  endTime: "3:30 PM",  movie: "Interstellar" },
      { id: 3, customerName: "Fernando Party", startTime: "4:00 PM",  endTime: "6:00 PM",  movie: "The Dark Knight" },
      { id: 4, customerName: "Jayasuriya",     startTime: "7:00 PM",  endTime: "9:30 PM",  movie: "Oppenheimer" },
      { id: 5, customerName: "Wickrama",       startTime: "08:00 AM", endTime: "10:00 AM", movie: "Avengers" },
      { id: 6, customerName: "De Silva",       startTime: "11:00 AM", endTime: "02:00 PM", movie: "Avatar" },
      { id: 7, customerName: "Rajapaksha",     startTime: "03:00 PM", endTime: "05:00 PM", movie: "Dune" },
    ];
    
    // Create a deterministic but varied schedule for different dates
    const charCodeSum = dateStr.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const numBookings = (charCodeSum % 4) + 1; // 1 to 4 bookings
    const startIndex = charCodeSum % (allBookings.length - numBookings + 1);
    
    // Always show exactly what's hardcoded for today, otherwise show mock data
    if (dateStr === today) {
      return todaysBookings;
    }
    return allBookings.slice(startIndex, startIndex + numBookings);
  };

  const currentBookings = getBookingsForDate(selectedDate);

  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-top">
        <div>
          <div className="schedule-header">
            <Calendar size={28} />
            <h2>{selectedDate === today ? "Today's Schedule" : `Schedule for ${selectedDate}`}</h2>
          </div>
          <p className="schedule-subtitle">
            View all booked time slots for {selectedDate === today ? "today" : "the selected date"}
          </p>
        </div>
        
        <div className="date-picker-container">
          <label htmlFor="schedule-date" style={{ display: 'none' }}>Select Date</label>
          <input 
            type="date" 
            id="schedule-date"
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            min={today}
          />
        </div>
      </div>

      {/* 
        Lesson: .map() — Rendering Lists!
        Instead of writing 4 separate <div>s by hand, we use .map()
        to LOOP through the array and generate a card for EACH booking.
      */}
      <div className="schedule-list">
        {currentBookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            {/* 
              The "key" prop is required by React when rendering lists.
              It helps React efficiently track which items changed.
            */}
            <div className="booking-time">
              <Clock size={16} className="booking-icon" />
              <span>{booking.startTime} — {booking.endTime}</span>
            </div>
            <div className="booking-status">
              <span className="status-badge">Booked</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
