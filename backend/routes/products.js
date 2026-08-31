const express = require('express');
const router = express.Router();

const ALL_PRODUCTS = [
  // Formal Dresses
  {
    id: 1,
    name: "Classic Silk Formal Dress",
    title: "Classic Silk Formal Dress",
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
    name: "Embroidered Velvet Formal",
    title: "Embroidered Velvet Formal",
    price: 6500,
    category: "formal-dresses",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
    images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500"],
    description: "Sophisticated velvet formal wear",
    is_popular: 1
  },
  // Abayas
  {
    id: 3,
    name: "Embroidered Luxury Abaya",
    title: "Embroidered Luxury Abaya",
    price: 3499,
    category: "abaya",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500",
    imageUrl: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500",
    images: ["https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500"],
    description: "Graceful daily wear abaya with fine embroidery",
    is_popular: 1
  },
  {
    id: 4,
    name: "Classic Open Front Abaya",
    title: "Classic Open Front Abaya",
    price: 2999,
    category: "abaya",
    image: "https://images.unsplash.com/photo-1621532054637-291772421727?w=500",
    imageUrl: "https://images.unsplash.com/photo-1621532054637-291772421727?w=500",
    images: ["https://images.unsplash.com/photo-1621532054637-291772421727?w=500"],
    description: "Elegant minimalist open front abaya",
    is_popular: 1
  },
  // Shoes
  {
    id: 5,
    name: "Traditional Golden Khussas",
    title: "Traditional Golden Khussas",
    price: 1999,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"],
    description: "Handcrafted festive footwear",
    is_popular: 1
  },
  {
    id: 6,
    name: "Embellished Party Heels",
    title: "Embellished Party Heels",
    price: 2799,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"],
    description: "Stunning heels for events",
    is_popular: 0
  },
  // Party Dresses
  {
    id: 7,
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
  // Bags
  {
    id: 8,
    name: "Designer Embroidered Clutch",
    title: "Designer Embroidered Clutch",
    price: 2499,
    category: "bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"],
    description: "Embellished party clutch bag",
    is_popular: 1
  },
  // Wedding Dresses
  {
    id: 9,
    name: "Royal Bridal Wedding Lehenga",
    title: "Royal Bridal Wedding Lehenga",
    price: 32999,
    category: "wedding-dresses",
    image: "https://images.unsplash.com/photo-1594552072238-b8a3478be3e3?w=500",
    imageUrl: "https://images.unsplash.com/photo-1594552072238-b8a3478be3e3?w=500",
    images: ["https://images.unsplash.com/photo-1594552072238-b8a3478be3e3?w=500"],
    description: "Exquisite heavy bridal wear",
    is_popular: 1
  }
];

// Get categories
router.get('/categories', (req, res) => {
  res.json({
    categories: [
      { id: 1, name: "Formal Dresses", slug: "formal-dresses", product_count: 2 },
      { id: 2, name: "Abaya", slug: "abaya", product_count: 2 },
      { id: 3, name: "Shoes", slug: "shoes", product_count: 2 },
      { id: 4, name: "Party Dresses", slug: "party-dresses", product_count: 1 },
      { id: 5, name: "Bags", slug: "bags", product_count: 1 },
      { id: 6, name: "Wedding Dresses", slug: "wedding-dresses", product_count: 1 }
    ]
  });
});

// Get products with filtering
router.get('/', (req, res) => {
  const { category } = req.query;
  let filtered = ALL_PRODUCTS;
  
  if (category && category.trim() !== '') {
    filtered = ALL_PRODUCTS.filter(p => p.category === category);
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