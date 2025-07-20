import React, { useState } from 'react';
import axios from 'axios';

const AddFlightPage = () => {
  const [form, setForm] = useState({
    airline: '', departure: '', destination: '', date: '', time: '', price: ''
  });

  const submit = async () => {
    await axios.post('http://localhost:5000/api/flights', form, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    alert("Flight added");
  };

  return (
    <div>
      <h2>Add Flight</h2>
      <input placeholder="Airline" onChange={e => setForm({ ...form, airline: e.target.value })} />
      <input placeholder="Departure" onChange={e => setForm({ ...form, departure: e.target.value })} />
      <input placeholder="Destination" onChange={e => setForm({ ...form, destination: e.target.value })} />
      <input placeholder="Date" onChange={e => setForm({ ...form, date: e.target.value })} />
      <input placeholder="Time" onChange={e => setForm({ ...form, time: e.target.value })} />
      <input placeholder="Price" type="number" onChange={e => setForm({ ...form, price: e.target.value })} />
      <button onClick={submit}>Add Flight</button>
    </div>
  );
};

export default AddFlightPage;
