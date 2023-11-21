// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9dbd0.firebaseapp.com",
  projectId: "mern-estate-9dbd0",
  storageBucket: "mern-estate-9dbd0.appspot.com",
  messagingSenderId: "996602302621",
  appId: "1:996602302621:web:92e2eaee1c35abdb0e4474"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);