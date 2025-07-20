const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  const booking = new Booking({ userId: req.user.id, flightId: req.body.flightId });
  await booking.save();
  res.json(booking);
});

router.get('/', auth, async (req, res) => {
  const bookings = await Booking.find({ userId: req.user.id });
  res.json(bookings);
});

router.delete('/:id', auth, async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ message: 'Booking canceled' });
});

module.exports = router;
