const mongoose = require('mongoose');

const FacilitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // URL of the facility image
});

module.exports = mongoose.model('Facility', FacilitySchema);
