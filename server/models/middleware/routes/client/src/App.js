import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserHome from './pages/UserHome';
import AdminDashboard from './pages/AdminDashboard';
import BookingsPage from './pages/BookingsPage';
import AddFlightPage from './pages/AddFlightPage';

const App = () => {
  const role = localStorage.getItem("role");

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {role === 'user' && (
        <>
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/bookings" element={<BookingsPage />} />
        </>
      )}
      {role === 'admin' && (
        <>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-flight" element={<AddFlightPage />} />
        </>
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
