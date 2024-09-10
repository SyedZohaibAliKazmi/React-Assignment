// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdaUzpcvdwH2FFaz_YJkWK1JQ-DBMPdpY",
  authDomain: "e-commerce-d9c9f.firebaseapp.com",
  projectId: "e-commerce-d9c9f",
  storageBucket: "e-commerce-d9c9f.appspot.com",
  messagingSenderId: "539049084725",
  appId: "1:539049084725:web:e177eef9bc723e8b066e7c",
  measurementId: "G-68E3KRJFVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)


export {app, analytics, auth, db,storage}