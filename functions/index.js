/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true }); // Import CORS

admin.initializeApp();

exports.getProjects = functions.https.onRequest((req, res) => {
  cors(req, res, async () => { // Use CORS middleware
    try {
      const db = admin.firestore();
      const projectsCol = db.collection('projects');
      const snapshot = await projectsCol.orderBy('order').get();

      const projects = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).send("Error fetching projects");
    }
  });
});