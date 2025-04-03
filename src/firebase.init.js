// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYc1UT2Anbyg5txFK0R81g39xy4ir6_PI",
  authDomain: "simple-68a76.firebaseapp.com",
  projectId: "simple-68a76",
  storageBucket: "simple-68a76.firebasestorage.app",
  messagingSenderId: "253842881422",
  appId: "1:253842881422:web:7fda6eea9ccc709c9182df",
  measurementId: "G-DS303T0ZM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;