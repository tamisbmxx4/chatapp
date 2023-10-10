// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRh9tXp5GuAWAGV5qgUUv0NW7jw76y68I",
  authDomain: "react-firestore-a1cc0.firebaseapp.com",
  projectId: "react-firestore-a1cc0",
  storageBucket: "react-firestore-a1cc0.appspot.com",
  messagingSenderId: "582313883582",
  appId: "1:582313883582:web:67e0b53b1a996146cfabef",
  measurementId: "G-3Y1REVE84K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)