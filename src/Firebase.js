import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCDApp6qZG50gSx1jZj7ceh0AosxSvXNbk",
  authDomain: "etagammawebsite.firebaseapp.com",
  projectId: "etagammawebsite",
  storageBucket: "etagammawebsite.firebasestorage.app",
  messagingSenderId: "309290422114",
  appId: "1:309290422114:web:9c432af43b48ffec93a63b",
  measurementId: "G-67M6SFKNYW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };