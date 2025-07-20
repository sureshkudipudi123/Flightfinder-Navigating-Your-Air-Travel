const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: ['user', 'admin', 'operator'], default: 'user' }
});

module.exports = mongoose.model('User', userSchema);
