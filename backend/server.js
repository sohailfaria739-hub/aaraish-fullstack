require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./db'); // initializes + seeds the database on first run

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');
const wishlistRoutes = require('./routes/wishlist');
const sellerRoutes = require('./routes/seller');
const sellersRoutes = require('./routes/sellers');
const couponRoutes = require('./routes/coupons');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true, name: 'Aaraish API' }));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/sellers', sellersRoutes);
app.use('/api/coupons', couponRoutes);

app.use((req, res) => res.status(404).json({ error: 'Route not found' }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong on the server' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Aaraish API running on http://localhost:${PORT}`));
