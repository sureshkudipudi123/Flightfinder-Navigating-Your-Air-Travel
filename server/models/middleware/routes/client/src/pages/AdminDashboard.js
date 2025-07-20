import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/flights')
      .then(res => setFlights(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {flights.map(f => (
          <li key={f._id}>
            {f.airline} | {f.departure} → {f.destination}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
