const express = require('express');
const router = express.Router();
const Stock = require('../models/Stock');

// Endpoint pour vérifier la disponibilité des produits pour une date donnée
router.get('/availability', async (req, res) => {
  const { product, startDate, endDate } = req.query;

  try {
    const availability = await Stock.find({
      product: product,
      date: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    });

    res.json(availability);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
