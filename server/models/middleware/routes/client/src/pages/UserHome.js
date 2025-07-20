import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserHome = () => {
  const [flights, setFlights] = useState([]);
  const [query, setQuery] = useState({ departure: '', destination: '' });

  const searchFlights = async () => {
    const res = await axios.get(`http://localhost:5000/api/flights`, { params: query });
    setFlights(res.data);
  };

  const bookFlight = async (flightId) => {
    await axios.post('http://localhost:5000/api/bookings', { flightId }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    alert("Flight booked!");
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <input placeholder="From" onChange={e => setQuery({ ...query, departure: e.target.value })} />
      <input placeholder="To" onChange={e => setQuery({ ...query, destination: e.target.value })} />
      <button onClick={searchFlights}>Search</button>

      <ul>
        {flights.map(f => (
          <li key={f._id}>
            {f.airline} | {f.departure} → {f.destination}
            <button onClick={() => bookFlight(f._id)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserHome;
