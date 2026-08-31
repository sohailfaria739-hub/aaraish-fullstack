const express = require('express');
const router = express.Router();

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Classic Silk Dress",
    title: "Classic Silk Dress",
    price: 4999,
    category: "formal-dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"],
    description: "Elegant formal silk dress",
    is_popular: 1
  },
  {
    id: 2,
    name: "Embroidered Abaya",
    title: "Embroidered Abaya",
    price: 3499,
    category: "abaya",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    images: ["https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500"],
    description: "Graceful daily wear abaya",
    is_popular: 1
  },
  {
    id: 3,
    name: "Traditional Khussas",
    title: "Traditional Khussas",
    price: 1999,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"],
    description: "Handcrafted festive footwear",
    is_popular: 1
  },
  {
    id: 4,
    name: "Glamorous Party Gown",
    title: "Glamorous Party Gown",
    price: 6999,
    category: "party-dresses",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
    imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500"],
    description: "Stunning look for evening events",
    is_popular: 1
  },
  {
    id: 5,
    name: "Designer Clutch Bag",
    title: "Designer Clutch Bag",
    price: 2499,
    category: "bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"],
    description: "Embellished party clutch",
    is_popular: 1
  },
  {
    id: 6,
    name: "Bridal Wedding Lehenga",
    title: "Bridal Wedding Lehenga",
    price: 24999,
    category: "wedding-dresses",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500",
    imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500",
    images: ["https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500"],
    description: "Exquisite bridal wear",
    is_popular: 1
  }
];

// Get categories
router.get('/categories', (req, res) => {
  res.json({
    categories: [
      { id: 1, name: "Formal Dresses", slug: "formal-dresses", product_count: 1 },
      { id: 2, name: "Abaya", slug: "abaya", product_count: 1 },
      { id: 3, name: "Shoes", slug: "shoes", product_count: 1 },
      { id: 4, name: "Party Dresses", slug: "party-dresses", product_count: 1 },
      { id: 5, name: "Bags", slug: "bags", product_count: 1 },
      { id: 6, name: "Wedding Dresses", slug: "wedding-dresses", product_count: 1 }
    ]
  });
});

// Get products with safe filtering
router.get('/', (req, res) => {
  const { category } = req.query;
  let filtered = ALL_PRODUCTS;
  
  if (category && category.trim() !== '') {
    filtered = ALL_PRODUCTS.filter(p => p.category === category);
    if (filtered.length === 0) {
      filtered = ALL_PRODUCTS; // Fallback so page never goes blank
    }
  }

  res.json({
    products: filtered,
    pagination: {
      total: filtered.length,
      totalPages: 1,
      currentPage: 1
    }
  });
});

router.get('/:id', (req, res) => {
  const product = ALL_PRODUCTS.find(p => p.id === Number(req.params.id)) || ALL_PRODUCTS[0];
  res.json({ product });
});

module.exports = router;