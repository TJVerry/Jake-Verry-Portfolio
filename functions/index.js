/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

admin.initializeApp();

// exports.getProjects = onRequest({ cors: true }, async (req, res) => {
//   try {
//     const db = admin.firestore();
//     const projectsCol = db.collection('products'); // Changed collection name to 'products'
//     const snapshot = await projectsCol.orderBy('order').get();

//     const projects = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     // Include Firebase config in the response
//     const firebaseConfig = {
//       apiKey: process.env.portfolio.apikey,
//       authDomain: process.env.portfolio.authdomain,
//       projectId: process.env.portfolio.projectid,
//       storageBucket: process.env.portfolio.storagebucket,
//       messagingSenderId: process.env.portfolio.messagingsenderid,
//       appId: process.env.portfolio.appid,
//       measurementId: process.env.portfolio.measurementid
//     };

//     res.json({ projects: projects, firebaseConfig: firebaseConfig });
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     res.status(500).send('Error fetching projects');
//   }
// });