const express = require('express');
const router = express.Router();

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Classic Silk Dress",
    title: "Classic Silk Dress",
    price: 4999,
    category: "dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    description: "Elegant silk dress",
    is_popular: 1
  },
  {
    id: 2,
    name: "Casual Summer Outfit",
    title: "Casual Summer Outfit",
    price: 2999,
    category: "dresses",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
    imageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
    description: "Lightweight summer wear",
    is_popular: 1
  }
];

// Get categories
router.get('/categories', (req, res) => {
  res.json({
    categories: [
      { id: 1, name: "Dresses", slug: "dresses", product_count: 2 }
    ]
  });
});

// Get products
router.get('/', (req, res) => {
  res.json({
    products: ALL_PRODUCTS,
    pagination: {
      total: ALL_PRODUCTS.length,
      totalPages: 1,
      currentPage: 1
    }
  });
});

module.exports = router;