const path = require('path');

// ... (keep your existing express app, cors, and API routes like /api/auth above this)

// Serve frontend static files in production
const frontendDist = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendDist));

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendDist, 'index.html'));
});