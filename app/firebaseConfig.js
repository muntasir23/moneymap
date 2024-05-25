
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAjOT0Jofpw1Ia-9-oZtr7U2wGIqiwRbVQ",
  authDomain: "moneymap-f0465.firebaseapp.com",
  projectId: "moneymap-f0465",
  storageBucket: "moneymap-f0465.appspot.com",
  messagingSenderId: "367699095533",
  appId: "1:367699095533:web:e0fc781d57d25cae5241e4",
  measurementId: "G-TMGEJFEF5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);