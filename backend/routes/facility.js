const express = require('express');
const Facility = require('../models/Facility');
const router = express.Router();

// Get all facilities
router.get('/', async (req, res) => {
  try {
    const facilities = await Facility.find();
    res.json(facilities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new facility
router.post('/', async (req, res) => {
  try {
    const newFacility = new Facility(req.body);
    await newFacility.save();
    res.status(201).json(newFacility);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
