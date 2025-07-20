const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: String,
  flightId: String,
  status: { type: String, default: 'booked' }
});

module.exports = mongoose.model('Booking', bookingSchema);
