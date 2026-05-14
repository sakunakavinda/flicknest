import React from 'react';
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

  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-header">
        <Calendar size={28} />
        <h2>Today's Schedule</h2>
      </div>
      <p className="schedule-subtitle">View all booked time slots for today</p>

      {/* 
        Lesson: .map() — Rendering Lists!
        Instead of writing 4 separate <div>s by hand, we use .map()
        to LOOP through the array and generate a card for EACH booking.
      */}
      <div className="schedule-grid">
        {todaysBookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            {/* 
              The "key" prop is required by React when rendering lists.
              It helps React efficiently track which items changed.
            */}
            <div className="booking-time">
              <Clock size={16} />
              <span>{booking.startTime} — {booking.endTime}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
