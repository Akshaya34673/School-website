const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
  grade: { type: String, required: true },
  criteria: { type: String, required: true },
  age: { type: String, required: true }, // e.g., "3 years 6 months by 31st March"
});

module.exports = mongoose.model('Admission', AdmissionSchema);
