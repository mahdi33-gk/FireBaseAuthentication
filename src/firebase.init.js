// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHRcM_TIWGGmuZNVHdzzWHdqo2YDKaMX8",
  authDomain: "simple2-54fd2.firebaseapp.com",
  projectId: "simple2-54fd2",
  storageBucket: "simple2-54fd2.firebasestorage.app",
  messagingSenderId: "489521457014",
  appId: "1:489521457014:web:cba6ea56de4698ea1afc57",
  measurementId: "G-HR77HR0EN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;