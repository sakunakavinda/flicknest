import React, { useState } from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import './Availability.css'; // We will create this next for scoped styles

const Availability = () => {
  // Lesson: This is React State! 
  // 'isAvailable' is the variable holding the current status.
  // 'setIsAvailable' is the function we use to change it.
  const [isAvailable, setIsAvailable] = useState(true);
  
  // This is a dummy end time. Later we will fetch this from the database.
  const busyEndTime = "10:30 PM";

  return (
    <div className="availability-container">
      {/* We use a ternary operator (condition ? true : false) to show different UI */}
      {isAvailable ? (
        <div className="status-badge available">
          <CheckCircle2 size={20} />
          <span>Available Now</span>
        </div>
      ) : (
        <div className="status-badge busy">
          <Clock size={20} />
          <span>Busy till {busyEndTime}</span>
        </div>
      )}

      {/* A temporary button just so we can test toggling the state! */}
      <button 
        className="toggle-test-btn" 
        onClick={() => setIsAvailable(!isAvailable)}
      >
        Simulate Booking Change
      </button>
    </div>
  );
};

export default Availability;
