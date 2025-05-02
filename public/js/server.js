// filepath: server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Read the PORT environment variable

app.use(express.static('../')); // Serve static files from the current directory (where your index.html is)

// Health check endpoint
app.get('/healthz', (req, res) => {
    res.status(200).send('OK');
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});