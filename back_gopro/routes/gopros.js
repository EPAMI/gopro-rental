const express = require('express');
const router = express.Router();
const GoPro = require('../models/GoPro');

// GET all GoPros
router.get('/', async (req, res) => {
  try {
    const gopros = await GoPro.find();
    res.json(gopros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new GoPro
router.post('/', async (req, res) => {
  const { model, pricePerDay } = req.body;
  const newGoPro = new GoPro({ model, pricePerDay });

  try {
    const savedGoPro = await newGoPro.save();
    res.status(201).json(savedGoPro);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
