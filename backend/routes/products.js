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

  // Abayas
  {
    id: 5,
    name: "Embroidered Luxury Black Abaya",
    title: "Embroidered Luxury Black Abaya",
    price: 3499,
    category: "abaya",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500",
    imageUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500",
    images: ["https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500"],
    description: "Graceful daily wear abaya with fine embroidery",
    is_popular: 1
  },
  {
    id: 6,
    name: "Modern Open Front Abaya",
    title: "Modern Open Front Abaya",
    price: 3899,
    category: "abaya",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500"],
    description: "Elegant minimalist open front modern abaya",
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

  // Wedding Dresses
  {
    id: 12,
    name: "Royal Crimson Bridal Lehenga",
    title: "Royal Crimson Bridal Lehenga",
    price: 34999,
    category: "wedding-dresses",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500",
    imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500",
    images: ["https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500"],
    description: "Exquisite heavy bridal wear with intricate zardozi work",
    is_popular: 1
  },
  {
    id: 13,
    name: "Pastel Wedding Maxi & Dupatta",
    title: "Pastel Wedding Maxi & Dupatta",
    price: 28999,
    category: "wedding-dresses",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
    images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500"],
    description: "Gorgeous pastel maxi gown for Walima or reception",
    is_popular: 1
  }
];

// Get categories with accurate item counts
router.get('/categories', (req, res) => {
  res.json({
    categories: [
      { id: 1, name: "Formal Dresses", slug: "formal-dresses", product_count: 2 },
      { id: 2, name: "Party Dresses", slug: "party-dresses", product_count: 2 },
      { id: 3, name: "Abaya", slug: "abaya", product_count: 2 },
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