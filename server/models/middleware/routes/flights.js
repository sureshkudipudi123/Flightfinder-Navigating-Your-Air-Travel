const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const { departure, destination } = req.query;
  const flights = await Flight.find({ departure, destination });
  res.json(flights);
});

router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
  const flight = new Flight(req.body);
  await flight.save();
  res.json(flight);
});

router.put('/:id', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
  const updated = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;
