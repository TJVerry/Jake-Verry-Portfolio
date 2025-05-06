/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
const { onRequest } = require("firebase-functions/v2/https");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
let projectRef = db.collection("projects");

exports.getProjects = onRequest((req, res) => {
  projectRef.orderBy("order").get()
      .then((querySnapshot) => {
          const projects = [];
          querySnapshot.forEach((doc) => {
            projects.push(doc.data());
          });
          res.json(projects);
      })
      .catch((error) => {
          console.error("Error getting projects:", error);
          res.status(500).send(error);
      });
});