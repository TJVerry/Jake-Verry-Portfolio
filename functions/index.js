const functions = require("firebase-functions");
const admin     = require("firebase-admin");
const cors      = require("cors")({ origin: ["https://jakeverry.com", "http://localhost:5000"] });

admin.initializeApp();
const db = admin.firestore();

exports.getProjects = functions.https.onRequest((req, res) => {
  // this handles OPTIONS and sets all of your CORS headers automatically
  cors(req, res, () => {
    // now your actual handler logic:
    if (req.method !== "GET") {
      return res.status(405).send("Method Not Allowed");
    }
    db.collection("projects")
      .get()
      .then(snapshot => {
        const projects = snapshot.docs.map(doc => doc.data());
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
});