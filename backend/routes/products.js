const express = require('express');
const router = express.Router();
const db = require('../db');

// Get categories
router.get('/categories', (req, res) => {
  try {
    res.json({
      categories: [
        { id: 1, name: "Dresses", slug: "dresses", product_count: 2 },
        { id: 2, name: "Formal Wear", slug: "formal-wear", product_count: 0 }
      ]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get products with filters & pagination
router.get('/', (req, res) => {
  try {
    const products = [
      {
        id: 1,
        name: "Classic Silk Dress",
        price: 4999,
        category: "dresses",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
        description: "Elegant silk dress",
        is_popular: 1
      },
      {
        id: 2,
        name: "Casual Summer Outfit",
        price: 2999,
        category: "dresses",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
        description: "Lightweight summer wear",
        is_popular: 1
      }
    ];

    res.json({
      products,
      pagination: {
        total: products.length,
        totalPages: 1,
        currentPage: 1
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;