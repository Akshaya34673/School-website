const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }], // Array of image URLs
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Event', EventSchema);
