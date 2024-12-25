const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: String,
  subject: String,
  qualification: String,
});

module.exports = mongoose.model('Faculty', FacultySchema);
