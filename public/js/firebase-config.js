// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB30IDKC5L4LT8WS4t0M2CWm7ez1kTnDcE",
  authDomain: "personal-portfolio-713c1.firebaseapp.com",
  projectId: "personal-portfolio-713c1",
  storageBucket: "personal-portfolio-713c1.firebasestorage.app",
  messagingSenderId: "289463007844",
  appId: "1:289463007844:web:af6b0ca59fadbee616fd71",
  measurementId: "G-KVHPGPGYE2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };