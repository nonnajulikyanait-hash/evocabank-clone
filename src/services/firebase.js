import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase-ի config-ը (հետագայում կդնենք իսկական keys-երը)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "evocabank-clone.firebaseapp.com",
  projectId: "evocabank-clone",
  storageBucket: "evocabank-clone.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Սկզբնավորում ենք Firebase-ը
const app = initializeApp(firebaseConfig);

// Ակտիվացնում և export ենք անում Database-ը (Firestore) և Auth-ը
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;