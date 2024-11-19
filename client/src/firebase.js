// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5cc6d.firebaseapp.com",
  projectId: "mern-estate-5cc6d",
  storageBucket: "mern-estate-5cc6d.firebasestorage.app",
  messagingSenderId: "145153013169",
  appId: "1:145153013169:web:7f58a8ac97e904a4347990"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);