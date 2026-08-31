const express = require('express');
const router = express.Router();

const ALL_PRODUCTS = [
  // Formal & Party Dresses
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
  {
    id: 3,
    name: "Glamorous Evening Gown",
    title: "Glamorous Evening Gown",
    price: 7999,
    category: "party-dresses",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
    imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500"],
    description: "Stunning look for evening party events",
    is_popular: 1
  },
  {
    id: 4,
    name: "Chic Sequin Party Dress",
    title: "Chic Sequin Party Dress",
    price: 5499,
    category: "party-dresses",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
    imageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
    images: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500"],
    description: "Sparkling party dress for celebrations",
    is_popular: 1
  },

  // Jewelry (Replaces Abaya)
  {
    id: 5,
    name: "Kundan Bridal Necklace Set",
    title: "Kundan Bridal Necklace Set",
    price: 12999,
    category: "jewelry",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
    images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500"],
    description: "Exquisite traditional kundan necklace set with earrings",
    is_popular: 1
  },
  {
    id: 6,
    name: "Sparkling Diamond-Style Choker",
    title: "Sparkling Diamond-Style Choker",
    price: 8999,
    category: "jewelry",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500"],
    description: "Elegant party wear crystal choker set",
    is_popular: 1
  },

  // Shoes
  {
    id: 7,
    name: "Traditional Golden Khussas",
    title: "Traditional Golden Khussas",
    price: 1999,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500",
    imageUrl: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500",
    images: ["https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500"],
    description: "Handcrafted festive ethnic footwear",
    is_popular: 1
  },
  {
    id: 8,
    name: "Designer Bridal Heels",
    title: "Designer Bridal Heels",
    price: 2999,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"],
    description: "Stunning embellished heels for weddings",
    is_popular: 1
  },
  {
    id: 9,
    name: "Casual Chic Block Heels",
    title: "Casual Chic Block Heels",
    price: 2499,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500",
    imageUrl: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500",
    images: ["https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500"],
    description: "Comfortable block heels for daily styling",
    is_popular: 0
  },

  // Bags
  {
    id: 10,
    name: "Royal Embroidered Party Clutch",
    title: "Royal Embroidered Party Clutch",
    price: 2499,
    category: "bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"],
    description: "Embellished wedding and party clutch bag",
    is_popular: 1
  },
  {
    id: 11,
    name: "Classic Leather Handbag",
    title: "Classic Leather Handbag",
    price: 3999,
    category: "bags",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500",
    imageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500",
    images: ["https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500"],
    description: "Spacious everyday luxury handbag",
    is_popular: 1
  },

  // Wedding Dresses (White Gowns)
  {
    id: 12,
    name: "Luxury White Lace Wedding Gown",
    title: "Luxury White Lace Wedding Gown",
    price: 39999,
    category: "wedding-dresses",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?w=500"],
    description: "Exquisite white lace bridal wedding gown with a flowing train",
    is_popular: 1
  },
  {
    id: 13,
    name: "Classic Princess White Wedding Dress",
    title: "Classic Princess White Wedding Dress",
    price: 34999,
    category: "wedding-dresses",
    image: "https://images.unsplash.com/photo-1546804773-81c53e43d1bc?w=500",
    imageUrl: "https://images.unsplash.com/photo-1546804773-81c53e43d1bc?w=500",
    images: ["https://images.unsplash.com/photo-1546804773-81c53e43d1bc?w=500"],
    description: "Stunning fairytale white wedding dress",
    is_popular: 1
  }
];

// Get categories with updated counts
router.get('/categories', (req, res) => {
  res.json({
    categories: [
      { id: 1, name: "Formal Dresses", slug: "formal-dresses", product_count: 2 },
      { id: 2, name: "Party Dresses", slug: "party-dresses", product_count: 2 },
      { id: 3, name: "Jewelry", slug: "jewelry", product_count: 2 },
      { id: 4, name: "Shoes", slug: "shoes", product_count: 3 },
      { id: 5, name: "Bags", slug: "bags", product_count: 2 },
      { id: 6, name: "Wedding Dresses", slug: "wedding-dresses", product_count: 2 }
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