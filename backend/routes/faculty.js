const express = require('express');
const Faculty = require('../models/Faculty');
const router = express.Router();

// Get all faculty
router.get('/', async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a faculty member
router.post('/', async (req, res) => {
  try {
    const newFaculty = new Faculty(req.body);
    await newFaculty.save();
    res.status(201).json(newFaculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
