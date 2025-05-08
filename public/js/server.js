// // filepath: server.js
// const express = require('express');
// const functions = require('firebase-functions');
// const app = express();
// // const port = process.env.PORT || 8080; // Read the PORT environment variable
// const functions = require('firebase-functions');

// app.use(express.static('../')); // Serve static files from the current directory (where your index.html is)

// // Health check endpoint
// app.get('/healthz', (req, res) => {
//     res.status(200).send('OK');
//   });

// // app.listen(port, () => {
// //   console.log(`Server listening at http://localhost:${port}`);
// // });

// exports.api = functions.https.onRequest(app);


const express = require('express');
const functions = require('firebase-functions');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// Health check endpoint
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);