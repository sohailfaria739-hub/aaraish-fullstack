const express = require('express');
const router = express.Router();

// Mock login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Basic mock check or auto-success for testing frontend flow
  if (email && password) {
    res.json({
      success: true,
      message: "Login successful",
      token: "mock-jwt-token-aaraish-12345",
      user: {
        id: 1,
        name: "Valued Customer",
        email: email
      }
    });
  } else {
    res.status(400).json({ error: "Please provide email and password" });
  }
});

// Mock registration route just in case signup is tied to it
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  
  res.json({
    success: true,
    message: "Registration successful",
    token: "mock-jwt-token-aaraish-12345",
    user: {
      id: 1,
      name: name || "New User",
      email: email
    }
  });
});

module.exports = router;