const express = require('express');
const Admission = require('../models/Admission');
const router = express.Router();

// Get all admission details
router.get('/', async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.json(admissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new admission criteria
router.post('/', async (req, res) => {
  try {
    const newAdmission = new Admission(req.body);
    await newAdmission.save();
    res.status(201).json(newAdmission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
