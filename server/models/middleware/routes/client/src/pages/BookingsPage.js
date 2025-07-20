import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(res => setBookings(res.data));
  }, []);

  const cancelBooking = async (id) => {
    await axios.delete(`http://localhost:5000/api/bookings/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setBookings(bookings.filter(b => b._id !== id));
  };

  return (
    <div>
      <h2>Your Bookings</h2>
      <ul>
        {bookings.map(b => (
          <li key={b._id}>
            Flight ID: {b.flightId}
            <button onClick={() => cancelBooking(b._id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsPage;
