const express = require('express');
const FeeStructure = require('../models/FeeStructure');
const router = express.Router();

// Get all fees
router.get('/', async (req, res) => {
  try {
    const fees = await FeeStructure.find();
    res.json(fees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new fee structure
router.post('/', async (req, res) => {
  try {
    const newFee = new FeeStructure(req.body);
    await newFee.save();
    res.status(201).json(newFee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
