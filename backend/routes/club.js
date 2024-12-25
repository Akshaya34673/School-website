const express = require('express');
const Club = require('../models/Club');
const router = express.Router();

// Get all clubs
router.get('/', async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new club
router.post('/', async (req, res) => {
  try {
    const newClub = new Club(req.body);
    await newClub.save();
    res.status(201).json(newClub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
