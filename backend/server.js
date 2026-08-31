const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for your Vercel frontend
const corsOptions = {
  origin: ['https://aaraish-frontend-tau.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.json());

// ... (keep all your existing routes and app.listen code below)