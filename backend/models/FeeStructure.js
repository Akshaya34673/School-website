const mongoose = require('mongoose');

const FeeStructureSchema = new mongoose.Schema({
  grade: { type: String, required: true },
  fee: { type: Number, required: true },
});

module.exports = mongoose.model('FeeStructure', FeeStructureSchema);
