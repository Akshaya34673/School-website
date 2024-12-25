const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // URL of the club's image
});

module.exports = mongoose.model('Club', ClubSchema);
