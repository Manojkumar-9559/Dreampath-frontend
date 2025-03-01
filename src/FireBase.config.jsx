// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDldk2jsH90SnlOIiUOxltLoPa8DTY2JH0",
  authDomain: "otp-project-81db2.firebaseapp.com",
  projectId: "otp-project-81db2",
  storageBucket: "otp-project-81db2.firebasestorage.app",
  messagingSenderId: "385423468404",
  appId: "1:385423468404:web:834369726d1f559297ee21",
  measurementId: "G-QF6FQMDYR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
