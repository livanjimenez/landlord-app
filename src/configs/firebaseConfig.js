// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1_zbX2ievJzeXBzmed-rKyg_4_Nzwcc4",
  authDomain: "landlord-app-aea0d.firebaseapp.com",
  projectId: "landlord-app-aea0d",
  storageBucket: "landlord-app-aea0d.appspot.com",
  messagingSenderId: "1045506667073",
  appId: "1:1045506667073:web:e5ab6d8aa99caee2b98cc0",
  measurementId: "G-S9YNEY0V4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore();

// Initialize Auth
const auth = getAuth();

// Initialize Functions
const functions = getFunctions(app);

export { app, db, auth, analytics, functions };
