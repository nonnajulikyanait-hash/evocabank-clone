// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG2aJvhZobJ8CC_TuOeSd9FpMPo6F0eEA",
  authDomain: "evocabank-clone-d543a.firebaseapp.com",
  projectId: "evocabank-clone-d543a",
  storageBucket: "evocabank-clone-d543a.firebasestorage.app",
  messagingSenderId: "139644214686",
  appId: "1:139644214686:web:be24c5fe08d694ec390a8f",
  measurementId: "G-H4DXXTHRLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);